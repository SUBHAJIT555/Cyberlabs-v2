import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import CallbackModal from "./CallbackModal";
import CTAButton from "./ui/CTAButton";
import { useCourses } from "@/hooks/useCourses";
import type { Course } from "@/interface/program";
import { parseBoldText } from "@/lib/utils";

const dashedGridCardStyle = {
    backgroundImage: `
        linear-gradient(to right, #e7e5e4 1px, transparent 1px),
        linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
    `,
    backgroundSize: "10px 10px",
    backgroundPosition: "0 0, 0 0",
    maskImage: `
        repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
        repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
        radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
    `,
    WebkitMaskImage: `
        repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
        repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
        radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
    `,
    maskComposite: "intersect" as const,
    WebkitMaskComposite: "source-in" as const,
};




// Animated clock icon for duration badge (circle + hands) – same style as AboutWhy
const AnimatedClockIcon = ({ isInView }: { isInView: boolean }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary shrink-0"
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
            d="M12 2a10 10 0 0 1 10 10 10 10 0 0 1 -10 10 10 10 0 0 1 -10 -10 10 10 0 0 1 10 -10z"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
        />
        <motion.path
            d="M12 6v6l4 2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            transition={{ duration: 0.25, delay: 0.6, repeat: Infinity, repeatDelay: 3 }}
        />
    </svg>
);

