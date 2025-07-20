import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './maps-styles.css';

type DataMaps = {
  uuid: string;
  displayName: string;
  listViewIconTall: string;
};

const AppMaps = () => {
  const [data, setData] = useState<DataMaps[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://valorant-api.com/v1/maps');
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
    <div className="maps-page">
      <header className="maps-header">
        <Link to="/" className="maps-back">
          <span className="maps-back-icon">←</span>
          <span className="maps-back-text">Voltar</span>
        </Link>
        <h1 className="maps-title">Maps</h1>
      </header>
      <main className="maps-main">
        {loading && <div className="maps-loading">Carregando...</div>}
        {error && <div className="maps-error">Erro: {error}</div>}
        <div className="maps-grid">
          {data.map(item => (
            <div className="map-card" key={item.uuid}>
              <div className="map-card-img-wrapper">
                <img
                  className="map-card-img"
                  src={item.listViewIconTall}
                  alt={item.displayName}
                />
              </div>
              <div className="map-card-footer">
                <span className="map-card-name">{item.displayName}</span>
                <Link to={`/maps/${item.uuid}`} className="map-card-link">
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

export default AppMaps;
