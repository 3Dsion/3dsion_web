import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
// ... rest of imports
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import IdentitySection from '../components/sections/IdentitySection';
import ServicesMosaic from '../components/sections/ServicesMosaic';
import ProjectCarousel from '../components/sections/ProjectCarousel';
import TechAuthority from '../components/sections/TechAuthority';
import ValueProp from '../components/sections/ValueProp';
import ProcessSection from '../components/sections/ProcessSection';
import ContactSection from '../components/sections/ContactSection';

const Home = () => {
    const location = useLocation();

    // Scroll suave a anclas (#contacto, #soluciones, etc.) cuando React Router navega con hash
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            // Pequeño delay para asegurar que el DOM esté renderizado
            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 100);
        }
    }, [location]);
    return (
        <div className="flex flex-col min-h-screen">
            <Helmet>
                <title>3Dsion | Diseño e Impresión 3D Industrial</title>
                <meta name="description" content="Especialistas en diseño mecánico, manufactura aditiva y prototipado industrial. Más de 27 años de experiencia transformando ideas en soluciones reales." />
            </Helmet>
            <Navbar />
            <main className="flex-grow">
                <Hero />
                <IdentitySection />
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
