import { ArrowUpRight, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const links = {
  Services: ['Websites', 'Mobile Apps', 'AI Agents', 'Automation', 'Custom Software'],
  Company: ['About', 'Work', 'Process', 'Contact'],
};

const socials = [
  { icon: Github, label: 'GitHub', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Mail, label: 'Email', href: 'mailto:mdewangan8180@gmail.com' },
];

export function Footer() {
  const scrollTo = (id: string) =>
    document.querySelector(`#${id.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer
      className="relative pt-20 pb-8 overflow-hidden"
      style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
      role="contentinfo"
    >
      <div className="noise-overlay" aria-hidden="true" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div
                className="w-8 h-8 rounded-sm flex items-center justify-center font-syne font-black text-xs text-bg-dark"
                style={{ background: 'linear-gradient(135deg, #c9a84c, #e8c96a)' }}
              >
                MD
              </div>
              <span className="font-syne font-bold text-white text-lg">
                DEWANGAN<span className="text-gold">.</span>
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed mb-6 max-w-xs text-sm">
              Building premium digital products — websites, mobile apps, AI agents,
              and automation systems for ambitious businesses worldwide.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-500 hover:text-white hover:border-gold/40 transition-all duration-300"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <s.icon className="w-4 h-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h3 className="font-syne font-semibold text-sm text-white uppercase tracking-widest mb-5">
                {category}
              </h3>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollTo(item)}
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-300 text-left"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-5 p-6 rounded-2xl mb-12"
          style={{
            background: 'rgba(201,168,76,0.06)',
            border: '1px solid rgba(201,168,76,0.15)',
          }}
        >
          <div>
            <p className="font-syne font-bold text-white">Ready to start your project?</p>
            <p className="text-sm text-gray-400 mt-0.5">Let's build something great together.</p>
          </div>
          <button
            className="btn-gold flex-shrink-0"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get in Touch <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Mukesh Dewangan. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Built with React, TypeScript & GSAP
          </p>
        </div>
      </div>
    </footer>
  );
}
