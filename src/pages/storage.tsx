// pages/upload.js
import React from 'react';
import Fileupload from '../../components/fileupload'; 
import DatasetForm from '../../components/datasetform';
import RetrieveDatasets from '../../components/retrieve';

// const client =  create()
// client.login('zaphod@beeblebrox.galaxy')

const Storage = () => {
  return (
    <div className='container'>
      <RetrieveDatasets />
    </div>
  );
};

export default Storage;
