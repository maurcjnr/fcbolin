import React from "react";
import "../Styles/Footer.css";

//Icons
import { BsTwitch, BsYoutube, BsDiscord } from "react-icons/bs";

function Footer() {
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
    </div>
  );
}

export default Footer;