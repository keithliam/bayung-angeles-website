import React from 'react';
import Img from 'react-cool-img';
import classNames from 'classnames';
import { socialMediaLinks } from '../data/socialMediaLinks';

const SocialMediaLink = ({ className, color, link: { link, name, iconBlue, iconWhite } }) => (
  <a
    href={link}
    className={classNames('social-media-link', className)}
    target="_blank"
    rel="noreferrer"
  >
    <Img src={color === 'blue' ? iconBlue : iconWhite} alt={name} />
  </a>
);

const SocialMediaLinks = ({ className, linkClassName, color = 'blue' }) => (
  <div className={classNames('social-media-links', className)}>
    {socialMediaLinks.map(link => (
      <SocialMediaLink
        key={link.name}
        className={classNames('social-media-link', linkClassName)}
        color={color}
        link={link}
      />
    ))}
  </div>
);

export default SocialMediaLinks;
