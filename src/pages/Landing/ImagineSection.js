import React from 'react';
import useMeasure from 'react-use-measure';
import { useDimensions } from 'react-viewport-utils';
import Sticky from 'react-stickynode';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { prefix } from 'inline-style-prefixer';
import classNames from 'classnames';

import { allPhotos, getTopicAndPhoto } from '../../data/imagine';

const maxScaleUp = 0.05;

const ImagineSection = () => {
  const [ref, bounds] = useMeasure({ scroll: true });
  const dimensions = useDimensions();

  const viewportHeight = dimensions.height;
  const { top, bottom } = bounds;

  const photoIndex = (() => {
    if (-top - viewportHeight < 0) return 0;
    if (bottom - viewportHeight <= 0) return allPhotos.length - 1;
    return Math.floor(-top / viewportHeight);
  })();
  const {
    topic: { highlightText, extraText },
    photo: { title, source, link, credit, creditLink },
  } = getTopicAndPhoto(photoIndex);

  const scrolledPastSectionTop = top < 0;
  const entireSectionInView = scrolledPastSectionTop && bottom - viewportHeight > 0;
  const backgroundScale = scrolledPastSectionTop
    ? 1 + ((-top - viewportHeight * photoIndex) / viewportHeight) * maxScaleUp // Reset scale of every photo
    : 1;

  return (
    <div
      ref={ref}
      id="imagine"
      className="imagine"
      style={prefix({ height: `${(allPhotos.length + 1) * 100}vh` })}
    >
      <Sticky bottomBoundary="#imagine" innerClass="imagine-content">
        <SwitchTransition mode="out-in">
          <CSSTransition key={title} classNames="bg-fade" timeout={1000}>
            <img
              className={classNames('imagine-bg', { 'bg-show': entireSectionInView })}
              style={prefix({ transform: `scale(${backgroundScale})` })}
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
          <a className="learn-more-link" href={link}>
            Learn More
          </a>
        </div>
      </Sticky>
    </div>
  );
};

export default ImagineSection;
