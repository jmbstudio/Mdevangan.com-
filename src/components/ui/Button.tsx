import { forwardRef, ButtonHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'magnetic';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, disabled, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-bg disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
      primary:
        'bg-gradient-to-r from-accent-blue to-accent-purple text-white hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(79,124,255,0.4)] focus:ring-accent-blue/50 relative overflow-hidden',
      secondary:
        'text-white hover:border-accent-blue/50 hover:scale-[1.02] focus:ring-accent-blue/50 border border-white/10 backdrop-blur-xl',
      ghost:
        'text-text-secondary hover:text-white hover:bg-white/5 backdrop-blur-xl focus:ring-accent-blue/50',
      magnetic:
        'relative overflow-hidden bg-gradient-to-r from-accent-blue to-accent-purple text-white hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(79,124,255,0.4)] focus:ring-accent-blue/50',
    };

    const sizes = {
      sm: 'px-5 py-2.5 text-sm gap-2',
      md: 'px-8 py-4 text-base gap-2.5',
      lg: 'px-10 py-5 text-lg gap-3',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        style={
          variant === 'secondary'
            ? { backgroundColor: 'rgba(255,255,255,0.04)' }
            : undefined
        }
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin h-5 w-5 shrink-0"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        )}
        <span className={cn('relative z-10 flex items-center gap-2', isLoading && 'opacity-0')}>
          {children}
        </span>
      </button>
    );
  }
);

Button.displayName = 'Button';
