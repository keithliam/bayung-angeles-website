import CoverSection from './CoverSection';
import PillarsSection from './PillarsSection';
import { Footer, Header } from '../../components'

import '../../stylesheets/components/footer.css';
import '../../stylesheets/pages/landing.css';

const LandingPage = () => (
  <div id="landing">
    <Header />
    <div className="container">
      <CoverSection />
      <div className="content-container">
        <PillarsSection />
      </div>
      <Footer />
    </div>
  </div>
);

export default LandingPage;
