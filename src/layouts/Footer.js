const Footer = () => {
  return (
    <div className="aali_tm_section">
      <div className="aali_tm_copyright">
        <div className="container">
          <div className="copyright_inner">
            <div className="top">
              <div className="logo">
                <img src="/img/thibault/logoThibaultRossier.png" alt="tr log" />
              </div>
              <div className="social">
                <ul>
                  <li>
                    <a href="https://www.facebook.com/profile.php?id=100066420318465">
                      <i className="icon-facebook-1" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/thibault.rossierofficial/">
                      <i className="icon-instagram-3" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bottom">
              <div className="left">
                <p>
                  Créer par {'Antoine Quarroz'}
                  <a></a> © {new Date().getFullYear()}
                </p>
              </div>
              <div className="right">
                <ul>
                  <li>
                    <a
                      className="line_anim"
                      href="https://thibaultrossier.ch/wp-content/uploads/2024/06/PV-2eme-AG-06.05.2023.pdf"
                    >
                      Status du club
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <span className="square moving_effect" data-direction="x" />
      </div>
    </div>
  );
};

export default Footer;
