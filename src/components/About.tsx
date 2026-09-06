import { motion } from 'framer-motion';
import { Code, Brain, Zap, Award } from 'lucide-react';

export function About() {
  return (
    <section
      id="about"
      className="relative section-padding overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at bottom, rgba(79,124,255,0.06) 0%, transparent 60%)',
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Visual left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="relative"
            role="img"
            aria-label="Abstract technology visualization representing Mukesh's skills"
          >
            <div className="relative aspect-square max-w-lg mx-auto lg:mx-0">
              {/* Outer glow */}
              <div
                className="absolute -inset-8 rounded-full pointer-events-none"
                aria-hidden="true"
                style={{
                  background: 'radial-gradient(circle, rgba(79,124,255,0.08) 0%, transparent 70%)',
                  filter: 'blur(20px)',
                }}
              />

              <motion.div
                className="absolute inset-0 rounded-3xl border overflow-hidden"
                style={{
                  borderColor: 'rgba(255,255,255,0.08)',
                  backgroundColor: 'rgba(13,19,33,0.7)',
                  backdropFilter: 'blur(20px)',
                }}
                animate={{
                  borderColor: ['rgba(255,255,255,0.08)', 'rgba(79,124,255,0.25)', 'rgba(255,255,255,0.08)'],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                {/* Grid */}
                <div
                  className="absolute inset-0 opacity-[0.05]"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(79,124,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(79,124,255,0.8) 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                  }}
                  aria-hidden="true"
                />

                {/* Floating icon cards */}
                <motion.div
                  className="absolute top-8 left-8 w-32 h-32 rounded-xl flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(79,124,255,0.2), rgba(139,92,246,0.2))',
                    border: '1px solid rgba(79,124,255,0.3)',
                  }}
                  animate={{ rotate: [0, 3, -3, 0], y: [0, -6, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Code className="w-14 h-14 text-accent-blue" aria-hidden="true" />
                </motion.div>

                <motion.div
                  className="absolute top-12 right-10 w-28 h-28 rounded-xl flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(34,211,238,0.2))',
                    border: '1px solid rgba(139,92,246,0.3)',
                  }}
                  animate={{ scale: [1, 1.05, 1], x: [0, 5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                >
                  <Brain className="w-12 h-12 text-accent-purple" aria-hidden="true" />
                </motion.div>

                <motion.div
                  className="absolute bottom-10 left-12 w-36 h-36 rounded-xl flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(34,211,238,0.2), rgba(79,124,255,0.2))',
                    border: '1px solid rgba(34,211,238,0.3)',
                  }}
                  animate={{ y: [0, 8, 0], rotate: [0, -2, 2, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                >
                  <Zap className="w-16 h-16 text-accent-cyan" aria-hidden="true" />
                </motion.div>

                <motion.div
                  className="absolute bottom-8 right-8 w-24 h-24 rounded-xl flex items-center justify-center"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                >
                  <Award className="w-10 h-10 text-accent-blue/60" aria-hidden="true" />
                </motion.div>

                {/* Center pulse */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(79,124,255,0.2), rgba(139,92,246,0.2))',
                    border: '1px solid rgba(79,124,255,0.3)',
                  }}
                  animate={{ scale: [1, 1.12, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div
                    className="w-8 h-8 rounded-full"
                    style={{ background: 'linear-gradient(135deg, #4F7CFF, #8B5CF6)' }}
                    aria-hidden="true"
                  />
                </motion.div>

                {/* Particles */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full"
                    style={{
                      backgroundColor: ['#4F7CFF', '#8B5CF6', '#22D3EE', '#4F7CFF', '#8B5CF6'][i],
                      top: `${20 + i * 15}%`,
                      left: `${20 + i * 14}%`,
                    }}
                    animate={{ opacity: [0, 0.8, 0], scale: [0, 1, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.6 }}
                    aria-hidden="true"
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Text right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="max-w-xl"
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] text-sm font-medium text-accent-blue mb-6"
              style={{ backgroundColor: 'rgba(79,124,255,0.08)' }}
            >
              MEET MUKESH
            </span>

            <h2
              id="about-heading"
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-8"
            >
              Meet Mukesh.
            </h2>

            <div className="space-y-5 text-lg leading-relaxed">
              <p className="text-text-secondary">
                Mukesh Dewangan is a technology-focused digital builder passionate about creating
                modern websites, powerful applications and intelligent AI systems.
              </p>
              <p className="text-text-secondary">
                With a focus on design, technology and automation, the goal is simple — help
                businesses transform ideas into digital products that are useful, scalable and
                built for the future.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                { icon: Code, label: 'Full-Stack Dev', value: '5+ Yrs' },
                { icon: Brain, label: 'AI & Automation', value: 'Expert' },
                { icon: Zap, label: 'Products', value: '10+' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                  className="p-4 rounded-xl border border-white/[0.08] text-center"
                  style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                    style={{ background: 'linear-gradient(135deg, rgba(79,124,255,0.2), rgba(139,92,246,0.2))' }}
                  >
                    <stat.icon className="w-5 h-5 text-accent-blue" aria-hidden="true" />
                  </div>
                  <p className="font-display font-bold text-xl text-white">{stat.value}</p>
                  <p className="text-xs text-text-secondary mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
