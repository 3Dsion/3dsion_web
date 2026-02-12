import React from 'react';
import { motion } from 'framer-motion';
import heroVideo from '../../assets/Banner-web-inicio.mp4';

const Hero = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0 grayscale-[0.3] brightness-[0.4]"
            >
                <source src={heroVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay Content */}
            <div className="relative z-10 h-full flex items-center pt-20">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
                            Impresión 3D para <span className="text-primary italic">soluciones industriales</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl font-light">
                            Diseño e impresión 3D aplicada a la industria. Desarrollo de moldes, matrices, prototipos funcionales y piezas técnicas para empresas.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#soluciones"
                                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold text-center transition-all shadow-lg hover:shadow-primary/20"
                            >
                                NUESTRAS SOLUCIONES
                            </a>
                            <a
                                href="#proyectos"
                                className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold text-center transition-all border border-white/20"
                            >
                                CASOS DE ÉXITO
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/50 animate-bounce"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent mx-auto"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
