import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import servicesData from '../../data/services.json';
import SectionTitle from '../ui/SectionTitle';

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
                        Combinamos tecnología de vanguardia con décadas de experiencia en ingeniería para resolver los desafíos de fabricación más complejos.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => {
                        const IconComponent = LucideIcons[service.icon];

                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="group p-8 bg-gray-50 rounded-2xl border border-gray-200 hover:border-primary/50 transition-all hover:bg-white hover:shadow-xl"
                            >
                                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                                    {IconComponent && <IconComponent className="text-primary group-hover:text-white transition-colors" size={28} />}
                                </div>
                                <h3 className="text-xl font-bold mb-4 tracking-tight text-secondary-dark group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ServicesMosaic;
