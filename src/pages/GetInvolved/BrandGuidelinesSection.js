import React from 'react';
import { ImagePreview, StandardSection } from './components';
import { brandGuideLink } from '../../data/downloads';
import brandGuidelinesPreview from '../../assets/images/ba-brand-identity-preview.png';

const Header = () => 'Visual Identity & Guidelines';

const Content = () => 'FOLLOW THESE GUIDELINES WHEN USING OUR MEDIA ASSETS';

const Preview = () => (
  <ImagePreview
    className="brand-preview"
    src={brandGuidelinesPreview}
    alt="Visual identity &amp; guidelines document preview"
    link={brandGuideLink}
  />
);

const BrandGuidelinesSection = () => (
  <StandardSection
    className="brand-guidelines"
    headerComponent={Header}
    contentComponent={Content}
    previewComponent={Preview}
    link={brandGuideLink}
    ctaLinkText="Download"
  />
);

export default BrandGuidelinesSection;
