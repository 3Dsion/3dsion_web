import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import servicesData from '../../data/services.json';

const ServicesMosaic = () => {
    return (
        <section id="soluciones" className="py-24 bg-secondary-dark relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        Nuestras Soluciones
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '80px' }}
                        viewport={{ once: true }}
                        className="h-1 bg-primary mx-auto mb-6"
                    ></motion.div>
                    <p className="text-gray-400 max-w-2xl mx-auto">
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
                                className="group p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-primary/50 transition-all hover:bg-white/[0.07]"
                            >
                                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                                    {IconComponent && <IconComponent className="text-primary group-hover:text-white transition-colors" size={28} />}
                                </div>
                                <h3 className="text-xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
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
