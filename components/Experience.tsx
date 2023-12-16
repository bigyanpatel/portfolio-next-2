"use client";

import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./Section-Heading";
import VerticalTimelineComponent from "./VerticalTimelineComponent";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.2);

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
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
