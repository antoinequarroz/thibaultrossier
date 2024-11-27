import { download } from "../svgImage";

const About = () => {
  return (
    <div className="aali_tm_section" id="about">
      <div className="aali_tm_about">
        <div className="about_inner">
          <div className="left">
            <div className="image">
              <img src="/img/thumbs/45-49.jpg" alt="aali image" />
              <div className="main" data-img-url="img/about/1.jpg" />
              <span
                className="square moving_effect"
                data-direction="y"
                data-reverse="yes"
              />
              <span className="border">
                <span
                  className="in moving_effect"
                  data-direction="x"
                  data-reverse="yes"
                />
              </span>
            </div>
          </div>
          <div className="center">
            <div className="title wow fadeInUp" data-wow-duration="1s">
              <h1> A propos de moi</h1>
              <h3>
                {"Je m'appelle "} <span>Thibault Rossier</span>
              </h3>
              <h3>
                23 <span>ans</span>
              </h3>
              <span className="subtitle">Saint-Martin VS</span>
            </div>
            <div
                className="text wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
            >
              <p>
                J’ai commencé le vélo en 2016, à l’âge de 15 ans, tout d’abord par le VTT, puis par la route. J’ai très
                vite préféré la route par rapport aux autres disciplines, j’ai débuté par de petites courses régionales
                avec le cyclophile sédunois et, petit à petit, j’ai gravi les échelons jusqu’à l’élite, remportant
                notamment un titre de champion suisse de la montagne et un de vice-champion suisse. J’ai également
                pratiqué le cyclo-cross certains hivers, où j’ai décroché un titre de champion valaisan et un de
                champion romand.
              </p>
              <p>
                Pour la saison 2024, j’ai fais le choix de partir dans une nouvelle formation en France, après avoir
                passé mes 4 dernières saisons au sein de l’équipe Elite Fondations Cycling Team. Je suis actuellement
                sous les couleurs de « Charvieu-Chavagneux Isère Cyclisme » une équipe française de niveau élite
                nationale première division, qui va m’aider à passer un palier supplémentaire pour la suite de ma
                carrière.
              </p>
              <p>
                En dehors du sport de haut niveau, j’ai effectué un CFC de polymécanicien à la Base Aérienne de Sion. Actuellement, je me consacre à 100% dans le cyclisme, afin de tout mettre en œuvre pour réussir.
              </p>
            </div>
          </div>
          <div className="right">
            <div className="image">
              <img src="img/thumbs/41-61.jpg" alt="aali image" />
              <div className="main" data-img-url="img/about/2.jpg" />
              <div
                className="square moving_effect"
                data-direction="x"
                data-reverse="no"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
