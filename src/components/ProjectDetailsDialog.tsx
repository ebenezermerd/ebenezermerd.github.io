import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Rocket, X, Eye } from "lucide-react";
import { motion } from "motion/react";
import { projectDetailsById, defaultProcessSteps, dialogCTA } from "../data/projectDetails";
import { type Project } from "../data/projects";
import { useState, useEffect } from "react";
import ConsultationFormDialog from "./ConsultationFormDialog";
import ImageCarousel from "./ImageCarousel";

interface ProjectDetailsDialogProps {
  readonly project: Project | null;
  readonly open: boolean;
  readonly onOpenChange: (open: boolean) => void;
}

export default function ProjectDetailsDialog({ project, open, onOpenChange }: ProjectDetailsDialogProps) {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [carouselOpen, setCarouselOpen] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);

  // Reset states when dialog closes
  useEffect(() => {
    if (!open) {
      setConsultationOpen(false);
      setCarouselOpen(false);
    }
  }, [open]);

  if (!project) return null;

  const details = projectDetailsById[project.id] ?? {
    completionRate: 100,
    processSteps: defaultProcessSteps,
    designImages: [project.image],
    architectureImage: project.image,
    impactSummary: `${project.title} delivered measurable improvements across usability and performance.`,
    impactMetrics: [],
    techStackDescription: "",
    livePreviewUrl: undefined
  };

  // Use gallery images if available, otherwise fall back to details or project image
  const designImages = project.gallery && project.gallery.length > 0
    ? project.gallery
    : details.designImages;

  // Use the second image from gallery for architecture if available (to be different from main hero), 
  // otherwise fallback to architectureImage or main image
  const architectureImage = (project.gallery && project.gallery.length > 1)
    ? project.gallery[1]
    : (details.architectureImage || project.image);

  // Construct the full list of images for the carousel
  const carouselImages = project.gallery && project.gallery.length > 0
    ? project.gallery
    : Array.from(new Set([project.image, ...details.designImages, details.architectureImage].filter(Boolean)));

  const handleImageClick = (src: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const current = e.currentTarget as HTMLElement;
    if (!current.dataset.imageTrigger) {
      return;
    }
    const index = carouselImages.indexOf(src);
    setInitialSlide(index >= 0 ? index : 0);
    setCarouselOpen(true);
    if (import.meta.env.DEV) {
      // Debug log to trace unexpected activations
      // eslint-disable-next-line no-console
      console.log('[Carousel Open]', { src, index, triggeredFrom: current.tagName, path: (e.nativeEvent as any).composedPath?.().map((n: any) => n?.tagName).filter(Boolean) });
    }
  };

  const handleConsultationClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event bubbling
    setConsultationOpen(true);
  };

  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const progressOffset = circumference * (1 - Math.max(0, Math.min(100, details.completionRate)) / 100);

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent
          trapFocus={!(carouselOpen || consultationOpen)}
          className="max-w-[95vw] md:max-w-[90vw] lg:max-w-[1200px] max-h-[95vh] overflow-y-auto bg-[#1a1410] border-2 border-amber-500/40 p-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] shadow-xl shadow-black/60 outline outline-1 outline-amber-500/40"
        >
          {/* Hidden accessibility title and description */}
          <DialogTitle className="sr-only">{project.title}</DialogTitle>
          <DialogDescription className="sr-only">
            {project.description} {project.techStack} - Detailed project information including challenge, goals, visual design, technology stack, and measurable impact.
          </DialogDescription>

          <motion.div
            onClick={(e) => {
              // Defensive: if any parent element accidentally had an old click handler lingering, prevent carousel open
              const target = e.target as HTMLElement;
              if (target && !target.dataset.imageTrigger) {
                // Ensure clicks on non-image areas never propagate to stale handlers
                // Stop at motion container only if bubbling would reach image trigger erroneously.
              }
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="absolute right-4 top-4 z-50 p-2 bg-black/60 hover:bg-black/80 rounded-full border border-amber-500/50 hover:border-amber-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
            >
              <X className="w-5 h-5 text-amber-300" />
            </button>

            {/* Hero Section with Image and Completion Rate */}
            <div className="relative bg-gradient-to-br from-[#32221b] to-[#1a1410] border-b-2 border-amber-500/20 rounded-t-lg overflow-hidden">
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 p-4 sm:p-6 md:p-8">
                {/* Hero Image */}
                {/* Hero image (no longer triggers carousel) */}
                <div className="w-full md:w-1/2 lg:w-3/5">
                  <div
                    className="relative z-0 rounded-xl overflow-hidden border-2 border-amber-500/40 shadow-2xl shadow-amber-500/20 group"
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                    {/* Removed carousel trigger; only key features images open carousel */}
                  </div>
                </div>

                {/* Project Info & Completion Rate */}
                <div className="w-full md:w-1/2 lg:w-2/5 flex flex-col gap-4">
                  {/* Project Title Section */}
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-gradient-to-br from-amber-500/20 to-yellow-600/20 rounded-lg border border-amber-500/40">
                      <Rocket className="w-5 h-5 text-amber-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-amber-100 text-xs sm:text-sm uppercase tracking-wider font-['Inter:Medium',sans-serif] font-medium mb-1">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-[10px] sm:text-xs">
                        {project.description}{" "}
                        <span className="text-amber-400 font-semibold">{project.techStack}</span>
                      </p>
                    </div>
                  </div>

                  {/* Completion Rate & Live Preview */}
                  <div className="flex items-center justify-center gap-4 py-4">
                    {/* Completion Rate Circle */}
                    <div className="relative">
                      {/* Outer circles */}
                      <svg className="w-24 h-24 sm:w-32 sm:h-32" viewBox="0 0 120 120">
                        {/* Background circle */}
                        <circle
                          cx="60"
                          cy="60"
                          r="50"
                          fill="none"
                          stroke="rgba(74, 53, 45, 0.77)"
                          strokeWidth="3"
                        />
                        {/* Progress circle */}
                        <circle
                          cx="60"
                          cy="60"
                          r="45"
                          fill="none"
                          stroke="url(#gradient)"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeDasharray={circumference}
                          strokeDashoffset={progressOffset}
                          transform="rotate(-90 60 60)"
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#F3DD9A" />
                            <stop offset="58%" stopColor="#F1C77C" />
                            <stop offset="100%" stopColor="#DEB36A" />
                          </linearGradient>
                        </defs>
                      </svg>

                      {/* Center text */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-[10px] text-amber-200 font-['Inter:Medium',sans-serif] font-medium">Completion Rate</span>
                        <span className="text-2xl sm:text-3xl text-amber-100 font-['Inter:Semi_Bold',sans-serif] font-semibold">{details.completionRate}%</span>
                      </div>
                    </div>

                    {/* Live Preview Badge */}
                    {details.livePreviewUrl && (
                      <a
                        href={details.livePreviewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group z-10 focus:outline-none focus:ring-2 focus:ring-amber-400/60"
                        tabIndex={0}
                        role="link"
                        aria-label="Open live project preview in new tab"
                        onClick={(e) => {
                          // Prevent any parent image click handlers
                          e.stopPropagation();
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            e.currentTarget.click();
                          }
                        }}
                      >
                        <svg className="w-24 h-24 sm:w-32 sm:h-32" viewBox="0 0 120 120">
                          {/* Background circle */}
                          <circle
                            cx="60"
                            cy="60"
                            r="50"
                            fill="none"
                            stroke="rgba(74, 53, 45, 0.77)"
                            strokeWidth="3"
                          />
                          {/* Accent circle */}
                          <circle
                            cx="60"
                            cy="60"
                            r="45"
                            fill="none"
                            stroke="url(#gradientPreview)"
                            strokeWidth="3"
                            className="group-hover:stroke-[4] transition-all duration-300"
                          />
                          <defs>
                            <linearGradient id="gradientPreview" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#F3DD9A" />
                              <stop offset="58%" stopColor="#F1C77C" />
                              <stop offset="100%" stopColor="#DEB36A" />
                            </linearGradient>
                          </defs>
                        </svg>

                        {/* Center content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-amber-300 mb-1" />
                          <span className="text-[10px] text-amber-200 font-['Inter:Medium',sans-serif] font-medium">Live Preview</span>
                        </div>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Content Grid */}
            <div className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
              {/* Row 1: Challenge & Goals + Visual Design */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Challenge & Goals */}
                <div className="bg-[#352724] border-2 border-amber-500/30 rounded-2xl p-4 sm:p-6 shadow-lg shadow-black/50">
                  <h4 className="text-amber-200 text-sm sm:text-base uppercase tracking-wider font-['Inter:Semi_Bold',sans-serif] font-semibold mb-3">
                    PROJECT OVERVIEW
                  </h4>
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-amber-300 text-[10px] sm:text-xs font-semibold">Category:</span>
                      <span className="text-gray-300 text-[10px] sm:text-xs">{project.category}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-amber-300 text-[10px] sm:text-xs font-semibold">Period:</span>
                      <span className="text-gray-300 text-[10px] sm:text-xs">{project.period}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-[10px] sm:text-xs leading-relaxed mb-3">
                    {project.description}
                  </p>

                  {/* Process Timeline */}
                  <div className="mt-4 pt-4 border-t border-amber-500/20">
                    <div className="relative">
                      {/* Timeline line */}
                      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500" />

                      {/* Start and End dots */}
                      <div className="absolute top-1/2 left-0 w-2 h-2 bg-amber-300 rounded-full -translate-y-1/2 shadow-lg shadow-amber-500/50" />
                      <div className="absolute top-1/2 right-0 w-2 h-2 bg-amber-300 rounded-full -translate-y-1/2 shadow-lg shadow-amber-500/50" />

                      {/* Process steps */}
                      <div className="relative flex justify-between items-center pt-6">
                        {details.processSteps.map((step) => (
                          <div key={step} className="text-center flex-1">
                            <p className="text-[8px] sm:text-[10px] text-amber-100 font-['Inter:Medium',sans-serif] font-medium whitespace-nowrap">
                              {step}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visual Design & Prototyping */}
                <div className="bg-[#352724] border-2 border-amber-500/30 rounded-2xl p-4 sm:p-6 shadow-lg shadow-black/50">
                  <h4 className="text-amber-200 text-sm sm:text-base uppercase tracking-wider font-['Inter:Semi_Bold',sans-serif] font-semibold mb-3">
                    KEY FEATURES
                  </h4>
                  <ul className="space-y-2 mb-4">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <div className="mt-1 w-1.5 h-1.5 bg-amber-400 rounded-full flex-shrink-0" />
                        <p className="text-gray-300 text-[10px] sm:text-xs leading-relaxed">
                          {feature}
                        </p>
                      </li>
                    ))}
                  </ul>

                  {/* Design Images Grid */}
                  <div className="grid grid-cols-3 gap-2">
                    {designImages.map((img, index) => (
                      <div
                        key={index}
                        className="relative aspect-[4/3] rounded-lg overflow-hidden border border-amber-500/20 group"
                      >
                        <ImageWithFallback
                          src={img}
                          alt={`Design image ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Hover overlay (visual only) */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {/* Click trigger constrained to wrapper bounds */}
                        <button
                          type="button"
                          aria-label={`Open image carousel for design image ${index + 1}`}
                          onClick={(e) => handleImageClick(img, e)}
                          data-image-trigger="true"
                          className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/30 focus:bg-black/30 transition-colors duration-200"
                        >
                          <Eye className="w-7 h-7 text-amber-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Row 2: Technology Stack + Technological Architecture */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* Technology Stack & Tools */}
                <div className="bg-[#352724] border-2 border-amber-500/30 rounded-2xl p-4 sm:p-6 shadow-lg shadow-black/50">
                  <h4 className="text-amber-200 text-sm sm:text-base uppercase tracking-wider font-['Inter:Semi_Bold',sans-serif] font-semibold mb-4">
                    TECHNOLOGY STACK
                  </h4>

                  {/* Technology badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.split(',').map((raw) => {
                      const tech = raw.trim();
                      return (
                        <div
                          key={tech}
                          className="px-3 py-1.5 bg-gradient-to-br from-amber-500/10 to-yellow-600/10 border border-amber-500/40 rounded-full backdrop-blur-sm shadow-md shadow-amber-500/20 hover:shadow-amber-500/40 hover:border-amber-400/70 hover:scale-105 transition-all duration-300"
                        >
                          <span className="text-amber-200 text-[10px] sm:text-xs font-['Inter:Medium',sans-serif] font-medium">
                            {tech}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <p className="text-gray-300 text-[10px] sm:text-xs leading-relaxed mb-4">
                    {details.techStackDescription}
                  </p>

                  {/* CTA Button */}
                  <button
                    type="button"
                    onClick={handleConsultationClick}
                    aria-label="Open consultation form"
                    className="group relative w-full mt-4 px-4 py-2 rounded-xl border border-amber-400/60 bg-[#201712] text-amber-200 text-[10px] sm:text-xs uppercase tracking-wide transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400/50 hover:bg-amber-500/10 hover:border-amber-300 active:scale-[.97]"
                  >
                    <span className="relative z-10">{dialogCTA}</span>
                    <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-amber-500/10 via-yellow-500/10 to-amber-600/10 transition-opacity duration-300" />
                  </button>
                </div>

                {/* Technological Architecture */}
                <div className="lg:col-span-2 bg-[#352724] border-2 border-amber-500/30 rounded-2xl p-4 sm:p-6 shadow-lg shadow-black/50">
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Image */}
                    <div className="w-full sm:w-1/2">
                      {/* Architecture image (no carousel trigger now) */}
                      <div
                        className="aspect-[16/9] rounded-lg overflow-hidden border border-amber-500/20 mb-3 group"
                      >
                        <ImageWithFallback
                          src={architectureImage}
                          alt="Architecture"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* No trigger here */}
                      </div>
                      <h4 className="text-amber-200 text-xs sm:text-sm uppercase tracking-wider font-['Inter:Semi_Bold',sans-serif] font-semibold">
                        TECHNOLOGICAL ARCHITECTURE
                      </h4>
                    </div>

                    {/* Measurable Impact */}
                    <div className="w-full sm:w-1/2">
                      <h4 className="text-amber-200 text-xs sm:text-sm uppercase tracking-wider font-['Inter:Semi_Bold',sans-serif] font-semibold mb-3">
                        MEASURABLE IMPACT
                      </h4>
                      <p className="text-gray-300 text-[10px] sm:text-xs leading-relaxed mb-3">
                        {details.impactSummary}
                      </p>

                      {/* Impact Metrics */}
                      <div className="flex flex-col gap-2">
                        {details.impactMetrics.map((m) => (
                          <div key={`${m.label}-${m.value}`} className="flex items-start gap-2">
                            <div className="p-1.5 bg-gradient-to-br from-amber-500/20 to-yellow-600/20 rounded-lg border border-amber-500/30">
                              <Rocket className="w-4 h-4 text-amber-300" />
                            </div>
                            <div>
                              <p className="text-gray-300 text-[10px] sm:text-xs leading-relaxed">
                                {m.label}: <span className="text-amber-400 font-semibold">{m.value}</span>
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </DialogContent>
      </Dialog>

      {/* Consultation Form Dialog - Render outside main dialog */}
      <ConsultationFormDialog 
        open={consultationOpen} 
        onOpenChange={setConsultationOpen}
        source="project-details"
        projectTitle={project.title}
      />

      {/* Image Carousel - Render outside main dialog */}
      <ImageCarousel
        images={carouselImages}
        initialIndex={initialSlide}
        open={carouselOpen}
        onClose={() => setCarouselOpen(false)}
      />
    </>
  );
}