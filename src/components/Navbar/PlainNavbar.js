import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavigationLinks from './NavigationLinks';
import Logo from './Logo';
import { LANDING_PATH } from '../../constants';

const PlainNavbar = () => {
  const [shortenOurTeamNavText, setShortenOurTeamNavText] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleResizeEvent = () => setShortenOurTeamNavText(window.innerWidth <= 400);
    handleResizeEvent();

    window.addEventListener('resize', handleResizeEvent);
    return () => window.removeEventListener('resize', handleResizeEvent);
  }, []);

  return (
    <nav className="plain-navbar">
      {pathname !== LANDING_PATH && <Logo wingColor="blue" />}
      <NavigationLinks shortenOurTeamNavText={shortenOurTeamNavText} />
    </nav>
  );
};

export default PlainNavbar;
