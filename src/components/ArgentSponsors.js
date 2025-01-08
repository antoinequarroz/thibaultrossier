// src/components/ArgentSponsors.js

import React from 'react';
import Image from 'next/image';

const ArgentSponsors = () => {
  const sponsorsArgent = [
    { src: '/img/veloPlatine/imgArgent.png', alt: 'Argent Sponsor 1' },
    { src: '/img/veloPlatine/imgArgent1.png', alt: 'Argent Sponsor 2' },
    { src: '/img/veloPlatine/imgArgent2.png', alt: 'Argent Sponsor 3' },
    { src: '/img/veloPlatine/imgArgent3.png', alt: 'Argent Sponsor 4' },
  ];

  return (
    <div className="sponsors_category argent">
      <div className="main_title">
        <h3>Vélo Argent</h3>
      </div>
      <div className="sponsors_gallery">
        {sponsorsArgent.map((sponsor, index) => (
          <div key={index} className="sponsor_item">
            <div className="image_wrapper">
              <Image
                src={sponsor.src}
                alt={sponsor.alt}
                layout="fill" // Utilisation correcte pour Next.js 12
                objectFit="contain"
                priority={false}
              />
            </div>
          </div>
        ))}
      </div>
      {/* eslint-disable-next-line react/no-unknown-property */}
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
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .sponsor_item {
          position: relative;
          width: 100%;
          padding-top: 100%; /* Aspect ratio carré */
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

export default ArgentSponsors;
