import { motion } from 'framer-motion';
import { ArrowRight, Zap, Bot, Cpu, Database, Globe } from 'lucide-react';
import { Button } from './ui/Button';

const workflowSteps = [
  { id: 1, label: 'User Request', icon: Globe, description: 'Natural language input', color: '#4F7CFF' },
  { id: 2, label: 'AI Agent', icon: Bot, description: 'Plans & reasons', color: '#8B5CF6' },
  { id: 3, label: 'Automation', icon: Cpu, description: 'Executes logic', color: '#22D3EE' },
  { id: 4, label: 'Business Tools', icon: Database, description: 'Integrates systems', color: '#10B981' },
  { id: 5, label: 'Results', icon: Zap, description: 'Delivers outcomes', color: '#F59E0B' },
];

export function AISection() {
  return (
    <section
      className="relative section-padding overflow-hidden"
      aria-labelledby="ai-heading"
    >
      {/* Animated gradient bg */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        animate={{
          background: [
            'radial-gradient(ellipse at center, rgba(79,124,255,0.1) 0%, transparent 70%)',
            'radial-gradient(ellipse at center, rgba(139,92,246,0.1) 0%, transparent 70%)',
            'radial-gradient(ellipse at center, rgba(34,211,238,0.1) 0%, transparent 70%)',
            'radial-gradient(ellipse at center, rgba(79,124,255,0.1) 0%, transparent 70%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
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
            AI-POWERED FUTURE
          </span>
          <h2
            id="ai-heading"
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6"
          >
            Your Business Should{' '}
            <br />
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #4F7CFF, #8B5CF6, #22D3EE)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Work Smarter
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
            We design intelligent systems that combine AI, automation and modern software to
            reduce manual work and unlock new possibilities.
          </p>
        </motion.div>

        {/* Workflow visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Desktop horizontal flow */}
          <div
            className="hidden md:flex items-start justify-between relative"
            role="img"
            aria-label="AI workflow: User Request → AI Agent → Automation → Business Tools → Results"
          >
            {/* Connecting line */}
            <motion.div
              className="absolute top-10 left-10 right-10 h-0.5"
              style={{
                background: 'linear-gradient(90deg, #4F7CFF, #8B5CF6, #22D3EE, #10B981, #F59E0B)',
              }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
              aria-hidden="true"
            />

            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
                className="flex flex-col items-center relative z-10 flex-1"
              >
                {/* Node */}
                <motion.div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4 relative"
                  style={{
                    background: `linear-gradient(135deg, ${step.color}25, ${step.color}45)`,
                    border: `1px solid ${step.color}50`,
                  }}
                  animate={{
                    boxShadow: [
                      `0 0 15px ${step.color}30`,
                      `0 0 35px ${step.color}55`,
                      `0 0 15px ${step.color}30`,
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.4 }}
                >
                  <step.icon className="w-8 h-8" style={{ color: step.color }} aria-hidden="true" />
                  {/* Step number */}
                  <span
                    className="absolute -top-2 -right-2 w-5 h-5 rounded-full text-xs font-bold text-white flex items-center justify-center"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.id}
                  </span>
                </motion.div>

                <h4 className="font-display font-bold text-white text-center mb-1 text-sm">
                  {step.label}
                </h4>
                <p className="text-text-secondary text-xs text-center max-w-[100px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Mobile vertical flow */}
          <div className="md:hidden space-y-4" role="list" aria-label="AI workflow steps">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.08]"
                style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
                role="listitem"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${step.color}20, ${step.color}40)`,
                    border: `1px solid ${step.color}40`,
                  }}
                >
                  <step.icon className="w-6 h-6" style={{ color: step.color }} aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">{step.label}</h4>
                  <p className="text-text-secondary text-xs">{step.description}</p>
                </div>
                {index < workflowSteps.length - 1 && (
                  <div
                    className="ml-auto text-text-secondary/40"
                    aria-hidden="true"
                  >
                    ↓
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-16 text-center"
          >
            <Button
              variant="primary"
              size="lg"
              className="group"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore AI Solutions
              <ArrowRight
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                aria-hidden="true"
              />
            </Button>
          </motion.div>
        </motion.div>

        {/* Feature cards */}
        <div className="mt-24 grid md:grid-cols-3 gap-6">
          {[
            { icon: Bot, title: 'Custom AI Agents', desc: 'Tailored agents for your specific workflows', color: '#4F7CFF' },
            { icon: Zap, title: 'Process Automation', desc: 'End-to-end workflow automation', color: '#8B5CF6' },
            { icon: Cpu, title: 'AI Integration', desc: 'Seamless LLM integration into products', color: '#22D3EE' },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              className="glass-card p-6 text-center hover:border-accent-blue/30 transition-all duration-300 group"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${item.color}20, ${item.color}35)`,
                }}
              >
                <item.icon className="w-7 h-7" style={{ color: item.color }} aria-hidden="true" />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-2">{item.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
