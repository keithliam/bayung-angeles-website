import React from 'react';
import { useScroll, useDimensions } from 'react-viewport-utils';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import classNames from 'classnames';
import wingGold from '../assets/images/wing-gold.svg';

const HEADER_TYPES = {
  FIXED: 'fixed',
  ABSOLUTE: 'absolute',
};
const { FIXED, ABSOLUTE } = HEADER_TYPES;

const Header = ({ teamSectionRef }) => {
  const scroll = useScroll();
  const dimensions = useDimensions();

  const viewportHeight = dimensions.height;
  const fixedHeaderAppear = viewportHeight * 0.4 <= scroll.y;
  const headerType = fixedHeaderAppear ? FIXED : ABSOLUTE;

  const handleLogoClick = () => teamSectionRef.current.scrollIntoView();
  const handleMeetOurTeamClick = () =>
    teamSectionRef.current.scrollIntoView({ behavior: 'smooth' });

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
          <header>
            <NavigationLinks onMeetOurTeamClick={handleMeetOurTeamClick} />
          </header>
        ) : (
          <header className="fixed-header">
            <button className="logo" type="button" onClick={handleLogoClick}>
              Báyung{' '}
              <span>
                Ángeles
                <img src={wingGold} alt="wing" />
              </span>
            </button>
            <NavigationLinks onMeetOurTeamClick={handleMeetOurTeamClick} />
          </header>
        )}
      </CSSTransition>
    </SwitchTransition>
  );
};

const NavigationLinks = ({ onMeetOurTeamClick }) => (
  <nav className="nav-links">
    <button type="button" onClick={onMeetOurTeamClick}>
      Meet Our Team
    </button>
    <button type="button">Get Involved</button>
    <button type="button">Contact Us</button>
  </nav>
);

export default Header;
