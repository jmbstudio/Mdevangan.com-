import { useState, useEffect, useRef } from 'react';
import { Send, CheckCircle, AlertCircle, Mail, Phone, Clock, ArrowUpRight } from 'lucide-react';
import emailjs from '@emailjs/browser';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Input, Textarea, Select } from './ui/Input';

gsap.registerPlugin(ScrollTrigger);

const EMAILJS_SERVICE_ID  = 'service_79dwjzp';
const EMAILJS_TEMPLATE_ID = 'template_4glg3io';
const EMAILJS_PUBLIC_KEY  = 'kt5C0yKpHl3uei-_P';

const projectTypes = [
  { value: '', label: 'Select project type' },
  { value: 'website', label: 'Website' },
  { value: 'webapp', label: 'Web Application' },
  { value: 'mobile', label: 'Mobile App' },
  { value: 'ai-agent', label: 'AI Agent' },
  { value: 'automation', label: 'Automation' },
  { value: 'custom', label: 'Custom Software' },
  { value: 'other', label: 'Other' },
];

const budgetRanges = [
  { value: '', label: 'Select budget range' },
  { value: 'under-25k', label: 'Under ₹25K' },
  { value: '25k-50k', label: '₹25K – ₹50K' },
  { value: '50k-1l', label: '₹50K – ₹1L' },
  { value: '1l-5l', label: '₹1L – ₹5L' },
  { value: '5l-plus', label: '₹5L+' },
];

interface FormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  description: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '', email: '', company: '', projectType: '', budget: '', description: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-left',
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: '.contact-left', start: 'top 80%' } }
      );
      gsap.fromTo('.contact-right',
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: '.contact-right', start: 'top 80%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const validate = (): boolean => {
    const e: Partial<FormData> = {};
    if (!formData.name.trim())        e.name = 'Name is required';
    if (!formData.email.trim())       e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = 'Invalid email';
    if (!formData.projectType)        e.projectType = 'Please select a project type';
    if (!formData.budget)             e.budget = 'Please select a budget range';
    if (!formData.description.trim()) e.description = 'Description is required';
    else if (formData.description.trim().length < 20) e.description = 'Please provide more detail (min 20 chars)';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitStatus('submitting');
    setErrorMsg('');
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: formData.name, from_email: formData.email,
        company: formData.company || 'N/A', project_type: formData.projectType,
        budget: formData.budget, message: formData.description, to_email: 'mdewangan8180@gmail.com',
      }, EMAILJS_PUBLIC_KEY);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', projectType: '', budget: '', description: '' });
    } catch (err) {
      setErrorMsg('Something went wrong. Please email mdewangan8180@gmail.com directly.');
      setSubmitStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  if (submitStatus === 'success') {
    return (
      <section id="contact" className="relative section-padding overflow-hidden" ref={sectionRef}>
        <div className="container-custom relative z-10">
          <div className="max-w-md mx-auto text-center py-20">
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8"
              style={{ background: 'linear-gradient(135deg, #c9a84c, #e8c96a)' }}
            >
              <CheckCircle className="w-12 h-12 text-bg-dark" aria-hidden="true" />
            </div>
            <h2 className="font-syne font-extrabold text-4xl text-white mb-4">Message Sent!</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Thank you for reaching out. I'll review your details and respond within <strong className="text-white">24 hours</strong>.
            </p>
            <button className="btn-gold" onClick={() => setSubmitStatus('idle')}>
              Send Another Message <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative section-padding overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <div className="noise-overlay" aria-hidden="true" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(201,168,76,0.05) 0%, transparent 60%)' }}
        aria-hidden="true"
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="label-tag mb-5 inline-flex">Get in Touch</span>
          <h2
            id="contact-heading"
            className="heading-lg text-white mb-5"
            style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
          >
            Start Your Project
            <br />
            <span className="text-gradient-gold">Today</span>
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Tell us about your project. We'll respond with a detailed proposal within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {/* Left — Info */}
          <div className="contact-left opacity-0 lg:col-span-2 space-y-6">
            {[
              { icon: Mail, label: 'Email', value: 'mdewangan8180@gmail.com', href: 'mailto:mdewangan8180@gmail.com', color: '#c9a84c' },
              { icon: Phone, label: 'Phone / WhatsApp', value: '+91 9907718878', href: 'tel:+919907718878', color: '#5b8dee' },
              { icon: Clock, label: 'Response Time', value: 'Within 24 hours', href: null, color: '#a78bfa' },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 p-5 rounded-xl"
                style={{ background: 'rgba(10,13,26,0.6)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
                >
                  <item.icon className="w-4 h-4" style={{ color: item.color }} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-sm font-medium text-white hover:text-gold transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-white">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Perks */}
            <div className="space-y-3 pt-2">
              {['Free 30-min discovery call', 'No obligation quote', 'NDA available on request', 'Global clients welcome'].map((perk) => (
                <div key={perk} className="flex items-center gap-2.5 text-sm text-gray-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" aria-hidden="true" />
                  {perk}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="contact-right opacity-0 lg:col-span-3">
            {submitStatus === 'error' && (
              <div
                className="flex items-start gap-3 p-4 rounded-xl mb-6"
                style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.25)' }}
                role="alert"
              >
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-red-400 text-sm">{errorMsg}</p>
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="space-y-5 p-7 rounded-2xl"
              style={{ background: 'rgba(10,13,26,0.6)', border: '1px solid rgba(255,255,255,0.06)' }}
              noValidate
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Input label="Name *" name="name" value={formData.name} onChange={handleChange}
                  placeholder="Your name" error={errors.name} required />
                <Input label="Email *" name="email" type="email" value={formData.email}
                  onChange={handleChange} placeholder="you@company.com" error={errors.email} required />
              </div>

              <Input label="Company (Optional)" name="company" value={formData.company}
                onChange={handleChange} placeholder="Your company name" />

              <div className="grid sm:grid-cols-2 gap-5">
                <Select label="What do you want to build? *" name="projectType" value={formData.projectType}
                  onChange={handleChange} options={projectTypes} error={errors.projectType} required />
                <Select label="Budget Range *" name="budget" value={formData.budget}
                  onChange={handleChange} options={budgetRanges} error={errors.budget} required />
              </div>

              <Textarea label="Project Description *" name="description" value={formData.description}
                onChange={handleChange}
                placeholder="Tell us about your project, goals, timeline, and requirements..."
                rows={4} error={errors.description} required />

              <button
                type="submit"
                disabled={submitStatus === 'submitting'}
                className="btn-gold w-full justify-center text-sm"
                style={{ opacity: submitStatus === 'submitting' ? 0.7 : 1 }}
              >
                {submitStatus === 'submitting' ? 'Sending...' : (
                  <>
                    Send Project Inquiry
                    <Send className="w-4 h-4" aria-hidden="true" />
                  </>
                )}
              </button>

              <p className="text-xs text-gray-600 text-center">
                Your inquiry is sent directly to mdewangan8180@gmail.com
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
