import React from 'react';
import { stickers } from '../../data/stickerDownloads';
import { DownloadsPreview, StandardSection } from './components';

const Header = () => 'Sticker Designs';

const Content = () => <DownloadsPreview previews={stickers} />;

const StickersSection = () => (
  <StandardSection
    headerComponent={Header}
    contentComponent={Content}
    link="https://bit.ly/bayung-angeles-facebook-page"
    ctaLinkText="Download All"
  />
);

export default StickersSection;
