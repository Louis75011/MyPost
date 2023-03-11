import "../../style/screens/Home.scss";
import React, { useEffect, useState } from "react";

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

  const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
    setAnchor(event.currentTarget.dataset.anchor || "");
  };

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
            <button onClick={() => setAnchor("rules")}>Principes</button>
          </li>
          <li>
            <button onClick={() => setAnchor("join-us")}>Nous rejoindre</button>
          </li>
        </ul>
      </div>

      <div className="home-container-first" id="services">
        <h2>Notre service</h2>
      </div>
      <div className="home-container-second" id="rules">
        <h2>Nos principes</h2>
      </div>
      <div className="home-container-third" id="join-us">
        <h2>Nous rejoindre</h2>
      </div>
    </main>
  );
};

export default Home;
