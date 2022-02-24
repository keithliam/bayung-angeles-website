import React from 'react';
import { HashLink } from 'react-router-hash-link';
import classNames from 'classnames';
import { scrollToElementAvoidHeader } from '../helpers';

const CTAButton = ({ className: customClassname, color, text, onClick, href, hashlink }) => {
  const className = classNames('cta-button', customClassname, {
    'btn-blue': color === 'blue',
    'btn-gold': color === 'gold',
  });

  if (hashlink) {
    return (
      <HashLink
        className={className}
        to={hashlink}
        onClick={onClick}
        scroll={scrollToElementAvoidHeader}
        smooth
      >
        {text}
      </HashLink>
    );
  }

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
