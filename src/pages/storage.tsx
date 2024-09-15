// pages/upload.js
import React from 'react';
import Fileupload from '../../components/fileupload'; 

// const client =  create()
// client.login('zaphod@beeblebrox.galaxy')

const Storage = () => {
  return (
    <div className='container'>
      <Fileupload />
    </div>
  );
};

export default Storage;
