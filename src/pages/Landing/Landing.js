import CoverSection from './CoverSection';
import PillarsSection from './PillarsSection';
import { Footer } from '../../components'

import '../../stylesheets/components/footer.css';
import '../../stylesheets/pages/landing.css';

const LandingPage = () => (
  <div id="landing">
    <header>
      <nav id="nav-links">
        <a href="#">Meet Our Team</a>
        <a href="#">Get Involved</a>
        <a href="#">Contact Us</a>
      </nav>
    </header>
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
