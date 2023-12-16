import { links } from "./data";
import { experiencesData } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type ExperienceData = (typeof experiencesData)[number];
