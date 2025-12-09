import { Heart, ArrowUp } from "lucide-react";
import { socialLinks, quickLinks, footerInfo } from "../data/footer";
import { heroData } from "../data/hero";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    const element = document.getElementById(href.replace('#', ''));
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="relative bg-black border-t-2 border-amber-500/20 overflow-hidden">
      {/* Decorative glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-amber-500/10 via-yellow-500/5 to-transparent blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-amber-500/10 via-yellow-500/5 to-transparent blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 py-12 sm:py-16 md:py-20">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-4 sm:mb-5">
              <h3 
                className="bg-clip-text bg-gradient-to-r from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0)] text-[rgba(0,0,0,0)] text-xl sm:text-2xl md:text-3xl tracking-tight font-['Inter:Semi_Bold',sans-serif] font-semibold uppercase leading-tight"
                style={{ 
                  WebkitTextFillColor: "transparent", 
                  backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 788 72\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(39.4 3.6 -39.4 3.6 394 36)\\'><stop stop-color=\\'rgba(59,59,59,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(78,78,78,1)\\' offset=\\'0.031525\\'/><stop stop-color=\\'rgba(98,97,97,1)\\' offset=\\'0.06305\\'/><stop stop-color=\\'rgba(136,135,135,1)\\' offset=\\'0.1261\\'/><stop stop-color=\\'rgba(166,165,165,1)\\' offset=\\'0.21958\\'/><stop stop-color=\\'rgba(196,195,195,1)\\' offset=\\'0.31305\\'/><stop stop-color=\\'rgba(255,255,255,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(196,195,195,1)\\' offset=\\'0.65\\'/><stop stop-color=\\'rgba(166,165,165,1)\\' offset=\\'0.725\\'/><stop stop-color=\\'rgba(136,135,135,1)\\' offset=\\'0.8\\'/><stop stop-color=\\'rgba(98,97,97,1)\\' offset=\\'0.9\\'/><stop stop-color=\\'rgba(78,78,78,1)\\' offset=\\'0.95\\'/><stop stop-color=\\'rgba(59,59,59,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" 
                }}
              >
                {heroData.name}
              </h3>
              <p className="text-amber-200 text-xs sm:text-sm font-['Inter:Medium',sans-serif] font-medium">
                {heroData.title}
              </p>
            </div>
            <p className="text-gray-400 text-[10px] sm:text-xs leading-relaxed mb-5 sm:mb-6 max-w-md">
              {heroData.description[0]} {heroData.description[1]}
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3 sm:gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-2.5 sm:p-3 bg-gradient-to-br from-black via-zinc-900 to-black border border-amber-500/30 rounded-lg hover:border-amber-400/60 transition-all duration-300 hover:scale-110 overflow-hidden"
                    aria-label={social.name}
                  >
                    {/* Glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/0 via-amber-500/30 to-amber-500/0 rounded-lg opacity-0 group-hover:opacity-100 blur transition-opacity duration-300 -z-10" />
                    
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300 group-hover:text-amber-200 transition-colors duration-300 relative" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-amber-200 text-sm sm:text-base font-['Inter:Semi_Bold',sans-serif] font-semibold mb-4 sm:mb-5 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="group flex items-center text-gray-400 hover:text-amber-300 text-[10px] sm:text-xs transition-colors duration-300"
                  >
                    <span className="w-0 h-px bg-amber-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-amber-200 text-sm sm:text-base font-['Inter:Semi_Bold',sans-serif] font-semibold mb-4 sm:mb-5 uppercase tracking-wider">
              Get In Touch
            </h4>
            <div className="space-y-3 sm:space-y-4">
              <a
                href={`mailto:${footerInfo.email}`}
                className="group block text-gray-400 hover:text-amber-300 text-[10px] sm:text-xs transition-colors duration-300"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {footerInfo.email}
                </span>
              </a>
              <p className="text-gray-400 text-[10px] sm:text-xs leading-relaxed">
                {footerInfo.availabilityText}
              </p>
              
              {/* CTA Button */}
              <button 
                onClick={() => handleNavClick('#contact')}
                className="mt-4 px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-black rounded-lg text-[10px] sm:text-xs font-['Inter:Semi_Bold',sans-serif] font-semibold uppercase tracking-wider shadow-lg shadow-amber-500/50 hover:shadow-amber-500/70 hover:scale-105 transition-all duration-300"
              >
                {footerInfo.hireMeButtonText}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-500/20 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-gray-500 text-[9px] sm:text-[10px] text-center sm:text-left">
              © {new Date().getFullYear()} {footerInfo.copyrightName}. All rights reserved. Crafted with{" "}
              <Heart className="inline w-3 h-3 text-amber-500 fill-amber-500" /> and passion.
            </p>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-black via-zinc-900 to-black border border-amber-500/30 rounded-lg hover:border-amber-400/60 text-amber-300 hover:text-amber-200 text-[10px] sm:text-xs transition-all duration-300 hover:scale-105"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
