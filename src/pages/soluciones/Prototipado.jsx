import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Timer, FlaskConical, Ruler, TestTube2, CheckCircle2 } from 'lucide-react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import SectionTitle from '../../components/ui/SectionTitle';
import Button from '../../components/ui/Button';
import protoHero from '../../assets/proto-hero.webp';
import protoCard1 from '../../assets/proto-card-1.webp';

const Prototipado = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        {
            icon: Timer,
            title: "Validación de Ensambles",
            desc: "Analizamos encastres y rangos de movimiento para asegurar un funcionamiento perfecto y sin interferencias antes de la fabricación final."
        },
        {
            icon: FlaskConical,
            title: "Ensayos de Campo",
            desc: "Prototipos técnicos para pruebas reales. Evaluamos resultados junto a su equipo para optimizar el diseño y asegurar la viabilidad del proyecto."
        },
        {
            icon: Ruler,
            title: "Precisión Dimensional",
            desc: "Garantizamos la fidelidad entre el CAD y la pieza física, certificando tolerancias críticas mediante instrumentos de medición industrial."
        }
    ];

    const steps = [
        { id: "01", t: "MVP CONCEPTUAL", d: "Primera versión física para evaluar forma, tamaño y estética." },
        { id: "02", t: "PROTOTIPO FUNCIONAL", d: "Versión operativa para validar el desempeño mecánico del diseño y su usabilidad." },
        { id: "03", t: "FEEDBACK Y AJUSTE", d: "Refinamiento del diseño basado en los resultados de las pruebas." },
        { id: "04", t: "VALIDACIÓN FINAL", d: "Prototipo pre-serie idéntico al producto final para aprobación." }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Helmet>
                <title>Prototipado Industrial & Validación Técnica | 3Dsion</title>
                <meta name="description" content="Minimizá riesgos productivos. Validamos tus archivos STEP mediante prototipos técnicos de alta precisión con materiales grado ingeniería para validación real." />
            </Helmet>

            <Navbar />

            <main className="flex-grow">
                {/* Hero Sección */}
                <section className="relative pt-32 pb-24 bg-secondary-dark overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img src={protoHero} alt="Prototipado Industrial" className="w-full h-full object-cover opacity-80" />
                        <div className="absolute inset-0 bg-gradient-to-r from-secondary-dark/80 via-secondary-dark/40 to-secondary-dark/10"></div>
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
                                Minimizá riesgos y optimizá tu inversión. Transformamos archivos digitales en prototipos físicos para validar tus ideas antes de pasar a la fabricación masiva.
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
                                >
                                    {/* Card visual — solo imagen + ícono */}
                                    <div className="relative overflow-hidden group rounded-[2rem] aspect-[4/3]">
                                        <img
                                            src={i === 0 ? protoCard1 : protoHero}
                                            alt={f.title}
                                            className="w-full h-full object-cover object-center opacity-80 scale-105 group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/10"></div>
                                        {/* Ícono glassmorphism arriba-izquierda */}
                                        <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                                            <f.icon size={24} />
                                        </div>
                                    </div>
                                    {/* Texto debajo de la card */}
                                    <div className="pt-5 px-1">
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Laboratorio de Desarrollo */}
                <section className="py-24 bg-white overflow-hidden">
                    <div className="container mx-auto px-6 whatsapp-safe-zone">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-1/2">
                                <SectionTitle
                                    title="Laboratorio de"
                                    highlight="Desarrollo"
                                    className="mb-8"
                                />
                                <p className="text-gray-600 text-lg mb-8 leading-relaxed border-l-4 border-pink-500 pl-6">
                                    No solo imprimimos; acompañamos el proceso de validación técnica. Ayudamos a seleccionar el material y la tecnología adecuada para cada etapa de prueba.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {["Verificación de ensamblaje", "Pruebas de flujo y térmica", "Modelos estéticos para marketing", "Jigs y Fixtures de prueba"].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100 hover:border-gray-200 transition-colors">
                                            <CheckCircle2 className="text-primary" size={20} />
                                            <span className="text-secondary-dark font-medium text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="lg:w-1/2 relative">
                                <div className="aspect-video bg-secondary-dark rounded-3xl overflow-hidden shadow-2xl relative group flex items-center justify-center">
                                    <TestTube2 size={80} className="text-white/20" />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 to-transparent pointer-events-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Ciclo de Iteración */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-6 whatsapp-safe-zone">
                        <div className="text-center mb-16">
                            <span className="text-primary font-bold tracking-widest uppercase text-sm">Metodología</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-secondary-dark mt-2">Ciclo de Iteración</h2>
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
                            <div className="absolute top-0 right-0 w-1/2 h-full bg-pink-500/10 blur-[100px]"></div>
                            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-primary/10 blur-[80px]"></div>

                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">¿Listo para validar tu idea?</h2>
                                <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
                                    Envíanos tu archivo y obtén un prototipo funcional en tus manos en tiempo récord.
                                </p>
                                <Button href="/cotizar" variant="primary" className="text-lg px-8 py-4">
                                    VALIDAR AHORA
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

export default Prototipado;
