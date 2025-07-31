import React , {useState} from 'react';
import Button from '../button/Button';

import img from '../../assets/images/layouts/create.png'



function Create(props) {

    
    const [dataBlock] = useState(
        {
            heading: '¿Y si pudieras priorizar a los prospectos con mayor potencial?',
            desc: 'Activa tu Agente Vertical: una IA que segmenta, califica y organiza tu base de datos para que tu equipo enfoque esfuerzos donde hay más oportunidad.',
            
        }
    )
    return (
        <section className="createPortfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="create__main">
                                <div className="content">
                                    <h4 className="heading">{dataBlock.heading}</h4>
                                    <p>{dataBlock.desc}</p>
                                    <Button title="Activar Agente IA" link="/contact" className="action-btn" />
                                
                                </div>
                                <img src={img} alt="Cyfonii" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default Create;