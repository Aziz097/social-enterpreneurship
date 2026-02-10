'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { ArrowRight, Lock, CheckCircle2 } from 'lucide-react';

export default function FinalCTA() {
    return (
        <Section id="cta" spacing="xl" className="relative overflow-hidden">
            {/* Clean Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[#1a1f2e]" />

            {/* Subtle Glow Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent/10 blur-[120px] rounded-full pointer-events-none" />

            <Container size="md" className="relative z-10 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sm font-medium backdrop-blur-sm border border-white/10 mb-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        Instant Digital Delivery
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6 tracking-tight">
                        Start Your Journey Today
                    </h2>
                    <p className="text-xl text-primary-light/90 max-w-2xl mx-auto mb-10 leading-relaxed">
                        The blueprint used by universities and incubators worldwide is now available to you.
                        Stop guessing and start building with confidence.
                    </p>

                    {/* Pricing Card */}
                    <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-10 max-w-lg mx-auto border border-white/10 shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10">
                            <div className="flex justify-between items-end mb-8 pb-6 border-b border-white/10">
                                <div className="text-left">
                                    <span className="block text-sm text-primary-light uppercase tracking-wider mb-1">Complete Package</span>
                                    <span className="text-2xl font-semibold">E-book + Workbook</span>
                                </div>
                                <div className="text-right">
                                    <span className="text-4xl font-bold text-accent">$49</span>
                                    <span className="text-lg text-primary-light">.00</span>
                                </div>
                            </div>

                            <div className="space-y-4 mb-8 text-left">
                                {[
                                    'Instant PDF & EPUB Download',
                                    'Printable Action Workbook (50+ Pages)',
                                    'Lifetime Free Updates',
                                    'University-Verified Curriculum'
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-primary-light">
                                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Dual Checkout Options */}
                            <div className="grid sm:grid-cols-2 gap-4 w-full">
                                <Button
                                    variant="accent"
                                    size="xl"
                                    className="w-full shadow-lg group text-base py-6 h-auto bg-[#ff90e8] hover:bg-[#ff90e8]/90 text-black border border-black/10 font-bold"
                                    onClick={() => window.open('#gumroad', '_blank')}
                                >
                                    Gumroad <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="xl"
                                    className="w-full shadow-lg group text-base py-6 h-auto bg-[#F1641E] hover:bg-[#F1641E]/90 text-white border-transparent font-bold hover:text-white"
                                    onClick={() => window.open('#etsy', '_blank')}
                                >
                                    Etsy Shop <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>

                            <p className="mt-4 text-xs text-primary-light/60">
                                Choose your preferred secure checkout platform.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-6 text-sm text-primary-light/50 pt-8">
                        <span className="flex items-center gap-1"><Lock size={14} /> 256-bit SSL Secure</span>
                        <span>•</span>
                        <span>30-Day Money-Back Guarantee</span>
                    </div>
                </motion.div>
            </Container>
        </Section>
    );
}
