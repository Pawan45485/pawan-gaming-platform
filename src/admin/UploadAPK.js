import React, { useState } from 'react';

function UploadAPK() {
  const [file, setFile] = useState(null);

  const handleUpload = (e) => {
    e.preventDefault();
    // APK upload logic here
    console.log('Uploading APK:', file);
  };

  return (
    <div className="upload-apk">
      <h2>Upload APK</h2>
      <form onSubmit={handleUpload}>
        <input
          type="file"
          accept=".apk"
          onChange={(e) => setFile(e.target.files[0])}
          required
        />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default UploadAPK;
