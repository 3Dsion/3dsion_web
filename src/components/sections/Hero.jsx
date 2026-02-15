import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
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
                        <div
                            style={{ backgroundColor: 'var(--hero-card-bg)', borderColor: 'var(--hero-card-border)' }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full backdrop-blur-md border text-white/80 text-xs font-bold uppercase tracking-widest mb-6"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                            I+D & MANUFACTURA
                        </div>

                        <h1 style={{ color: 'var(--hero-text-main)' }} className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8 tracking-tight">
                            Impresión 3D <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">Soluciones Reales.</span>
                        </h1>

                        <p style={{ color: 'var(--hero-text-main)', opacity: 0.8 }} className="text-lg md:text-xl mb-10 leading-relaxed max-w-2xl font-light border-l-2 border-primary/50 pl-6">
                            Diseño e impresión 3D aplicada a la industria. Desarrollo de moldes, matrices, prototipos funcionales y piezas técnicas para empresas.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5">
                            <Button href="#soluciones">
                                SOLUCIONES
                            </Button>
                            <Button href="#proyectos" variant="secondary">
                                CASOS DE ÉXITO
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white animate-bounce"
            >
                <div className="w-[2px] h-12 bg-gradient-to-b from-white to-transparent mx-auto"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
