import React from "react";
import "../../../style/layout/Footer.scss";

const Solidarity: React.FC = () => {
  return (
    <div className="footer-links-informations">
      <p>Chers utilisateurs,</p>
      <p style={{ textDecoration: "underline" }}>Voici nos 4 principes :</p>
      <p>
        Local : vivre de manière locale est un choix de vie qui consiste à
        privilégier les relations de proximité pour se nourrir, se divertir et
        se loger. Cela permet de tisser des liens forts avec les commerçants
        locaux, de préserver l'environnement en évitant les transports de
        marchandises à longue distance et de favoriser l'économie de sa région.
      </p>
      <p>
        Entraide : l'entraide est un élément clé de la vie en communauté. Elle
        permet de répondre aux besoins des uns et des autres en partageant ses
        compétences, ses connaissances et ses ressources. En se basant sur
        l'entraide, nous créons des relations de confiance et de respect mutuel
        qui renforcent notre sentiment d'appartenance à une communauté.
      </p>
      <p>
        Solidarité : la solidarité est un pilier de la société qui permet de
        venir en aide à ceux qui en ont besoin. Elle peut prendre de nombreuses
        formes, de la simple aide ponctuelle à l'engagement régulier dans une
        cause sociale ou environnementale. La solidarité renforce les liens
        sociaux et permet de construire une société plus juste et équitable.
      </p>
      <p>
        Citoyenneté : la citoyenneté est un engagement envers sa communauté, son
        pays et le monde. Elle implique de participer activement à la vie
        démocratique, de respecter les lois et les valeurs communes, de défendre
        les droits humains et de contribuer à la résolution des problèmes de la
        société. La citoyenneté permet de prendre part à la construction d'un
        monde meilleur, plus juste et plus pacifique.
      </p>
      <p>Merci à tous !</p>
    </div>
  );
}; // Footer

export default Solidarity;
