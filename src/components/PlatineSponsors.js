// src/components/PlatineSponsors.js

import React from 'react';
import Image from 'next/image'; // Import du composant Image de next/image

const PlatineSponsors = () => {
  const sponsorsPlatine = [
    {
      src: 'https://res.cloudinary.com/doeq7bppc/image/upload/v1736791067/img1_rhjb3q.png',
      alt: 'Platine Sponsor 1',
      url: 'https://www.saint-martin.ch/fr/' // Ajoutez l'URL du sponsor
    },
    {
      src: 'https://res.cloudinary.com/doeq7bppc/image/upload/v1736791067/img2_wzihvq.png',
      alt: 'Platine Sponsor 2',
      url: 'https://www.forclazpierresnaturelles.ch'
    },
    {
      src: 'https://res.cloudinary.com/doeq7bppc/image/upload/v1736791067/img3_xouikh.png',
      alt: 'Platine Sponsor 3',
      url: 'https://www.local.ch/fr/d/sion/1950/pneus/gaspoz-pneus-sarl-NDiVfalxgBd3GovaTxTkZg'
    },
    {
      src: 'https://res.cloudinary.com/doeq7bppc/image/upload/v1736791067/img4_lifjke.png',
      alt: 'Platine Sponsor 4',
      url: 'https://bitz-travauxpublics.ch'
    },
    {
      src: 'https://res.cloudinary.com/doeq7bppc/image/upload/v1736791067/img5_dd4x3t.png',
      alt: 'Platine Sponsor 5',
      url: 'https://www.tschoppcycles.ch'
    },
    {
      src: 'https://res.cloudinary.com/doeq7bppc/image/upload/v1736791068/img6_ldhwhu.png',
      alt: 'Platine Sponsor 6',
      url: 'https://rossier-sports.ch'
    },
    {
      src: 'https://res.cloudinary.com/doeq7bppc/image/upload/v1736791068/img7_apolk6.png',
      alt: 'Platine Sponsor 7',
      url: 'https://naxmontnoble.ch'
    },
    {
      src: 'https://res.cloudinary.com/doeq7bppc/image/upload/v1736791068/img8_piaxms.png',
      alt: 'Platine Sponsor 8',
      url: 'https://www.durretford.ch'
    },
    {
      src: 'https://res.cloudinary.com/doeq7bppc/image/upload/v1736791069/img9_nvtrls.png',
      alt: 'Platine Sponsor 9',
      url: '#'
    },
    {
      src: 'https://res.cloudinary.com/doeq7bppc/image/upload/v1736791069/img10_aynla7.png',
      alt: 'Platine Sponsor 10',
      url: 'https://www.papival.ch/fr/?gad_source=1&gclid=Cj0KCQiA1p28BhCBARIsADP9HrM58KmSY6t9Wx4oo1wqkY3KJ-IdV26nT3eMY7DKGAHqWvfIYXUYvDsaAnPDEALw_wcB'
    },
    {
      src: 'https://res.cloudinary.com/doeq7bppc/image/upload/v1736791070/img11_m426bt.png',
      alt: 'Platine Sponsor 11',
      url: 'https://fournierbois.ch'
    },
    {
      src: 'https://res.cloudinary.com/doeq7bppc/image/upload/v1736791070/img12_o2hxo1.png',
      alt: 'Platine Sponsor 12',
      url: 'https://www.valimed.ch'
    },
  ];

  return (
    <div className="sponsors_category platine" id="sponsors">
      <div className="main_title">
        <h3>Vélo de Platine</h3>
      </div>
      <div className="sponsors_gallery">
        {sponsorsPlatine.map((sponsor, index) => (
          <div key={index} className="sponsor_item">
            <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
              <div className="image_wrapper">
                {/* Utilisation de next/image pour une meilleure optimisation */}
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
              margin-bottom: 10px; /* Réduit la marge inférieure */
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
              grid-template-columns: repeat(2, 1fr); /* Ajusté pour plus de sponsors */
              gap: 10px; /* Augmente l'espacement pour plus de clarté */
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
          @media (max-width: 1200px) {
              .sponsors_gallery {
                  grid-template-columns: repeat(3, 1fr);
              }
          }
          @media (max-width: 768px) {
              .sponsors_gallery {
                  grid-template-columns: repeat(2, 1fr);
              }
          }
          @media (max-width: 576px) {
              .sponsors_gallery {
                  grid-template-columns: repeat(1, 1fr);
              }
          }
      `}</style>
    </div>
  );
};

export default PlatineSponsors;
