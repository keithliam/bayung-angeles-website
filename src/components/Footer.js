import SocialMediaLink from './SocialMediaLink';
import facebook from '../assets/images/social-media-icons/facebook.svg';
import instagram from '../assets/images/social-media-icons/instagram.svg';
import twitter from '../assets/images/social-media-icons/twitter.svg';
import tiktok from '../assets/images/social-media-icons/tiktok.svg';

const Footer = () => (
  <footer>
    <div className="follow-text">
      <span>Follow </span><span>Báyung Ángeles</span>
    </div>
    <div className="social-media-links">
      <SocialMediaLink bitlyBackHalf="bayung-angeles-facebook" icon={facebook} alt="facebook" />
      <SocialMediaLink bitlyBackHalf="bayung-angeles-instagram" icon={instagram} alt="instagram" />
      <SocialMediaLink bitlyBackHalf="bayung-angeles-twitter" icon={twitter} alt="twitter" />
      <SocialMediaLink bitlyBackHalf="bayung-angeles-tiktok" icon={tiktok} alt="tiktok" />
    </div>
  </footer>
);

export default Footer;
