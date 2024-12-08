import { useEffect } from "react";
import { edu, exp } from "../svgImage";
import { jarallaxContent } from "../utilits";

const Calendrier = () => {
    useEffect(() => {
        jarallaxContent();
    }, []);
    return (
        <div className="aali_tm_section" id="calendrier">
            <div className="aali_tm_resume">
                <div className="content">
                    <div className="container">
                        <div className="resume_in">
                            <div
                                className="aali_tm_main_title"
                                data-text-align="left"
                                data-color="dark"
                            >
                                <h3>Calendrier</h3>
                            </div>
                            <div className="content_inner">







                                <ul>
                                    <li className="wow fadeInLeft" data-wow-duration="1s">
                                        <h3 className="main_title">
                                            <span>2024</span>
                                        </h3>
                                        <ul className="list">
                                            <li>
                                                <div className="list_inner">
                                                    <span className="icon"></span>
                                                    <div className="info">
                                                        <div className="left">
                                                            <h3>Courses régionales</h3>
                                                            <span>Giron du Rhône Bramois – Nax</span>
                                                        </div>
                                                        <div className="right">
                                                            <span>1er</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="list_inner">
                                                    <span className="icon"></span>
                                                    <div className="info">
                                                        <div className="left">
                                                            <h3>Courses régionales</h3>
                                                            <span>Giron du Rhône Blonay</span>
                                                        </div>
                                                        <div className="right">
                                                            <span>2ème</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="list_inner">
                                                    <span className="icon"></span>
                                                    <div className="info">
                                                        <div className="left">
                                                            <h3>Courses nationales</h3>
                                                            <span>GP Puyloubier</span>
                                                        </div>
                                                        <div className="right">
                                                            <span>34ème</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="list_inner">
                                                    <span className="icon"></span>
                                                    <div className="info">
                                                        <div className="left">
                                                            <h3>Courses nationales</h3>
                                                            <span>Berra Immobilier</span>
                                                        </div>
                                                        <div className="right">
                                                            <span>9ème</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="list_inner">
                                                    <span className="icon"></span>
                                                    <div className="info">
                                                        <div className="left">
                                                            <h3>Courses nationales</h3>
                                                            <span>GP Ticino</span>
                                                        </div>
                                                        <div className="right">
                                                            <span>22ème</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="list_inner">
                                                    <span className="icon"></span>
                                                    <div className="info">
                                                        <div className="left">
                                                            <h3>Courses internationales</h3>
                                                            <span>Boucle du Pays du Tronçais</span>
                                                        </div>
                                                        <div className="right">
                                                            <span>10ème</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="list_inner">
                                                    <span className="icon"></span>
                                                    <div className="info">
                                                        <div className="left">
                                                            <h3>Courses internationales</h3>
                                                            <span>GP Chamoux</span>
                                                        </div>
                                                        <div className="right">
                                                            <span>8ème</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="list_inner">
                                                    <span className="icon"></span>
                                                    <div className="info">
                                                        <div className="left">
                                                            <h3>Courses internationales</h3>
                                                            <span>GP Cru Fleurie</span>
                                                        </div>
                                                        <div className="right">
                                                            <span>10ème</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>


                                        </ul>
                                    </li>
                                    <li className="wow fadeInRight" data-wow-duration="1s">
                                        <h3 className="main_title">
                                            <span>Palmarès</span>
                                        </h3>
                                        <ul className="list">
                                            <li>
                                                <div className="list_inner">
                                                    <span className="icon"></span>
                                                    <div className="info">
                                                        <div className="left">
                                                            <h3>Courses régionales</h3>
                                                            <span>Giron du Rhône Blonay</span>
                                                        </div>
                                                        <div className="right">
                                                            <span>2ème</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calendrier;
