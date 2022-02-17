import React, { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import classNames from 'classnames';
import { registerScrollResizeEventListeners } from '../../../helpers';

const StepNumber = ({ className, number }) => {
  const ref = useRef();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) return null; // Avoid setting show back to false

    const handleScrollResizeEvent = () => {
      if (ref.current) {
        const { top } = ref.current.getBoundingClientRect();
        const newShow = top <= (window.innerHeight / 5) * 3;
        if (newShow) setShow(true);
      }
    };
    handleScrollResizeEvent(); // Trigger immediately to show element if it's already in view
    const unregisterScrollResizeEventListeners =
      registerScrollResizeEventListeners(handleScrollResizeEvent);

    return () => {
      unregisterScrollResizeEventListeners();
    };
  }, [show]);

  return (
    <CSSTransition in={show} classNames="fade-in">
      <span ref={ref} className={classNames('step-num', className)}>
        {number}
      </span>
    </CSSTransition>
  );
};
export default StepNumber;
