import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import FileDropzone from '../components/quote/FileDropzone';
import QuoteForm from '../components/quote/QuoteForm';

const Cotizar = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleFormSubmit = async (formData) => {
        if (!selectedFile && !formData.necesitaModelado) {
            alert('Por favor, subí tu archivo o marcá la opción de "Necesito modelado" para continuar.');
            return;
        }

        setIsSubmitting(true);

        try {
            // Preparar FormData para enviar archivo y textos
            const data = new FormData();

            // Campos de texto
            Object.keys(formData).forEach(key => {
                data.append(key, formData[key]);
            });

            // El archivo
            if (selectedFile) {
                data.append('archivo', selectedFile);
            }

            // Petición al script PHP (ruta relativa para funcionar en cualquier carpeta)
            const response = await fetch('./send-quote.php', {
                method: 'POST',
                body: data
            });

            if (response.ok) {
                setIsSuccess(true);
                setSelectedFile(null);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Error al enviar la cotización');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Hubo un problema al enviar tu solicitud: ' + error.message + '. Por favor, intentá nuevamente o contactanos por WhatsApp.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Helmet>
                <title>Cotizar Impresión 3D | Presupuesto Online 3Dsion</title>
                <meta name="description" content="Subí tu archivo STL/OBJ o solicita servicio de modelado 3D. Obtené una cotización técnica para tu proyecto industrial en menos de 24hs." />
            </Helmet>
            <Navbar />

            <main id="cotizar" className="flex-grow pt-24 relative overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[var(--bg-tech)] blur-[150px] rounded-full opacity-20"></div>
                    {/* El resplandor que estabas editando, ahora en el fondo general para que no se corte */}
                    <div
                        className="absolute top-0 left-0 w-full h-[1000px]"
                        style={{
                            background: 'radial-gradient(circle at center 20%, rgba(229, 239, 252, 1) 0%, transparent 70%)'
                        }}
                    ></div>
                </div>

                {/* Hero Section */}
                <section className="py-20 relative z-10">

                    <div className="container mx-auto px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-gray-50/50 backdrop-blur-md text-secondary-dark text-xs font-bold uppercase tracking-widest mb-6 shadow-sm"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                            Presupuesto Técnico
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            style={{ color: 'var(--cotizar-text-titles)' }}
                            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
                        >
                            Cotizá tu pieza <span className="text-primary italic">en minutos</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            style={{ color: 'var(--cotizar-text-body)' }}
                            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
                        >
                            Subí tu <span className="text-primary font-bold">archivo 3D</span> y recibí un análisis técnico detallado.
                            Optimizamos la manufactura para darte el mejor resultado industrial.
                        </motion.p>
                    </div>
                </section>

                {/* Form Section */}
                <section className="pb-32 container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Left Column: Dropzone */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="lg:col-span-12 xl:col-span-5 space-y-8"
                        >
                            <div
                                style={{ backgroundColor: 'var(--cotizar-dropzone-ext-card-bg)', borderColor: 'var(--cotizar-card-border)' }}
                                className="border p-2 rounded-[2.5rem] shadow-xl backdrop-blur-md"
                            >
                                <FileDropzone
                                    onFileSelect={setSelectedFile}
                                    selectedFile={selectedFile}
                                    onFileRemove={() => setSelectedFile(null)}
                                />
                            </div>

                            <div
                                style={{ backgroundColor: 'var(--cotizar-form-card-bg)', borderColor: 'var(--cotizar-card-border)' }}
                                className="backdrop-blur-md border border-gray-200 p-8 rounded-[2rem] space-y-6 shadow-xl relative overflow-hidden group"
                            >
                                <h4 style={{ color: 'var(--cotizar-text-titles)' }} className="font-bold flex items-center gap-3">
                                    <div style={{ backgroundColor: 'rgba(255, 140, 0, 0.2)' }} className="w-6 h-6 rounded-lg border border-primary/40 flex items-center justify-center">
                                        <div style={{ backgroundColor: 'var(--cotizar-accent)' }} className="w-2 h-2 rounded-full"></div>
                                    </div>
                                    ¿Por qué el archivo?
                                </h4>
                                <ul style={{ color: 'var(--cotizar-text-body)' }} className="space-y-4 text-sm relative z-10">
                                    <li className="flex gap-4">
                                        <span className="text-primary font-bold">01.</span>
                                        <p>Análisis exacto de geometría y volumen de material.</p>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="text-primary font-bold">02.</span>
                                        <p>Detección de puntos de falla previos a la impresión.</p>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="text-primary font-bold">03.</span>
                                        <p>Optimización técnica para reducir costos y tiempos.</p>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* Right Column: Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="lg:col-span-12 xl:col-span-7"
                        >
                            <QuoteForm
                                onSubmit={handleFormSubmit}
                                isSubmitting={isSubmitting}
                                isSuccess={isSuccess}
                                hasFile={!!selectedFile}
                            />
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Cotizar;
