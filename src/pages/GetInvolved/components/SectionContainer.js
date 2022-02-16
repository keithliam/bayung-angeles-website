import React from 'react';
import classNames from 'classnames';

const SectionContainer = ({ id, className, children }) => (
  <div id={id} className={classNames('content-section', className)}>
    {children}
  </div>
);

export default SectionContainer;
