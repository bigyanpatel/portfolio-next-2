import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Full Stack Developer",
    location: "Remote",
    description:
      "After graduating got my first job here as a Frontend Developer. Started exploring backend and then there is no going back and eventually bacame Full stack developer handling stuffs single handedly.",
    icon: React.createElement(LuGraduationCap),
    date: "January, 2023 -  Current",
  },
  {
    title: "Full Stack Developer",
    location: "Remote",
    description:
      "After graduating got my first job here as a Frontend Developer. Started exploring backend and then there is no going back and eventually bacame Full stack developer handling stuffs single handedly.",
    icon: React.createElement(LuGraduationCap),
    date: "January, 2023 -  Current",
  },{
    title: "Full Stack Developer",
    location: "Remote",
    description:
      "After graduating got my first job here as a Frontend Developer. Started exploring backend and then there is no going back and eventually bacame Full stack developer handling stuffs single handedly.",
    icon: React.createElement(LuGraduationCap),
    date: "January, 2023 -  Current",
  }
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Recoil",
  "Express",
  "Framer Motion",
] as const;