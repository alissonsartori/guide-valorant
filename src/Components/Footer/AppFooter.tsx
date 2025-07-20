import React from 'react';
import './footer-styles.css';
import packageJson from '../../../package.json';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__text">
          © 2020-2024 Riot Games, Inc. RIOT GAMES, VALORANT e todos os
          logotipos associados são marcas comerciais, marcas de serviço e/ou
          marcas registradas da Riot Games, Inc.
        </div>
        <div className="footer__links">
          <a
            className="footer__link"
            href="https://playvalorant.com/pt-br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jogue Agora
          </a>
          <a
            className="footer__link"
            href="https://www.riotgames.com/pt-br"
            target="_blank"
            rel="noopener noreferrer"
          >
            Riot Games
          </a>
          <a
            className="footer__link"
            href="https://github.com/alissoncavalcante/guide-valorant"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
        <div className="footer__divider" />
        <div className="footer__bottom">
          <span>Versão {packageJson.version}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
