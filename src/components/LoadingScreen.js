/**
 * A component used to delay the unmounting of a loader component.
 */

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import classNames from 'classnames';
import Img from 'react-cool-img';

import miniLogoWhite from '../assets/images/ba-logo-mini-white.png';

/**
 * Renders nothing in place of the original loader component. Only used
 * for loader state management.
 */
const LoadingStateManager = ({ onMount, onUnmount }) => {
  useEffect(() => {
    onMount();
    return onUnmount;
  }, [onMount, onUnmount]);
  return null;
};

/**
 * The loader shown while the page is loading.
 */
const Loader = ({ loading }) => (
  <CSSTransition in={loading} classNames="fade-out" timeout={1500} mountOnEnter unmountOnExit>
    <div className="loader">
      <Img className="logo" src={miniLogoWhite} alt="BÁ Logo" />
      <h1>Ságulî mû!</h1>
      <h4>É ka mámalaguá!</h4>
    </div>
  </CSSTransition>
);

/**
 * Displays a loader on top of its children. Persists for a specified amount of time.
 */
const LoadingScreen = ({ delay, children }) => {
  const timerRef = useRef();
  const [loading, setLoading] = useState(false);

  // Clear timers before unmount to avoid memory leaks
  useEffect(
    () => () => {
      clearTimeout(timerRef.current);
    },
    []
  );

  const onLoadStart = useCallback(() => {
    clearTimeout(timerRef.current);
    setLoading(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const onLoadFinish = useCallback(() => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = 'unset';
    }, delay);
  }, [delay]);

  // Use the same instance for all re-renders
  const loadingStateManager = useMemo(
    () => <LoadingStateManager onMount={onLoadStart} onUnmount={onLoadFinish} />,
    [onLoadStart, onLoadFinish]
  );

  return (
    <div className={classNames('loader-container', { loading })}>
      <Loader loading={loading} />
      {children(loadingStateManager)}
    </div>
  );
};

export default LoadingScreen;
