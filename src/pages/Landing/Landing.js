import React, { useRef } from 'react';
import CoverSection from './CoverSection';
import PillarsSection from './PillarsSection';
import ImagineSection from './ImagineSection';
import QuoteSection from './QuoteSection';
import TeamSection from './TeamSection';
import { Footer, Header } from '../../components';

const LandingPage = () => {
  const teamSectionRef = useRef();

  return (
    <div id="landing">
      <Header teamSectionRef={teamSectionRef} />
      <div className="container">
        <CoverSection />
        <div className="content-container">
          <PillarsSection />
          <ImagineSection />
          <QuoteSection />
          <TeamSection ref={teamSectionRef} />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
