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
        <div className="flex flex-col min-h-screen">
            <Helmet>
                <title>Trayectoria | 3Dsion — 27 Años de Ingeniería e Impresión 3D Industrial</title>
                <meta name="description" content="La evolución de 3Dsion: del diseño mecánico tradicional a la manufactura aditiva industrial. 27 años transformando desafíos técnicos en soluciones reales." />
                <meta name="keywords" content="trayectoria 3Dsion, ingeniería industrial, impresión 3D, manufactura aditiva, diseño mecánico, historia empresa" />
            </Helmet>
            <Navbar />
            <main className="flex-grow pt-24">
                {/* Hero Trayectoria */}
                <section className="py-24 bg-black relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full -translate-y-1/2"></div>
                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-bold uppercase tracking-widest mb-8">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                                Trayectoria Institucional
                            </span>
                            <h1 className="text-4xl md:text-7xl font-bold mb-8">
                                27 años transformando <br /><span className="text-primary italic">ideas en realidades</span>
                            </h1>
                            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                                De la mesa de dibujo a la fabricación aditiva: una evolución constante dedicada a la ingeniería de precisión.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* 3 Actos Narrativos */}
                <section className="py-24 bg-secondary-dark">
                    <div className="container mx-auto px-6">
                        <div className="space-y-24">
                            {acts.map((act, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1, duration: 0.6 }}
                                    className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? 'lg:direction-rtl' : ''}`}
                                >
                                    {/* Texto */}
                                    <div className={`space-y-6 ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                                        <span className="text-primary font-bold text-sm uppercase tracking-widest">{act.tag}</span>
                                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                                            {act.title}
                                        </h2>
                                        <h3 className="text-xl text-primary/80 font-medium italic">{act.subtitle}</h3>
                                        <p className="text-gray-400 text-base leading-relaxed">
                                            {act.desc}
                                        </p>
                                    </div>

                                    {/* Imagen placeholder */}
                                    <div className={`relative group ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                                        <div className="absolute -inset-4 bg-primary/20 blur-2xl group-hover:bg-primary/30 transition-all rounded-[3rem]"></div>
                                        <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 aspect-video">
                                            {/* Placeholder: {act.image} — Reemplazar con <img> cuando se cargue el asset */}
                                            <div className="w-full h-full bg-slate-100 animate-pulse flex items-center justify-center">
                                                <span className="text-slate-400 text-sm font-medium tracking-wide">{act.image}</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA: ¿Tenés un desafío técnico? */}
                <section className="py-24 bg-primary/10">
                    <div className="container mx-auto px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold mb-8">¿Tenés un desafío técnico?</h2>
                            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                                3Dsion está preparado para transformar cada obstáculo de ingeniería en una solución fabricable.
                            </p>
                            <Link
                                to="/#contacto"
                                className="bg-primary text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-primary-dark transition-all shadow-2xl shadow-primary/20 inline-flex items-center gap-3"
                            >
                                CONTACTAR AHORA
                                <ArrowRight size={20} />
                            </Link>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Trayectoria;
