import React from "react";
import { MdDynamicFeed, MdLiveTv } from "react-icons/md";
import simplykart from "@/public/simplykart.png";
import simplytube from "@/public/simplytube.png";
import simplyui from "@/public/Simplyui.png";
import { IoFileTrayFull } from "react-icons/io5";
import { FaQuestion, FaWallet } from "react-icons/fa";
import { IoIosNotificationsOff } from "react-icons/io";
import { RiAdminFill } from "react-icons/ri";
import { AiOutlineDeploymentUnit } from "react-icons/ai";

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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Feed Post Development",
    description:
      "Developed a comprehensive social media feed using MERN stack, featuring likes, comments, shares, and advanced comment systems. Implemented image uploading, optimized performance, and enhanced user engagement.",
    icon: React.createElement(MdDynamicFeed),
  },
  {
    title: "File System Management",
    description:
      "Implemented a Node.js-based file system with structured folder arrangements and optimized image loading for enhanced site speed. Managed metadata efficiently for secure and organized data storage.",
    icon: React.createElement(IoFileTrayFull),
  },
  {
    title: "Q&A and Document Section",
    description:
      "Developed a section for user queries and study resources, providing categorized questions, file sharing, and optimized reading experiences for documents.",
    icon: React.createElement(FaQuestion),
  },
  {
    title: "Articles and Live Session",
    description:
      "Built platforms for articles, live sessions, and teacher-student interactions, implementing features for content creation, categorization, and live communication.",
    icon: React.createElement(MdLiveTv),
  },
  {
    title: "Jitsi Integration and Notifications",
    description:
      "Integrated Jitsi for video conferencing, managed real-time notifications, and facilitated smooth in-app communication.",
    icon: React.createElement(IoIosNotificationsOff),
  },
  {
    title: "Search Functionality and Wallet Management",
    description:
      "Implemented global search, user wallet management, and transaction handling via PhonePe payment gateway.",
    icon: React.createElement(FaWallet),
  },
  {
    title: "Admin Panel and Profile Customization",
    description:
      "Developed multiple dashboards for admin management, merged database fields efficiently, and facilitated user profile customization.",
    icon: React.createElement(RiAdminFill),
  },
  {
    title: "Linux Nginx Deployment",
    description:
      "Deployed projects on Linux Nginx servers via SSH, developed automation scripts, and set up CI/CD pipelines using GitLab for efficient deployment workflows.",
    icon: React.createElement(AiOutlineDeploymentUnit),
  },
] as const;

export const projectsData = [
  {
    title: "SimplyKart",
    description:
      "An e-commerce platform for books with category-based shopping, wishlist, kart, address checkout, and coupon functionality. Integrated Razorpay for payments.",
    tags: ["React", "Tailwind", "Razorpay", "Redux"],
    imageUrl: simplykart,
    source: "https://github.com/bigyanpatel/simply-kart",
    demo: "https://simplykart.netlify.app/",
  },
  {
    title: "SimplyTube",
    description:
      "A video streaming platform offering book summaries. Allows users to create playlists, save videos, like content, and watch videos on dedicated pages.",
    tags: ["React", "Tailwind", "Redux"],
    imageUrl: simplytube,
    demo: "https://simplytube.netlify.app/",
    source: "https://github.com/bigyanpatel/simply-tube",
  },
  {
    title: "SimplyUI",
    description:
      "A custom component library providing fundamental components essential for kickstarting web app development, complete with code snippets.",
    tags: ["HTML", "CSS"],
    imageUrl: simplyui,
    demo: "https://simplyui.netlify.app/",
    source: "https://github.com/bigyanpatel/Simply_UI",
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
