import React, { forwardRef } from 'react';
import useMeasure from 'react-use-measure';
import { useDimensions } from 'react-viewport-utils';
import mergeRefs from 'merge-refs';
import Sticky from 'react-stickynode';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { prefix } from 'inline-style-prefixer';
import classNames from 'classnames';
import { PhotoCredit, WingText } from '../../components';
import baIllustration from '../../assets/images/ba-illus.png';
import logoWhite from '../../assets/images/logo-minimal-white.png';

import { topics } from '../../data/pillars';

const lastTopicIndex = topics.length - 1;

const PillarsSection = (props, ref) => {
  const [sectionRef, bounds] = useMeasure({ scroll: true });
  const dimensions = useDimensions();

  const viewportHeight = dimensions.height;
  const { top, bottom } = bounds;

  const topicIndex = (() => {
    const nthTopic = Math.floor(-top / viewportHeight);
    if (nthTopic < 0) return 0;
    if (nthTopic > lastTopicIndex) return lastTopicIndex;
    return nthTopic;
  })();
  const { title, description } = topics[topicIndex];

  const scrolledPastSectionTop = top < 0;
  const entireSectionInView = scrolledPastSectionTop && bottom - viewportHeight > 0;
  const showLogo = entireSectionInView && top + viewportHeight * 0.2 < 0;
  const backgroundScale = scrolledPastSectionTop ? 1 + -top / 50000 : 1;

  return (
    <div ref={mergeRefs(ref, sectionRef)} id="pillars" className="pillars">
      <Sticky bottomBoundary="#pillars" innerClass="pillars-content">
        <img
          className={classNames('pillars-bg', { 'bg-show': entireSectionInView })}
          style={prefix({ transform: `scale(${backgroundScale})` })}
          src={baIllustration}
          alt="illustration"
        />
        <img
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

export default forwardRef(PillarsSection);
