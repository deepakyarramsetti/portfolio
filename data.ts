
import { SkillCategory, ExperienceItem, ProjectItem, EducationItem } from './types';
import resumePdf from './Resume.pdf';

export const PERSONAL_INFO = {
  name: "Deepak Yarramsetti",
  role: "Java Full Stack Developer",
  tagline: "Building scalable, user-centric web solutions with modern architectures and clean code.",
  email: "deepakyarramsetti88@gmail.com",
  phone: "+91 8897959445",
  linkedin: "https://www.linkedin.com/in/deepak-yarramsetti-a25202243",
  github: "https://github.com/deepakyarramsetti",
  location: "India",
  resumeLink: resumePdf
};

export const SKILLS: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [{ name: "React" }, { name: "Angular" }, { name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" }, { name: "TypeScript" }, { name: "Tailwind CSS" }, { name: "Bootstrap" }]
  },
  {
    title: "Backend",
    skills: [{ name: "Java" }, { name: "Spring Boot" }, { name: "Spring Framework" }, { name: "RESTful APIs" }, { name: "Postman" }]
  },
  {
    title: "Database",
    skills: [{ name: "SQL" }, { name: "MySQL" }, { name: "PostgreSQL" }]
  },
  {
    title: "Tools & Others",
    skills: [{ name: "Git" }, { name: "GitHub" }, { name: "VS Code" }, { name: "IntelliJ IDEA" }, { name: "SDLC" }]
  }, {
    title: "Cloud (AWS)",
    skills: [
      { name: "AWS EC2" }, { name: "AWS S3" }, { name: "AWS IAM" }
    ]
  },
  {
    title: "DevOps & Practices",
    skills: [
      { name: "Docker (Basic)" }, { name: "SDLC" }, { name: "REST API Design" }
    ]
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Java Full Stack Developer",
    company: "Krishnamurthy Software Solution",
    period: "September 2024 – Present",
    description: [
      "Contributing to both front-end and back-end development for multiple enterprise-grade web applications.",
      "Designed and implemented user-friendly, responsive UIs using Angular and TypeScript.",
      "Developed and maintained RESTful APIs and server-side logic using Java and Spring Framework.",
      "Built scalable, secure backend systems integrated with relational databases (PostgreSQL)."
    ],
    technologies: ["Java", "Spring Boot", "Angular", "TypeScript", "PostgreSQL", "Git"]
  },
  {
    role: "Java Full Stack Intern",
    company: "Autoliv India Pvt. Ltd",
    period: "February 2024 – August 2024",
    description: [
      "Worked in the GTSC Engineering department focusing on full stack development tasks.",
      "Contributed to frontend and backend development, API integrations, and database management.",
      "Ensured timely project deliveries with high code quality and effective teamwork.",
      "Gained hands-on experience in the professional software development lifecycle."
    ],
    technologies: ["Java", "Spring", "React", "Angular", "SQL", "JavaScript"]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "Gatnix Timesheet",
    description: "An AI-powered time tracking platform designed to optimize productivity and streamline work hours management for large teams. Includes approval workflows and custom reporting.",
    technologies: ["Java", "Spring Boot", "Angular", "SQL", "AI Integration"],
    link: "https://gatnix.timesheet.com",
    image: "https://picsum.photos/seed/gatnix/800/600"
  },
  {
    title: "Pioneer Coders",
    description: "An interview platform featuring job creation, automated scheduling, and AI-generated transcripts. Integrates Razorpay for seamless payment processing.",
    technologies: ["Angular", "Java", "Spring Framework", "PostgreSQL", "Razorpay"],
    link: "https://pioneercodershiringhub.com",
    image: "https://picsum.photos/seed/pioneer/800/600"
  }
];

export const EDUCATION: EducationItem[] = [
  {
    course: "B. Tech (Mechanical Engineering)",
    institution: "Gudlavalleru Engineering College",
    year: "2024",
    grade: "7.70 CGPA"
  },
  {
    course: "Class XII",
    institution: "Tirumala Junior Kalasala",
    year: "2020",
    grade: "9.11 %"
  },
  {
    course: "Class X",
    institution: "S.P.H.H.M High School",
    year: "2018",
    grade: "9.5 GPA"
  }
];
