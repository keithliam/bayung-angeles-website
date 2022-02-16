import React from 'react';
import { HashLink } from 'react-router-hash-link';
import classNames from 'classnames';
import { landing, getInvolved } from '../../routes';
import { STEP_THREE_SECTION_ID, TEAM_SECTION_ID } from '../../constants';
import { scrollToElementAvoidHeader } from '../../helpers';

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
        scroll={scrollToElementAvoidHeader}
        smooth
      >
        {shortenOurTeamNavText ? 'Our Team' : 'Meet Our Team'}
      </HashLink>
      <HashLink
        className={classNames('nav-link', buttonsClassname)}
        onClick={onButtonClick}
        to={`${getInvolved.pathname}#`}
        smooth
      >
        Get Involved
      </HashLink>
      <HashLink
        className={classNames('nav-link', buttonsClassname)}
        onClick={onButtonClick}
        to={`${getInvolved.pathname}#${STEP_THREE_SECTION_ID}`}
        scroll={scrollToElementAvoidHeader}
        smooth
      >
        Contact Us
      </HashLink>
    </div>
  );
};

export default NavigationLinks;
