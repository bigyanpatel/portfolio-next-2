"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./Section-Heading";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div className="mb-3">
        <p>
          Graduating with a degree in{" "}
          <span className="font-medium">Mechanical Engineering</span>, my
          journey into the realm of programming began during my academic years.
          It was during this time that I discovered a profound interest in
          frontend development, particularly in React. I embarked on crafting
          numerous fully functional and dynamic applications, honing my skills
          and fostering a deep passion for coding. Subsequently, I secured a
          role as a frontend developer, gradually delving into backend
          technologies, evolving into a proficient{" "}
          <span className="font-medium">full-stack developer</span>
          proficient in the MERN stack (MongoDB, Express.js, React, Node.js).
        </p>
      </div>

      <div>
        <p>
          Presently, I am on a captivating journey exploring the intricacies of
          animations and intensively focusing on enhancing my expertise in{" "}
          <span className="font-medium">TypeScript</span>. This pursuit aligns
          with my ongoing commitment to continuous learning and refining my
          skills in the ever-evolving landscape of programming.
        </p>
      </div>
    </motion.section>
  );
}
