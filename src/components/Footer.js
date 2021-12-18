import React from 'react';
import SocialMediaLink from './SocialMediaLink';

import { socialMediaLinks } from '../data/socialMediaLinks';

const Footer = () => (
  <footer>
    <div className="social-media-links">
      {socialMediaLinks.map(link => (
        <SocialMediaLink key={link.name} className="social-media-link" color="white" link={link} />
      ))}
    </div>
    <span className="copyright">© Báyung Ángeles</span>
  </footer>
);

export default Footer;
