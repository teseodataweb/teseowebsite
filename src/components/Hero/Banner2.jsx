import React , {useState} from 'react';
import PropTypes from 'prop-types';
//import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

//import { EffectCoverflow ,Autoplay , Pagination , Navigation } from "swiper";
import Button from '../button/Button';

Banner2.propTypes = {
    data: PropTypes.array
};

function Banner2(props) {
    //const {data} = props;

    const [dataBlock] = useState(
        {
            subheading: 'TESEO DATA LAB',
            heading: 'Estrategia, tecnología y automatización adaptado a tu tipo de industria',
            desc:'Diseñamos soluciones integrales para maximizar tu rentabilidad: desde el diagnóstico estratégico hasta la automatización comercial y analítica en tiempo real.'
        }
    )
    return (
                <section className="banner s2">
                    <div className="shape"></div>
                    <div className="shape right"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="block-text center">
                                    <h6 className="sub-heading"><span>{dataBlock.subheading}</span></h6>
                                    <h2 className="heading pd">{dataBlock.heading}
                                        
                                        </h2>
                                        <p className="mb-34">{dataBlock.desc}</p>
                                        
                                        <Button title='Ver sectores' link='/sectores' />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </section>
    );
}

export default Banner2;