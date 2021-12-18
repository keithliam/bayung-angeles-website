import React, { useRef } from 'react';
import CoverSection from './CoverSection';
import PillarsSection from './PillarsSection';
import ImagineSection from './ImagineSection';
import QuoteSection from './QuoteSection';
import TeamSection from './TeamSection';
import GetInvolvedSection from './GetInvolvedSection';
import DownloadsSection from './DownloadsSection';
import { Footer, Header } from '../../components';

const LandingPage = () => {
  const coverSectionRef = useRef();
  const teamSectionRef = useRef();

  return (
    <div id="landing">
      <Header coverSectionRef={coverSectionRef} teamSectionRef={teamSectionRef} />
      <div className="container">
        <CoverSection ref={coverSectionRef} />
        <div className="content-container">
          <PillarsSection />
          <ImagineSection />
          <QuoteSection />
          <TeamSection ref={teamSectionRef} />
          <GetInvolvedSection />
          <DownloadsSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
