import React from 'react';
import PropTypes from 'prop-types';

Categories.propTypes = {
    data: PropTypes.array
};

function Categories({ data }) {
    return (
        <section className="categorias-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="titulo-general">Soluciones que hablan el idioma de tu sector</h2>
                    {/*<p className="subtitulo"></p>*/}
                    <p className="descripcion">
                        Cada industria enfrenta desafíos únicos. Nosotros diseñamos soluciones que entienden sus códigos.<br />
                        Adaptamos nuestra tecnología, análisis y automatización al contexto real de tu operación para generar resultados medibles desde el primer mes.
                    </p>
                </div>

                <div className="categorias-grid">
                    {data.map((item, index) => (
                        <div className="card-categoria" key={index}>
                            <div className="badge-categoria">

                                <h1 className='title-categoria'>{item.title}</h1>
                            </div>

                            <div className="categoria-content">
                                {/*<img src={item.icon} alt={item.title} className="categoria-icono" />*/}
                                <p className="categoria-pain">{item.pain}</p>

                                <ul className="categoria-includes">
                                    {item.includes.map((inc, i) => (
                                        <li key={i}>{inc}</li>
                                    ))}
                                </ul>

                                <ul className="categoria-impacto">
                                    {item.impact.map((impacto, i) => (
                                        <li key={i}>{impacto}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Categories;
