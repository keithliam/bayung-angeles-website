import React from 'react';
import Img from 'react-cool-img';
import classNames from 'classnames';

import spinner from '../../../assets/images/spinner.gif';

const ImagePreview = ({ className, src, alt, link }) => (
  <a
    className={classNames('image-preview-link', className)}
    href={link}
    target="_blank"
    rel="noreferrer"
  >
    <Img className="image-preview" src={src} placeholder={spinner} alt={alt} />
  </a>
);

export default ImagePreview;
