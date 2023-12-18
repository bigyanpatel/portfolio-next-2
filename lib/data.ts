import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import simplykart from "@/public/simplykart.png";
import simplytube from "@/public/simplytube.png";
import simplyui from "@/public/Simplyui.png";

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
    title: "SimplyKart",
    description:
      "An e-commerce platform for books with category-based shopping, wishlist, kart, address checkout, and coupon functionality. Integrated Razorpay for payments.",
    tags: ["React", "Tailwind", "Razorpay", "Redux"],
    imageUrl: simplykart,
  },
  {
    title: "SimplyTube",
    description:
      "A video streaming platform offering book summaries. Allows users to create playlists, save videos, like content, and watch videos on dedicated pages.",
    tags: ["React", "Tailwind", "Redux"],
    imageUrl: simplytube,
  },
  {
    title: "SimplyUI",
    description:
      "A custom component library providing fundamental components essential for kickstarting web app development, complete with code snippets.",
    tags: ["HTML", "CSS"],
    imageUrl: simplyui,
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