import React, { forwardRef } from 'react';
import { PhotoCredit, SocialMediaLink, WingText, OfficialEmoji } from '../../components';
import cover from '../../assets/images/pisamban-maragul.png';
import coverOverlay from '../../assets/images/pisamban-maragul-isolated.png';

import caratDown from '../../assets/images/carat-down.svg';

import { socialMediaLinks } from '../../data/socialMediaLinks';

const CoverSection = ({ pillarsSectionRef }, ref) => {
  const handleScrollIndicatorClick = () =>
    pillarsSectionRef.current.scrollIntoView({ behavior: 'smooth' });

  return (
    <div ref={ref} className="cover-container">
      <img src={cover} className="ba-cover" alt="cover" />
      <div className="cover-headline">
        <h1>
          Báyung <WingText text="Ángeles" wingPosition="start" /> <OfficialEmoji />
        </h1>
        <img src={coverOverlay} className="ba-cover" alt="cover" />
        <h4>Be part of the movement</h4>
        <span>Stay connected. Follow our socials.</span>
        <div className="social-media-links">
          {socialMediaLinks.map(link => (
            <SocialMediaLink
              key={link.name}
              className="social-media-link"
              color="blue"
              link={link}
            />
          ))}
        </div>
        <div className="cover-gradient">
          <button type="button" onClick={handleScrollIndicatorClick}>
            <img src={caratDown} className="scroll-down-indicator" alt="Scroll down" />
          </button>
          <PhotoCredit
            className="cover-credit"
            title="Pisamban Maragul"
            name="Bruno Tiotuico"
            link="https://bit.ly/bayung-angeles-portfolio-bruno"
          />
        </div>
      </div>
    </div>
  );
};

export default forwardRef(CoverSection);
