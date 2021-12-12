import React from 'react';

const SocialMediaLink = ({ bitlyBackHalf, icon, alt }) => (
  <a href={`https://bit.ly/${bitlyBackHalf}`} className="social-media-link">
    <img src={icon} alt={alt} />
  </a>
);

export default SocialMediaLink;
