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
      <CSSTransition in={imageAppear} classNames="fade" timeout={3000} unmountOnExit>
        <img className="quote-bg" src={logoFlagWhite} alt="BA Flag" />
      </CSSTransition>
      <div className="involved-content">
        <div className="involved-heading">
          <span className="heading-line">Together we can make Angeles City</span>
          <span className="heading-line">the best city in the country.</span>
        </div>
        <span className="involved-subheading">Show your support. Join the movement.</span>
        <CTAButton className="involved-cta" color="blue" text="Get Involved" />
      </div>
    </div>
  );
};

export default GetInvolvedSection;
