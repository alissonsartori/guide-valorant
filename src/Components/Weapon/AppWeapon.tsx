import React, { useState, useEffect } from 'react';
import './weapon-styles.css';
import { Card, CardHeader, CardBody, Icon, Spinner } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { useParams } from 'react-router-dom';
import { DataWeapons } from '../../../types';

const AppWeapon = () => {
  const [data, setData] = useState<DataWeapons | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://valorant-api.com/v1/weapons/${id}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div className="weapon-detail__error">Error: {error}</div>;
  }

  if (!data) {
    return <div className="weapon-detail__error">No data available</div>;
  }

  return (
    <div className="weapon-detail">
      <div className="weapon-detail__container">
        <div className="weapon-detail__breadcrumb">
          <a href="/weapons">
            <Icon
              as={ChevronLeftIcon}
              width="2em"
              height="2em"
              color={'#FF4655'}
            />
            Voltar para armas
          </a>
        </div>
        <div className="weapon-detail__header">
          <img
            className="weapon-detail__image"
            src={data.displayIcon}
            alt={data.displayName}
          />
          <h1 className="weapon-detail__name">{data.displayName}</h1>
          <div className="weapon-detail__category">{data.category}</div>
        </div>
        <div className="weapon-detail__stats">
          <div className="weapon-detail__stats-title">Estatísticas da Arma</div>
          <div className="weapon-stats-grid">
            <div className="weapon-stat">
              <div className="weapon-stat__label">Custo</div>
              <div className="weapon-stat__value">N/A</div>
            </div>
            <div className="weapon-stat">
              <div className="weapon-stat__label">Fire Rate</div>
              <div className="weapon-stat__value">
                {data.weaponStats ? data.weaponStats.fireRate : 'N/A'}
              </div>
            </div>
            <div className="weapon-stat">
              <div className="weapon-stat__label">Magazine Size</div>
              <div className="weapon-stat__value">
                {data.weaponStats ? data.weaponStats.magazineSize : 'N/A'}
              </div>
            </div>
            <div className="weapon-stat">
              <div className="weapon-stat__label">Run Speed Multiplier</div>
              <div className="weapon-stat__value">
                {data.weaponStats ? data.weaponStats.runSpeedMultiplier : 'N/A'}
              </div>
            </div>
            <div className="weapon-stat">
              <div className="weapon-stat__label">Equip Time (s)</div>
              <div className="weapon-stat__value">
                {data.weaponStats ? data.weaponStats.equipTimeSeconds : 'N/A'}
              </div>
            </div>
            <div className="weapon-stat">
              <div className="weapon-stat__label">Reload Time (s)</div>
              <div className="weapon-stat__value">
                {data.weaponStats ? data.weaponStats.reloadTimeSeconds : 'N/A'}
              </div>
            </div>
            <div className="weapon-stat">
              <div className="weapon-stat__label">First Bullet Accuracy</div>
              <div className="weapon-stat__value">
                {data.weaponStats
                  ? data.weaponStats.firstBulletAccuracy
                  : 'N/A'}
              </div>
            </div>
            <div className="weapon-stat">
              <div className="weapon-stat__label">Shotgun Pellet Count</div>
              <div className="weapon-stat__value">
                {data.weaponStats ? data.weaponStats.shotgunPelletCount : 'N/A'}
              </div>
            </div>
          </div>
        </div>
        <div className="weapon-detail__description">
          <div className="weapon-detail__description-title">Skins</div>
          <div className="weapon-skins-grid">
            {(data.skins || [])
              .filter(skin => !skin.displayName.includes('Standard'))
              .map((skin, index) => (
                <div key={index} className="weapon-skin-card">
                  {skin.displayIcon ? (
                    <img
                      src={skin.displayIcon}
                      alt={skin.displayName}
                      className="weapon-skin-card__image"
                    />
                  ) : (
                    <span>Imagem não encontrada</span>
                  )}
                  <div className="weapon-skin-card__name">
                    {skin.displayName}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppWeapon;
