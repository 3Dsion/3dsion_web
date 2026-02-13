import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, Handshake, ShieldAlert, TrendingUp } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

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
        <section id="proceso" className="py-24 bg-process relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 via-white to-white opacity-60"></div>
            <div className="container mx-auto px-6 relative z-10">
                <SectionTitle
                    title="Nuestro"
                    highlight="Proceso"
                    align="center"
                    className="mb-20"
                />
                <div className="max-w-4xl mx-auto -mt-16 text-center mb-16">
                    <p className="text-gray-700 text-lg">
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
                                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-[1px] bg-gray-300 z-0"></div>
                            )}

                            <div className="w-24 h-24 bg-white border border-gray-200 rounded-full flex items-center justify-center mb-8 relative z-10 group-hover:border-primary transition-colors shadow-lg">
                                <step.icon className="text-primary group-hover:scale-110 transition-transform" size={40} />
                            </div>
                            <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
