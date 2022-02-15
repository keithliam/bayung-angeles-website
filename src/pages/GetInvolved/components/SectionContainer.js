import React from 'react';
import classNames from 'classnames';

const SectionContainer = ({ className, children }) => (
  <div className={classNames('content-section', className)}>{children}</div>
);

export default SectionContainer;
