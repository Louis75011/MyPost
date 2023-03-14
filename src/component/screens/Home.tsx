import React, { useEffect, useState } from "react";
import { AiOutlineMoneyCollect } from "react-icons/ai";
import { GiHumanPyramid } from "react-icons/gi";
import { BsFastForwardCircle } from "react-icons/bs";
import Carousel from "../container/Carousel";
import "../../style/screens/Home.scss";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const [anchor, setAnchor] = useState("");

  useEffect(() => {
    if (anchor) {
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setAnchor("");
      }
    }
  }, [anchor]);

  // const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
  //   setAnchor(event.currentTarget.dataset.anchor || "");
  // };

  return (
    <main>
      <div className="scrollMenu">
        <ul>
          <li>
            <span>Navigation</span>
          </li>
          <li>
            <button onClick={() => setAnchor("services")}>Service</button>
          </li>
          <li>
            <button onClick={() => setAnchor("rules")}>Principe</button>
          </li>
          <li>
            <button onClick={() => setAnchor("join-us")}>Rejoindre</button>
          </li>
        </ul>
      </div>

      {/* Services */}
      <div className="home-container first" id="services">
        <div className="services-informations-title">
          <h2>Notre service</h2>
          <div className="services-informations">
            <div className="services-information">
              <div className="icon-title">
                <GiHumanPyramid />
                <h3>Humain</h3>
              </div>
              <p>
                Nous vous proposons de lier votre voisinage pour une meilleure
                entraide
              </p>
            </div>

            <div className="services-information">
              <div className="icon-title">
                <AiOutlineMoneyCollect />
                <h3>Sécurisé</h3>
              </div>
              <p>
                C'est fini les colis perdus ou arrivés en morceaux, et sans
                frais supplémentaire
              </p>
            </div>

            <div className="services-information">
              <div className="icon-title">
                <BsFastForwardCircle />
                <h3>Rapide</h3>
              </div>
              <p>
                Fini les délais interminables du livreur, ton entourage s'occupe
                de tout !
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Rule */}
      <div className="home-container second" id="rules">
        <div className="rules-informations-title">
          <h2>Nos principes</h2>
          <div className="rules-informations">
            <div>
              {/* Tree images */}
              <Carousel />
            </div>
            <div className="description">
              <h3>En avant !</h3>
              <p>
                Découvrez notre <strong>système de livraison gratuit</strong>,
                sécurisé, rapide et humain !
              </p>
              <p>
                <strong>Chaque voisin</strong> se charge de récupérer chez lui
                le colis d'une autre personne lorsque c'est nécessaire. Vous
                pourrez compter sur vos voisins pour vous livrer rapidement et
                en toute sécurité.
              </p>
              <p>
                De plus, notre système est <strong>totalement gratuit</strong>{" "}
                et vous permet de faire des économies sur les frais de
                livraison.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Join us */}
      <div className="home-container third" id="join-us">
        <div className="join-us-informations">
          <h2>Nous rejoindre</h2>
          <div className="join-us-texts">
            <p>
              Découvrez une nouvelle manière de recevoir vos colis, plus proche
              de vos valeurs ainsi que de vos attentes.
            </p>
            <p>Rejoignez-nous dès maintenant</p>
            <Link to="/formulaire/authentification">
              <button>Inscription / Connexion</button>
            </Link>
            <Link to="/formulaire/contact">
              <button>Question</button>
            </Link>
          </div>
          <img
            src={process.env.PUBLIC_URL + "/images/delivery.gif"}
            alt="delivery system, animation"
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
