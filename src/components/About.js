import Image from 'next/image';

const About = () => {
  return (
    <div className="aali_tm_section" id="about">
      <div className="aali_tm_about">
        <div className="about_inner">
          <div className="left">
            <div className="image">
              <Image
                src="/img/thibault/img.png" // Assure-toi que ce chemin est correct
                alt="Tr image"
                width={500} // Utilise les dimensions réelles de ton image
                height={500}
                className="responsive-image"
              />
              <div className="main" data-img-url="/img/thibault/img.png" /> {/* Vérifie ce chemin */}
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
              <h1>A propos de moi</h1>
              <h3>
                {'Hello, je suis '} <span>Thibault Rossier</span>
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
                J&apos;ai commencé le vélo en 2016, à l&apos;âge de 15 ans, tout
                d’abord par le VTT, puis par la route. J&apos;ai très vite
                préféré la route par rapport aux autres disciplines, j&apos;ai
                débuté par de petites courses régionales avec le cyclophile
                sédunois et, petit à petit, j&apos;ai gravi les échelons
                jusqu&apos;à l&apos;élite, remportant notamment un titre de
                champion suisse de la montagne et un de vice-champion suisse.
                J&apos;ai également pratiqué le cyclo-cross certains hivers, où
                j&apos;ai décroché un titre de champion valaisan et un de
                champion romand.
              </p>
              <p>
                Pour la saison 2024, j&apos;ai fait le choix de partir dans une
                nouvelle formation en France, après avoir passé mes 4 dernières
                saisons au sein de l&apos;équipe Elite Fondations Cycling Team.
                Je suis actuellement sous les couleurs de « Charvieu-Chavagneux
                Isère Cyclisme », une équipe française de niveau élite nationale
                première division, qui va m&apos;aider à passer un palier
                supplémentaire pour la suite de ma carrière.
              </p>
              <p>
                En dehors du sport de haut niveau, j&apos;ai effectué un CFC de
                polymécanicien à la Base Aérienne de Sion. Actuellement, je me
                consacre à 100% dans le cyclisme, afin de tout mettre en œuvre
                pour réussir.
              </p>
            </div>
          </div>
          <div className="right">
            <div className="image">
              <div className="main" data-img-url="/img/thibault/img.png" /> {/* Vérifie ce chemin */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
