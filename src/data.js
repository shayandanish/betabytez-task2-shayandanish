// src/data.js

export const profile = {
  name: "Shayan Danish",
  tagline: "Full-Stack Developer | Blockchain Enthusiast",
  
};

export const about = {
  background: `I am a dedicated software engineer having experience in developing
    scalable web applications, deploying CI/CD pipelines and automating
    processes using automation scripts. Completed Bachelor of Science in
    Computer Science from Quaid-i-Azam University, Islamabad (Sep 2022 – July 2026).`,
  certifications: [
    "Programming with JavaScript (Meta)",
    "Front-End Development (Meta)",
    "React.js Development (Meta)",
    "Back-End with Node.js & Express (IBM)",
    "Blockchain Basics",
  ],
};

export const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "React", level: 70 },
  { name: "MongoDB", level: 65 },
];

export const projects = [
  {
    id: "aips-library",
    title: "AIPS Library Management",
    description:
      "Built and deployed a Library Management System. Helps users easily find and manage books efficiently.",
    tags: ["HTML/CSS", "JavaScript", "EJS"],
    category: "Web",
    liveUrl: "https://aips-library.vercel.app/",
  },
  {
    id: "harvest-bridge",
    title: "Harvest Bridge",
    description:
      "A marketplace web application connecting investors, landowners, and farmers in a seamless ecosystem.",
    tags: ["Marketplace", "Web App"],
    category: "Web",
    liveUrl: "https://harvest-bridge-system.vercel.app/",
  },
  {
    id: "karakoram-store",
    title: "Karakoram Store",
    description:
      "E-commerce store bringing premium quality products from the Northern Areas to customers everywhere.",
    tags: ["E-Commerce", "Admin Panel"],
    category: "Web",
    liveUrl: "https://karakoramstore.vercel.app/",
  },
];
