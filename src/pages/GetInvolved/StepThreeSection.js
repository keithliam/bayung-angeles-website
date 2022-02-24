import React from 'react';
import { SocialMediaLinks } from '../../components';
import { STEP_THREE_SECTION_ID } from '../../constants';
import { StandardSection, SectionHeaderHighlight, StepNumber } from './components';

const StepNum = () => <StepNumber number={3} />;

const Header = () => (
  <>
    Follow <SectionHeaderHighlight text="our" /> social media accounts
  </>
);

const Content = () => <SocialMediaLinks linkClassName="social-media-link" color="blue" />;

const StepThreeSection = () => (
  <StandardSection
    id={STEP_THREE_SECTION_ID}
    absoluteComponent={StepNum}
    headerComponent={Header}
    contentComponent={Content}
  />
);

export default StepThreeSection;
