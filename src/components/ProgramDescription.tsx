import { useParams } from "react-router";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { useCourses } from "@/hooks/useCourses";
import { parseBoldText } from "@/lib/utils";

const ProgramDescription = () => {
    const { slug } = useParams();
    const { getCourses } = useCourses();

    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    const course = getCourses().find((c) => c.slug === slug);

    if (!course) return null;

    return (
        <section
            ref={containerRef}
            className="w-full bg-white text-black py-6 sm:py-8 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20"
        >
            <div className="w-full mx-auto max-w-5xl">
                {/* Main title - large serif, bold, left-aligned */}
                <motion.h1
                    className="font-inter-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black tracking-tight leading-tight mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {course.title}
                </motion.h1>

                {/* Subtitle / tagline - grey highlight, bold italic serif */}
                <motion.p
                    className="font-inter-display text-lg sm:text-xl md:text-2xl font-bold italic text-black bg-neutral-200/70 py-2 px-3 rounded-sm mb-6 sm:mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
                >
                    {course.programTagLine}
                </motion.p>

                {/* Description + What you’ll learn */}
                <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1.2fr)] gap-8 md:gap-10 lg:gap-16">
                    {/* Left: narrative description */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                        className="space-y-5 sm:space-y-6"
                    >
                        {course.descriptionParagraphs?.length ? (
                            course.descriptionParagraphs.map((para, i) => (
                                <p
                                    key={i}
                                    className="font-inter-display text-base sm:text-lg text-black leading-relaxed"
                                >
                                    {parseBoldText(para)}
                                </p>
                            ))
                        ) : (
                            <p className="font-inter-display text-base sm:text-lg text-black leading-relaxed">
                                {course.description}
                            </p>
                        )}
                        <p className="font-inter-display text-sm sm:text-base text-black leading-relaxed pt-2">
                            Ideal for <strong>{course.idealFor}</strong>, and mapped to certifications such as{" "}
                            <strong>{course.certifications.join(", ")}</strong>.
                        </p>
                    </motion.div>

                    {/* Right: key learning bullets */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        className="border border-neutral-300 border-dashed bg-white p-4 sm:p-5 md:p-6 lg:p-7 space-y-3 sm:space-y-4"
                        style={{
                            background:
                                "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                        }}
                    >
                        <h3 className="text-lg sm:text-xl md:text-2xl font-montserrat font-semibold tracking-tight text-text-primary mb-1 sm:mb-2">
                            What you&apos;ll master inside this program.
                        </h3>
                        <ul className="list-none space-y-2 sm:space-y-2.5 md:space-y-3 text-sm sm:text-base md:text-lg font-inter-display font-medium text-text-primary">
                            {course.whatYouLearn.map((item, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <span className="mt-1 text-primary text-sm">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProgramDescription;