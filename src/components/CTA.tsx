import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Bot } from 'lucide-react';
import { Button } from './ui/Button';

export function CTA() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      className="relative section-padding overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Animated gradient bg */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        animate={{
          background: [
            'radial-gradient(ellipse at center, rgba(79,124,255,0.14) 0%, transparent 70%)',
            'radial-gradient(ellipse at center, rgba(139,92,246,0.14) 0%, transparent 70%)',
            'radial-gradient(ellipse at center, rgba(34,211,238,0.10) 0%, transparent 70%)',
            'radial-gradient(ellipse at center, rgba(79,124,255,0.14) 0%, transparent 70%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full pointer-events-none"
          style={{
            backgroundColor: ['#4F7CFF', '#8B5CF6', '#22D3EE'][i % 3],
            top: `${10 + i * 10}%`,
            left: `${8 + i * 11}%`,
          }}
          animate={{ opacity: [0, 0.5, 0], scale: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: i * 0.4 }}
          aria-hidden="true"
        />
      ))}

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] text-sm font-medium text-accent-blue mb-6"
            style={{ backgroundColor: 'rgba(79,124,255,0.08)' }}
          >
            <Sparkles className="w-4 h-4" aria-hidden="true" />
            READY TO BUILD?
          </span>

          <h2
            id="cta-heading"
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight mb-8"
          >
            Have an Idea?
            <br />
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #4F7CFF, #8B5CF6, #22D3EE)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Let's Build It.
            </span>
          </h2>

          <p className="text-lg lg:text-xl text-text-secondary leading-relaxed mb-12 max-w-2xl mx-auto">
            Tell us what you're building. We'll help turn your idea into a powerful digital
            product that moves your business forward.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <Button
              size="lg"
              variant="primary"
              onClick={() => scrollTo('#contact')}
              className="group w-full sm:w-auto"
            >
              Start Your Project
              <ArrowRight
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                aria-hidden="true"
              />
            </Button>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => scrollTo('#contact')}
              className="w-full sm:w-auto"
            >
              Schedule a Conversation
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-text-secondary/60 text-sm">
            {[
              { icon: Zap, label: 'Free initial consultation' },
              { icon: Bot, label: 'AI strategy included' },
              { icon: Sparkles, label: 'No commitment required' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <item.icon className="w-4 h-4 text-accent-blue/60" aria-hidden="true" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
