import { NavItem, Skill, Project, Experience, Education, Service, Testimonial, SocialLink } from '../types';

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export const skills: Skill[] = [
  { id: 1, name: 'HTML5', icon: 'html', level: 95 },
  { id: 2, name: 'CSS3', icon: 'css', level: 90 },
  { id: 3, name: 'JavaScript', icon: 'javascript', level: 85 },
  { id: 4, name: 'TypeScript', icon: 'typescript', level: 80 },
  { id: 5, name: 'React', icon: 'react', level: 90 },
  { id: 6, name: 'Node.js', icon: 'nodejs', level: 75 },
  { id: 7, name: 'MongoDB', icon: 'mongodb', level: 70 },
  { id: 8, name: 'Git', icon: 'git', level: 85 },
  { id: 9, name: 'Tailwind CSS', icon: 'tailwind', level: 90 },
  { id: 10, name: 'Next.js', icon: 'nextjs', level: 80 },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product management, cart functionality, and payment integration.',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    demoLink: 'https://example.com',
    codeLink: 'https://github.com',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team collaboration features.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1039&q=80',
    tags: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
    demoLink: 'https://example.com',
    codeLink: 'https://github.com',
  },
  {
    id: 3,
    title: 'AI Content Generator',
    description: 'An AI-powered content generation tool that helps create blog posts, social media content, and more.',
    image: 'https://images.unsplash.com/photo-1677442135136-760c813028c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80',
    tags: ['Next.js', 'OpenAI API', 'TypeScript', 'Tailwind CSS'],
    demoLink: 'https://example.com',
    codeLink: 'https://github.com',
  },
  {
    id: 4,
    title: 'Fitness Tracking App',
    description: 'A comprehensive fitness tracking application with workout plans, progress tracking, and nutrition guidance.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    tags: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
    demoLink: 'https://example.com',
    codeLink: 'https://github.com',
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    role: 'Senior Frontend Developer',
    company: 'Tech Innovations Inc.',
    duration: 'Jan 2022 - Present',
    description: [
      'Led a team of 5 developers in building a complex SaaS platform',
      'Implemented modern React architecture with TypeScript and Redux',
      'Improved application performance by 40% through code optimization',
      'Mentored junior developers and conducted code reviews',
    ],
  },
  {
    id: 2,
    role: 'Frontend Developer',
    company: 'Digital Solutions Ltd.',
    duration: 'Mar 2020 - Dec 2021',
    description: [
      'Developed responsive web applications using React and Next.js',
      'Collaborated with designers to implement pixel-perfect UI components',
      'Integrated RESTful APIs and implemented state management',
      'Participated in agile development processes and sprint planning',
    ],
  },
  {
    id: 3,
    role: 'Web Developer Intern',
    company: 'StartUp Ventures',
    duration: 'Jun 2019 - Feb 2020',
    description: [
      'Assisted in developing and maintaining company websites',
      'Learned modern JavaScript frameworks and best practices',
      'Participated in UI/UX design discussions',
      'Gained experience with version control and collaborative development',
    ],
  },
];

export const education: Education[] = [
  {
    id: 1,
    degree: 'Master of Computer Science',
    institution: 'Tech University',
    duration: '2018 - 2020',
    description: 'Specialized in Web Technologies and Software Engineering with a focus on modern application development.',
  },
  {
    id: 2,
    degree: 'Bachelor of Computer Science',
    institution: 'State University',
    duration: '2014 - 2018',
    description: 'Graduated with honors. Coursework included Data Structures, Algorithms, Database Systems, and Web Development.',
  },
];

export const services: Service[] = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Building modern, responsive websites and web applications using the latest technologies and best practices.',
    icon: 'code',
  },
  {
    id: 2,
    title: 'UI/UX Design',
    description: 'Creating intuitive and engaging user interfaces with a focus on user experience and accessibility.',
    icon: 'palette',
  },
  {
    id: 3,
    title: 'Mobile App Development',
    description: 'Developing cross-platform mobile applications that work seamlessly on iOS and Android devices.',
    icon: 'smartphone',
  },
  {
    id: 4,
    title: 'Technical Consultation',
    description: 'Providing expert advice on technology stack selection, architecture design, and development best practices.',
    icon: 'lightbulb',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'Digital Innovations',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    testimonial: 'Working with this developer was an absolute pleasure. They delivered our project on time and exceeded our expectations in terms of quality and functionality.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Product Manager',
    company: 'Tech Solutions',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    testimonial: 'Their technical expertise and problem-solving skills are outstanding. They quickly understood our requirements and delivered a solution that perfectly met our needs.',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    company: 'Brand Elevate',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
    testimonial: 'The website they built for our company has significantly improved our online presence and user engagement. Their attention to detail and design sensibility are impressive.',
  },
];

export const socialLinks: SocialLink[] = [
  {
    id: 1,
    platform: 'GitHub',
    url: 'https://github.com',
    icon: 'github',
  },
  {
    id: 2,
    platform: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: 'linkedin',
  },
  {
    id: 3,
    platform: 'Twitter',
    url: 'https://twitter.com',
    icon: 'twitter',
  },
  {
    id: 4,
    platform: 'Instagram',
    url: 'https://instagram.com',
    icon: 'instagram',
  },
];