import React from 'react';
import { HashLink } from 'react-router-hash-link';
import Img from 'react-cool-img';
import { prefix } from 'inline-style-prefixer';
import { CTAButton } from '../../components';
import { DOWNLOAD_ASSETS_SECTION_ID, GET_INVOLVED_PATH } from '../../constants';
import { scrollToElementAvoidHeader } from '../../helpers';

import { previewAssets } from '../../data/downloadsSection';

import spinner from '../../assets/images/spinner.gif';

const DownloadsSection = () => (
  <div className="downloads">
    <div className="downloads-content">
      <span className="heading-line">Download wallpapers, stickers, Facebook frame, and more.</span>
      <CTAButton
        className="cta-btn"
        color="gold"
        text="Downloads"
        hashlink={`${GET_INVOLVED_PATH}#${DOWNLOAD_ASSETS_SECTION_ID}`}
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
    to={`${GET_INVOLVED_PATH}#${DOWNLOAD_ASSETS_SECTION_ID}`}
    scroll={scrollToElementAvoidHeader}
    smooth
  >
    <Img className="asset-image" src={image} placeholder={spinner} alt={name} />
  </HashLink>
);

export default DownloadsSection;
