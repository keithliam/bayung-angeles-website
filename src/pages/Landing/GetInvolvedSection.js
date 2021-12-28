import React from 'react';
import useMeasure from 'react-use-measure';
import { useDimensions } from 'react-viewport-utils';
import { CSSTransition } from 'react-transition-group';
import { CTAButton } from '../../components';

import logoFlagWhite from '../../assets/images/ba-logo-flag-white.png';

const GetInvolvedSection = () => {
  const [ref, bounds] = useMeasure({ scroll: true });
  const dimensions = useDimensions();

  const imageAppear = bounds.top <= dimensions.height / 2;

  return (
    <div ref={ref} className="get-involved">
      <div className="involved-content">
        <span className="heading-line">
          Together we can make Angeles City the best city in the country.
        </span>
        <span className="involved-subheading">Show your support. Join the movement.</span>
        <CTAButton className="cta-btn" color="blue" text="Get Involved" />
      </div>
      <div className="involved-image-container">
        <CSSTransition in={imageAppear} classNames="fade" timeout={3000} unmountOnExit>
          <img className="involved-bg" src={logoFlagWhite} alt="BA Flag" />
        </CSSTransition>
      </div>
    </div>
  );
};

export default GetInvolvedSection;
