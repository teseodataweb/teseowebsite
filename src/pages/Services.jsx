import React from 'react';

import dataCard from '../assets/fake-data/data-card';
import dataAboutOurServices from '../assets/fake-data/dataAboutOurServices';
import dataServices from '../assets/fake-data/data-services';
import dataCategories from '../assets/fake-data/data-categories';

import AboutOurServices from '../components/services/AboutOurServices';
import Banner2 from '../components/Hero/Banner2';
import Footer2 from '../components/footer/Footer2';
import OServices from '../components/services/OServices';
import Categories from '../components/categories/Categories';
import CtaServices from '../components/ctaServices/CtaServices';



function Services(props) {
    

    return (
        <div className='home-2 wrapper'>
                <Banner2 data={dataCard} />

                <AboutOurServices data={dataAboutOurServices} />

                <OServices data={dataServices}/>

                <Categories data={dataCategories} />

                <CtaServices />

                <Footer2 />
        </div>
    );
}

export default Services;