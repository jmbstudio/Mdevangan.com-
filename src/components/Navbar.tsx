import { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#process', label: 'Process' },
  { href: '#about', label: 'About' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // GSAP entrance
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo(navRef.current, { y: -80, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
    tl.fromTo('.nav-link', { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.08 }, '-=0.4');
    tl.fromTo('.nav-cta', { scale: 0.85, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4 }, '-=0.3');
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: isScrolled
          ? 'rgba(5,7,15,0.92)'
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(24px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(24px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
      }}
      role="banner"
    >
      <nav className="container-custom" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            ref={logoRef}
            href="#home"
            className="flex items-center gap-2 group"
            aria-label="MDEWANGAN - Home"
          >
            <div
              className="w-8 h-8 rounded-sm flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #c9a84c, #e8c96a)' }}
            >
              <span className="text-xs font-black text-bg-dark font-syne tracking-tight">MD</span>
            </div>
            <span className="font-syne font-800 text-lg text-white tracking-tight">
              DEWANGAN
              <span className="text-gold">.</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link relative text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300 py-2 group"
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <button
              className="nav-cta btn-gold hidden lg:inline-flex"
              onClick={() => scrollTo('#contact')}
            >
              Let's Talk
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 text-white hover:text-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div
            className="lg:hidden border-t overflow-hidden"
            style={{
              borderColor: 'rgba(255,255,255,0.05)',
              background: 'rgba(5,7,15,0.98)',
            }}
          >
            <div className="py-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3.5 text-gray-400 hover:text-white hover:bg-white/5 font-medium transition-all duration-200 rounded-lg mx-2 text-sm"
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 px-4 border-t" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                <button
                  className="btn-gold w-full justify-center"
                  onClick={() => scrollTo('#contact')}
                >
                  Let's Talk <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
