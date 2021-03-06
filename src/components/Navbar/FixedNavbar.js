import React, { useEffect, useRef, useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Img from 'react-cool-img';
import NavigationLinks from './NavigationLinks';
import Logo from './Logo';

import menuIcon from '../../assets/images/menu-icon.svg';
import closeIcon from '../../assets/images/close-icon.svg';

const MENU_AUTO_CLOSE_TIMEOUT = 8000;

const FixedNavbar = () => {
  const menuAutoCloseTimer = useRef();
  const [openMenu, setOpenMenu] = useState(false);
  const [useMenu, setUseMenu] = useState(false);
  const [showCompleteLogo, setShowCompleteLogo] = useState(true);

  useEffect(() => {
    const handleResizeEvent = () => {
      const viewportWidth = window.innerWidth;
      const newUseMenu = viewportWidth <= 450;
      setUseMenu(newUseMenu);

      if (!newUseMenu) setOpenMenu(false);

      setShowCompleteLogo(viewportWidth > 660);
    };
    handleResizeEvent();

    window.addEventListener('resize', handleResizeEvent);
    return () => window.removeEventListener('resize', handleResizeEvent);
  }, []);

  const stopMenuAutoCloseTimer = () => {
    if (menuAutoCloseTimer.current) {
      clearTimeout(menuAutoCloseTimer.current);
      menuAutoCloseTimer.current = null;
    }
  };

  const startMenuAutoCloseTimer = () => {
    stopMenuAutoCloseTimer();
    menuAutoCloseTimer.current = setTimeout(() => setOpenMenu(false), MENU_AUTO_CLOSE_TIMEOUT);
  };

  useEffect(() => stopMenuAutoCloseTimer, []);

  const handleMenuClick = () => {
    if (openMenu) stopMenuAutoCloseTimer();
    else startMenuAutoCloseTimer();

    setOpenMenu(!openMenu);
  };

  const handleNavButtonClick = () => {
    if (useMenu) setOpenMenu(false);
  };

  if (useMenu) {
    return (
      <nav className="fixed-navbar mobile-navbar">
        <div className="mobile-navbar-options">
          <button className="menu-btn nav-link" onClick={handleMenuClick} type="button">
            <SwitchTransition mode="out-in">
              <CSSTransition key={openMenu} classNames="fade" timeout={150}>
                {openMenu ? (
                  <Img src={closeIcon} alt="Menu toggle" />
                ) : (
                  <Img src={menuIcon} alt="Menu toggle" />
                )}
              </CSSTransition>
            </SwitchTransition>
          </button>
          <Logo completeLogo />
        </div>
        <CSSTransition in={openMenu} classNames="scale-y" unmountOnExit timeout={750}>
          <NavigationLinks
            className="mobile-nav-links"
            buttonsClassname="mobile-nav-link"
            onButtonClick={handleNavButtonClick}
          />
        </CSSTransition>
      </nav>
    );
  }

  return (
    <nav className="fixed-navbar">
      <Logo completeLogo={showCompleteLogo} />
      <NavigationLinks />
    </nav>
  );
};

export default FixedNavbar;
