import React, { useState } from 'react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import QuoteTooltip from './QuoteTooltip';

const QuoteForm = ({ onSubmit, isSubmitting, isSuccess, hasFile }) => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        material: '',
        calidad: '',
        cantidad: 1,
        tamano: '',
        uso: '',
        comentarios: '',
        necesitaModelado: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    const isModelingOnly = formData.necesitaModelado && !hasFile;

    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/5 border border-primary/20 p-12 rounded-[2.5rem] text-center space-y-6"
            >
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 size={40} className="text-primary" />
                </div>
                <h3 className="text-3xl font-bold">¡Solicitud enviada!</h3>
                <p className="text-gray-400 max-w-sm mx-auto">
                    {formData.necesitaModelado
                        ? "Hemos recibido tu pedido de asesoramiento/modelado. Un técnico te contactará pronto."
                        : "Hemos recibido tus datos y el archivo. Te responderemos con el presupuesto en menos de 24hs."
                    }
                </p>
                <button
                    onClick={() => window.location.reload()}
                    className="text-primary font-bold hover:underline"
                >
                    VOLVER A EMPEZAR
                </button>
            </motion.div>
        );
    }

    return (
        <form id="quote-form" onSubmit={handleSubmit} className="space-y-8 bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
            {/* Opción de Modelado */}
            <div
                style={{ backgroundColor: 'var(--cotizar-card-modeling-bg)' }}
                className="border border-primary/20 p-4 rounded-2xl flex items-center gap-4"
            >
                <div className="flex items-center">
                    <input
                        id="needs-modeling"
                        type="checkbox"
                        name="necesitaModelado"
                        checked={formData.necesitaModelado}
                        onChange={handleChange}
                        className="w-5 h-5 accent-primary bg-black border-white/10 rounded cursor-pointer"
                    />
                </div>
                <label htmlFor="needs-modeling" className="text-sm font-medium text-gray-200 cursor-pointer select-none">
                    No tengo el archivo / Necesito servicio de modelado 3D o asesoría técnica
                </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Personales */}
                <div className="space-y-4 md:col-span-2">
                    <h4 className="text-primary font-bold uppercase tracking-widest text-xs">Datos de Contacto</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300 ml-1">Nombre completo *</label>
                            <input
                                required
                                type="text"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                placeholder="Ej: Juan Pérez"
                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:border-primary/50 outline-none transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300 ml-1">Email *</label>
                            <input
                                required
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="juan@empresa.com"
                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:border-primary/50 outline-none transition-all"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300 ml-1">Teléfono (opcional)</label>
                        <input
                            type="tel"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleChange}
                            placeholder="Ej: +54 9 11 ..."
                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:border-primary/50 outline-none transition-all"
                        />
                    </div>
                </div>

                {/* Técnicos - Mostrar solo si no es solo modelado o si el usuario quiere completarlos */}
                <div className={`space-y-4 md:col-span-2 pt-4 transition-all ${isModelingOnly ? 'opacity-50 grayscale select-none pointer-events-none' : ''}`}>
                    <div className="flex items-center justify-between">
                        <h4 className="text-primary font-bold uppercase tracking-widest text-xs">Especificaciones de Impresión</h4>
                        {isModelingOnly && <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-gray-400">OPCIONAL (PARA MODELADO)</span>}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300 ml-1 flex items-center">
                                Material
                                <QuoteTooltip text="Define resistencia/temperatura/uso. Si no sabés, te asesoramos." />
                            </label>
                            <select
                                name="material"
                                required={!isModelingOnly}
                                value={formData.material}
                                onChange={handleChange}
                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:border-primary/50 outline-none transition-all appearance-none cursor-pointer"
                            >
                                <option value="">Seleccionar material</option>
                                <option value="PLA">PLA (Estándar/Decorativo)</option>
                                <option value="PETG">PETG (Resistente/Funcional)</option>
                                <option value="ABS">ABS (Técnico/Temperatura)</option>
                                <option value="Flexible">Flexible (TPU)</option>
                                <option value="No sé">No estoy seguro</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300 ml-1 flex items-center">
                                Calidad
                                <QuoteTooltip text="Más calidad = más tiempo de impresión y mayor costo." />
                            </label>
                            <select
                                name="calidad"
                                required={!isModelingOnly}
                                value={formData.calidad}
                                onChange={handleChange}
                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:border-primary/50 outline-none transition-all appearance-none cursor-pointer"
                            >
                                <option value="">Seleccionar calidad</option>
                                <option value="Económica">Económica (Prototipo rápido)</option>
                                <option value="Estándar">Estándar (Recomendada)</option>
                                <option value="Alta definición">Alta definición (Final)</option>
                                <option value="No sé">No estoy seguro</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300 ml-1 flex items-center">
                                Tamaño aprox.
                                <QuoteTooltip text="Si no sabés, lo analizamos desde el archivo STL." />
                            </label>
                            <select
                                name="tamano"
                                required={!isModelingOnly}
                                value={formData.tamano}
                                onChange={handleChange}
                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:border-primary/50 outline-none transition-all appearance-none cursor-pointer"
                            >
                                <option value="">Seleccionar tamaño</option>
                                <option value="Pequeño">Pequeño (&lt;10cm)</option>
                                <option value="Mediano">Mediano (10–25cm)</option>
                                <option value="Grande">Grande (+25cm)</option>
                                <option value="No sé">No estoy seguro</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300 ml-1 flex items-center">
                                Uso de la pieza
                                <QuoteTooltip text="Nos ayuda a elegir material y configuración." />
                            </label>
                            <select
                                name="uso"
                                required={!isModelingOnly}
                                value={formData.uso}
                                onChange={handleChange}
                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:border-primary/50 outline-none transition-all appearance-none cursor-pointer"
                            >
                                <option value="">Seleccionar uso</option>
                                <option value="Decorativo">Decorativo</option>
                                <option value="Funcional">Funcional</option>
                                <option value="Prototipo">Prototipo</option>
                                <option value="Industrial">Industrial</option>
                                <option value="Otro">Otro / Varios</option>
                            </select>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300 ml-1">Cantidad *</label>
                        <input
                            required
                            type="number"
                            min="1"
                            name="cantidad"
                            value={formData.cantidad}
                            onChange={handleChange}
                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:border-primary/50 outline-none transition-all"
                        />
                    </div>
                </div>

                <div className="space-y-2 md:col-span-2 pt-2">
                    <label className="text-sm font-medium text-gray-300 ml-1">Comentarios / Descripción del proyecto</label>
                    <textarea
                        name="comentarios"
                        value={formData.comentarios}
                        onChange={handleChange}
                        rows="4"
                        placeholder={isModelingOnly ? "Describinos tu idea, las medidas que necesitás o qué problema querés resolver..." : "Contanos más sobre tu proyecto o necesidades específicas..."}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:border-primary/50 outline-none transition-all resize-none"
                    ></textarea>
                </div>
            </div>

            <div className="pt-6">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-orange-600 disabled:bg-primary/50 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-primary/20 group"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="animate-spin" size={24} />
                            ENVIANDO...
                        </>
                    ) : (
                        <>
                            <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            {isModelingOnly ? 'SOLICITAR ASESORAMIENTO/MODELADO' : 'ENVIAR COTIZACIÓN'}
                        </>
                    )}
                </button>
                <p className="text-center text-gray-500 text-xs mt-4">
                    {isModelingOnly
                        ? "Un técnico analizará tu pedido y te contactará para definir el diseño"
                        : "Te respondemos en menos de 24hs • Revisamos cada archivo manualmente"
                    }
                </p>
            </div>
        </form>
    );
};

export default QuoteForm;
