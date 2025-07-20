import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './sprays-styles.css';

type DataSpray = {
  uuid: string;
  displayName: string;
  fullTransparentIcon?: string;
};

const AppSpray = () => {
  const [data, setData] = useState<DataSpray[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://valorant-api.com/v1/sprays');
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
    <div className="sprays-page">
      <header className="sprays-header">
        <Link to="/" className="sprays-back">
          <span className="sprays-back-icon">←</span>
          <span className="sprays-back-text">Voltar</span>
        </Link>
        <h1 className="sprays-title">Sprays</h1>
      </header>
      <main className="sprays-main">
        {loading && <div className="sprays-loading">Carregando...</div>}
        {error && <div className="sprays-error">Erro: {error}</div>}
        <div className="sprays-grid">
          {data.map(item => (
            <div className="spray-card" key={item.uuid}>
              <div className="spray-card-img-wrapper">
                {item.fullTransparentIcon ? (
                  <img
                    className="spray-card-img"
                    src={item.fullTransparentIcon}
                    alt={item.displayName}
                  />
                ) : (
                  <span className="spray-card-img-notfound">
                    Imagem não encontrada
                  </span>
                )}
              </div>
              <div className="spray-card-footer">
                <span className="spray-card-name">{item.displayName}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AppSpray;
