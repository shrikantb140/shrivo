// Centralized portfolio configuration
// DO NOT invent URLs — replace placeholders with real values when available

export const siteConfig = {
  name: "Shrikant Bhojane",
  role: "Frontend Developer",
  tagline: "Building digital experiences that move from frontend to full-stack.",
  shortTagline: "FROM FRONTEND TO FULL-STACK.",
  status: "Fresher + Freelancer",
  focus: "Frontend / Web Development",
  goal: "Full-Stack Developer",
  location: "Pune, India",
  // Configurable URLs — replace with real values
  resumeUrl: "#", // e.g. "/resume.pdf" or external URL
  email: "hello@shrikantbhojane.dev", // placeholder — replace with real
  phone: "+91 00000 00000", // placeholder — replace with real
  social: {
    github: "https://github.com/", // placeholder
    linkedin: "https://linkedin.com/in/", // placeholder
    instagram: "https://instagram.com/", // placeholder
    twitter: "https://x.com/", // placeholder - X / Twitter
  },
} as const;

export const education = {
  degree: "Computer Science",
  university: "Savitribai Phule Pune University",
  year: "2026",
  status: "Pursuing — Expected 2026",
} as const;

export const navigationLinks = [
  { label: "WORK", href: "#work" },
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "SERVICES", href: "#services" },
  { label: "CONTACT", href: "#contact" },
] as const;

export type SkillCategory = {
  title: string;
  label: string;
  skills: string[];
  variant: "core" | "learning";
};

export const skillGroups: SkillCategory[] = [
  {
    title: "Frontend",
    label: "CURRENT CORE SKILLS",
    variant: "core",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
  {
    title: "Backend / Full Stack",
    label: "FULL-STACK / LEARNING",
    variant: "learning",
    skills: ["Node.js", "Express.js", "REST APIs", "MongoDB", "SQL"],
  },
  {
    title: "Tools",
    label: "CURRENT CORE SKILLS",
    variant: "core",
    skills: ["Git", "GitHub", "VS Code"],
  },
  {
    title: "Additional",
    label: "CURRENT CORE SKILLS",
    variant: "core",
    skills: ["UI/UX Fundamentals", "API Integration", "Component-Based Development"],
  },
];

export type Project = {
  number: string;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  image: string; // placeholder gradient or image path
  githubUrl: string; // placeholder — replace with real
  liveUrl: string; // placeholder — replace with real
  featured?: boolean;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Modern Business Website",
    description:
      "A responsive business website focused on strong visual hierarchy, responsive layouts and modern frontend interactions.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "BUSINESS / CORPORATE",
    image: "https://i.ibb.co/nM9Rg9Ty/asta.png",
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
  },
  {
    number: "02",
    title: "E-Commerce Experience",
    description:
      "A modern ecommerce interface with product discovery, filtering, responsive layouts and interactive UI.",
    technologies: ["React", "Tailwind CSS", "REST APIs"],
    category: "E-COMMERCE / UI",
    image: "https://i.ibb.co/zVWpLhG3/auramarket.png",
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
  },
  {
    number: "03",
    title: "Developer Dashboard",
    description:
      "A responsive dashboard interface demonstrating reusable components, data visualization and structured application architecture.",
    technologies: ["Next.js", "TypeScript", "MongoDB"],
    category: "DASHBOARD / APP",
    image: "https://i.ibb.co/B73T1Zm/image.png",
    githubUrl: "#",
    liveUrl: "#",
    featured: false,
  },
];

export type Service = {
  number: string;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    number: "01",
    title: "Web Development",
    description:
      "End-to-end website builds with modern tooling, performance-first and responsive by default.",
  },
  {
    number: "02",
    title: "Frontend Development",
    description:
      "Pixel-precise interfaces with React & Next.js — interactive, accessible, and maintainable.",
  },
  {
    number: "03",
    title: "Responsive Websites",
    description:
      "Fluid layouts that work beautifully from 320px to 1920px without compromise.",
  },
  {
    number: "04",
    title: "Landing Pages",
    description:
      "High-conversion landing pages with kinetic typography and editorial hierarchy.",
  },
  {
    number: "05",
    title: "Portfolio & Business Websites",
    description:
      "Distinctive sites that position you as premium — not another template.",
  },
];

export const marqueeTech = [
  "REACT",
  "NEXT.JS",
  "TYPESCRIPT",
  "JAVASCRIPT",
  "TAILWIND",
  "NODE.JS",
  "GITHUB",
  "WEB DEVELOPMENT",
  "RESPONSIVE DESIGN",
  "REST APIS",
  "MONGODB",
  "EXPRESS.JS",
];

export const marqueePhilosophy = [
  "BUILD",
  "DESIGN",
  "DEVELOP",
  "LEARN",
  "ITERATE",
  "SHIP",
  "CRAFT",
  "REFINE",
];
