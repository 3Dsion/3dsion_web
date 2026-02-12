import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, Handshake, ShieldAlert, TrendingUp } from 'lucide-react';

const ProcessSection = () => {
    const steps = [
        {
            title: "Gestión Integral",
            desc: "Nos encargamos de todo, desde la optimización del diseño hasta la logística de entrega.",
            icon: ClipboardCheck
        },
        {
            title: "Cero Preocupaciones",
            desc: "No necesitás saber de materiales o tolerancias; nosotros aplicamos el rigor industrial por vos.",
            icon: Handshake
        },
        {
            title: "Calidad Rigurosa",
            desc: "Cada pieza pasa por una validación técnica antes de salir, asegurando que recibas lo que necesitás a la primera.",
            icon: ShieldAlert
        },
        {
            title: "Escalabilidad",
            desc: "Garantizamos tiempos de entrega corporativos y la capacidad de escalar la producción sin problemas.",
            icon: TrendingUp
        }
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-black to-secondary-dark/30">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-6"
                    >
                        Tu tranquilidad, <span className="text-primary italic">nuestro proceso</span>
                    </motion.h2>
                    <p className="text-gray-400 text-lg">
                        Desligate de los problemas técnicos. Ofrecemos soluciones llave en mano donde la precisión y el cumplimiento son nuestra prioridad absoluta.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="relative flex flex-col items-center text-center group"
                        >
                            {/* Connector line for desktop */}
                            {i < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-[1px] bg-gradient-to-r from-primary/30 to-transparent z-0"></div>
                            )}

                            <div className="w-24 h-24 bg-secondary border border-white/10 rounded-full flex items-center justify-center mb-8 relative z-10 group-hover:border-primary transition-colors shadow-2xl">
                                <step.icon className="text-primary group-hover:scale-110 transition-transform" size={40} />
                            </div>
                            <h4 className="text-lg font-bold mb-3 uppercase tracking-wider">{step.title}</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
