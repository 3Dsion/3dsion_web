import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/layout/Navbar';
// ... rest of imports
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
            <Helmet>
                <title>3Dsion | Diseño e Impresión 3D Industrial</title>
                <meta name="description" content="Especialistas en diseño mecánico, manufactura aditiva y prototipado industrial. Más de 27 años de experiencia transformando ideas en soluciones reales." />
            </Helmet>
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
