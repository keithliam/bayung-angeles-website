import { useEffect, useRef, useState } from 'react';
import { useScroll, useDimensions } from 'react-viewport-utils';
import Sticky from 'react-stickynode';
import { SwitchTransition, CSSTransition } from "react-transition-group";
import classNames from 'classnames';
import bloodBankPhoto from '../../assets/images/angeles-blood-bank.png'
import dialysisCenterPhoto from '../../assets/images/angeles-dialysis-center.png'
import foodStripPhoto from '../../assets/images/angeles-food-strip.png'
import monumentPhoto from '../../assets/images/angeles-monument.png'
import projectBalePhoto from '../../assets/images/project-bale.png'

const topics = [
  {
    highlightText: 'Health facilities',
    extraText: 'are well funded.',
    photos: [
      {
        title: 'Proposed Ángeles Blood Bank',
        source: bloodBankPhoto,
        link: 'google.com'
      },
      {
        title: 'Proposed Ángeles Dialysis',
        source: dialysisCenterPhoto,
        link: 'google.com'
      },
    ]
  },
  {
    highlightText: 'Urban planning',
    extraText: 'is not neglected.',
    photos: [
      {
        title: 'Angeles City International Food Strip',
        credit: 'Ar. Paul Maiquez',
        creditLink: 'google.com',
        source: foodStripPhoto,
        link: 'google.com'
      },
      {
        title: 'Báyung Ángeles Livelihood Estates',
        credit: 'Ar. Paul Maiquez',
        creditLink: 'google.com',
        source: projectBalePhoto,
        link: 'google.com'
      },
      {
        title: 'City of Angels Monument',
        credit: 'Ar. Paul Maiquez',
        creditLink: 'google.com',
        source: monumentPhoto,
        link: 'google.com'
      },
    ]
  },
]
const allPhotos = topics.reduce((acc, topic) => acc.concat(topic.photos), []);
const topicIndexByPhotoIndex = topics.reduce((acc, topic, index) => acc.concat(Array(topic.photos.length).fill(index)), []);
const getTopicAndPhoto = photoIndex => ({
  topic: topics[topicIndexByPhotoIndex[photoIndex]],
  photo: allPhotos[photoIndex],
});

const ImagineSection = () => {
  const containerRef = useRef();
  const scroll = useScroll();
  const dimensions = useDimensions();

  const [containerRect, setContainerRect] = useState({});

  const viewportHeight = dimensions.height;
  const { top: containerTop = 0, bottom: containerBottom = 0 } = containerRect;

  const photoIndex = (() => {
    if (scroll.y <= containerTop) return 0;
    if (containerBottom - viewportHeight <= scroll.y) return allPhotos.length - 1;
    return Math.floor((scroll.y - containerTop) / viewportHeight);
  })();
  const {
    topic: { highlightText, extraText },
    photo: { title, source, link, credit, creditLink },
  } = getTopicAndPhoto(photoIndex)

  const backgroundAppearAt = containerTop;
  const entireSectionInView = backgroundAppearAt <= scroll.y && scroll.y < containerBottom - viewportHeight;
  const currentPhotoTop = backgroundAppearAt + (viewportHeight * photoIndex);
  const backgroundScale = entireSectionInView
    ? 100 + (((scroll.y - currentPhotoTop) / 50000) * 100) // Resets scale of every photo
    : 100;

  useEffect(() => {
    setContainerRect(containerRef.current.getBoundingClientRect());
  }, []);

  return (
    <div ref={containerRef} className="imagine" style={{ height: `${(allPhotos.length + 1) * 100}vh` }}>
      <Sticky top={0} bottomBoundary={containerBottom} innerClass="imagine-content">
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={title}
            classNames="bg-fade"
            timeout={1000}
          >
            <img
              className={classNames('imagine-bg', { 'bg-show': entireSectionInView })}
              style={{ transform: `scale(${backgroundScale}%)` }}
              src={source}
              alt={title}
            />
          </CSSTransition>
        </SwitchTransition>
        <span className="imagine-text">Imagine Angeles City where...</span>
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={highlightText}
            classNames="fade"
            timeout={2000}
          >
            <div className="topic">
              <span className="highlight">{highlightText}</span> {extraText}
            </div>
          </CSSTransition>
        </SwitchTransition>
        <div className={classNames('photo-info', { 'info-show': entireSectionInView })}>
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={title}
              classNames="fade"
              timeout={2000}
            >
              <div>{title}{credit && <> by <a href={creditLink}>{credit}</a></>}</div>
            </CSSTransition>
          </SwitchTransition>
          <a href={link}>Learn More</a>
        </div>
      </Sticky>
    </div>
  );
}

export default ImagineSection;
