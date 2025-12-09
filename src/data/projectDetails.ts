// Centralized, per-project details for the Project Details Dialog
// Only additional detail fields live here to avoid duplicating base project data in projects.ts

export interface ProjectDetail {
  // Drives the circular progress visualization and label
  completionRate: number; // 0-100
  // Steps shown in the timeline for the project
  processSteps: string[];
  // Small gallery for the "KEY FEATURES" section grid
  designImages: string[];
  // Image used in the "Technological Architecture" card
  architectureImage: string;
  // Text shown in the "Measurable Impact" description
  impactSummary: string;
  // Bullet-style impact metrics rendered with icon + text
  impactMetrics: { label: string; value: string }[];
  // Technology stack description paragraph
  techStackDescription: string;
  // Live preview URL (optional)
  livePreviewUrl?: string;
}

// Default steps used when a project does not override processSteps
export const defaultProcessSteps = [
  "Discovery",
  "Design",
  "Implementation",
  "Testing",
  "Deployment",
  "Maintenance",
];

// Per-project details map, keyed by the Project.id from projects.ts
export const projectDetailsById: Record<number, ProjectDetail> = {
  1: {
    completionRate: 92,
    processSteps: defaultProcessSteps,
    designImages: [
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551817958-20204e4980b6?q=80&w=1080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576765608633-5f54b4f3a9c8?q=80&w=1080&auto=format&fit=crop",
    ],
    architectureImage:
      "https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=1080&auto=format&fit=crop",
    impactSummary:
      "Streamlined clinical operations with secure, role-based workflows, reducing queue time and improving data accuracy across departments.",
    impactMetrics: [
      { label: "Admin efficiency", value: "+38%" },
      { label: "Average queue time", value: "-32%" },
      { label: "Data entry errors", value: "-45%" },
    ],
    techStackDescription:
      "This comprehensive healthcare platform leverages Laravel's robust backend architecture with TypeScript for type-safe client interactions and MySQL for reliable data persistence, ensuring HIPAA-compliant data handling and seamless multi-role workflows.",
    livePreviewUrl: "https://zelalemclinic.com/",
  },
  2: {
    completionRate: 95,
    processSteps: defaultProcessSteps,
    designImages: [
      "https://images.unsplash.com/photo-1515168833906-d2a3b82b302a?q=80&w=1080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=1080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517245423759-5a4aa7f3a5a4?q=80&w=1080&auto=format&fit=crop",
    ],
    architectureImage:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1080&auto=format&fit=crop",
    impactSummary:
      "Streamlined university grant proposal submissions and reviews with a secure, role-based management system.",
    impactMetrics: [
      { label: "Submission time", value: "-40%" },
      { label: "Review speed", value: "+30%" },
      { label: "Paper usage", value: "-95%" },
    ],
    techStackDescription:
      "Built on Laravel and React with MySQL and Docker, this Research Grant Management System (RGMS) provides secure authentication, role-based access control, and automated workflows for efficient grant administration.",
    livePreviewUrl: "https://rgms-aastu.vercel.app/",
  },
  3: {
    completionRate: 88,
    processSteps: defaultProcessSteps,
    designImages: [
      "https://images.unsplash.com/photo-1522199670076-2852f80289c7?q=80&w=1080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1080&auto=format&fit=crop",
    ],
    architectureImage:
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1080&auto=format&fit=crop",
    impactSummary:
      "Unified event management improved visibility and reduced manual coordination for organizers.",
    impactMetrics: [
      { label: "Admin productivity", value: "+26%" },
      { label: "Manual tasks", value: "-40%" },
      { label: "Dashboard latency", value: "-33%" },
    ],
    techStackDescription:
      "Powered by Node.js and Next.js with Tailwind CSS, EventEase delivers a performant, server-side rendered interface with real-time updates and optimized UI components for seamless event coordination.",
    livePreviewUrl: "https://eventeaser.vercel.app/",
  },
  4: {
    completionRate: 90,
    processSteps: defaultProcessSteps,
    designImages: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531496740158-3394e7a6003b?q=80&w=1080&auto=format&fit=crop",
    ],
    architectureImage:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1080&auto=format&fit=crop",
    impactSummary:
      "Built a robust B2C/B2B flow with improved catalog performance and secure auth.",
    impactMetrics: [
      { label: "Search-to-cart", value: "+18%" },
      { label: "Admin task time", value: "-30%" },
      { label: "Error rate", value: "-41%" },
    ],
    techStackDescription:
      "This enterprise e-commerce platform combines Laravel's powerful backend with React's dynamic frontend, utilizing MySQL, TailwindCSS, and Docker for a modern, containerized architecture that scales with business growth.",
    livePreviewUrl: "http://admin.dabaseimpex.com/",
  },
  5: {
    completionRate: 70,
    processSteps: defaultProcessSteps,
    designImages: [
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1080&auto=format&fit=crop",
    ],
    architectureImage:
      "https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=1080&auto=format&fit=crop",
    impactSummary:
      "Automated local network file printing with minimal setup, reducing manual steps for users.",
    impactMetrics: [
      { label: "Setup time", value: "-60%" },
      { label: "Print success rate", value: "+22%" },
    ],
    techStackDescription:
      "Developed in Python leveraging socket programming and networking protocols, PrintDrop provides cross-platform automation with minimal dependencies for seamless local file sharing and printing.",
    livePreviewUrl: "https://github.com/ebenezermerd/PrintDrop",
  },
  6: {
    completionRate: 85,
    processSteps: defaultProcessSteps,
    designImages: [
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1080&auto=format&fit=crop",
    ],
    architectureImage:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1080&auto=format&fit=crop",
    impactSummary:
      "AI-driven routing and allocation improved transport reliability and reduced operating costs.",
    impactMetrics: [
      { label: "On-time arrivals", value: "+25%" },
      { label: "Fuel costs", value: "-15%" },
    ],
    techStackDescription:
      "Utilizing Python with AI/ML frameworks and RAG (Retrieval-Augmented Generation), this intelligent transport system integrates real-time data APIs to optimize routes and resource allocation across Ethiopia's transport sector.",
    livePreviewUrl: "https://github.com/ebenezermerd/AIModelForTransportManagement.git",
  },
  7: {
    completionRate: 80,
    processSteps: defaultProcessSteps,
    designImages: [
      "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558885544-2a481c1b07df?q=80&w=1080&auto=format&fit=crop",
    ],
    architectureImage:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1080&auto=format&fit=crop",
    impactSummary:
      "Improved campus navigation and event discovery with real-time updates and push notifications.",
    impactMetrics: [
      { label: "App engagement", value: "+34%" },
      { label: "Support queries", value: "-20%" },
    ],
    techStackDescription:
      "Built with Flutter and Firebase using Dart, this cross-platform mobile app delivers native performance with real-time cloud synchronization, push notifications, and interactive mapping for comprehensive campus services.",
    livePreviewUrl: "https://github.com/ebenezermerd/CampusLocatorAASTU.git",
  },
  8: {
    completionRate: 86,
    processSteps: defaultProcessSteps,
    designImages: [
      "https://images.unsplash.com/photo-1558478551-1a378f63328e?q=80&w=1080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522071901873-411886a10004?q=80&w=1080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1080&auto=format&fit=crop",
    ],
    architectureImage:
      "https://images.unsplash.com/photo-1532619675605-1ede6f3d11c7?q=80&w=1080&auto=format&fit=crop",
    impactSummary:
      "Enabled secure inter-hospital coordination with better appointment throughput and messaging.",
    impactMetrics: [
      { label: "Referral turnaround", value: "-29%" },
      { label: "Appointment throughput", value: "+18%" },
    ],
    techStackDescription:
      "Developed with PHP, HTML, CSS, JavaScript, and MySQL, this full-stack healthcare solution ensures secure medical record management and seamless inter-hospital communication with industry-standard encryption.",
    livePreviewUrl: "https://github.com/ebenezermerd/InterHospitalAndReferralService.git",
  },
  9: {
    completionRate: 78,
    processSteps: defaultProcessSteps,
    designImages: [
      "https://images.unsplash.com/photo-1517430816045-df4b7de1cd0d?q=80&w=1080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505685296765-3a2736de412f?q=80&w=1080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1080&auto=format&fit=crop",
    ],
    architectureImage:
      "https://images.unsplash.com/photo-1512427691650-1f6a2b36cfa3?q=80&w=1080&auto=format&fit=crop",
    impactSummary:
      "Reduced manual scheduling and improved visibility for stylists and customers alike.",
    impactMetrics: [
      { label: "No-show rate", value: "-17%" },
      { label: "Booking time", value: "-36%" },
    ],
    techStackDescription:
      "Built on Flask and Python with SQLite and modern HTML/CSS, this lightweight management system delivers an intuitive interface for salon appointment booking and service management with minimal overhead.",
    livePreviewUrl: "https://braids-and-beyond.onrender.com/",
  },
};

// Shared CTA label used in the dialog
export const dialogCTA = "book a free consultation";

