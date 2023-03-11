import React from "react";
import { Link } from "react-router-dom";
import "../../style/layout/Header.scss";

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <Link to="/">
            <li className="title">
              <img
                src={process.env.PUBLIC_URL + "/images/cross.jpg"}
                alt="logo, cross"
              />
              <h1>MaPoste</h1>
            </li>
          </Link>
        </ul>

        <ul className="submenu">
          <Link to="/formulaire/authentification">
            <li className="menu">Authentification</li>
          </Link>
          <span>|</span>
          <Link to="/formulaire/contact">
            <li className="menu">Contact</li>
          </Link>

          <li className="menu">
            <Link to="/">
              <img
                src={process.env.PUBLIC_URL + "/images/cross-bis.jpg"}
                alt="logo, cross"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
