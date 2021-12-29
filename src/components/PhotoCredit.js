import React from 'react';
import classNames from 'classnames';

const PhotoCredit = ({ className, title, name, link }) => (
  <a className={classNames('photo-credit', className)} href={link}>
    <span>{title}</span> <span>© {name}</span>
  </a>
);

export default PhotoCredit;