const CourseCardCategories1 = () => {
    const [showFloatingButton, setShowFloatingButton] = useState(false);
    const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);
    const coursesSectionRef = useRef<HTMLDivElement>(null);
    const cardsGridRef = useRef<HTMLDivElement>(null);
    const cardsInView = useInView(cardsGridRef, { once: false, margin: "-80px" });
    const { getCourses } = useCourses();
    const allCourses = getCourses() as unknown as Course[];

    // Handle scroll to show/hide floating callback button
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const sectionElement = coursesSectionRef.current;
            if (!sectionElement) return;

            const sectionTop = sectionElement.offsetTop;
            const sectionBottom = sectionTop + sectionElement.offsetHeight;
            const viewportHeight = window.innerHeight;

            if (
                currentScrollY > sectionTop + 150 &&
                currentScrollY < sectionBottom - viewportHeight &&
                currentScrollY > 100
            ) {
                setShowFloatingButton(true);
            } else {
                setShowFloatingButton(false);
            }
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    return (
        <div ref={coursesSectionRef} className="min-h-screen pt-6 md:pt-10 px-5 md:px-10 lg:px-16" id="courses">
            <div className="w-full">
                {/* Header Section */}
                <div className="mb-10 md:mb-14">
                    <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-text-primary font-montserrat font-semibold leading-tight tracking-tight">
                        Flagship Programs
                    </h2>
                </div>

                {/* Course Cards - Horizontal Layout */}
                <div id="our-programs">
                    <div ref={cardsGridRef} className="space-y-8 md:space-y-10 mb-16">
                        {allCourses.map((course, index) => (
                            <motion.div
                                key={course.id}
                                className="group"
                                initial={{ opacity: 0, y: 36 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.15 }}
                                transition={{
                                    duration: 0.65,
                                    ease: [0.22, 1, 0.36, 1],
                                    delay: index * 0.12,
                                }}
                            >
                                <div className="relative rounded-xl border border-neutral-200 bg-white overflow-hidden ring ring-neutral-200 ring-offset-4 md:ring-offset-8 hover:border-primary/20 transition-all duration-300">
                                    <div className="absolute inset-0 z-0 pointer-events-none" style={dashedGridCardStyle} />
                                    {/* Accent bar on hover */}
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 rounded-l-xl" />

                                    <div className="relative z-10 flex flex-col md:flex-row min-h-0">
                                        {/* Left - Image */}
                                        <div className="relative w-full md:w-[40%] lg:w-[38%] h-52 sm:h-64 md:h-auto md:min-h-[300px] overflow-hidden shrink-0">
                                            <img
                                                src={course.image}
                                                alt={course.title}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-linear-to-t md:bg-linear-to-r from-black/30 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>

                                        {/* Right - Content */}
                                        <div className="flex-1 p-5 sm:p-6 md:p-6 lg:p-8 flex flex-col justify-between min-w-0">
                                            <div>
                                                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-text-primary font-montserrat font-semibold leading-tight mb-2 md:mb-3">
                                                    {course.title}
                                                </h3>

                                                {course.programTagLine && (
                                                    <p className="text-base sm:text-lg md:text-xl text-primary font-inter-display font-semibold mb-4">
                                                        {course.programTagLine}
                                                    </p>
                                                )}

                                                {/* Duration badge */}
                                                <div className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white ring ring-neutral-200 ring-offset-2 md:ring-offset-4 backdrop-blur-sm px-3.5 py-2 mb-5 shadow-sm">
                                                    <AnimatedClockIcon isInView={cardsInView} />
                                                    <span className="text-text-primary text-sm md:text-base font-inter-display font-medium">
                                                        Duration:{" "}
                                                        <span className="text-primary font-semibold">
                                                            {course.duration}
                                                        </span>
                                                    </span>
                                                </div>

                                                {/* Description */}
                                                <div className="space-y-2.5 mb-6">
                                                    {course.descriptionParagraphs?.length ? (
                                                        course.descriptionParagraphs.map((para, i) => (
                                                            <p
                                                                key={i}
                                                                className="text-sm sm:text-base md:text-lg text-text-primary/85 font-inter-display font-medium leading-relaxed"
                                                            >
                                                                {parseBoldText(para)}
                                                            </p>
                                                        ))
                                                    ) : (
                                                        <p className="text-sm sm:text-base md:text-lg text-text-primary/85 font-inter-display font-medium leading-relaxed">
                                                            {course.description}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>

                                            {/* CTA */}
                                            <div className="mt-auto pt-4 border-t border-neutral-200/80">
                                                <CTAButton
                                                    to={`/cyber-defense-programs/${course.slug}`}
                                                    label="View Program Details"
                                                    variant="light"
                                                    className="shrink-0 w-fit font-inter-display font-semibold ring ring-neutral-300 ring-offset-2 md:ring-offset-4"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Coming Soon Cards - Horizontal Layout */}
                        {/* {Array.from({ length: Math.max(0, 4 - allCourses.length) }).map(
                            (_, index) => (
                                <motion.div
                                    key={`coming-soon-${index}`}
                                    className={`${index === 0 ? "flex" : "hidden md:flex"}`}
                                    variants={itemVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    <div
                                        className="bg-white border border-neutral-300 border-dashed rounded-md overflow-hidden transition-all duration-300 cursor-pointer w-full"
                                        onClick={() => setIsCallbackModalOpen(true)}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter" || e.key === " ") {
                                                setIsCallbackModalOpen(true);
                                            }
                                        }}
                                        style={{
                                            background:
                                                "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                                        }}
                                    >
                                
                                        <div className="flex flex-col md:flex-row">
                                        
                                            <div className="relative w-full md:w-[35%] h-64 md:h-auto overflow-hidden bg-neutral-100 border-r-0 md:border-r border-b md:border-b-0 border-neutral-300 border-dashed flex items-center justify-center">
                                                <TypewriterEffect />
                                            </div>

                                     
                                            <div className="flex-1 p-6 md:p-8 lg:p-10 flex flex-col justify-between">
                              
                                                <div className="mb-4">
                                                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-text-primary font-montserrat font-semibold leading-tight mb-3">
                                                        Coming Soon
                                                    </h3>
                                                </div>

                                   
                                                <div className="mb-4">
                                                    <p className="text-base sm:text-lg md:text-xl text-text-primary/80 font-inter-display font-medium">
                                                        New program launching soon
                                                    </p>
                                                </div>

                                                <div className="flex items-center gap-2 mb-4">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="20"
                                                        height="20"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="text-primary"
                                                    >
                                                        <circle cx="12" cy="12" r="10" />
                                                        <polyline points="12 6 12 12 16 14" />
                                                    </svg>
                                                    <span className="text-text-primary/60 text-sm md:text-base font-inter-display font-medium">
                                                        Duration: TBA
                                                    </span>
                                                </div>

                                    
                                                <div className="mb-6">
                                                    <p className="text-sm sm:text-base md:text-lg text-text-primary/60 font-inter-display font-medium leading-relaxed">
                                                        We're working on exciting new programs. Stay tuned for updates!
                                                    </p>
                                                </div>

                                    
                                                <div className="flex justify-end mt-auto">
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            setIsCallbackModalOpen(true);
                                                        }}
                                                        className="bg-white hover:bg-neutral-50 text-text-primary px-6 py-2.5 md:px-8 md:py-3 rounded-md transition-all duration-300 font-montserrat font-semibold text-sm md:text-base cursor-pointer border border-neutral-300 border-dashed"
                                                        style={{
                                                            background:
                                                                "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                                                        }}
                                                    >
                                                        Coming Soon
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        )} */}
                    </div>
                </div>
            </div>

            {/* Floating Action Button - Appears when scrolling */}
            <AnimatePresence>
                {showFloatingButton && (
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
                    >
                        <button
                            onClick={() => setIsCallbackModalOpen(true)}
                            className="bg-neutral-600 hover:bg-neutral-800 text-background px-6 sm:px-8 md:px-10 py-2 sm:py-2.5 shadow-lg font-montserrat font-medium tracking-tight text-sm sm:text-base md:text-base transition-all duration-300 text-center whitespace-nowrap rounded-md cursor-pointer ring ring-neutral-300 ring-offset-2 md:ring-offset-4"
                        >
                            Request Callback
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Callback Modal */}
            <CallbackModal
                isOpen={isCallbackModalOpen}
                onClose={() => setIsCallbackModalOpen(false)}
            />
        </div>
    );
};

export default CourseCardCategories1;
