'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { motion } from 'framer-motion';

const pillars = [
    {
        id: 'foundational',
        title: 'Foundational Rigor',
        concept: 'Separating signal from noise in social impact.',
        desc: 'Many social entrepreneurs fail because they build on passion alone. This pillar establishes the scientific and economic theories that distinguish a hobby from a high-growth social enterprise.',
        focus: [
            'Deconstructing the "Charity Model" vs. "Social Enterprise"',
            'Systems Thinking for complex social problems',
            'The history and future of the Fourth Sector'
        ],
        outcome: 'A validated problem statement and a business thesis backed by data, not just intuition.',
        colorStyle: 'bg-primary',
        textColor: 'text-white'
    },
    {
        id: 'strategic',
        title: 'Strategic Design',
        concept: 'Designing for the user, financing for the mission.',
        desc: 'You cannot help a community you do not understand. This pillar focuses on human-centered design principles applied specifically to beneficiary populations and payer markets.',
        focus: [
            'Beneficiary vs. Customer Stakeholder Mapping',
            'Logic Models & Theory of Change construction',
            'Lean Startup methodology adapted for impact'
        ],
        outcome: 'A clear strategic roadmap that aligns your social mission with market demand.',
        colorStyle: 'bg-accent',
        textColor: 'text-white'
    },
    {
        id: 'economic',
        title: 'Economic Sustainability',
        concept: 'Profit is the engine of impact.',
        desc: 'Moving beyond the grant cycle. We explore diverse revenue models that allow your enterprise to become self-sustaining and scalable without compromising your values.',
        focus: [
            '7 Proven Social Enterprise Revenue Models',
            'Pricing strategies for social goods',
            'Financial projections & break-even analysis'
        ],
        outcome: 'A diversified financial model that ensures long-term operational stability.',
        colorStyle: 'bg-primary',
        textColor: 'text-white'
    },
    {
        id: 'impact',
        title: 'Impact Optimization',
        concept: 'Scaling what works, measuring what matters.',
        desc: 'Growth without measurement is guessing. This pillar provides the tools to track your social return on investment (SROI) and prepare your venture for institutional scale.',
        focus: [
            'Metrics that matter: IRIS+, GIIN, and custom KPIs',
            'Legal structures for scale (B-Corp, L3C, Hybrid)',
            'Building a data-driven culture of impact'
        ],
        outcome: 'An institutional-grade impact report ready for investors and partners.',
        colorStyle: 'bg-accent',
        textColor: 'text-white'
    }
];

export default function FrameworkCircle() {
    return (
        <Section spacing="lg" variant="warm">
            <Container size="lg">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-display text-primary mb-6">
                        The Framework for <span className="text-accent italic">Actionable Humanity</span>
                    </h2>
                    <p className="text-xl text-secondary/80 max-w-2xl mx-auto">
                        A rigorous, four-step scientific approach to building businesses that matter.
                        We move you from abstract ideas to concrete execution.
                    </p>
                </div>

                <Tabs defaultValue="foundational" className="w-full">
                    <div className="flex justify-center mb-10 overflow-x-auto pb-4">
                        <TabsList className="bg-white border border-border p-1 rounded-full shadow-sm w-full md:w-auto flex md:inline-flex min-w-[320px]">
                            {pillars.map((pillar, index) => (
                                <TabsTrigger
                                    key={pillar.id}
                                    value={pillar.id}
                                    className="rounded-full px-4 md:px-8 py-2 md:py-3 text-sm md:text-base data-[state=active]:bg-primary data-[state=active]:text-white transition-all flex-1 md:flex-none whitespace-nowrap"
                                >
                                    {index + 1}. {pillar.title}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </div>

                    {pillars.map((pillar, index) => (
                        <TabsContent key={pillar.id} value={pillar.id} className="mt-0 focus-visible:outline-none">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                <Card className="border-none shadow-2xl bg-white overflow-hidden rounded-3xl">
                                    <div className="grid md:grid-cols-12 min-h-[450px]">
                                        {/* Left: Key Info */}
                                        <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center">
                                            <span className="text-accent font-bold tracking-wider uppercase text-xs mb-3 flex items-center gap-2">
                                                <span className="w-8 h-[1px] bg-accent"></span>
                                                {pillar.concept}
                                            </span>
                                            <h2 className="text-3xl md:text-4xl font-display text-primary mb-6">{pillar.title}</h2>
                                            <p className="text-lg text-secondary/80 leading-relaxed mb-8">
                                                {pillar.desc}
                                            </p>
                                            <div className="space-y-4 bg-muted/30 p-6 rounded-xl border border-border/50">
                                                <h4 className="font-semibold text-primary text-sm uppercase tracking-wide opacity-70">Focus Areas</h4>
                                                <ul className="grid gap-3">
                                                    {pillar.focus.map((item, i) => (
                                                        <li key={i} className="flex items-start gap-3 text-primary font-medium">
                                                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Right: Outcome/Visual (Colored Side) */}
                                        <div className={`${pillar.colorStyle} md:col-span-5 p-8 md:p-12 ${pillar.textColor} flex flex-col justify-center relative overflow-hidden group`}>
                                            {/* Subtle Texture Overlay */}
                                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
                                            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />

                                            <div className="relative z-10">
                                                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 shadow-inner border border-white/10">
                                                    <span className="text-3xl font-bold font-display">0{index + 1}</span>
                                                </div>
                                                <h4 className="text-lg font-medium mb-4 opacity-80 uppercase tracking-widest text-xs">Desired Outcome</h4>
                                                <p className="text-2xl md:text-3xl font-display leading-tight italic">
                                                    "{pillar.outcome}"
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        </TabsContent>
                    ))}
                </Tabs>
            </Container>
        </Section>
    );
}
