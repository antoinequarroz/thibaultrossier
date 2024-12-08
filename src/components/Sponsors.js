// src/components/Sponsors.js

import React from 'react';
import PlatineSponsors from './PlatineSponsors';
import OrSponsors from './OrSponsors';
import ArgentSponsors from './ArgentSponsors';
import BronzeSponsors from './BronzeSponsors';


const Sponsors = () => {
    return (
        <section className="sponsors_section" id="sponsors">
            <div className="container">
                <PlatineSponsors />
                <OrSponsors />
                <ArgentSponsors />
                <BronzeSponsors />
            </div>
            <style jsx>{`
                .sponsors_section {
                    padding: 40px 0; /* Réduit le padding général */
                                 }
                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 20px;
                }
            `}</style>
        </section>
    );
};

export default Sponsors;
