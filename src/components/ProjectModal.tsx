import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ArrowRight, Layers, Sparkles } from 'lucide-react';

export interface ProjectData {
  id: string;
  number: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  deliverables: string[];
  tools: string[];
  images: {
    col1Top: string;
    col1Bottom: string;
    col2: string;
  };
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOpenContact,
}) => {
  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full max-w-4xl overflow-hidden rounded-[32px] sm:rounded-[50px] border-2 border-[#D7E2EA]/40 bg-[#0C0C0C] p-6 sm:p-10 shadow-2xl text-[#D7E2EA] my-auto max-h-[90vh] overflow-y-auto"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-6 top-6 p-2 rounded-full border border-white/20 hover:border-white/50 text-[#D7E2EA] transition-colors hover:bg-white/10 cursor-pointer z-20"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-3">
              <span className="font-black text-3xl sm:text-4xl text-[#BBCCD7]">
                {project.number}
              </span>
              <span className="text-xs uppercase tracking-widest px-3 py-1 rounded-full border border-white/20 text-[#D7E2EA]/80 font-medium">
                {project.category}
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-3">
              {project.name}
            </h2>

            <p className="text-base sm:text-lg text-[#D7E2EA]/90 font-light max-w-2xl mb-8">
              {project.tagline}
            </p>

            {/* Main Showcase Image */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-8">
              <div className="md:col-span-7 rounded-[28px] overflow-hidden border border-white/15 bg-black">
                <img
                  src={project.images.col2}
                  alt={project.name}
                  className="w-full h-[320px] sm:h-[400px] object-cover"
                />
              </div>
              <div className="md:col-span-5 flex flex-col gap-4">
                <div className="rounded-[24px] overflow-hidden border border-white/15 bg-black flex-1">
                  <img
                    src={project.images.col1Top}
                    alt={`${project.name} detail 1`}
                    className="w-full h-[180px] sm:h-[190px] object-cover"
                  />
                </div>
                <div className="rounded-[24px] overflow-hidden border border-white/15 bg-black flex-1">
                  <img
                    src={project.images.col1Bottom}
                    alt={`${project.name} detail 2`}
                    className="w-full h-[180px] sm:h-[190px] object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Overview & Deliverables */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/10 pt-6 mb-8">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-[#BBCCD7] mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#B600A8]" />
                  Project Overview
                </h4>
                <p className="text-sm text-[#D7E2EA]/80 leading-relaxed font-light">
                  {project.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-[#BBCCD7] mb-2 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#7621B0]" />
                  Deliverables & Pipeline
                </h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.deliverables.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1.5 text-xs text-[#D7E2EA]/60">
                  <span className="font-medium text-[#D7E2EA]/80">Tools:</span>{' '}
                  {project.tools.join(', ')}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
              <a
                href={project.images.col2}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] hover:bg-[#D7E2EA]/10 transition cursor-pointer"
              >
                <span>View Full Render</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
                style={{
                  background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                  boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
                  outline: '2px solid white',
                  outlineOffset: '-3px',
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 text-sm font-medium uppercase tracking-widest text-white hover:opacity-95 transition cursor-pointer"
              >
                <span>Inquire Similar Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
