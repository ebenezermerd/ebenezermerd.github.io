import { Mail, Linkedin, Github, Twitter, type LucideIcon } from "lucide-react";

export interface SocialLink {
  id: number;
  name: string;
  icon: LucideIcon;
  url: string;
}

export interface QuickLink {
  id: number;
  name: string;
  href: string;
}

export interface FooterInfo {
  email: string;
  availabilityText: string;
  hireMeButtonText: string;
  copyrightName: string;
}

export const socialLinks: SocialLink[] = [
  { id: 1, name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/ebenezer-merdekiyos-a81519213" },
  { id: 2, name: "GitHub", icon: Github, url: "https://github.com/ebenezermerd" },
  { id: 3, name: "Twitter", icon: Twitter, url: "https://twitter.com/ebenezermerd" },
  { id: 4, name: "Email", icon: Mail, url: "mailto:ebenezermerd@gmail.com" },
];

export const quickLinks: QuickLink[] = [
  { id: 1, name: "Home", href: "#hero" },
  { id: 2, name: "Curated Works", href: "#works" },
  { id: 3, name: "About Me", href: "#about" },
  { id: 4, name: "Services", href: "#services" },
  { id: 5, name: "Contact", href: "#contact" },
];

export const footerInfo: FooterInfo = {
  email: "ebenezermerd@gmail.com",
  availabilityText: "Available for freelance opportunities and collaborations.",
  hireMeButtonText: "Hire Me",
  copyrightName: "Abenezer Merdekios",
};
