import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import servicesData from '../../data/services.json';
import SectionTitle from '../ui/SectionTitle';
import { Link } from 'react-router-dom';

const ServicesMosaic = () => {
    return (
        <section id="soluciones" className="py-24 bg-solutions relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>

            <div className="container mx-auto px-6 relative z-10">
                <SectionTitle
                    title="Nuestras"
                    highlight="Soluciones"
                    align="center"
                    className="mb-16"
                />

                <div className="max-w-2xl mx-auto text-center -mt-8 mb-16">
                    <p className="text-gray-600">
                        Combinamos tecnología de vanguardia con años de experiencia en ingeniería para resolver los desafíos de fabricación más complejos.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 whatsapp-safe-zone">
                    {servicesData.map((service, index) => {
                        // Intentar importar la imagen; si no existe, usar placeholder
                        let bgImage = null;
                        try {
                            bgImage = new URL(`../../assets/${service.image}`, import.meta.url).href;
                        } catch (e) {
                            bgImage = null;
                        }

                        return (
                            <motion.div
                                key={service.id}
                                id={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="group relative"
                            >
                                <Link
                                    to={service.link}
                                    className="block rounded-2xl overflow-hidden h-full relative min-h-[280px]"
                                >
                                    {/* Imagen de fondo o Placeholder */}
                                    {bgImage ? (
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                            style={{ backgroundImage: `url(${bgImage})` }}
                                        ></div>
                                    ) : (
                                        /* Placeholder: {service.image} — Reemplazar cuando se cargue el asset */
                                        <div className="absolute inset-0 bg-slate-100 animate-pulse flex items-center justify-center">
                                            <span className="text-slate-400 text-xs font-medium tracking-wide">{service.image}</span>
                                        </div>
                                    )}

                                    {/* Overlay oscuro */}
                                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300"></div>

                                    {/* Contenido sobre overlay */}
                                    <div className="relative z-10 p-8 flex flex-col justify-end h-full min-h-[280px]">
                                        <h3 className="text-xl font-bold mb-3 tracking-tight text-white uppercase">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-200 text-sm leading-relaxed">
                                            {service.description}
                                        </p>
                                        <div className="mt-6 flex items-center text-primary text-xs font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity uppercase">
                                            Ver detalles
                                            <ArrowRight size={14} className="ml-2" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ServicesMosaic;
