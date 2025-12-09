import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import profileImage from '../assets/profile.png';
import { technologies, testimonials, aboutInfo } from "../data/about";
import { useRef, useState, useEffect } from "react";

function TechnologyCard({ tech }: { tech: typeof technologies[0] }) {
  const Icon = tech.icon;
  
  return (
    <div className="group relative">
      <div className="relative bg-gradient-to-br from-black via-zinc-950 to-black border border-amber-500/30 rounded-xl p-3 sm:p-4 shadow-lg shadow-black/50 hover:border-amber-400/60 hover:shadow-amber-500/20 transition-all duration-300 hover:scale-105 overflow-hidden">
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/0 via-amber-500/20 to-amber-500/0 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300 -z-10" />
        
        <div className="relative flex flex-col items-center gap-2">
          {/* Icon */}
          <div className="p-2 bg-gradient-to-br from-amber-500/20 to-yellow-600/20 rounded-lg border border-amber-500/30 group-hover:border-amber-400/60 transition-colors duration-300">
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-300 group-hover:text-amber-200 transition-colors duration-300" />
          </div>
          
          {/* Name */}
          <span className="text-amber-200 group-hover:text-amber-100 text-[10px] sm:text-xs font-['Inter:Medium',sans-serif] font-medium transition-colors duration-300">
            {tech.name}
          </span>
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="relative group h-full">
      <div className="relative bg-gradient-to-br from-black via-zinc-950 to-black border border-amber-500/30 rounded-2xl p-4 sm:p-5 md:p-6 shadow-xl shadow-black/50 hover:border-amber-400/50 hover:shadow-amber-500/20 transition-all duration-500 overflow-hidden h-full flex flex-col">
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/0 via-amber-500/15 to-amber-500/0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
        
        <div className="relative flex flex-col flex-1">
          {/* Quote icon */}
          <div className="mb-3 sm:mb-4">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500/40" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          
          {/* Testimonial text */}
          <p className="text-gray-300 group-hover:text-gray-200 text-[10px] sm:text-xs leading-relaxed mb-4 sm:mb-5 font-['Inter:Regular',sans-serif] transition-colors duration-300 flex-1">
            {testimonial.text}
          </p>
          
          {/* Author info and rating */}
          <div className="flex items-center justify-between mt-auto">
            <div>
              <p className="text-amber-200 text-[10px] sm:text-xs font-['Inter:Semi_Bold',sans-serif] font-semibold">
                {testimonial.author}
              </p>
              <p className="text-gray-400 text-[9px] sm:text-[10px] font-['Inter:Regular',sans-serif]">
                {testimonial.role}
              </p>
            </div>
            
            {/* Star rating */}
            <div className="flex gap-0.5">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>
        </div>

        {/* Inner border glow */}
        <div className="absolute inset-0 rounded-2xl shadow-[0px_1px_0px_0px_inset_rgba(255,255,255,0.03)] group-hover:shadow-[0px_1px_0px_0px_inset_rgba(251,191,36,0.1)] pointer-events-none transition-shadow duration-500" />
      </div>
    </div>
  );
}

