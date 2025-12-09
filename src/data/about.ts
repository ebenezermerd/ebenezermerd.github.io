import { Code2, Palette, Database, Cpu, Cloud, Zap, type LucideIcon } from "lucide-react";

export interface Technology {
  id: number;
  name: string;
  icon: LucideIcon;
}

export interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
  rating: number;
}

export interface AboutInfo {
  name: string;
  role: string;
  yearsExperience: string;
  projectsCount: string;
  designPercentage: number;
  codePercentage: number;
  storyParagraphs: string[];
}

export const aboutInfo: AboutInfo = {
  name: "Abenezer Merdekios",
  role: "Software Engineer",
  yearsExperience: "2+",
  projectsCount: "10+",
  designPercentage: 90,
  codePercentage: 95,
  storyParagraphs: [
    "Developer with over 2 years of experience building real-world applications across teams and organizations. I am passionate about clean architecture, performance optimization, and crafting intuitive user interfaces.",
    "Skilled in full-stack development and dedicated to building scalable, user-centered products through agile collaboration. Quick learner with strong analytical skills and a commitment to delivering maintainable, high-quality solutions."
  ]
};

export const technologies: Technology[] = [
  { id: 1, name: "React", icon: Code2 },
  { id: 2, name: "Next.js", icon: Code2 },
  { id: 3, name: "Laravel", icon: Cpu },
  { id: 4, name: "Node.js", icon: Cpu },
  { id: 5, name: "MongoDB", icon: Database },
  { id: 6, name: "MySQL", icon: Database },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "I collaborated with Abenezer during his internship at AASTU. He consistently met milestones, demonstrated strong ownership, and incorporated feedback effectively—reliable delivery throughout.",
    author: "Mr. Gemechu",
    role: "Senior Developer, AASTU",
    rating: 5,
  },
  {
    id: 2,
    text: "On an Upwork engagement, Abenezer delivered the required landing‑page frontend—pixel‑accurate, performant, and on schedule. Collaboration was smooth and professional.",
    author: "Mr. Amanuel",
    role: "Developer, ChromaWay",
    rating: 5,
  },
  {
    id: 3,
    text: "During his internship with the university IT directorate, Abenezer carried out tasks professionally, communicated clearly, and delivered dependable outcomes.",
    author: "Mr. Adem",
    role: "IT Director, University",
    rating: 5,
  },
  {
    id: 4,
    text: "Abenezer delivered a complete clinic management system tailored to our operations—organized implementation, reliable performance, and intuitive for staff.",
    author: "Dr. Zelalem",
    role: "Client",
    rating: 5,
  },
];
