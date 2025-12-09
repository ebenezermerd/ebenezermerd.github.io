export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { id: "works", label: "Projects", href: "#works" },
  { id: "services", label: "Services", href: "#services" },
  { id: "about", label: "About Me", href: "#about" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export const brandName = "EBENEZER";