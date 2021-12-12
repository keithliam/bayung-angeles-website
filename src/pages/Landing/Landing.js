import React from 'react';
import CoverSection from './CoverSection';
import PillarsSection from './PillarsSection';
import ImagineSection from './ImagineSection';
import QuoteSection from './QuoteSection';
import { Footer, Header } from '../../components';

const LandingPage = () => (
  <div id="landing">
    <Header />
    <div className="container">
      <CoverSection />
      <div className="content-container">
        <PillarsSection />
        <ImagineSection />
        <QuoteSection />
      </div>
      <Footer />
    </div>
  </div>
);

export default LandingPage;