export default function AboutMeSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const cvUrl = new URL('../assets/cv/Abenezer-Merdekios-CVb.pdf', import.meta.url).href;
  const [dlProgress, setDlProgress] = useState(0);
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);

  const handleDownloadCv = async () => {
    try {
      setDownloading(true);
      setDownloaded(false);
      setIndeterminate(false);
      setDlProgress(0);

      const res = await fetch(cvUrl);
      if (!res.ok || !res.body) throw new Error('Failed to fetch CV');
      const contentLength = res.headers.get('content-length');
      const total = contentLength ? parseInt(contentLength, 10) : 0;
      if (!total) setIndeterminate(true);

      const reader = res.body.getReader();
      const chunks: BlobPart[] = [];
      let received = 0;
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        if (value) {
          chunks.push(value as BlobPart);
          received += value.byteLength;
          if (total) setDlProgress(Math.min(100, Math.round((received / total) * 100)));
        }
      }
      const blob = new Blob(chunks, { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Abenezer-Merdekios-CV.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      if (!total) setDlProgress(100);
      setDownloaded(true);
    } catch (err) {
      // Optional: surface an error toast or message
    } finally {
      setDownloading(false);
      setTimeout(() => setDownloaded(false), 4000);
    }
  };
  
  const checkScrollPosition = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    checkScrollPosition();
    container.addEventListener('scroll', checkScrollPosition);

    // Auto-scroll logic
    let interval: NodeJS.Timeout;
    if (isAutoScrolling) {
      interval = setInterval(() => {
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 10) {
          // Reset to beginning smoothly
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Scroll to next item
          const cardWidth = container.querySelector('.testimonial-card')?.clientWidth || 0;
          const gap = 24; // gap-6 = 24px
          container.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
        }
      }, 5000); // Auto-scroll every 5 seconds
    }

    return () => {
      container.removeEventListener('scroll', checkScrollPosition);
      if (interval) clearInterval(interval);
    };
  }, [isAutoScrolling]);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Pause auto-scroll when manually scrolling
    setIsAutoScrolling(false);
    setTimeout(() => setIsAutoScrolling(true), 10000); // Resume after 10s

    const cardWidth = container.querySelector('.testimonial-card')?.clientWidth || 0;
    const gap = 24;
    const scrollAmount = cardWidth + gap;

    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section id="about" className="relative bg-black py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative lightning effects */}
      <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/30 via-yellow-500/20 to-transparent blur-3xl animate-pulse" />
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-tl from-amber-500/30 via-yellow-500/20 to-transparent blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-left">
          {/* Main Title */}
          <h2 
            className="bg-clip-text bg-gradient-to-r from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0)] text-[rgba(0,0,0,0)] text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight lg:tracking-[-1.2px] font-['Inter:Semi_Bold',sans-serif] font-semibold uppercase leading-tight mb-2 sm:mb-3"
            style={{ 
              WebkitTextFillColor: "transparent", 
              backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 788 72\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(39.4 3.6 -39.4 3.6 394 36)\\'><stop stop-color=\\'rgba(59,59,59,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(78,78,78,1)\\' offset=\\'0.031525\\'/><stop stop-color=\\'rgba(98,97,97,1)\\' offset=\\'0.06305\\'/><stop stop-color=\\'rgba(136,135,135,1)\\' offset=\\'0.1261\\'/><stop stop-color=\\'rgba(166,165,165,1)\\' offset=\\'0.21958\\'/><stop stop-color=\\'rgba(196,195,195,1)\\' offset=\\'0.31305\\'/><stop stop-color=\\'rgba(255,255,255,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(196,195,195,1)\\' offset=\\'0.65\\'/><stop stop-color=\\'rgba(166,165,165,1)\\' offset=\\'0.725\\'/><stop stop-color=\\'rgba(136,135,135,1)\\' offset=\\'0.8\\'/><stop stop-color=\\'rgba(98,97,97,1)\\' offset=\\'0.9\\'/><stop stop-color=\\'rgba(78,78,78,1)\\' offset=\\'0.95\\'/><stop stop-color=\\'rgba(59,59,59,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" 
            }}
          >
            ABOUT ME
          </h2>

          {/* Subtitle */}
          <p className="text-amber-200 text-xs sm:text-sm md:text-base font-['Inter:Medium',sans-serif] font-medium">
            My Journey, Philosophy & Expertise
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8 md:mb-10">
          {/* Profile Card - Left Side */}
          <div className="lg:col-span-1">
            <div className="relative bg-gradient-to-br from-black via-zinc-950 to-black border-2 border-amber-500/40 rounded-3xl p-5 sm:p-6 md:p-8 shadow-2xl shadow-black/60 hover:border-amber-500/60 hover:shadow-amber-500/20 transition-all duration-500 overflow-hidden group">
              {/* Glow effects */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/0 via-amber-500/20 to-amber-500/0 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 -z-10" />
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative flex flex-col items-center">
                {/* Profile Image with Golden Ring */}
                <div className="relative mb-4 sm:mb-5">
                  {/* Outer glow ring */}
                  <div className="absolute -inset-3 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse" />
                  
                  {/* Golden border ring */}
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full p-1.5 bg-gradient-to-br from-amber-500 via-yellow-500 to-amber-600 shadow-2xl shadow-amber-500/50">
                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-black">
                      <ImageWithFallback
                        src={profileImage}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Name and Title */}
                <div className="text-center mb-4">
                  <h3 className="text-amber-100 text-sm sm:text-base md:text-lg font-['Inter:Semi_Bold',sans-serif] font-semibold mb-1">
                    {aboutInfo.name}
                  </h3>
                  <p className="text-gray-400 text-[10px] sm:text-xs font-['Inter:Regular',sans-serif]">
                    {aboutInfo.role}
                  </p>
                </div>

                {/* Stats or Additional Info */}
                <div className="w-full grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-black/30 border border-amber-500/30 rounded-xl p-3 text-center">
                    <p className="text-amber-400 text-lg sm:text-xl md:text-2xl font-['Inter:Semi_Bold',sans-serif] font-semibold">{aboutInfo.yearsExperience}</p>
                    <p className="text-gray-400 text-[9px] sm:text-[10px] font-['Inter:Regular',sans-serif]">Years Exp</p>
                  </div>
                  <div className="bg-black/30 border border-amber-500/30 rounded-xl p-3 text-center">
                    <p className="text-amber-400 text-lg sm:text-xl md:text-2xl font-['Inter:Semi_Bold',sans-serif] font-semibold">{aboutInfo.projectsCount}</p>
                    <p className="text-gray-400 text-[9px] sm:text-[10px] font-['Inter:Regular',sans-serif]">Projects</p>
                  </div>
                </div>
              </div>

              {/* Inner border glow */}
              <div className="absolute inset-0 rounded-3xl shadow-[0px_2px_0px_0px_inset_rgba(255,255,255,0.03)] group-hover:shadow-[0px_2px_0px_0px_inset_rgba(251,191,36,0.1)] pointer-events-none transition-shadow duration-500" />
            </div>
          </div>

          {/* My Story Card - Right Side */}
          <div className="lg:col-span-2">
            <div className="relative bg-gradient-to-br from-black via-zinc-950 to-black border-2 border-amber-500/40 rounded-3xl p-5 sm:p-6 md:p-8 shadow-2xl shadow-black/60 hover:border-amber-500/60 hover:shadow-amber-500/20 transition-all duration-500 overflow-hidden group h-full">
              {/* Glow effects */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/0 via-amber-500/20 to-amber-500/0 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 -z-10" />
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative h-full flex flex-col">
                <div className="flex items-start justify-between mb-4 sm:mb-5">
                  <h3 className="text-amber-200 text-sm sm:text-base md:text-lg font-['Rough_Motion:Regular',sans-serif] uppercase tracking-wider">
                    MY STORY
                  </h3>
                  
                  {/* Dual Expertise Badges */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    {/* Design Badge */}
                    <div className="relative">
                      <svg className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 transform -rotate-90" viewBox="0 0 60 60">
                        <circle cx="30" cy="30" r="24" fill="none" stroke="rgba(74, 53, 45, 0.3)" strokeWidth="2" />
                        <circle cx="30" cy="30" r="24" fill="none" stroke="url(#gradientDesign)" strokeWidth="2" strokeLinecap="round" strokeDasharray="150" strokeDashoffset={150 - (150 * aboutInfo.designPercentage / 100)} />
                        <defs>
                          <linearGradient id="gradientDesign">
                            <stop offset="0%" stopColor="#F3DD9A" />
                            <stop offset="100%" stopColor="#DEB36A" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-amber-100 text-[10px] sm:text-xs md:text-sm font-['Inter:Semi_Bold',sans-serif] font-semibold">{aboutInfo.designPercentage}%</span>
                        <span className="text-amber-300 text-[6px] sm:text-[7px] md:text-[8px] font-['Inter:Regular',sans-serif]">Design</span>
                      </div>
                    </div>
                    
                    {/* Code Badge */}
                    <div className="relative">
                      <svg className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 transform -rotate-90" viewBox="0 0 60 60">
                        <circle cx="30" cy="30" r="24" fill="none" stroke="rgba(74, 53, 45, 0.3)" strokeWidth="2" />
                        <circle cx="30" cy="30" r="24" fill="none" stroke="url(#gradientCode)" strokeWidth="2" strokeLinecap="round" strokeDasharray="150" strokeDashoffset={150 - (150 * aboutInfo.codePercentage / 100)} />
                        <defs>
                          <linearGradient id="gradientCode">
                            <stop offset="0%" stopColor="#F3DD9A" />
                            <stop offset="100%" stopColor="#DEB36A" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-amber-100 text-[10px] sm:text-xs md:text-sm font-['Inter:Semi_Bold',sans-serif] font-semibold">{aboutInfo.codePercentage}%</span>
                        <span className="text-amber-300 text-[6px] sm:text-[7px] md:text-[8px] font-['Inter:Regular',sans-serif]">Code</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Story Content */}
                <div className="flex-1">
                  {aboutInfo.storyParagraphs.map((paragraph, index) => (
                    <p 
                      key={index}
                      className={`text-gray-300 group-hover:text-gray-200 text-[10px] sm:text-xs md:text-sm leading-relaxed font-['Inter:Regular',sans-serif] transition-colors duration-300 ${index < aboutInfo.storyParagraphs.length - 1 ? 'mb-3 sm:mb-4' : ''}`}
                    >
                      {paragraph.split(/(\*\*.*?\*\*)/).map((part, i) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                          return <span key={i} className="text-amber-400 font-semibold">{part.slice(2, -2)}</span>;
                        }
                        return part;
                      })}
                    </p>
                  ))}
                </div>

                {/* Download CV Button - Full width at bottom */}
                <div className="mt-4 sm:mt-5 w-full">
                  <button
                    type="button"
                    onClick={handleDownloadCv}
                    disabled={downloading}
                    className="relative block w-full overflow-hidden rounded-xl border border-amber-400/60 bg-[#201712] text-amber-100 shadow-lg shadow-amber-500/20 focus:outline-none focus:ring-2 focus:ring-amber-400/50 cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 hover:shadow-[0_0_8px_rgba(251,191,36,0.15)]"
                    aria-live="polite"
                    aria-label={downloaded ? 'Downloaded' : downloading ? (indeterminate ? 'Downloading' : `Downloading ${dlProgress}%`) : 'Download my CV'}
                  >
                    <div
                      className={`absolute left-0 top-0 h-full transition-[width] duration-200 ${indeterminate ? 'animate-pulse' : ''}`}
                      style={{
                        width: indeterminate ? '50%' : `${dlProgress}%`,
                        background: 'linear-gradient(90deg, rgba(245,158,11,0.15) 0%, rgba(245,158,11,0.35) 50%, rgba(234,179,8,0.35) 100%)'
                      }}
                    />
                    <div className="relative z-10 px-6 sm:px-8 md:px-10 py-2 sm:py-2.5 md:py-3 text-center">
                      <span className="text-[10px] sm:text-xs md:text-sm font-['Rough_Motion:Regular',sans-serif] uppercase tracking-wider">
                        {downloaded ? 'downloaded' : downloading ? (indeterminate ? 'downloading…' : `downloading ${dlProgress}%`) : 'download my cv'}
                      </span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Inner border glow */}
              <div className="absolute inset-0 rounded-3xl shadow-[0px_2px_0px_0px_inset_rgba(255,255,255,0.03)] group-hover:shadow-[0px_2px_0px_0px_inset_rgba(251,191,36,0.1)] pointer-events-none transition-shadow duration-500" />
            </div>
          </div>
        </div>

        {/* Skills & Technologies */}
        <div className="relative bg-gradient-to-br from-black via-zinc-950 to-black border-2 border-amber-500/40 rounded-3xl p-5 sm:p-6 md:p-8 shadow-2xl shadow-black/60 hover:border-amber-500/60 hover:shadow-amber-500/20 transition-all duration-500 overflow-hidden group mb-6 sm:mb-8 md:mb-10">
          {/* Glow effects */}
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/0 via-amber-500/20 to-amber-500/0 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 -z-10" />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative">
            <h3 className="text-amber-200 text-sm sm:text-base md:text-lg font-['Rough_Motion:Regular',sans-serif] uppercase mb-5 sm:mb-6 tracking-wider">
              SKILLS & TECHNOLOGIES
            </h3>
            
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
              {technologies.map((tech) => (
                <TechnologyCard key={tech.id} tech={tech} />
              ))}
            </div>
          </div>

          {/* Inner border glow */}
          <div className="absolute inset-0 rounded-3xl shadow-[0px_2px_0px_0px_inset_rgba(255,255,255,0.03)] group-hover:shadow-[0px_2px_0px_0px_inset_rgba(251,191,36,0.1)] pointer-events-none transition-shadow duration-500" />
        </div>

        {/* Testimonials with Auto-Scroll */}
        <div className="relative">
          <h3 className="text-amber-200 text-sm sm:text-base md:text-lg font-['Rough_Motion:Regular',sans-serif] uppercase mb-5 sm:mb-6 tracking-wider text-center">
            TESTIMONIALS
          </h3>
          
          <div className="relative group/carousel">
            {/* Scroll Container */}
            <div 
              ref={scrollContainerRef}
              className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="testimonial-card flex-shrink-0 w-full md:w-[calc(50%-12px)] snap-start"
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>

            {/* Navigation Arrows - Subtle */}
            {canScrollLeft && (
              <button
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 p-2 bg-black/80 backdrop-blur-sm border border-amber-500/30 rounded-full text-amber-300 hover:text-amber-200 hover:border-amber-400/60 opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:scale-110 z-10"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            )}
            
            {canScrollRight && (
              <button
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 p-2 bg-black/80 backdrop-blur-sm border border-amber-500/30 rounded-full text-amber-300 hover:text-amber-200 hover:border-amber-400/60 opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:scale-110 z-10"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            )}
          </div>
        </div>
      </div>
      
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
