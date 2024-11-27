import emailjs from "emailjs-com";
import { useState } from "react";
import { emailIcon, msgSent } from "../svgImage";

const Contact = () => {
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    message: "",
    telephone: "",
    postal: "",
    ville: "",
    rue: "",
    membershipType: [],
  });

  const { name, email, message, telephone, postal, ville, rue, membershipType } = mailData;
  const [error, setError] = useState(null);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      // Gestion des cases à cocher
      setMailData({
        ...mailData,
        membershipType: checked
            ? [...membershipType, value]
            : membershipType.filter((item) => item !== value),
      });
    } else {
      setMailData({ ...mailData, [name]: value });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setError(true);
      clearError();
    } else {
      emailjs
          .send(
              "service_seruhwu", // service id
              "template_21aw58z", // template id
              mailData,
              "Q3pccdLZhU-mZT7tQ" // public api
          )
          .then(
              (response) => {
                setError(false);
                clearError();
                setMailData({
                  name: "",
                  email: "",
                  message: "",
                  telephone: "",
                  postal: "",
                  ville: "",
                  rue: "",
                  membershipType: [],
                });
              },
              (err) => {
                console.log(err.text);
              }
          );
    }
  };

  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };

  return (
      <div className="aali_tm_section" id="contact">
        <div className="aali_tm_contact">
          <div className="container">
            <div
                className="aali_tm_main_title"
                data-text-align="center"
                data-color="dark"
            >
              <span>Fan's club</span>
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
                      <p>
                        Couple et concubins (80.- CHF)
                      </p>
                      <p>
                        Individuel (50.- CHF)
                      </p>
                      <p>
                        Mineurs (30.- CHF)
                      </p>
                      <p>
                        Entreprise et Sociétés (min 200.- CHF)
                      </p>

                    </div>
                  </li>

                  <li>
                    <div className="list_inner">
                      {emailIcon}
                      <span>IBAN du Fan's Club</span>
                      <p>
                        IBAN: CH17 8080 8001 3412 14239
                      </p>
                      <p>
                        Banque Raiffeisen Sion et Région
                      </p>
                      <p>
                        1950 Sion
                      </p>

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
                      onSubmit={(e) => onSubmit(e)}
                  >
                    <div
                        className={error ? "empty_notice" : "returnmessage"}
                        style={{display: error == null ? "none" : "block"}}
                    >
                    <span>
                      {error
                          ? "Please Fill Required Fields"
                          : "Your message has been received, We will contact you soon."}
                    </span>
                    </div>
                    <div className="input_list">
                      <ul>
                        <li>
                          <input
                              id="name"
                              type="text"
                              name="name"
                              onChange={(e) => onChange(e)}
                              value={name}
                              placeholder="Nom + Prénom"
                          />
                        </li>
                        <li>
                          <input
                              id="email"
                              type="text"
                              placeholder="Email"
                              name="email"
                              onChange={(e) => onChange(e)}
                              value={email}
                          />
                        </li>
                        <li>
                          <input
                              id="telephone"
                              type="number"
                              placeholder="Téléphone"
                              name="telephone"
                              onChange={(e) => onChange(e)}
                              value={telephone}
                          />
                        </li>
                        <li>
                          <input
                              id="ville"
                              type="text"
                              name="ville"
                              onChange={(e) => onChange(e)}
                              value={ville}
                              placeholder="Ville"
                          />
                        </li>
                        <li>
                          <input
                              id="postal"
                              type="number"
                              name="postal"
                              onChange={(e) => onChange(e)}
                              value={postal}
                              placeholder="Code Postal"
                          />
                        </li>
                        <li>
                          <input
                              id="rue"
                              type="text"
                              name="rue"
                              onChange={(e) => onChange(e)}
                              value={rue}
                              placeholder="Rue"
                          />
                        </li>
                      </ul>
                    </div>

                    <div className="checkbox_list">
                      <ul>
                        <li>
                          <label>
                            <input
                                type="checkbox"
                                value="Mineurs (30.-)"
                                onChange={(e) => onChange(e)}
                            />
                            Mineurs (30.-)
                          </label>
                        </li>
                        <li>
                          <label>
                            <input
                                type="checkbox"
                                value="Individuels (50.-)"
                                onChange={(e) => onChange(e)}
                            />
                            Individuels (50.-)
                          </label>
                        </li>
                        <li>
                          <label>
                            <input
                                type="checkbox"
                                value="Couples / Concubins (80.-)"
                                onChange={(e) => onChange(e)}
                            />
                            Couples / Concubins (80.-)
                          </label>
                        </li>
                        <li>
                          <label>
                            <input
                                type="checkbox"
                                value="Entreprise / Sociétés (200.- minimum)"
                                onChange={(e) => onChange(e)}
                            />
                            Entreprise / Sociétés (200.- minimum)
                          </label>
                        </li>
                        <li>
                          <label>
                            <input
                                type="checkbox"
                                value="Vélo de bronze (250.- à 499.-)"
                                onChange={(e) => onChange(e)}
                            />
                            Vélo de bronze (250.- à 499.-)
                          </label>
                        </li>
                        <li>
                          <label>
                            <input
                                type="checkbox"
                                value="Vélo d'argent (500.- à 749.-)"
                                onChange={(e) => onChange(e)}
                            />
                            Vélo d'argent (500.- à 749.-)
                          </label>
                        </li>
                        <li>
                          <label>
                            <input
                                type="checkbox"
                                value="Vélo d'or (750.- à 999.-)"
                                onChange={(e) => onChange(e)}
                            />
                            Vélo d'or (750.- à 999.-)
                          </label>
                        </li>
                        <li>
                          <label>
                            <input
                                type="checkbox"
                                value="Vélo de platine (1000.- et plus)"
                                onChange={(e) => onChange(e)}
                            />
                            Vélo de platine (1000.- et plus)
                          </label>
                        </li>
                      </ul>
                    </div>
                    <br/>

                    <div className="message_area">
                    <textarea
                        id="message"
                        placeholder="Message"
                        name="message"
                        onChange={(e) => onChange(e)}
                        value={message}
                    />
                    </div>
                    <div className="aali_tm_button">
                      <a id="send_message" href="#" onClick={(e) => onSubmit(e)}>
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
