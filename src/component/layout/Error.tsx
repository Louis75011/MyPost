import React from "react";
// import '../../style/layout/Error.scss'

const Error: React.FC = () => {
  return (
    <>
      <main>
        <div className="error-content">
          <div className="error-container">
            <div className="error-message">
              <h2>Erreur 404</h2>
              <p>Le chemin recherché n'existe pas</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Error;
