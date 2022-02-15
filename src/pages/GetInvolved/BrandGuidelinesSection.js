import React from 'react';
import { ImagePreview, StandardSection } from './components';
import brandGuidelinesPreview from '../../assets/images/ba-brand-guidlines-preview.png';

const Header = () => 'Brand Guidelines';

const Content = () => 'FOLLOW THESE GUIDELINES WHEN USING OUR MEDIA ASSETS.';

const Preview = () => (
  <ImagePreview
    className="brand-preview"
    src={brandGuidelinesPreview}
    alt="Brand guidelines document preview"
  />
);

const BrandGuidelinesSection = () => (
  <StandardSection
    className="brand-guidelines"
    headerComponent={Header}
    contentComponent={Content}
    previewComponent={Preview}
    link="https://bit.ly/bayung-angeles-facebook-page"
    ctaLinkText="Download Here"
  />
);

export default BrandGuidelinesSection;
