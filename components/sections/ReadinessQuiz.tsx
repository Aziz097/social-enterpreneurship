'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, RefreshCw, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

const questions = [
    {
        id: 1,
        text: "Do you have a clear definition of the social problem you want to solve?",
        options: ["Not yet", "Vaguely", "Yes, clearly defined"]
    },
    {
        id: 2,
        text: "Have you identified a potential revenue stream beyond donations?",
        options: ["No, relying on grants", "Exploring ideas", "Yes, tested model"]
    },
    {
        id: 3,
        text: "Do you understand the legal structures available for social enterprises?",
        options: ["No idea", "Some knowledge", "Fully understand"]
    },
    {
        id: 4,
        text: "Have you mapped out your beneficiary stakeholders vs. customer stakeholders?",
        options: ["They are the same", "Started mapping", "Yes, distinct groups"]
    },
    {
        id: 5,
        text: "Do you have a framework for measuring your social impact?",
        options: ["No", "Basic metrics", "Comprehensive logic model"]
    }
];

export default function ReadinessQuiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (optionIndex: number) => {
        // Simple scoring logic: 0 = 0pts, 1 = 1pt, 2 = 2pts
        setScore((prev) => prev + optionIndex);

        if (currentQuestion < questions.length - 1) {
            setTimeout(() => setCurrentQuestion((prev) => prev + 1), 300);
        } else {
            setTimeout(() => setShowResult(true), 300);
        }
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowResult(false);
    };

    const maxScore = questions.length * 2;
    const percentage = Math.round((score / maxScore) * 100);

    let resultMessage = "";
    if (percentage < 50) resultMessage = "You're in the early stages. This book will be your foundational guide.";
    else if (percentage < 80) resultMessage = "You have a solid start! Use the framework to refine and scale.";
    else resultMessage = "You're ready to launch! Optimize your impact with advanced strategies.";

    return (
        <Section id="quiz" variant="white" spacing="lg">
            <Container size="md">
                <div className="text-center mb-10">
                    <h2 className="text-h2 font-display text-primary mb-2">Are You Ready to Launch?</h2>
                    <p className="text-secondary/70">Take the 1-minute assessment</p>
                </div>

                <div className="min-h-[400px] flex flex-col justify-center relative overflow-hidden">
                    <Card className="w-full h-full border-none shadow-none bg-transparent">
                        <CardContent className="p-8 md:p-12">
                            <AnimatePresence mode="wait">
                                {!showResult ? (
                                    <motion.div
                                        key="question"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="w-full max-w-xl mx-auto"
                                    >
                                        <div className="flex justify-between text-sm text-secondary mb-8 font-medium">
                                            <span>Question {currentQuestion + 1} of {questions.length}</span>
                                            <span>{Math.round(((currentQuestion) / questions.length) * 100)}% Complete</span>
                                        </div>

                                        {/* Progress Bar */}
                                        <div className="w-full h-2 bg-gray-100 rounded-full mb-8 overflow-hidden">
                                            <motion.div
                                                className="h-full bg-accent"
                                                initial={{ width: 0 }}
                                                animate={{ width: `${((currentQuestion) / questions.length) * 100}%` }}
                                            />
                                        </div>

                                        <h3 className="text-2xl font-semibold text-primary mb-8 leading-snug">
                                            {questions[currentQuestion].text}
                                        </h3>

                                        <div className="space-y-3">
                                            {questions[currentQuestion].options.map((option, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => handleAnswer(index)}
                                                    className="w-full text-left p-5 rounded-xl border-2 border-secondary/20 bg-surface-warm/50 hover:bg-white hover:border-accent hover:shadow-lg hover:-translate-y-1 transition-all flex items-center justify-between group"
                                                >
                                                    <span className="text-lg text-secondary font-medium group-hover:text-primary transition-colors">{option}</span>
                                                    <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">
                                                        <ChevronRight className="w-5 h-5 opacity-60 group-hover:opacity-100" />
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="result"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center w-full"
                                    >
                                        <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 text-accent">
                                            <CheckCircle size={40} />
                                        </div>

                                        <h3 className="text-3xl font-display text-primary mb-2">Your Readiness Score</h3>
                                        <div className="text-5xl font-bold text-accent mb-4">{percentage}%</div>

                                        <p className="text-xl text-secondary mb-8 max-w-lg mx-auto">
                                            {resultMessage}
                                        </p>

                                        <div className="bg-surface-warm p-6 rounded-2xl mb-8 max-w-lg mx-auto text-left">
                                            <h4 className="font-semibold text-primary mb-2">Recommended Next Step:</h4>
                                            <p className="text-sm text-secondary">
                                                Based on your score, we've identified specific chapters in the book that will address your gaps immediately.
                                            </p>
                                        </div>

                                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                                            <Button variant="default" onClick={() => document.getElementById('cta')?.scrollIntoView()}>
                                                Get the E-book Now <ArrowRight className="ml-2 w-4 h-4" />
                                            </Button>
                                            <Button variant="ghost" onClick={resetQuiz} className="text-muted">
                                                <RefreshCw className="mr-2 w-4 h-4" /> Retake Quiz
                                            </Button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </CardContent>
                    </Card>
                </div>
            </Container>
        </Section>
    );
}
