import React from 'react';
import classNames from 'classnames';
import StepOneSection from './StepOneSection';
import StepTwoSection from './StepTwoSection';
import StepThreeSection from './StepThreeSection';
import StepFourSection from './StepFourSection';
import StepFiveSection from './StepFiveSection';
import DonationSection from './DonationSection';
import BrandGuidelinesSection from './BrandGuidelinesSection';
import BrandAssetsSection from './BrandAssetsSection';
import StickersSection from './StickersSection';

import cover from '../../assets/images/pisamban-maragul.png';
import PostersWallpapersSection from './PostersWallpapersSection';

const Section = ({ headingClassName, title, subtitle, children }) => (
  <>
    <div className={classNames('heading', headingClassName)}>
      <img src={cover} alt="" />
      <div className="heading-gradient" />
      <h1>{title}</h1>
      <span>{subtitle}</span>
    </div>
    <div className="content-container">{children}</div>
  </>
);

const GetInvolved = () => (
  <div id="get-involved">
    <Section
      headingClassName="heading-first"
      title="Get Involved 🤝"
      subtitle="Each one of us can make a difference."
    >
      <StepOneSection />
      <StepTwoSection />
      <StepThreeSection />
      <StepFourSection />
      <StepFiveSection />
      <DonationSection />
    </Section>
    <Section title="Download Assets 💾" subtitle="Introduce others to the movement.">
      <BrandGuidelinesSection />
      <BrandAssetsSection />
      <StickersSection />
      <PostersWallpapersSection />
    </Section>
  </div>
);

export default GetInvolved;
