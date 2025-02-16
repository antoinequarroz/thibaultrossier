// Exemple dans Home.js
import { useEffect, useState } from 'react';
import { fb, insta, msg, twitter } from '../svgImage';
import { parallax } from '../utilits';
// Supprime ou commente l'import de Image
// import Image from 'next/image';

const Home = () => {
  const [text, setText] = useState(1);

  useEffect(() => {
    parallax();
    const interval = setInterval(() => {
      setText((prevText) => (prevText < 3 ? prevText + 1 : 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="aali_tm_section" id="home">
      <div className="aali_tm_hero">
        <div className="container">
          <div className="hero_inner">
            <div className="content">
              <h3 className="name">Thibault Rossier</h3>
              <div className="job">
                <span className="cd-headline rotate-1">
                  <span className="cd-words-wrapper">
                    <b className={text === 1 ? 'is-visible' : 'is-hidden'}>
                      Cycliste
                    </b>
                    <b className={text === 2 ? 'is-visible' : 'is-hidden'}>
                      Grimpeur
                    </b>
                    <b className={text === 3 ? 'is-visible' : 'is-hidden'}>
                      Combatif
                    </b>
                  </span>
                </span>
              </div>
              <div className="aali_tm_down">
                <div className="down-icon white top_120">
                  <a className="anchor" href="#about">
                    {/* SVG inchangé */}
                    <svg
                      width="26px"
                      height="100%"
                      viewBox="0 0 247 390"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      style={{
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        strokeMiterlimit: '1.5',
                      }}
                    >
                      <path
                        id="wheel"
                        d="M123.359,79.775l0,72.843"
                        style={{
                          fill: 'none',
                          stroke: '#fff',
                          strokeWidth: 20,
                        }}
                      />
                      <path
                        id="mouse"
                        d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                        style={{
                          fill: 'none',
                          stroke: '#fff',
                          strokeWidth: 20,
                        }}
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="avatar parallax" style={{ position: 'absolute' }}>
              <div className="main">
                <img
                  src="https://res.cloudinary.com/doeq7bppc/image/upload/v1736790034/4R2A2973_ubxryj.png" // Remplace par ton URL Cloudinary
                  alt="Image de Thibault"
                  className="layer"
                  data-depth="0.1"
                  width="auto" // Ajuste selon les dimensions réelles
                  height="700" // Ajuste selon les dimensions réelles
                />
              </div>
              <span className="one">
                <span className="in layer" data-depth="0.14" />
              </span>
              <span className="two">
                <span className="in layer" data-depth="0.18" />
              </span>
              <span className="three">
                <span className="in layer" data-depth="0.22" />
              </span>
              <span className="four">
                <span className="in layer" data-depth="0.26" />
              </span>
              <span className="five">
                <span className="in layer" data-depth="0.3" />
              </span>
              <h3 className="stroke_text">
                <span>Fans Club</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="socials">
          <ul>
            <li>
              <a href="https://www.facebook.com/profile.php?id=100066420318465">
                {fb}
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/thibault.rossierofficial/">
                {insta}
              </a>
            </li>
            {/* Ajoute d'autres réseaux sociaux si nécessaire */}
          </ul>
        </div>
        <div className="hero_mail">
          <a className="line_anim" href="mailto:club.de.soutien.TR@gmail.com">
            club.de.soutien.TR@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
