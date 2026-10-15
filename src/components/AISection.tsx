import { useEffect, useRef } from 'react';
import { Bot, Brain, Zap, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  { icon: Bot, label: 'Autonomous Agents', desc: 'Agents that take actions, not just answer questions.' },
  { icon: Brain, label: 'RAG Systems', desc: 'AI that knows your business deeply and answers accurately.' },
  { icon: Zap, label: 'AI Automation', desc: 'Pipelines that eliminate hours of manual work daily.' },
];

export function AISection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.ai-content',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: '.ai-content', start: 'top 75%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
      aria-labelledby="ai-heading"
    >
      <div className="noise-overlay" aria-hidden="true" />

      {/* Background image with overlay */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1600&q=80&auto=format&fit=crop"
          alt=""
          className="image-cover"
          style={{ filter: 'brightness(0.15)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(5,7,15,0.95) 0%, rgba(5,7,15,0.7) 50%, rgba(5,7,15,0.95) 100%)',
          }}
        />
      </div>

      {/* Gold top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)' }}
        aria-hidden="true"
      />

      <div className="container-custom relative z-10">
        <div className="ai-content opacity-0 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <div>
            <span className="label-tag mb-6 inline-flex">AI & Automation</span>
            <h2
              id="ai-heading"
              className="heading-lg text-white mb-6"
              style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
            >
              Intelligent Systems
              <br />
              <span className="text-gradient-gold">That Work for You</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
              We build AI agents, automation pipelines, and smart workflows that make your
              business run on autopilot. No more repetitive tasks. No more missed opportunities.
            </p>
            <button
              className="btn-gold"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore AI Solutions
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right */}
          <div className="space-y-5">
            {capabilities.map((cap, i) => (
              <div
                key={cap.label}
                className="flex items-start gap-5 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 cursor-default"
                style={{
                  background: 'rgba(201,168,76,0.05)',
                  border: '1px solid rgba(201,168,76,0.15)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #c9a84c20, #e8c96a20)', border: '1px solid rgba(201,168,76,0.3)' }}
                >
                  <cap.icon className="w-5 h-5 text-gold" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-syne font-bold text-white mb-1.5">{cap.label}</h3>
                  <p className="text-sm text-gray-400">{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
