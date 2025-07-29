import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { Link } from 'react-router-dom';

Results.propTypes = {
    data: PropTypes.array
};

function Results(props) {

    const { data } = props;

    const [dataBlock] = useState(
        {
            //subheading: 'Team Members',
            heading: 'Resultados medibles',
        }
    )

    return (
        <section className="results">
            <div className="shape right"></div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="block-text center">
                            {/*<h6 className="sub-heading"><span>{dataBlock.subheading}</span></h6>*/}
                            <h3 className="heading pd">{dataBlock.heading}</h3>
                        </div>

                        <Swiper
                            className="results-swiper"
                            spaceBetween={30}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                500: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                991: {
                                    slidesPerView: 4,
                                },
                            }}
                            loop={true}
                            modules={[Navigation, Pagination]}
                            navigation
                            pagination={{
                                clickable: true,
                            }}

                        >

                            {
                                data.map(idx => (
                                    <SwiperSlide key={idx.id}>
                                        <div className="swiper-slide">
                                            <div className="results-box">
                                                <div className="image">
                                                    <Link to="/team">
                                                        <img src={idx.img} alt="Cyfonii" />
                                                    </Link>
                                                </div>
                                                <div className="content">
                                                    <Link to="/team" className="h5 name">{idx.name}</Link>
                                                    <p className="postion">
                                                        {idx.position}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }

                        </Swiper>




                    </div>

                </div>
            </div>
        </section>
    );
}

export default Results;