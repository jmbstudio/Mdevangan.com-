import { useState } from 'react';
import { motion } from 'framer-motion';

interface TechItem {
  name: string;
  icon: string;
  color: string;
  category: string;
}

const techStack: TechItem[] = [
  { name: 'React', icon: '⚛', color: '#61DAFB', category: 'Frontend' },
  { name: 'Next.js', icon: '▲', color: '#FFFFFF', category: 'Framework' },
  { name: 'TypeScript', icon: 'TS', color: '#3178C6', category: 'Language' },
  { name: 'Node.js', icon: '◉', color: '#339933', category: 'Backend' },
  { name: 'Flutter', icon: '✦', color: '#54C5F8', category: 'Mobile' },
  { name: 'React Native', icon: '⚛', color: '#61DAFB', category: 'Mobile' },
  { name: 'MongoDB', icon: '🍃', color: '#47A248', category: 'Database' },
  { name: 'PostgreSQL', icon: '🐘', color: '#4169E1', category: 'Database' },
  { name: 'OpenAI', icon: '◎', color: '#74AA9C', category: 'AI' },
  { name: 'Claude', icon: '◐', color: '#D97757', category: 'AI' },
  { name: 'Gemini', icon: '✦', color: '#4285F4', category: 'AI' },
  { name: 'Python', icon: '🐍', color: '#3776AB', category: 'Language' },
  { name: 'Docker', icon: '🐳', color: '#2496ED', category: 'DevOps' },
  { name: 'Cloud', icon: '☁', color: '#FF9900', category: 'Cloud' },
];

export function TechStack() {
  return (
    <section
      className="relative section-padding overflow-hidden"
      aria-labelledby="tech-heading"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at bottom, rgba(34,211,238,0.06) 0%, transparent 60%)',
        }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] text-sm font-medium text-accent-cyan mb-6"
            style={{ backgroundColor: 'rgba(34,211,238,0.08)' }}
          >
            TECHNOLOGY
          </span>
          <h2
            id="tech-heading"
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6"
          >
            Built With Modern Technology
          </h2>
          <p className="text-lg lg:text-xl text-text-secondary leading-relaxed">
            We choose the right tools for the job — modern, scalable, and battle-tested.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3 lg:gap-4">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                delay: index * 0.05,
                duration: 0.4,
                type: 'spring',
                stiffness: 200,
              }}
            >
              <TechCard tech={tech} />
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 text-center text-text-secondary/50 text-sm"
        >
          And many more — we continuously evaluate and adopt emerging technologies.
        </motion.p>
      </div>
    </section>
  );
}

function TechCard({ tech }: { tech: TechItem }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      className="tech-icon w-full relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={`${tech.name} — ${tech.category}`}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {/* Hover bg */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300"
        style={{
          background: `linear-gradient(135deg, ${tech.color}15, ${tech.color}30)`,
          opacity: isHovered ? 1 : 0,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-center gap-2 py-1">
        <span
          className="text-2xl w-10 h-10 flex items-center justify-center rounded-lg font-bold"
          style={{
            background: `linear-gradient(135deg, ${tech.color}20, ${tech.color}35)`,
            color: tech.color,
            fontSize: tech.icon.length > 2 ? '14px' : '20px',
          }}
        >
          {tech.icon}
        </span>
        <span className="font-medium text-white text-xs text-center leading-tight">{tech.name}</span>
        <span className="text-[10px] text-text-secondary/60 text-center">{tech.category}</span>
      </div>

      {/* Bottom bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full origin-left"
        style={{ background: tech.color }}
        initial={{ scaleX: 0 }}
        animate={isHovered ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        aria-hidden="true"
      />
    </motion.button>
  );
}
