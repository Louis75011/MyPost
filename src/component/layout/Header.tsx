import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaUser, FaEnvelope, FaTruck } from "react-icons/fa";
import "../../style/layout/Header.scss";

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [isMobile, setMobile] = useState(window.innerWidth); // < 790
  const location = useLocation();

  useEffect(() => {
    setShowMenu(false); // Menu se refferme au changement de route
  }, [location.pathname]);

  useEffect(() => {
    function handleResize() {
      setMobile(window.innerWidth); // Controle taille d'écran actuelle
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    handleScrollNone(showMenu);
  }, [showMenu]);

  function handleScrollNone(showMenu: boolean) {
    if (showMenu) {
      document.body.style.overflow = "hidden"; // Empeche scroll à l'ouverture du burger menu
    } else {
      document.body.style.overflow = "auto";
    }
  }

  function toggleMenu(e: any) {
    e.preventDefault();
    setShowMenu(!showMenu); // Ouvre et ferme le burger menu
  }

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
              <h1>TradiPoste</h1>
            </li>
          </Link>
        </ul>
        {/* Desk */}
        {isMobile > 790 ? (
          <ul className="submenu">
            <div className="flex-icon-text">
              <FaUser className="menu-icon" />
              <Link to="/formulaire/authentification">
                <li className="menu">Authentification</li>
              </Link>
            </div>
            <span className="vertical-bar">|</span>
            <div className="flex-icon-text">
              <FaEnvelope className="menu-icon" />
              <Link to="/formulaire/contact">
                <li className="menu">Contact</li>
              </Link>
            </div>
            <li className="menu">
              <Link to="/">
                <img
                  src={process.env.PUBLIC_URL + "/images/delivery03.jpeg"}
                  alt="logo, cross"
                />
              </Link>
            </li>
          </ul>
        ) : (
          // Mob
          <>
            <button className="burger-menu" onClick={toggleMenu}>
              {showMenu ? <FaTimes /> : <FaBars />}
            </button>
            {showMenu && (
              <div className={`mobile-menu ${showMenu ? "open" : "closed"}`}>
                <Link to="/formulaire/authentification">
                  <div className="menu">
                    <FaUser className="menu-icon" />
                    <span>Authentification</span>
                  </div>
                </Link>

                <Link to="/formulaire/contact">
                  <div className="menu">
                    <FaEnvelope className="menu-icon" />
                    <span>Contact</span>
                  </div>
                </Link>
              </div>
            )}
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
