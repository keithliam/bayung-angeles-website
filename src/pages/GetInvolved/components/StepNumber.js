import React from 'react';
import classNames from 'classnames';

const StepNumber = ({ className, number }) => (
  <span className={classNames('step-num', className)}>{number}</span>
);

export default StepNumber;
