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

    const formData = {
      name,
      size,
      category,
      file,
      address
    };

    console.log('Form data:', formData);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Upload Dataset</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Size:</label>
          <input
            type="number"
            className="form-control"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Category:</label>
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="science">Science</option>
            <option value="technology">Technology</option>
            <option value="art">Art</option>
            <option value="education">Education</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Upload File:</label>
          <input
            type="file"
            className="form-control"
            onChange={handleFileChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default DatasetForm;
