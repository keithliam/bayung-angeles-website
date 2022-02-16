import React from 'react';
import classNames from 'classnames';

const ImagePreview = ({ className, src, alt, link }) => (
  <a
    className={classNames('image-preview-link', className)}
    href={link}
    target="_blank"
    rel="noreferrer"
  >
    <img className="image-preview" src={src} alt={alt} />
  </a>
);

export default ImagePreview;
