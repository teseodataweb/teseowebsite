import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button';

import img from '../../assets/images/layouts/portfolio.png'

SectorsHome.propTypes = {
    data: PropTypes.array
};

function SectorsHome(props) {

    const { data } = props;

    const [dataBlock] = useState(
        {
            //subheading: 'Join NFT Portfolio',
            heading: 'Especialistas por industria, no generalistas',

        }
    )
    return (
        <section className="sectorsHome">
            <div className="shape"></div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="block-text center">
                            {/*<h6 className="sub-heading"><span>{dataBlock.subheading}</span></h6>*/}
                            <h3 className="heading pd">{dataBlock.heading}</h3>

                        </div>
                    </div>

                    <div className="col-xl-6 col-md-6 d-flex flex-column align-items-center"> {/* Cambiado a col-4 y aplicado estilos para centrar */}
                        <div className="sectorsHome__left">
                            {data.map((idx) => (
                                <div key={idx.id} className="sectorsHome-box">
                                    <div className="icon">
                                        <img src={idx.img} alt="Cyfonii" />
                                    </div>
                                    <div className="content">
                                        <a href="/about" className="tf-button">{idx.title}</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="button d-flex justify-content-center"> {/* Centrado del botón */}
                            <Button link="#" title="Ver más" />
                        </div>
                    </div>

                    <div className="col-xl-6 col-md-6">
                        <div className="sectorsHome__right">
                            <div className="image" data-aos="fade-left" data-aos-duration="2000">
                                <img src={img} alt="cyfonii" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default SectorsHome;