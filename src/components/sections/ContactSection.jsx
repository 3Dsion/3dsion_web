
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const ContactSection = () => {
    return (
        <section id="contactos" className="py-24 bg-contact relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                    <div className="flex flex-col md:flex-row">
                        {/* Contact Info */}
                        <div className="md:w-5/12 bg-secondary-dark p-10 text-white flex flex-col justify-between relative overflow-hidden">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pongamos en marcha <span className="text-primary">tu proyecto</span></h2>
                            <p className="text-gray-300 text-lg mb-8">
                                Estamos en Lugano, CABA, listos para asesorarte en tu próximo desarrollo industrial.
                            </p>

                            <div className="grid grid-cols-1 gap-8">
                                <div className="flex gap-4">
                                    <div className="p-3 bg-primary/10 rounded-xl text-primary h-fit">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1 uppercase tracking-widest text-xs">Teléfono / WhatsApp</h4>
                                        <p className="text-gray-300 text-sm">11 7621 1242</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="p-3 bg-primary/10 rounded-xl text-primary h-fit">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1 uppercase tracking-widest text-xs">Email</h4>
                                        <p className="text-gray-300 text-sm">info@3dsion.com</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="p-3 bg-primary/10 rounded-xl text-primary h-fit">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1 uppercase tracking-widest text-xs">Ubicación</h4>
                                        <p className="text-gray-300 text-sm">Guamini 5043 1B (CABA), Lugano</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="p-3 bg-primary/10 rounded-xl text-primary h-fit">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1 uppercase tracking-widest text-xs">Horarios</h4>
                                        <p className="text-gray-300 text-sm">Lun a Vie: 09:00 - 13:00 / 14:00 - 18:00hs</p>
                                    </div>
                                </div>
                            </div>

                            {/* Google Maps Embed (Placeholder for real location) */}
                            <div className="w-full h-[200px] rounded-xl overflow-hidden border border-white/10 grayscale mt-8">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.952873139828!2d-58.4839843!3d-34.681123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc8f7a6a4a4a5%3A0x4a4a4a4a4a4a4a4a!2sGuamin%C3%AD%205043%2C%20C1439%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1710000000000!5m2!1ses!2sar"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>

                        {/* Form Side */}
                        <div className="md:w-7/12 p-10 bg-white">
                            <h3 className="text-2xl font-bold mb-6 text-secondary-dark">Envianos tu Consulta</h3>

                            <form className="space-y-6">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Nombre</label>
                                        <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-secondary-dark" placeholder="Tu nombre" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Empresa</label>
                                        <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-secondary-dark" placeholder="Nombre empresa" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Email</label>
                                    <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-secondary-dark" placeholder="tucorreo@empresa.com" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Mensaje</label>
                                    <textarea rows="4" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-secondary-dark resize-none" placeholder="Contanos sobre tu proyecto..."></textarea>
                                </div>
                                <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1">
                                    ENVIAR MENSAJE
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
