//Imported
import React from "react";

//Imported Icons
import {
  BsTwitch,
  BsYoutube,
  BsDiscord,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";

//CSS
import "../Styles/Footer.css";

function Footer() {
  //Top Button
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="footer">
      <div className="footer__title">
        <h1>ESTAMOS RECRUTANDO</h1>
      </div>

      <div className="footer__text">
        <p>
          Entre no nosso Discord e peça seu convite ou aliste-se pela nossa
          casinha em Lavender Beds, Plot 49 - Ward 13
        </p>
      </div>

      <div className="footer__links">
        <ul>
          <li>
            <a href="https://twitch.tv/mooncake_tv" target="_blank">
              <BsTwitch />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCdUAqEZO-DYdRyIydNPBklA"
              target="_blank"
            >
              <BsYoutube />
            </a>
          </li>
          <li>
            <a href="https://discord.gg/c2yUxN76ge" target="_blank">
              <BsDiscord />
            </a>
          </li>
        </ul>
      </div>

      <div className="footer__copyright">
        <p>© FC Bolin. All rights reserved.</p>
        <p>
          Made with Princess Alice (
          <a href="https://mauriciojunior.dev" target="_blank">
            mauriciojunior.dev
          </a>
          )
        </p>
      </div>

      <div className="footer__top-button">
        <a onClick={scrollUp}>
          <BsFillArrowUpCircleFill />
        </a>
      </div>
    </div>
  );
}

export default Footer;
