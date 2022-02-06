import React from 'react';
import { HashLink } from 'react-router-hash-link';
import WingText from '../WingText';
import OfficialEmoji from '../OfficialEmoji';
import { landing } from '../../routes';

import miniLogoWhite from '../../assets/images/ba-logo-mini-white.png';
import miniLogoGold from '../../assets/images/ba-logo-mini-gold.png';

const Logo = ({ completeLogo, onClick, wingColor = 'white' }) => (
  <HashLink className="logo nav-link" to={`${landing.pathname}#`} onClick={onClick} smooth>
    {completeLogo ? (
      <>
        Báyung <WingText text="Ángeles" wingPosition="start" /> <OfficialEmoji />
      </>
    ) : (
      <img
        className="winged-single"
        src={wingColor === 'white' ? miniLogoWhite : miniLogoGold}
        alt="BÁ Logo"
      />
    )}
  </HashLink>
);

export default Logo;
