import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Zap, Users } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

const ValueProp = () => {
    const whyUs = [
        { title: "Optimización de Procesos", desc: "Cada proyecto se analiza con criterio de ingeniería real para reducir tiempos de desarrollo y costos de producción.", icon: Award },
        { title: "Alianza Técnica", desc: "3Dsion acompaña desde el concepto inicial hasta la pieza final, integrando diseño, materiales y fabricación.", icon: Zap },
        { title: "Agilidad Operativa", desc: "Capacidad de respuesta inmediata: desde un prototipo único hasta series cortas listas para planta.", icon: CheckCircle2 },
        { title: "ADN Industrial", desc: "Más de 27 años de experiencia en diseño mecánico y manufactura se traducen en cada pieza entregada.", icon: Users },
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 whatsapp-safe-zone">
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

            </div>
        </section>
    );
};

export default ValueProp;
