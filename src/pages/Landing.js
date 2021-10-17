import { Footer } from '../components'
import logo from '../assets/images/ba-logo-transparent.png';
import banner from '../assets/images/ba-banner.jpg';
import '../stylesheets/pages/landing.css';

const LandingPage = () => (
  <div className="container">
    <img src={logo} className="ba-logo" alt="logo" />
    <img src={banner} className="ba-banner" alt="banner" />
    <Footer />
  </div>
);

export default LandingPage;
