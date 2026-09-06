import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_ITEMS } from '../data';
import { PortfolioItem } from '../types';
import { 
  Film, 
  X, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  ChevronLeft, 
  ChevronRight
} from 'lucide-react';

export default function GalleryGrid() {
  // Lightbox state: When a user clicks to view the image in full immersive screen
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  // Immersive Lightbox video states
  const [isLightboxPlaying, setIsLightboxPlaying] = useState(true);
  const [isLightboxMuted, setIsLightboxMuted] = useState(false);
  const lightboxVideoRef = useRef<HTMLVideoElement>(null);

  // Mobile Single-Image View state
  const [mobileIndex, setMobileIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'next' | 'prev'>('next');
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const items = PORTFOLIO_ITEMS;

  // Find index of currently opened item within our list
  const selectedIndex = items.findIndex(item => item.id === selectedItem?.id);

  const handleOpenItem = (item: PortfolioItem) => {
    setSelectedItem(item);
    setIsLightboxPlaying(true);
    setIsLightboxMuted(false);
  };

  const handleCloseItem = () => {
    setSelectedItem(null);
  };

  // Lightbox carousel navigation
  const handleNextItem = () => {
    if (selectedItem && selectedIndex !== -1) {
      const nextIndex = (selectedIndex + 1) % items.length;
      setSelectedItem(items[nextIndex]);
      setIsLightboxPlaying(true);
    }
  };

  const handlePrevItem = () => {
    if (selectedItem && selectedIndex !== -1) {
      const prevIndex = (selectedIndex - 1 + items.length) % items.length;
      setSelectedItem(items[prevIndex]);
      setIsLightboxPlaying(true);
    }
  };

  // Mobile navigation handlers
  const handleMobileNext = () => {
    if (items.length === 0) return;
    setSlideDirection('next');
    setMobileIndex((prev) => (prev + 1) % items.length);
  };

  const handleMobilePrev = () => {
    if (items.length === 0) return;
    setSlideDirection('prev');
    setMobileIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    const diffY = touchStartY.current - e.changedTouches[0].clientY;

    // Trigger only if horizontal swipe is dominant and exceeds threshold
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 35) {
      if (diffX > 0) {
        handleMobileNext(); // swipe left -> go next
      } else {
        handleMobilePrev(); // swipe right -> go prev
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  // Keyboard controls effect for Fullscreen Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedItem) return;
      if (e.key === 'ArrowRight') {
        handleNextItem();
      } else if (e.key === 'ArrowLeft') {
        handlePrevItem();
      } else if (e.key === 'Escape') {
        handleCloseItem();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem, items, selectedIndex]);

  // Fullscreen video controls
  const toggleLightboxPlay = () => {
    if (lightboxVideoRef.current) {
      if (isLightboxPlaying) {
        lightboxVideoRef.current.pause();
      } else {
        lightboxVideoRef.current.play().catch(err => console.log('Video play error:', err));
      }
      setIsLightboxPlaying(!isLightboxPlaying);
    }
  };

  const toggleLightboxMute = () => {
    if (lightboxVideoRef.current) {
      lightboxVideoRef.current.muted = !isLightboxMuted;
      setIsLightboxMuted(!isLightboxMuted);
    }
  };

  const currentMobileItem = items[mobileIndex] || items[0];

  return (
    <section id="trabajos" className="py-14 sm:py-20 bg-transparent w-full border-t border-black/5 flex flex-col justify-center">
      <div className="w-full">
        
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12 px-4">
          <h2 className="font-serif text-3xl md:text-5xl text-[#111111] tracking-tight">Portfolio</h2>
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500 mt-2">
            Selected Works & Archive
          </p>
        </div>

        {items.length === 0 ? (
          <div className="py-20 text-center border border-dashed border-neutral-300 rounded-lg max-w-xl mx-auto flex flex-col items-center justify-center p-8 bg-neutral-50/60">
            <Film className="w-8 h-8 text-neutral-400 mb-3" />
            <p className="font-serif text-lg text-neutral-800 mb-1">Portfolio listo</p>
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              Imágenes anteriores eliminadas. Listo para recibir tus nuevas fotografías.
            </p>
          </div>
        ) : (
          <>
            {/* ============================================================ */}
            {/* 1. MOBILE VIEW: 1 PHOTO AT A TIME WITH SWIPE & NEXT CONTROLS */}
            {/* ============================================================ */}
            <div className="block md:hidden w-full px-3 sm:px-4" id="portfolio-mobile-carousel">
              {/* Header Status / Counter */}
              <div className="flex items-center justify-between py-2.5 px-2 mb-2 border-b border-black/10">
                <span className="text-[11px] font-mono tracking-widest text-neutral-600 uppercase font-semibold">
                  Foto {String(mobileIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                  Desliza o toca flechas
                </span>
              </div>

              {/* Card Container for Single Image */}
              <div 
                className="relative overflow-hidden bg-[#141414] border border-black/10 shadow-lg touch-pan-y"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={currentMobileItem.id}
                    initial={{ opacity: 0, x: slideDirection === 'next' ? 40 : -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: slideDirection === 'next' ? -40 : 40 }}
                    transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-full flex flex-col items-center justify-center cursor-pointer"
                    onClick={() => handleOpenItem(currentMobileItem)}
                  >
                    <img
                      src={currentMobileItem.src}
                      alt="Fotografía"
                      className="w-full h-auto max-h-[70vh] object-contain select-none"
                      onError={(e) => {
                        if (currentMobileItem.fallbackSrc && e.currentTarget.src !== currentMobileItem.fallbackSrc) {
                          e.currentTarget.src = currentMobileItem.fallbackSrc;
                        }
                      }}
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Floating Chevron Overlays for instant one-thumb tapping */}
                <button
                  onClick={(e) => { e.stopPropagation(); handleMobilePrev(); }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm text-white flex items-center justify-center active:scale-90 border border-white/15 transition-transform"
                  aria-label="Foto anterior"
                >
                  <ChevronLeft size={22} />
                </button>

                <button
                  onClick={(e) => { e.stopPropagation(); handleMobileNext(); }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm text-white flex items-center justify-center active:scale-90 border border-white/15 transition-transform"
                  aria-label="Siguiente foto"
                >
                  <ChevronRight size={22} />
                </button>
              </div>

              {/* Mobile Navigation Controls Bar */}
              <div className="mt-4 flex items-center justify-between gap-3">
                <button
                  onClick={handleMobilePrev}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-white border border-black/15 text-xs font-mono uppercase tracking-widest text-[#111111] active:bg-neutral-100 shadow-xs"
                >
                  <ChevronLeft size={16} />
                  <span>Anterior</span>
                </button>

                <button
                  onClick={handleMobileNext}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-[#111111] text-xs font-mono uppercase tracking-widest text-[#FBFBFA] active:bg-neutral-800 shadow-md"
                >
                  <span>Siguiente</span>
                  <ChevronRight size={16} />
                </button>
              </div>

              {/* Progress bar */}
              <div className="mt-3 w-full bg-neutral-200 h-1 rounded-full overflow-hidden">
                <div 
                  className="bg-[#111111] h-full transition-all duration-300"
                  style={{ width: `${((mobileIndex + 1) / items.length) * 100}%` }}
                />
              </div>
            </div>

            {/* ============================================================ */}
            {/* 2. DESKTOP VIEW: EDGE-TO-EDGE FULL WIDTH SCREEN MASONRY GRID */}
            {/* ============================================================ */}
            <div className="hidden md:block w-full px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10" id="portfolio-desktop-grid">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="columns-2 lg:columns-3 xl:columns-4 2xl:columns-4 gap-4 lg:gap-6 space-y-4 lg:space-y-6 w-full"
              >
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    whileHover={{ scale: 1.012 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    onClick={() => handleOpenItem(item)}
                    className="break-inside-avoid mb-4 lg:mb-6 relative overflow-hidden cursor-pointer border border-black/5 transition-all duration-300 bg-[#141414] shadow-sm hover:shadow-xl group"
                  >
                    <img
                      src={item.src}
                      alt="Fotografía"
                      className="w-full h-auto grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-[1.015]"
                      onError={(e) => {
                        if (item.fallbackSrc && e.currentTarget.src !== item.fallbackSrc) {
                          e.currentTarget.src = item.fallbackSrc;
                        }
                      }}
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Film icon overlay for videos */}
                    {item.isVideo && (
                      <div className="absolute top-3 right-3 bg-black/85 p-1.5 text-white scale-100 border border-white/10 z-10">
                        <Film size={12} />
                      </div>
                    )}

                    {/* Subtle Hover Lens Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors pointer-events-none" />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </>
        )}

      </div>

      {/* IMMERSIVE CLEAN GALLERY LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0B0C0E] flex flex-col items-center justify-center focus:outline-none pointer-events-auto"
            id="lightbox-container"
          >
            {/* Minimalist Close handler in the upper-right corner */}
            <button
              onClick={handleCloseItem}
              className="absolute top-6 right-6 md:top-8 md:right-8 z-55 text-white/70 hover:text-white hover:bg-white/10 p-2.5 transition-all cursor-pointer border border-white/10 bg-[#0B0C0E]/50 backdrop-blur-md"
              aria-label="Close view"
            >
              <X size={20} />
            </button>

            {/* Media Canvas occupying full viewport */}
            <div className="w-full h-full flex items-center justify-center p-4 md:p-12 relative overflow-hidden select-none">
              
              {/* Floating subtle navigation controls */}
              <button
                onClick={(e) => { e.stopPropagation(); handlePrevItem(); }}
                className="absolute left-4 md:left-8 z-40 p-3 h-12 w-12 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all cursor-pointer border border-white/5 active:scale-95 duration-250 bg-black/10 backdrop-blur-xs"
                aria-label="Previous item"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); handleNextItem(); }}
                className="absolute right-4 md:right-8 z-40 p-3 h-12 w-12 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all cursor-pointer border border-white/5 active:scale-95 duration-250 bg-black/10 backdrop-blur-xs"
                aria-label="Next item"
              >
                <ChevronRight size={24} />
              </button>

              {/* Centered Media Frame without any captions, labels, metadata or info */}
              <div className="max-w-[92vw] max-h-[88vh] md:max-w-[85vw] md:max-h-[90vh] flex items-center justify-center shadow-2xl relative">
                {!selectedItem.isVideo ? (
                  <motion.img
                    key={selectedItem.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    src={selectedItem.src}
                    alt="Fotografía"
                    onError={(e) => {
                      if (selectedItem.fallbackSrc && e.currentTarget.src !== selectedItem.fallbackSrc) {
                        e.currentTarget.src = selectedItem.fallbackSrc;
                      }
                    }}
                    className="max-h-[85vh] max-w-full object-contain pointer-events-none rounded-sm border border-white/5"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="relative overflow-hidden w-full max-h-[80vh] aspect-[16/9] bg-black/40 rounded-sm border border-white/5">
                    <video
                      key={selectedItem.id}
                      ref={lightboxVideoRef}
                      src={selectedItem.videoUrl}
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted={isLightboxMuted}
                      playsInline
                    />
                    
                    {/* Media playback controls for short film items */}
                    <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 flex items-center justify-between z-20">
                      <div className="flex items-center gap-4">
                        <button
                          onClick={toggleLightboxPlay}
                          className="text-white hover:text-gray-300 transition-colors p-1"
                          aria-label={isLightboxPlaying ? 'Pause' : 'Play'}
                        >
                          {isLightboxPlaying ? <Pause size={14} /> : <Play size={14} />}
                        </button>
                        <span className="text-[10px] text-white/80 font-mono tracking-widest uppercase">
                          {isLightboxPlaying ? 'PLAYING' : 'PAUSED'}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={toggleLightboxMute}
                          className="text-white hover:text-gray-300 transition-colors p-1"
                          aria-label={isLightboxMuted ? 'Unmute' : 'Mute'}
                        >
                          {isLightboxMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                        </button>
                        <div className="w-12 h-1 bg-white/20 rounded-full overflow-hidden hidden sm:block">
                          <div className={`h-full bg-white transition-all ${isLightboxMuted ? 'w-0' : 'w-full'}`}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
