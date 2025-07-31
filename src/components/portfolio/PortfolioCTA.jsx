// components/portfolio/PortfolioCTA.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function PortfolioCTA() {
  return (
    <section className="portfolio-cta-section bg-1">
      <div className="container text-center">
        <div className="cta-block splitting animated">
          <h3
            className="heading fs-36 mb-30"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            ¿Y si una IA pudiera encontrar, calificar y dar seguimiento <br />
            a tus clientes sin que tú muevas un dedo?
          </h3>

          <Link
            to="/servicios#marketing-y-masificacion"
            className="action-btn tf-button"
            data-aos="zoom-in"
            data-aos-delay="250"
          >
            <span>Ver cómo funciona</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PortfolioCTA;
