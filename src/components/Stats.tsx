import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface StatItem {
  value: string;
  label: string;
  animateTo?: number;
  suffix?: string;
}

const stats: StatItem[] = [
  { value: '10+', label: 'Digital Products Built', animateTo: 10, suffix: '+' },
  { value: '5+', label: 'Technologies Mastered', animateTo: 5, suffix: '+' },
  { value: 'AI', label: 'Automation Focused' },
  { value: '24/7', label: 'Innovation Mindset' },
];

function AnimatedCounter({
  end,
  duration = 2,
  suffix = '',
  className,
}: {
  end: number;
  duration?: number;
  suffix?: string;
  className?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easedProgress * end));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(end);
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return (
    <span className={className}>
      {count}{suffix}
    </span>
  );
}

export function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-16 lg:py-24 border-y border-white/[0.08] overflow-hidden"
      aria-label="Key statistics"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(90deg, rgba(79,124,255,0.04) 0%, transparent 50%, rgba(139,92,246,0.04) 100%)',
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.12, duration: 0.6, ease: 'easeOut' }}
              className="relative"
            >
              {/* Accent line */}
              <motion.div
                className="w-8 h-0.5 mb-4 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #4F7CFF, #8B5CF6)',
                }}
                initial={{ scaleX: 0 }}
                animate={isVisible ? { scaleX: 1 } : {}}
                transition={{ delay: index * 0.12 + 0.3, duration: 0.5 }}
                aria-hidden="true"
              />

              {/* Value */}
              {stat.animateTo !== undefined && isVisible ? (
                <AnimatedCounter
                  end={stat.animateTo}
                  suffix={stat.suffix}
                  className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-none block"
                />
              ) : (
                <span className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-none block">
                  {stat.value}
                </span>
              )}

              {/* Label */}
              <p className="mt-3 text-text-secondary text-base lg:text-lg font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
