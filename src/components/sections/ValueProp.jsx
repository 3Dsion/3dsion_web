import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Zap, Users } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

const ValueProp = () => {
    const whyUs = [
        { title: "Experiencia Técnica", desc: "27 años en el rubro industrial garantizan que cada pieza sea funcional.", icon: Award },
        { title: "Calidad Industrial", desc: "Materiales de alta performance para piezas de uso final, no solo maquetas.", icon: Zap },
        { title: "Versatilidad", desc: "Dominio de múltiples tecnologías (FDM, Resina, Escaneado) para cada proyecto.", icon: CheckCircle2 },
        { title: "Agilidad y Escala", desc: "Capacidad de producir desde un prototipo único hasta series cortas.", icon: Users },
    ];

    return (
        <section id="propuesta" className="py-24 bg-valueprop">
            <div className="container mx-auto px-6">
                {/* Pilar 1: Por qué nosotros */}
                <div className="mb-24">
                    <SectionTitle
                        title="¿Por qué trabajar con"
                        highlight="3Dsion?"
                        align="center"
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {whyUs.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 bg-white border border-gray-200 rounded-2xl hover:border-primary/50 transition-all text-center group shadow-md hover:shadow-xl"
                            >
                                <item.icon className="mx-auto text-primary mb-6 group-hover:scale-110 transition-transform" size={40} />
                                <h4 className="text-lg font-bold mb-3 text-secondary-dark">{item.title}</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Pilar 2: Qué vas a encontrar */}
                <div
                    style={{ backgroundColor: 'var(--bg-valueprop-card)' }}
                    className="border border-primary/20 rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 lg:p-20 overflow-hidden relative shadow-xl"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px]"></div>

                    <div className="relative z-10 flex flex-col lg:flex-row gap-16">
                        <div className="lg:w-1/2">
                            <SectionTitle
                                title="¿Qué vas a encontrar en"
                                highlight="3DSION?"
                                className="mb-8"
                            />
                            <p className="text-gray-600 text-lg mb-10 leading-relaxed uppercase tracking-tighter italic border-l-4 border-primary pl-6 font-bold">
                                Criterio técnico aplicado a cada milímetro de tu proyecto.
                            </p>
                            <Button href="https://wa.me/541176211242" variant="primary">
                                INICIAR MI PROYECTO
                            </Button>
                        </div>

                        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {[
                                { t: "Soluciones a medida", d: "No vendemos impresión, vendemos la respuesta técnica que tu proyecto necesita." },
                                { t: "Asesoría Profesional", d: "Acompañamiento desde la idea hasta la pieza final, optimizando cada paso." },
                                { t: "Rigor Industrial", d: "Tolerancias precisas y materiales validados para uso en planta." },
                                { t: "Tecnología de Punta", d: "Acceso a las mejores máquinas para resultados excepcionales." }
                            ].map((val, i) => (
                                <div key={i} className="space-y-2">
                                    <div className="w-8 h-[2px] bg-primary"></div>
                                    <h4 className="font-bold text-secondary-dark uppercase tracking-wider text-sm">{val.t}</h4>
                                    <p className="text-gray-500 text-xs leading-relaxed">{val.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValueProp;
