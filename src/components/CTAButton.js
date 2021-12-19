import React from 'react';
import classNames from 'classnames';

const CTAButton = ({ className, color, text, onClick }) => (
  <button
    className={classNames('cta-button', className, {
      'btn-blue': color === 'blue',
      'btn-gold': color === 'gold',
    })}
    type="button"
    onClick={onClick}
  >
    {text}
  </button>
);

export default CTAButton;
