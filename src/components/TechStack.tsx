import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const techs = [
  { name: 'React', color: '#61DBFB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', color: '#fff', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'TypeScript', color: '#3178C6', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Node.js', color: '#68A063', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Python', color: '#FFE873', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'React Native', color: '#61DBFB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'PostgreSQL', color: '#336791', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MongoDB', color: '#4DB33D', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Docker', color: '#2496ED', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'AWS', color: '#FF9900', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
  { name: 'Tailwind', color: '#38BDF8', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
  { name: 'OpenAI', color: '#c9a84c', icon: '' },
];

export function TechStack() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.tech-header',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: '.tech-header', start: 'top 80%' } }
      );
      gsap.fromTo('.tech-chip',
        { opacity: 0, scale: 0.85 },
        {
          opacity: 1, scale: 1, duration: 0.4, stagger: 0.05, ease: 'back.out(1.6)',
          scrollTrigger: { trigger: '.tech-chips', start: 'top 80%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
      aria-labelledby="tech-heading"
    >
      <div className="noise-overlay" aria-hidden="true" />
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(91,141,238,0.04) 0%, transparent 60%)' }}
      />

      <div className="container-custom relative z-10">
        <div className="tech-header text-center mb-16 opacity-0">
          <span className="label-tag mb-5 inline-flex">Tech Stack</span>
          <h2
            id="tech-heading"
            className="heading-lg text-white"
            style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
          >
            Tools of the Trade
          </h2>
          <p className="text-gray-400 mt-4 max-w-lg mx-auto">
            Modern, battle-tested stack chosen for performance and scalability.
          </p>
        </div>

        <div className="tech-chips flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
          {techs.map((tech) => (
            <div
              key={tech.name}
              className="tech-chip opacity-0 group flex items-center gap-2.5 px-4 py-2.5 rounded-full cursor-default transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {tech.icon ? (
                <img
                  src={tech.icon}
                  alt=""
                  className="w-4 h-4"
                  style={{ filter: 'brightness(1.1)' }}
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  aria-hidden="true"
                />
              ) : (
                <div
                  className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: tech.color, fontSize: 7, color: '#000', fontWeight: 900 }}
                  aria-hidden="true"
                >
                  AI
                </div>
              )}
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
