import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import classNames from 'classnames';
import { landing } from '../../routes';
import { TEAM_SECTION_ID } from '../../constants';

const NavigationLinks = ({ className, buttonsClassname, onButtonClick, shortenOurTeamNavText }) => {
  const handleMeetOurTeamClick = event => {
    if (onButtonClick) onButtonClick(event);
  };

  return (
    <div className={classNames('nav-links', className)}>
      <HashLink
        className={classNames('nav-link', buttonsClassname)}
        onClick={handleMeetOurTeamClick}
        to={`${landing.pathname}#${TEAM_SECTION_ID}`}
        smooth
      >
        {shortenOurTeamNavText ? 'Our Team' : 'Meet Our Team'}
      </HashLink>
      <Link
        className={classNames('nav-link', buttonsClassname)}
        onClick={onButtonClick}
        to="google.com"
      >
        Get Involved
      </Link>
      <Link
        className={classNames('nav-link', buttonsClassname)}
        onClick={onButtonClick}
        to="google.com"
      >
        Contact Us
      </Link>
    </div>
  );
};

export default NavigationLinks;
