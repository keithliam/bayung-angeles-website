import React from 'react';
import useMeasure from 'react-use-measure';
import { useScroll, useDimensions } from 'react-viewport-utils';
import Sticky from 'react-stickynode';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import classNames from 'classnames';

import { allPhotos, getTopicAndPhoto } from '../../data/imagine';

const ImagineSection = () => {
  const [ref, bounds] = useMeasure();
  const scroll = useScroll();
  const dimensions = useDimensions();

  const viewportHeight = dimensions.height;
  const { top: containerTop, bottom: containerBottom } = bounds;

  const photoIndex = (() => {
    if (scroll.y <= containerTop) return 0;
    if (containerBottom - viewportHeight <= scroll.y) return allPhotos.length - 1;
    return Math.floor((scroll.y - containerTop) / viewportHeight);
  })();
  const {
    topic: { highlightText, extraText },
    photo: { title, source, link, credit, creditLink },
  } = getTopicAndPhoto(photoIndex);

  const backgroundAppearAt = containerTop;
  const scrolledPastSectionTop = backgroundAppearAt <= scroll.y;
  const entireSectionInView = scrolledPastSectionTop && scroll.y < containerBottom - viewportHeight;
  const currentPhotoTop = backgroundAppearAt + viewportHeight * photoIndex;
  const backgroundScale = scrolledPastSectionTop
    ? 100 + ((scroll.y - currentPhotoTop) / 50000) * 100 // Resets scale of every photo
    : 100;

  return (
    <div ref={ref} className="imagine" style={{ height: `${(allPhotos.length + 1) * 100}vh` }}>
      <Sticky top={0} bottomBoundary={containerBottom} innerClass="imagine-content">
        <SwitchTransition mode="out-in">
          <CSSTransition key={title} classNames="bg-fade" timeout={1000}>
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
          <CSSTransition key={highlightText} classNames="fade" timeout={2000}>
            <div className="topic">
              <span className="highlight">{highlightText}</span> {extraText}
            </div>
          </CSSTransition>
        </SwitchTransition>
        <div className={classNames('photo-info', { 'info-show': entireSectionInView })}>
          <SwitchTransition mode="out-in">
            <CSSTransition key={title} classNames="fade" timeout={2000}>
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
          <a href={link}>Learn More</a>
        </div>
      </Sticky>
    </div>
  );
};

export default ImagineSection;
