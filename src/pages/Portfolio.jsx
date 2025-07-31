import React from 'react';

import dataSuccessCases from '../assets/fake-data/dataSuccessCases';

import PortfolioHero from "../components/Hero/PortfolioHero";
import PortfolioCTA from '../components/portfolio/PortfolioCTA';
import PortfolioSuccessCases from '../components/portfolioSuccessCases/PortfolioSuccessCases';
import PortfolioCTAEnd from '../components/portfolioCTAEnd/PortfolioCTAEnd';



function Portfolio (props) {
    
    return (

        <div className="portfolio-page wrapper">

            <PortfolioHero />

            <PortfolioCTA />

            <PortfolioSuccessCases data={dataSuccessCases}/>

            <PortfolioCTAEnd />

        </div>
    );

}

export default Portfolio;