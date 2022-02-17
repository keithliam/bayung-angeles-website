import React from 'react';
import { ImagePreview, StandardSection } from './components';
import brandGuidelinesPreview from '../../assets/images/ba-brand-assets-preview.png';

const LINK = 'https://bit.ly/bayung-angeles-facebook-page';

const Header = () => 'Brand Assets';

const Content = () => 'LOGOS & FONTS AVAILABLE FOR DOWNLOAD';

const Preview = () => (
  <ImagePreview
    className="brand-preview"
    src={brandGuidelinesPreview}
    alt="Brand assets preview"
    link={LINK}
  />
);

const BrandAssetsSection = () => (
  <StandardSection
    headerComponent={Header}
    contentComponent={Content}
    previewComponent={Preview}
    link={LINK}
    ctaLinkText="Download"
  />
);

export default BrandAssetsSection;
