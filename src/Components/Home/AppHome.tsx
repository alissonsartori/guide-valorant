import React from 'react';
import './home-styles.css';
import '../../global-styles.css';
import agentsURL from '../../../public/agents.png';
import weaponsURL from '../../../public/weapons.png';
import spraysURL from '../../../public/sprays.png';
import buddiesURL from '../../../public/gunbuddies.png';
import mapsURL from '../../../public/maps.png';
import displayiconURL from '../../../public/displayicon.png';
import cardURL from '../../../public/card.png';

const cards = [
  {
    title: 'Agents',
    description:
      'Conheça todos os agentes, suas habilidades e estilos de jogo.',
    image: agentsURL,
    link: '/agents',
  },
  {
    title: 'Weapons',
    description: 'Veja todas as armas, estatísticas e dicas de uso.',
    image: weaponsURL,
    link: '/weapons',
  },
  {
    title: 'Sprays',
    description: 'Descubra todos os sprays colecionáveis do Valorant.',
    image: spraysURL,
    link: '/sprays',
  },
  {
    title: 'Buddies',
    description: 'Explore os gunbuddies para personalizar suas armas.',
    image: buddiesURL,
    link: '/buddies',
  },
  {
    title: 'Maps',
    description: 'Detalhes e estratégias de todos os mapas do jogo.',
    image: mapsURL,
    link: '/maps',
  },
  {
    title: 'Bundles',
    description: 'Veja os bundles de skins e ofertas especiais.',
    image: displayiconURL,
    link: '/bundles',
  },
  {
    title: 'Cards',
    description: 'Colecione e exiba seus player cards favoritos.',
    image: cardURL,
    link: '/cards',
  },
];

const AppHome = () => {
  return (
    <main className="home">
      <div className="home__container">
        <section className="home__hero">
          <h1 className="home__title">Valorant Guide</h1>
          <p className="home__subtitle">
            O seu guia visual e interativo para explorar todos os agentes,
            armas, mapas, cosméticos e muito mais do universo Valorant.
            Descubra, compare e aprenda de forma rápida e estilosa!
          </p>
        </section>
        <section className="home__cards">
          {cards.map(card => (
            <a href={card.link} className="home__card" key={card.title}>
              <img
                src={card.image}
                alt={card.title}
                className="home__card-icon"
              />
              <h2 className="home__card-title">{card.title}</h2>
              <p className="home__card-description">{card.description}</p>
            </a>
          ))}
        </section>
      </div>
    </main>
  );
};

export default AppHome;
