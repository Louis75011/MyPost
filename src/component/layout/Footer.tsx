import React from "react";
import "../../style/layout/Footer.scss";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="left-container">
        <h4>Administration :</h4>
        <p>
          <a href="mailto:contact@louis-rouanet.fr">
            Contacter l'administration de Sanc+.am
          </a>
        </p>
        <h4>Documentations :</h4>
        <p>
          <a href="/footer/service-gratuit">Service gratuit</a>
        </p>
        <p>
          <a href="/footer/solidarity">Entraide et solidarité</a>
        </p>
        <p>
          <a href="/footer/security">Sécurité contre les vols</a>
        </p>
      </div>

      <div className="right-container">
        <img
          src={process.env.PUBLIC_URL + "/images/colomb.jpg"}
          alt="logo, sanctam, tradi, poste"
        />
      </div>
    </footer>
  );
};

export default Footer;
