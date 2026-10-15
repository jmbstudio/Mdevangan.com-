import { useEffect, useRef } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '50+', label: 'Projects Shipped' },
  { value: '5+', label: 'Years Experience' },
  { value: '100%', label: 'Client Satisfaction' },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);

  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' }, delay: 0.3 });

      tl.fromTo(badgeRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 }
      );
      tl.fromTo('.hero-line',
        { opacity: 0, y: 60, skewY: 2 },
        { opacity: 1, y: 0, skewY: 0, duration: 0.9, stagger: 0.12 },
        '-=0.3'
      );
      tl.fromTo(subRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.5'
      );
      tl.fromTo(ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.4'
      );
      tl.fromTo(statsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.3'
      );
      tl.fromTo(imgRef.current,
        { opacity: 0, scale: 1.05, x: 40 },
        { opacity: 1, scale: 1, x: 0, duration: 1.1, ease: 'power3.out' },
        '-=1.2'
      );

      // Parallax on scroll
      gsap.to(imgRef.current, {
        yPercent: -12,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-mesh"
      aria-labelledby="hero-heading"
    >
      {/* Noise texture */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Subtle grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Gold accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)' }}
        aria-hidden="true"
      />

      <div className="container-custom relative z-10 w-full pt-20 lg:pt-0">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center min-h-screen lg:min-h-0 py-20 lg:py-32">

          {/* LEFT — Text */}
          <div className="max-w-2xl">
            {/* Badge */}
            <span ref={badgeRef} className="label-tag mb-8 inline-flex opacity-0">
              <span
                className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse"
                aria-hidden="true"
              />
              Available for Projects
            </span>

            {/* Headline */}
            <h1
              id="hero-heading"
              ref={headRef}
              className="heading-xl text-white mb-8"
              style={{ fontSize: 'clamp(44px, 6vw, 88px)' }}
            >
              <div className="hero-line overflow-hidden">
                <span className="block opacity-0">We Build</span>
              </div>
              <div className="hero-line overflow-hidden">
                <span className="block opacity-0">
                  <em
                    className="not-italic text-gradient-gold"
                    style={{ fontStyle: 'normal' }}
                  >
                    Premium
                  </em>{' '}
                  Digital
                </span>
              </div>
              <div className="hero-line overflow-hidden">
                <span className="block opacity-0">Products.</span>
              </div>
            </h1>

            <p
              ref={subRef}
              className="text-lg lg:text-xl text-gray-400 leading-relaxed mb-10 max-w-xl opacity-0"
            >
              From stunning websites and mobile apps to intelligent AI agents —
              Mukesh Dewangan turns ambitious ideas into scalable digital products
              that drive real business growth.
            </p>

            {/* CTAs */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 mb-14 opacity-0">
              <button
                className="btn-gold"
                onClick={() => scrollTo('#contact')}
              >
                Start a Project
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button
                className="btn-outline"
                onClick={() => scrollTo('#work')}
              >
                View Work
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Stats */}
            <div ref={statsRef} className="flex items-center gap-8 opacity-0">
              {stats.map((s, i) => (
                <div key={s.label}>
                  <div className="font-syne font-800 text-2xl text-white mb-0.5">{s.value}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest">{s.label}</div>
                  {i < stats.length - 1 && (
                    <></>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Image */}
          <div
            ref={imgRef}
            className="relative hidden lg:block opacity-0"
            role="img"
            aria-label="Mukesh Dewangan - Digital Product Builder"
          >
            {/* Main image card */}
            <div className="relative">
              {/* Decorative frame */}
              <div
                className="absolute -inset-px rounded-2xl pointer-events-none z-10"
                style={{
                  background: 'linear-gradient(135deg, rgba(201,168,76,0.3), transparent 40%, rgba(91,141,238,0.2))',
                }}
                aria-hidden="true"
              />

              {/* Image */}
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{ aspectRatio: '4/5', maxWidth: 480, marginLeft: 'auto' }}
              >
                <img
                  src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=960&q=85&auto=format&fit=crop"
                  alt="Developer workspace"
                  className="image-cover"
                  loading="eager"
                />
                {/* Dark overlay gradient */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(5,7,15,0.8) 0%, rgba(5,7,15,0.2) 50%, transparent 100%)',
                  }}
                  aria-hidden="true"
                />
              </div>

              {/* Floating card — experience */}
              <div
                className="absolute -left-12 top-20 glass-gold rounded-xl px-5 py-4 animate-float"
                style={{ zIndex: 20 }}
              >
                <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">Experience</p>
                <p className="font-syne font-bold text-2xl text-white">5+ Years</p>
                <p className="text-xs text-gold mt-1">Full-Stack + AI</p>
              </div>

              {/* Floating card — projects */}
              <div
                className="absolute -right-8 bottom-28 glass-gold rounded-xl px-5 py-4"
                style={{ zIndex: 20, animation: 'float-slow 9s ease-in-out infinite reverse' }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #c9a84c, #e8c96a)' }}
                  >
                    <span className="text-bg-dark font-black text-sm font-syne">✓</span>
                  </div>
                  <div>
                    <p className="font-syne font-bold text-white text-lg leading-none">50+</p>
                    <p className="text-xs text-gray-400 mt-0.5">Projects Shipped</p>
                  </div>
                </div>
              </div>

              {/* Bottom label */}
              <div
                className="absolute bottom-6 left-6 right-6 z-20"
              >
                <div
                  className="glass rounded-xl px-5 py-3 flex items-center justify-between"
                >
                  <div>
                    <p className="font-syne font-bold text-white">Mukesh Dewangan</p>
                    <p className="text-xs text-gold">Digital Product Builder & AI Developer</p>
                  </div>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #c9a84c, #e8c96a)' }}
                    aria-hidden="true"
                  >
                    <span className="text-bg-dark font-black text-xs font-syne">MD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        aria-hidden="true"
      >
        <div
          className="w-px h-16 relative overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.1)' }}
        >
          <div
            className="absolute top-0 left-0 w-full bg-gold"
            style={{
              height: '50%',
              animation: 'scrollLine 2s ease-in-out infinite',
            }}
          />
        </div>
        <span className="text-xs text-gray-600 uppercase tracking-[0.2em]">Scroll</span>
      </div>

      <style>{`
        @keyframes scrollLine {
          0% { top: -50%; }
          100% { top: 100%; }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
      `}</style>
    </section>
  );
}
