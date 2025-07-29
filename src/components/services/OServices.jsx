import React from 'react';
import PropTypes from 'prop-types';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

SwiperCore.use([Autoplay, Navigation, Pagination]);

OServices.propTypes = {
  data: PropTypes.array
};

function OServices(props) {
  const { data } = props;

  return (
    <section className="oservices-section s2">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="oservices__main">
              <div className="block-text center">
                <h6 className="sub-heading"><span>Servicios</span></h6>
                <h3 className="heading">Soluciones que transforman <br /> tu negocio con datos</h3>
              </div>

              <Swiper
                spaceBetween={0}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation={true}
                slidesPerView={1}
                className="oservices-swiper"
              >
                {data.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="card-servicio centered-slide">
                      <div className="icon-img">
                        <img src={item.icon} alt={item.title} />
                      </div>
                      <h4 className="titulo">{item.title}</h4>
                      <h3 className="dolor">{item.pain}</h3>
                      <p className="solucion">{item.solution}</p>
                      <p className="descripcion">{item.description}</p>
                      <ul className="incluye">
                        {item.includes.map((inc, idx) => (
                          <li key={idx}>{inc}</li>
                        ))}
                      </ul>
                      <a href={item.ctaLink} className="cta-btn" target="_blank" rel="noopener noreferrer">{item.ctaText}</a>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OServices;
