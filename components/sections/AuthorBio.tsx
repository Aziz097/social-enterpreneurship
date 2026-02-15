'use client';

import Image from 'next/image';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { Badge } from '@/components/ui/badge';

export default function AuthorBio() {
    return (
        <Section id="author" spacing="lg" variant="default">
            <Container size="lg">
                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    {/* Image Column */}
                    <div className="lg:col-span-5 relative">
                        <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl sticky top-24">
                            <Image
                                src="/images/author-headshot.webp"
                                alt="Rasheda L. Weaver, PhD"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-transparent p-8 text-white">
                                <p className="text-lg font-display italic">"Profit and purpose are not enemies. They are partners."</p>
                            </div>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="lg:col-span-7 space-y-6">
                        <Badge variant="accent" className="px-3 py-1">The Expert</Badge>
                        <h2 className="text-h2 font-display text-primary">
                            Rasheda L. Weaver, <span className="text-accent">PhD</span>
                        </h2>
                        <p className="text-xl text-secondary font-medium">
                            Social Entrepreneurship Expert & Strategist
                        </p>

                        <div className="prose prose-lg text-secondary/80 leading-relaxed space-y-4">
                            <p>
                                Dr. Rasheda L. Weaver is a leading voice in the social entrepreneurship space,
                                combining academic rigor with real-world experience to help aspiring and established
                                social entrepreneurs build sustainable, impactful ventures.
                            </p>
                            <p>
                                As the creator of the <strong>Framework for Actionable Humanity</strong>, she has successfully bridged the gap between
                                complex economic theory and practical, heart-driven application. Her work is cited globally and has
                                influenced policy makers, non-profit leaders, and corporate changemakers alike.
                            </p>
                            <p>
                                With a PhD focused on social enterprise development and over a decade of consulting experience
                                across North America and Europe, she has helped launch hundreds of successful social enterprises.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6">
                            <div className="p-4 bg-white rounded-2xl shadow-sm border border-border">
                                <h4 className="text-3xl font-bold text-primary mb-1">10+</h4>
                                <p className="text-sm text-muted">Years Experience</p>
                            </div>
                            <div className="p-4 bg-white rounded-2xl shadow-sm border border-border">
                                <h4 className="text-3xl font-bold text-primary mb-1">500+</h4>
                                <p className="text-sm text-muted">Founders Mentored</p>
                            </div>
                            <div className="p-4 bg-white rounded-2xl shadow-sm border border-border">
                                <h4 className="text-3xl font-bold text-primary mb-1">PhD</h4>
                                <p className="text-sm text-muted">Field Research</p>
                            </div>
                        </div>
                    </div>

                </div>
            </Container>
        </Section>
    );
}
