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
    <>
      {/* Fixed full-viewport dashed grid background (same as About) */}
      <div
        className="fixed inset-0 h-screen w-full z-0 bg-white pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e2e8f0 1px, transparent 1px),
            linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
          `,
          backgroundSize: "5px 5px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
          `,
          WebkitMaskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
          `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />
      <div className="relative z-10">
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
    </>
  );
};

export default Programs;
