import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";
import { useInViewOnce } from "../hooks/useInViewOnce.tsx";
import { parseBoldText } from "@/lib/utils";

const FacultyHero = () => {
    const { ref, visible } = useInViewOnce();
    const featuresRef = useRef(null);
    const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });

    // Animated SVG: shield-lock (Operational, Not Academic)
    const AnimatedShieldLockIcon = ({ isInView }: { isInView: boolean }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-10 h-10 sm:w-12 sm:h-12 text-primary shrink-0 p-1"
        >
            <motion.path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M11 11a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 1, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M12 12l0 2.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 1.4, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    // Animated SVG: tools (Builders of Real Cyber Capability)
    const AnimatedToolsIcon = ({ isInView }: { isInView: boolean }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-10 h-10 sm:w-12 sm:h-12 text-primary shrink-0 p-1"
        >
            <motion.path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M14.5 5.5l4 4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 1, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M12 8l-5 -5l-4 4l5 5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.6, delay: 1.4, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M7 8l-1.5 1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M16 12l5 5l-4 4l-5 -5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.6, delay: 2.3, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M16 17l-1.5 1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 2.9, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    // Animated SVG: target-arrow (Accountable for Outcomes)
    const AnimatedTargetArrowIcon = ({ isInView }: { isInView: boolean }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-10 h-10 sm:w-12 sm:h-12 text-primary shrink-0 p-1"
        >
            <motion.path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M12 7a5 5 0 1 0 5 5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.5, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M13 3.055a9 9 0 1 0 7.941 7.945"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.8, delay: 1.1, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M15 6v3h3l3 -3h-3v-3l-3 3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.6, delay: 1.9, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M15 9l-3 3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 2.5, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    const items = [
        {
            title: "**Operational, Not Academic**",
            body: "Instructors actively involved in cyber defense, investigations, and enterprise security operations.",
            Icon: AnimatedShieldLockIcon,
        },
        {
            title: "**Builders of Real Cyber Capability**",
            body: "Leaders who have designed training frameworks, cyber units, SOCs, and national-level programs.",
            Icon: AnimatedToolsIcon,
        },
        {
            title: "**Accountable for Outcomes**",
            body: "Focused on decision-making, execution, and real-world readiness - not slide-based instruction.",
            Icon: AnimatedTargetArrowIcon,
        },
    ];

    return (
        <section
            ref={ref}
            className="relative min-h-screen w-full overflow-x-hidden overflow-y-auto bg-white"
        >
            {/* Dashed grid background (fade at top) - same as AboutHero */}
            <div
                className="absolute inset-0 z-0 bg-white pointer-events-none"
                style={{
                    backgroundImage: `
            linear-gradient(to right, #e2e8f0 1px, transparent 1px),
            linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
          `,
                    backgroundSize: "1px 1px",
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
            radial-gradient(ellipse 80% 100% at 50% 0%, #000 35%, transparent 75%)
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
            radial-gradient(ellipse 80% 100% at 50% 0%, #000 35%, transparent 75%)
          `,
                    maskComposite: "intersect",
                    WebkitMaskComposite: "source-in",
                }}
            />

            {/* Content */}
            {/*  py-8 sm:py-12 md:py-8 lg:py-10 */}
            <div
                className={`
          relative z-10 flex items-start md:items-center justify-center min-h-0 md:min-h-screen px-3 sm:px-6 md:px-8 lg:px-12 pt-16 sm:pt-20 md:pt-16 
          transition-all duration-700 ease-out
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        `}
            >
                <div className="w-full max-w-7xl">
                    {/* Heading */}
                    <div className="text-center mb-2 sm:mb-3 md:mb-5 overflow-x-hidden">
                        <h2 className="text-lg xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl font-inter-display mb-1 sm:mb-2 tracking-tight leading-tight font-bold text-text-primary">
                            Built by Those Who Defend the Digital World
                        </h2>
                    </div>

                    {/* Tagline */}
                    <div className="text-center mb-4 sm:mb-6 md:mb-8 overflow-x-hidden">
                        <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-montserrat font-bold text-text-primary">
                            Not Trainers. Not Theorists. Practitioners.
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="max-w-7xl mx-auto space-y-3 sm:space-y-4 md:space-y-5 mb-6 sm:mb-8 md:mb-8 pb-8 sm:pb-12 md:pb-0">
                        {/* First Paragraph */}
                        <p
                            className="text-xs xs:text-sm sm:text-lg md:text-lg lg:text-xl font-montserrat font-medium leading-relaxed text-text-primary text-center"
                            style={{ textShadow: "0 2px 22px #fff, 0 1px 4px #fff, 0 0px 0px #fff" }}
                        >
                            {parseBoldText("CYBERLABS is led and taught by professionals who have **defended real systems**, **handled live incidents**, and **led cyber operations** - not classroom-only instructors.")}
                        </p>

                        {/* Second Paragraph */}
                        <p
                            className="text-xs xs:text-sm sm:text-lg md:text-lg lg:text-xl font-montserrat font-medium leading-relaxed text-text-primary text-center"
                            style={{ textShadow: "0 2px 22px #fff, 0 1px 4px #fff, 0 0px 0px #fff" }}
                        >
                            {parseBoldText("We teach cybersecurity the way it is practiced: with **accountability**, **judgment**, and **real-world pressure**.")}
                        </p>

                        {/* Horizontal Separator */}
                        {/* <div className=" my-4 sm:my-6 md:my-8"></div> */}

                        {/* Feature Cards */}
                        <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 pb-4 sm:pb-6 md:pb-0">
                            {items.map((item, index) => {
                                const IconComponent = item.Icon;
                                return (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        initial="hidden"
                                        animate={featuresInView ? "visible" : "hidden"}
                                        className=" rounded-md p-4 sm:p-6 md:p-8 group"
                                    // style={{
                                    //     background:
                                    //         "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                                    // }}
                                    >
                                        <div className="flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
                                            <div className="border border-neutral-200 rounded-xl ring ring-neutral-300 ring-offset-2 md:ring-offset-4 bg-neutral-100">
                                                <IconComponent isInView={featuresInView} />
                                            </div>
                                        </div>

                                        <h4 className="text-center text-sm xs:text-base sm:text-lg md:text-xl font-inter-display text-primary font-medium leading-tight tracking-tight mb-2 sm:mb-3 md:mb-4  gap-2 sm:gap-3">
                                            {/* <span className="bg-background shadow-md rounded-md p-1.5 sm:p-2 rotate-12 group-hover:rotate-0 transition-all duration-300">
                                                
                                            </span> */}
                                            <span>{parseBoldText(item.title)}</span>
                                        </h4>
                                        <p
                                            className="text-xs xs:text-sm sm:text-base  font-montserrat font-medium text-text-primary  text-center"
                                            style={{ textShadow: "0 2px 22px #fff, 0 1px 4px #fff, 0 0px 0px #fff" }}
                                        >
                                            {item.body}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Horizontal Separator */}
                        <div className="pb-6 sm:pb-8 md:pb-10"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FacultyHero;
