import React from 'react';
import classNames from 'classnames';

const ImagePreview = ({ className, src, alt, link }) => (
  <a className="image-preview-link" href={link} target="_blank" rel="noreferrer">
    <img className={classNames('image-preview', className)} src={src} alt={alt} />
  </a>
);

export default ImagePreview;
