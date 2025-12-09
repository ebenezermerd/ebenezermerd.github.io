import { Rocket } from "lucide-react";
import { services, processSteps } from "../data/services";

function ServiceCard({ service }: { service: typeof services[0] }) {
  const Icon = service.icon;
  
  return (
    <div className="relative group/card">
      {/* Floating Icon on top - centered, moves to left corner on hover */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 group-hover/card:left-[-15px] group-hover/card:top-[-25px] group-hover/card:translate-x-0 z-10 transition-all duration-500 ease-out">
        <div className="relative">
          {/* Glow effect behind icon */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 rounded-xl blur-lg opacity-60 group-hover/card:opacity-100 transition-opacity duration-500 animate-pulse" />
          
          {/* Icon container */}
          <div className="relative bg-gradient-to-br from-black via-zinc-900 to-black p-2.5 sm:p-3 rounded-xl border-2 border-amber-500/50 group-hover/card:border-amber-400 transition-all duration-500 shadow-2xl shadow-amber-500/30 group-hover/card:shadow-amber-400/50 group-hover/card:scale-110">
            <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-amber-300 group-hover/card:text-amber-200 transition-colors duration-300" />
          </div>
        </div>
      </div>

      {/* Card content */}
      <div className="relative bg-gradient-to-br from-black via-zinc-950 to-black border-2 border-amber-500/40 rounded-2xl p-3 sm:p-4 md:p-5 pt-6 sm:pt-7 md:pt-8 shadow-xl shadow-black/50 hover:border-amber-400/70 hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 group-hover/card:scale-105 group-hover/card:-translate-y-2 overflow-hidden">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/5 to-amber-600/0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
        
        {/* Floating light effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/0 via-amber-500/20 to-amber-500/0 rounded-2xl opacity-0 group-hover/card:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
        
        <div className="relative flex flex-col items-center justify-center gap-2 sm:gap-2.5">
          <h3 className="text-amber-200 group-hover/card:text-amber-100 text-[9px] sm:text-[11px] md:text-xs font-['Rough_Motion:Regular',sans-serif] uppercase tracking-wider text-center transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-gray-300 group-hover/card:text-gray-200 text-[7px] sm:text-[9px] md:text-[10px] font-['Inter:Regular',sans-serif] text-center transition-colors duration-300">
            {service.description}{" "}
            <span className="text-amber-400 group-hover/card:text-amber-300 font-semibold transition-colors duration-300">{service.growth}</span>
          </p>
        </div>
        
        {/* Inner border glow */}
        <div className="absolute inset-0 rounded-2xl shadow-[0px_1px_0px_0px_inset_rgba(255,255,255,0.03)] group-hover/card:shadow-[0px_1px_0px_0px_inset_rgba(251,191,36,0.15)] pointer-events-none transition-shadow duration-500" />
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="bg-black py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-left">
          {/* All Services Badge */}
          <div className="inline-flex items-center justify-center mb-3 sm:mb-4">
            <div className="flex items-center justify-center text-center px-3 sm:px-4 py-1 border border-amber-500/50 bg-amber-500/5 rounded-full backdrop-blur-sm shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:border-amber-400/70 transition-all duration-300">
              <span className="text-amber-300 text-[9px] sm:text-[10px] font-['Inter:Medium',sans-serif] font-medium uppercase tracking-wider">
                all services
              </span>
            </div>
          </div>

          {/* Main Title */}
          <h2 
            className="bg-clip-text bg-gradient-to-r from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0)] text-[rgba(0,0,0,0)] text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight lg:tracking-[-1.2px] font-['Inter:Semi_Bold',sans-serif] font-semibold uppercase leading-tight mb-2 sm:mb-3"
            style={{ 
              WebkitTextFillColor: "transparent", 
              backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 788 72\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(39.4 3.6 -39.4 3.6 394 36)\\'><stop stop-color=\\'rgba(59,59,59,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(78,78,78,1)\\' offset=\\'0.031525\\'/><stop stop-color=\\'rgba(98,97,97,1)\\' offset=\\'0.06305\\'/><stop stop-color=\\'rgba(136,135,135,1)\\' offset=\\'0.1261\\'/><stop stop-color=\\'rgba(166,165,165,1)\\' offset=\\'0.21958\\'/><stop stop-color=\\'rgba(196,195,195,1)\\' offset=\\'0.31305\\'/><stop stop-color=\\'rgba(255,255,255,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(196,195,195,1)\\' offset=\\'0.65\\'/><stop stop-color=\\'rgba(166,165,165,1)\\' offset=\\'0.725\\'/><stop stop-color=\\'rgba(136,135,135,1)\\' offset=\\'0.8\\'/><stop stop-color=\\'rgba(98,97,97,1)\\' offset=\\'0.9\\'/><stop stop-color=\\'rgba(78,78,78,1)\\' offset=\\'0.95\\'/><stop stop-color=\\'rgba(59,59,59,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" 
            }}
          >
            Services & Expertise
          </h2>

          {/* Subtitle */}
          <p className="text-[#e3be81] text-xs sm:text-sm md:text-base font-['Inter:Medium',sans-serif] font-medium">
            What I Offer and Help with
          </p>
        </div>

        {/* Content Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          {/* What I Offer Card */}
          <div className="relative bg-gradient-to-br from-black via-zinc-950 to-black border-2 border-amber-500/40 rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl shadow-black/60 hover:shadow-amber-500/20 hover:border-amber-500/60 transition-all duration-500 overflow-hidden group">
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Outer glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/0 via-amber-500/20 to-amber-500/0 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 -z-10" />
            
            <div className="relative">
              <h3 className="text-amber-200 text-sm sm:text-base md:text-lg font-['Rough_Motion:Regular',sans-serif] uppercase mb-6 sm:mb-8 tracking-wider">
                WHAT I OFFER
              </h3>
              
              {/* Services Grid - 3 columns, 2 rows */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                {services.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </div>

            {/* Inner border glow */}
            <div className="absolute inset-0 rounded-3xl shadow-[0px_2px_0px_0px_inset_rgba(255,255,255,0.03)] group-hover:shadow-[0px_2px_0px_0px_inset_rgba(251,191,36,0.1)] pointer-events-none transition-shadow duration-500" />
          </div>

          {/* My Process Card */}
          <div className="relative bg-gradient-to-br from-black via-zinc-950 to-black border-2 border-amber-500/40 rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl shadow-black/60 hover:shadow-amber-500/20 hover:border-amber-500/60 transition-all duration-500 overflow-hidden group">
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Outer glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/0 via-amber-500/20 to-amber-500/0 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 -z-10" />
            
            <div className="relative">
              <h3 className="text-amber-200 text-sm sm:text-base md:text-lg font-['Rough_Motion:Regular',sans-serif] uppercase mb-3 sm:mb-4 tracking-wider">
                MY PROCESS
              </h3>
              
              <p className="text-gray-300 text-[10px] sm:text-xs md:text-sm font-['Inter:Medium',sans-serif] font-medium leading-relaxed mb-6 sm:mb-8">
                Blending robust code with intuitive pixel-perfect solutions that are going to be problem solving.
              </p>

              {/* Process visualization - Enhanced */}
              <div className="space-y-5 sm:space-y-6">
                {processSteps.map((step, index) => (
                  <div key={index} className="group/step">
                    <div className="flex items-center gap-4">
                      {/* Step number with glow */}
                      <div className="relative flex-shrink-0">
                        {/* Glow behind number */}
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full blur-md opacity-50 group-hover/step:opacity-100 transition-opacity duration-300" />
                        
                        {/* Number circle */}
                        <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-black via-zinc-900 to-black border-2 border-amber-500/50 group-hover/step:border-amber-400 flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover/step:shadow-amber-400/50 group-hover/step:scale-110 transition-all duration-300">
                          <span className="text-amber-300 group-hover/step:text-amber-200 text-[10px] sm:text-xs font-['Inter:Semi_Bold',sans-serif] font-semibold transition-colors duration-300">{index + 1}</span>
                        </div>
                      </div>
                      
                      {/* Step name */}
                      <div className="flex-1">
                        <span className="text-amber-200 group-hover/step:text-amber-100 text-[10px] sm:text-xs md:text-sm font-['Inter:Semi_Bold',sans-serif] font-semibold transition-colors duration-300 block">
                          {step}
                        </span>
                        
                        {/* Progress bar */}
                        <div className="mt-1.5 h-1 bg-zinc-800/50 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full transition-all duration-700 group-hover/step:shadow-lg group-hover/step:shadow-amber-500/50"
                            style={{ width: `${100 - (index * 15)}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inner border glow */}
            <div className="absolute inset-0 rounded-3xl shadow-[0px_2px_0px_0px_inset_rgba(255,255,255,0.03)] group-hover:shadow-[0px_2px_0px_0px_inset_rgba(251,191,36,0.1)] pointer-events-none transition-shadow duration-500" />
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative bg-gradient-to-br from-black via-zinc-950 to-black border-2 border-amber-500/40 rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl shadow-black/60 text-center overflow-hidden group">
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          {/* Outer glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/0 via-amber-500/30 to-amber-500/0 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 -z-10" />
          
          <div className="relative">
            <h3 className="text-amber-200 group-hover:text-amber-100 text-sm sm:text-base md:text-lg lg:text-xl font-['Inter:Semi_Bold',sans-serif] font-semibold mb-2 sm:mb-3 tracking-tight transition-colors duration-300">
              Ready to transform your vision into reality?
            </h3>
            
            <p className="text-gray-300 group-hover:text-gray-200 text-[10px] sm:text-xs md:text-sm font-['Inter:Medium',sans-serif] font-medium mb-4 sm:mb-6 max-w-2xl mx-auto transition-colors duration-300">
              Blending robust code with intuitive pixel-perfect solutions that are going to be problem solving.
            </p>
            
            <button className="px-6 sm:px-8 md:px-10 py-2 sm:py-2.5 md:py-3 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-black rounded-xl text-[10px] sm:text-xs md:text-sm font-['Rough_Motion:Regular',sans-serif] uppercase tracking-wider shadow-lg shadow-amber-500/50 hover:shadow-amber-500/70 hover:scale-105 transition-all duration-300">
              book a free consultation
            </button>
          </div>

          {/* Inner border glow */}
          <div className="absolute inset-0 rounded-3xl shadow-[0px_2px_0px_0px_inset_rgba(255,255,255,0.03)] group-hover:shadow-[0px_2px_0px_0px_inset_rgba(251,191,36,0.1)] pointer-events-none transition-shadow duration-500" />
        </div>

        {/* Download CV moved to My Story section */}
      </div>
    </section>
  );
}