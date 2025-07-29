//import React, { useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

//import { Navigation, Pagination } from 'swiper';
//import { Swiper, SwiperSlide } from 'swiper/react';
import {SwiperSlide } from 'swiper/react';
import Button from '../button/Button';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';


ServicesByCategory.propTypes = {
    data: PropTypes.array
};

function ServicesByCategory(props) {
    const { data } = props
    return (
        <section className="servicesByCategory">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="servicesByCategory__main">
                            <div className="block-text center">
                                <h6 className="sub-heading"><span>Testimonials</span></h6>
                                <h3 className="heading">What People Say <br />
                                    about us
                                </h3>
                            </div>


                            <div className="services-swiper s2">
                                {/*spaceBetween={30}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                    },
                                    768: {
                                        slidesPerView: 1,
                                    },
                                    991: {
                                        slidesPerView: 1,
                                    },
                                    1200: {
                                        slidesPerView: 1,
                                    },
                                }}
                                loop={true}
                                modules={[ Navigation , Pagination ]}
                                navigation
                                pagination={{
                                    clickable: true,
                                  }}
                                */}

                                {
                                    data.map(idx => (
                                        <SwiperSlide key={idx.id}>
                                            <div className="box-servicesByCategory center">

                                                <div className="image-servicesByCategory">
                                                    <img src={idx.avt} alt="Cyfonii" />
                                                </div>

                                                <div className="info">
                                                    <h5 className="serviceName">{idx.serviceName}</h5>
                                                    <b className="problem info-services" style={{ fontSize: '15px' }}>{idx.problem}</b>
                                                    <p className="solution info-services">{idx.solution}</p>
                                                    <p className="results info-services"> {idx.results}</p>
                                                </div>

                                                <div className="includes info-services">
                                                    <b>Impulsa tu crecimiento con:</b>
                                                    <ul>
                                                        {Array.isArray(idx.includes) ? (
                                                            idx.includes.map((item, i) => (
                                                                <li key={i}>{item}</li>
                                                            ))
                                                        ) : (
                                                            <li>{idx.includes}</li>
                                                        )}
                                                    </ul>
                                                </div>
                                                <Button link='/' title={idx.btn} />
                                            </div>
                                        </SwiperSlide>

                                    ))
                                }


                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesByCategory;