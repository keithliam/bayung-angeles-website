import React from 'react';
import { ImagePreview, StandardSection } from './components';
import { brandAssetsLink } from '../../data/downloads';
import brandGuidelinesPreview from '../../assets/images/ba-brand-assets-preview.png';

const Header = () => 'Brand Assets';

const Content = () => 'LOGOS & FONTS AVAILABLE FOR DOWNLOAD';

const Preview = () => (
  <ImagePreview
    className="brand-preview"
    src={brandGuidelinesPreview}
    alt="Brand assets preview"
    link={brandAssetsLink}
  />
);

const BrandAssetsSection = () => (
  <StandardSection
    headerComponent={Header}
    contentComponent={Content}
    previewComponent={Preview}
    link={brandAssetsLink}
    ctaLinkText="Download"
  />
);

export default BrandAssetsSection;
