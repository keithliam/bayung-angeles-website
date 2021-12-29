import React, { useLayoutEffect, useRef } from 'react';
import useMeasure from 'react-use-measure';
import CoverSection from './CoverSection';
import PillarsSection from './PillarsSection';
import ImagineSection from './ImagineSection';
import QuoteSection from './QuoteSection';
import TeamSection from './TeamSection';
import GetInvolvedSection from './GetInvolvedSection';
import DownloadsSection from './DownloadsSection';
import { Footer, Header } from '../../components';

const LandingPage = () => {
  const [ref, bounds] = useMeasure();
  const coverSectionRef = useRef();
  const pillarsSectionRef = useRef();
  const teamSectionRef = useRef();

  // This is just a fix because react-stickynode requires a scroll event to initially appear.
  // See https://github.com/yahoo/react-stickynode/issues/383
  const measurementDone = Object.values(bounds).some(pixels => pixels !== 0);
  useLayoutEffect(() => {
    if (measurementDone) window.scrollBy(0, -1);
  }, [measurementDone]);

  return (
    <div ref={ref} id="landing">
      <Header coverSectionRef={coverSectionRef} teamSectionRef={teamSectionRef} />
      <div className="container">
        <CoverSection ref={coverSectionRef} pillarsSectionRef={pillarsSectionRef} />
        <div className="content-container">
          <PillarsSection ref={pillarsSectionRef} />
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
