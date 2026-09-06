/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GalleryGrid from './components/GalleryGrid';
import ContactSection from './components/ContactSection';
import MagazineBanner from './components/MagazineBanner';
import PrintsPage from './components/PrintsPage';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'contacto' | 'shop'>('home');

  // Ensure on initial load and refresh that we start at Home and remove any old sticky hash
  useEffect(() => {
    if (window.location.hash) {
      try {
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      } catch {
        window.location.hash = '';
      }
    }
  }, []);

  useEffect(() => {
    if (activeTab === 'shop') {
      document.title = "Shop — Prints Archive • Good Times Only";
    } else if (activeTab === 'contacto') {
      document.title = "Contact — Pablo • Good Times Only";
    } else {
      document.title = "Good Times Only — Pablo • Photography & Film Direction";
    }
  }, [activeTab]);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      const yOffset = -90; 
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavigate = (sectionId: string) => {
    if (sectionId === 'shop' || sectionId === 'prints') {
      setActiveTab('shop');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (sectionId === 'contacto') {
      setActiveTab('contacto');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (activeTab !== 'home') {
        setActiveTab('home');
      }
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 50);
    }
  };

  return (
    <div className="min-h-screen bg-transparent selection:bg-[#111111] selection:text-[#FBFBFA] relative overflow-x-hidden antialiased">
      {/* Dynamic Background Noise Texture overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.015] z-40 bg-[url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=5')] bg-repeat"></div>

      {/* Navigation bar (includes Home/Works/Projects/Shop/Contact) */}
      <Navbar onNavigate={handleNavigate} activeTab={activeTab === 'home' ? undefined : activeTab} />

      {activeTab === 'shop' ? (
        /* Standalone Shop Page with ample top clearance for the fixed navbar */
        <main className="pt-36 sm:pt-44 md:pt-52 lg:pt-56 min-h-[85vh]">
          <PrintsPage
            onBackToHome={() => handleNavigate('inicio')}
            onNavigateToContact={() => handleNavigate('contacto')}
          />
        </main>
      ) : activeTab === 'contacto' ? (
        /* Dedicated Contact View / Tab */
        <main className="pt-36 sm:pt-44 md:pt-52 min-h-[80vh]">
          <ContactSection />
        </main>
      ) : (
        /* Home Page View */
        <main>
          {/* Hero Section */}
          <Hero
            onScrollToExplore={() => handleNavigate('trabajos')}
            onNavigate={handleNavigate}
          />

          {/* Grid of photos/videos & Bio */}
          <GalleryGrid />

          {/* Home Page Callout */}
          <section className="py-16 bg-black/[0.015] border-t border-black/5 px-6 text-center">
            <div className="max-w-xl mx-auto flex justify-center">
              <button
                onClick={() => handleNavigate('contacto')}
                className="inline-flex items-center gap-3 bg-[#111111] hover:bg-neutral-800 text-[#FBFBFA] text-xs uppercase tracking-[0.2em] font-semibold px-8 py-4 transition-all duration-300 cursor-pointer shadow-md"
              >
                <span>Contact me</span>
                <span className="text-sm">→</span>
              </button>
            </div>
          </section>

          {/* Banner with latest Magazine */}
          <MagazineBanner />
        </main>
      )}

      {/* Footer */}
      <Footer onScrollToTop={() => handleNavigate('inicio')} />
    </div>
  );
}

