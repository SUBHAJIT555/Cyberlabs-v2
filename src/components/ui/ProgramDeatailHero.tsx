import { useCourses } from "@/hooks/useCourses";
// import type { Detail } from "@/interface/program";
import { useParams } from "react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import EnrollmentModal from "../EnrollmentModal";
import { parseBoldText } from "@/lib/utils";

const CourseHero = () => {
  const { slug } = useParams();
  const [isEnrollmentModalOpen, setIsEnrollmentModalOpen] = useState(false);
  const { getCourseHeroBySlug, getCourses } = useCourses();
  const data = getCourseHeroBySlug(slug as string);
  const courses = getCourses();
  const course = courses.find((c) => c.slug === slug);

  // const renderDetail = (detail: Detail, index: number) => (
  //   <div
  //     key={index}
  //     className="relative flex flex-col items-start justify-center border border-dashed border-neutral-300 px-4 py-2 md:py-2 w-full bg-white overflow-hidden"
  //     style={{ background: "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white", }}
  //   >
  //     <p className="relative z-10 text-neutral-500 text-sm md:text-base lg:text-lg font-inter-display font-medium">
  //       {detail.label}: <span className="text-primary font-medium">{detail.value}</span>
  //     </p>
  //   </div>
  // );

  return (
    <div className="w-full min-h-[80vh] flex items-center pt-16 pb-12 md:pt-20 md:pb-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      {/* Grid: mobile = title → image → body. lg = left col (title + body), right col (image) */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 lg:items-stretch">
        {/* 1. Title + subheading - first on mobile, top-left on lg */}
        <div className="min-w-0 lg:col-start-1 lg:row-start-1 flex flex-col justify-start">
          <div className="space-y-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] text-text-primary font-montserrat font-bold tracking-tight">
              {course?.title || data?.title}
            </h1>
            {course?.programTagLine && (
              <p className="text-primary text-lg md:text-xl font-inter-display font-semibold">
                {course.programTagLine}
              </p>
            )}
          </div>
        </div>

        {/* 2. Image - second on mobile (after title block), right column on lg */}
        <div className="min-w-0 flex items-center lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:items-stretch">
          <div className="w-full  overflow-hidden bg-neutral-50/80 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] aspect-4/3 lg:aspect-auto lg:min-h-[380px]">
            <img
              src={data?.image.src}
              alt={data?.image.alt ?? course?.title ?? "Program"}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 3. Description + duration + CTAs - third on mobile, bottom-left on lg */}
        <div className="min-w-0 lg:col-start-1 lg:row-start-2 flex flex-col justify-center">
          {course && (
            <div className="space-y-4">
              {course.descriptionParagraphs?.length ? (
                course.descriptionParagraphs.map((para, i) => (
                  <p
                    key={i}
                    className="font-inter-display text-base md:text-lg text-text-primary/90 leading-relaxed"
                  >
                    {parseBoldText(para)}
                  </p>
                ))
              ) : (
                <p className="font-inter-display text-base md:text-lg text-text-primary/90 leading-relaxed">
                  {course.description}
                </p>
              )}
            </div>
          )}

          <div className="mt-8 lg:mt-10 space-y-5">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-text-primary text-base md:text-lg font-inter-display font-semibold"
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary shrink-0"
              >
                <motion.path
                  stroke="none"
                  d="M0 0h24v24H0z"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.3, delay: 0 }}
                />
                <motion.path
                  d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 1,
                    delay: 0.2,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                />
                <motion.path
                  d="M12 7v5l3 3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 1.2,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                />
              </motion.svg>
              Duration: <span className="text-primary">{course?.duration}</span>
            </motion.p>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setIsEnrollmentModalOpen(true)}
                className="bg-text-primary hover:bg-primary text-background px-6 py-2.5 md:px-8 md:py-3 rounded-md font-montserrat font-semibold text-base md:text-lg transition-colors cursor-pointer"
              >
                Enroll Now
              </button>
              <button
                onClick={() => {
                  const syllabusElement = document.getElementById("explained-module");
                  if (syllabusElement) {
                    syllabusElement.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
                className="border border-neutral-300 border-dashed hover:border-neutral-400 hover:bg-neutral-50 text-text-primary px-6 py-2.5 md:px-8 md:py-3 rounded-md font-montserrat font-medium text-base md:text-lg transition-colors cursor-pointer hover:text-shadow-lg"
                style={{
                  background:
                    "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                }}
              >
                View Module
              </button>
            </div>
          </div>
        </div>
      </div>

      {slug && (
        <EnrollmentModal
          isOpen={isEnrollmentModalOpen}
          onClose={() => setIsEnrollmentModalOpen(false)}
          slug={slug}
        />
      )}
    </div>
  );
};

export default CourseHero;
