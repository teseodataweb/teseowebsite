import React from 'react';
import PropTypes from 'prop-types';

import { Swiper, SwiperSlide } from 'swiper/react';
import Button from '../button/Button';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

TestimonialsHome.propTypes = {
    data: PropTypes.array
};

function TestimonialsHome(props) {
    const { data } = props
    return (
        <section className="testimonialshome s2">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="testimonialshome__main">
                            <div className="block-text center">
                                {/*<h6 className="sub-heading"><span>Testimonios</span></h6>*/}
                                <h3 className="heading">Resultados que hablan por sí solos<br/></h3>
                            </div>

                            <Swiper

                                spaceBetween={30}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                    },
                                    991: {
                                        slidesPerView: 3,
                                    },
                                }}
                                className="testimonialshome-swiper s2"
                                loop={false}
                                pagination
                            >
                                {
                                    data.map(idx => (
                                        <SwiperSlide key={idx.id}>
                                            <div className="box-testimonialshome center">
                                                <div className="image">
                                                    <img src={idx.avt} alt="Cyfonii" />
                                                </div>

                                                <div className="info">
                                                    <h5 className="name">{idx.name}</h5>
                                                    <p>{idx.position}</p>
                                                    <img src={idx.icon} alt="Cyfonii" />
                                                </div>
                                                <p className="text">{idx.text}</p>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                            <div className='block-text center'>
                                <Button title='Ver más casos' link='/portfolio' />
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
}

export default TestimonialsHome;