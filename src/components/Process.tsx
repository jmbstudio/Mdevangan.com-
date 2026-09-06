import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Lightbulb, PenTool, Code, Rocket } from 'lucide-react';

const processSteps = [
  {
    number: '01',
    title: 'Discover',
    description: 'We understand your idea, goals and requirements through deep research and stakeholder interviews.',
    icon: Search,
    color: '#4F7CFF',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'We define the right technology stack, architecture and product roadmap for your success.',
    icon: Lightbulb,
    color: '#8B5CF6',
  },
  {
    number: '03',
    title: 'Design',
    description: 'We create intuitive and premium user experiences with pixel-perfect attention to detail.',
    icon: PenTool,
    color: '#22D3EE',
  },
  {
    number: '04',
    title: 'Build',
    description: 'We develop scalable and high-performance products using modern engineering practices.',
    icon: Code,
    color: '#10B981',
  },
  {
    number: '05',
    title: 'Launch',
    description: 'We deploy, optimize and support your product with continuous monitoring and iteration.',
    icon: Rocket,
    color: '#F59E0B',
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="relative section-padding overflow-hidden"
      aria-labelledby="process-heading"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at top, rgba(34,211,238,0.06) 0%, transparent 60%)',
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] text-sm font-medium text-accent-cyan mb-6"
            style={{ backgroundColor: 'rgba(34,211,238,0.08)' }}
          >
            OUR PROCESS
          </span>
          <h2
            id="process-heading"
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6"
          >
            From Idea to Product
          </h2>
          <p className="text-lg lg:text-xl text-text-secondary leading-relaxed">
            A proven process that transforms concepts into market-ready digital products.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Desktop connecting line */}
          <motion.div
            className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 z-0"
            style={{
              background: 'linear-gradient(90deg, #4F7CFF, #8B5CF6, #22D3EE, #10B981, #F59E0B)',
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.4, delay: 0.3, ease: 'easeOut' }}
            aria-hidden="true"
          />

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
            {processSteps.map((step, index) => (
              <StepCard key={step.number} step={step} index={index} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-text-secondary/60 mb-3 text-sm">Ready to start your project?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-accent-blue font-semibold hover:text-accent-cyan transition-colors"
          >
            Let's talk about your idea
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              aria-hidden="true"
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function StepCard({ step, index }: { step: typeof processSteps[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ delay: 0.15 + index * 0.15, duration: 0.6 }}
      className="relative flex-1 lg:px-4 z-10"
    >
      {/* Icon */}
      <motion.div
        className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 lg:ml-auto lg:mr-auto relative cursor-default"
        style={{
          background: `linear-gradient(135deg, ${step.color}20, ${step.color}40)`,
          border: `1px solid ${step.color}50`,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{
          scale: isHovered ? 1.1 : 1,
          boxShadow: isHovered
            ? `0 0 40px ${step.color}50`
            : `0 0 15px ${step.color}25`,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <step.icon className="w-8 h-8" style={{ color: step.color }} aria-hidden="true" />

        {/* Step badge */}
        <motion.span
          className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-bold text-white flex items-center justify-center"
          style={{ backgroundColor: step.color }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 + index * 0.15, type: 'spring', stiffness: 300 }}
        >
          {index + 1}
        </motion.span>

        {/* Pulse ring */}
        <motion.div
          className="absolute inset-0 rounded-2xl border-2"
          style={{ borderColor: step.color }}
          animate={{ scale: [1, 1.06, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.3 }}
          aria-hidden="true"
        />
      </motion.div>

      {/* Content */}
      <div className="mt-8 text-center lg:text-left">
        <span
          className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3"
          style={{
            backgroundColor: `${step.color}18`,
            color: step.color,
          }}
        >
          STEP {step.number}
        </span>
        <h3 className="font-display font-bold text-2xl text-white mb-3">{step.title}</h3>
        <p className="text-text-secondary leading-relaxed text-sm">{step.description}</p>
      </div>
    </motion.div>
  );
}
