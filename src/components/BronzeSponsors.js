// src/components/BronzeSponsors.js

import React from 'react';
import Image from 'next/image';

const BronzeSponsors = () => {
    const sponsorsBronze = [
        { src: '/img/veloPlatine/img_1.png', alt: 'Bronze Sponsor 1' },
        { src: '/img/veloPlatine/img_2.png', alt: 'Bronze Sponsor 2' },
        { src: '/img/veloPlatine/img_3.png', alt: 'Bronze Sponsor 3' },
        { src: '/img/veloPlatine/img_4.png', alt: 'Bronze Sponsor 4' },
        { src: '/img/veloPlatine/img_5.png', alt: 'Bronze Sponsor 5' },
        { src: '/img/veloPlatine/img_6.png', alt: 'Bronze Sponsor 5' },
        { src: '/img/veloPlatine/img_7.png', alt: 'Bronze Sponsor 5' },
    ];

    return (
        <div className="sponsors_category bronze">
            <div className="main_title">
                <h3>Vélo de Bronze</h3>
            </div>
            <div className="sponsors_gallery">
                {sponsorsBronze.map((sponsor, index) => (
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
