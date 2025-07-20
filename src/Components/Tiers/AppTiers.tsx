import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './tiers-styles.css';

interface InnerTier {
  divisionName: string;
  rankTriangleUpIcon: string;
  tierName: string;
}

interface DataTiers {
  uuid: string;
  devName: string;
  tiers: InnerTier[];
}

const AppTiers: React.FC = () => {
  const [data, setData] = useState<DataTiers[]>([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://valorant-api.com/v1/competitivetiers'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData.data);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Erro desconhecido');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="tiers-page">
      <header className="tiers-header">
        <Link to="/" className="tiers-back">
          <span className="tiers-back-icon">←</span>
          <span className="tiers-back-text">Voltar</span>
        </Link>
        <h1 className="tiers-title">Tiers</h1>
      </header>
      <main className="tiers-main">
        {loading && <div className="tiers-loading">Carregando...</div>}
        {error && <div className="tiers-error">Erro: {error}</div>}
        <div className="tiers-grid">
          {data
            .filter(tier => tier.devName !== 'Unranked')
            .map(tier =>
              tier.tiers && tier.tiers.length > 0
                ? tier.tiers
                    .filter(innerTier => innerTier.divisionName !== 'UNUSED')
                    .map((innerTier, index) => (
                      <div className="tier-card" key={`${tier.uuid}-${index}`}>
                        <div className="tier-card-img-wrapper">
                          <img
                            src={innerTier.rankTriangleUpIcon}
                            alt={innerTier.tierName}
                            className="tier-card-img"
                          />
                        </div>
                        <div className="tier-card-footer">
                          <span className="tier-card-name">
                            {innerTier.tierName}
                          </span>
                        </div>
                      </div>
                    ))
                : null
            )}
        </div>
      </main>
    </div>
  );
};

export default AppTiers;
