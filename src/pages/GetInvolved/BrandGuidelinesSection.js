import React from 'react';
import { ImagePreview, StandardSection } from './components';
import brandGuidelinesPreview from '../../assets/images/ba-brand-identity-preview.png';

const LINK = 'https://bit.ly/bayung-angeles-facebook-page';

const Header = () => 'Visual Identity & Guidelines';

const Content = () => 'FOLLOW THESE GUIDELINES WHEN USING OUR MEDIA ASSETS';

const Preview = () => (
  <ImagePreview
    className="brand-preview"
    src={brandGuidelinesPreview}
    alt="Visual identity &amp; guidelines document preview"
    link={LINK}
  />
);

const BrandGuidelinesSection = () => (
  <StandardSection
    className="brand-guidelines"
    headerComponent={Header}
    contentComponent={Content}
    previewComponent={Preview}
    link={LINK}
    ctaLinkText="Download Here"
  />
);

export default BrandGuidelinesSection;
