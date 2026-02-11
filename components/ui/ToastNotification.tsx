'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Store } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ToastNotification() {
    const [isVisible, setIsVisible] = useState(false);
    const [autoReopenTimer, setAutoReopenTimer] = useState<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 800) {
                setIsVisible(true);
                window.removeEventListener('scroll', handleScroll);
            }
        };

        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 12000);

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timer);
            if (autoReopenTimer) clearTimeout(autoReopenTimer);
        };
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        // Re-open after 45 seconds
        if (autoReopenTimer) clearTimeout(autoReopenTimer);
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 45000);
        setAutoReopenTimer(timer);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 50, scale: 0.9, transition: { duration: 0.2 } }}
                    className="fixed bottom-4 left-0 right-0 z-50 mx-auto w-full max-w-[500px] px-4 md:bottom-8 md:right-auto md:left-8 md:mx-0 md:px-0"
                >
                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0f172a]/95 p-6 shadow-2xl backdrop-blur-xl ring-1 ring-white/20">
                        {/* Glow Effect */}
                        <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-accent/20 blur-3xl pointer-events-none" />

                        <div className="relative z-10">
                            <div className="flex items-start justify-between mb-5">
                                <div className="space-y-1">
                                    <h4 className="text-base font-semibold text-white">Start Your Journey</h4>
                                    <p className="text-sm text-primary-light/80 leading-relaxed pr-8">
                                        Get the verified blueprint for social entrepreneurship.
                                    </p>
                                </div>
                                <button
                                    onClick={handleClose}
                                    className="shrink-0 -mr-2 -mt-2 rounded-full p-2 text-primary-light/50 transition-colors hover:bg-white/10 hover:text-white"
                                    aria-label="Close notification"
                                >
                                    <X size={18} />
                                </button>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <Button
                                    size="lg"
                                    className="w-full bg-[#ff90e8] text-black hover:bg-[#ff90e8]/90 font-bold border-0 shadow-lg h-12"
                                    onClick={() => window.open('#gumroad', '_blank')}
                                >
                                    <ShoppingBag size={18} className="mr-2" />
                                    Gumroad
                                </Button>
                                <Button
                                    size="lg"
                                    className="w-full bg-[#F1641E] text-white hover:bg-[#F1641E]/90 font-bold border-0 shadow-lg h-12"
                                    onClick={() => window.open('#etsy', '_blank')}
                                >
                                    <Store size={18} className="mr-2" />
                                    Etsy
                                </Button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
