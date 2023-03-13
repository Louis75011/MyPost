import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../style/layout/Header.scss";

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [isMobile, setMobile] = useState(window.innerWidth); // < 790
  const location = useLocation();

  useEffect(() => {
    setShowMenu(false); // Menu se ferme au changement de chemin
  }, [location.pathname]);

  useEffect(() => {
    function handleResize() {
      setMobile(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function toggleMenu(e: any) {
    e.preventDefault();
    setShowMenu(!showMenu);
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

        {isMobile > 790 ? (
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
                  src={process.env.PUBLIC_URL + "/images/delivery03.jpeg"}
                  alt="logo, cross"
                />
              </Link>
            </li>
          </ul>
        ) : (
          <>
            <button
              className={`burger-menu ${showMenu ? "open" : "close"}`}
              onClick={toggleMenu}
            >
            </button>
            {showMenu && (
              <div className="mobile-menu">
                <Link to="/formulaire/authentification">
                  <div className="menu">Authentification</div>
                </Link>
                <Link to="/formulaire/contact">
                  <div className="menu">Contact</div>
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
