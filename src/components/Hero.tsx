import { motion } from 'framer-motion';
import { ArrowRight, Zap, Brain, Smartphone, Code } from 'lucide-react';
import { Button } from './ui/Button';

const trustIndicators = [
  { icon: Code, label: 'Web Development' },
  { icon: Smartphone, label: 'Mobile Apps' },
  { icon: Brain, label: 'AI Agents' },
  { icon: Zap, label: 'Automation' },
];

export function Hero() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20"
      aria-labelledby="hero-heading"
    >
      {/* Background glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse at 60% 40%, rgba(79,124,255,0.12) 0%, transparent 60%), radial-gradient(ellipse at 30% 70%, rgba(139,92,246,0.08) 0%, transparent 60%)',
        }}
      />
      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(79,124,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(79,124,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(circle, rgba(79,124,255,0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      <div className="container-custom relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] text-sm font-medium text-accent-blue mb-8"
              style={{ backgroundColor: 'rgba(79,124,255,0.08)' }}
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-accent-cyan inline-block"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                aria-hidden="true"
              />
              ✦ DIGITAL PRODUCTS • AI • AUTOMATION
            </motion.span>

            {/* Headline */}
            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-[1.08] text-white mb-8"
            >
              We Build Digital{' '}
              <br className="hidden sm:block" />
              Experiences{' '}
              <br />
              <span
                style={{
                  backgroundImage: 'linear-gradient(135deg, #4F7CFF, #8B5CF6, #22D3EE)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                for the Future
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="text-lg lg:text-xl text-text-secondary leading-relaxed mb-10 max-w-xl"
            >
              From premium websites and powerful mobile applications to intelligent AI agents and
              automation systems — we help ambitious businesses turn ideas into scalable digital
              products.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-14"
            >
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
                onClick={() => scrollTo('#work')}
                className="w-full sm:w-auto"
              >
                Explore Our Work
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              {trustIndicators.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                  className="flex items-center gap-2 px-4 py-2.5 border border-white/[0.08] rounded-xl text-sm text-text-secondary hover:border-accent-blue/30 hover:text-white transition-all duration-300 cursor-default"
                  style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
                >
                  <item.icon className="w-4 h-4 text-accent-blue" aria-hidden="true" />
                  <span>{item.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: 'easeOut' }}
            className="relative hidden lg:block"
            role="img"
            aria-label="Abstract technology visualization"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Outer glow */}
              <div
                className="absolute -inset-8 rounded-full pointer-events-none"
                aria-hidden="true"
                style={{
                  background:
                    'radial-gradient(circle, rgba(79,124,255,0.1) 0%, transparent 70%)',
                  filter: 'blur(20px)',
                }}
              />

              {/* Card container */}
              <motion.div
                className="absolute inset-0 rounded-3xl border overflow-hidden"
                style={{
                  borderColor: 'rgba(255,255,255,0.08)',
                  backgroundColor: 'rgba(13,19,33,0.8)',
                  backdropFilter: 'blur(20px)',
                }}
                animate={{
                  borderColor: [
                    'rgba(255,255,255,0.08)',
                    'rgba(79,124,255,0.3)',
                    'rgba(139,92,246,0.3)',
                    'rgba(255,255,255,0.08)',
                  ],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                {/* Grid bg */}
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(79,124,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(79,124,255,0.8) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                  }}
                  aria-hidden="true"
                />

                {/* Floating code card */}
                <motion.div
                  className="absolute top-6 left-6 rounded-xl border p-4"
                  style={{
                    width: 200,
                    background: 'linear-gradient(135deg, rgba(79,124,255,0.15), rgba(139,92,246,0.15))',
                    borderColor: 'rgba(79,124,255,0.3)',
                  }}
                  animate={{ y: [0, -10, 0], x: [0, 4, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="flex items-center gap-1.5 mb-3">
                    <span className="w-3 h-3 rounded-full bg-red-400/70" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
                    <span className="w-3 h-3 rounded-full bg-green-400/70" />
                  </div>
                  <div className="font-mono text-xs space-y-1.5 text-white/60">
                    <div><span className="text-accent-blue">const</span> agent <span className="text-white/40">=</span> <span className="text-accent-cyan">new</span></div>
                    <div className="ml-2 text-accent-purple">AIAgent</div>
                    <div><span className="text-white/40">{'({'}</span> model: <span className="text-green-400">'gpt-4'</span><span className="text-white/40">{' })'}</span></div>
                  </div>
                </motion.div>

                {/* Spinning ring */}
                <motion.div
                  className="absolute top-10 right-10 rounded-xl border flex items-center justify-center"
                  style={{
                    width: 140,
                    height: 140,
                    background: 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(34,211,238,0.15))',
                    borderColor: 'rgba(139,92,246,0.3)',
                  }}
                  animate={{ rotate: [0, 1, -1, 0], scale: [1, 1.02, 1] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <svg viewBox="0 0 80 80" className="w-20 h-20">
                    <circle
                      cx="40" cy="40" r="32"
                      fill="none"
                      stroke="rgba(34,211,238,0.2)"
                      strokeWidth="2"
                    />
                    <motion.circle
                      cx="40" cy="40" r="32"
                      fill="none"
                      stroke="#22D3EE"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray="60 141"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                      style={{ transformOrigin: '40px 40px' }}
                    />
                    <Brain
                      x="28" y="28"
                      width="24" height="24"
                      className="text-accent-blue"
                    />
                  </svg>
                </motion.div>

                {/* Stats card */}
                <motion.div
                  className="absolute bottom-24 left-8 rounded-xl border p-4"
                  style={{
                    width: 200,
                    background: 'linear-gradient(135deg, rgba(34,211,238,0.12), rgba(79,124,255,0.12))',
                    borderColor: 'rgba(34,211,238,0.3)',
                  }}
                  animate={{ y: [0, 8, 0], x: [0, -3, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                >
                  <p className="text-xs text-text-secondary mb-3 font-medium">Performance</p>
                  <div className="space-y-2">
                    {[
                      { label: 'Speed', w: '90%', color: '#4F7CFF' },
                      { label: 'Quality', w: '95%', color: '#8B5CF6' },
                      { label: 'Scale', w: '85%', color: '#22D3EE' },
                    ].map((bar) => (
                      <div key={bar.label} className="flex items-center gap-2">
                        <span className="text-xs text-text-secondary w-12">{bar.label}</span>
                        <div className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            style={{ background: bar.color }}
                            initial={{ width: 0 }}
                            animate={{ width: bar.w }}
                            transition={{ duration: 1.5, delay: 1, ease: 'easeOut' }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* AI Badge */}
                <motion.div
                  className="absolute bottom-8 right-8 rounded-xl border px-4 py-3 flex items-center gap-2"
                  style={{
                    background: 'linear-gradient(135deg, rgba(79,124,255,0.15), rgba(139,92,246,0.15))',
                    borderColor: 'rgba(79,124,255,0.3)',
                  }}
                  animate={{ scale: [1, 1.04, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                >
                  <motion.div
                    className="w-3 h-3 rounded-full bg-accent-cyan"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    aria-hidden="true"
                  />
                  <span className="text-sm font-semibold text-white">AI Ready</span>
                </motion.div>

                {/* Center brain */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(79,124,255,0.2), rgba(139,92,246,0.2))',
                    border: '1px solid rgba(79,124,255,0.3)',
                  }}
                  animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Brain className="w-9 h-9 text-accent-blue" aria-hidden="true" />
                </motion.div>

                {/* Particles */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full"
                    style={{
                      backgroundColor: ['#4F7CFF', '#8B5CF6', '#22D3EE'][i % 3],
                      top: `${20 + i * 12}%`,
                      left: `${15 + i * 13}%`,
                    }}
                    animate={{ opacity: [0, 0.8, 0], scale: [0, 1, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: 'easeInOut',
                    }}
                    aria-hidden="true"
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-text-secondary/50"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2"
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-accent-blue"
            animate={{ y: [0, 6, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
        <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}
