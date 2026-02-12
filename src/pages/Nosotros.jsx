import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { motion } from 'framer-motion';
import { Award, Briefcase, ChevronRight } from 'lucide-react';

const Nosotros = () => {
    const timeline = [
        {
            year: "El Origen",
            title: "Ingeniería Tradicional",
            desc: "Sólida experiencia en diseño mecánico y sheet metal (chapa metálica). El fundamento de nuestra precisión."
        },
        {
            year: "La Transición",
            title: "Adopción Tecnológica",
            desc: "La pasión por la fabricación nos llevó a dominar la impresión 3D como herramienta de vanguardia industrial."
        },
        {
            year: "Hoy",
            title: "3Dsion",
            desc: "El puente definitivo entre el diseño conceptual y el producto final fabricable."
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-24">
                {/* Hero Nosotros */}
                <section className="py-24 bg-black relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full -translate-y-1/2"></div>
                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-7xl font-bold mb-8"
                        >
                            27 años transformando <br /><span className="text-primary italic">ideas en realidades</span>
                        </motion.h1>
                        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                            De la mesa de dibujo a la fabricación aditiva: una evolución constante dedicada a la ingeniería de precisión.
                        </p>
                    </div>
                </section>

                {/* Narrative / History */}
                <section className="py-24 bg-secondary-dark">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <h2 className="text-3xl md:text-4xl font-bold">Nuestra Historia</h2>
                                <div className="space-y-12 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-[1px] before:bg-primary/20">
                                    {timeline.map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.2 }}
                                            className="relative pl-12"
                                        >
                                            <div className="absolute left-0 top-1 w-8 h-8 bg-black border border-primary rounded-full flex items-center justify-center z-10">
                                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                            </div>
                                            <span className="text-primary font-bold text-sm uppercase tracking-widest">{item.year}</span>
                                            <h4 className="text-xl font-bold text-white mt-1">{item.title}</h4>
                                            <p className="text-gray-400 mt-2 text-sm leading-relaxed">{item.desc}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-primary/20 blur-2xl group-hover:bg-primary/30 transition-all rounded-[3rem]"></div>
                                <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 aspect-square lg:aspect-video bg-black/40 flex items-center justify-center">
                                    <div className="text-center p-12">
                                        <Briefcase size={64} className="text-primary mx-auto mb-6 opacity-50" />
                                        <p className="text-gray-500 italic">"Entendemos la industria desde adentro, porque venimos de la planta."</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pillars / Values */}
                <section className="py-24 bg-black">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-16">Lo que nos define</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {[
                                { t: "No solo imprimimos", d: "Analizamos la factibilidad de tu proyecto con criterio de ingeniería real." },
                                { t: "Multidisciplinariedad", d: "Si tu pieza requiere chapa, mecanizado o impresión, sabemos cómo resolverlo." },
                                { t: "Consultoría Técnica", d: "Ayudamos al cliente a desatar los nudos del proceso de desarrollo." }
                            ].map((val, i) => (
                                <div key={i} className="p-10 bg-secondary-dark/50 border border-white/5 rounded-3xl hover:border-primary/50 transition-all group">
                                    <Award className="text-primary mx-auto mb-6 group-hover:scale-110 transition-transform" size={40} />
                                    <h4 className="text-xl font-bold mb-4">{val.t}</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">{val.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 bg-primary/10">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">Hablemos de ingeniería</h2>
                        <p className="text-xl text-gray-400 mb-12">Estamos listos para ser parte de tu próximo desarrollo.</p>
                        <a href="/#contactos" className="bg-primary text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-primary-dark transition-all shadow-2xl shadow-primary/20">
                            CONTACTAR AHORA
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Nosotros;
