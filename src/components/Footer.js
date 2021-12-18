import React from 'react';
import SocialMediaLink from './SocialMediaLink';

import { socialMediaLinks } from '../data/socialMediaLinks';

const Footer = () => (
  <footer>
    <div className="follow-text">
      <span>Follow </span>
      <span>Báyung Ángeles</span>
    </div>
    <div className="social-media-links">
      {socialMediaLinks.map(link => (
        <SocialMediaLink key={link.name} link={link} />
      ))}
    </div>
  </footer>
);

export default Footer;
