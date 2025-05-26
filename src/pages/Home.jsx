import React from 'react';
import { Layout } from '../components/Layout';
import HeroSection from '../components/HeroSection';
import AboutPage from '../components/AboutSection';
import CompaniesSlider from '../components/CompanyTieUp';

const HomePage = () => {
    return (
        <Layout>
            <HeroSection/>
            <CompaniesSlider/>
            <AboutPage/>
            
        </Layout>
    );
}

export default HomePage;
