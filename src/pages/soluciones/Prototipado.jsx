import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Ruler, Timer, FlaskConical, TestTube2, CheckCircle2 } from 'lucide-react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import SectionTitle from '../../components/ui/SectionTitle';
import Button from '../../components/ui/Button';

const Prototipado = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        {
            icon: Timer,
            title: "Iteración Rápida",
            desc: "Falla rápido, aprende rápido. Reduce el ciclo de desarrollo de producto de meses a semanas mediante iteraciones ágiles."
        },
        {
            icon: FlaskConical,
            title: "Pruebas Funcionales",
            desc: "Utiliza materiales técnicos que simulan las propiedades finales (resistencia, flexibilidad, temperatura) para validación real."
        },
        {
            icon: Ruler,
            title: "Precisión Dimensional",
            desc: "Verifica encastres, tolerancias y ergonomía con prototipos de alta fidelidad antes de invertir en herramental costoso."
        }
    ];

    const steps = [
        { id: "01", t: "MVP Conceptual", d: "Primera versión física para evaluar forma, tamaño y estética." },
        { id: "02", t: "Prototipo Funcional", d: "Versión operativa con materiales técnicos para pruebas de campo." },
        { id: "03", t: "Feedback y Ajuste", d: "Refinamiento del diseño basado en los resultados de las pruebas." },
        { id: "04", t: "Validación Final", d: "Prototipo pre-serie idéntico al producto final para aprobación." }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Helmet>
                <title>Prototipado & Validación | 3Dsion</title>
                <meta name="description" content="Acelera tu desarrollo de productos con prototipado rápido y validación funcional. Materiales técnicos para pruebas reales." />
            </Helmet>

            <Navbar />

            <main className="flex-grow">
                {/* Hero Sección */}
                <section className="relative pt-32 pb-24 bg-secondary-dark overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-20">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,#ff3366_0%,transparent_50%)]"></div>
                    </div>

                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-[#ff3366] bg-[#ff3366]/10 rounded-full uppercase">
                                Desarrollo Ágil
                            </span>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                                Prototipado & <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-600 italic">Validación</span>
                            </h1>
                            <p className="max-w-3xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed">
                                Minimiza riesgos y optimiza tu inversión. Transformamos archivos digitales en prototipos físicos funcionales en tiempo récord.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Pilares Técnicos */}
                <section className="py-24">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {features.map((f, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all group"
                                >
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <f.icon className="text-primary" size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 text-secondary-dark">{f.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* El Valor de la Experiencia */}
                <section className="py-24 bg-gray-50 overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-1/2">
                                <SectionTitle
                                    title="Laboratorio de"
                                    highlight="Desarrollo"
                                    className="mb-8"
                                />
                                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                    No solo imprimimos; acompañamos el proceso de validación técnica. Ayudamos a seleccionar el material y la tecnología adecuada para cada etapa de prueba.
                                </p>
                                <div className="space-y-4">
                                    {["Verificación de ensamblaje", "Pruebas de flujo y térmica", "Modelos estéticos para marketing", "Jigs y Fixtures de prueba"].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <CheckCircle2 className="text-primary" size={20} />
                                            <span className="text-secondary-dark font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="lg:w-1/2 relative">
                                <div className="aspect-video bg-secondary-dark rounded-3xl overflow-hidden shadow-2xl relative group">
                                    <div className="absolute inset-0 bg-pink-500/10 group-hover:bg-pink-500/5 transition-colors pointer-events-none"></div>
                                    <div className="flex items-center justify-center h-full text-white/20">
                                        <TestTube2 size={120} className="text-white/20" />
                                    </div>
                                </div>
                                {/* Decoración Industrial */}
                                <div className="absolute -top-6 -left-6 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Proceso */}
                <section className="py-24">
                    <div className="container mx-auto px-6">
                        <SectionTitle
                            title="Ciclo de"
                            highlight="Iteración"
                            align="center"
                            className="mb-16"
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {steps.map((s, i) => (
                                <div key={i} className="relative p-8 border-l border-gray-100 flex flex-col items-start">
                                    <span className="text-6xl font-black text-primary/5 absolute top-0 right-0">{s.id}</span>
                                    <div className="w-8 h-[2px] bg-primary mb-6"></div>
                                    <h4 className="font-bold text-secondary-dark mb-3 uppercase tracking-wider">{s.t}</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">{s.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Final */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="bg-secondary-dark rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
                            {/* Resplandor de fondo */}
                            <div className="absolute top-0 right-1/2 translate-x-1/2 w-1/2 h-full bg-pink-600/20 blur-[120px]"></div>

                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">¿Listo para validar tu idea?</h2>
                                <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
                                    Envíanos tu archivo y obtén un prototipo funcional en tus manos en tiempo récord.
                                </p>
                                <Button href="/cotizar" variant="primary">
                                    VALIDAR AHORA
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Prototipado;
