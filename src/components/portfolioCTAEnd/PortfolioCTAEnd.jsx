import React from 'react';
import { Link } from 'react-router-dom';

function PortfolioCTAEnd() {
  return (
    <section className="portfolio-cta-end-section banner">
      <div className="shape right"></div>
      <div className="container big">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-md-12 text-center">
            <div className="block-text splitting animated">
              <h2
                className="heading arlo_tm_animation_text_word"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                ¿Te gustaría ser el próximo <br />
                <span className="gradient-text">caso de éxito?</span>
              </h2>

              <p
                className="desc mt-24 mb-30 fs-18 line-h17"
                data-aos="fade-up"
                data-aos-delay="250"
              >
                Hagamos un diagnóstico y veamos qué resultados podemos generar para ti.
              </p>

              <Link
                to="/contacto"
                className="action-btn tf-button"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <span>Agendar diagnóstico</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioCTAEnd;
