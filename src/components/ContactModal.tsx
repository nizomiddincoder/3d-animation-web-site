import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Check, Send, Sparkles } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '3D Modeling',
    budget: '$5k - $10k',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('jack@3dcreator.design');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full max-w-xl overflow-hidden rounded-[32px] sm:rounded-[40px] border-2 border-[#D7E2EA]/30 bg-[#0C0C0C] p-6 sm:p-10 shadow-2xl text-[#D7E2EA]"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-6 top-6 p-2 rounded-full border border-white/10 hover:border-white/30 text-[#D7E2EA] transition-colors hover:bg-white/5 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center flex flex-col items-center justify-center"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mb-6">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-sm sm:text-base text-[#D7E2EA]/70 max-w-sm">
                  Thanks for reaching out! Jack will review your project requirements and respond within 24 hours.
                </p>
              </motion.div>
            ) : (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-[#B600A8]" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#B600A8]">
                    Get in touch
                  </span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white mb-2">
                  Let&apos;s Create Together
                </h2>
                <p className="text-xs sm:text-sm text-[#D7E2EA]/70 mb-6 font-light">
                  Have an ambitious 3D, branding, or motion project in mind? Reach out directly or fill the form below.
                </p>

                {/* Direct Email quick copy pill */}
                <div className="flex items-center justify-between p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/10 mb-6">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#BBCCD7]" />
                    <span className="text-sm font-medium select-all">jack@3dcreator.design</span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition cursor-pointer"
                  >
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-medium text-[#D7E2EA]/80 mb-1.5">
                        Your Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-[#BBCCD7] focus:outline-none text-white text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-medium text-[#D7E2EA]/80 mb-1.5">
                        Email Address
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-[#BBCCD7] focus:outline-none text-white text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-medium text-[#D7E2EA]/80 mb-1.5">
                        Primary Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-white/15 focus:border-[#BBCCD7] focus:outline-none text-white text-sm"
                      >
                        <option value="3D Modeling">3D Modeling</option>
                        <option value="Rendering">Rendering & Lighting</option>
                        <option value="Motion Design">Motion Design</option>
                        <option value="Branding">Branding & Identity</option>
                        <option value="Web Design">Web Design</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-medium text-[#D7E2EA]/80 mb-1.5">
                        Budget Range
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-white/15 focus:border-[#BBCCD7] focus:outline-none text-white text-sm"
                      >
                        <option value="< $5k">&lt; $5,000</option>
                        <option value="$5k - $10k">$5,000 - $10,000</option>
                        <option value="$10k - $25k">$10,000 - $25,000</option>
                        <option value="$25k+">$25,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-medium text-[#D7E2EA]/80 mb-1.5">
                      Project Vision
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Briefly describe what you would like to build, timeline, or references..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-[#BBCCD7] focus:outline-none text-white text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                      boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
                      outline: '2px solid white',
                      outlineOffset: '-3px',
                    }}
                    className="w-full py-3.5 rounded-full text-white font-medium uppercase tracking-widest text-sm flex items-center justify-center gap-2 hover:opacity-95 transition cursor-pointer mt-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Project Inquiry</span>
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
