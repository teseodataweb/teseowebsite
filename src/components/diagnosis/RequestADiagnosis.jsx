import React, { useState } from 'react';
import PropTypes from 'prop-types';
//import { Accordion } from 'react-bootstrap-accordion';

//import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Button from '../button/Button';

RequestADiagnosis.propTypes = {
    data: PropTypes.array
};

function RequestADiagnosis(props) {

    const [dataBlock] = useState(
        {
            //subheading: '¿Listo para convertir tus datos en crecimiento?',
            heading: '¿Listo para convertir tus datos en crecimiento?',
            desc1: 'Solicita un diagnóstico gratuito y recibe una propuesta personalizada con recomendaciones accionables.',
            //desc2:'Please check this FAQ first before contacting us.'

        }
    )

    return (
        <section className="rqstAD">
            <div className="shape right"></div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="block-text center" data-aos="fade-down" data-aos-duration="3000">
                            {/*<h6 className="sub-heading"><span>{dataBlock.subheading}</span></h6>*/}
                            <h3 className="heading">{dataBlock.heading}</h3>
                            <p className="mb-17" style={{ fontSize: '18px' }}>{dataBlock.desc1}</p>
                            {/*<p>{dataBlock.desc2}</p> */}
                        </div>

                        <div className='block-text center' data-aos="fade-down" data-aos-duration="3000">
                            <Button title='Agendar llamada' link='/portfolio' />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default RequestADiagnosis;