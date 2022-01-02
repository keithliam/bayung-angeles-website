import React, { useEffect, useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import classNames from 'classnames';
import PlainNavbar from './PlainNavbar';
import FixedNavbar from './FixedNavbar';
import { registerScrollResizeEventListeners } from '../../helpers';

const HEADER_TYPES = {
  FIXED: 'fixed',
  ABSOLUTE: 'absolute',
};
const { FIXED, ABSOLUTE } = HEADER_TYPES;

const scrollOptions = { behavior: 'smooth' };

const Navbar = ({ coverSectionRef, teamSectionRef }) => {
  const [navbarType, setNavbarType] = useState(ABSOLUTE);

  useEffect(() => {
    const handleScrollResizeEvent = () => {
      const fixedNavbarAppear = window.innerHeight * 0.4 <= window.scrollY;
      setNavbarType(fixedNavbarAppear ? FIXED : ABSOLUTE);
    };
    return registerScrollResizeEventListeners(handleScrollResizeEvent);
  }, []);

  const handleLogoClick = () => coverSectionRef.current.scrollIntoView(scrollOptions);
  const handleMeetOurTeamClick = () => teamSectionRef.current.scrollIntoView(scrollOptions);

  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        key={navbarType}
        classNames={classNames({
          'slide-from-top': navbarType === FIXED,
          fade: navbarType === ABSOLUTE,
        })}
        timeout={750}
      >
        {navbarType === ABSOLUTE ? (
          <PlainNavbar onMeetOurTeamClick={handleMeetOurTeamClick} />
        ) : (
          <FixedNavbar onLogoClick={handleLogoClick} onMeetOurTeamClick={handleMeetOurTeamClick} />
        )}
      </CSSTransition>
    </SwitchTransition>
  );
};

export default Navbar;
