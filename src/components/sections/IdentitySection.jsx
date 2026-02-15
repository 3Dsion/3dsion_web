import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

const IdentitySection = () => {
    return (
        <section id="identidad" className="py-12 bg-white -mt-10 relative z-20">
            <div className="container mx-auto px-6">
                <div
                    style={{ backgroundColor: 'var(--bg-valueprop-card)' }}
                    className="border border-primary/20 rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 lg:p-20 overflow-hidden relative shadow-2xl"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px]"></div>

                    <div className="relative z-10 flex flex-col lg:flex-row gap-16">
                        <div className="lg:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <SectionTitle
                                    title="¿Qué vas a encontrar en"
                                    highlight="3DSION?"
                                    className="mb-8"
                                />
                                <p className="text-gray-600 text-lg mb-10 leading-relaxed uppercase tracking-tighter italic border-l-4 border-primary pl-6 font-bold">
                                    Criterio técnico aplicado a cada milímetro de tu proyecto.
                                </p>
                            </motion.div>
                        </div>

                        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {[
                                { t: "Soluciones a medida", d: "No vendemos impresión, vendemos la respuesta técnica que tu proyecto necesita." },
                                { t: "Asesoría Profesional", d: "Acompañamiento desde la idea hasta la pieza final, optimizando cada paso." },
                                { t: "Rigor Industrial", d: "Tolerancias precisas y materiales validados para uso en planta." },
                                { t: "Tecnología de Punta", d: "Acceso a las mejores máquinas para resultados excepcionales." }
                            ].map((val, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="space-y-2"
                                >
                                    <div className="w-8 h-[2px] bg-primary"></div>
                                    <h4 className="font-bold text-secondary-dark uppercase tracking-wider text-sm">{val.t}</h4>
                                    <p className="text-gray-500 text-xs leading-relaxed">{val.d}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IdentitySection;
