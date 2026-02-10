'use client';

import Link from 'next/link';
import Container from '@/components/ui/Container';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-border py-12">
            <Container size="md">
                <div className="flex flex-col items-center justify-center text-center space-y-6">
                    {/* Brand */}
                    <Link href="/" className="font-display font-bold text-2xl tracking-tight text-primary hover:opacity-80 transition-opacity">
                        Social<span className="text-accent">Entrepreneurship</span>
                    </Link>

                    {/* Simple Navigation */}
                    <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-medium text-secondary/80">
                        <Link href="#features" className="hover:text-primary transition-colors">Features</Link>
                        <Link href="#chapters" className="hover:text-primary transition-colors">Chapters</Link>
                        <Link href="#author" className="hover:text-primary transition-colors">Author</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Support</Link>
                    </nav>

                    {/* Legal / Copyright */}
                    <div className="text-xs text-muted-foreground pt-6 border-t border-border w-full max-w-xs mx-auto">
                        <p className="mb-2">© {new Date().getFullYear()} Rasheda L. Weaver, PhD.</p>
                        <div className="flex justify-center gap-4">
                            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
                            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
