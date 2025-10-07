'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Zap, Heart, Twitter, Facebook, Instagram, Code } from 'lucide-react';

// NOTE: Make sure you have a font file at /public/fonts/SAMAN___.ttf
// and a logo at /public/tea-cup-svgrepo-com.svg for them to load correctly.

// Define a type for the props of FeatureCard
type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

// A single feature card with its own spotlight effect
const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div
      className="relative p-8 rounded-lg bg-brand-surface border border-transparent hover:border-brand-primary/30 overflow-hidden transition-all duration-300 group"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePosition({ x: -100, y: -100 })}
    >
      <div
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-primary rounded-full opacity-0 blur-3xl transition-opacity duration-500"
        style={{ left: mousePosition.x, top: mousePosition.y, opacity: mousePosition.x > -100 ? 0.1 : 0 }}
      />
      <div className="relative z-10">
        <div className="flex items-center justify-center h-12 w-12 bg-brand-background rounded-lg mb-6">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-brand-text mb-3 font-heading transition-colors duration-300 group-hover:text-brand-primary">{title}</h3>
        <p className="text-brand-muted font-body">{description}</p>
      </div>
    </div>
  );
};

// Main Home Page Component
const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="min-h-screen bg-brand-background text-brand-muted font-body" onMouseMove={handleMouseMove}>
       <style dangerouslySetInnerHTML={{ __html: `
        @font-face {
          font-family: 'SAMAN___';
          src: url('/fonts/SAMAN___.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
      ` }} />
      <div
        className="absolute top-0 left-0 w-full h-full bg-grid-pattern"
        style={{
          maskImage: 'radial-gradient(circle at center, white, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(circle at center, white, transparent 70%)'
        }}
      />

      {/* Spotlight Effect for the whole page (subtle cyan) */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(100, 255, 218, 0.08), transparent 80%)`
        }}
      />

      <header className="relative z-20">
        <nav className={`fixed top-0 left-0 w-full p-6 flex items-center justify-between z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-background/80 backdrop-blur-lg shadow-2xl border-b border-brand-surface' : 'bg-transparent'}`}>
          <div className="flex-1"></div>
          <div className="flex-1 flex justify-center">
            <a href="#" className="flex items-center gap-3">
              <img
                src="/tea-cup-svgrepo-com.svg"
                alt="Chai4Me Logo"
                className="w-12 h-12 shrink-0"
              />
              <div className={`transition-all duration-500 ease-in-out grid ${isScrolled ? 'grid-cols-[1fr]' : 'grid-cols-[0fr]'}`}>
                <div className="overflow-hidden">
                  <span
                    className="font-bold text-2xl text-brand-text tracking-wider whitespace-nowrap"
                    style={{ fontFamily: "'SAMAN___', sans-serif" }}
                  >
                    CHAI4ME
                  </span>
                </div>
              </div>
            </a>
          </div>
          <div className="hidden md:flex flex-1 justify-end items-center space-x-4">
            <button className="text-brand-text font-semibold hover:text-brand-primary transition-colors font-heading">Log in</button>
            <button className="bg-brand-primary text-brand-background px-5 py-2 rounded-md font-semibold hover:bg-opacity-80 transition-colors font-heading">Start my page</button>
          </div>
          <div className="md:hidden flex-1 flex justify-end">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} className="text-brand-text" /> : <Menu size={24} className="text-brand-text" />}
            </button>
          </div>
        </nav>
      </header>

      <main className="relative z-10">
        <section className="h-screen flex flex-col justify-center items-center text-center px-4 pt-24">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tighter font-heading text-brand-text">
            Support your favorite<br />Indian creators with a cup of chai.
          </h1>
          <div className="mt-10 flex justify-center w-full">
            <div className="relative w-full max-w-lg">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-grow">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-muted font-body">
                    chai4me.in/
                  </span>
                  <input
                    type="text"
                    placeholder="your-name"
                    className="w-full pl-28 pr-4 py-4 rounded-md bg-brand-surface border border-brand-surface/50 text-brand-text focus:ring-2 focus:ring-brand-primary focus:outline-none placeholder-brand-muted/70 font-body"
                  />
                </div>
                <button className="w-full sm:w-auto px-8 py-4 bg-brand-primary text-brand-background rounded-md font-semibold hover:bg-opacity-80 transition-colors shrink-0 font-heading">
                  Claim Your Chai
                </button>
              </div>
            </div>
          </div>
        </section>
        <Features />
        <Testimonials />
        <CallToAction />
      </main>

      <Footer />
    </div>
  );
};


