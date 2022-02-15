import React from 'react';
import classNames from 'classnames';

const ImagePreview = ({ className, src, alt }) => (
  <img className={classNames('image-preview', className)} src={src} alt={alt} />
);

export default ImagePreview;
