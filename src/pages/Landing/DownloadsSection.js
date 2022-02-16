import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { prefix } from 'inline-style-prefixer';
import { CTAButton } from '../../components';
import { getInvolved } from '../../routes';
import { DOWNLOAD_ASSETS_SECTION_ID } from '../../constants';
import { scrollToElementAvoidHeader } from '../../helpers';

import { previewAssets } from '../../data/downloadsSection';

const DownloadsSection = () => (
  <div className="downloads">
    <div className="downloads-content">
      <span className="heading-line">Download wallpapers, stickers, Facebook frame, and more.</span>
      <CTAButton
        className="cta-btn"
        color="gold"
        text="Downloads"
        hashlink={`${getInvolved.pathname}#${DOWNLOAD_ASSETS_SECTION_ID}`}
      />
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

const DownloadAssetPreview = ({ asset: { image, style, name } }) => (
  <HashLink
    className="downloads-asset"
    style={prefix(style)}
    to={`${getInvolved.pathname}#${DOWNLOAD_ASSETS_SECTION_ID}`}
    scroll={scrollToElementAvoidHeader}
    smooth
  >
    <img className="asset-image" src={image} alt={name} />
  </HashLink>
);

export default DownloadsSection;
