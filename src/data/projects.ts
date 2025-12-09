import { projectImages } from "./projectImages";

export interface Project {
  id: number;
  image: string;
  title: string;
  description: string;
  techStack: string;
  category: string;
  period: string;
  features: string[];
  gallery?: string[];
}

export const featuredProjects: Project[] = [
  {
    id: 1,
    image: projectImages.clinic[0],
    title: "Clinic Management System",
    description: "Comprehensive health management platform supporting multiple user roles with secure data handling.",
    techStack: "Laravel, TypeScript, MySQL",
    category: "Full-Stack",
    period: "06/2024 – 01/2025",
    features: [
      "Role-based modules (admin, doctor, nurse, pharmacist, patient)",
      "Secure data handling and authentication",
      "Smooth system navigation and user management"
    ],
    gallery: projectImages.clinic,
  },
  {
    id: 4,
    image: projectImages.ecommerce[1],
    title: "Ethiopian E-commerce System",
    description: "Multi-role e-commerce platform with complete admin portal and seamless user experience.",
    techStack: "Laravel, React, MySQL, Docker",
    category: "Full-Stack",
    period: "01/2023 – 02/2024",
    features: [
      "Complete client-side and admin portal",
      "Scalable APIs and secure authentication",
      "Product and order management systems"
    ],
    gallery: projectImages.ecommerce,
  },
  {
    id: 3,
    image: projectImages.eventease[2],
    title: "EventEase",
    description: "Centralized event management platform with real-time dashboard and CRUD functionality.",
    techStack: "Node.js, Next.js, Tailwind CSS",
    category: "Full-Stack",
    period: "11/2024 – 01/2025",
    features: [
      "Full CRUD functionality for event management",
      "Real-time dashboard for administrators",
      "Optimized performance and UI consistency"
    ],
    gallery: projectImages.eventease,
  },
];

export const curatedWorks: Project[] = [
  {
    id: 1,
    image: projectImages.clinic[0],
    title: "CLINIC MANAGEMENT SYSTEM",
    description: "Comprehensive health management platform supporting multiple user roles",
    techStack: "Laravel, TypeScript, MySQL",
    category: "Full-Stack",
    period: "06/2024 – 01/2025",
    features: [
      "Role-based modules (admin, doctor, nurse, pharmacist, patient)",
      "Secure data handling and authentication",
      "Smooth system navigation and user management"
    ],
    gallery: projectImages.clinic,
  },
  {
    id: 2,
    image: projectImages.rgms[0],
    title: "RESEARCH GRANT MANAGEMENT SYSTEM",
    description: "Platform for streamlining university grant proposal submissions and reviews",
    techStack: "Laravel, React, MySQL, Docker",
    category: "Full-Stack",
    period: "12/2023 – 05/2024",
    features: [
      "JWT authentication and email notifications",
      "Role-based access control for reviewers",
      "Time-limited proposal access workflows"
    ],
    gallery: projectImages.rgms,
  },
  {
    id: 3,
    image: projectImages.eventease[2],
    title: "EVENTEASE",
    description: "Centralized platform for managing events, participants, and schedules",
    techStack: "Node.js, Next.js, Tailwind CSS",
    category: "Full-Stack",
    period: "11/2024 – 01/2025",
    features: [
      "Full CRUD functionality for event management",
      "Real-time dashboard for administrators",
      "Optimized performance and UI consistency"
    ],
    gallery: projectImages.eventease,
  },
  {
    id: 4,
    image: projectImages.ecommerce[1],
    title: "ETHIOPIAN E-COMMERCE SYSTEM",
    description: "Multi-role e-commerce platform serving suppliers, admins, and clients",
    techStack: "Laravel, React, MySQL, TailwindCSS, Docker",
    category: "Full-Stack",
    period: "01/2023 – 02/2024",
    features: [
      "Complete client-side and admin portal",
      "Scalable APIs and secure authentication",
      "Product and order management systems"
    ],
    gallery: projectImages.ecommerce,
  },
  {
    id: 5,
    image: projectImages.printdrop[2],
    title: "PRINTDROP",
    description: "Python-based file printing automation tool for cross-platform device sharing",
    techStack: "Python, Sockets, Networking",
    category: "Automation",
    period: "09/2025 – Present",
    features: [
      "Networked device file sharing and printing",
      "Minimal configuration setup",
      "Cross-platform automation support"
    ],
    gallery: projectImages.printdrop,
  },
  {
    id: 6,
    image: projectImages.aitransport[3],
    title: "AI TRANSPORT MANAGEMENT",
    description: "AI-optimized system leveraging RAG for Ethiopian transport sector",
    techStack: "Python, AI/ML, RAG, Data APIs",
    category: "AI/ML",
    period: "05/2024 – 08/2024",
    features: [
      "Route optimization algorithms",
      "Weather-based travel recommendations",
      "AI-driven resource allocation insights"
    ],
    gallery: projectImages.aitransport,
  },
  {
    id: 7,
    image: projectImages.campuslocator[3],
    title: "CAMPUS LOCATOR FOR AASTU",
    description: "Flutter mobile app for university campus navigation and services",
    techStack: "Flutter, Firebase, Dart",
    category: "Mobile",
    period: "05/2023 – 08/2023",
    features: [
      "Interactive campus mapping",
      "Event creation and push notifications",
      "Service discovery for staff and students"
    ],
    gallery: projectImages.campuslocator,
  },
  {
    id: 8,
    image: projectImages.ihcrs[0],
    title: "IHCRS",
    description: "Inter-Hospital Communication & Referral System for healthcare management",
    techStack: "PHP, HTML, CSS, JavaScript, MySQL",
    category: "Full-Stack",
    period: "06/2023 – 08/2023",
    features: [
      "Appointment scheduling system",
      "Medical record management",
      "Secure inter-hospital messaging"
    ],
    gallery: projectImages.ihcrs,
  },
  {
    id: 9,
    image: projectImages.hairsalon[0],
    title: "HAIR SALON MANAGEMENT",
    description: "Flask-based salon management for appointments and services",
    techStack: "Flask, Python, SQLite, HTML/CSS",
    category: "Full-Stack",
    period: "09/2024 – 10/2024",
    features: [
      "Customer appointment booking",
      "Stylist and service management",
      "Intuitive staff dashboard"
    ],
    gallery: projectImages.hairsalon,
  },
];

// Export all projects combined for any use case
export const allProjects: Project[] = [...curatedWorks];

// Export filter categories
export const projectCategories = ["All Projects", "UI/UX Design", "Full-Stack", "Automation", "AI/ML", "Mobile"];

