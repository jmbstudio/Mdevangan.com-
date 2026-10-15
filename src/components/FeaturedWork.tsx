import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: '01',
    title: 'AI Automation Platform',
    category: 'Artificial Intelligence',
    description: 'An intelligent workflow platform that automates complex business processes with AI-powered decision making and real-time analytics.',
    tags: ['React', 'Python', 'OpenAI', 'FastAPI'],
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&q=85&auto=format&fit=crop',
    accentColor: '#5b8dee',
    featured: true,
  },
  {
    id: '02',
    title: 'FinTech SaaS Dashboard',
    category: 'Web Application',
    description: 'A scalable financial management platform with real-time data visualization, team collaboration and advanced reporting.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=85&auto=format&fit=crop',
    accentColor: '#c9a84c',
    featured: true,
  },
  {
    id: '03',
    title: 'Health & Fitness App',
    category: 'Mobile Application',
    description: 'A beautifully crafted iOS and Android fitness companion with workout tracking, nutrition logs and AI coaching.',
    tags: ['React Native', 'Node.js', 'MongoDB', 'ML Kit'],
    image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=900&q=85&auto=format&fit=crop',
    accentColor: '#a78bfa',
    featured: false,
  },
  {
    id: '04',
    title: 'E-Commerce Platform',
    category: 'Web Platform',
    description: 'A full-featured online store with inventory management, payment integration and an admin dashboard built for scale.',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Razorpay'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=85&auto=format&fit=crop',
    accentColor: '#67e8f9',
    featured: false,
  },
];

export function FeaturedWork() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.work-header',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.work-header', start: 'top 80%' } }
      );

      gsap.fromTo('.work-card',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.work-grid',
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative section-padding overflow-hidden"
      aria-labelledby="work-heading"
    >
      {/* Subtle bg glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at 50% 40%, rgba(201,168,76,0.04) 0%, transparent 60%)',
        }}
      />
      <div className="noise-overlay" aria-hidden="true" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="work-header flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 opacity-0">
          <div>
            <span className="label-tag mb-5 inline-flex">Selected Work</span>
            <h2
              id="work-heading"
              className="heading-lg text-white"
              style={{ fontSize: 'clamp(36px, 4.5vw, 64px)' }}
            >
              Projects That
              <br />
              <span className="text-gradient-gold">Made Impact</span>
            </h2>
          </div>
          <button
            className="btn-outline self-start lg:self-auto"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Your Project <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Projects grid */}
        <div className="work-grid grid lg:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleMouseEnter = () => {
    setHovered(true);
    gsap.to(imgRef.current, { scale: 1.06, duration: 0.6, ease: 'power2.out' });
  };
  const handleMouseLeave = () => {
    setHovered(false);
    gsap.to(imgRef.current, { scale: 1, duration: 0.6, ease: 'power2.out' });
  };

  return (
    <div
      ref={cardRef}
      className="work-card opacity-0 group relative rounded-2xl overflow-hidden cursor-pointer"
      style={{
        background: 'rgba(10,13,26,0.8)',
        border: `1px solid ${hovered ? project.accentColor + '40' : 'rgba(255,255,255,0.06)'}`,
        transition: 'border-color 0.4s ease',
        boxShadow: hovered ? `0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px ${project.accentColor}20` : 'none',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
        <img
          ref={imgRef}
          src={project.image}
          alt={project.title}
          className="image-cover"
          style={{ transformOrigin: 'center center' }}
        />
        {/* Overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-400"
          style={{
            background: `linear-gradient(to bottom, rgba(5,7,15,0.2) 0%, rgba(5,7,15,0.75) 100%)`,
          }}
          aria-hidden="true"
        />

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span
            className="px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-xl"
            style={{
              background: 'rgba(5,7,15,0.7)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#9ca3af',
            }}
          >
            {project.category}
          </span>
        </div>

        {/* View link on hover */}
        <div
          className="absolute top-4 right-4 transition-all duration-300"
          style={{ opacity: hovered ? 1 : 0, transform: hovered ? 'scale(1)' : 'scale(0.8)' }}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-xl"
            style={{
              background: `${project.accentColor}`,
              color: '#05070f',
            }}
            aria-hidden="true"
          >
            <ExternalLink className="w-4 h-4" />
          </div>
        </div>

        {/* Project number */}
        <div className="absolute bottom-4 right-4">
          <span
            className="font-syne font-extrabold text-6xl leading-none"
            style={{ color: 'rgba(255,255,255,0.07)' }}
            aria-hidden="true"
          >
            {project.id}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 lg:p-7">
        <h3 className="font-syne font-bold text-xl text-white mb-2">{project.title}</h3>
        <p className="text-sm text-gray-400 leading-relaxed mb-5">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{
                background: `${project.accentColor}12`,
                border: `1px solid ${project.accentColor}30`,
                color: project.accentColor,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <span className="text-sm text-gray-500">View Case Study</span>
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
            style={{
              background: hovered ? project.accentColor : 'rgba(255,255,255,0.06)',
              color: hovered ? '#05070f' : '#9ca3af',
            }}
            aria-hidden="true"
          >
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
