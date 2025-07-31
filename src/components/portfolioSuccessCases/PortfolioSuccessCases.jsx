import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

PortfolioSuccessCases.propTypes = {
    data: PropTypes.array
};

const categories = [
    'Todos',
    'Bienes Raíces',
    'Concretos',
    'Retail y Consumo',
    'Política y Activación',
    'Marketing, Masificación & BBDD'
];

function PortfolioSuccessCases({ data }) {
    const [activeFilter, setActiveFilter] = useState('Todos');
    const [visibleCards, setVisibleCards] = useState([]);
    const [animateHeader, setAnimateHeader] = useState(false);
    const [animateFilters, setAnimateFilters] = useState(false);

    const cardsRef = useRef([]);
    const headerRef = useRef(null);
    const filtersRef = useRef(null);

    const filteredData = activeFilter === 'Todos'
        ? data
        : data.filter(item => item.category === activeFilter);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    const index = Number(entry.target.dataset.index);
                    if (entry.isIntersecting && !visibleCards.includes(index)) {
                        setVisibleCards(prev => [...prev, index]);
                    }
                });
            },
            { threshold: 0.2 }
        );

        cardsRef.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            cardsRef.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, [filteredData, visibleCards]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setAnimateHeader(true);
            },
            { threshold: 0.2 }
        );
        if (headerRef.current) observer.observe(headerRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setAnimateFilters(true);
            },
            { threshold: 0.2 }
        );
        if (filtersRef.current) observer.observe(filtersRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="portfolio-success-section">
            <div className="container">
                <div
                    className={`section-header portfolio-animate ${animateHeader ? 'fade-in-up-strong' : ''}`}
                    ref={headerRef}
                >
                    <h2 className="titulo-general">Casos de Éxito</h2>
                    <p className="descripcion">
                        Historias reales de transformación con datos, IA y automatización.
                    </p>
                </div>

                <div
                    className={`filtros-categorias ${animateFilters ? 'filters-visible' : ''}`}
                    ref={filtersRef}
                >
                    {categories.map((cat, i) => (
                        <button
                            key={i}
                            className={`filtro-btn ${activeFilter === cat ? 'activo' : ''}`}
                            onClick={() => {
                                setActiveFilter(cat);
                                setVisibleCards([]);
                            }}
                            style={{ animationDelay: `${i * 0.3}s` }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="casos-grid">
                    {filteredData.map((item, index) => (
                        <div
                            className={`card-wrapper ${visibleCards.includes(index) ? 'fade-in-up-strong' : ''}`}
                            key={index}
                            data-index={index}
                            ref={(el) => (cardsRef.current[index] = el)}
                            style={{
                                animationDelay: `${index * 0.1 + 0.2}s`
                            }}
                        >
                            <div className={`card-categoria glass-effect ${item.isTeseo ? 'card-teseo' : ''}`}>
                                <div className={`badge-categoria ${item.isTeseo ? 'destacado-teseo' : 'destacado'}`}>
                                    {item.customer}
                                </div>
                                <div className="categoria-content">
                                    <span className="categoria-title">{item.title}</span>
                                    <p className="categoria-desc">{item.desc}</p>
                                    <ul className="impacto-lista">
                                        {item.results.map((res, i) => (
                                            <li key={i}>{res}</li>
                                        ))}
                                    </ul>
                                    <Link className="categoria-link destacado" to={item.link}>
                                        {item.linkText}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PortfolioSuccessCases;
