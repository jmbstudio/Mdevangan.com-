import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { FeaturedWork } from './components/FeaturedWork';
import { TechStack } from './components/TechStack';
import { AISection } from './components/AISection';
import { Process } from './components/Process';
import { WhyUs } from './components/WhyUs';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Stats />
        <Services />
        <FeaturedWork />
        <TechStack />
        <AISection />
        <Process />
        <WhyUs />
        <About />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
