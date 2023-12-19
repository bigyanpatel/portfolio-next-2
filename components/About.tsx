"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./Section-Heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div className="mb-3">
        <p>
          Hi there! I started my journey into the world of programming during my
          academic years. What kick-started as a curious exploration eventually
          led me to dive deep into frontend development, especially with React.
          I&apos;ve crafted a bunch of cool and dynamic applications, refining my
          skills and developing a genuine passion for coding.
          <br />
          <br />
          Gradually, I transitioned from a frontend developer to a full-stack
          enthusiast, exploring the intricacies of the MERN stack (MongoDB,
          Express.js, React, Node.js). When I&apos;m not coding, you might find me
          spending time with my family or trying to squeeze in some gaming
          sessions when time permits (although that&apos;s a rarity these days!).
        </p>
      </div>

      <div>
        <p>
          Currently, I&apos;m enthusiastically exploring the fascinating world of
          animations and diving deeper into mastering TypeScript. This aligns
          perfectly with my commitment to continuous learning and staying
          up-to-date in the ever-evolving programming landscape.
        </p>
      </div>
    </motion.section>
  );
}
