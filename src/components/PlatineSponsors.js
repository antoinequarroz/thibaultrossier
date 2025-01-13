// src/components/PlatineSponsors.js

import React from 'react';


const PlatineSponsors = () => {
  const sponsorsPlatine = [
    { src: 'https://res.cloudinary.com/doeq7bppc/image/upload/v1736791067/img1_rhjb3q.png', alt: 'Platine Sponsor 1' },
    { src: 'https://res.cloudinary.com/doeq7bppc/image/upload/v1736791067/img2_wzihvq.png', alt: 'Platine Sponsor 2' },
    { src: 'https://res.cloudinary.com/doeq7bppc/image/upload/v1736791067/img3_xouikh.png', alt: 'Platine Sponsor 3' },
    { src: 'https://res.cloudinary.com/doeq7bppc/image/upload/v1736791067/img4_lifjke.png', alt: 'Platine Sponsor 4' },
    { src: 'https://res.cloudinary.com/doeq7bppc/image/upload/v1736791067/img5_dd4x3t.png', alt: 'Platine Sponsor 5' },
    { src: 'https://res.cloudinary.com/doeq7bppc/image/upload/v1736791068/img6_ldhwhu.png', alt: 'Platine Sponsor 6' },
    { src: 'https://res.cloudinary.com/doeq7bppc/image/upload/v1736791068/img7_apolk6.png', alt: 'Platine Sponsor 7' },
    { src: 'https://res.cloudinary.com/doeq7bppc/image/upload/v1736791068/img8_piaxms.png', alt: 'Platine Sponsor 8' },
    { src: 'https://res.cloudinary.com/doeq7bppc/image/upload/v1736791069/img9_nvtrls.png', alt: 'Platine Sponsor 9' },
    { src: 'https://res.cloudinary.com/doeq7bppc/image/upload/v1736791069/img10_aynla7.png', alt: 'Platine Sponsor 10' },
    { src: 'https://res.cloudinary.com/doeq7bppc/image/upload/v1736791070/img11_m426bt.png', alt: 'Platine Sponsor 11' },
    { src: 'https://res.cloudinary.com/doeq7bppc/image/upload/v1736791070/img12_o2hxo1.png', alt: 'Platine Sponsor 12' },
  ];

  return (
    <div className="sponsors_category platine" id="sponsors">
      <div className="main_title">
        <h3>Vélo de Platine</h3>
      </div>
      <div className="sponsors_gallery">
        {sponsorsPlatine.map((sponsor, index) => (
          <div key={index} className="sponsor_item">
            <div className="image_wrapper">
              <img
                src={sponsor.src}
                alt={sponsor.alt}
              />
            </div>
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
          grid-template-columns: repeat(2, 1fr);
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

export default PlatineSponsors;
