import classNames from 'classnames';
import React from 'react';

const DownloadsPreview = ({ className, previews }) => (
  <div className={classNames('downloads-preview', className)}>
    {previews.map(({ preview, link }) => (
      <a key={link} className="preview-item" href={link} target="_blank" rel="noreferrer">
        <img src={preview} alt="Download preview" />
      </a>
    ))}
  </div>
);

export default DownloadsPreview;
