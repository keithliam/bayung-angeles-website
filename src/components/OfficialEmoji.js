import React from 'react';

const OfficialEmoji = ({ color = 'yellow' }) => (
  <span className="official-emoji">{color === 'yellow' ? '☝️' : '☝🏻'}</span>
);

export default OfficialEmoji;
