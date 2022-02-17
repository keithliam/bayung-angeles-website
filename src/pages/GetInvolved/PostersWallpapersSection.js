import React from 'react';
import { allPostersWallpapersLink, postersWallpapers } from '../../data/stickerDownloads';
import { DownloadsPreview, StandardSection } from './components';

const Header = () => 'Poster & Wallpaper Designs';

const Content = () => (
  <DownloadsPreview className="poster-wallpaper-designs-preview" previews={postersWallpapers} />
);

const PostersWallpapersSection = () => (
  <StandardSection
    headerComponent={Header}
    contentComponent={Content}
    link={allPostersWallpapersLink}
    ctaLinkText="Download All"
  />
);

export default PostersWallpapersSection;
