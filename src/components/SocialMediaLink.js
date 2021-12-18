import React from 'react';
import classNames from 'classnames';

const SocialMediaLink = ({ className, link: { link, icon, name } }) => (
  <a href={link} className={classNames('social-media-link', className)}>
    <img src={icon} alt={name} />
  </a>
);

export default SocialMediaLink;
