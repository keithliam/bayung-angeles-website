import React, { useEffect, useRef, useState } from 'react';
import Sticky from 'react-stickynode';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import Img from 'react-cool-img';
import { prefix } from 'inline-style-prefixer';
import classNames from 'classnames';
import { PhotoCredit, WingText } from '../../components';
import { registerScrollResizeEventListeners } from '../../helpers';
import baIllustration from '../../assets/images/ba-illus.jpg';
import logoWhite from '../../assets/images/ba-logo-mini-white.png';

import { topics } from '../../data/pillars';

const lastTopicIndex = topics.length - 1;

const PillarsSection = ({ id = 'pillars' }) => {
  const sectionRef = useRef();
  const [topicIndex, setTopicIndex] = useState(0);
  const [entireSectionInView, setEntireSectionInView] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [backgroundScale, setBackgroundScale] = useState(1);

  useEffect(() => {
    const handleScrollResizeEvent = () => {
      if (sectionRef.current) {
        const viewportHeight = window.innerHeight;
        const { top, bottom } = sectionRef.current.getBoundingClientRect();

        const newTopicIndex = (() => {
          const nthTopic = Math.floor(-top / viewportHeight);
          if (nthTopic < 0) return 0;
          if (nthTopic > lastTopicIndex) return lastTopicIndex;
          return nthTopic;
        })();
        setTopicIndex(newTopicIndex);

        const scrolledPastSectionTop = top < 0;
        const newEntireSectionInView = scrolledPastSectionTop && bottom - viewportHeight > 0;
        setEntireSectionInView(newEntireSectionInView);

        setShowLogo(newEntireSectionInView && top + viewportHeight * 0.2 < 0);

        const newScale = scrolledPastSectionTop ? 1 + -top / 50000 : 1;
        const roundedScale = Math.floor(newScale * 1000) / 1000;
        setBackgroundScale(roundedScale);
      }
    };
    return registerScrollResizeEventListeners(handleScrollResizeEvent);
  }, []);

  const { title, description } = topics[topicIndex];

  return (
    <div ref={sectionRef} id={id} className="pillars">
      <Sticky bottomBoundary={`#${id}`} innerClass="pillars-content">
        <img
          className={classNames('pillars-bg', { 'bg-show': entireSectionInView })}
          style={prefix({ transform: `scale(${backgroundScale})` })}
          src={baIllustration}
          alt="illustration"
        />
        <Img
          className={classNames('pillars-bg-logo', { 'bg-show': showLogo })}
          src={logoWhite}
          alt="illustration"
        />
        <PhotoCredit
          className={classNames('pillars-photo-credit', { 'credit-show': showLogo })}
          name="Brandon Evangelista"
          link="https://bit.ly/bayung-angeles-portfolio-brandon"
        />
        <div className="topic">
          <span className="highlight">Our </span>
          <SwitchTransition mode="out-in">
            <CSSTransition key={title} classNames="scroll" timeout={500}>
              <WingText className="title" text={title} wingPosition="end" />
            </CSSTransition>
          </SwitchTransition>
        </div>
        <SwitchTransition mode="out-in">
          <CSSTransition key={title} classNames="fade" timeout={1250}>
            <span className="description">{description}</span>
          </CSSTransition>
        </SwitchTransition>
      </Sticky>
    </div>
  );
};

export default PillarsSection;
