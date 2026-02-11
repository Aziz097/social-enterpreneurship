'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, GraduationCap } from 'lucide-react';

interface TrustSignalProps {
    variant?: 'guarantee' | 'verified';
}

export default function TrustSignal({ variant = 'guarantee' }: TrustSignalProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show after 2 seconds
        const timer = setTimeout(() => setIsVisible(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    const config = {
        guarantee: {
            icon: <ShieldCheck className="w-5 h-5 text-accent" />,
            text: '30-Day Money-Back Guarantee',
            styles: 'bg-surface-warm/90 border-accent/20 text-secondary',
        },
        verified: {
            icon: <GraduationCap className="w-5 h-5 text-white" />,
            text: 'University Verified Content',
            styles: 'bg-primary/90 border-primary/20 text-white',
        },
    };

    const { icon, text, styles } = config[variant];

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className={`fixed bottom-6 right-6 z-50 backdrop-blur-md border shadow-2xl rounded-2xl px-5 py-3 flex items-center gap-3 ${styles}`}
                >
                    {icon}
                    <span className="text-sm font-semibold">{text}</span>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
