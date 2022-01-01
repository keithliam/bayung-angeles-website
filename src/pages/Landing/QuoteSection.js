import React, { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import classNames from 'classnames';
import logoBlue from '../../assets/images/ba-logo-blue.png';
import { registerScrollResizeEventListeners } from '../../helpers';

const QuoteSection = () => {
  const sectionRef = useRef();
  const highlightJusticeTimeout = useRef();
  const highlightHumanityTimeout = useRef();
  const [imageAppear, setImageAppear] = useState(false);
  const [highlightJustice, setHighlightJustice] = useState(false);
  const [highlightHumanity, setHighlightHumanity] = useState(false);

  const startHighlightTimers = () => {
    if (!highlightJusticeTimeout.current) {
      highlightJusticeTimeout.current = setTimeout(() => setHighlightJustice(true), 500);
    }
    if (!highlightHumanityTimeout.current) {
      highlightHumanityTimeout.current = setTimeout(() => setHighlightHumanity(true), 2500);
    }
  };

  const clearHighlightTimers = () => {
    clearTimeout(highlightJusticeTimeout.current);
    clearTimeout(highlightHumanityTimeout.current);
    highlightJusticeTimeout.current = null;
    highlightHumanityTimeout.current = null;
  };

  useEffect(() => {
    const handleScrollResizeEvent = () => {
      if (sectionRef.current) {
        const { top } = sectionRef.current.getBoundingClientRect();
        const newImageAppear = top <= window.innerHeight / 2;
        setImageAppear(newImageAppear);

        if (newImageAppear) {
          startHighlightTimers();
        } else {
          clearHighlightTimers();
          setHighlightJustice(false);
          setHighlightHumanity(false);
        }
      }
    };
    const unregisterScrollResizeEventListeners =
      registerScrollResizeEventListeners(handleScrollResizeEvent);

    return () => {
      unregisterScrollResizeEventListeners();
      clearHighlightTimers();
    };
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
          but in love with{' '}
          <span
            className={classNames('quote-highlight', { 'quote-highlight-show': highlightJustice })}
          >
            justice
          </span>
          .
        </span>
        <span className="quote-line">Not in love with publicity</span>
        <span className="quote-line">
          but in love with{' '}
          <span
            className={classNames('quote-highlight', { 'quote-highlight-show': highlightHumanity })}
          >
            humanity
          </span>
        </span>
      </div>
      <span className="quote-credit">Martin Luther King Jr.</span>
    </div>
  );
};

export default QuoteSection;
