import { Code2, Palette, Globe, Smartphone, Layers, Lightbulb, type LucideIcon } from "lucide-react";

export interface Service {
  id: number;
  title: string;
  description: string;
  growth: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  { 
    id: 1, 
    title: "UI/UX DESIGN", 
    description: "Human‑centered interfaces that are clean and accessible.", 
    growth: "+80%",
    icon: Palette 
  },
  { 
    id: 2, 
    title: "FRONTEND DEV", 
    description: "Fast, responsive, and robust frontend experiences.", 
    growth: "+90%",
    icon: Code2 
  },
  { 
    id: 3, 
    title: "FULL-STACK DEV", 
    description: "End‑to‑end delivery—from database to UI.", 
    growth: "+95%",
    icon: Layers 
  },
  { 
    id: 4, 
    title: "WEB DESIGN", 
    description: "Modern layouts tailored to your brand.", 
    growth: "+90%",
    icon: Globe 
  },
  { 
    id: 5, 
    title: "MOBILE DEV", 
    description: "Cross‑platform apps with a native feel.", 
    growth: "+75%",
    icon: Smartphone 
  },
  { 
    id: 6, 
    title: "CONSULTING", 
    description: "Technical guidance and delivery strategy.", 
    growth: "+90%",
    icon: Lightbulb 
  },
];

// Process steps for services section
export const processSteps = ["Discovery & Research", "Design & Prototyping", "Development & Testing", "Launch & Support"];
