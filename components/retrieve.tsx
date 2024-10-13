import React, { useEffect, useState } from 'react';
import { useContractRead, useAccount } from 'wagmi';
import { abi } from '../abi/DatasetRegistry.json';
import styles from '../src/styles/storage.module.css'; // Using CSS Modules

const contractAddress = '0x948e11468314753B813fE3e30765e33E6Ce5dE29';

const RetrieveDatasets = () => {
  const { address, isConnected } = useAccount();
  const [datasets, setDatasets] = useState([]);
  interface Dataset {
    cid: string;
    name: string;
    category: string;
    owner: string;
  }
  // Fetch all datasets using the getAllDatasets function
  const { data, isError, isLoading } = useContractRead({
    address: contractAddress,
    abi,
    functionName: 'getAllDatasets',
    watch: true, // Automatically refresh data
  });

  useEffect(() => {
    if (data) {
      setDatasets(data);
    }
  }, [data]);
console.log(data);
  if (isLoading) return <p>Loading datasets...</p>;
  if (isError) return <p>Error loading datasets.</p>;

  return (
    <div className={`container mt-5 ${styles.container}`}>
      <h1 className={styles.heading}>Available Datasets</h1>
      {isConnected ? (
        <div className="row">
          {datasets.map((dataset, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div
                className={`card ${styles.datasetCard}`}
                onClick={() => window.open(`https://${dataset.cid}.ipfs.w3s.link/`, '_blank')}
              >
                <div className="card-body">
                  <h5 className="card-title">{dataset.name}</h5>
                  <p className="card-text">
                    <strong>Category:</strong> {dataset.category}
                  </p>
                  <p className="card-text">
                    <strong>Owner:</strong> {dataset.owner}
                  </p>
                  <a
                    href={`https://${dataset.cid}.ipfs.w3s.link/`}
                    target="_blank"
                    className="btn btn-primary"
                    rel="noopener noreferrer"
                  >
                    Download Dataset
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Please connect your wallet.</p>
      )}
    </div>
  );
};

export default RetrieveDatasets;
