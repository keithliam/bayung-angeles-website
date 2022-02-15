import React from 'react';
import SocialMediaLinks from './SocialMediaLinks';

import OfficialEmoji from './OfficialEmoji';

const Footer = () => (
  <footer>
    <SocialMediaLinks
      className="social-media-links"
      linkClassName="social-media-link"
      color="white"
    />
    <span className="copyright">
      © Báyung Ángeles <OfficialEmoji />
    </span>
  </footer>
);

export default Footer;