// Features Component
const Features = () => {
  const featureList = [
    {
      icon: <Zap className="h-8 w-8 text-brand-primary" />,
      title: 'Effortless UPI Payments',
      description: "Receive support directly to your bank account with any UPI app. No complicated setups or high fees."
    },
    {
      icon: <Heart className="h-8 w-8 text-brand-primary" />,
      title: 'Direct & Simple',
      description: 'Build a reliable income stream with one-time support or recurring memberships for your top fans.'
    },
    {
      icon: <Code className="h-8 w-8 text-brand-primary" />,
      title: 'Open Source & Free',
      description: 'Chai4Me is a community-driven project. It\'s completely free to use, forever. No hidden costs.'
    }
  ];

  return (
    <section className="py-24 bg-brand-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-text font-heading">Built for India. Open for Everyone.</h2>
          <p className="mt-4 text-lg text-brand-muted font-body">A simple, free, and open-source way for your audience to show their support.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {featureList.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Component
const Testimonials = () => {
  const testimonialList = [
    {
      quote: "Finally, a platform that understands the Indian creator economy. UPI makes it so simple for my followers to support my work instantly.",
      author: 'Priya Patel',
      handle: 'UI/UX Designer',
      avatar: 'https://placehold.co/100x100/64FFDA/0A192F?text=PP'
    },
    {
      quote: "As an open-source developer, using a platform that is also open-source just feels right. The transparency is amazing, and it's completely free!",
      author: 'Rohan Sharma',
      handle: 'Developer',
      avatar: 'https://placehold.co/100x100/8892B0/0A192F?text=RS'
    },
    {
      quote: "Setting up my page took less time than making a cup of chai! It's the perfect, no-fuss tool for any creator in India.",
      author: 'Arjun Menon',
      handle: 'Musician',
      avatar: 'https://placehold.co/100x100/CCD6F6/0A192F?text=AM'
    },
  ];

  return (
    <section className="py-24 bg-brand-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-text font-heading">Loved by Creators Across India</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonialList.map((testimonial, index) => (
            <div key={index} className="bg-brand-surface p-8 rounded-lg border border-transparent hover:border-brand-primary/30">
              <p className="text-brand-muted mb-6 font-body">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img src={testimonial.avatar} alt={testimonial.author} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="font-semibold text-brand-text font-heading">{testimonial.author}</p>
                  <p className="text-sm text-brand-muted font-body">@{testimonial.handle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CallToAction Component
const CallToAction = () => {
  return (
    <section className="bg-brand-surface py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-brand-text font-heading">Ready to Start?</h2>
        <p className="mt-4 text-lg text-brand-muted max-w-2xl mx-auto font-body">It's free, open-source, and takes less than a minute. Your audience is waiting to buy you a chai.</p>
        <div className="mt-8">
          <a href="#" className="inline-block px-10 py-4 bg-brand-primary text-brand-background rounded-md font-semibold hover:bg-opacity-80 transition-colors font-heading">
            Start My Page
          </a>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-brand-surface border-t border-brand-primary/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <h3
              className="font-bold text-xl mb-4 text-brand-text"
              style={{ fontFamily: "'SAMAN___', sans-serif" }}
            >
              CHAI4ME
            </h3>
            <p className="text-brand-muted text-sm font-body">&copy; 2025 CHAI4ME. All rights reserved.</p>
            <div className="flex space-x-5 mt-6">
              <a href="#" className="text-brand-muted hover:text-brand-primary"><Twitter size={20} /></a>
              <a href="#" className="text-brand-muted hover:text-brand-primary"><Facebook size={20} /></a>
              <a href="#" className="text-brand-muted hover:text-brand-primary"><Instagram size={20} /></a>
            </div>
          </div>
          <div>
          </div>
          <div>
            <h4 className="font-semibold text-brand-text mb-4 font-heading">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-brand-muted hover:text-brand-primary font-body">About</a></li>
              <li><a href="#" className="text-brand-muted hover:text-brand-primary font-body">Blog</a></li>
              <li><a href="#" className="text-brand-muted hover:text-brand-primary font-body">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-brand-text mb-4 font-heading">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-brand-muted hover:text-brand-primary font-body">Documentation</a></li>
              <li><a href="#" className="text-brand-muted hover:text-brand-primary font-body">GitHub</a></li>
              <li><a href="#" className="text-brand-muted hover:text-brand-primary font-body">Community</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HomePage;