// Edit this file to update your portfolio content.
// Replace every "#" link and placeholder with your real details.

import profilePhoto from "@/assets/image/profile.jpeg";

export const profile = {
  name: "Md Rehman Arifin",
  shortName: "Rehman",
  title: "CSE Student | Aspiring Software Developer",
  intro:
    "I enjoy programming, solving problems, and understanding how data structures shape efficient software. I'm building my foundation one project at a time.",
  photo: profilePhoto,
};

export const about = [
  "I'm a Computer Science and Engineering student at Daffodil International University, building my foundation in programming and software development.",
  "I enjoy solving problems, learning data structures, and building practical projects to improve my technical skills.",
];

export const education = [
  {
    institution: "Daffodil International University",
    degree: "Bachelor of Science in Computer Science and Engineering (B.Sc. in CSE)",
    status: "Currently Studying",
  },
];

export const skillGroups = [
  { category: "Programming", skills: ["C Programming"] },
  { category: "Computer Science Fundamentals", skills: ["Data Structures", "Problem Solving"] },
  { category: "Web Development", skills: ["HTML", "CSS", "JavaScript"] },
  { category: "Tools and Platforms", skills: ["Git", "GitHub", "VS Code"] },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  image?: string; // add a screenshot URL to replace the placeholder
  github?: string; // leave empty until you have a real link
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "Gaming Library Management System",
    description:
      "A command-line project focused on organizing a gaming library and managing collections using data structures.",
    tech: ["C", "Data Structures"],
    github: "",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A personal website showcasing my profile, education, skills, and software development projects.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    github: "",
    demo: "",
  },
];

export const contact = {
  email: "", // e.g. "you@example.com"
  github: "", // e.g. "https://github.com/username"
  linkedin: "", // e.g. "https://linkedin.com/in/username"
};
