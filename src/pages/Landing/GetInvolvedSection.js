import React, { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { CTAButton } from '../../components';
import { registerScrollResizeEventListeners } from '../../helpers';

import logoFlagWhite from '../../assets/images/ba-logo-flag-white.png';

const GetInvolvedSection = () => {
  const sectionRef = useRef();
  const [imageAppear, setImageAppear] = useState(false);

  useEffect(() => {
    const handleScrollResizeEvent = () => {
      if (sectionRef.current) {
        const { top } = sectionRef.current.getBoundingClientRect();
        setImageAppear(top <= window.innerHeight / 2);
      }
    };
    return registerScrollResizeEventListeners(handleScrollResizeEvent);
  }, []);

  return (
    <div ref={sectionRef} className="get-involved">
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
