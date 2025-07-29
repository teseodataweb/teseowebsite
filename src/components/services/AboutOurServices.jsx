import React , {useState} from 'react';
import PropTypes from 'prop-types';

//import { Pagination  } from 'swiper';
import { /*Swiper*/ SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

AboutServices.propTypes = {
    data: PropTypes.array
};

function AboutServices(props) {
    const {data} = props;

    const [dataBlock] = useState(
        {
            subheading: 'Testimonials',
            heading: '¿Qué ofrecemos?',
        }
    )

    return (
        <section className="testimonials">

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="testimonials__main">
                                <div className="block-text center">
                                    <h6 className="sub-heading"><span>{dataBlock.heading}</span></h6>
                                    <h3 className="heading wow" data-splitting>{dataBlock.heading}
                                        </h3>
                                </div>

                    
                        {
                            data.map(idx => (
                                <SwiperSlide key={idx.id}>
                                    <div className="swiper-slide">
                                            <div className="box-testimonial center">
                                                
                                                <p className="text">{idx.text}</p>
                                            </div>
                                        </div>
                                </SwiperSlide>
                                
                            ))
                        }


                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default AboutServices;