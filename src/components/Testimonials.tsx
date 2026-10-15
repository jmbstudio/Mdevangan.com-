import { useEffect, useRef, useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "Working with Mukesh was a game-changer for our startup. He understood our vision and helped us ship faster than we thought possible. The quality of code and design is exceptional.",
    author: 'Sarah Chen',
    role: 'Founder & CEO',
    company: 'TechFlow AI',
    avatar: 'SC',
    color: '#5b8dee',
  },
  {
    quote: "The AI automation system they built reduced our manual workload by 80%. What used to take days now happens automatically. Incredible ROI and delivered on time.",
    author: 'Marcus Johnson',
    role: 'VP Operations',
    company: 'ScaleUp Ventures',
    avatar: 'MJ',
    color: '#c9a84c',
  },
  {
    quote: "Best development experience I've had in 15 years. Clean code, proactive communication, and they actually care about the business outcome — not just writing features.",
    author: 'Elena Rodriguez',
    role: 'CTO',
    company: 'FinTech Solutions',
    avatar: 'ER',
    color: '#a78bfa',
  },
  {
    quote: "They delivered our mobile app on time and within budget. The attention to detail in the UX is exceptional — our users love the product and retention is up 40%.",
    author: 'David Park',
    role: 'Product Director',
    company: 'HealthTech Inc',
    avatar: 'DP',
    color: '#67e8f9',
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.test-header',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.test-header', start: 'top 80%' } }
      );
      gsap.fromTo('.test-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: '.test-grid', start: 'top 75%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const visible = [0, 1, 2].map(
    (offset) => testimonials[(current + offset) % testimonials.length]
  );

  const navigate = (dir: 'prev' | 'next') => {
    const el = cardRef.current;
    if (!el) return;
    gsap.to(el, {
      opacity: 0, x: dir === 'next' ? -20 : 20, duration: 0.2,
      onComplete: () => {
        setCurrent((prev) =>
          dir === 'next'
            ? (prev + 1) % testimonials.length
            : (prev - 1 + testimonials.length) % testimonials.length
        );
        gsap.fromTo(el, { opacity: 0, x: dir === 'next' ? 20 : -20 }, { opacity: 1, x: 0, duration: 0.3 });
      },
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative section-padding overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      <div className="noise-overlay" aria-hidden="true" />
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.04) 0%, transparent 60%)' }}
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="test-header flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 opacity-0">
          <div>
            <span className="label-tag mb-5 inline-flex">Client Reviews</span>
            <h2
              id="testimonials-heading"
              className="heading-lg text-white"
              style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
            >
              What Clients
              <br />
              <span className="text-gradient-gold">Say About Us</span>
            </h2>
          </div>
          {/* Controls */}
          <div className="flex items-center gap-3 self-start lg:self-auto">
            <button
              onClick={() => navigate('prev')}
              className="w-11 h-11 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:border-gold/50"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>
            <button
              onClick={() => navigate('next')}
              className="w-11 h-11 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:border-gold/50"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div ref={cardRef} className="test-grid grid md:grid-cols-3 gap-6" role="list" aria-label="Client testimonials">
          {visible.map((t, i) => (
            <article
              key={`${t.author}-${current}-${i}`}
              className="test-card opacity-0 relative p-7 rounded-2xl flex flex-col"
              style={{
                background: i === 1 ? 'rgba(201,168,76,0.06)' : 'rgba(10,13,26,0.6)',
                border: i === 1 ? '1px solid rgba(201,168,76,0.2)' : '1px solid rgba(255,255,255,0.06)',
              }}
              role="listitem"
            >
              {i === 1 && (
                <div
                  className="absolute top-0 left-0 right-0 h-px rounded-t-2xl"
                  style={{ background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)' }}
                  aria-hidden="true"
                />
              )}

              {/* Quote icon */}
              <Quote
                className="w-8 h-8 mb-5 flex-shrink-0"
                style={{ color: t.color, opacity: 0.4 }}
                aria-hidden="true"
              />

              {/* Stars */}
              <div className="flex gap-1 mb-4" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, si) => (
                  <Star key={si} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>

              <blockquote className="text-sm text-gray-400 leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3 mt-auto">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-syne font-bold text-sm flex-shrink-0"
                  style={{
                    background: `${t.color}20`,
                    border: `1px solid ${t.color}40`,
                    color: t.color,
                  }}
                  aria-hidden="true"
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{t.author}</p>
                  <p className="text-xs text-gray-500">{t.role}, {t.company}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10" role="tablist" aria-label="Testimonial navigation">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === current ? 32 : 6,
                background: i === current ? '#c9a84c' : 'rgba(255,255,255,0.15)',
              }}
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
