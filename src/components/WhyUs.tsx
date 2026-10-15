import { useEffect, useRef } from 'react';
import { Shield, Clock, TrendingUp, Users, Code2, Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    icon: Code2,
    title: 'Senior-Level Quality',
    desc: 'Every project is built with production-grade code — clean, scalable, and maintainable long-term.',
    color: '#5b8dee',
  },
  {
    icon: Clock,
    title: 'On Time, Every Time',
    desc: 'We set realistic deadlines and hit them. Transparent updates throughout, no nasty surprises.',
    color: '#c9a84c',
  },
  {
    icon: TrendingUp,
    title: 'Business-First Thinking',
    desc: 'We think like your co-founder, not just a coder. Every decision is driven by your business goals.',
    color: '#a78bfa',
  },
  {
    icon: Shield,
    title: 'Secure by Default',
    desc: 'Security is never an afterthought. Authentication, data handling, and APIs are built to best practices.',
    color: '#67e8f9',
  },
  {
    icon: Users,
    title: 'True Partnership',
    desc: 'You get direct access to the person building your product. No project managers, no miscommunication.',
    color: '#f9a8d4',
  },
  {
    icon: Star,
    title: 'Premium Support',
    desc: 'Launch is just the beginning. Ongoing support ensures your product keeps running smoothly.',
    color: '#86efac',
  },
];

export function WhyUs() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.why-header',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.why-header', start: 'top 80%' } }
      );
      gsap.fromTo('.why-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.why-grid', start: 'top 75%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative section-padding overflow-hidden"
      aria-labelledby="why-heading"
    >
      <div className="noise-overlay" aria-hidden="true" />

      <div className="container-custom relative z-10">
        <div className="why-header text-center max-w-2xl mx-auto mb-16 opacity-0">
          <span className="label-tag mb-5 inline-flex">Why Choose Us</span>
          <h2
            id="why-heading"
            className="heading-lg text-white mb-5"
            style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
          >
            Built Different,
            <br />
            <span className="text-gradient-gold">Delivered Better</span>
          </h2>
          <p className="text-gray-400 leading-relaxed">
            We don't just write code. We partner with you to build digital products that grow your business.
          </p>
        </div>

        <div className="why-grid grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="why-card opacity-0 group p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 cursor-default"
              style={{
                background: 'rgba(10,13,26,0.6)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${reason.color}15`, border: `1px solid ${reason.color}30` }}
              >
                <reason.icon className="w-5 h-5" style={{ color: reason.color }} aria-hidden="true" />
              </div>
              <h3 className="font-syne font-bold text-white mb-2.5">{reason.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
