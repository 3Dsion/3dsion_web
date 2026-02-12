import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import projectsData from '../../data/projects.json';

const ProjectCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % projectsData.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 8000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="proyectos" className="py-24 bg-black overflow-hidden relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Casos de Éxito</h2>
                        <div className="h-1 w-20 bg-primary mb-6"></div>
                    </div>
                    <div className="flex gap-4">
                        <button
                            onClick={prevSlide}
                            className="p-3 rounded-full border border-white/10 hover:bg-primary transition-all group"
                        >
                            <ChevronLeft className="group-hover:scale-110 transition-transform" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="p-3 rounded-full border border-white/10 hover:bg-primary transition-all group"
                        >
                            <ChevronRight className="group-hover:scale-110 transition-transform" />
                        </button>
                    </div>
                </div>

                <div className="relative min-h-[350px] md:min-h-[600px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="flex flex-col lg:flex-row items-center gap-12"
                        >
                            {/* Image Side */}
                            <div className="w-full lg:w-3/5 h-[220px] sm:h-[300px] md:h-[450px] relative rounded-3xl overflow-hidden group">
                                <img
                                    src={projectsData[currentIndex].image}
                                    alt={projectsData[currentIndex].title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-8 left-8">
                                    <span className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-full uppercase tracking-widest">
                                        {projectsData[currentIndex].category}
                                    </span>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="w-full lg:w-2/5 space-y-6">
                                <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                                    {projectsData[currentIndex].title}
                                </h3>
                                <p className="text-gray-400 text-lg">
                                    {projectsData[currentIndex].description}
                                </p>

                                <div className="pt-6 space-y-8">
                                    <div>
                                        <h4 className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Desafío</h4>
                                        <p className="text-gray-300 text-sm leading-relaxed">{projectsData[currentIndex].challenge}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Resultado</h4>
                                        <p className="text-white text-lg font-medium">{projectsData[currentIndex].result}</p>
                                    </div>
                                </div>

                                <div className="pt-8">
                                    <a
                                        href={`/proyectos/${projectsData[currentIndex].id}`}
                                        className="inline-flex items-center text-white hover:text-primary transition-colors font-bold group"
                                    >
                                        VER DETALLE DEL CASO
                                        <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default ProjectCarousel;
