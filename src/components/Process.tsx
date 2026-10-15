import { useEffect, useRef } from 'react';
import { MessageSquare, Lightbulb, Code2, Rocket } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Discovery Call',
    description: 'We kick off with a free consultation to understand your vision, goals, and constraints. No fluff — just clarity.',
    color: '#5b8dee',
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Strategy & Design',
    description: 'We map out the architecture, tech stack, and UX. You approve before a single line of code is written.',
    color: '#c9a84c',
  },
  {
    number: '03',
    icon: Code2,
    title: 'Build & Iterate',
    description: 'Rapid development with weekly updates. You see progress, give feedback, and we adjust in real time.',
    color: '#a78bfa',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Launch & Scale',
    description: 'We deploy, test, and hand over a product that\'s ready to grow. Post-launch support included.',
    color: '#67e8f9',
  },
];

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.process-header',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.process-header', start: 'top 80%' } }
      );
      gsap.fromTo('.process-step',
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: '.process-steps', start: 'top 75%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative section-padding overflow-hidden"
      aria-labelledby="process-heading"
    >
      <div className="noise-overlay" aria-hidden="true" />
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse at 50% 60%, rgba(167,139,250,0.04) 0%, transparent 60%)' }}
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="process-header text-center max-w-2xl mx-auto mb-20 opacity-0">
          <span className="label-tag mb-5 inline-flex">How It Works</span>
          <h2
            id="process-heading"
            className="heading-lg text-white mb-5"
            style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
          >
            From Idea to{' '}
            <span className="text-gradient-gold">Shipped Product</span>
          </h2>
          <p className="text-gray-400 leading-relaxed">
            A streamlined process designed to minimize back-and-forth and maximize output.
          </p>
        </div>

        {/* Steps */}
        <div className="process-steps grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="process-step opacity-0 relative p-7 rounded-2xl group"
              style={{
                background: 'rgba(10,13,26,0.6)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div
                  className="absolute top-10 -right-3 w-6 h-px hidden lg:block"
                  style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.1), transparent)' }}
                  aria-hidden="true"
                />
              )}

              {/* Number */}
              <div
                className="font-syne font-extrabold text-6xl leading-none mb-6"
                style={{ color: `${step.color}15` }}
                aria-hidden="true"
              >
                {step.number}
              </div>

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: `${step.color}15`,
                  border: `1px solid ${step.color}30`,
                }}
              >
                <step.icon className="w-5 h-5" style={{ color: step.color }} aria-hidden="true" />
              </div>

              <h3 className="font-syne font-bold text-lg text-white mb-3">{step.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${step.color}60, transparent)` }}
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
