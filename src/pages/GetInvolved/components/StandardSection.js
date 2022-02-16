import React from 'react';
import SectionContainer from './SectionContainer';
import { CTAButton } from '../../../components';

const StandardSection = ({
  className,
  absoluteComponent,
  headerComponent,
  contentComponent,
  previewComponent,
  link,
  ctaLinkText,
}) => (
  <SectionContainer className={className}>
    {absoluteComponent && absoluteComponent()}
    <div className="section-content">
      {headerComponent && <h2 className="section-header">{headerComponent()}</h2>}
      {contentComponent && <span className="content">{contentComponent()}</span>}
      {link && <CTAButton className="cta-btn" color="gold" text={ctaLinkText} href={link} />}
    </div>
    {previewComponent && previewComponent()}
  </SectionContainer>
);

export default StandardSection;
