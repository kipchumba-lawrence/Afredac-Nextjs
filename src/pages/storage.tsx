// pages/upload.js
import React from 'react';
import Fileupload from '../../components/fileupload'; 
import DatasetForm from '../../components/datasetform';

// const client =  create()
// client.login('zaphod@beeblebrox.galaxy')

const Storage = () => {
  return (
    <div className='container'>
      <DatasetForm />
      <Fileupload />
    </div>
  );
};

export default Storage;
