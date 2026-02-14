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

            <main className="flex-grow pt-24 bg-black">
                {/* Hero Section */}
                <section className="py-20 relative overflow-hidden">
                    <div className="absolute inset-x-0 top-0 h-96 bg-primary/10 blur-[120px] rounded-full -translate-y-1/2"></div>
                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-bold mb-6"
                        >
                            Cotizá tu pieza <span className="text-primary italic">en minutos</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
                        >
                            Subí tu STL y completá algunos datos. Analizamos tu proyecto manualmente para darte el mejor precio y tiempo de entrega.
                        </motion.p>
                    </div>
                </section>

                {/* Form Section */}
                <section className="pb-32 container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Left Column: Dropzone */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="lg:col-span-5 space-y-8"
                        >
                            <FileDropzone
                                onFileSelect={setSelectedFile}
                                selectedFile={selectedFile}
                                onFileRemove={() => setSelectedFile(null)}
                            />

                            <div className="bg-secondary-dark/50 border border-white/5 p-8 rounded-[2rem] space-y-4">
                                <h4 className="font-bold text-white">¿Por qué necesitamos el archivo?</h4>
                                <ul className="space-y-3 text-sm text-gray-400">
                                    <li className="flex gap-3">
                                        <span className="text-primary font-bold">•</span>
                                        Cálculo preciso de volumen y material necesario.
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-primary font-bold">•</span>
                                        Detección de posibles fallas geométricas.
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-primary font-bold">•</span>
                                        Estimación de tiempo de impresión según calidad.
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* Right Column: Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="lg:col-span-7"
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
