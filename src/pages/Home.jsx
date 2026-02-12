import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import ServicesMosaic from '../components/sections/ServicesMosaic';
import ProjectCarousel from '../components/sections/ProjectCarousel';
import TechAuthority from '../components/sections/TechAuthority';
import ValueProp from '../components/sections/ValueProp';
import ProcessSection from '../components/sections/ProcessSection';
import ContactSection from '../components/sections/ContactSection';

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <Hero />
                <ServicesMosaic />
                <TechAuthority />
                <ProjectCarousel />
                <ValueProp />
                <ProcessSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
