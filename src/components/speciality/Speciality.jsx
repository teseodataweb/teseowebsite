import React, { useState } from 'react';
//import Button from '../button/Button';


function Speciality(props) {

    const { data } = props;

    const [dataBlock] = useState(
        {
            subheading: 'Our Speciality',
            heading: 'Un enfoque integral, de la estrategia al resultado',
        }
    )
    return (
        <section className="speciality">
            <div className="shape right"></div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="block-text center">
                            <h6 className="sub-heading"><span>{dataBlock.subheading}</span></h6>
                            <h3 className="heading pd">{dataBlock.heading}</h3>
                            <p className="">{dataBlock.desc}</p>
                        </div>
                    </div>
                    {
                        data.map(idx => (
                            <div key={idx.id} className="col-xl-3 col-md-6">
                                <div className="speciality-box" >
                                    <div className="icon">
                                        <img src={idx.img} alt="Cyfonii" />
                                    </div>
                                    <h4 className="number">0{idx.id}</h4>
                                    <h5 className="title">{idx.title}</h5>
                                    <p>{idx.desc}</p>
                                    <a href="/about" className="tf-button">
                                        {idx.btn}
                                    </a> 

                                    {/*<Button link='/about' title={idx.btn} />*/}
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </section>

    );
}

export default Speciality;