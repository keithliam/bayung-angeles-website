import React, { Fragment } from 'react';
import {
  StandardSection,
  SectionHeaderHighlight,
  SectionContentLink,
  StepNumber,
} from './components';
import { teamSocialMediaLinks } from '../../data/socialMediaLinks';

const StepNum = () => <StepNumber className="step-num" number={4} />;

const Header = () => (
  <>
    Follow <SectionHeaderHighlight text="our" /> team
  </>
);

const Content = () => (
  <div className="team-links">
    {teamSocialMediaLinks.map(({ name: memberName, links }) => (
      <Fragment key={memberName}>
        <span className="member-name">{memberName}:</span>
        <div className="member-links">
          {links.map(({ name: linkName, link }) => (
            <SectionContentLink
              key={linkName}
              className="member-link"
              href={link}
              text={linkName}
            />
          ))}
        </div>
      </Fragment>
    ))}
  </div>
);

const StepFourSection = () => (
  <StandardSection
    className="step-4"
    absoluteComponent={StepNum}
    headerComponent={Header}
    contentComponent={Content}
  />
);

export default StepFourSection;
