import React from 'react';
import Img from 'react-cool-img';
import { CTAButton } from '../components';

import miniLogoWhite from '../assets/images/ba-logo-mini-white-no-diacritic.png';

const ErrorPage = () => (
  <div className="error-page">
    <div>
      <Img className="logo" src={miniLogoWhite} alt="BÁ Logo" />
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

export default ErrorPage;