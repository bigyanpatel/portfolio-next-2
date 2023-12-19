"use client";

import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./Section-Heading";
import VerticalTimelineComponent from "./VerticalTimelineComponent";
import Link from "next/link";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.2);

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <div className="text-center text-lg mb-4">
        <h2 className="text-2xl font-bold text-blue-400">
          Full Stack Developer -{" "}
          <Link
            href="https://learnduke.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-blue-600 transition duration-300"
          >
            Learnduke
          </Link>
        </h2>
        <p className="text-sm text-gray-500 italic">
          (Remote, Jan 2023 - Present)
        </p>
      </div>

      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineComponent item={item} />
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
