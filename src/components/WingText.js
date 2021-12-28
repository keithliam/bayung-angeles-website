import React from 'react';
import classNames from 'classnames';

import wingGold from '../assets/images/wing-gold.svg';

const WingText = ({
  className,
  text,
  wingPosition, // 'start' or 'end'
}) => (
  <span className={classNames('wing-text', className)}>
    {text}
    <img className={wingPosition} src={wingGold} alt="wing" />
  </span>
);

export default WingText;
