import React from 'react';
import { HashLink } from 'react-router-hash-link';
import Img from 'react-cool-img';
import { PhotoCredit, SocialMediaLinks, WingText, OfficialEmoji } from '../../components';
import cover from '../../assets/images/pisamban-maragul.jpg';
import coverOverlay from '../../assets/images/pisamban-maragul-isolated.png';

import caratDown from '../../assets/images/carat-down.svg';

import { PILLARS_SECTION_ID } from '../../constants';

const CoverSection = () => (
  <div className="cover-container">
    <Img src={cover} className="ba-cover" alt="cover" />
    <div className="cover-headline">
      <h1>
        Báyung <WingText text="Ángeles" wingPosition="start" /> <OfficialEmoji />
      </h1>
      <Img src={coverOverlay} className="ba-cover" alt="cover" />
      <h4>Be part of the movement</h4>
      <span>Stay connected. Follow our socials.</span>
      <SocialMediaLinks
        className="social-media-links"
        linkClassName="social-media-links"
        color="blue"
      />
      <div className="cover-gradient">
        <HashLink className="scroll-down-indicator" to={`#${PILLARS_SECTION_ID}`} smooth>
          <Img src={caratDown} alt="Scroll down" />
        </HashLink>
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

export default CoverSection;
