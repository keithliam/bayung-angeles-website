import React from 'react';
import { allStickersLink, stickers } from '../../data/downloads';
import { DownloadsPreview, StandardSection } from './components';

const Header = () => 'Sticker Designs';

const Content = () => <DownloadsPreview previews={stickers} />;

const StickersSection = () => (
  <StandardSection
    headerComponent={Header}
    contentComponent={Content}
    link={allStickersLink}
    ctaLinkText="Download All"
  />
);

export default StickersSection;
