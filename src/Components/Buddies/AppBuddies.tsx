import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './buddies-styles.css';

type Buddy = {
  uuid: string;
  displayName: string;
  displayIcon: string;
};

const AppBuddies = () => {
  const [data, setData] = useState<Buddy[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://valorant-api.com/v1/buddies');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData.data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="buddies-page">
      <header className="buddies-header">
        <Link to="/" className="buddies-back">
          <span className="buddies-back-icon">←</span>
          <span className="buddies-back-text">Voltar</span>
        </Link>
        <h1 className="buddies-title">Buddies</h1>
      </header>
      <main className="buddies-main">
        {loading && <div className="buddies-loading">Carregando...</div>}
        {error && <div className="buddies-error">Erro: {error}</div>}
        <div className="buddies-grid">
          {data.map(item => (
            <div className="buddy-card" key={item.uuid}>
              <div className="buddy-card-img-wrapper">
                <img
                  className="buddy-card-img"
                  src={item.displayIcon}
                  alt={item.displayName}
                />
              </div>
              <div className="buddy-card-footer">
                <span className="buddy-card-name">{item.displayName}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AppBuddies;
