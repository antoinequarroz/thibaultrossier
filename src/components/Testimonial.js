import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination, Navigation]);
const Testimonial = () => {
  const props = {
    slidesPerView: 1,
    loop: true,
    pagination: false,
    navigation: {
      prevEl: ".prev_button",
      nextEl: ".next_button",
    },
  };
  return (
    <div className="aali_tm_section" id="testimonial">
      <div className="aali_tm_testimonials">
        <div className="left">
          <div className="image">
            <img src="/img/thibault/4R2A2926.png" alt="tr image" />
          </div>
        </div>
        <div className="right">
          <div className="right_in">
            <div
              className="aali_tm_main_title"
              data-text-align="left"
              data-color="light"
            >
              <h3>Thibault Rossier</h3>
            </div>
            <Swiper {...props} className="owl-carousel">
              <SwiperSlide className="item">
                <div className="text">
                  <p>
                    Thibault est un excellent grimpeur. Il l’a déjà prouvé en devenant champion Suisse de la montagne en 2019. La saison dernière, c’est dans la plaine qu’il a énormément progressé et cela fait de lui un coureur complet. Explosif, il a la capacité de s’imposer sur différents terrains. Travailleur, passionné, l’avenir lui appartient.
                  </p>

                </div>
                <div className="name">
                  <h3>
                    Arnaud Rappillard, <span>Entraineur Swiss Olympic</span>
                  </h3>
                </div>
              </SwiperSlide>

              {
                /*
              }
              <SwiperSlide className="item">
                <div className="text">
                  <p>
                    Good overall template. I am getting back into coding and had
                    a simple question for the author. They responded within 5
                    minutes and answered my question. Highly recommend!
                  </p>
                </div>
                <div className="name">
                  <h3>
                    Jessica Parker, <span>App Developer</span>
                  </h3>
                </div>
              </SwiperSlide><SwiperSlide className="item">
                <div className="text">
                  <p>
                    Good overall template. I am getting back into coding and had
                    a simple question for the author. They responded within 5
                    minutes and answered my question. Highly recommend!
                  </p>
                </div>
                <div className="name">
                  <h3>
                    Jessica Parker, <span>App Developer</span>
                  </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className="item">
                <div className="text">
                  <p>
                    I {`can't`} believe I got support and my problem resolved in
                    just minutes from posting my question. Simply amazing team
                    and amazing theme! Thank you for all!
                  </p>
                </div>
                <div className="name">
                  <h3>
                    MacLaren, <span>Freelancer</span>
                  </h3>
                </div>
              </SwiperSlide>

                 */
                }
            </Swiper>
            <div className="direct">
              <a className="prev_button">
                <i className="icon-left" />
              </a>
              <a className="next_button">
                <i className="icon-right" />
              </a>
            </div>
          </div>
        </div>
        <span className="border">
          <span
            className="in moving_effect"
            data-direction="x"
            data-reverse="yes"
          />
        </span>
        <span
          className="square moving_effect"
          data-direction="y"
          data-reverse="yes"
        />
        <span className="quote moving_effect" data-direction="x">
          <i className="icon-quote-left" />
        </span>
      </div>
    </div>
  );
};

export default Testimonial;
