import React, { useEffect, useRef, useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import classNames from 'classnames';
import WingText from './WingText';

import menuIcon from '../assets/images/menu-icon.svg';
import closeIcon from '../assets/images/close-icon.svg';

const MENU_AUTO_CLOSE_TIMEOUT = 8000;

const HEADER_TYPES = {
  FIXED: 'fixed',
  ABSOLUTE: 'absolute',
};
const { FIXED, ABSOLUTE } = HEADER_TYPES;

const scrollOptions = { behavior: 'smooth' };

const Header = ({ coverSectionRef, teamSectionRef }) => {
  const [headerType, setHeaderType] = useState(ABSOLUTE);

  useEffect(() => {
    const handleScrollEvent = () => {
      const fixedHeaderAppear = window.innerHeight * 0.4 <= window.scrollY;
      setHeaderType(fixedHeaderAppear ? FIXED : ABSOLUTE);
    };

    window.addEventListener('scroll', handleScrollEvent);
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, []);

  const handleLogoClick = () => coverSectionRef.current.scrollIntoView(scrollOptions);
  const handleMeetOurTeamClick = () => teamSectionRef.current.scrollIntoView(scrollOptions);

  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        key={headerType}
        classNames={classNames({
          'slide-from-top': headerType === FIXED,
          fade: headerType === ABSOLUTE,
        })}
        timeout={750}
      >
        {headerType === ABSOLUTE ? (
          <PlainHeader onMeetOurTeamClick={handleMeetOurTeamClick} />
        ) : (
          <FixedHeader onLogoClick={handleLogoClick} onMeetOurTeamClick={handleMeetOurTeamClick} />
        )}
      </CSSTransition>
    </SwitchTransition>
  );
};

const PlainHeader = ({ onMeetOurTeamClick }) => {
  const [shortenOurTeamNavText, setShortenOurTeamNavText] = useState(false);

  useEffect(() => {
    const handleResizeEvent = () => setShortenOurTeamNavText(window.innerWidth <= 400);
    handleResizeEvent();

    window.addEventListener('resize', handleResizeEvent);
    return () => window.removeEventListener('resize', handleResizeEvent);
  }, []);

  return (
    <header>
      <NavigationLinks
        onMeetOurTeamClick={onMeetOurTeamClick}
        shortenOurTeamNavText={shortenOurTeamNavText}
      />
    </header>
  );
};

const FixedHeader = ({ onLogoClick, onMeetOurTeamClick }) => {
  const menuAutoCloseTimer = useRef();
  const [openMenu, setOpenMenu] = useState(false);
  const [useMenu, setUseMenu] = useState(false);
  const [showCompleteLogo, setShowCompleteLogo] = useState(true);

  useEffect(() => {
    const handleResizeEvent = () => {
      const viewportWidth = window.innerWidth;
      setUseMenu(viewportWidth <= 450);
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

  if (useMenu) {
    return (
      <header className="fixed-header mobile-header">
        <div className="mobile-header-options">
          <button className="menu-btn" onClick={handleMenuClick} type="button">
            <SwitchTransition mode="out-in">
              <CSSTransition key={openMenu} classNames="fade" timeout={150}>
                {openMenu ? (
                  <img src={closeIcon} alt="Menu toggle" />
                ) : (
                  <img src={menuIcon} alt="Menu toggle" />
                )}
              </CSSTransition>
            </SwitchTransition>
          </button>
          <Logo completeLogo onClick={onLogoClick} />
        </div>
        <CSSTransition in={openMenu} classNames="scale-y" unmountOnExit timeout={750}>
          <NavigationLinks
            className="mobile-nav-links"
            buttonsClassname="mobile-nav-link"
            onMeetOurTeamClick={onMeetOurTeamClick}
          />
        </CSSTransition>
      </header>
    );
  }

  return (
    <header className="fixed-header">
      <Logo completeLogo={showCompleteLogo} onClick={onLogoClick} />
      <NavigationLinks onMeetOurTeamClick={onMeetOurTeamClick} />
    </header>
  );
};

const Logo = ({ completeLogo, onClick }) => (
  <button className="logo" type="button" onClick={onClick}>
    {completeLogo ? (
      <>
        Báyung <WingText text="Ángeles" wingPosition="start" />
      </>
    ) : (
      <WingText className="winged-single" text="Á" wingPosition="start" />
    )}
  </button>
);

const NavigationLinks = ({
  className,
  buttonsClassname,
  onMeetOurTeamClick,
  shortenOurTeamNavText,
}) => (
  <nav className={classNames('nav-links', className)}>
    <button className={classNames(buttonsClassname)} type="button" onClick={onMeetOurTeamClick}>
      {shortenOurTeamNavText ? 'Our Team' : 'Meet Our Team'}
    </button>
    <button className={classNames(buttonsClassname)} type="button">
      Get Involved
    </button>
    <button className={classNames(buttonsClassname)} type="button">
      Contact Us
    </button>
  </nav>
);

export default Header;
