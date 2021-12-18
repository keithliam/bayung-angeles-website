import React, { forwardRef } from 'react';
import { PhotoCredit, SocialMediaLink } from '../../components';
import cover from '../../assets/images/pisamban-maragul.png';
import coverOverlay from '../../assets/images/pisamban-maragul-isolated.png';
import wingGold from '../../assets/images/wing-gold.svg';
import caratDown from '../../assets/images/carat-down.svg';

import { socialMediaLinks } from '../../data/socialMediaLinks';

const CoverSection = (props, ref) => (
  <div ref={ref} className="cover-container">
    <img src={cover} className="ba-cover" alt="cover" />
    <div className="cover-headline">
      <h1>
        Báyung{' '}
        <span>
          Ángeles
          <img src={wingGold} alt="wing" />
        </span>
      </h1>
      <img src={coverOverlay} className="ba-cover" alt="cover" />
      <h4>Be a part of the movement</h4>
      <span>Stay connected. Follow our socials.</span>
      <div className="social-media-links">
        {socialMediaLinks.map(link => (
          <SocialMediaLink key={link.name} className="social-media-link" color="blue" link={link} />
        ))}
      </div>
      <div className="cover-gradient">
        <button type="button">
          <img src={caratDown} className="scroll-down-indicator" alt="" />
        </button>
        <PhotoCredit title="Pisamban Maragul" name="Bruno Tiotuico" link="#" />
      </div>
    </div>
  </div>
);

export default forwardRef(CoverSection);
