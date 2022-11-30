//Imported
import React from "react";

//CSS
import "../Styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home--opacity"></div>
      <div className="home__content">
        <div className="home__content__title">
          <h1>FC «Bolin»</h1>
        </div>
        <div className="home__content__text">
          <p>
            Somos uma FC brasileira situada no Behemoth, focada na amizade,
            diversão e aprendizado! ♥ Venha ser um bolinho também!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
