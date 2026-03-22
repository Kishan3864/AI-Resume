export interface ResumeTemplate {
  id: string;
  name: string;
  slug: string;
  category: 'classic' | 'modern' | 'creative' | 'industry' | 'premium-ultra' | 'premium-elite';
  thumbnail: string;
  description: string;
  isPremium: boolean;
  tags: string[];
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    text: string;
    background: string;
  };
  layout: 'single-column' | 'two-column' | 'sidebar-left' | 'sidebar-right' | 'asymmetric';
  features: string[];
  atsScore: number;
  popularity: number;
}

export interface ResumeData {
  personalInfo: {
    fullName: string;
    jobTitle: string;
    email: string;
    phone: string;
    location: string;
    website?: string;
    linkedin?: string;
    github?: string;
    photo?: string;
    summary: string;
  };
  experience: WorkExperience[];
  education: Education[];
  skills: Skill[];
  certifications?: Certification[];
  projects?: Project[];
  languages?: Language[];
  awards?: Award[];
  publications?: Publication[];
  volunteering?: Volunteering[];
  references?: Reference[];
  customSections?: CustomSection[];
}

export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string | 'Present';
  description: string;
  bullets: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  honors?: string[];
}

export interface Skill {
  id: string;
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  category: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  url?: string;
  github?: string;
}

export interface Language {
  id: string;
  name: string;
  proficiency: 'basic' | 'conversational' | 'proficient' | 'fluent' | 'native';
}

export interface Award {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description?: string;
}

export interface Publication {
  id: string;
  title: string;
  publisher: string;
  date: string;
  url?: string;
}

export interface Volunteering {
  id: string;
  organization: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Reference {
  id: string;
  name: string;
  title: string;
  company: string;
  email?: string;
  phone?: string;
}

export interface CustomSection {
  id: string;
  title: string;
  items: { id: string; content: string }[];
}
