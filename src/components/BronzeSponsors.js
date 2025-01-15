// src/components/BronzeSponsors.js

import React from 'react';
import Image from 'next/image';

const BronzeSponsors = () => {
  const sponsorsBronze = [
    {
      src: 'https://res.cloudinary.com/doeq7bppc/image/upload/v1736791063/img_1_dwobex.png',
      alt: 'Bronze Sponsor 1',
      url: 'https://imorge.ch' // Remplacez par l'URL réelle du sponsor
    },
    {
      src: 'https://res.cloudinary.com/doeq7bppc/image/upload/v1736791064/img_2_fktdv0.png',
      alt: 'Bronze Sponsor 2',
      url: 'https://www.local.ch/fr/d/sion/1950/fiduciaire/ecsa-fiduciaire-sa-TL-lfEjL_WF-q5qb3V0J2g'
    },
    {
      src: 'https://res.cloudinary.com/doeq7bppc/image/upload/v1736791064/img_3_o0z1zy.png',
      alt: 'Bronze Sponsor 3',
      url: 'https://www.brumannviande.ch'
    },
    {
      src: 'https://res.cloudinary.com/doeq7bppc/image/upload/v1736791064/img_4_ritzrc.png',
      alt: 'Bronze Sponsor 4',
      url: '#'
    },
    {
      src: 'https://res.cloudinary.com/doeq7bppc/image/upload/v1736791064/img_5_k5xrtx.png',
      alt: 'Bronze Sponsor 5',
      url: 'https://www.ozenit.ch/#header'
    },
    {
      src: 'https://res.cloudinary.com/doeq7bppc/image/upload/v1736791064/img_6_fagcg9.png',
      alt: 'Bronze Sponsor 6', // Correction de l'alt pour éviter les doublons
      url: 'https://sanipralong.com'
    },
    {
      src: 'https://res.cloudinary.com/doeq7bppc/image/upload/v1736791066/img_7_ptnhku.png',
      alt: 'Bronze Sponsor 7', // Correction de l'alt pour éviter les doublons
      url: 'https://www.fromagerie-st-martin.com'
    },
  ];

  return (
    <div className="sponsors_category bronze">
      <div className="main_title">
        <h3>Vélo de Bronze</h3>
      </div>
      <div className="sponsors_gallery">
        {sponsorsBronze.map((sponsor, index) => (
          <div key={index} className="sponsor_item">
            <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
              <div className="image_wrapper">
                <Image
                  src={sponsor.src}
                  alt={sponsor.alt}
                  layout="fill" // Utilisation correcte pour Next.js 12
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
              margin-bottom: 60px;
          }
          .main_title {
              text-align: center;
              margin-bottom: 20px;
          }
          .main_title h3 {
              font-size: 2em;
              color: #fff;
          }
          .sponsors_gallery {
              display: grid;
              grid-template-columns: repeat(5, 1fr);
              gap: 20px;
          }
          .sponsor_item {
              position: relative;
              width: 100%;
              padding-top: 100%; /* Pour un aspect carré */
              overflow: hidden;
              transition: transform 0.3s ease;
          }
          .image_wrapper {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
          }
          .sponsor_item:hover {
              transform: scale(1.1);
          }
          /* Responsive Design */
          @media (max-width: 1200px) {
              .sponsors_gallery {
                  grid-template-columns: repeat(4, 1fr);
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

export default BronzeSponsors;
