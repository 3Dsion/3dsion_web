import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import company from '../../data/company.json';

const ContactInfoItem = ({ icon: Icon, label, value }) => (
    <div className="flex gap-4 group">
        <div className="p-3 bg-primary/10 rounded-xl text-primary h-fit transition-colors group-hover:bg-primary group-hover:text-white">
            <Icon size={24} />
        </div>
        <div>
            <h4 className="font-bold text-white mb-1 uppercase tracking-widest text-[10px] opacity-60">{label}</h4>
            <p className="text-gray-300 text-sm">{value}</p>
        </div>
    </div>
);

const ContactSection = () => {
    return (
        <section id="contactos" className="py-24 bg-contact relative overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl animate-blob"></div>
                <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200/20 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-6xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 flex flex-col md:flex-row">

                    {/* Dark Side: Contact Info */}
                    <div className="md:w-5/12 bg-secondary-dark p-10 lg:p-12 text-white flex flex-col justify-between">
                        <div>
                            <h2 className="text-4xl font-bold mb-8 leading-tight">
                                Pongamos en marcha <span className="text-primary block">tu proyecto</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-10">
                                Estamos en {company.contact.city}, listos para asesorarte en tu próximo desarrollo industrial.
                            </p>

                            <div className="space-y-8">
                                <ContactInfoItem
                                    icon={Phone}
                                    label="Teléfono / WhatsApp"
                                    value={company.contact.phone}
                                />
                                <ContactInfoItem
                                    icon={Mail}
                                    label="Email"
                                    value={company.contact.email}
                                />
                                <ContactInfoItem
                                    icon={MapPin}
                                    label="Ubicación"
                                    value={company.contact.address}
                                />
                                <ContactInfoItem
                                    icon={Clock}
                                    label={company.schedule.label}
                                    value={company.schedule.weekdays}
                                />
                            </div>
                        </div>

                        {/* Maps */}
                        <div className="w-full h-48 rounded-2xl overflow-hidden border border-white/10 grayscale opacity-60 hover:opacity-100 transition-opacity mt-12">
                            <iframe
                                src={company.contact.maps_url}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>

                    {/* Light Side: Form */}
                    <div className="md:w-7/12 p-10 lg:p-12 bg-white flex flex-col justify-center">
                        <SectionTitle
                            title="Envianos tu"
                            highlight="Consulta"
                            className="mb-8"
                        />

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-secondary-dark/60 ml-1">Nombre</label>
                                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-secondary-dark" placeholder="Tu nombre" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-secondary-dark/60 ml-1">Empresa</label>
                                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-secondary-dark" placeholder="Nombre empresa" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-secondary-dark/60 ml-1">Email Corporativo</label>
                                <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-secondary-dark" placeholder="tucorreo@empresa.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-secondary-dark/60 ml-1">¿En qué podemos ayudarte?</label>
                                <textarea rows="4" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-secondary-dark resize-none" placeholder="Breve descripción del proyecto..."></textarea>
                            </div>

                            <Button className="w-full py-5 text-lg" variant="primary">
                                ENVIAR MENSAJE
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
