import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { PHOTOGRAPHER_INFO } from '../data';
import portraitImage from '../assets/images/Portrait1.JPG';

interface HeroProps {
  onScrollToExplore: () => void;
  onNavigate?: (sectionId: string) => void;
}

export default function Hero({ onScrollToExplore, onNavigate }: HeroProps) {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = "Hey there :)";

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const typingSpeed = 140; // typing speed in ms per char
    const deletingSpeed = 60; // erasing speed in ms per char

    if (!isDeleting) {
      if (displayText !== fullText) {
        timer = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        // Pause at the final period before erasing
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      if (displayText !== "") {
        timer = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length - 1));
        }, deletingSpeed);
      } else {
        // Rest state before restart
        timer = setTimeout(() => {
          setIsDeleting(false);
        }, 800);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting]);

  return (
    <section
      id="inicio"
      className="min-h-screen pt-40 sm:pt-44 md:pt-48 lg:pt-52 xl:pt-56 pb-16 sm:pb-20 flex flex-col justify-center relative overflow-hidden px-4 sm:px-8 md:px-12 lg:px-16 bg-transparent scroll-mt-28"
    >
      <div className="max-w-7xl xl:max-w-[1700px] mx-auto w-full relative z-10">
        
        {/* Balanced layout: Left column centered text with adequate width for 3 lines, Right column centered photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center justify-center min-h-[450px]">
          
          {/* Left: Typewriter text header & bio centered */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center items-center text-center px-2 sm:px-4 w-full"
            id="hero-floating-text-container"
          >
            <h1 className="font-serif text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-normal leading-[1.18] text-neutral-800 tracking-normal select-none relative break-words text-center">
              {displayText}
              <span className="inline-block w-[2px] sm:w-[2.5px] h-[0.85em] bg-neutral-700 ml-2 animate-blink align-middle" />
            </h1>

            {/* Description text - structured strictly in 3 distinct lines (renglones) */}
            <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4 text-neutral-700 font-light text-xs sm:text-sm md:text-[15px] lg:text-[15.5px] xl:text-[16.5px] leading-relaxed sm:leading-[1.75] w-full max-w-2xl lg:max-w-3xl text-center">
              <p className="space-y-1 sm:space-y-1.5">
                <span className="block sm:whitespace-nowrap">
                  Good Times Only was born out of all the years I’ve spent behind the camera,
                </span>
                <span className="block sm:whitespace-nowrap">
                  the places I’ve been to, the people I’ve met, and all the experiences
                </span>
                <span className="block sm:whitespace-nowrap">
                  that have shaped the way I document and approach my work.
                </span>
              </p>

              <p className="text-neutral-900 font-medium pt-2 sm:pt-3 text-xs sm:text-sm md:text-[15px] lg:text-base">
                I shoot 35mm film, digital, and video.
              </p>
            </div>
          </motion.div>
 
          {/* Right: Portrait frame centered */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center items-center pointer-events-auto z-10 w-full px-2 sm:px-4"
            id="photographer-portrait-container"
          >
            {/* Portrait display: uncropped original aspect ratio with black border */}
            <div className="w-full max-w-sm sm:max-w-md md:max-w-md lg:max-w-lg xl:max-w-xl relative group border-2 sm:border-[2.5px] border-[#111111] shadow-2xl overflow-hidden">
              <img
                src={portraitImage}
                alt={`Portrait of ${PHOTOGRAPHER_INFO.name}`}
                className="w-full h-auto max-h-[58vh] md:max-h-[64vh] lg:max-h-[68vh] object-contain block mx-auto"
                referrerPolicy="no-referrer"
                id="portrait-image"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
