import { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Bot, Zap, Server, ArrowRight, Check } from 'lucide-react';
import { Card } from './ui/Card';

interface Service {
  number: string;
  title: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  features: string[];
  accentColor: string;
}

const services: Service[] = [
  {
    number: '01',
    title: 'Premium Websites',
    description: 'Fast, responsive and visually stunning websites designed to convert visitors into customers.',
    icon: Globe,
    features: ['Landing Pages', 'Business Websites', 'Portfolio Websites', 'E-commerce', 'Custom Web Platforms'],
    accentColor: '#4F7CFF',
  },
  {
    number: '02',
    title: 'Mobile Applications',
    description: 'Beautiful, scalable mobile experiences built for Android and iOS.',
    icon: Smartphone,
    features: ['Startup Apps', 'Business Apps', 'SaaS Apps', 'Custom Mobile Platforms'],
    accentColor: '#8B5CF6',
  },
  {
    number: '03',
    title: 'AI Agents',
    description: 'Intelligent AI agents that can understand tasks, automate workflows and work around the clock.',
    icon: Bot,
    features: ['Customer Support Agents', 'Business AI Agents', 'Research Agents', 'Custom AI Workflows'],
    accentColor: '#22D3EE',
  },
  {
    number: '04',
    title: 'Automation Systems',
    description: 'Eliminate repetitive work with powerful automation pipelines.',
    icon: Zap,
    features: ['Workflow Automation', 'API Integrations', 'Business Automation', 'Data Processing'],
    accentColor: '#4F7CFF',
  },
  {
    number: '05',
    title: 'Custom Software',
    description: 'Tailored software solutions built around your exact business requirements.',
    icon: Server,
    features: ['Admin Dashboards', 'CRM Systems', 'SaaS Platforms', 'Internal Tools'],
    accentColor: '#8B5CF6',
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative section-padding overflow-hidden"
      aria-labelledby="services-heading"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at top, rgba(79,124,255,0.06) 0%, transparent 60%)',
        }}
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] text-sm font-medium text-accent-blue mb-6"
            style={{ backgroundColor: 'rgba(79,124,255,0.08)' }}
          >
            WHAT WE BUILD
          </span>
          <h2
            id="services-heading"
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6"
          >
            What We Build
          </h2>
          <p className="text-lg lg:text-xl text-text-secondary leading-relaxed">
            End-to-end digital solutions designed for ambitious businesses.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="h-full"
    >
      <Card variant="interactive" padding="lg" className="relative overflow-hidden group h-full flex flex-col">
        {/* Hover glow */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          aria-hidden="true"
          style={{
            background: `radial-gradient(ellipse at top left, ${service.accentColor}18 0%, transparent 60%)`,
          }}
        />

        <div className="relative z-10 flex flex-col h-full">
          {/* Icon + number */}
          <div className="flex items-start justify-between mb-6">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
              style={{
                background: `linear-gradient(135deg, ${service.accentColor}20, ${service.accentColor}35)`,
                border: `1px solid ${service.accentColor}30`,
              }}
            >
              <service.icon className="w-7 h-7" style={{ color: service.accentColor }} aria-hidden="true" />
            </div>
            <span className="font-display font-bold text-3xl" style={{ color: `${service.accentColor}25` }}>
              {service.number}
            </span>
          </div>

          <h3 className="font-display font-bold text-2xl text-white mb-4">{service.title}</h3>
          <p className="text-text-secondary leading-relaxed mb-6">{service.description}</p>

          {/* Features */}
          <ul className="space-y-2.5 mb-8 flex-1">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-text-secondary group-hover:text-white/80 transition-colors">
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${service.accentColor}20` }}
                >
                  <Check className="w-3 h-3" style={{ color: service.accentColor }} aria-hidden="true" />
                </span>
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>

          {/* Learn more */}
          <motion.button
            className="group/btn flex items-center justify-between px-4 py-3 rounded-xl border border-white/[0.08] hover:border-white/20 transition-all duration-300 mt-auto"
            style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
            whileHover={{ x: 4 }}
            aria-label={`Learn more about ${service.title}`}
          >
            <span className="font-medium text-text-secondary group-hover/btn:text-white transition-colors text-sm">
              Learn more
            </span>
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center"
              style={{ background: `linear-gradient(135deg, ${service.accentColor}, #8B5CF6)` }}
            >
              <ArrowRight className="w-3.5 h-3.5 text-white" aria-hidden="true" />
            </div>
          </motion.button>
        </div>

        {/* Bottom border glow */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 origin-left rounded-full"
          style={{ background: `linear-gradient(90deg, ${service.accentColor}, transparent)` }}
          initial={{ scaleX: 0 }}
          animate={isHovered ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          aria-hidden="true"
        />
      </Card>
    </motion.div>
  );
}
