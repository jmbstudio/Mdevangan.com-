import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Smartphone, Globe, Bot } from 'lucide-react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { cn } from '../lib/utils';

interface Project {
  number: string;
  title: string;
  description: string;
  tags: string[];
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  gradientFrom: string;
  gradientTo: string;
  accentColor: string;
}

const projects: Project[] = [
  {
    number: '01',
    title: 'AI Automation Platform',
    description: 'An intelligent workflow platform designed to automate complex business processes with AI-powered decision making.',
    tags: ['AI', 'Automation', 'Dashboard'],
    icon: Bot,
    gradientFrom: 'rgba(79,124,255,0.25)',
    gradientTo: 'rgba(139,92,246,0.25)',
    accentColor: '#4F7CFF',
  },
  {
    number: '02',
    title: 'Modern SaaS Platform',
    description: 'A scalable web application designed for a growing digital business with real-time analytics and collaboration.',
    tags: ['SaaS', 'Web App', 'UI/UX'],
    icon: Globe,
    gradientFrom: 'rgba(139,92,246,0.25)',
    gradientTo: 'rgba(34,211,238,0.25)',
    accentColor: '#8B5CF6',
  },
  {
    number: '03',
    title: 'Mobile Application',
    description: 'A modern mobile experience built for speed, usability and scalability with offline-first architecture.',
    tags: ['Mobile', 'App', 'Product Design'],
    icon: Smartphone,
    gradientFrom: 'rgba(34,211,238,0.25)',
    gradientTo: 'rgba(79,124,255,0.25)',
    accentColor: '#22D3EE',
  },
];

export function FeaturedWork() {
  return (
    <section
      id="work"
      className="relative section-padding overflow-hidden"
      aria-labelledby="work-heading"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.06) 0%, transparent 60%)',
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] text-sm font-medium text-accent-purple mb-6"
            style={{ backgroundColor: 'rgba(139,92,246,0.08)' }}
          >
            SELECTED WORK
          </span>
          <h2
            id="work-heading"
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6"
          >
            Selected Work
          </h2>
          <p className="text-lg lg:text-xl text-text-secondary leading-relaxed">
            A glimpse into the products and experiences we build.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <Button variant="secondary" size="lg" className="group">
            View All Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ delay: index * 0.12, duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card
        variant="interactive"
        padding="none"
        className={cn(
          'relative overflow-hidden group h-full transition-all duration-500',
          isHovered && 'shadow-[0_30px_60px_rgba(0,0,0,0.4)]'
        )}
      >
        {/* Visual area */}
        <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
          <motion.div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})`,
            }}
            animate={isHovered ? { scale: 1.08 } : { scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            aria-hidden="true"
          />

          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
              backgroundSize: '30px 30px',
            }}
            aria-hidden="true"
          />

          {/* Big icon in center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={isHovered ? { scale: 0.9, opacity: 0.6 } : { scale: 1, opacity: 0.3 }}
              transition={{ duration: 0.4 }}
            >
              <project.icon
                className="w-24 h-24"
                style={{ color: project.accentColor }}
                aria-hidden="true"
              />
            </motion.div>
          </div>

          {/* Hover overlay with actions */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{ backgroundColor: 'rgba(7,11,20,0.6)', backdropFilter: 'blur(4px)' }}
            initial={{ opacity: 0 }}
            animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-xl flex items-center justify-center text-white"
              style={{ background: 'linear-gradient(135deg, #4F7CFF, #8B5CF6)' }}
              aria-label={`View ${project.title}`}
            >
              <ExternalLink className="w-5 h-5" aria-hidden="true" />
            </motion.button>
          </motion.div>

          {/* Project number */}
          <div className="absolute top-4 left-4">
            <span
              className="px-3 py-1.5 rounded-full text-xs font-semibold text-text-secondary backdrop-blur-xl border border-white/10"
              style={{ backgroundColor: 'rgba(7,11,20,0.7)' }}
            >
              PROJECT {project.number}
            </span>
          </div>

          {/* Tags */}
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-full text-xs font-medium text-text-secondary border border-white/10 backdrop-blur-xl"
                style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 lg:p-8">
          <h3 className="font-display font-bold text-2xl text-white mb-3">{project.title}</h3>
          <p className="text-text-secondary leading-relaxed mb-6">{project.description}</p>

          <motion.button
            className="group/btn w-full flex items-center justify-between px-4 py-3 rounded-xl border border-white/[0.08] hover:border-white/20 transition-all duration-300"
            style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
            whileHover={{ x: 4 }}
            aria-label={`View ${project.title} project`}
          >
            <span className="font-medium text-text-secondary group-hover/btn:text-white transition-colors text-sm">
              View Project
            </span>
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center"
              style={{ background: `linear-gradient(135deg, ${project.accentColor}, #8B5CF6)` }}
            >
              <ArrowRight className="w-3.5 h-3.5 text-white" aria-hidden="true" />
            </div>
          </motion.button>
        </div>
      </Card>
    </motion.div>
  );
}
