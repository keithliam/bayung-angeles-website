import React from 'react';

const SectionContentLink = ({ className, href, text }) => (
  <a className={className} href={href} target="_blank" rel="noreferrer">
    {text}
  </a>
);

export default SectionContentLink;
