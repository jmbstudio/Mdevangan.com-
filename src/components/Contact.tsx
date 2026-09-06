import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Button } from './ui/Button';
import { Input, Textarea, Select } from './ui/Input';

// ─── EmailJS Config ───────────────────────────────────────────────
// Yahan apne EmailJS account ke IDs daalo (niche instructions hain)
const EMAILJS_SERVICE_ID  = 'service_79dwjzp';
const EMAILJS_TEMPLATE_ID = 'template_4glg3io';
const EMAILJS_PUBLIC_KEY  = 'kt5C0yKpHl3uei-_P';
// ─────────────────────────────────────────────────────────────────

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
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    description: '',
  });
  const [errors, setErrors]         = useState<Partial<FormData>>({});
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg]     = useState('');

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim())        newErrors.name        = 'Name is required';
    if (!formData.email.trim())       newErrors.email       = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
                                      newErrors.email       = 'Invalid email address';
    if (!formData.projectType)        newErrors.projectType = 'Please select a project type';
    if (!formData.budget)             newErrors.budget      = 'Please select a budget range';
    if (!formData.description.trim()) newErrors.description = 'Project description is required';
    else if (formData.description.trim().length < 20)
                                      newErrors.description = 'Please provide more detail (min 20 chars)';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitStatus('submitting');
    setErrorMsg('');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:    formData.name,
          from_email:   formData.email,
          company:      formData.company || 'N/A',
          project_type: formData.projectType,
          budget:       formData.budget,
          message:      formData.description,
          to_email:     'mdewangan8180@gmail.com',
        },
        EMAILJS_PUBLIC_KEY
      );
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', projectType: '', budget: '', description: '' });
    } catch (err: any) {
      console.error('EmailJS error:', err);
      setErrorMsg('Something went wrong. Please try again or email us directly at mdewangan8180@gmail.com');
      setSubmitStatus('error');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // ── Success screen ──────────────────────────────────────────────
  if (submitStatus === 'success') {
    return (
      <section id="contact" className="relative section-padding overflow-hidden" aria-labelledby="contact-heading">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="max-w-md mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8"
              style={{ background: 'linear-gradient(135deg, #4F7CFF, #8B5CF6)' }}
            >
              <CheckCircle className="w-12 h-12 text-white" aria-hidden="true" />
            </motion.div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-4">
              Message Sent! 🎉
            </h2>
            <p className="text-text-secondary leading-relaxed mb-3">
              Thank you for reaching out. We'll review your project details and get back to you within <strong className="text-white">24 hours</strong>.
            </p>
            <p className="text-text-secondary/60 text-sm mb-8">
              A copy has been sent to <span className="text-accent-blue">mdewangan8180@gmail.com</span>
            </p>
            <Button variant="primary" size="lg" onClick={() => setSubmitStatus('idle')}>
              Send Another Inquiry
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  // ── Main form ───────────────────────────────────────────────────
  return (
    <section id="contact" className="relative section-padding overflow-hidden" aria-labelledby="contact-heading">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse at bottom, rgba(139,92,246,0.06) 0%, transparent 60%)' }}
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] text-sm font-medium text-accent-purple mb-6"
            style={{ backgroundColor: 'rgba(139,92,246,0.08)' }}
          >
            LET'S CREATE
          </span>
          <h2
            id="contact-heading"
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6"
          >
            Let's Create Something{' '}
            <br />
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #4F7CFF, #8B5CF6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Amazing.
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-text-secondary leading-relaxed">
            Tell us about your project. We'll respond with a tailored proposal within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-4">
                Start Your Project
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Fill out the form and we'll schedule a free consultation to discuss your vision, timeline, and budget.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: '⚡', label: 'Fast Response', desc: 'Within 24 hrs' },
                { icon: '💡', label: 'Free Consult', desc: 'No obligation' },
                { icon: '🔒', label: 'NDA Ready', desc: 'Ideas protected' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                  className="p-4 rounded-xl border border-white/[0.08] text-center"
                  style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
                >
                  <span className="text-2xl mb-2 block">{item.icon}</span>
                  <p className="font-semibold text-white text-sm">{item.label}</p>
                  <p className="text-xs text-text-secondary mt-0.5">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="space-y-3 text-text-secondary text-sm">
              <p>
                <span className="text-white font-medium">Email: </span>
                <a href="mailto:mdewangan8180@gmail.com" className="text-accent-blue hover:underline">
                  mdewangan8180@gmail.com
                </a>
              </p>
              <p>
                <span className="text-white font-medium">Phone: </span>
                <a href="tel:+919907718878" className="text-accent-blue hover:underline">
                  +91 9907718878
                </a>
              </p>
              <p><span className="text-white font-medium">Response time: </span>Within 24 hours</p>
              <p><span className="text-white font-medium">Projects: </span>Global clients welcome</p>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {/* Error banner */}
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-3 p-4 rounded-xl border border-red-500/30 mb-6"
                style={{ backgroundColor: 'rgba(239,68,68,0.08)' }}
                role="alert"
              >
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-red-400 text-sm">{errorMsg}</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid sm:grid-cols-2 gap-5">
                <Input
                  label="Name *"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  error={errors.name}
                  required
                />
                <Input
                  label="Email *"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  error={errors.email}
                  required
                />
              </div>

              <Input
                label="Company (Optional)"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your company name"
              />

              <div className="grid sm:grid-cols-2 gap-5">
                <Select
                  label="What do you want to build? *"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  options={projectTypes}
                  error={errors.projectType}
                  required
                />
                <Select
                  label="Budget Range *"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  options={budgetRanges}
                  error={errors.budget}
                  required
                />
              </div>

              <Textarea
                label="Project Description *"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Tell us about your project, goals, timeline, and requirements..."
                rows={5}
                error={errors.description}
                required
              />

              <Button
                type="submit"
                size="lg"
                variant="primary"
                isLoading={submitStatus === 'submitting'}
                className="w-full group"
              >
                Send Project Inquiry
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
              </Button>

              <p className="text-xs text-text-secondary/40 text-center">
                Your inquiry will be sent directly to{' '}
                <span className="text-text-secondary/60">mdewangan8180@gmail.com</span>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
