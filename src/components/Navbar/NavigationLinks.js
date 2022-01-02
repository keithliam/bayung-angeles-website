import React from 'react';
import classNames from 'classnames';

const NavigationLinks = ({
  className,
  buttonsClassname,
  onMeetOurTeamClick,
  onButtonClick,
  shortenOurTeamNavText,
}) => {
  const handleMeetOurTeamClick = event => {
    if (onMeetOurTeamClick) onMeetOurTeamClick(event);
    if (onButtonClick) onButtonClick(event);
  };

  return (
    <div className={classNames('nav-links', className)}>
      <button
        className={classNames(buttonsClassname)}
        type="button"
        onClick={handleMeetOurTeamClick}
      >
        {shortenOurTeamNavText ? 'Our Team' : 'Meet Our Team'}
      </button>
      <button className={classNames(buttonsClassname)} type="button" onClick={onButtonClick}>
        Get Involved
      </button>
      <button className={classNames(buttonsClassname)} type="button" onClick={onButtonClick}>
        Contact Us
      </button>
    </div>
  );
};

export default NavigationLinks;
