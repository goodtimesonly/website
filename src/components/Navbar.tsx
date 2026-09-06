import { useState, useEffect } from 'react';
import { Menu, X, Instagram, Youtube } from 'lucide-react';
import brandLogo from '../assets/images/Logo (1).png';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeTab?: string;
}

export default function Navbar({ onNavigate, activeTab }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  // Sync with activeTab if provided
  useEffect(() => {
    if (activeTab) {
      setActiveSection(activeTab);
    }
  }, [activeTab]);

  // Detect scroll to style navbar slightly
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      if (activeTab === 'contacto' || activeTab === 'shop' || activeTab === 'prints') {
        setActiveSection(activeTab === 'prints' ? 'shop' : activeTab);
        return;
      }

      // Simple active link detection
      const sections = ['inicio', 'trabajos', 'projects'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeTab]);

  const menuItems = [
    { label: 'Home', target: 'inicio' },
    { label: 'Portfolio', target: 'trabajos' },
    { label: 'Projects', target: 'projects' },
    { label: 'Shop', target: 'shop' },
    { label: 'Contact', target: 'contacto' },
  ];

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    onNavigate(id);
  };

  return (
    <header
      id="navbar-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-black/70 backdrop-blur-md border-b border-white/10 shadow-lg ${
        isScrolled ? 'py-2 bg-black/80' : 'py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand Logo - In the navbar, colored white */}
        <button
          onClick={() => handleLinkClick('inicio')}
          className="group cursor-pointer focus:outline-none flex items-center transition-all duration-300"
          id="logo-button"
        >
          <img
            src={brandLogo}
            alt="Good Times Only"
            className={`w-auto object-contain brightness-0 invert transition-all duration-300 group-hover:scale-105 ${
              isScrolled
                ? 'h-16 sm:h-20 md:h-24 max-h-[100px]'
                : 'h-24 sm:h-32 md:h-40 lg:h-48 max-h-[200px]'
            }`}
            referrerPolicy="no-referrer"
          />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-10 items-center" id="desktop-menu">
          {menuItems.map((item) => (
            <button
              key={item.target}
              onClick={() => handleLinkClick(item.target)}
              className={`text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 relative py-1 cursor-pointer hover:text-white ${
                activeSection === item.target
                  ? 'text-white font-semibold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {item.label}
              {activeSection === item.target && (
                <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-white" />
              )}
            </button>
          ))}
        </nav>

        {/* Social / Direct Action Links */}
        <div className="hidden sm:flex items-center space-x-4" id="social-nav">
          <a
            href="https://www.instagram.com/pabloorioos/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center text-neutral-300 hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer"
            aria-label="Instagram"
            id="nav-instagram-link"
          >
            <Instagram size={24} className="md:w-6 md:h-6" strokeWidth={1.8} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center text-neutral-300 hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer"
            aria-label="YouTube"
            id="nav-youtube-link"
          >
            <Youtube size={24} className="md:w-6 md:h-6" strokeWidth={1.8} />
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-neutral-300 focus:outline-none p-1 cursor-pointer"
            id="mobile-menu-toggle"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={22} className="text-white" /> : <Menu size={22} className="text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      {isOpen && (
        <div
          id="mobile-drawer"
          className={`md:hidden fixed inset-x-0 bottom-0 z-40 px-8 py-12 flex flex-col justify-between border-t border-white/10 bg-black/90 backdrop-blur-xl shadow-2xl transition-all duration-500 ${
            isScrolled ? 'top-[58px]' : 'top-[78px]'
          }`}
        >
          <nav className="flex flex-col space-y-6" id="mobile-menu-items">
            {menuItems.map((item, idx) => (
              <button
                key={item.target}
                onClick={() => handleLinkClick(item.target)}
                className="text-left text-2xl font-serif tracking-wider uppercase text-white hover:translate-x-2 transition-transform duration-300 py-2 border-b border-neutral-800"
              >
                <span className="text-xs font-mono text-neutral-500 mr-4 font-normal">0{idx + 1}</span>
                {item.label}
              </button>
            ))}
          </nav>

          <div className="space-y-6">
            <p className="text-xs uppercase tracking-widest text-neutral-400">GTO Studio • Pablo Rios</p>
            <div className="flex space-x-8 items-center">
              <a
                href="https://www.instagram.com/pabloorioos/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 text-base text-neutral-300 hover:text-white transition-colors"
                id="mobile-instagram-link"
              >
                <Instagram size={22} strokeWidth={1.8} />
                <span>Instagram</span>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 text-base text-neutral-300 hover:text-white transition-colors"
                id="mobile-youtube-link"
              >
                <Youtube size={22} strokeWidth={1.8} />
                <span>YouTube</span>
              </a>
            </div>
            <p className="text-[11px] text-neutral-500 font-mono">info@gtimesonly.com</p>
          </div>
        </div>
      )}
    </header>
  );
}
