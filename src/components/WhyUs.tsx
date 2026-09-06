import { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Sparkles, Bot, TrendingUp, Palette, Shield } from 'lucide-react';
import { Card } from './ui/Card';

const features = [
  {
    icon: Zap,
    title: 'Fast Execution',
    description: 'Clear communication and rapid development cycles without compromising quality.',
    color: '#4F7CFF',
  },
  {
    icon: Sparkles,
    title: 'Modern Technology',
    description: 'We use modern tools and scalable architecture that stands the test of time.',
    color: '#8B5CF6',
  },
  {
    icon: Bot,
    title: 'AI First',
    description: "We actively integrate AI where it creates real value, not just for buzzwords.",
    color: '#22D3EE',
  },
  {
    icon: TrendingUp,
    title: 'Business Focused',
    description: "We don't just build software — we build solutions that drive growth.",
    color: '#10B981',
  },
  {
    icon: Palette,
    title: 'Premium Design',
    description: 'Every product is designed with attention to detail and user experience.',
    color: '#F59E0B',
  },
  {
    icon: Shield,
    title: 'Scalable Architecture',
    description: 'Built to grow with your business, from startup to enterprise scale.',
    color: '#EC4899',
  },
];

export function WhyUs() {
  return (
    <section
      className="relative section-padding overflow-hidden"
      aria-labelledby="whyus-heading"
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
            BUILT DIFFERENT
          </span>
          <h2
            id="whyus-heading"
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6"
          >
            Built Different.{' '}
            <br />
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #4F7CFF, #8B5CF6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Built Better.
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-text-secondary leading-relaxed">
            Why ambitious teams choose us for their digital transformation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <FeatureCard feature={feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature }: { feature: (typeof features)[0] }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      variant="interactive"
      padding="lg"
      className="h-full group relative overflow-hidden cursor-default"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Hover bg glow */}
      <div
        className="absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${feature.color}12, ${feature.color}25)`,
          opacity: isHovered ? 1 : 0,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110"
          style={{
            background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}40)`,
          }}
        >
          <feature.icon className="w-7 h-7" style={{ color: feature.color }} aria-hidden="true" />
        </div>

        <h3 className="font-display font-bold text-xl text-white mb-3">{feature.title}</h3>
        <p className="text-text-secondary leading-relaxed">{feature.description}</p>
      </div>

      {/* Bottom line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 origin-left rounded-full"
        style={{ background: `linear-gradient(90deg, ${feature.color}, transparent)` }}
        initial={{ scaleX: 0 }}
        animate={isHovered ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.4 }}
        aria-hidden="true"
      />
    </Card>
  );
}
