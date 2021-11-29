import '../stylesheets/components/socialMediaLink.css';

const SocialMediaLink = ({ bitlyBackHalf, icon, alt }) => (
  <a href={`https://bit.ly/${bitlyBackHalf}`} className="social-media-link">
    <img src={icon} alt={alt} />
  </a>
);

export default SocialMediaLink;
