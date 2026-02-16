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
        { name: "SolidWorks", logo: "logo-sw.svg" },
        { name: "Fusion 360", logo: "logo-fusion.svg" },
        { name: "Rhinoceros", logo: "logo-rhino.svg" },
        { name: "AutoCAD", logo: "logo-acad.svg" },
        { name: "Blender", logo: "logo-blender.svg" },
        { name: "Inventor", logo: "logo-inventor.svg" },
        { name: "PrusaSlicer", logo: "logo-prusa.svg" }
    ];

    return (
        <section id="autoridad" className="py-24 bg-tech border-y border-gray-200">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center whatsapp-safe-zone">
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
                            Con más de 27 años en el desarrollo industrial, el aporte de 3Dsion no se limita a fabricar piezas. La dirección técnica analiza la materialidad, los procesos de manufactura tradicionales y el diseño mecánico integral para eliminar cualquier traba técnica en el camino al producto final.
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

                    {/* Software Card — Rediseño con grilla de logos */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full"></div>
                        <div className="relative bg-slate-50/80 border border-gray-200 p-10 rounded-[2.5rem] shadow-xl backdrop-blur-sm">
                            <h3 className="text-xl font-bold mb-8 text-center uppercase tracking-widest text-gray-700">Software & Ecosistema</h3>

                            {/* Grilla de celdas para logos SVG con fondo de micro-puntos */}
                            <div
                                className="grid grid-cols-3 sm:grid-cols-4 gap-4"
                                style={{
                                    backgroundImage: 'radial-gradient(circle, #cbd5e1 0.8px, transparent 0.8px)',
                                    backgroundSize: '16px 16px'
                                }}
                            >
                                {softwares.map((soft, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.05 }}
                                        className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-default min-h-[100px]"
                                    >
                                        {/* Placeholder: {soft.logo} — Reemplazar con <img> cuando se cargue el SVG */}
                                        <div className="w-12 h-12 bg-slate-100 animate-pulse rounded-lg mb-2 flex items-center justify-center">
                                            <span className="text-slate-400 text-[8px] font-medium text-center leading-tight">{soft.logo}</span>
                                        </div>
                                        <span className="text-xs font-bold text-gray-600 text-center">{soft.name}</span>
                                    </motion.div>
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
