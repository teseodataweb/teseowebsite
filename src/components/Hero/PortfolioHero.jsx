import React from 'react';
import { Link } from 'react-router-dom';

function PortfolioHero() {
  return (
    <section className="portfolio-hero-section banner">
      <div className="shape right"></div>
      <div className="container big">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-md-12 text-center">
            <div className="block-text splitting animated">
              <h2 className="heading arlo_tm_animation_text_word" data-aos="fade-up" data-aos-delay="100">
                Transformamos datos en <br />
                <span className="gradient-text">crecimiento real</span>
              </h2>

              <p className="desc mt-24 mb-30 fs-18 line-h17" data-aos="fade-up" data-aos-delay="250">
                Conoce cómo ayudamos a empresas como la tuya a tomar mejores decisiones, atraer a sus clientes ideales y multiplicar sus resultados con IA, analítica y automatización.
              </p>

              <Link to="/contacto" className="action-btn tf-button" data-aos="zoom-in" data-aos-delay="400">
                <span>Solicitar diagnóstico personalizado</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioHero;
