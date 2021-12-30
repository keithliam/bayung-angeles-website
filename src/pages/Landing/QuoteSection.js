import React, { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import logoBlue from '../../assets/images/ba-logo-blue.png';

const QuoteSection = () => {
  const sectionRef = useRef();
  const [imageAppear, setImageAppear] = useState(false);

  const handleScrollEvent = () => {
    if (sectionRef.current) {
      const { top } = sectionRef.current.getBoundingClientRect();
      setImageAppear(top <= window.innerHeight / 2);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrollEvent);
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, []);

  return (
    <div ref={sectionRef} className="quote">
      <CSSTransition in={imageAppear} classNames="fade" timeout={3000} unmountOnExit>
        <img className="quote-bg" src={logoBlue} alt="BA logo" />
      </CSSTransition>
      <div className="heading-line">
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
