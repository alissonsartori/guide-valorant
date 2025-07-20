import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../global-styles.css';
import './bundles-styles.css';

const AppBundles = () => {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://valorant-api.com/v1/bundles');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData.data);
      } catch (error: any) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bundles-body">
      {error && <div className="bundles-error">Error: {error}</div>}
      {data.length === 0 ? (
        <div className="bundles-loading">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="bundles-grid">
          {data.map((item, index) => (
            <div className="bundle-card" key={index}>
              <div className="bundle-card-body">
                <img
                  src={item.displayIcon}
                  alt={item.displayName}
                  className="bundle-img"
                />
                <h1 className="bundle-name">{item.displayName}</h1>
              </div>
              <div className="bundle-card-footer">
                <Link to={`/bundles/${item.uuid}`} className="bundle-link">
                  <button className="bundle-more-btn">More</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AppBundles;
