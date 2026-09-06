import { motion } from 'motion/react';

interface PrintsPageProps {
  onBackToHome?: () => void;
  onNavigateToContact?: (customSubject?: string) => void;
}

export default function PrintsPage({}: PrintsPageProps) {
  return (
    <div className="min-h-[75vh] flex flex-col justify-center items-center bg-[#FBFBFA] text-[#111111] py-24 px-6 md:px-12" id="prints-page">
      {/* Main Content: Title and Coming soon */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-6 max-w-4xl mx-auto text-center"
      >
        <h1 className="font-serif text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-neutral-900 tracking-tight leading-[1.15] whitespace-nowrap">
          Limited drops, zines and prints
        </h1>

        <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.3em] text-neutral-500 font-medium">
          Coming soon
        </p>
      </motion.div>
    </div>
  );
}
