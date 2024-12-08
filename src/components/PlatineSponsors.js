// src/components/PlatineSponsors.js

import React from 'react';
import Image from 'next/image';

const PlatineSponsors = () => {
    const sponsorsPlatine = [
        { src: '/img/veloPlatine/img1.png', alt: 'Platine Sponsor 1' },
        { src: '/img/veloPlatine/img2.png', alt: 'Platine Sponsor 2' },
        { src: '/img/veloPlatine/img3.png', alt: 'Platine Sponsor 3' },
        { src: '/img/veloPlatine/img4.png', alt: 'Platine Sponsor 4' },
        { src: '/img/veloPlatine/img5.png', alt: 'Platine Sponsor 5' },
        { src: '/img/veloPlatine/img6.png', alt: 'Platine Sponsor 6' },
        { src: '/img/veloPlatine/img7.png', alt: 'Platine Sponsor 7' },
        { src: '/img/veloPlatine/img8.png', alt: 'Platine Sponsor 8' },
        { src: '/img/veloPlatine/img9.png', alt: 'Platine Sponsor 9' },
        { src: '/img/veloPlatine/img10.png', alt: 'Platine Sponsor 10' },
        { src: '/img/veloPlatine/img11.png', alt: 'Platine Sponsor 11' },
        { src: '/img/veloPlatine/img12.png', alt: 'Platine Sponsor 12' },
    ];

    return (
        <div className="sponsors_category platine">
            <div className="main_title">
                <h3>Vélo de Platine</h3>
            </div>
            <div className="sponsors_gallery">
                {sponsorsPlatine.map((sponsor, index) => (
                    <div key={index} className="sponsor_item">
                        <div className="image_wrapper">
                            <Image
                                src={sponsor.src}
                                alt={sponsor.alt}
                                layout="fill"
                                objectFit="contain"
                                priority={false}
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
