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
        isScrolled ? 'py-1.5 sm:py-2 bg-black/80' : 'py-2.5 sm:py-3'
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
                ? 'h-12 sm:h-14 md:h-16 lg:h-18 max-h-[80px]'
                : 'h-16 sm:h-20 md:h-24 lg:h-28 max-h-[120px]'
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

      {/* Mobile Dropdown menu */}
      {isOpen && (
        <div
          id="mobile-dropdown"
          className="md:hidden absolute top-full left-0 right-0 bg-black/80 backdrop-blur-md border-b border-white/10 shadow-2xl px-6 py-4 transition-all duration-200"
        >
          <nav className="flex flex-col space-y-1" id="mobile-menu-items">
            {menuItems.map((item) => (
              <button
                key={item.target}
                onClick={() => handleLinkClick(item.target)}
                className={`w-full text-left text-xs uppercase tracking-[0.2em] font-medium py-2.5 px-3 rounded-sm transition-all duration-200 flex items-center justify-between cursor-pointer ${
                  activeSection === item.target
                    ? 'text-white bg-white/10 font-semibold'
                    : 'text-neutral-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{item.label}</span>
                {activeSection === item.target && (
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                )}
              </button>
            ))}
          </nav>

          {/* Bottom compact social bar */}
          <div className="pt-3 mt-2 border-t border-white/10 flex items-center space-x-4 text-neutral-400">
            <a
              href="https://www.instagram.com/pabloorioos/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-white transition-colors p-1"
              aria-label="Instagram"
            >
              <Instagram size={18} strokeWidth={1.8} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-white transition-colors p-1"
              aria-label="YouTube"
            >
              <Youtube size={18} strokeWidth={1.8} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
