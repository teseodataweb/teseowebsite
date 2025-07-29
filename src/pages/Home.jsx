import React from 'react';
import dataServicesHome from '../assets/fake-data/data-servicesHome';
import dataSectorsHome from '../assets/fake-data/data-sectorsHome';
import dataResults from '../assets/fake-data/data-results';
import dataTestimonialsHome from '../assets/fake-data/data-testimonialsHome';

import Hero from '../components/Hero/Hero';
import About from '../components/about/About';
import ServicesHome from '../components/services/ServicesHome';
import SectorsHome from '../components/services/SectorsHome';
import Results from '../components/results/Results';
import ProductDemo from '../components/productDemoo/ProductDemo';
import TestimonialsHome from '../components/testimonials/TestimonialsHome';
import RequestADiagnosis from '../components/diagnosis/RequestADiagnosis';
import Footer from '../components/footer/Footer';



function Home(props) {

    return (
        <div className="home-1 wrapper">
            
            <Hero />

            <About />

            <ServicesHome data={dataServicesHome} />

            <SectorsHome data={dataSectorsHome} />

            <Results data={dataResults} />

            <ProductDemo />

            <TestimonialsHome data={dataTestimonialsHome}/>

            <RequestADiagnosis />

            <Footer />
        </div>
        

    );
}

export default Home;