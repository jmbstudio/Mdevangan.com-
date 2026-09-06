import { motion } from 'framer-motion';
import { Linkedin, Instagram, Github, ArrowRight } from 'lucide-react';

const footerLinks = {
  services: [
    { label: 'Premium Websites', href: '#services' },
    { label: 'Mobile Applications', href: '#services' },
    { label: 'AI Agents', href: '#services' },
    { label: 'Automation Systems', href: '#services' },
    { label: 'Custom Software', href: '#services' },
  ],
  company: [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
];

export function Footer() {
  return (
    <footer
      className="relative border-t border-white/[0.08] overflow-hidden"
      role="contentinfo"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'linear-gradient(to top, rgba(7,11,20,0.8) 0%, transparent 100%)',
        }}
      />

      <div className="container-custom relative z-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <a
              href="#home"
              className="font-display font-bold text-2xl lg:text-3xl text-white tracking-tight inline-block mb-5"
              aria-label="MDEWANGAN - Home"
            >
              MDEWANGAN<span className="text-accent-blue">.</span>
            </a>
            <p className="text-text-secondary leading-relaxed mb-4 max-w-xs text-sm">
              Building digital products for the future.
            </p>
            <div className="space-y-2 mb-6 text-sm">
              <a href="mailto:mdewangan8180@gmail.com" className="flex items-center gap-2 text-text-secondary hover:text-accent-blue transition-colors duration-300">
                <span>✉</span> mdewangan8180@gmail.com
              </a>
              <a href="tel:+919907718878" className="flex items-center gap-2 text-text-secondary hover:text-accent-blue transition-colors duration-300">
                <span>📞</span> +91 9907718878
              </a>
            </div>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-text-secondary hover:text-white hover:border-accent-blue/50 border border-white/[0.08] transition-all duration-300"
                  style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" aria-hidden="true" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <h4 className="font-semibold text-white mb-6 text-sm tracking-wide uppercase">
              Services
            </h4>
            <nav aria-label="Footer services">
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <motion.a
                      href={link.href}
                      className="text-text-secondary hover:text-accent-blue transition-colors duration-300 text-sm"
                      whileHover={{ x: 4 }}
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h4 className="font-semibold text-white mb-6 text-sm tracking-wide uppercase">
              Company
            </h4>
            <nav aria-label="Footer company">
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <motion.a
                      href={link.href}
                      className="text-text-secondary hover:text-accent-blue transition-colors duration-300 text-sm"
                      whileHover={{ x: 4 }}
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h4 className="font-semibold text-white mb-6 text-sm tracking-wide uppercase">
              Legal
            </h4>
            <nav aria-label="Footer legal">
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <motion.a
                      href={link.href}
                      className="text-text-secondary hover:text-accent-blue transition-colors duration-300 text-sm"
                      whileHover={{ x: 4 }}
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-text-secondary/50 text-sm">
            © {new Date().getFullYear()} Mukesh Dewangan. All rights reserved.
          </p>

          <motion.a
            href="#contact"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/[0.08] text-text-secondary hover:text-white hover:border-accent-blue/50 transition-all duration-300 text-sm font-medium"
            style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
            whileHover={{ x: 2 }}
          >
            Start a Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
}
