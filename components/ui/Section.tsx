import { HTMLAttributes, forwardRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface SectionProps extends HTMLAttributes<HTMLElement> {
    spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    variant?: 'default' | 'warm' | 'white';
}

const Section = forwardRef<HTMLElement, SectionProps>(
    ({ className, spacing = 'lg', variant = 'default', children, ...props }, ref) => {
        const spacings = {
            none: '',
            sm: 'py-8 md:py-12',
            md: 'py-12 md:py-16',
            lg: 'py-[var(--spacing-section)]',
            xl: 'py-24 md:py-32',
        };

        const variants = {
            default: 'bg-surface',
            warm: 'bg-surface-warm',
            white: 'bg-white',
        };

        return (
            <section
                ref={ref}
                className={cn(spacings[spacing], variants[variant], className)}
                {...props}
            >
                {children}
            </section>
        );
    }
);
Section.displayName = 'Section';

export default Section;
