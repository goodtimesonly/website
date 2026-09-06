import { ArrowUp, Instagram } from 'lucide-react';

interface FooterProps {
  onScrollToTop: () => void;
}

export default function Footer({ onScrollToTop }: FooterProps) {
  return (
    <footer className="bg-transparent border-t border-black/5 py-16 px-6 md:px-12 relative z-10 text-[#111111]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        
        {/* Left Side: Editorial Instagram Note & Prints Note */}
        <div className="w-full max-w-lg space-y-4">
          <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed max-w-md">
            follow me on the gram for the latest stories, print releases, zines, events and for the love of photography.
          </p>
          <div>
            <a
              href="https://www.instagram.com/pabloorioos/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-[#111111] hover:text-neutral-600 hover:scale-110 transition-all duration-200"
              aria-label="Instagram @pabloorioos"
            >
              <Instagram size={26} strokeWidth={1.75} />
            </a>
          </div>
        </div>

        {/* Right Side: Elegant Minimalist Credits & Back to Top */}
        <div className="flex flex-col items-start md:items-end gap-5 text-left md:text-right w-full md:w-auto">
          <div className="space-y-1">
            <p className="text-[10px] text-neutral-500 font-mono tracking-widest uppercase">
              MADE BY PABLO RIOS • GOOD TIMES ONLY
            </p>
            <p className="text-[9px] text-neutral-500 font-mono tracking-widest uppercase">
              © 2026 GTO. ALL RIGHTS RESERVED
            </p>
          </div>

          {/* Inline discreet back to top trigger */}
          <button
            onClick={onScrollToTop}
            className="group flex items-center space-x-1.5 text-[9px] font-mono uppercase tracking-[0.2em] font-semibold text-neutral-500 hover:text-black transition-colors py-1 cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back To Top</span>
            <ArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
