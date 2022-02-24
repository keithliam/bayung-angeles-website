import React, { useEffect, useRef, useState } from 'react';
import Sticky from 'react-stickynode';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import Img from 'react-cool-img';
import { prefix } from 'inline-style-prefixer';
import classNames from 'classnames';
import { registerScrollResizeEventListeners } from '../../helpers';

import { allPhotos, getTopicAndPhoto } from '../../data/imagine';

const lastPhotoIndex = allPhotos.length - 1;

const MAX_SCALE_UP = 0.05;

const ImagineSection = () => {
  const sectionRef = useRef();
  const [photoIndex, setPhotoIndex] = useState(0);
  const [entireSectionInView, setEntireSectionInView] = useState(false);
  const [backgroundScale, setBackgroundScale] = useState(1);

  useEffect(() => {
    const handleScrollResizeEvent = () => {
      if (sectionRef.current) {
        const viewportHeight = window.innerHeight;
        const { top, bottom } = sectionRef.current.getBoundingClientRect();

        const newPhotoIndex = (() => {
          const nthPhoto = Math.floor(-top / viewportHeight);
          if (nthPhoto < 0) return 0;
          if (nthPhoto > lastPhotoIndex) return lastPhotoIndex;
          return nthPhoto;
        })();
        setPhotoIndex(newPhotoIndex);

        const scrolledPastSectionTop = top < 0;
        setEntireSectionInView(scrolledPastSectionTop && bottom - viewportHeight > 0);

        const newScale = scrolledPastSectionTop
          ? 1 + ((-top - viewportHeight * newPhotoIndex) / viewportHeight) * MAX_SCALE_UP // Reset scale of every photo
          : 1;
        const roundedScale = Math.floor(newScale * 1000) / 1000;
        setBackgroundScale(roundedScale);
      }
    };
    return registerScrollResizeEventListeners(handleScrollResizeEvent);
  }, []);

  const {
    topic: { highlightText, extraText },
    photo: { title, source, link, credit, creditLink },
  } = getTopicAndPhoto(photoIndex);

  return (
    <div
      ref={sectionRef}
      id="imagine"
      className="imagine"
      style={prefix({ height: `${(allPhotos.length + 1) * 100}vh` })}
    >
      <Sticky bottomBoundary="#imagine" innerClass="imagine-content">
        <SwitchTransition mode="out-in">
          <CSSTransition key={title} classNames="bg-fade" timeout={500}>
            <Img
              className={classNames('imagine-bg', { 'bg-show': entireSectionInView })}
              style={prefix({ transform: `scale(${backgroundScale})` })}
              src={source}
              alt={title}
            />
          </CSSTransition>
        </SwitchTransition>
        <span className="imagine-text">Imagine Angeles City where...</span>
        <SwitchTransition mode="out-in">
          <CSSTransition key={highlightText} classNames="fade" timeout={750}>
            <div className="topic">
              <span className="highlight">{highlightText}</span> {extraText}
            </div>
          </CSSTransition>
        </SwitchTransition>
        <div className={classNames('photo-info', { 'info-show': entireSectionInView })}>
          <SwitchTransition mode="out-in">
            <CSSTransition key={title} classNames="fade" timeout={1000}>
              <div>
                {title}
                {credit && (
                  <>
                    {' '}
                    by <a href={creditLink}>{credit}</a>
                  </>
                )}
              </div>
            </CSSTransition>
          </SwitchTransition>
          <a className="learn-more-link" href={link} target="_blank" rel="noreferrer">
            Learn More
          </a>
        </div>
      </Sticky>
    </div>
  );
};

export default ImagineSection;
