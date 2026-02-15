import { HTMLAttributes, forwardRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
    ({ className, size = 'lg', children, ...props }, ref) => {
        const sizes = {
            sm: 'max-w-3xl',
            md: 'max-w-5xl',
            lg: 'max-w-7xl',
            xl: 'max-w-[1400px]',
            full: 'max-w-full',
        };

        return (
            <div
                ref={ref}
                className={cn('mx-auto px-[var(--spacing-container)]', sizes[size], className)}
                {...props}
            >
                {children}
            </div>
        );
    }
);
Container.displayName = 'Container';

export default Container;
