//Imported
import React from "react";

//CSS
import "../Styles/Home.css";

function ErrorPage() {
  return (
    <div className="home">
      <div className="home--opacity"></div>
      <div className="home__content">
        <div className="home__content__title">
          <h1>Error Page</h1>
        </div>
        <div className="home__content__text">
          <p>Página não encontrada!</p>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
