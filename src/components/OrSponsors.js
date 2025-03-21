// src/components/OrSponsors.js

import React from 'react';
import Image from 'next/image';

const OrSponsors = () => {
  const sponsorsOr = [
    {
      src: 'https://res.cloudinary.com/doeq7bppc/image/upload/v1736791063/imgOr1_ophlue.png',
      alt: 'Or Sponsor 1',
      url: 'https://www.opal-systems.be' // Ajoutez l'URL du sponsor
    },
  ];

  return (
    <div className="sponsors_category or">
      <div className="main_title">
        <h3>Vélo Or</h3>
      </div>
      <div className="sponsors_gallery">
        {sponsorsOr.map((sponsor, index) => (
          <div key={index} className="sponsor_item">
            <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
              <div className="image_wrapper">
                <Image
                  src={sponsor.src}
                  alt={sponsor.alt}
                  layout="fill"
                  objectFit="contain"
                  priority={false}
                />
              </div>
            </a>
          </div>
          ))}
      </div>
      <style jsx>{`
          .sponsors_category {
          margin-bottom: 20px; /* Réduit la marge inférieure */
        }
        .main_title {
          text-align: center;
          margin-bottom: 10px; /* Réduit la marge inférieure du titre */
        }
        .main_title h3 {
          font-size: 1.8em; /* Ajuste la taille de la police */
          color: #fff; /* Assurez-vous que la couleur est visible sur le fond */
        }
        .sponsors_gallery {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 5px; /* Réduit l'espacement entre les logos */
        }
        .sponsor_item {
          position: relative;
          width: 100%;
          padding-top: 100%; /* Aspect carré */
          overflow: hidden;
          transition: transform 0.3s ease;
        }
        .image_wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%; /* Assure que l'image couvre tout l'espace */
        }
        .sponsor_item:hover {
          transform: scale(1.05); /* Légère réduction de l'effet de zoom */
        }
        /* Responsive Design */
        @media (max-width: 768px) {
          .sponsors_gallery {
            grid-template-columns: repeat(2, 1fr);
            gap: 5px; /* Maintient l'espacement réduit */
          }
        }
        @media (max-width: 576px) {
          .sponsors_gallery {
            grid-template-columns: repeat(1, 1fr);
            gap: 5px; /* Maintient l'espacement réduit */
          }
        }
      `}</style>
    </div>
  );
};

export default OrSponsors;
