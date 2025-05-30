import React from 'react';
import { Layout } from '../components/Layout';
import HeroSection from '../components/HeroSection';
import AboutPage from '../components/AboutSection';
import CompaniesSlider from '../components/CompanyTieUp';
import Chatbot from '../components/Chatbot';

const HomePage = () => {
    return (
        <Layout>
            <Chatbot/>
            <HeroSection/>
            <CompaniesSlider/>
            <AboutPage/>
            
        </Layout>
    );
}

export default HomePage;
