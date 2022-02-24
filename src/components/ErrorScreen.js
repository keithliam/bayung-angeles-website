import React from 'react';
import Img from 'react-cool-img';
import CTAButton from './CTAButton';

import miniLogoWhite from '../assets/images/ba-logo-mini-white-no-diacritic.png';

const ErrorScreen = () => (
  <div className="error-page">
    <div>
      <Img className="logo" src={miniLogoWhite} alt="A" />
      <h1>ró Páró!</h1>
    </div>
    <h4>Atin prubléma!</h4>
    <CTAButton
      className="refresh-btn"
      onClick={() => window.location.reload()}
      color="gold"
      text="Refresh"
    />
  </div>
);

export default ErrorScreen;
