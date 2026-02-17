import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ScanFace, RotateCw, History, Search, CheckCircle2 } from 'lucide-react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import SectionTitle from '../../components/ui/SectionTitle';
import Button from '../../components/ui/Button';

const IngenieriaInversa = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        {
            icon: ScanFace,
            title: "Captura de Geometría",
            desc: "Escaneo de alta precisión para capturar la geometría exacta de objetos físicos complejos, sin importar su forma o tamaño."
        },
        {
            icon: RotateCw,
            title: "Modelado de Nube de Puntos",
            desc: "Conversión de mallas de puntos (STL) a cuerpos sólidos editables (STEP), permitiendo modificaciones, mejoras y manufactura futura."
        },
        {
            icon: History,
            title: "Sustitución de Repuestos",
            desc: "Fabricación de piezas descatalogadas para maquinaria antigua o descontinuada donde ya no existen planos ni proveedores originales."
        }
    ];

    const steps = [
        { id: "01", t: "ESCANEO 3D", d: "Captura de la nube de puntos del objeto físico utilizando escáneres láser o de luz estructurada." },
        { id: "02", t: "PROCESAMIENTO DE MALLA", d: "Limpieza y reparación de la geometría digitalizada para asegurar continuidad." },
        { id: "03", t: "RECONSTRUCCIÓN TÉCNICA", d: "Modelado sólido sobre la referencia escaneada para generar un archivo perfecto." },
        { id: "04", t: "CONTROL DE DESVÍO", d: "Verificación de fidelidad comparando el nuevo archivo digital frente a la pieza física original." }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Helmet>
                <title>Ingeniería Inversa | 3Dsion</title>
                <meta name="description" content="Rescate de activos críticos. Escaneo 3D, modelado de nube de puntos y sustitución de repuestos descatalogados con manufactura aditiva." />
            </Helmet>

            <Navbar />

            <main className="flex-grow">
                {/* Hero Sección */}
                <section className="relative pt-32 pb-24 bg-secondary-dark overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        {/* Placeholder for inv-hero.webp */}
                        <div className="w-full h-full bg-slate-800 animate-pulse opacity-20"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-secondary-dark via-secondary-dark/90 to-secondary-dark/50"></div>
                    </div>

                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-blue-500 bg-blue-500/10 rounded-full uppercase">
                                Recuperación Digital
                            </span>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                                Ingeniería <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 italic">Inversa</span>
                            </h1>
                            <p className="max-w-3xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed">
                                Resucita componentes olvidados. Recuperamos la geometría de piezas físicas existentes para replicarlas, mejorarlas o preservarlas digitalmente.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Pilares Técnicos — Glassmorphism Cards */}
                <section className="py-24 bg-gray-50/50">
                    <div className="container mx-auto px-6 whatsapp-safe-zone">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {features.map((f, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="relative overflow-hidden group rounded-[2rem] border border-gray-200 bg-white shadow-xl h-full"
                                >
                                    {/* Background with Overlay */}
                                    <div className="absolute inset-0 z-0">
                                        <div className="w-full h-full bg-slate-200 animate-pulse"></div>
                                        <div className="absolute inset-0 bg-secondary-dark/80 group-hover:bg-secondary-dark/70 transition-colors duration-500"></div>
                                    </div>

                                    <div className="relative z-10 p-8 flex flex-col h-full">
                                        <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6 text-blue-500 group-hover:scale-110 transition-transform duration-300">
                                            <f.icon size={24} />
                                        </div>
                                        {/* Accent Line */}
                                        <div className="w-10 h-[2px] bg-gradient-to-r from-primary to-orange-400 mb-4"></div>
                                        <h3 className="text-xl font-bold text-white mb-4">{f.title}</h3>
                                        <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                                            {f.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Soluciones Críticas */}
                <section className="py-24 bg-white overflow-hidden">
                    <div className="container mx-auto px-6 whatsapp-safe-zone">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-1/2">
                                <SectionTitle
                                    title="Soluciones"
                                    highlight="Críticas"
                                    className="mb-8"
                                />
                                <p className="text-gray-600 text-lg mb-8 leading-relaxed border-l-4 border-blue-500 pl-6">
                                    La rotura de una pieza crítica no debería detener tu línea de producción. La ingeniería inversa es la solución definitiva para el mantenimiento industrial.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {["Sustitución de importaciones", "Mejora de diseño original", "Archivo digital de seguridad", "Análisis de desgaste y falla"].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100 hover:border-gray-200 transition-colors">
                                            <CheckCircle2 className="text-primary" size={20} />
                                            <span className="text-secondary-dark font-medium text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="lg:w-1/2 relative">
                                <div className="aspect-video bg-secondary-dark rounded-3xl overflow-hidden shadow-2xl relative group flex items-center justify-center">
                                    <Search size={80} className="text-white/20" />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent pointer-events-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Proceso de Recuperación */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-6 whatsapp-safe-zone">
                        <div className="text-center mb-16">
                            <span className="text-primary font-bold tracking-widest uppercase text-sm">Metodología</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-secondary-dark mt-2">Proceso de Recuperación</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {steps.map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all relative overflow-hidden"
                                >
                                    <div className="absolute -top-4 -right-4 text-9xl font-black text-gray-50 select-none opacity-50">
                                        {step.id}
                                    </div>
                                    <div className="relative z-10">
                                        <div className="w-10 h-1 bg-gradient-to-r from-primary to-orange-400 mb-6"></div>
                                        <h4 className="font-bold text-secondary-dark mb-4 text-lg">{step.t}</h4>
                                        <p className="text-gray-500 text-sm leading-relaxed">
                                            {step.d}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Final */}
                <section className="py-24 bg-white border-t border-gray-100">
                    <div className="container mx-auto px-6 whatsapp-safe-zone">
                        <div className="bg-secondary-dark rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
                            {/* Glow effects */}
                            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/10 blur-[100px]"></div>
                            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-primary/10 blur-[80px]"></div>

                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">¿Necesitas repuestos inexistentes?</h2>
                                <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
                                    Trae tu pieza física y nosotros nos encargamos de generar el plano y el repuesto nuevo.
                                </p>
                                <Button href="/cotizar" variant="primary" className="text-lg px-8 py-4">
                                    RECUPERAR PIEZA
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Safe Zone for WhatsApp Button */}
                <div className="h-24"></div>
            </main>

            <Footer />
        </div>
    );
};

export default IngenieriaInversa;
