import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { useParams, Link } from 'react-router-dom';
import './map-styles.css';

interface Callout {
  regionName: string;
  superRegionName: string;
  location: {
    x: number;
    y: number;
  };
}

interface MapData {
  uuid: string;
  displayName: string;
  narrativeDescription?: string;
  tacticalDescription?: string;
  coordinates: string;
  displayIcon: string;
  listViewIcon: string;
  listViewIconTall: string;
  splash: string;
  stylizedBackgroundImage: string;
  premierBackgroundImage: string;
  assetPath: string;
  mapUrl: string;
  xMultiplier: number;
  yMultiplier: number;
  xScalarToAdd: number;
  yScalarToAdd: number;
  callouts: Callout[];
}

const AppMap = () => {
  const [data, setData] = useState<MapData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://valorant-api.com/v1/maps/${id}`);
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
  }, [id]);

  if (loading) {
    return <div className="map-detail__loading">Carregando...</div>;
  }
  if (error) {
    return <div className="map-detail__error">Erro: {error}</div>;
  }
  if (!data) {
    return <div className="map-detail__error">Mapa não encontrado.</div>;
  }

  return (
    <div
      className="map-detail map-detail--bg"
      style={{
        backgroundImage: `url(${data.stylizedBackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="map-detail__container map-detail__container--center">
        <div className="map-detail__breadcrumb">
          <Link to="/maps" className="map-detail__back-link">
            <ChevronLeftIcon boxSize={7} color="#FF4655" /> Voltar para mapas
          </Link>
        </div>
        <h1 className="map-detail__name map-detail__name--top">
          {data.displayName}
        </h1>
        <div className="map-detail__image-wrapper">
          <img
            className="map-detail__image"
            src={data.displayIcon}
            alt={data.displayName}
          />
        </div>
        <div className="map-detail__row map-detail__row--center">
          <span className="map-detail__label">Coordenadas:</span>
          <span className="map-detail__value">{data.coordinates || 'N/A'}</span>
        </div>
        {data.narrativeDescription && (
          <div className="map-detail__description map-detail__description--center">
            <span className="map-detail__label">Descrição narrativa:</span>{' '}
            {data.narrativeDescription}
          </div>
        )}
        {data.tacticalDescription && (
          <div className="map-detail__description map-detail__description--center">
            <span className="map-detail__label">Descrição tática:</span>{' '}
            {data.tacticalDescription}
          </div>
        )}
        <div className="map-detail__icons">
          <div>
            <span className="map-detail__label">Ícone (listView):</span>
            <br />
            <img
              src={data.listViewIcon}
              alt="List View Icon"
              style={{ maxWidth: 200, margin: 8 }}
            />
          </div>
          <div>
            <span className="map-detail__label">Ícone Tall:</span>
            <br />
            <img
              src={data.listViewIconTall}
              alt="List View Icon Tall"
              style={{ maxWidth: 200, margin: 8 }}
            />
          </div>
        </div>
        <div className="map-detail__images">
          <div>
            <span className="map-detail__label">Splash:</span>
            <br />
            <img
              src={data.splash}
              alt="Splash"
              style={{ maxWidth: 700, margin: 8 }}
            />
          </div>
          <div>
            <span className="map-detail__label">Background estilizado:</span>
            <br />
            <img
              src={data.stylizedBackgroundImage}
              alt="Stylized Background"
              style={{ maxWidth: 700, margin: 8 }}
            />
          </div>
          <div>
            <span className="map-detail__label">Premier Background:</span>
            <br />
            <img
              src={data.premierBackgroundImage}
              alt="Premier Background"
              style={{ maxWidth: 700, margin: 8 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppMap;
