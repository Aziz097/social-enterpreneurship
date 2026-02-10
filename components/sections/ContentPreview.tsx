'use client';

import { motion } from 'framer-motion';
import { BookOpen, Star, Zap, Users, Globe, TrendingUp, ShieldCheck, PenTool } from 'lucide-react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const highlights = [
    {
        id: 1,
        title: 'The Profit-Purpose Hybrid',
        desc: 'Why traditional non-profits are failing and why pure capitalism is incomplete.',
        icon: <Zap className="w-6 h-6 text-yellow-500" />,
        color: 'bg-yellow-500/10 text-yellow-500'
    },
    {
        id: 2,
        title: 'Impact Measurement 2.0',
        desc: 'Move beyond "vanity metrics" to data that attracts serious investors.',
        icon: <TrendingUp className="w-6 h-6 text-green-500" />,
        color: 'bg-green-500/10 text-green-500'
    },
    {
        id: 3,
        title: 'Community Co-Design',
        desc: 'How to build WITH your beneficiaries, not just FOR them.',
        icon: <Users className="w-6 h-6 text-blue-500" />,
        color: 'bg-blue-500/10 text-blue-500'
    },
    {
        id: 4,
        title: 'Global Case Studies',
        desc: 'Lessons from 20+ successful social enterprises across 5 continents.',
        icon: <Globe className="w-6 h-6 text-purple-500" />,
        color: 'bg-purple-500/10 text-purple-500'
    }
];

const allChapters = [
    'Foundations of Social Entrepreneurship',
    'Identifying Your Social Mission',
    'Market Research for Social Enterprises',
    'Business Model Innovation',
    'Legal Structures & Governance',
    'Funding Strategies (Grants vs. Equity)',
    'Building Your Team & Culture',
    'Marketing with Purpose',
    'Measuring Impact (SROI)',
    'Scaling for Greater Good'
];

export default function ContentPreview() {
    return (
        <Section id="chapters" spacing="lg">
            <Container size="lg">
                <div className="text-center mb-16">
                    <Badge variant="outline" className="mb-4 border-accent text-accent px-4 py-1 text-sm">Inside the E-book</Badge>
                    <h2 className="text-3xl md:text-5xl font-display text-primary mb-4">Not Just Theory. <span className="text-accent italic">A Blueprint.</span></h2>
                    <p className="text-secondary/80 max-w-2xl mx-auto text-lg">
                        10 comprehensive chapters, 200+ pages of actionable strategies, and real-world tools.
                    </p>
                </div>

                {/* Hero Grid Highlights */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {highlights.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Card className="h-full border hover:border-accent/30 transition-all hover:shadow-lg group">
                                <CardContent className="p-6">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${item.color} group-hover:scale-110 transition-transform`}>
                                        {item.icon}
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">{item.title}</h3>
                                    <p className="text-sm text-secondary/80 leading-relaxed">{item.desc}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Visual Chapter List & Bonus Split */}
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
                    {/* Left: Chapter List */}
                    <div className="bg-white rounded-3xl p-8 border border-border shadow-sm">
                        <h3 className="text-2xl font-display text-primary mb-6 flex items-center gap-2">
                            <BookOpen className="text-accent" /> Complete Table of Contents
                        </h3>
                        <ul className="space-y-0">
                            {allChapters.map((chapter, i) => (
                                <li key={i} className="flex items-center gap-4 p-4 border-b border-border last:border-0 hover:bg-surface-warm transition-colors rounded-lg group cursor-default">
                                    <span className="text-xs font-bold text-muted-foreground w-6 h-6 flex items-center justify-center border border-border rounded-full group-hover:border-accent group-hover:text-accent transition-colors">
                                        {i + 1}
                                    </span>
                                    <span className="text-secondary font-medium group-hover:text-primary transition-colors">
                                        {chapter}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right: Bonus Visual */}
                    <div className="space-y-8">
                        <div className="bg-primary text-white rounded-3xl p-8 md:p-10 relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                            <div className="relative z-10">
                                <Badge className="bg-white/10 text-white border-none hover:bg-white/20 mb-6 px-3 py-1">Bonus Material</Badge>
                                <h3 className="text-3xl font-display mb-4">Includes the <span className="text-accent">Actionable Workbook</span></h3>
                                <p className="text-primary-light mb-8 opacity-90">
                                    Don't just read—do. Every purchase includes a printable PDF workbook with templates for your logic model, budget, and impact assessment.
                                </p>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                                        <PenTool className="w-6 h-6 text-accent mb-2" />
                                        <div className="text-sm font-semibold">Fillable Templates</div>
                                    </div>
                                    <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                                        <ShieldCheck className="w-6 h-6 text-accent mb-2" />
                                        <div className="text-sm font-semibold">Readiness Checklist</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* "Sneak Peek" or Testimonial could go here */}
                        <div className="bg-surface-warm rounded-3xl p-8 border border-accent/10 flex items-start gap-4">
                            <Star className="w-8 h-8 text-yellow-400 fill-yellow-400 flex-shrink-0" />
                            <div>
                                <p className="text-lg text-primary italic mb-4">"The chapter on 'Funding Strategies' alone saved me months of wasted effort. I finally understood why my grant applications were getting rejected."</p>
                                <p className="font-bold text-sm text-secondary">— Sarah J., Education Non-profit Founder</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
