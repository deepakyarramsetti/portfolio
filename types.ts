
export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  image: string;
}

export interface EducationItem {
  course: string;
  institution: string;
  year: string;
  grade: string;
}
