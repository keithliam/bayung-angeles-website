import React from 'react';
import { StandardSection, SectionHeaderHighlight, StepNumber, ImagePreview } from './components';
import fbGroup from '../../assets/images/ba-fb-group.jpg';

const LINK = 'https://bit.ly/bayung-angeles-fb-group';

const StepNum = () => <StepNumber number={2} />;

const Header = () => (
  <>
    Join <SectionHeaderHighlight text="our" /> movement group
  </>
);

const Content = () => 'USE THE HASHTAG #BayungAngeles AND THE OFFICIAL EMOJI ☝️';

const Preview = () => <ImagePreview src={fbGroup} alt="Facebook group preview" link={LINK} />;

const StepTwoSection = () => (
  <StandardSection
    absoluteComponent={StepNum}
    headerComponent={Header}
    contentComponent={Content}
    previewComponent={Preview}
    link={LINK}
    ctaLinkText="Open Group"
  />
);

export default StepTwoSection;
