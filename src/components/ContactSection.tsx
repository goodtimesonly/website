import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PHOTOGRAPHER_INFO } from '../data';
import { Mail, MapPin, Send, CheckCircle, FileText } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const [typedTitle, setTypedTitle] = useState("");
  const fullTitle = "Open to new projects";

  useEffect(() => {
    let titleTimer: NodeJS.Timeout;
    if (typedTitle.length < fullTitle.length) {
      titleTimer = setTimeout(() => {
        setTypedTitle(fullTitle.slice(0, typedTitle.length + 1));
      }, 70);
    }
    return () => clearTimeout(titleTimer);
  }, [typedTitle]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate real high-fidelity transit response
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 1800);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    setSubmitSuccess(false);
  };

  return (
    <section id="contacto" className="py-24 bg-transparent px-6 md:px-12 border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* LEFT COLUMN: Visual Branding, Info, coords & Testimonials */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="font-serif text-3xl md:text-5xl text-[#111111] tracking-tight min-h-[64px] md:min-h-[100px]">
                {typedTitle}
                {typedTitle.length < fullTitle.length && (
                  <span className="inline-block w-[3px] h-[24px] md:h-[35px] bg-[#111111] vertical-align-middle ml-1 animate-pulse" />
                )}
              </h2>
            </div>
 
            {/* Quick Contacts Coordinate Cards */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 bg-black/[0.02] border border-black/10">
                <MapPin className="text-neutral-400 mt-1 shrink-0" size={18} />
                <div>
                  <h4 className="text-[11px] font-mono tracking-wider uppercase text-neutral-400">HEADQUARTERS</h4>
                  <p className="text-[#111111] text-sm font-semibold mt-1">New Zealand | Worldwide</p>
                </div>
              </div>
 
              <div className="flex items-start gap-4 p-5 bg-black/[0.02] border border-black/10">
                <Mail className="text-neutral-400 mt-1 shrink-0" size={18} />
                <div>
                  <h4 className="text-[11px] font-mono tracking-wider uppercase text-neutral-400">DIRECT EMAIL</h4>
                  <a href="mailto:info@gtimesonly.com" className="text-[#111111] hover:underline text-sm font-semibold mt-1 block">
                    info@gtimesonly.com
                  </a>
                </div>
              </div>
            </div>
          </div>
 
          {/* RIGHT COLUMN: Elegant Booking sheet / dynamic Form */}
          <div className="lg:col-span-7 bg-black/[0.01] border border-black/10 p-8 md:p-12 shadow-sm rounded-none">
            
            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name Input */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="block font-mono text-[9px] uppercase tracking-widest text-[#111111] font-semibold">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="xxx"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-black/[0.02] border border-black/10 px-4 py-3 text-sm focus:border-black/35 focus:bg-white/80 outline-none transition-all rounded-none text-[#111111] placeholder:text-neutral-450"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="block font-mono text-[9px] uppercase tracking-widest text-[#111111] font-semibold">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="xxx@xxx.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-black/[0.02] border border-black/10 px-4 py-3 text-sm focus:border-black/35 focus:bg-white/80 outline-none transition-all rounded-none text-[#111111] placeholder:text-neutral-450"
                      />
                    </div>
                  </div>

                  {/* Message block */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="block font-mono text-[9px] uppercase tracking-widest text-[#111111] font-semibold">
                      Tell me about your idea *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      placeholder="Describe the aesthetic vision, estimated dates, key locations, and styling references you have in mind..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-black/[0.02] border border-black/10 px-4 py-3 text-sm focus:border-black/35 focus:bg-white/80 outline-none transition-all rounded-none resize-none text-[#111111] placeholder:text-neutral-450"
                    />
                  </div>

                  {/* Button Submission */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#111111] hover:bg-neutral-800 text-[#FBFBFA] text-xs uppercase tracking-[0.2em] font-semibold py-4 transition-all duration-300 flex items-center justify-center gap-3 disabled:bg-neutral-200 disabled:text-neutral-400 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></span>
                        <span>Transmitting vision...</span>
                      </>
                    ) : (
                      <>
                        <Send size={12} />
                        <span>Send Inquiry</span>
                      </>
                    )}
                  </button>

                  <p className="text-[10px] text-neutral-400 text-center font-mono leading-relaxed mt-2 uppercase">
                    By submitting, you certify a desire to bring exceptional moments to life. Good Times Only.
                  </p>
                </motion.form>
              ) : (
                /* HIGH FIDELITY SUCCESS ENVELOPE / RECEIPT SCREEN */
                <motion.div
                  key="success-receipt"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-8 space-y-8"
                  id="success-receipt-card"
                >
                  <div className="inline-flex p-4 rounded-full bg-green-950/25 text-green-400 border border-green-950/20">
                    <CheckCircle size={36} className="animate-bounce" />
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-serif text-3xl text-[#111111]">Style on the Way!</h3>
                    <p className="text-neutral-600 text-sm max-w-md mx-auto">
                      Thank you, {formData.name}. I have received your request. I have generated a temporary booking slip in my system:
                    </p>
                  </div>

                  {/* Simulated Receipt paper with specs */}
                  <div className="bg-white border border-black/10 p-6 text-left max-w-sm mx-auto font-mono text-xs text-neutral-800 relative shadow-md">
                    <div className="absolute top-0 inset-x-0 h-1 bg-[repeating-linear-gradient(45deg,#ddd,#ddd_4px,#ccc_4px,#ccc_8px)]"></div>
                    
                    <div className="flex items-center gap-1.5 border-b border-black/10 pb-3 mb-3">
                      <FileText size={14} className="text-neutral-500" />
                      <span className="font-bold tracking-widest text-[#111111] uppercase">GTO BOOKING SLIP</span>
                    </div>

                    <div className="space-y-1.5 text-[11px] leading-relaxed">
                      <p className="flex justify-between">
                        <span>TICKET ID:</span>
                        <span className="font-bold text-black">GTO-2026-{(Math.random() * 9000 + 1000).toFixed(0)}</span>
                      </p>
                      <p className="flex justify-between">
                        <span>REQUESTER:</span>
                        <span className="truncate max-w-[140px] text-right font-semibold text-black">{formData.name}</span>
                      </p>
                      <p className="flex justify-between">
                        <span>EMAIL:</span>
                        <span className="truncate max-w-[150px] text-right text-black">{formData.email}</span>
                      </p>
                      <p className="flex justify-between">
                        <span>STATUS:</span>
                        <span className="text-emerald-700 font-bold bg-emerald-50 px-1 border border-emerald-250">RECEIVED</span>
                      </p>
                    </div>

                    <div className="border-t border-dashed border-black/15 mt-4 pt-3 text-[10px] text-neutral-500 text-center uppercase tracking-wider">
                      Personal review: Pablo Studio
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="text-xs font-mono uppercase text-neutral-500 hover:text-black border-b border-neutral-300 hover:border-black pb-0.5 transition-all cursor-pointer"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
