import { useEffect } from "react";
import { scroll_, stickyNav } from "../utilits";

const Header = ({ dark }) => {
  useEffect(() => {
    window.addEventListener("scroll", stickyNav);
    window.addEventListener("scroll", scroll_);
  });
  return (
      <div className="aali_tm_header">
        <div className="container">
          <div className="inner">
            {dark ? (
                <div className="logo">
                  <a href="#">
                    <img src="/img/thibault/logoThibaultRossier.png" alt="" />
                  </a>
                </div>
            ) : (
                <div className="logo">
                  <a className="light" href="#">
                    <img src="/img/thibault/logoThibaultRossier.png" alt="tr logo" />
                  </a>
                  <a className="dark" href="#">
                    <img src="/img/thibault/logoThibaultRossier.png" alt="tr log" />
                  </a>
                </div>
            )}

            <div className="menu">
              <ul className="anchor_nav">
                <li className="current">
                  <a href="#home">Accueil</a>
                </li>
                <li>
                  <a href="#about">A propos</a>
                </li>
                <li>
                  <a href="#resulats">Résultats</a>
                </li>
                <li>
                  <a href="#calendrier">Calendrier</a>
                </li>
                <li>
                  <a href="#sponsors">Sponsors</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Header;
