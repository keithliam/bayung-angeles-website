import React from 'react';
import useMeasure from 'react-use-measure';
import { useScroll, useDimensions } from 'react-viewport-utils';
import Sticky from 'react-stickynode';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import classNames from 'classnames';
import { PhotoCredit, WingText } from '../../components';
import baIllustration from '../../assets/images/ba-illus.png';
import logoWhite from '../../assets/images/logo-minimal-white.png';

import { topics } from '../../data/pillars';

const PillarsSection = () => {
  const [ref, bounds] = useMeasure({ scroll: true });
  const dimensions = useDimensions();

  const viewportHeight = dimensions.height;
  const { top, bottom } = bounds;

  const topicIndex = (() => {
    if (-viewportHeight - top < 0) return 0;
    if (bottom - viewportHeight < 0) return topics.length - 1;
    return Math.floor(-top / viewportHeight);
  })();
  const { title, descriptionLine1, descriptionLine2 } = topics[topicIndex];

  const scrolledPastSectionTop = top < 0;
  const entireSectionInView = scrolledPastSectionTop && bottom - viewportHeight > 0;
  const showLogo = entireSectionInView && top + viewportHeight * 0.2 < 0;
  const backgroundScale = scrolledPastSectionTop ? 100 + (-top / 50000) * 100 : 100;

  return (
    <div ref={ref} id="pillars" className="pillars">
      <Sticky bottomBoundary="#pillars" innerClass="pillars-content">
        <img
          className={classNames('pillars-bg', { 'bg-show': entireSectionInView })}
          style={{ transform: `scale(${backgroundScale}%)` }}
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
          title=""
          name="Brandon Evangelista"
          link="#"
        />
        <div className="topic">
          <span className="highlight">Our </span>
          <SwitchTransition mode="out-in">
            <CSSTransition key={title} classNames="scroll" timeout={1000}>
              <WingText className="title" text={title} />
            </CSSTransition>
          </SwitchTransition>
        </div>
        <SwitchTransition mode="out-in">
          <CSSTransition key={title} classNames="fade" timeout={2000}>
            <div className="description">
              <span>{descriptionLine1}</span>
              <span>{descriptionLine2}</span>
            </div>
          </CSSTransition>
        </SwitchTransition>
      </Sticky>
    </div>
  );
};

export default PillarsSection;
