import React from 'react';
import {
  StandardSection,
  SectionHeaderHighlight,
  SectionContentLink,
  StepNumber,
  ImagePreview,
} from './components';
import fbPage from '../../assets/images/ba-fb-page.png';

const LINK = 'https://bit.ly/bayung-angeles-facebook-page';

const StepNum = () => <StepNumber className="step-num" number={1} />;

const Header = () => (
  <>
    Like and follow <SectionHeaderHighlight text="our" /> Facebook page
  </>
);

const Content = () => (
  <>
    <SectionContentLink
      href="https://www.facebook.com/help/299284303519326"
      text="TURN ON NOTIFICATIONS"
    />{' '}
    TO RECEIVE THE LATEST UPDATES.
  </>
);

const Preview = () => <ImagePreview src={fbPage} alt="Facebook page preview" link={LINK} />;

const StepOneSection = () => (
  <StandardSection
    className="step-1"
    absoluteComponent={StepNum}
    headerComponent={Header}
    contentComponent={Content}
    previewComponent={Preview}
    link={LINK}
    ctaLinkText="Open Page"
  />
);

export default StepOneSection;
