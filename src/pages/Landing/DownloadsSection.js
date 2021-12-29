import React from 'react';
import { prefix } from 'inline-style-prefixer';
import { CTAButton } from '../../components';

import { previewAssets } from '../../data/downloadsSection';

const DownloadsSection = () => (
  <div className="downloads">
    <div className="downloads-content">
      <span className="heading-line">Download wallpapers, stickers, Facebook frame, and more.</span>
      <CTAButton className="cta-btn" color="gold" text="Downloads" />
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
  <a className="downloads-asset" style={prefix(style)} href={link}>
    <img className="asset-image" src={image} alt={name} />
  </a>
);

export default DownloadsSection;
