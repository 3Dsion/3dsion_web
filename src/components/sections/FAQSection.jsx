import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const faqs = [
    {
        q: "¿Cómo aseguran que el prototipo master sirva para mi matriz?",
        a: "Ajustamos el escalado y la geometría de los archivos según las especificaciones de contracción que nos indiques. Trabajamos en conjunto contigo para llevar la pieza impresa a una zona segura de validación antes de la producción final."
    },
    {
        q: "¿Qué archivos necesito enviar para una cotización?",
        a: "Aceptamos una gran variedad de formatos, siendo los ideales STEP (.stp) e IGES (.igs) para piezas técnicas. También trabajamos con archivos STL, Rhinoceros, SolidWorks y más. Si tienes dudas con el formato, puedes consultarnos."
    },
    {
        q: "¿Pueden modificar mis diseños si tienen errores?",
        a: "Sí. Realizamos una revisión técnica inicial y, si el diseño lo requiere, procedemos a realizar los ajustes solicitados por el cliente para asegurar que la pieza sea fabricable y funcional."
    },
    {
        q: "¿Qué materiales utilizan para piezas técnicas?",
        a: "Trabajamos con materiales de alta calidad como PLA, PETG y Flex, que cubren la gran mayoría de necesidades de prototipado funcional, carcasas y modelos master para fundición o matricería."
    },
    {
        q: "¿Realizan producciones en serie o solo prototipos?",
        a: "Estamos especializados en series cortas y medianas (manufactura bajo demanda) que no justifican la inversión en moldes de inyección tradicionales, así como en la creación de piezas maestras para duplicación posterior en procesos de fundición o matricería."
    }
];

const FAQItem = ({ q, a, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-200">
            <button
                className="w-full py-6 flex items-center justify-between text-left hover:text-primary transition-colors group"
                onClick={onClick}
            >
                <span className="text-lg font-bold text-secondary-dark pr-8">{q}</span>
                <div className={`p-2 rounded-full ${isOpen ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400'} transition-all`}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <p className="pb-8 text-gray-600 leading-relaxed max-w-3xl">
                            {a}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="faq" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16">
                    <div className="lg:w-1/3">
                        <div className="sticky top-32">
                            <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-4">
                                <HelpCircle size={16} />
                                Consultoría Técnica
                            </div>
                            <SectionTitle
                                title="Preguntas"
                                highlight="Frecuentes"
                                className="mb-6"
                            />
                            <p className="text-gray-600 mb-8">
                                Resolvemos las dudas técnicas más comunes de ingenieros y responsables de producción al integrar manufactura aditiva en su cadena de valor.
                            </p>
                            <div className="hidden lg:block p-8 bg-tech rounded-3xl border border-gray-100">
                                <p className="text-sm font-bold text-secondary-dark mb-2">¿Tienes una duda específica?</p>
                                <p className="text-xs text-gray-500 mb-4">Envíanos un audio o tu archivo STEP por WhatsApp para un diagnóstico inmediato.</p>
                                <a href="#contacto" className="text-primary font-bold text-sm hover:underline tracking-tight">Consultar ahora →</a>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-2/3">
                        <div className="space-y-2">
                            {faqs.map((faq, i) => (
                                <FAQItem
                                    key={i}
                                    q={faq.q}
                                    a={faq.a}
                                    isOpen={openIndex === i}
                                    onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
