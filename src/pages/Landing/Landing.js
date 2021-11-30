import CoverSection from './CoverSection';
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
      <div className="content-container"></div>
      <Footer />
    </div>
  </div>
);

export default LandingPage;
