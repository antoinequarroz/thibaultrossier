import { useEffect } from 'react';
import { edu, exp } from '../svgImage';
import { jarallaxContent } from '../utilits';

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
                      <span>2025</span>
                    </h3>
                    <ul className="list">
                      <li>
                        <div className="list_inner">
                          <span className="icon"></span>
                          <div className="info">
                            <div className="left">
                              <h3>Janvier</h3>
                              <span>11 - 25 Camp Canaries</span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <span className="icon"></span>
                          <div className="info">
                            <div className="left">
                              <h3>Février</h3>
                              <span>23 GP Puyloubier (france - route)</span>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="list_inner">
                          <span className="icon"></span>
                          <div className="info">
                            <div className="left">
                              <h3>Mars</h3>
                              <span>1 - 8 stage Fédération en Toscane</span>
                              <br />
                              <span>16 GP Ticino (suisse - route)</span>
                              <br />
                              <span>
                                30 Annemasse - Bellegarde ( france - route)
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="list_inner">
                          <span className="icon"></span>
                          <div className="info">
                            <div className="left">
                              <h3>Avril</h3>
                              <span>5 GP Berra (valais - route)</span>
                              <br />
                              <span>2 Tour du Charollais (france - route)</span>
                              <br />
                              <span>21 GP Vougy (france - route))</span>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="list_inner">
                          <span className="icon"></span>
                          <div className="info">
                            <div className="left">
                              <h3>Mai</h3>
                              <span>
                                3 Riva del Garda VTT marathon UCI (italie - VTT)
                              </span>
                              <br />
                              <span>10 Berner Rundfarht (berne - route)</span>
                              <br />
                              <span>
                                18 Jura bike : VTT marathon UCI (suisse - VTT)
                              </span>
                              <br />
                              <span>24 La Durtorcha (france - route)</span>
                              <br />
                              <span>29 Silenen (suisse - route)</span>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="list_inner">
                          <span className="icon"></span>
                          <div className="info">
                            <div className="left">
                              <h3>Juin</h3>
                              <span>
                                1er CHAMPIONNATS SUISSE MONTAGNE (Tessin -
                                route)
                              </span>
                              <br />
                              <span>
                                8 Championnat d'Europe VTT Marathon Elite
                                (italie - VTT marathon)
                              </span>
                              <br />
                              <span>
                                15 Raid Evolenard (suisse - VTT marathon)
                              </span>
                              <br />
                              <span>
                                29 Championnats Suisse Elite (suisse - route )
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>

                      <li className="wow fadeInRight" data-wow-duration="1s">
                        <h3 className="main_title">
                          <span>2025</span>
                        </h3>
                        <ul className="list">
                          <li>
                            <div className="list_inner">
                              <span className="icon"></span>
                              <div className="info">
                                <div className="left">
                                  <h3>Juillet</h3>
                                  <span>
                               5 MB RACE UCI vtt marathon (france - VTT marathon)
                              </span>
                                  <br />
                                  <span>
                                12 Championnat Suisse VTT marathon elit (suisse - VTT marathon)
                              </span>
                                  <br />
                                  <span>
                                20 Martigny - Mauvoisin (suisse - route)
                              </span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="list_inner">
                              <span className="icon"></span>
                              <div className="info">
                                <div className="left">
                                  <h3>Août</h3>
                                  <span>
                               Préparation en altitude
                              </span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="list_inner">
                              <span className="icon"></span>
                              <div className="info">
                                <div className="left">
                                  <h3>Septembre</h3>
                                  <span>
                                6 Championnats du monde VTT marathon Grand Raid BCVS (Verbier - Grimentz/ VTT marathon)
                              </span>
                                  <br />
                                  <span>
                                14 Chur -Arosa (Grisons- route )
                              </span>
                                  <br />
                                  <span>
                                21 Tour du Jura (Jura - route )
                              </span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="list_inner">
                              <span className="icon"></span>
                              <div className="info">
                                <div className="left">
                                  <h3>Octobre</h3>
                                  <span>
                               10 Roc d'Azur VTT marathon (france - vtt marathon)
                              </span>
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
