import classNames from 'classnames';
import React from 'react';

const DownloadsPreview = ({ itemClassName, previews }) => (
  <div className="downloads-preview">
    {previews.map(({ preview, link }) => (
      <a
        key={link}
        className={classNames('preview-item', itemClassName)}
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        <img src={preview} alt="Download preview" />
      </a>
    ))}
  </div>
);

export default DownloadsPreview;
