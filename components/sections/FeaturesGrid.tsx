'use client';

import { motion } from 'framer-motion';
import { Settings, Globe, BarChart3 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

const features = [
    {
        icon: <Settings className="w-8 h-8 text-accent" />,
        title: 'Practical Tools',
        description: 'Step-by-step frameworks to design and launch your social enterprise.',
        delay: 0.1
    },
    {
        icon: <Globe className="w-8 h-8 text-accent" />,
        title: 'Global Case Studies',
        description: 'Real-world examples from North America, Europe, and beyond.',
        delay: 0.2
    },
    {
        icon: <BarChart3 className="w-8 h-8 text-accent" />,
        title: 'Impact Measurement',
        description: 'Advanced metrics to track your social and financial success.',
        delay: 0.3
    }
];

export default function FeaturesGrid() {
    return (
        <Section id="features" spacing="lg">
            <Container size="lg">
                <div className="text-center mb-16 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl text-primary"
                    >
                        Everything You Need to Transform Your Vision
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-secondary/80 max-w-2xl mx-auto"
                    >
                        A comprehensive toolkit for building a sustainable social enterprise that creates real impact.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: feature.delay }}
                        >
                            <Card className="h-full border-none shadow-md hover:shadow-xl transition-all bg-white/80 backdrop-blur-sm">
                                <CardContent className="p-8 h-full">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                                            {feature.icon}
                                        </div>
                                        <h3 className="text-xl font-semibold text-primary">
                                            {feature.title}
                                        </h3>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {feature.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
