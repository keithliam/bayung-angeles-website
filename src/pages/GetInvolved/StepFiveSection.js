import React from 'react';
import { StandardSection, SectionHeaderHighlight, StepNumber, ImagePreview } from './components';
import fbFrame from '../../assets/images/ba-fb-frame.png';

const LINK = 'https://bit.ly/bayung-angeles-fb-frame';

const StepNum = () => <StepNumber number={5} />;

const Header = () => (
  <>
    Use <SectionHeaderHighlight text="our" /> Facebook frame
  </>
);

const Preview = () => <ImagePreview src={fbFrame} alt="Facebook frame" link={LINK} />;

const StepFiveSection = () => (
  <StandardSection
    absoluteComponent={StepNum}
    headerComponent={Header}
    previewComponent={Preview}
    link={LINK}
    ctaLinkText="Try Facebook frame"
  />
);

export default StepFiveSection;
