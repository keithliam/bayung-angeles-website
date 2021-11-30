import { PhotoCredit, SocialMediaLink } from '../../components'
import cover from '../../assets/images/pisamban-maragul.png'
import coverOverlay from '../../assets/images/pisamban-maragul-isolated.png'
import wingGold from '../../assets/images/wing-gold.svg'
import facebook from '../../assets/images/social-media-icons/facebook-blue.svg';
import instagram from '../../assets/images/social-media-icons/instagram-blue.svg';
import twitter from '../../assets/images/social-media-icons/twitter-blue.svg';
import tiktok from '../../assets/images/social-media-icons/tiktok-blue.svg';
import caratDown from '../../assets/images/carat-down.svg';

const CoverSection = () =>(
  <div className="cover-container">
    <img src={cover} className="ba-cover" alt="cover" />
    <div className="cover-headline">
      <h1>Báyung <span>Ángeles<img src={wingGold} alt="wing" /></span></h1>
      <img src={coverOverlay} className="ba-cover" alt="cover" />
      <h4>Be a part of the movement</h4>
      <span>Stay connected. Follow our socials.</span>
      <div className="social-media-links">
        <SocialMediaLink bitlyBackHalf="bayung-angeles-facebook" icon={facebook} alt="facebook" />
        <SocialMediaLink bitlyBackHalf="bayung-angeles-instagram" icon={instagram} alt="instagram" />
        <SocialMediaLink bitlyBackHalf="bayung-angeles-twitter" icon={twitter} alt="twitter" />
        <SocialMediaLink bitlyBackHalf="bayung-angeles-tiktok" icon={tiktok} alt="tiktok" />
      </div>
      <div className="cover-gradient">
        <button>
          <img src={caratDown} className="scroll-down-indicator" alt="" />
        </button>
        <PhotoCredit title="Pisamban Maragul" name="Bruno Tiotuico" link="#" />
      </div>
    </div>
  </div>
);

export default CoverSection;