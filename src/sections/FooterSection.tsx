import React from 'react';
import { ArrowUp, Mail, ExternalLink } from 'lucide-react';
import { ContactButton } from '../components/ContactButton';
import { FadeIn } from '../components/FadeIn';

interface FooterSectionProps {
  onOpenContact: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative w-full bg-[#0C0C0C] border-t border-white/10 px-6 md:px-12 pt-20 pb-12 select-none text-[#D7E2EA]">
      <div className="max-w-6xl mx-auto flex flex-col justify-between">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10 mb-20">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#BBCCD7] font-semibold block mb-3">
              Ready to start?
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-none">
              Let&apos;s build <br />
              <span className="hero-heading">the future.</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <ContactButton onClick={onOpenContact} label="Contact Jack" />
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 p-3 sm:px-5 sm:py-3.5 rounded-full border border-white/20 hover:border-white/50 text-[#D7E2EA] hover:bg-white/5 transition cursor-pointer text-xs uppercase tracking-widest font-medium"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Links row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-10 border-t border-white/10 text-sm">
          <div>
            <h4 className="font-medium uppercase tracking-wider text-xs text-white/50 mb-3">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-white transition">About</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">Services & Pricing</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition">Selected Projects</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium uppercase tracking-wider text-xs text-white/50 mb-3">
              Socials
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition inline-flex items-center gap-1"
                >
                  Twitter / X <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition inline-flex items-center gap-1"
                >
                  Instagram <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://artstation.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition inline-flex items-center gap-1"
                >
                  ArtStation <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium uppercase tracking-wider text-xs text-white/50 mb-3">
              Location & Time
            </h4>
            <p className="font-light text-white/80">London &amp; Remote Worldwide</p>
            <p className="font-light text-white/60 text-xs mt-1">Available for Q2/Q3 commissions</p>
          </div>

          <div>
            <h4 className="font-medium uppercase tracking-wider text-xs text-white/50 mb-3">
              Direct Contact
            </h4>
            <a
              href="mailto:jack@3dcreator.design"
              className="text-white hover:underline transition font-medium flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4 text-[#BBCCD7]" />
              jack@3dcreator.design
            </a>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/5 text-xs text-white/40 gap-4">
          <p>© {new Date().getFullYear()} Jack. All rights reserved. 3D Creator &amp; Visual Artist.</p>
          <p className="tracking-wide uppercase">Designed with Kanit &amp; Precision</p>
        </div>
      </div>
    </footer>
  );
};
