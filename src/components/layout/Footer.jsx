import React from 'react';
import { Instagram, Linkedin, Phone, Mail, MapPin, Clock } from 'lucide-react';
import logo from '../../assets/Logo+3dsion (color).png';

const Footer = () => {
    return (
        <footer className="bg-secondary-dark text-white pt-16 pb-8 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <img src={logo} alt="3Dsion Logo" className="h-14 w-auto brightness-110" />
                        <p className="text-gray-400 text-sm leading-relaxed">
                            27 años transformando ideas en realidades industriales mediante diseño avanzado y fabricación aditiva.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary transition-colors">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Contact Column */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-bold">Contacto</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li className="flex items-start">
                                <Phone size={18} className="mr-3 text-primary shrink-0" />
                                <span>11 7621 1242</span>
                            </li>
                            <li className="flex items-start">
                                <Mail size={18} className="mr-3 text-primary shrink-0" />
                                <a href="mailto:info@3dsion.com" className="hover:text-white transition-colors">info@3dsion.com</a>
                            </li>
                            <li className="flex items-start">
                                <MapPin size={18} className="mr-3 text-primary shrink-0" />
                                <span>Guamini 5043 1B (CABA) Lugano</span>
                            </li>
                        </ul>
                    </div>

                    {/* Hours Column */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-bold">Horarios</h4>
                        <div className="flex items-start text-gray-400 text-sm">
                            <Clock size={18} className="mr-3 text-primary shrink-0" />
                            <div>
                                <p>Lunes a Viernes</p>
                                <p className="text-white font-medium">09:00 - 13:00</p>
                                <p className="text-white font-medium">14:00 - 18:00 hs</p>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links Column */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-bold">Explorar</h4>
                        <ul className="grid grid-cols-1 gap-2 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-primary transition-colors">Soluciones</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Proyectos</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Nosotros</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Iniciativas</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 text-center text-gray-500 text-xs">
                    <p>© {new Date().getFullYear()} 3Dsion. Todos los derechos reservados. Diseño y Desarrollo Técnico Industrial.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
