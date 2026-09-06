import { motion } from 'motion/react';
import magazineImage from '../assets/images/magazine.jpg';

export default function MagazineBanner() {
  return (
    <section id="projects" className="pt-20 md:pt-24 pb-0 bg-white border-y border-black/5 w-full overflow-hidden">
      
      {/* Relative container for the magazine experience - expanded to full screen width */}
      <div className="relative w-full" id="magazine-editorial-container">
        
        {/* Main Magazine Image Backdrop - wide scenic view going edge-to-edge */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full relative overflow-hidden group"
          id="magazine-image-wrapper"
        >
          <img
            src={magazineImage}
            alt="Good Times Only Magazine - Issue 04: Nostalgia"
            className="w-full h-auto min-h-[360px] md:min-h-[540px] lg:min-h-[640px] xl:min-h-[720px] object-cover transition-transform duration-1000 group-hover:scale-[1.01]"
            referrerPolicy="no-referrer"
            id="magazine-main-img"
          />
          
          {/* Delicate gloss overlay reflecting light */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 opacity-45 pointer-events-none"></div>

          {/* Overlaid Editorial Content for Desktop/MD (only visible on md: screens and absolute on the image) */}
          {/* Left Block - Over the red space on the left */}
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden md:flex absolute left-6 lg:left-12 xl:left-16 top-1/2 -translate-y-1/2 w-[310px] lg:w-[370px] xl:w-[410px] text-white flex-col gap-4 z-20 pointer-events-auto bg-[#0E0E0E]/80 backdrop-blur-md p-6 lg:p-8 rounded-sm border border-white/15 shadow-2xl h-auto"
            id="magazine-overlay-left"
          >
            <div className="space-y-3">
              <span className="font-mono text-xs tracking-[0.25em] uppercase text-red-300 font-semibold block">
                CONCEPT & SOUL
              </span>
              <h3 className="font-serif text-2xl lg:text-3xl font-medium tracking-tight text-white">
                The Concept
              </h3>
              <p className="text-sm lg:text-base text-white/95 leading-relaxed font-normal font-sans">
                Getting my work in front of a new audience far from home pushed me to create this zine and put together an exhibition featuring the photos that have shaped a big part of my journey as a photographer.
              </p>
            </div>
          </motion.div>

          {/* Right Block - Over the red space on the right */}
          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden md:flex absolute right-6 lg:right-12 xl:right-16 top-1/2 -translate-y-1/2 w-[310px] lg:w-[370px] xl:w-[410px] text-white flex-col gap-4 text-left z-20 pointer-events-auto bg-[#0E0E0E]/80 backdrop-blur-md p-6 lg:p-8 rounded-sm border border-white/15 shadow-2xl h-auto"
            id="magazine-overlay-right"
          >
            <div className="space-y-3">
              <span className="font-mono text-xs tracking-[0.25em] uppercase text-red-300 font-semibold block">
                INFO & SOUL
              </span>
              <h3 className="font-serif text-2xl lg:text-3xl font-medium tracking-tight text-white">
                Issue #1
              </h3>
              <p className="text-sm lg:text-base text-white/95 leading-relaxed font-normal font-sans">
                A limited run of 50 zines, born from weeks spent diving back through years behind the camera. I curated hundreds of images, wrote every word by hand, laid it all out on my wall before bringing it to life on my computer.
              </p>
            </div>
          </motion.div>

        </motion.div>

        {/* Mobile Fallback - displayed below the image on small screens (hidden on md:) with ample padding */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8 md:hidden px-4 sm:px-6 max-w-3xl mx-auto" id="magazine-mobile-info">
          
          {/* Mobile Left Editorial Block */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3 text-left p-6 bg-white border border-black/10 rounded-sm shadow-sm"
          >
            <div className="space-y-1">
              <h3 className="font-serif text-2xl font-medium tracking-tight text-[#111111]">
                The Concept
              </h3>
            </div>
            
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal font-sans">
              Getting my work in front of a new audience far from home pushed me to create this zine and put together an exhibition featuring the photos that have shaped a big part of my journey as a photographer.
            </p>
          </motion.div>

          {/* Mobile Right specs Block */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3 text-left p-6 bg-white border border-black/10 rounded-sm shadow-sm"
          >
            <div className="space-y-1">
              <h3 className="font-serif text-2xl font-medium tracking-tight text-[#111111]">
                Issue #1
              </h3>
            </div>
            
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal font-sans">
              A limited run of 50 zines, born from weeks spent diving back through years behind the camera. I curated hundreds of images, wrote every word by hand, laid it all out on my wall before bringing it to life on my computer.
            </p>
          </motion.div>

        </div>

        {/* Editorial Motto perfectly centered in the exact existing white space */}
        <div className="h-20 md:h-24 flex items-center justify-center text-center px-4" id="magazine-motto">
          <p className="font-serif text-sm sm:text-lg md:text-2xl lg:text-3xl font-medium tracking-[0.06em] text-[#111111] whitespace-nowrap">
            Never leave your house without your camera
          </p>
        </div>

      </div>
    </section>
  );
}
