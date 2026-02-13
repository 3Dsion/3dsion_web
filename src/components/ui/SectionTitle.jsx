import React from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

const SectionTitle = ({
    title,
    subtitle,
    highlight,
    align = 'left',
    className
}) => {
    const alignment = {
        left: 'text-left items-start',
        center: 'text-center items-center',
        right: 'text-right items-end'
    };

    return (
        <div className={twMerge("flex flex-col mb-12", alignment[align], className)}>
            {subtitle && (
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                    {subtitle}
                </motion.div>
            )}

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold text-secondary-dark leading-tight"
            >
                {title} {highlight && <span className="text-primary">{highlight}</span>}
            </motion.h2>

            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className={twMerge(
                    "h-1.5 w-20 bg-primary mt-4 rounded-full origin-left",
                    align === 'center' && "origin-center",
                    align === 'right' && "origin-right"
                )}
            />
        </div>
    );
};

export default SectionTitle;
