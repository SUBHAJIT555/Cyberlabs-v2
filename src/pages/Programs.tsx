// import { Link } from "react-router";
import CourseCard from "../components/CourseCardCatagories1";
// import HowPrograms from "../components/HowPrograms";
// import Testimonials from "../components/Testimonial";
// import CallToAction from "../components/CallToAction";
import Certification from "../components/LevelUp";
import PerformanceTranscript from "@/components/PerformanceTranscript";
import ProgramPageOpening from "@/components/ProgramPageOpening";
import IndustryRecognition from "@/components/IndustryRecognition";
import ProgramHero from "@/components/ProgramHero";

const Programs = () => {
  return (
    <div>
      <ProgramHero />
      <ProgramPageOpening />
      <CourseCard />
      <Certification />
      <PerformanceTranscript />

      <IndustryRecognition />
      {/* <HowPrograms /> */}
      {/* <Testimonials /> */}
      {/* <CallToAction /> */}
    </div>
  );
};

export default Programs;
