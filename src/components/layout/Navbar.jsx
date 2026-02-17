import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/Logo+3dsion (color).png';
import servicesData from '../../data/services.json';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const isCotizar = location.pathname === '/cotizar';
            const isSolucion = location.pathname.startsWith('/soluciones/');
            setScrolled(isCotizar || isSolucion || window.scrollY > 50);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    // Cerrar menús al cambiar de ruta
    useEffect(() => {
        setIsOpen(false);
        setIsDropdownOpen(false);
        setIsMobileSolutionsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Inicio', href: '/', onClick: () => window.scrollTo(0, 0) },
        {
            name: 'Soluciones',
            href: '/#soluciones',
            dropdown: servicesData.map(s => ({ name: s.title, href: s.link }))
        },
        { name: 'Casos de Éxito', href: '/#proyectos' },
        { name: 'Trayectoria', href: '/trayectoria' },
        { name: 'Contacto', href: '/#contacto' },
    ];

    return (
        <nav
            id={scrolled ? "navbar-scrolled" : undefined}
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-nav-scrolled py-4 shadow-lg' : 'bg-transparent py-4'}`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="flex items-center" onClick={() => window.scrollTo(0, 0)}>
                    <img src={logo} alt="3Dsion Logo" className={`h-8 lg:h-10 w-auto transition-all duration-300 ${scrolled ? '' : 'brightness-0 invert'}`} />
                </Link>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <div
                            key={link.name}
                            className="relative group"
                            onMouseEnter={() => link.dropdown && setIsDropdownOpen(true)}
                            onMouseLeave={() => link.dropdown && setIsDropdownOpen(false)}
                        >
                            {link.dropdown ? (
                                <button
                                    className={`flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider ${scrolled ? 'text-secondary' : 'text-white'}`}
                                >
                                    {link.name}
                                    <ChevronDown size={14} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                </button>
                            ) : (
                                <Link
                                    to={link.href}
                                    onClick={link.onClick}
                                    className={`text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider ${scrolled ? 'text-secondary' : 'text-white'}`}
                                >
                                    {link.name}
                                </Link>
                            )}

                            {/* Desktop Dropdown */}
                            {link.dropdown && (
                                <AnimatePresence>
                                    {isDropdownOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="absolute left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden py-2"
                                        >
                                            {link.dropdown.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    to={subItem.href}
                                                    className="block px-6 py-3 text-xs font-bold text-secondary-dark hover:bg-orange-50 hover:text-orange-600 transition-all uppercase tracking-wider border-l-4 border-transparent hover:border-orange-500"
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            )}
                        </div>
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
                        <div className="px-6 py-6 space-y-2">
                            {navLinks.map((link) => (
                                <div key={link.name}>
                                    {link.dropdown ? (
                                        <div>
                                            <button
                                                onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
                                                className="w-full flex justify-between items-center text-base font-medium text-white hover:text-primary transition-colors uppercase py-3"
                                            >
                                                {link.name}
                                                <ChevronDown size={20} className={`transition-transform duration-300 ${isMobileSolutionsOpen ? 'rotate-180' : ''}`} />
                                            </button>
                                            <AnimatePresence>
                                                {isMobileSolutionsOpen && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        className="pl-4 space-y-1 bg-white/5 rounded-xl mt-1 overflow-hidden"
                                                    >
                                                        {link.dropdown.map((subItem) => (
                                                            <Link
                                                                key={subItem.name}
                                                                to={subItem.href}
                                                                onClick={() => setIsOpen(false)}
                                                                className="block py-3 px-4 text-xs font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-wider"
                                                            >
                                                                {subItem.name}
                                                            </Link>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ) : (
                                        <Link
                                            to={link.href}
                                            onClick={() => {
                                                setIsOpen(false);
                                                if (link.onClick) link.onClick();
                                            }}
                                            className="block text-base font-medium text-white hover:text-primary transition-colors uppercase py-3"
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                            <div className="pt-4">
                                <Link
                                    to="/cotizar"
                                    onClick={() => setIsOpen(false)}
                                    className="w-full bg-primary hover:bg-orange-500 text-white px-5 py-3 rounded-xl text-center font-bold flex items-center justify-center transition-all"
                                >
                                    COTIZAR
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
