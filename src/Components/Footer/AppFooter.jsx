import "./footer-styles.css";
import packageJson from "../../../package.json";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        © 2020-2024 Riot Games, Inc. RIOT GAMES, VALORANT e todos os logotipos
        associados são marcas comerciais, marcas de serviço e/ou marcas
        registradas da Riot Games, Inc.
      </p>
      <p>
        <a href="https://playvalorant.com/pt-br/?gad_source=1&gclid=CjwKCAjw9IayBhBJEiwAVuc3fpQ2M4zDtjdMAL3JQMb2JSwcpEVGNkc6D8KVt3SOwPy5P-TuPFSRqRoCXQoQAvD_BwE&gclsrc=aw.ds">
          Jogue Agora
        </a>
      </p>
      <pre>{`v${packageJson.version}`}</pre>
    </div>
  );
};

export default Footer;
