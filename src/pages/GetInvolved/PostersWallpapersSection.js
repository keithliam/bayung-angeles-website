import React from 'react';
import { postersWallpapers } from '../../data/stickerDownloads';
import { DownloadsPreview, StandardSection } from './components';

const Header = () => 'Poster & Wallpaper Designs';

const Content = () => (
  <DownloadsPreview
    itemClassName="poster-wallpaper-designs-preview-item"
    previews={postersWallpapers}
  />
);

const PostersWallpapersSection = () => (
  <StandardSection
    headerComponent={Header}
    contentComponent={Content}
    link="https://bit.ly/bayung-angeles-facebook-page"
    ctaLinkText="Download All"
  />
);

export default PostersWallpapersSection;
