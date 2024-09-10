import React, { useState } from 'react';
import { useAccount, useWriteContract } from 'wagmi'
import { abi } from '../abi/DataEntry.json';

const contractAddress = '0x904FE37aD81e93aa4dC72cF44BAE9d96bB196735';

const DatasetForm = () => {
  const { address, isConnected } = useAccount();
  const [data, setData] = useState('');
  
  const { writeContract, isLoading, isSuccess, isError, error } = useWriteContract();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isConnected) {
      alert('Please connect your wallet first');
      return;
    }
    
    writeContract({
      address: contractAddress,
      abi,
      functionName: 'createEntry',
      args: [data],
    });
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Data Entry</h1>
      {isConnected ? (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              value={data}
              onChange={(e) => setData(e.target.value)}
              placeholder="Enter data"
              required
            />
          </div>
          <button 
            type="submit" 
            className="btn btn-primary"
            disabled={isLoading}
          >
            {isLoading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      ) : (
        <p>Please connect your wallet.</p>
      )}
      {isSuccess && (
        <div className="alert alert-success mt-3">
          Data entry successful!
        </div>
      )}
      {isError && (
        <div className="alert alert-danger mt-3">
          Error: {error?.message}
        </div>
      )}
    </div>
  );
};

export default DatasetForm;