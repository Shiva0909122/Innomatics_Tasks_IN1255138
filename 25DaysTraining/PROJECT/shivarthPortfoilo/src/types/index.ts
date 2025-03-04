export interface NavItem {
  id: string;
  label: string;
}

export interface Skill {
  id: number;
  name: string;
  icon: string;
  level: number;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  codeLink: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string[];
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  description: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  testimonial: string;
}

export interface SocialLink {
  id: number;
  platform: string;
  url: string;
  icon: string;
}