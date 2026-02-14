import React, { useState } from 'react';
import { HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const QuoteTooltip = ({ text }) => {
    const [show, setShow] = useState(false);

    return (
        <div className="relative inline-flex items-center ml-2">
            <button
                type="button"
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
                onClick={() => setShow(!show)}
                className="text-gray-400 hover:text-primary transition-colors focus:outline-none"
                aria-label="Más información"
            >
                <HelpCircle size={16} />
            </button>

            <AnimatePresence>
                {show && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-3 bg-secondary-dark border border-white/10 rounded-xl shadow-2xl z-50 pointer-events-none"
                    >
                        <p className="text-xs text-gray-300 leading-relaxed">
                            {text}
                        </p>
                        {/* Arrow */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-secondary-dark border-b border-r border-white/10 rotate-45 -translate-y-1"></div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default QuoteTooltip;
