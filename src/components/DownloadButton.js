import React from 'react';

function DownloadButton({ platform, version }) {
  const handleDownload = () => {
    // Download logic here
    console.log(`Downloading ${platform} v${version}`);
  };

  return (
    <button className="download-button" onClick={handleDownload}>
      Download for {platform}
    </button>
  );
}

export default DownloadButton;
