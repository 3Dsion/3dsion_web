import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { PenTool, CheckCircle2, Search, Zap, Cpu } from 'lucide-react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Button from '../../components/ui/Button';

// Assets placeholders - In production these should be actual imports
// import heroBg from '../../assets/ing-hero-bg.webp';
// import dfmBg from '../../assets/ing-dfm-bg.webp';
// import validacionBg from '../../assets/ing-validacion-bg.webp';
// import optimizacionBg from '../../assets/ing-optimizacion-bg.webp';

const Ingenieria = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const technicalCards = [
        {
            title: "Consultoría de Factibilidad",
            desc: "Evaluamos tu diseño con criterio industrial antes de fabricar. Te asesoramos sobre geometrías, materiales y procesos para garantizar que tu proyecto sea viable, eficiente y optimizado para manufactura aditiva.",
            icon: PenTool,
            image: "ing-dfm-bg.webp" // Placeholder logic
        },
        {
            title: "Validación de Movimiento y Función",
            desc: "Analizamos cómo interactúan las piezas y cómo se comportan los mecanismos en conjunto. Aseguramos que cada encastre y movimiento responda exactamente a tu lógica antes de fabricar.",
            icon: Search,
            image: "ing-validacion-bg.webp" // Placeholder logic
        },
        {
            title: "Optimización Técnica",
            desc: "Reducimos peso y mejoramos la eficiencia según la prioridad de tu industria, logrando componentes más inteligentes y resistentes.",
            icon: Zap,
            image: "ing-optimizacion-bg.webp" // Placeholder logic
        }
    ];

    const guaranteeItems = [
        "Criterio Sheet Metal",
        "Gestión de Tolerancias",
        "Expertos en Ensambles",
        "Visión Productiva"
    ];

    const processSteps = [
        { id: "01", t: "ESCUCHA Y DIAGNÓSTICO", d: "Relevamos juntos la función de la pieza en su entorno real. Entender tu necesidad es el primer paso." },
        { id: "02", t: "VALIDACIÓN FUNCIONAL RÁPIDA", d: "Iteramos prototipos para testear forma, ajuste y ergonomía. Tu feedback guía la evolución del diseño." },
        { id: "03", t: "INGENIERÍA DE DETALLE", d: "Aplicamos modelado paramétrico avanzado para optimizar cada geometría según las pruebas de campo." },
        { id: "04", t: "TRANSFERENCIA INDUSTRIAL", d: "Entrega de archivos maestros y documentación técnica listos para producción." }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Helmet>
                <title>Ingeniería & Co-Creación | 3Dsion</title>
                <meta name="description" content="Co-creamos soluciones industriales. Escuchamos tu necesidad para integrar tu visión con nuestro criterio técnico, transformando desafíos en productos funcionales." />
            </Helmet>

            <Navbar />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative pt-32 pb-24 bg-secondary-dark overflow-hidden">
                    {/* Placeholder for ing-hero-bg.webp */}
                    <div className="absolute inset-0 z-0">
                        {/* Replace this div with <img> using ing-hero-bg.webp */}
                        <div className="w-full h-full bg-slate-800 animate-pulse opacity-20"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-secondary-dark via-secondary-dark/90 to-secondary-dark/50"></div>
                    </div>

                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-orange-500 bg-orange-500/10 rounded-full uppercase">
                                Soluciones Técnicas
                            </span>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                                Ingeniería & <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 italic">Co-Creación</span>
                            </h1>
                            <p className="max-w-3xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed">
                                No solo imprimimos piezas; co-creamos soluciones industriales. Escuchamos tu necesidad para integrar tu visión con nuestro criterio técnico, transformando juntos los desafíos en productos funcionales.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Technical Cards Section - Cotizar Style */}
                <section className="py-24 bg-gray-50/50">
                    <div className="container mx-auto px-6 whatsapp-safe-zone">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {technicalCards.map((card, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    // Replicating Cotizar card style: backdrop-blur-md border border-gray-200 p-8 rounded-[2rem] shadow-xl
                                    className="relative overflow-hidden group rounded-[2rem] border border-gray-200 bg-white shadow-xl h-full"
                                >
                                    {/* Background Image with Overlay */}
                                    <div className="absolute inset-0 z-0">
                                        {/* Placeholder logic for background images */}
                                        <div className="w-full h-full bg-slate-200 animate-pulse"></div>
                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-secondary-dark/80 group-hover:bg-secondary-dark/70 transition-colors duration-500"></div>
                                    </div>

                                    <div className="relative z-10 p-8 flex flex-col h-full">
                                        <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mb-6 text-orange-500 group-hover:scale-110 transition-transform duration-300">
                                            <card.icon size={24} />
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-4">{card.title}</h3>
                                        <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                                            {card.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Guarantee Block */}
                <section className="py-24 bg-white overflow-hidden">
                    <div className="container mx-auto px-6 whatsapp-safe-zone">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-1/2">
                                <h2 className="text-3xl md:text-5xl font-bold text-secondary-dark mb-6">
                                    Garantía Técnica
                                </h2>
                                <p className="text-gray-600 text-lg mb-8 leading-relaxed border-l-4 border-orange-500 pl-6">
                                    Aportamos <span className="font-bold text-secondary-dark">27 años de trayectoria</span> en planta para asegurar viabilidad técnica. Hablamos tu idioma: el de la manufactura real.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {guaranteeItems.map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100 hover:border-gray-200 transition-colors">
                                            <CheckCircle2 className="text-primary" size={20} />
                                            <span className="text-secondary-dark font-medium text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="lg:w-1/2 relative">
                                {/* Visual representation of experience/machinery */}
                                <div className="aspect-video bg-secondary-dark rounded-3xl overflow-hidden shadow-2xl relative group flex items-center justify-center">
                                    <Cpu size={80} className="text-white/20" />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Co-Creation Process */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-6 whatsapp-safe-zone">
                        <div className="text-center mb-16">
                            <span className="text-primary font-bold tracking-widest uppercase text-sm">Metodología</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-secondary-dark mt-2">Nuestro Proceso de Co-Creación Técnica</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {processSteps.map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all relative overflow-hidden"
                                >
                                    <div className="absolute -top-4 -right-4 text-9xl font-black text-gray-50 select-none opacity-50">
                                        {step.id}
                                    </div>
                                    <div className="relative z-10">
                                        <div className="w-10 h-1 bg-gradient-to-r from-primary to-orange-400 mb-6"></div>
                                        <h4 className="font-bold text-secondary-dark mb-4 text-lg">{step.t}</h4>
                                        <p className="text-gray-500 text-sm leading-relaxed">
                                            {step.d}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Final */}
                <section className="py-24 bg-white border-t border-gray-100">
                    <div className="container mx-auto px-6 whatsapp-safe-zone">
                        <div className="bg-secondary-dark rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
                            {/* Glow effects */}
                            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-[100px]"></div>
                            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-orange-500/10 blur-[80px]"></div>

                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">¿Tenés un desafío técnico?</h2>
                                <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
                                    Co-creemos la solución. Transformemos tu necesidad en un producto funcional.
                                </p>
                                <Button href="/cotizar" variant="primary" className="text-lg px-8 py-4">
                                    COMENZAR AHORA
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Safe Zone for WhatsApp Button */}
                <div className="h-24"></div>
            </main>

            <Footer />
        </div>
    );
};

export default Ingenieria;
