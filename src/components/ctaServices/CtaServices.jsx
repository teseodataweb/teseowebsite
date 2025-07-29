
import React, { useEffect, useRef } from 'react';
import { animateOnScroll } from './CtaFinal.js';

import Button from '../button/Button.jsx';

function CtaServices() {
  const sectionRef = useRef(null);

  useEffect(() => {
    animateOnScroll(sectionRef);
  }, []);

  return (
    <section className="cta-final" ref={sectionRef}>
      <h2 className="cta-title">¿Listo para implementar soluciones reales?</h2>
      <p className="cta-text">
        Solicita un diagnóstico gratuito. Nuestro equipo te dará una evaluación inicial con oportunidades de mejora y un plan a tu medida.
      </p>
      <Button title='Agendar sesión' link='/contact' />
    </section>
  );
}

export default CtaServices;

