import React, { useState } from 'react';
import PropTypes from 'prop-types';

//import img from '../../assets/images/layouts/portfolio.png'

Portfolio.propTypes = {
    data: PropTypes.array
};

function Portfolio(props) {

    const { data } = props;

    const [dataBlock] = useState(
        {
            subheading: 'Join NFT Portfolio',
            heading: 'Become a Cyfonii Player Now',

        }
    )
    return (
        <section className="sectors">
            <div className="shape right"></div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="block-text center">
                            <h6 className="sub-heading"><span>{dataBlock.subheading}</span></h6>
                            <h3 className="heading pd">{dataBlock.heading}</h3>

                        </div>
                    </div>
                    <div className="col-xl-12 col-md-12">
                        <div className="ourServices">
                            {
                                data.map(idx => (
                                    <div key={idx.id} className="services-box">
                                        <div className="sector">
                                            <img src={idx.img} alt="Cyfonii" /></div>
                                    
                                        <div className="content info-sectors">
                                            <h5>{idx.sector}</h5>
                                            <p><b>Reto: </b></p>
                                            <p>{idx.challenge}</p>

                                            <p><b>Solución TESEO: </b></p>
                                            <div className='solution info-sectors'>
                                                <ul>
                                                    {Array.isArray(idx.solution) ? (
                                                        idx.solution.map((item, i) => (
                                                            <li key={i}>{item}</li>
                                                        ))
                                                    ) : (
                                                        <li>{idx.solution}</li>
                                                    )}
                                                </ul>
                                            </div>

                                            <p><b>Resultado: </b></p>
                                            <div className='Result info-sectors'>
                                                <ul>
                                                    {Array.isArray(idx.result) ? (
                                                        idx.result.map((item, i) => (
                                                            <li key={i}>{item}</li>
                                                        ))
                                                    ) : (
                                                        <li>{idx.result}</li>
                                                    )}
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                ))
                            }

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Portfolio;