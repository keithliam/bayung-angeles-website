import React from 'react';
import useMeasure from 'react-use-measure';
import CoverSection from './CoverSection';
import PillarsSection from './PillarsSection';
import ImagineSection from './ImagineSection';
import QuoteSection from './QuoteSection';
import TeamSection from './TeamSection';
import { Footer, Header } from '../../components';

const LandingPage = () => {
  const [headerRef, headerBounds] = useMeasure();

  return (
    <div id="landing">
      <Header ref={headerRef} />
      <div className="container">
        <CoverSection />
        <div className="content-container">
          <PillarsSection />
          <ImagineSection />
          <QuoteSection />
          <TeamSection headerHeight={headerBounds.height} />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
