import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import PlainNavbar from './PlainNavbar';
import FixedNavbar from './FixedNavbar';
import { registerScrollResizeEventListeners } from '../../helpers';

const scrollOptions = { behavior: 'smooth' };

const Navbar = ({ coverSectionRef, teamSectionRef }) => {
  const [showFixedNavbar, setShowFixedNavbar] = useState(false);

  useEffect(() => {
    const handleScrollResizeEvent = () => {
      setShowFixedNavbar(window.innerHeight * 0.4 <= window.scrollY);
    };
    handleScrollResizeEvent();

    return registerScrollResizeEventListeners(handleScrollResizeEvent);
  }, []);

  const handleLogoClick = () => coverSectionRef.current.scrollIntoView(scrollOptions);
  const handleMeetOurTeamClick = () => teamSectionRef.current.scrollIntoView(scrollOptions);

  return (
    <>
      <PlainNavbar onMeetOurTeamClick={handleMeetOurTeamClick} />
      <CSSTransition in={showFixedNavbar} classNames="slide-from-top" timeout={750} unmountOnExit>
        <FixedNavbar onLogoClick={handleLogoClick} onMeetOurTeamClick={handleMeetOurTeamClick} />
      </CSSTransition>
    </>
  );
};

export default Navbar;
