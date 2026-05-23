import React from 'react';
import DownloadButton from '../components/DownloadButton';

function Download() {
  return (
    <div className="download-page">
      <h1>Download Our App</h1>
      <div className="download-section">
        <DownloadButton platform="Android" version="1.0.0" />
        <DownloadButton platform="iOS" version="1.0.0" />
        <DownloadButton platform="Windows" version="1.0.0" />
      </div>
    </div>
  );
}

export default Download;
