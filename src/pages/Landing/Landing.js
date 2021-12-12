import CoverSection from './CoverSection';
import PillarsSection from './PillarsSection';
import ImagineSection from './ImagineSection';
import { Footer, Header } from '../../components'

import '../../stylesheets/pages/landing.css';

const LandingPage = () => (
  <div id="landing">
    <Header />
    <div className="container">
      <CoverSection />
      <div className="content-container">
        <PillarsSection />
        <ImagineSection />
      </div>
      <Footer />
    </div>
  </div>
);

export default LandingPage;
