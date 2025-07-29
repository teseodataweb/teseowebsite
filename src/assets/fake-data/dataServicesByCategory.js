
import icon1 from '../images/icon/quote-2.png'
import avt1 from '../images/layouts/avt-08.png'
import avt2 from '../images/layouts/avt-09.png'
import avt3 from '../images/layouts/avt-10.png'


const dataServicesByCategory = [

    {
        id: 1,
        icon: icon1,
        serviceName: 'Análisis Estratégico',
        problem: '¿Tomas decisiones sin saber si hay mercado real?',
        solution: 'Validamos tu idea con datos, no con suposiciones',
        results: 'Desde estudios financieros hasta segmentación avanzada: te damos la certeza que necesitas para invertir con seguridad y captar la demanda real.',
        includes: [
            'Análisis de viabilidad (TIR, VPN, ROI)',
            'Estudios de mercado y modelos econométricos',
            'Evaluación de ubicación y terreno',
            'Identificación de clientes reales con +3M de datos',
        ],
        avt: avt1,
        btn: 'Solicita tu estudio ahora',
    },
    {
        id: 2,
        icon: icon1,
        serviceName: 'Optimización Comercial',
        problem: '“Nuestros precios y producto no responden a lo que el cliente quiere.”',
        solution: 'Rediseñamos tu oferta y pricing con simulaciones de escenarios y benchmark competitivo para mejorar conversión y rentabilidad.',
        includes: [
            'Precios dinámicos basados en datos',
            'Simulación de escenarios y elasticidad',
            'Desarrollo y ajuste de producto',
            'Capacitación de equipos comerciales',
        ],
        avt: avt2,
        btn: 'Optimizar venta',
    },
    {
        id: 3,
        icon: icon1,
        serviceName: 'Marketing, Masificación & BBDD',
        problem: '“Tengo una base de datos inactiva y campañas que no convierten.”',
        solution: 'Activamos tus bases de datos con campañas automatizadas, enriquecidas por IA, para generar leads calificados y ventas reales.',
        includes: [
            'Generación y segmentación de BBDD',
            'Campañas multicanal (WhatsApp, email, redes)',
            'Social media, SEO y contenidos',
            'Agente Vertical IA para prospección y nurturing',
        ],
        avt: avt3,
        btn: 'Activar campaña',
    },
    {
        id: 4,
        icon: icon1,
        serviceName: 'Soluciones Tecnológicas',
        problem: '“Tengo datos, pero no los uso para decidir ni escalar.”',
        solution: 'Creamos plataformas, dashboards y automatizaciones personalizadas para transformar tu operación en un ecosistema digital inteligente.',
        includes: [
            'Plataforma DatAlpine (explorador y dashboard)',
            'Desarrollo de apps, landing pages, software a medida',
            'Integraciones (CRM, BI, APIs)',
            'Automatizaciones y bots',
        ],
        avt: avt3,
        btn: 'Ver demo',
    },

]

export default dataServicesByCategory;