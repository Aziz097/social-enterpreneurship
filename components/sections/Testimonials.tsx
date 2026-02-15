'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { Button } from '@/components/ui/button';

const testimonials = [
    {
        id: 1,
        quote: "The most practical guide on social entrepreneurship I've read. It doesn't just talk about 'doing good' - it shows you how to make the math work.",
        author: "Sarah Jenkins",
        role: "Founder of EcoWear"
    },
    {
        id: 2,
        quote: "Finally, a framework that treats social impact with the same rigor as profit. The chapter on impact measurement is worth the price alone.",
        author: "Dr. Marcus Chen",
        role: "Impact Investor"
    },
    {
        id: 3,
        quote: "As a non-profit leader trying to pivot to a sustainable model, this book was my bible. We are now 60% self-funded thanks to these strategies.",
        author: "Elena Rodriguez",
        role: "Director of CityArts"
    },
    {
        id: 4,
        quote: "Clear, actionable, and deeply inspiring. Rasheda Weaver has codified what it takes to build a business that actually matters.",
        author: "James Thorne",
        role: "Social Innovation Lab"
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            paginate(1);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 100 : -100,
            opacity: 0
        })
    };

    return (
        <Section id="testimonials" spacing="lg" variant="warm" className="overflow-hidden">
            <Container size="md">
                <div className="text-center mb-12">
                    <h2 className="text-h2 font-display text-primary mb-6">What Leaders Are Saying</h2>
                </div>

                <div className="relative min-h-[300px] flex flex-col items-center justify-center">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-border/50 text-center w-full relative"
                        >
                            <Quote className="w-12 h-12 text-accent/20 absolute top-8 left-8" />

                            <blockquote className="text-xl md:text-2xl font-display text-primary italic leading-relaxed mb-8 relative z-10 px-4 md:px-12">
                                "{testimonials[currentIndex].quote}"
                            </blockquote>

                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 text-primary font-bold text-lg">
                                    {testimonials[currentIndex].author[0]}
                                </div>
                                <cite className="not-italic font-semibold text-primary text-lg">
                                    {testimonials[currentIndex].author}
                                </cite>
                                <span className="text-sm text-secondary uppercase tracking-wider font-medium mt-1">
                                    {testimonials[currentIndex].role}
                                </span>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <div className="flex gap-4 mt-8">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => paginate(-1)}
                            className="rounded-full hover:bg-white hover:text-accent border-border"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => paginate(1)}
                            className="rounded-full hover:bg-white hover:text-accent border-border"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
