import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, DraftingCompass, PencilRuler } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const TechAuthority = () => {
    const capabilities = [
        {
            title: "Desarrollo Mecánico",
            desc: "Especialistas en ingeniería de producto y sistemas mecánicos complejos.",
            icon: Cpu
        },
        {
            title: "Sheet Metal",
            desc: "Diseño y optimización para conformación de chapa metálica industrial.",
            icon: DraftingCompass
        },
        {
            title: "Planos Técnicos",
            desc: "Documentación bajo normas internacionales lista para producción.",
            icon: PencilRuler
        },
        {
            title: "Fabricabilidad (DFM)",
            desc: "Aseguramos que cada diseño sea optimizado para el proceso real.",
            icon: ShieldCheck
        }
    ];

    const softwares = [
        "SolidWorks", "Fusion 360", "Rhinoceros", "AutoCAD", "Blender", "Inventor", "PrusaSlicer"
    ];

    return (
        <section id="autoridad" className="py-24 bg-tech border-y border-gray-200">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Text Content */}
                    <div className="space-y-8">
                        <SectionTitle
                            title="Autoridad"
                            highlight="Técnica"
                            className="mb-0"
                        />

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-gray-700 text-lg leading-relaxed"
                        >
                            Con más de 27 años en el desarrollo industrial, nuestro aporte no se limita a fabricar piezas. Analizamos la materialidad, los procesos de manufactura tradicionales y el diseño mecánico integral para eliminar cualquier traba técnica en tu camino al producto final.
                        </motion.p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                            {capabilities.map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="p-2 h-fit bg-primary/20 rounded-lg text-primary">
                                        <item.icon size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm uppercase tracking-wide text-gray-800">{item.title}</h4>
                                        <p className="text-gray-600 text-xs mt-1">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Software Badge Cloud */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full"></div>
                        <div className="relative bg-white border border-gray-200 p-10 rounded-[2rem] backdrop-blur-sm">
                            <h3 className="text-xl font-bold mb-8 text-center uppercase tracking-widest text-gray-700">Software & Ecosistema</h3>
                            <div className="flex flex-wrap justify-center gap-4">
                                {softwares.map((soft, i) => (
                                    <motion.span
                                        key={i}
                                        whileHover={{ scale: 1.1, color: '#0056b3' }}
                                        className="px-6 py-3 bg-white/5 rounded-full border border-white/10 text-sm font-bold cursor-default transition-colors"
                                    >
                                        {soft}
                                    </motion.span>
                                ))}
                            </div>
                            <p className="text-center mt-10 text-xs text-secondary font-medium tracking-tight">
                                COMPATIBILIDAD TOTAL CON TUS ARCHIVOS NATIVOS
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechAuthority;
