/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMemo } from "react";
import { courses } from "../constants/programData";
import type {
  Bus,
  Course,
  Hero,
  WhatsNew,
  ModuleChartItem,
  CareerChartItem,
  ProgramTeaches,
  ProgramDeepDive,
} from "@/interface/program";

type CleanedCourse = Omit<
  Course,
  "hero" | "whatsNew" | "syllabus" | "syllabusLink"
>;

const stripCourse = (course: Course): CleanedCourse => {
  const { hero, whatsNew, syllabus, syllabusLink, ...rest } = course;
  return rest;
};

type UseCoursesReturn = {
  getCourses: () => CleanedCourse[];
  getCourseHeroBySlug: (slug: string) => Hero | undefined;
  getCourseWhatsNewBySlug: (slug: string) => WhatsNew | undefined;
  getCourseSyllabusBySlug: (slug: string) => Bus[] | undefined;
  getCourseSyllabusLinkBySlug: (slug: string) => string | undefined;
  getCourseModuleChartBySlug: (slug: string) => ModuleChartItem[] | undefined;
  getCourseCareerChartBySlug: (slug: string) => CareerChartItem[] | undefined;
  getCourseProgramTeachesBySlug: (slug: string) => ProgramTeaches | undefined;
  getCourseProgramDeepDiveBySlug: (slug: string) => ProgramDeepDive | undefined;
};

export const useCourses = (): UseCoursesReturn => {
  const getCourses = () => courses.map(stripCourse);

  const getCourseHeroBySlug = (slug: string) => {
    const course = courses.find((course) => course.slug === slug);
    if (!course) return undefined;
    return {
      ...course.hero,
      subheading: course.subheading,
    };
  };

  const getCourseWhatsNewBySlug = (slug: string) =>
    courses.find((course) => course.slug === slug)?.whatsNew;

  const getCourseSyllabusBySlug = (slug: string) =>
    courses.find((course) => course.slug === slug)?.syllabus;

  const getCourseSyllabusLinkBySlug = (slug: string) =>
    courses.find((course) => course.slug === slug)?.syllabusLink;

  const getCourseModuleChartBySlug = (slug: string) =>
    courses.find((course) => course.slug === slug)?.moduleChart;

  const getCourseCareerChartBySlug = (slug: string) =>
    courses.find((course) => course.slug === slug)?.careerChart;

  const getCourseProgramTeachesBySlug = (slug: string) =>
    courses.find((course) => course.slug === slug)?.programTeaches;

  const getCourseProgramDeepDiveBySlug = (slug: string) =>
    courses.find((course) => course.slug === slug)?.programDeepDive;

  return useMemo<UseCoursesReturn>(
    () => ({
      getCourses,
      getCourseHeroBySlug,
      getCourseWhatsNewBySlug,
      getCourseSyllabusBySlug,
      getCourseSyllabusLinkBySlug,
      getCourseModuleChartBySlug,
      getCourseCareerChartBySlug,
      getCourseProgramTeachesBySlug,
      getCourseProgramDeepDiveBySlug,
    }),
    []
  );
};
