import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 50, suffix: '+', label: 'Projects Delivered', desc: 'Across web, mobile & AI' },
  { value: 5, suffix: '+', label: 'Years Experience', desc: 'Full-stack & AI systems' },
  { value: 100, suffix: '%', label: 'Client Satisfaction', desc: 'Verified by reviews' },
  { value: 15, suffix: '+', label: 'Happy Clients', desc: 'Startups to enterprises' },
];

export function Stats() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.stat-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      // Count-up animation
      stats.forEach((stat, i) => {
        const el = document.querySelector(`.stat-num-${i}`);
        if (!el) return;
        const counter = { val: 0 };
        gsap.to(counter, {
          val: stat.value,
          duration: 1.8,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
          onUpdate: () => {
            el.textContent = Math.round(counter.val) + stat.suffix;
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 overflow-hidden"
      aria-label="Key statistics"
    >
      {/* Top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)' }}
        aria-hidden="true"
      />

      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="stat-card text-center lg:text-left p-6 lg:p-8 rounded-2xl glass opacity-0"
              style={{ borderColor: 'rgba(255,255,255,0.06)' }}
            >
              <div
                className={`stat-num-${i} font-syne font-extrabold text-4xl lg:text-5xl text-white mb-2`}
                aria-label={`${stat.value}${stat.suffix}`}
              >
                {stat.value}{stat.suffix}
              </div>
              <div className="font-semibold text-sm text-white mb-1">{stat.label}</div>
              <div className="text-xs text-gray-500">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
