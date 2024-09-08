// pages/upload.js

import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import DatasetForm from '../../components/datasetForm'; // Adjust the path if needed

const UploadPage = () => {
  return (
    <div>
        <ConnectButton />
      <DatasetForm />
    </div>
  );
};

export default UploadPage;
