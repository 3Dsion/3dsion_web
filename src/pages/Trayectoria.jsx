import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Trayectoria = () => {
    const acts = [
        {
            tag: "Acto I",
            title: "El Origen",
            subtitle: "Ingeniería Tradicional",
            desc: "3Dsion nace de una sólida base en diseño mecánico y conformación de chapa metálica (sheet metal). Más de 27 años de experiencia en planta, resolviendo problemas reales de manufactura, sentaron el fundamento de cada solución que hoy la dirección técnica ofrece al mercado.",
            /* Placeholder: trayectoria-origen.webp — Imagen de taller de ingeniería tradicional / mesa de dibujo */
            image: "trayectoria-origen.webp"
        },
        {
            tag: "Acto II",
            title: "La Evolución",
            subtitle: "Adopción de Manufactura Aditiva",
            desc: "La pasión por la fabricación llevó a 3Dsion a adoptar la impresión 3D como herramienta de vanguardia industrial. El dominio de múltiples tecnologías (FDM, Resina SLA, Escaneado 3D) permitió transformar la forma en que la industria valida, prototipa y produce componentes técnicos.",
            /* Placeholder: trayectoria-evolucion.webp — Imagen de impresora 3D industrial en acción */
            image: "trayectoria-evolucion.webp"
        },
        {
            tag: "Acto III",
            title: "Los Pilares",
            subtitle: "Lo que define a 3Dsion hoy",
            desc: "La dirección técnica de 3Dsion se posiciona como el puente definitivo entre el diseño conceptual y el producto final fabricable. Criterio de ingeniería real, versatilidad tecnológica y compromiso con la calidad industrial son los tres ejes que sostienen cada proyecto.",
            /* Placeholder: trayectoria-pilares.webp — Imagen de pieza técnica terminada o equipo de trabajo */
            image: "trayectoria-pilares.webp"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Helmet>
                <title>Trayectoria | 3Dsion — 27 Años de Ingeniería e Impresión 3D Industrial</title>
                <meta name="description" content="La evolución de 3Dsion: del diseño mecánico tradicional a la manufactura aditiva industrial. 27 años transformando desafíos técnicos en soluciones reales." />
                <meta name="keywords" content="trayectoria 3Dsion, ingeniería industrial, impresión 3D, manufactura aditiva, diseño mecánico, historia empresa" />
            </Helmet>
            <Navbar />

            <main id="cotizar" className="flex-grow pt-20 relative overflow-hidden">
                {/* Fondo Estilo Cotizar (Clean/Lab) */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[var(--bg-tech)] blur-[150px] rounded-full opacity-20"></div>
                    <div
                        className="absolute top-0 left-0 w-full h-[1000px]"
                        style={{
                            background: 'radial-gradient(circle at center 20%, rgba(229, 239, 252, 1) 0%, transparent 70%)'
                        }}
                    ></div>
                </div>

                {/* Hero Trayectoria - Estilo Cotizar */}
                <section className="py-20 relative z-10">
                    <div className="container mx-auto px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-gray-50/50 backdrop-blur-md text-secondary-dark text-[10px] font-bold uppercase tracking-widest mb-6 shadow-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                                Trayectoria Institucional
                            </div>
                            <h1 style={{ color: 'var(--cotizar-text-titles)' }} className="text-4xl md:text-7xl font-bold mb-8 tracking-tight">
                                27 años transformando <br /><span className="text-primary italic">ideas en realidades</span>
                            </h1>
                            <p style={{ color: 'var(--cotizar-text-body)' }} className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
                                De la mesa de dibujo a la fabricación aditiva: una evolución constante dedicada a la ingeniería de precisión.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* 3 Actos Narrativos con Estilo Tarjetas Cotizar */}
                <section className="py-24 relative z-10">
                    <div className="container mx-auto px-6 whatsapp-safe-zone">
                        <div className="space-y-32">
                            {acts.map((act, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1, duration: 0.8 }}
                                    className={`relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? 'lg:direction-rtl' : ''}`}
                                >
                                    {/* Watermark Numérico Sutil */}
                                    <div className={`absolute -top-20 hidden lg:block text-[15rem] font-black text-secondary-dark/[0.03] select-none leading-none pointer-events-none ${i % 2 !== 0 ? 'left-0' : 'right-0'}`}>
                                        0{i + 1}
                                    </div>

                                    {/* Texto descriptivo en Card Estilo Cotizar */}
                                    <div
                                        style={{ backgroundColor: 'var(--cotizar-card-bg)', borderColor: 'var(--cotizar-card-border)' }}
                                        className={`relative z-10 p-8 md:p-12 rounded-[2.5rem] border shadow-xl backdrop-blur-md ${i % 2 !== 0 ? 'lg:order-2' : ''}`}
                                    >
                                        <div className="w-12 h-1 bg-gradient-to-r from-primary to-orange-400 mb-8"></div>
                                        <span className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-4 block">{act.tag}</span>
                                        <h2 style={{ color: 'var(--cotizar-text-titles)' }} className="text-3xl md:text-4xl font-bold mb-2">
                                            {act.title}
                                        </h2>
                                        <h3 className="text-lg text-primary/60 font-medium italic mb-6 tracking-wide">{act.subtitle}</h3>
                                        <p style={{ color: 'var(--cotizar-text-body)' }} className="text-base leading-relaxed font-light">
                                            {act.desc}
                                        </p>
                                    </div>

                                    {/* Imagen placeholder / Visual */}
                                    <div className={`relative group ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                                        <div className="absolute -inset-4 bg-primary/5 blur-3xl group-hover:bg-primary/10 transition-all rounded-[3rem] opacity-50"></div>
                                        <div className="relative rounded-[2rem] overflow-hidden border border-gray-100 aspect-video bg-gray-50 flex items-center justify-center">
                                            {/* Visual Placeholder */}
                                            <div className="text-center">
                                                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-4 shadow-sm border border-gray-100 group-hover:scale-110 transition-transform duration-500">
                                                    <span className="text-primary font-bold">0{i + 1}</span>
                                                </div>
                                                <span className="text-gray-300 text-[10px] font-bold tracking-widest uppercase">{act.image}</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Final Unificado estilo Cotizar Form Card */}
                <section className="py-24">
                    <div className="container mx-auto px-6 text-center whatsapp-safe-zone">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{ backgroundColor: 'var(--cotizar-form-card-bg)', borderColor: 'var(--cotizar-card-border)' }}
                            className="p-12 md:p-20 rounded-[3rem] border shadow-2xl relative overflow-hidden"
                        >
                            <div className="relative z-10">
                                <h2 style={{ color: 'var(--cotizar-text-titles)' }} className="text-3xl md:text-5xl font-bold mb-8">¿Tenés un desafío técnico?</h2>
                                <p style={{ color: 'var(--cotizar-text-body)' }} className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                                    3Dsion está preparado para transformar cada <span className="text-primary font-bold">obstáculo de ingeniería</span> en una solución fabricable.
                                </p>
                                <Link
                                    to="/#contacto"
                                    className="bg-primary text-white px-12 py-5 rounded-full font-bold text-sm tracking-widest hover:bg-orange-500 transition-all shadow-2xl shadow-primary/20 inline-flex items-center gap-3 uppercase group"
                                >
                                    CONTACTAR AHORA
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Trayectoria;
