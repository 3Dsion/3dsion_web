import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo+3dsion (color).png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Inicio', href: '/' },
        { name: 'Soluciones', href: '/#soluciones' },
        { name: 'Proyectos', href: '/#proyectos' },
        { name: 'Nosotros', href: '/nosotros' },
        { name: 'Contactos', href: '/#contactos' },
    ];

    return (
        <nav
            id={scrolled ? "navbar-scrolled" : undefined}
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-nav-scrolled py-4 shadow-lg' : 'bg-transparent py-4'}`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center">
                    <img src={logo} alt="3Dsion Logo" className={`h-8 lg:h-10 w-auto transition-all duration-300 ${scrolled ? '' : 'brightness-0 invert'}`} />
                </div>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className={`text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider ${scrolled ? 'text-secondary' : 'text-white'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/cotizar"
                        className="bg-primary hover:bg-orange-500 text-white px-5 py-2 rounded-full text-sm font-bold flex items-center transition-all"
                    >
                        COTIZAR
                    </Link>
                </div>

                {/* Mobile menu button */}
                <div className="lg:hidden flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`hover:text-primary focus:outline-none transition-colors ${scrolled ? 'text-secondary' : 'text-white'}`}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-secondary-dark border-t border-white/10"
                    >
                        <div className="px-6 py-4 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block text-base font-medium hover:text-primary transition-colors uppercase"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="/cotizar"
                                onClick={() => setIsOpen(false)}
                                className="w-full bg-primary hover:bg-primary-dark text-white px-5 py-3 rounded-xl text-center font-bold flex items-center justify-center transition-all"
                            >
                                COTIZAR
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
