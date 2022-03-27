import React from 'react';
import Img from 'react-cool-img';
import classNames from 'classnames';

import wingGold from '../assets/images/wing-gold.svg';

const WingText = ({
  className,
  text,
  wingPosition, // 'start' or 'end'
}) => (
  <span className={classNames('wing-text', className)}>
    {text}
    <Img className={wingPosition} src={wingGold} alt="wing" />
  </span>
);

export default WingText;
