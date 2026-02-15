import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Link } from 'react-router-dom';

const Button = ({
    children,
    variant = 'primary',
    className,
    href,
    onClick,
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-300 transform active:scale-95";

    const variants = {
        primary: "bg-primary hover:bg-orange-500 text-white shadow-[0_0_20px_rgba(0,86,179,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)]",
        secondary: "bg-transparent hover:bg-white/10 text-white border border-white/20 backdrop-blur-sm",
        outline: "bg-transparent hover:bg-primary/5 text-primary border border-primary/20",
        dark: "bg-secondary-dark hover:bg-primary text-white"
    };

    const sizes = "px-8 py-4 rounded-full";

    const combinedClasses = twMerge(baseStyles, variants[variant], sizes, className);

    if (href) {
        const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');
        const isHash = href.startsWith('#');

        if (isExternal || isHash) {
            return (
                <a href={href} className={combinedClasses} {...props}>
                    {children}
                </a>
            );
        }

        return (
            <Link to={href} className={combinedClasses} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className={combinedClasses}
            onClick={onClick}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
