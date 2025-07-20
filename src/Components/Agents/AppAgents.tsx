import React, { useState, useEffect } from 'react';
import './agents-styles.css';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Icon, CircularProgress, Box, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { DataAgent } from '../../../types';

// Mapeamento manual de país e gênero
const AGENT_EXTRA = {
  Killjoy: { country: 'Germany', gender: 'Female' },
  Raze: { country: 'Brazil', gender: 'Female' },
  Brimstone: { country: 'USA', gender: 'Male' },
  Viper: { country: 'USA', gender: 'Female' },
  Cypher: { country: 'Morocco', gender: 'Male' },
  Sova: { country: 'Russia', gender: 'Male' },
  Sage: { country: 'China', gender: 'Female' },
  Phoenix: { country: 'UK', gender: 'Male' },
  Omen: { country: 'Unknown', gender: 'Male' },
  Jett: { country: 'South Korea', gender: 'Female' },
  Breach: { country: 'Sweden', gender: 'Male' },
  Skye: { country: 'Australia', gender: 'Female' },
  Yoru: { country: 'Japan', gender: 'Male' },
  Astra: { country: 'Ghana', gender: 'Female' },
  KAYO: { country: 'Unknown', gender: 'Other' },
  Chamber: { country: 'France', gender: 'Male' },
  Neon: { country: 'Philippines', gender: 'Female' },
  Fade: { country: 'Turkey', gender: 'Female' },
  Harbor: { country: 'India', gender: 'Male' },
  Gekko: { country: 'USA', gender: 'Male' },
  Deadlock: { country: 'Norway', gender: 'Female' },
  // Adicione outros agentes conforme necessário
};

const AppAgents = () => {
  const [data, setData] = useState<DataAgent[]>([]);
  const [error, setError] = useState('');
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://valorant-api.com/v1/agents?isPlayableCharacter=true'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData.data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  const handlePrev = () => {
    setCurrent(prev => (prev === 0 ? data.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrent(prev => (prev === data.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="agents agents__carousel-bg">
      {error && <div className="agents__error">Error: {error}</div>}
      {data.length === 0 ? (
        <Box className="agents__loading">
          <CircularProgress isIndeterminate color="#FF4655" />
        </Box>
      ) : (
        <div className="agents__carousel agents__carousel--split">
          <button
            className="carousel__arrow carousel__arrow--left"
            onClick={handlePrev}
            aria-label="Anterior"
          >
            <ChevronLeftIcon boxSize={10} color="#FF4655" />
          </button>
          <div className="carousel__content carousel__content--split">
            {/* Lado esquerdo: vídeo/imagem, habilidades, infos */}
            <div className="carousel__left">
              <div className="carousel__media">
                {data[current].displayIcon ? (
                  <img
                    className="carousel__media-img"
                    src={data[current].displayIcon}
                    alt={data[current].displayName}
                  />
                ) : (
                  <p>Imagem não disponível</p>
                )}
              </div>
              <div className="carousel__bio-block">
                <h3 className="carousel__bio-title">//BIOGRAPHY//</h3>
                <p className="carousel__bio-text">
                  {data[current].description}
                </p>
                <div className="carousel__info-row">
                  <span className="carousel__info-label">
                    {AGENT_EXTRA[data[current].displayName]?.gender ||
                      'Unknown'}
                  </span>
                  <span className="carousel__info-desc">Gender</span>
                  <span className="carousel__info-label">
                    {AGENT_EXTRA[data[current].displayName]?.country ||
                      'Unknown'}
                  </span>
                  <span className="carousel__info-desc">Location</span>
                  <span className="carousel__info-label">
                    {data[current].role?.displayName || 'Unknown'}
                  </span>
                  <span className="carousel__info-desc">Role</span>
                </div>
              </div>
              <div className="carousel__abilities">
                {data[current].abilities.map((ab, idx) => (
                  <div className="carousel__ability" key={idx}>
                    {ab.displayIcon && (
                      <img
                        className="carousel__ability-icon"
                        src={ab.displayIcon}
                        alt={ab.displayName}
                      />
                    )}
                    <span className="carousel__ability-name">
                      {ab.displayName}
                    </span>
                    {ab.description && (
                      <span className="carousel__ability-tooltip">
                        {ab.description}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
            {/* Lado direito: arte do agente e nome na vertical */}
            <div className="carousel__right">
              <div className="carousel__vertical-name">
                {data[current].displayName.split('').map((l, i) => (
                  <span key={i}>{l}</span>
                ))}
              </div>
              {data[current].fullPortrait && (
                <img
                  className="carousel__agent-img"
                  src={data[current].fullPortrait}
                  alt={data[current].displayName}
                />
              )}
            </div>
          </div>
          <button
            className="carousel__arrow carousel__arrow--right"
            onClick={handleNext}
            aria-label="Próximo"
          >
            <ChevronRightIcon boxSize={10} color="#FF4655" />
          </button>
        </div>
      )}
    </div>
  );
};

export default AppAgents;
