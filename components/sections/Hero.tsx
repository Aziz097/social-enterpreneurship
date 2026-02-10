'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Container from '@/components/ui/Container';
import TrustSignal from '@/components/ui/TrustSignal';

export default function Hero() {
    return (
        <section className="relative min-h-[95vh] flex items-center bg-surface overflow-hidden pt-20">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-surface-warm via-surface to-primary/5 pointer-events-none" />
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-[80px] pointer-events-none" />

            <TrustSignal variant="verified" />

            <Container size="lg" className="relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-8 text-center lg:text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent font-medium text-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                            </span>
                            New Edition Available Now
                        </div>

                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-primary text-balance">
                            Build a Business That <span className="text-accent italic">Matters</span>.
                        </h1>

                        <p className="text-lg md:text-xl text-secondary max-w-xl mx-auto lg:mx-0 leading-relaxed text-balance">
                            Market-proven strategies to launch and scale a social enterprise that generates <strong className="text-primary font-semibold">real profit</strong> while creating measurable <strong className="text-primary font-semibold">social impact</strong>.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button
                                variant="accent"
                                size="xl"
                                className="shadow-xl hover:shadow-2xl transition-all"
                                onClick={() => document.getElementById('cta')?.scrollIntoView()}
                            >
                                Get the E-book Now
                            </Button>
                            <Button
                                variant="outline"
                                size="xl"
                                onClick={() => document.getElementById('chapters')?.scrollIntoView()}
                            >
                                Read Free Preview
                            </Button>
                        </div>

                        <div className="flex items-center justify-center lg:justify-start gap-4 text-sm text-muted pt-2">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-surface bg-gray-100 overflow-hidden relative">
                                        <Image
                                            src={`/images/avatars/avatar-${i}.png`}
                                            alt={`Student ${i}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                            <p className='text-primary'>Trusted by <span className="text-primary font-semibold">500+</span> Founders</p>
                        </div>
                    </motion.div>

                    {/* Visual Element (3D Book) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, type: "spring" }}
                        className="relative hidden lg:block perspective-1000"
                    >
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                            className="relative z-10 w-[400px] h-[580px] mx-auto rotate-y-[-15deg] rotate-x-[5deg] shadow-2xl rounded-tr-3xl rounded-br-3xl"
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            {/* Realistic Book Spine Effect */}
                            <div className="absolute left-0 top-0 bottom-0 w-[40px] bg-gray-800 transform origin-left rotate-y-90 translate-z-[-2px] rounded-l-md" />

                            <div className="relative w-full h-full rounded-tr-3xl rounded-br-3xl overflow-hidden shadow-inner bg-white border border-gray-100">
                                <Image
                                    src="/images/book-mockup.jpg"
                                    alt="Social Entrepreneurship Book Cover"
                                    fill
                                    className="object-cover"
                                    priority
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />

                                {/* Glare Effect */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-50 pointer-events-none" />
                            </div>
                        </motion.div>

                        {/* Shadow Base */}
                        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[300px] h-[40px] bg-black/20 blur-2xl rounded-full" />
                    </motion.div>

                </div>
            </Container>
        </section>
    );
}
