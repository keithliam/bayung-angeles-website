import React, { useEffect, useState } from 'react';
import NavigationLinks from './NavigationLinks';

const PlainNavbar = () => {
  const [shortenOurTeamNavText, setShortenOurTeamNavText] = useState(false);

  useEffect(() => {
    const handleResizeEvent = () => setShortenOurTeamNavText(window.innerWidth <= 400);
    handleResizeEvent();

    window.addEventListener('resize', handleResizeEvent);
    return () => window.removeEventListener('resize', handleResizeEvent);
  }, []);

  return (
    <nav className="plain-navbar">
      <NavigationLinks shortenOurTeamNavText={shortenOurTeamNavText} />
    </nav>
  );
};

export default PlainNavbar;
