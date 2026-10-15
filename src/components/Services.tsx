import { useEffect, useRef } from 'react';
import { Globe, Smartphone, Bot, Zap, Server, Check, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: '01',
    title: 'Premium Websites',
    description: 'Fast, conversion-focused websites with stunning UI. Built to impress from first click.',
    icon: Globe,
    features: ['Landing Pages', 'Business Websites', 'Portfolio Sites', 'E-commerce'],
    color: '#5b8dee',
    bg: 'rgba(91,141,238,0.08)',
    border: 'rgba(91,141,238,0.2)',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80&auto=format&fit=crop',
  },
  {
    number: '02',
    title: 'Mobile Apps',
    description: 'Polished iOS & Android experiences your users will love, built for scale.',
    icon: Smartphone,
    features: ['Startup Apps', 'Business Apps', 'SaaS Mobile', 'Custom Platforms'],
    color: '#a78bfa',
    bg: 'rgba(167,139,250,0.08)',
    border: 'rgba(167,139,250,0.2)',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80&auto=format&fit=crop',
  },
  {
    number: '03',
    title: 'AI Agents',
    description: 'Intelligent autonomous agents that understand tasks, take actions and work 24/7.',
    icon: Bot,
    features: ['Support Agents', 'Research Agents', 'Business Agents', 'Custom Workflows'],
    color: '#c9a84c',
    bg: 'rgba(201,168,76,0.08)',
    border: 'rgba(201,168,76,0.2)',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80&auto=format&fit=crop',
  },
  {
    number: '04',
    title: 'Automation',
    description: 'Eliminate repetitive work. Connect your tools and let systems run themselves.',
    icon: Zap,
    features: ['Workflow Automation', 'API Integrations', 'Data Processing', 'Notifications'],
    color: '#67e8f9',
    bg: 'rgba(103,232,249,0.08)',
    border: 'rgba(103,232,249,0.2)',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&q=80&auto=format&fit=crop',
  },
  {
    number: '05',
    title: 'Custom Software',
    description: 'Tailored digital tools built around your exact operations. No compromise.',
    icon: Server,
    features: ['Admin Dashboards', 'CRM Systems', 'SaaS Platforms', 'Internal Tools'],
    color: '#f9a8d4',
    bg: 'rgba(249,168,212,0.08)',
    border: 'rgba(249,168,212,0.2)',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80&auto=format&fit=crop',
  },
];

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.services-header',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.services-header', start: 'top 80%' } }
      );

      gsap.fromTo('.service-item',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.services-grid',
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
      id="services"
      className="relative section-padding overflow-hidden"
      aria-labelledby="services-heading"
    >
      <div className="noise-overlay" aria-hidden="true" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="services-header flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20 opacity-0">
          <div>
            <span className="label-tag mb-5 inline-flex">What We Build</span>
            <h2
              id="services-heading"
              className="heading-lg text-white"
              style={{ fontSize: 'clamp(36px, 4.5vw, 64px)' }}
            >
              Services That
              <br />
              <span className="text-gradient-gold">Drive Results</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-sm leading-relaxed lg:text-right">
            End-to-end digital solutions designed for ambitious teams ready to scale.
          </p>
        </div>

        {/* Cards grid */}
        <div className="services-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 12;
    gsap.to(cardRef.current, {
      rotateX: -y,
      rotateY: x,
      transformPerspective: 800,
      duration: 0.4,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: 'elastic.out(1, 0.5)',
    });
  };

  return (
    <div
      ref={cardRef}
      className="service-item opacity-0 group relative rounded-2xl overflow-hidden cursor-pointer"
      style={{
        background: service.bg,
        border: `1px solid ${service.border}`,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image header */}
      <div className="relative overflow-hidden" style={{ height: 180 }}>
        <img
          src={service.image}
          alt={service.title}
          className="image-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, ${service.bg} 0%, rgba(5,7,15,0.9) 100%)`,
          }}
          aria-hidden="true"
        />
        {/* Number */}
        <div className="absolute top-4 right-4">
          <span
            className="font-syne font-extrabold text-5xl leading-none"
            style={{ color: service.color, opacity: 0.2 }}
          >
            {service.number}
          </span>
        </div>
        {/* Icon */}
        <div className="absolute bottom-4 left-5">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center"
            style={{ background: `${service.color}20`, border: `1px solid ${service.color}40` }}
          >
            <service.icon className="w-5 h-5" style={{ color: service.color }} aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-syne font-bold text-xl text-white mb-3">{service.title}</h3>
        <p className="text-sm text-gray-400 leading-relaxed mb-5">{service.description}</p>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {service.features.map((f) => (
            <li key={f} className="flex items-center gap-2.5 text-sm text-gray-400">
              <Check className="w-3.5 h-3.5 flex-shrink-0" style={{ color: service.color }} aria-hidden="true" />
              {f}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-gray-400 hover:text-white transition-all duration-300 group/btn"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
          onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          aria-label={`Learn more about ${service.title}`}
        >
          <span>Discuss Project</span>
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-300 group-hover/btn:scale-110"
            style={{ background: service.color }}
          >
            <ArrowUpRight className="w-3.5 h-3.5 text-bg-dark" aria-hidden="true" />
          </div>
        </button>
      </div>

      {/* Bottom glow line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${service.color}60, transparent)` }}
        aria-hidden="true"
      />
    </div>
  );
}
