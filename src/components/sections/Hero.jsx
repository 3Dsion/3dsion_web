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
                <div className="container mx-auto px-6 md:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-4xl"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/80 text-xs font-bold uppercase tracking-widest mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                            I+D & MANUFACTURA
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-8 tracking-tight">
                            Impresión 3D <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">Soluciones Reales.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl font-light border-l-2 border-primary/50 pl-6">
                            Diseño e impresión 3D aplicada a la industria. Desarrollo de moldes, matrices, prototipos funcionales y piezas técnicas para empresas.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5">
                            <a
                                href="#soluciones"
                                className="group relative overflow-hidden bg-primary hover:bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-center transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)]"
                            >
                                <span className="relative z-10">SOLUCIONES</span>
                            </a>
                            <a
                                href="#proyectos"
                                className="bg-transparent hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold text-center transition-all border border-white/20 backdrop-blur-sm"
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
