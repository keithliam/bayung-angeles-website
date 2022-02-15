import React from 'react';
import { StandardSection, SectionHeaderHighlight, StepNumber, ImagePreview } from './components';
import fbFrame from '../../assets/images/ba-fb-frame.png';

const StepNum = () => <StepNumber number={5} />;

const Header = () => (
  <>
    Use <SectionHeaderHighlight text="our" /> Facebook frame
  </>
);

const Preview = () => <ImagePreview src={fbFrame} alt="Facebook frame" />;

const StepFiveSection = () => (
  <StandardSection
    absoluteComponent={StepNum}
    headerComponent={Header}
    previewComponent={Preview}
    link="https://bit.ly/bayung-angeles-fb-frame"
    ctaLinkText="Try Facebook frame"
  />
);

export default StepFiveSection;
