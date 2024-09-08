// components/DatasetForm.jsx

import React, { useState } from 'react';
import { useAccount } from 'wagmi';

const DatasetForm = () => {
  const { address } = useAccount();
  const [name, setName] = useState('');
  const [size, setSize] = useState('');
  const [category, setCategory] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!address) {
      alert('Please connect your wallet first');
      return;
    }

    // Form data
    const formData = {
      name,
      size,
      category,
      file,
    };

    // Call your smart contract function here
    // Example:
    // await uploadDatasetToBlockchain(formData);

    console.log('Form data:', formData);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Upload Dataset</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Size:</label>
          <input
            type="number"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="science">Science</option>
            <option value="technology">Technology</option>
            <option value="art">Art</option>
            <option value="education">Education</option>
            {/* Add more categories as needed */}
          </select>
        </div>
        <div>
          <label>Upload File:</label>
          <input
            type="file"
            onChange={handleFileChange}
            required
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default DatasetForm;
