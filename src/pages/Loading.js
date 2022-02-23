import React from 'react';
import Img from 'react-cool-img';

import miniLogoWhite from '../assets/images/ba-logo-mini-white.png';

const LoadingPage = () => (
  <div className="loading-page">
    <Img className="logo" src={miniLogoWhite} alt="BÁ Logo" />
    <h1>Ságulî mû!</h1>
    <h4>É ka mámalagwá!</h4>
  </div>
);

export default LoadingPage;
