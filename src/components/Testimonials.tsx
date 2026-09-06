import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from './ui/Card';
import { cn } from '../lib/utils';

const testimonials = [
  {
    quote: "Working with Mukesh was a game-changer for our startup. He didn't just build our product — he understood our vision and helped us ship faster than we thought possible.",
    author: 'Sarah Chen',
    role: 'Founder & CEO',
    company: 'TechFlow AI',
    avatar: 'SC',
  },
  {
    quote: "The AI automation system they built reduced our manual workload by 80%. What used to take days now happens automatically. Incredible ROI.",
    author: 'Marcus Johnson',
    role: 'VP Operations',
    company: 'ScaleUp Ventures',
    avatar: 'MJ',
  },
  {
    quote: "Best development experience I've had in 15 years. Clean code, proactive communication, and they actually care about the business outcome.",
    author: 'Elena Rodriguez',
    role: 'CTO',
    company: 'FinTech Solutions',
    avatar: 'ER',
  },
  {
    quote: 'They delivered our mobile app on time and within budget. The attention to detail in the UX is exceptional — our users love it.',
    author: 'David Park',
    role: 'Product Director',
    company: 'HealthTech Inc',
    avatar: 'DP',
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = useCallback(
    () => setCurrentIndex((prev) => (prev + 1) % testimonials.length),
    []
  );
  const prev = useCallback(
    () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length),
    []
  );

  const visible = [0, 1, 2].map((offset) => testimonials[(currentIndex + offset) % testimonials.length]);

  return (
    <section
      className="relative section-padding overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at top, rgba(34,211,238,0.05) 0%, transparent 60%)',
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] text-sm font-medium text-accent-cyan mb-6"
            style={{ backgroundColor: 'rgba(34,211,238,0.08)' }}
          >
            WHAT CLIENTS SAY
          </span>
          <h2
            id="testimonials-heading"
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6"
          >
            What Clients Say
          </h2>
          <p className="text-lg lg:text-xl text-text-secondary leading-relaxed">
            Real feedback from founders and leaders we've partnered with.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto" role="list" aria-label="Client testimonials">
          {visible.map((testimonial, index) => (
            <motion.article
              key={`${testimonial.author}-${currentIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
              role="listitem"
            >
              <Card
                variant={index === 1 ? 'elevated' : 'glass'}
                padding="lg"
                className="h-full relative overflow-hidden"
              >
                {index === 1 && (
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5"
                    style={{ background: 'linear-gradient(90deg, #4F7CFF, #8B5CF6)' }}
                    aria-hidden="true"
                  />
                )}

                {/* Quote icon */}
                <Quote className="w-10 h-10 text-accent-blue/15 mb-4" aria-hidden="true" />

                {/* Stars */}
                <div className="flex items-center gap-1 mb-5" aria-label="5 star rating">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                  ))}
                </div>

                <blockquote className="text-text-secondary leading-relaxed mb-6 text-sm">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-3 mt-auto">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center font-semibold text-sm text-accent-blue flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, rgba(79,124,255,0.2), rgba(139,92,246,0.2))' }}
                    aria-hidden="true"
                  >
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{testimonial.author}</p>
                    <p className="text-xs text-text-secondary">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.article>
          ))}
        </div>

        {/* Controls */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <motion.button
            onClick={prev}
            className="w-11 h-11 rounded-xl border border-white/[0.08] flex items-center justify-center text-text-secondary hover:text-white hover:border-accent-blue/50 transition-all duration-300"
            style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" aria-hidden="true" />
          </motion.button>

          <div className="flex items-center gap-2" role="tablist">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  'h-2 rounded-full transition-all duration-300',
                  index === currentIndex
                    ? 'w-8 bg-accent-blue'
                    : 'w-2 bg-white/20 hover:bg-white/40'
                )}
                role="tab"
                aria-selected={index === currentIndex}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <motion.button
            onClick={next}
            className="w-11 h-11 rounded-xl border border-white/[0.08] flex items-center justify-center text-text-secondary hover:text-white hover:border-accent-blue/50 transition-all duration-300"
            style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" aria-hidden="true" />
          </motion.button>
        </div>

        <p className="mt-8 text-center text-text-secondary/40 text-xs">
          * Placeholder testimonials — replace with real client feedback
        </p>
      </div>
    </section>
  );
}
