//Imported
import React from "react";

//CSS
import "../Styles/Home.css";

function About() {
  return (
    <div className="home">
      <div className="home--opacity"></div>
      <div className="home__content">
        <div className="home__content__title">
          <h1>FC «Bolin»</h1>
        </div>
        <div className="home__content__text">
          <p>Página SOBRE em contrução!</p>
          <iframe
            src="https://discord.com/widget?id=813108761362563133&theme=dark"
            width="500"
            height="300"
            allowtransparency="true"
            frameborder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default About;
