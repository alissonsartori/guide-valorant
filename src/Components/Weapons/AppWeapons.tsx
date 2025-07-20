import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './weapons-styles.css';
import { DataWeapons } from '../../../types';

const AppWeapons = () => {
  const [data, setData] = useState<DataWeapons[]>([]);
  const [error, setError] = useState<string | null>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://valorant-api.com/v1/weapons');
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
    <div className="weapons-page">
      <main className="weapons-main">
        {loading && <div className="weapons-loading">Carregando...</div>}
        {error && <div className="weapons-error">Erro: {error}</div>}
        <div className="weapons-grid">
          {data.map(item => (
            <div className="weapon-card" key={item.uuid}>
              <div className="weapon-card-img-wrapper">
                <img
                  className="weapon-card-img"
                  src={item.displayIcon}
                  alt={item.displayName}
                />
              </div>
              <div className="weapon-card-footer">
                <span className="weapon-card-name">{item.displayName}</span>
                <Link to={`/weapons/${item.uuid}`} className="weapon-card-link">
                  Mais detalhes
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AppWeapons;
