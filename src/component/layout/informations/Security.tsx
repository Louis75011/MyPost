import React from "react";
import "../../../style/layout/Footer.scss";

const Security: React.FC = () => {
  return (
    <div className="footer-links-informations">
      <p>Chers utilisateurs,</p>
      <p>
        Nous sommes heureux de vous annoncer que notre site de livraison gratuit
        entre citoyens solidaires est maintenant en ligne. Nous voulons que tous
        les échanges soient sûrs et sécurisés pour tous, c'est pourquoi nous
        demandons que chaque utilisateur télécharge une copie recto verso de
        leur carte d'identité en format jpeg lors de la création d'un compte.
      </p>
      <p>
        Nous comprenons que cela puisse sembler fastidieux, mais cela garantira
        que toutes les parties impliquées peuvent avoir confiance dans les
        échanges effectués sur notre plateforme. En effet, nous sommes soucieux
        de protéger notre communauté contre tout vol ou fraude.
      </p>
      <p>
        Nous vous remercions de votre compréhension et de votre coopération dans
        ce processus de sécurité. L'équipe de livraison gratuit entre citoyens
        solidaires.
      </p>
      <p>Merci à tous !</p>
    </div>
  );
}; // Footer

export default Security;
