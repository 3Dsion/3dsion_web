import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
// ... rest of imports
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import IdentitySection from '../components/sections/IdentitySection';
import ServicesMosaic from '../components/sections/ServicesMosaic';
import FAQSection from '../components/sections/FAQSection';
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
                <title>3Dsion | Ingeniería Aditiva y Validación de Diseños</title>
                <meta name="description" content="Expertos en ingeniería aditiva, validación de diseños CAD y prototipado industrial de alta precisión para ingenieros y matriceros. Más de 27 años de experiencia." />

                {/* Schema.org for GEO/AEO */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "3Dsion",
                        "image": "https://3dsion.com.ar/logo.png",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Guaminí 5043",
                            "addressLocality": "Villa Martelli",
                            "addressRegion": "Buenos Aires",
                            "postalCode": "B1603",
                            "addressCountry": "AR"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": -34.548,
                            "longitude": -58.504
                        },
                        "url": "https://3dsion.com.ar",
                        "telephone": "+5411XXXXXXXX",
                        "priceRange": "$$",
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                            "opens": "09:00",
                            "closes": "18:00"
                        }
                    })}
                </script>

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "serviceType": "Ingeniería Aditiva y Prototipado Industrial",
                        "provider": {
                            "@type": "LocalBusiness",
                            "name": "3Dsion"
                        },
                        "areaServed": {
                            "@type": "Country",
                            "name": "Argentina"
                        },
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Servicios de Manufactura 3D",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Validación Dimensional de CAD"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Fabricación de Másters para Matricería"
                                    }
                                }
                            ]
                        }
                    })}
                </script>
            </Helmet>
            <Navbar />
            <main className="flex-grow">
                <Hero />
                <IdentitySection />
                <ServicesMosaic />
                <TechAuthority />
                <FAQSection />
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
