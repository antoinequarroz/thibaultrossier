// src/components/Contact.js

import { emailIcon, msgSent } from '../svgImage';

const Contact = () => {
  return (
    <div className="aali_tm_section" id="contact">
      <div className="aali_tm_contact">
        <div className="container">
          <div
            className="aali_tm_main_title"
            data-text-align="center"
            data-color="dark"
          >
            <span>Fan&apos;s club</span>
            <h3>Devenir membre</h3>
          </div>
          <div className="contact_inner">
            <div className="left wow fadeInLeft" data-wow-duration="1s">
              <ul>
                <li>
                  <div className="list_inner">
                    {emailIcon}
                    <span>Email</span>
                    <p>
                      <a
                        className="line_anim"
                        href="mailto:club.de.soutien.TR@gmail.com"
                      >
                        club.de.soutien.TR@gmail.com
                      </a>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    {emailIcon}
                    <span>Cotisation</span>
                    <p>Couple et concubins (80.- CHF)</p>
                    <p>Individuel (50.- CHF)</p>
                    <p>Mineurs (30.- CHF)</p>
                    <p>Entreprise et Sociétés (min 200.- CHF)</p>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    {emailIcon}
                    <span>IBAN du Fan&apos;s Club</span>
                    <p>IBAN: CH17 8080 8001 3412 14239</p>
                    <p>Banque Raiffeisen Sion et Région</p>
                    <p>1950 Sion</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="right wow fadeInRight" data-wow-duration="1s">
              <div className="fields">
                <form
                  action="/"
                  method="post"
                  className="contact_form"
                  id="contact_form"
                  autoComplete="off"
                >
                  <div className="returnmessage" style={{ display: 'none' }}>
                    <span>{/* Message statique ou supprimé */}</span>
                  </div>
                  <div className="input_list">
                    <ul>
                      <li>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          placeholder="Nom + Prénom"
                        />
                      </li>
                      <li>
                        <input
                          id="email"
                          type="text"
                          placeholder="Email"
                          name="email"
                        />
                      </li>
                      <li>
                        <input
                          id="telephone"
                          type="number"
                          placeholder="Téléphone"
                          name="telephone"
                        />
                      </li>
                      <li>
                        <input
                          id="ville"
                          type="text"
                          name="ville"
                          placeholder="Ville"
                        />
                      </li>
                      <li>
                        <input
                          id="postal"
                          type="number"
                          name="postal"
                          placeholder="Code Postal"
                        />
                      </li>
                      <li>
                        <input
                          id="rue"
                          type="text"
                          name="rue"
                          placeholder="Rue"
                        />
                      </li>
                    </ul>
                  </div>

                  <div className="checkbox_list">
                    <ul>
                      <li>
                        <label>
                          <input type="checkbox" value="Mineurs (30.-)" />
                          Mineurs (30.-)
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" value="Individuels (50.-)" />
                          Individuels (50.-)
                        </label>
                      </li>
                      <li>
                        <label>
                          <input
                            type="checkbox"
                            value="Couples / Concubins (80.-)"
                          />
                          Couples / Concubins (80.-)
                        </label>
                      </li>
                      <li>
                        <label>
                          <input
                            type="checkbox"
                            value="Entreprise / Sociétés (200.- minimum)"
                          />
                          Entreprise / Sociétés (200.- minimum)
                        </label>
                      </li>
                      <li>
                        <label>
                          <input
                            type="checkbox"
                            value="Vélo de bronze (250.- à 499.-)"
                          />
                          Vélo de bronze (250.- à 499.-)
                        </label>
                      </li>
                      <li>
                        <label>
                          <input
                            type="checkbox"
                            value="Vélo d'argent (500.- à 749.-)"
                          />
                          Vélo argent (500.- à 749.-)
                        </label>
                      </li>
                      <li>
                        <label>
                          <input
                            type="checkbox"
                            value="Vélo d'or (750.- à 999.-)"
                          />
                          Vélo or (750.- à 999.-)
                        </label>
                      </li>
                      <li>
                        <label>
                          <input
                            type="checkbox"
                            value="Vélo de platine (1000.- et plus)"
                          />
                          Vélo de platine (1000.- et plus)
                        </label>
                      </li>
                    </ul>
                  </div>
                  <br />

                  <div className="message_area">
                    <textarea
                      id="message"
                      placeholder="Message"
                      name="message"
                    />
                  </div>
                  <div className="aali_tm_button">
                    <a id="send_message" href="#">
                      <span>Envoyer {msgSent}</span>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <span
          className="square moving_effect"
          data-direction="y"
          data-reverse="yes"
        />
      </div>
    </div>
  );
};

export default Contact;
