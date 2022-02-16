import React from 'react';
import classNames from 'classnames';

const CTAButton = ({ className: customClassname, color, text, onClick, href }) => {
  const className = classNames('cta-button', customClassname, {
    'btn-blue': color === 'blue',
    'btn-gold': color === 'gold',
  });

  if (href) {
    return (
      <a className={className} href={href} target="_blank" rel="noreferrer" onClick={onClick}>
        {text}
      </a>
    );
  }

  return (
    <button className={className} type="button" onClick={onClick}>
      {text}
    </button>
  );
};

export default CTAButton;
