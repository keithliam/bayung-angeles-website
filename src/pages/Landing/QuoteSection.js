import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useDimensions } from 'react-viewport-utils';
import { CSSTransition } from 'react-transition-group';
import logoBlue from '../../assets/images/ba-logo-blue.png';

const QuoteSection = () => {
  const containerRef = useRef();
  const scroll = useScroll();
  const dimensions = useDimensions();

  const [containerRect, setContainerRect] = useState({});

  const viewportHeight = dimensions.height;
  const { top: containerTop = 0 } = containerRect;

  const imageAppearAt = containerTop - viewportHeight / 2;
  const imageAppear = imageAppearAt <= scroll.y;

  useEffect(() => {
    setContainerRect(containerRef.current.getBoundingClientRect());
  }, []);

  return (
    <div ref={containerRef} className="quote">
      <CSSTransition in={imageAppear} classNames="fade" timeout={3000} unmountOnExit>
        <img className="quote-bg" src={logoBlue} alt="BA logo" />
      </CSSTransition>
      <div className="quote-text">
        <span className="quote-line">We need leaders</span>
        <span className="quote-line">not in love with money</span>
        <span className="quote-line">
          but in love with <span className="quote-highlight">justice</span>.
        </span>
        <span className="quote-line">Not in love with publicity</span>
        <span className="quote-line">
          but in love with <span className="quote-highlight">humanity</span>.
        </span>
      </div>
      <span className="quote-credit">Martin Luther King Jr.</span>
    </div>
  );
};

export default QuoteSection;
