import React, { useState, useEffect } from 'react';
import { Icon } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { useParams, useNavigate } from 'react-router-dom';
import './skins-bundle-styles.css';

const AppBundlesSkins = () => {
  const [data, setData] = useState<any | null>(null);
  const [dataSkins, setDataSkins] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const [bundleRes, skinsRes] = await Promise.all([
          fetch(`https://valorant-api.com/v1/bundles/${id}`),
          fetch(`https://valorant-api.com/v1/weapons/skins`),
        ]);
        if (!bundleRes.ok) throw new Error('Erro ao buscar bundle');
        if (!skinsRes.ok) throw new Error('Erro ao buscar skins');
        const bundleJson = await bundleRes.json();
        const skinsJson = await skinsRes.json();
        setData(bundleJson.data);
        setDataSkins(skinsJson.data);
      } catch (err: any) {
        setError(err.message || 'Erro desconhecido');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  const filteredSkins =
    data && dataSkins.length
      ? dataSkins.filter(
          skin =>
            skin.displayName &&
            data.displayName &&
            skin.displayName
              .toLowerCase()
              .includes(data.displayName.toLowerCase())
        )
      : [];

  return (
    <div className="bundle-skins-container">
      {loading && <div className="bundle-loading">Carregando...</div>}
      {error && <div className="bundle-error">Erro: {error}</div>}
      {data && (
        <main className="bundle-main">
          <div className="bundle-image-wrapper">
            <img
              src={data.displayIcon}
              alt={data.displayName}
              className="bundle-image"
            />
          </div>
          <section className="bundle-skins-list">
            <h2 className="skins-section-title">Skins do Bundle</h2>
            {filteredSkins.length === 0 && (
              <div className="no-skins-msg">
                Nenhuma skin encontrada para este bundle.
              </div>
            )}
            <div className="skins-grid">
              {filteredSkins.map((item, idx) => (
                <div className="skin-card" key={idx}>
                  <img
                    src={item.displayIcon}
                    alt={item.displayName}
                    className="skin-img"
                  />
                  <div className="skin-name">{item.displayName}</div>
                </div>
              ))}
            </div>
          </section>
        </main>
      )}
    </div>
  );
};

export default AppBundlesSkins;
