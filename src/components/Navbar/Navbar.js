import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import PlainNavbar from './PlainNavbar';
import FixedNavbar from './FixedNavbar';
import { registerScrollResizeEventListeners } from '../../helpers';

const Navbar = () => {
  const [showFixedNavbar, setShowFixedNavbar] = useState(false);

  useEffect(() => {
    const handleScrollResizeEvent = () => {
      setShowFixedNavbar(window.innerHeight * 0.4 <= window.scrollY);
    };
    handleScrollResizeEvent();

    return registerScrollResizeEventListeners(handleScrollResizeEvent);
  }, []);

  return (
    <>
      <PlainNavbar />
      <CSSTransition in={showFixedNavbar} classNames="slide-from-top" timeout={750} unmountOnExit>
        <FixedNavbar />
      </CSSTransition>
    </>
  );
};

export default Navbar;
