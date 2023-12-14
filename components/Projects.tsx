"use client";

import React from "react";
import { projectsData } from "@/lib/data";
import SectionHeading from "./Section-Heading";
import Project from "./Project";

export default function Projects() {

  return (
    <section id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}