import React , {useState} from 'react';
import PropTypes from 'prop-types';
//import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";



//import { EffectCoverflow ,Autoplay , Pagination , Navigation } from "swiper";
import Button from '../button/Button';

ProductDemo.propTypes = {
    data: PropTypes.array
};

function ProductDemo(props) {
    //const {data} = props;

    const [dataBlock] = useState(
        {
            subheading: 'Conoce DatAlpine',
            heading: 'Nuestra plataforma SaaS integra dashboards y simulaciones de ventas y operaciones.',
            desc:'Visualiza tu rentabilidad, proyecciones y leads desde un solo lugar.'
        }
    )
    return (
                <section className="productDemo s2">
                    <div className="shape"></div>
                    <div className="shape right"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="block-text center">
                                    <h5 className='sub-heading'><span>{dataBlock.subheading}</span></h5>
                                    <h2 className="heading pd">{dataBlock.heading}</h2>
                                        <p className="mb-34" style={{ fontSize: '17px' }}>{dataBlock.desc}</p>
                                        
                                        <Button title='Ver demo' link='/sectores' />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </section>
    );
}

export default ProductDemo;