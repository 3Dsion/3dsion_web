import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const ContactSection = () => {
    return (
        <section id="contactos" className="py-24 bg-black relative">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
                    {/* Info Side */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Pongamos en marcha <span className="text-primary">tu proyecto</span></h2>
                            <p className="text-gray-400 text-lg">
                                Estamos en Lugano, CABA, listos para asesorarte en tu próximo desarrollo industrial.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="flex gap-4">
                                <div className="p-3 bg-primary/10 rounded-xl text-primary h-fit">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-1 uppercase tracking-widest text-xs">Teléfono / WhatsApp</h4>
                                    <p className="text-gray-400 text-sm">11 7621 1242</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="p-3 bg-primary/10 rounded-xl text-primary h-fit">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-1 uppercase tracking-widest text-xs">Email</h4>
                                    <p className="text-gray-400 text-sm">info@3dsion.com</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="p-3 bg-primary/10 rounded-xl text-primary h-fit">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-1 uppercase tracking-widest text-xs">Ubicación</h4>
                                    <p className="text-gray-400 text-sm">Guamini 5043 1B (CABA), Lugano</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="p-3 bg-primary/10 rounded-xl text-primary h-fit">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-1 uppercase tracking-widest text-xs">Horarios</h4>
                                    <p className="text-gray-400 text-sm">Lun a Vie: 09:00 - 13:00 / 14:00 - 18:00hs</p>
                                </div>
                            </div>
                        </div>

                        {/* Google Maps Embed (Placeholder for real location) */}
                        <div className="w-full h-[300px] rounded-3xl overflow-hidden border border-white/10 grayscale">
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
                    <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                        <h3 className="text-2xl font-bold mb-8">Envianos tu consulta</h3>

                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Nombre Completo</label>
                                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors" placeholder="Ej: Juan Perez" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Empresa / Email</label>
                                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors" placeholder="email@empresa.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Tu requerimiento</label>
                                <textarea rows="4" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors" placeholder="Contanos brevemente qué necesitas fabricar..."></textarea>
                            </div>

                            <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-all group">
                                ENVIAR CONSULTA TÉCNICA
                                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
