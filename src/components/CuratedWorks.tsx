import { Rocket } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import { motion } from "motion/react";
import ProjectDetailsDialog from "./ProjectDetailsDialog";
import { curatedWorks, projectCategories, type Project } from "../data/projects";

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  const [isFlipping, setIsFlipping] = useState(false);

  const handleClick = () => {
    setIsFlipping(true);
    setTimeout(() => {
      onClick();
      setIsFlipping(false);
    }, 600);
  };

  return (
    <motion.div
      animate={isFlipping ? { rotateY: 180 } : { rotateY: 0 }}
      transition={{ duration: 0.6 }}
      style={{ transformStyle: "preserve-3d" }}
      onClick={handleClick}
      className="cursor-pointer"
    >
      <div 
        className="group relative bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-4 sm:p-5 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/20 hover:border-amber-500/50"
        style={{
          boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.5), 0px 0px 1px rgba(255, 255, 255, 0.1) inset",
          backfaceVisibility: "hidden",
        }}
      >
        {/* Floating glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
        
        {/* Card content */}
        <div className="relative">
          {/* Image container */}
          <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-3 sm:mb-4 shadow-lg">
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Image overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Project info */}
          <div className="flex items-start gap-2 sm:gap-3">
            {/* Rocket icon */}
            <div className="mt-0.5 p-1.5 sm:p-2 bg-gradient-to-br from-amber-500/20 to-yellow-600/20 rounded-lg border border-amber-500/30 group-hover:border-amber-400/60 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-amber-500/30">
              <Rocket className="w-3 h-3 sm:w-4 sm:h-4 text-amber-300 group-hover:text-amber-200 transition-colors duration-300" />
            </div>

            {/* Text content */}
            <div className="flex-1 min-w-0">
              <h3 className="text-[10px] sm:text-xs text-amber-200 group-hover:text-amber-100 transition-colors duration-300 mb-1 uppercase tracking-wider">
                {project.title}
              </h3>
              <p className="text-[10px] sm:text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {project.description}{" "}
                <span className="text-amber-400 group-hover:text-amber-300 font-semibold">
                  {project.techStack}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Inner border glow */}
        <div className="absolute inset-0 rounded-2xl shadow-[0px_1px_0px_0px_inset_rgba(255,255,255,0.05)] pointer-events-none group-hover:shadow-[0px_1px_0px_0px_inset_rgba(251,191,36,0.2)] transition-shadow duration-500" />
      </div>
    </motion.div>
  );
}

export default function CuratedWorks() {
  const [activeFilter, setActiveFilter] = useState<string>("All Projects");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const filters = ["All Projects", "UI/UX Design", "Full-Stack", "Automation", "AI/ML", "Mobile"];

  const filteredProjects = activeFilter === "All Projects" 
    ? curatedWorks 
    : curatedWorks.filter(project => project.category === activeFilter);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setDialogOpen(true);
  };

  return (
    <section id="works" className="bg-black py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-8 sm:mb-10 md:mb-12 text-left">
          {/* Title */}
          <h2 
            className="bg-clip-text bg-gradient-to-r from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0)] text-[rgba(0,0,0,0)] text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight lg:tracking-[-1.2px] font-['Inter:Semi_Bold',sans-serif] font-semibold uppercase leading-tight mb-2"
            style={{ 
              WebkitTextFillColor: "transparent", 
              backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 788 72\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(39.4 3.6 -39.4 3.6 394 36)\\'><stop stop-color=\\'rgba(59,59,59,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(78,78,78,1)\\' offset=\\'0.031525\\'/><stop stop-color=\\'rgba(98,97,97,1)\\' offset=\\'0.06305\\'/><stop stop-color=\\'rgba(136,135,135,1)\\' offset=\\'0.1261\\'/><stop stop-color=\\'rgba(166,165,165,1)\\' offset=\\'0.21958\\'/><stop stop-color=\\'rgba(196,195,195,1)\\' offset=\\'0.31305\\'/><stop stop-color=\\'rgba(255,255,255,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(196,195,195,1)\\' offset=\\'0.65\\'/><stop stop-color=\\'rgba(166,165,165,1)\\' offset=\\'0.725\\'/><stop stop-color=\\'rgba(136,135,135,1)\\' offset=\\'0.8\\'/><stop stop-color=\\'rgba(98,97,97,1)\\' offset=\\'0.9\\'/><stop stop-color=\\'rgba(78,78,78,1)\\' offset=\\'0.95\\'/><stop stop-color=\\'rgba(59,59,59,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" 
            }}
          >
            CURATED WORKS
          </h2>
          
          {/* Subtitle */}
          <p className="text-amber-100 text-xs sm:text-sm md:text-base font-['Inter:Medium',sans-serif] font-medium mb-6 sm:mb-8">
            Blending robust code with intuitive pixel-perfect solutions
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap gap-2 sm:gap-3 items-center">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 rounded-xl text-[10px] sm:text-xs font-['Inter:Semi_Bold',sans-serif] font-semibold uppercase tracking-wide transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-black shadow-lg shadow-amber-500/50 scale-105"
                    : "bg-transparent text-amber-200 border border-amber-500/50 hover:border-amber-400 hover:bg-amber-500/10 hover:scale-105"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={() => handleProjectClick(project)} 
            />
          ))}
        </div>
      </div>

      {/* Project Details Dialog */}
      <ProjectDetailsDialog 
        project={selectedProject} 
        open={dialogOpen} 
        onOpenChange={setDialogOpen} 
      />
    </section>
  );
}