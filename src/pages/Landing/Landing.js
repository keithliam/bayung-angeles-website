import React, { useEffect } from 'react';
import CoverSection from './CoverSection';
import PillarsSection from './PillarsSection';
import ImagineSection from './ImagineSection';
import QuoteSection from './QuoteSection';
import TeamSection from './TeamSection';
import GetInvolvedSection from './GetInvolvedSection';
import DownloadsSection from './DownloadsSection';
import { PILLARS_SECTION_ID, TEAM_SECTION_ID } from '../../constants';

const LandingPage = () => {
  // This is just a fix because react-stickynode requires a scroll event to initially appear.
  // See https://github.com/yahoo/react-stickynode/issues/383
  useEffect(() => {
    window.scrollBy(0, -1);
  }, []);

  return (
    <div id="landing">
      <div className="container">
        <CoverSection />
        <div className="content-container">
          <PillarsSection id={PILLARS_SECTION_ID} />
          <ImagineSection />
          <QuoteSection />
          <TeamSection id={TEAM_SECTION_ID} />
          <GetInvolvedSection />
          <DownloadsSection />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
