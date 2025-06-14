import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import FWI_Pred from "@/public/FWI_Index_Prediction_Cover.png";
import Cyber_Attack from "@/public/Cyber_Attack_Detection_Cover.png";
import MERN_Blog from "@/public/MERN_Personal_Project_Cover.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Machine Learning and MLOps Engineer ",
    location: "Tata Consultancy Services (TCS), Kolkata, India",
    description:
      "Working as a Machine Learning and MLOps Engineer. I am involved in building and deploying machine learning models, implementing MLOps practices, and optimizing model performance. I have experience with AWS services like SageMaker, Lambda, and EC2.",
    icon: React.createElement(CgWorkAlt),
    date: "2025 - Present",
  },
  {
    title: "MTech. Computer Science and Engineering",
    location: "National Institute of Technology (NIT), Jamshededpur, India",
    description:
      "Completed my MTech in Computer Science and Engineering with a focus on Machine Learning and Data Science.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2025",
  },
  {
    title: "React.js Developer",
    location: "Tata Consultancy Services (TCS), Bangalore, India",
    description:
      "Worked as a React.js developer for 2 years. I was involved in building scalable web applications using React, Redux, and TypeScript. Worked on ecommerce projects, implementing responsive designs and optimizing performance.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "BTech. Electronics and Communication Engineering",
    location: "Academy of Technology (MAKAUT), West Bengal, India",
    description:
      "Completed my BTech in Electronics and Communication Engineering with a focus on software development and Embedded Systems.",
    icon: React.createElement(LuGraduationCap),
    date: "2016 - 2020",
  },
] as const;

export const projectsData = [
  {
    title: "Forest FWI Prediction",
    description:
      "A web application that predicts the Forest Fire Weather Index (FWI) using machine learning.",
    tags: ["Scikit-learn", "Flask", "MLFlow", "AWS EBS", "Docker"],
    imageUrl: FWI_Pred,
    codeLink:"https://github.com/Sabarna-dotcom/Algerian_Forest_Fire_Prediction"
  },
  {
    title: "Attack Detection",
    description:
      "A web application that detects cyber attacks using machine learning algorithms.",
    tags: ["Scikit-learn", "Flask", "MLFlow", "AWS EC2", "ETL", "Docker"],
    imageUrl: Cyber_Attack,
    codeLink:"https://github.com/Sabarna-dotcom/Network_Security"
  },
  {
    title: "Personal Portfolio",
    description:
      "A personal portfolio website built with MERN Stack. It showcases my projects, skills, and experience.",
    tags: ["React", "Express", "MongoDB", "Node", "Redux"],
    imageUrl: MERN_Blog,
    codeLink:"https://github.com/Sabarna-dotcom/MERN-Portfolio"
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Git/Github",
  "MongoDB",
  "Redux",
  "Express",
  "MySQL",
  "Python",
  "Linux",
  "Machine Learning",
  "MLOps",
  "AWS",
  "Docker",
  "Flask",
  "C++",
  "Data Structure"
] as const;
