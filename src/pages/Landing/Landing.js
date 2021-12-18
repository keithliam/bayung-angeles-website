import React from 'react';
import CoverSection from './CoverSection';
import PillarsSection from './PillarsSection';
import ImagineSection from './ImagineSection';
import QuoteSection from './QuoteSection';
import TeamSection from './TeamSection';
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
        <TeamSection />
      </div>
      <Footer />
    </div>
  </div>
);

export default LandingPage;
