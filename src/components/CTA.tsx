import { useEffect, useRef } from 'react';
import { ArrowUpRight, MessageSquare } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function CTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.cta-content',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: '.cta-content', start: 'top 80%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <div className="noise-overlay" aria-hidden="true" />

      <div className="container-custom relative z-10">
        <div
          className="cta-content opacity-0 relative rounded-3xl overflow-hidden p-12 lg:p-20 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(91,141,238,0.06) 50%, rgba(167,139,250,0.06) 100%)',
            border: '1px solid rgba(201,168,76,0.2)',
          }}
        >
          {/* Background image */}
          <div className="absolute inset-0" aria-hidden="true">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1600&q=80&auto=format&fit=crop"
              alt=""
              className="image-cover"
              style={{ filter: 'brightness(0.05) saturate(0.5)' }}
            />
          </div>
          <div className="noise-overlay" aria-hidden="true" />

          {/* Top accent */}
          <div
            className="absolute top-0 left-0 right-0 h-px pointer-events-none"
            style={{ background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)' }}
            aria-hidden="true"
          />

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="label-tag mb-6 inline-flex">Ready to Build?</span>

            <h2
              id="cta-heading"
              className="heading-xl text-white mb-6"
              style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}
            >
              Let's Build Something
              <br />
              <span className="text-gradient-gold">Extraordinary.</span>
            </h2>

            <p className="text-lg text-gray-400 leading-relaxed mb-10 max-w-xl mx-auto">
              Whether you're a founder with a vision or an enterprise ready to innovate —
              let's create a digital product that makes a real impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="btn-gold text-base px-10 py-4"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start a Project <ArrowUpRight className="w-4 h-4" />
              </button>
              <a
                href="mailto:mdewangan8180@gmail.com"
                className="btn-outline text-base px-10 py-4"
              >
                <MessageSquare className="w-4 h-4" />
                Email Directly
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center justify-center gap-6 mt-10 text-sm text-gray-500">
              <span>✓ Free consultation</span>
              <span className="w-px h-4 bg-white/10" aria-hidden="true" />
              <span>✓ Response in 24 hrs</span>
              <span className="w-px h-4 bg-white/10" aria-hidden="true" />
              <span>✓ NDA available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
