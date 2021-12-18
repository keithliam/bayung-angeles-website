import React from 'react';
import { CTAButton } from '../../components';

import { previewAssets } from '../../data/downloadsSection';

const DownloadsSection = () => (
  <div className="downloads">
    <div className="downloads-content">
      <div className="downloads-heading">
        <span className="heading-line">Download wallpapers, stickers</span>
        <span className="heading-line">Facebook frame, and more.</span>
      </div>
      <CTAButton className="downloads-cta" color="gold" text="Downloads" />
    </div>
    <div className="downloads-assets-container">
      <div className="downloads-assets">
        {previewAssets.map(asset => (
          <DownloadAssetPreview key={asset.name} asset={asset} />
        ))}
      </div>
    </div>
  </div>
);

const DownloadAssetPreview = ({ asset: { image, link, style, name } }) => (
  <a className="downloads-asset" style={style} href={link}>
    <img src={image} alt={name} />
  </a>
);

export default DownloadsSection;
