import { useEffect, useRef } from 'react';
import { ArrowUpRight, Code2, Brain, Zap, Globe } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { icon: Code2, label: 'Full-Stack Dev', color: '#5b8dee' },
  { icon: Brain, label: 'AI & ML', color: '#c9a84c' },
  { icon: Zap, label: 'Automation', color: '#a78bfa' },
  { icon: Globe, label: 'SaaS Products', color: '#67e8f9' },
];

const timeline = [
  { year: '2019', desc: 'Started freelancing — built first client website.' },
  { year: '2021', desc: 'Scaled to full-stack web + mobile applications.' },
  { year: '2023', desc: 'Entered the AI space — built intelligent agents & automation.' },
  { year: 'Now', desc: 'Helping businesses ship premium digital products at scale.' },
];

export function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-img',
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: '.about-img', start: 'top 80%' } }
      );
      gsap.fromTo('.about-text-block',
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: '.about-text-block', start: 'top 80%' } }
      );
      gsap.fromTo('.timeline-item',
        { opacity: 0, x: 20 },
        {
          opacity: 1, x: 0, duration: 0.5, stagger: 0.12, ease: 'power2.out',
          scrollTrigger: { trigger: '.timeline-wrap', start: 'top 80%' },
        }
      );
      gsap.fromTo('.skill-chip',
        { opacity: 0, scale: 0.85 },
        {
          opacity: 1, scale: 1, duration: 0.4, stagger: 0.08, ease: 'back.out(1.4)',
          scrollTrigger: { trigger: '.skill-chips', start: 'top 85%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative section-padding overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="noise-overlay" aria-hidden="true" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — Image */}
          <div className="about-img opacity-0 relative">
            <div className="relative max-w-lg mx-auto lg:mx-0">
              {/* Gold accent border */}
              <div
                className="absolute -inset-0.5 rounded-2xl pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(201,168,76,0.4) 0%, transparent 50%, rgba(91,141,238,0.2) 100%)',
                }}
                aria-hidden="true"
              />

              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '3/4' }}>
                <img
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=900&q=85&auto=format&fit=crop"
                  alt="Developer at work"
                  className="image-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(5,7,15,0.85) 0%, rgba(5,7,15,0.1) 60%, transparent 100%)',
                  }}
                  aria-hidden="true"
                />

                {/* Badge overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div
                    className="glass rounded-xl px-5 py-4 flex items-center gap-4"
                    style={{ borderColor: 'rgba(201,168,76,0.2)' }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 font-syne font-black text-bg-dark"
                      style={{ background: 'linear-gradient(135deg, #c9a84c, #e8c96a)', fontSize: 14 }}
                    >
                      MD
                    </div>
                    <div>
                      <p className="font-syne font-bold text-white">Mukesh Dewangan</p>
                      <p className="text-xs text-gold">Full-Stack Developer & AI Engineer</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating stat card */}
              <div
                className="absolute -right-8 top-16 glass-gold rounded-xl px-5 py-4 text-center animate-float"
                style={{ zIndex: 10 }}
                aria-hidden="true"
              >
                <div className="font-syne font-extrabold text-3xl text-white">5+</div>
                <div className="text-xs text-gold uppercase tracking-widest mt-1">Years</div>
              </div>
            </div>
          </div>

          {/* Right — Text */}
          <div className="about-text-block opacity-0">
            <span className="label-tag mb-6 inline-flex">About Mukesh</span>

            <h2
              id="about-heading"
              className="heading-lg text-white mb-6"
              style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
            >
              The Developer
              <br />
              Behind the Work
            </h2>

            <div className="space-y-4 text-gray-400 leading-relaxed mb-10">
              <p>
                I'm Mukesh Dewangan — a full-stack developer and AI engineer based in India,
                passionate about building digital products that don't just look great, but
                actually move the needle for businesses.
              </p>
              <p>
                From crafting pixel-perfect interfaces to building intelligent AI agents and
                automation pipelines, I work across the full stack to deliver products that
                are fast, scalable, and future-proof.
              </p>
            </div>

            {/* Skill chips */}
            <div className="skill-chips flex flex-wrap gap-3 mb-10">
              {skills.map((skill) => (
                <div
                  key={skill.label}
                  className="skill-chip opacity-0 flex items-center gap-2 px-4 py-2.5 rounded-full"
                  style={{
                    background: `${skill.color}12`,
                    border: `1px solid ${skill.color}30`,
                  }}
                >
                  <skill.icon className="w-4 h-4 flex-shrink-0" style={{ color: skill.color }} aria-hidden="true" />
                  <span className="text-sm font-medium text-white">{skill.label}</span>
                </div>
              ))}
            </div>

            {/* Timeline */}
            <div className="timeline-wrap space-y-5 mb-10">
              <h3 className="font-syne font-semibold text-sm text-gray-500 uppercase tracking-widest mb-4">Journey</h3>
              {timeline.map((item) => (
                <div key={item.year} className="timeline-item opacity-0 flex items-start gap-4">
                  <div
                    className="font-syne font-bold text-xs px-3 py-1.5 rounded-full flex-shrink-0 mt-0.5"
                    style={{
                      background: 'rgba(201,168,76,0.12)',
                      border: '1px solid rgba(201,168,76,0.25)',
                      color: '#c9a84c',
                    }}
                  >
                    {item.year}
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed pt-1">{item.desc}</p>
                </div>
              ))}
            </div>

            <button
              className="btn-gold"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Work With Me
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
