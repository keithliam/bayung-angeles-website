import React from 'react';
import classNames from 'classnames';

const SocialMediaLink = ({ className, color, link: { link, name, iconBlue, iconWhite } }) => (
  <a href={link} className={classNames('social-media-link', className)}>
    <img src={color === 'blue' ? iconBlue : iconWhite} alt={name} />
  </a>
);

export default SocialMediaLink;
