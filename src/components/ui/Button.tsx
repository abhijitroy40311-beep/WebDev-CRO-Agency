import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '../../lib/utils';
import { trackEvent, TRACKING_EVENTS } from '../../lib/tracking';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'whatsapp' | 'link';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
  trackingEvent?: string;
  trackingParams?: Record<string, any>;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = 'primary', size = 'md', trackingEvent, trackingParams, onClick, asChild = false, ...props },
    ref
  ) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-white';
    
    const variants = {
      primary: 'bg-slate-900 text-white hover:bg-slate-800',
      secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200',
      outline: 'border border-slate-200 hover:bg-slate-100 hover:text-slate-900',
      ghost: 'hover:bg-slate-100 hover:text-slate-900',
      whatsapp: 'bg-green-600 text-white hover:bg-green-700',
      link: 'underline-offset-4 hover:underline text-slate-900',
    };
    
    const sizes = {
      sm: 'h-9 px-3',
      md: 'h-10 py-2 px-4',
      lg: 'h-12 px-8 text-base',
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (trackingEvent) {
        trackEvent(trackingEvent, trackingParams);
      }
      if (onClick) onClick(e);
    };

    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        onClick={handleClick}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };
