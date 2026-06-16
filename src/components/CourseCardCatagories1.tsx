import { assetSrc } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import CallbackModal from "./CallbackModal";
import EnrollmentModal from "./EnrollmentModal";
import FlagshipProgramCard from "./FlagshipProgramCard";
import { AnimatedHeading } from "./ui/animated-heading";
import { ShinyButton } from "@/components/ui/shiny-button";
import { useFloatingBottomBar } from "@/contexts/FloatingBottomBarContext";
import { flagshipProgramCards } from "@/constants/flagshipProgramData";
import { useCourses } from "@/hooks/useCourses";
import flagshipImage from "@/assets/img/ProgramPageImage/flagshipProgram.svg";

const headingBaseClass =
    "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-inter-display font-semibold tracking-tighter leading-tight inline";

const HIGHLIGHTS = [
    "145–450 Hour Programs",
    "Advanced Expertise",
    "Career Progression Focus",
] as const;

const paragraphMotion = {
    initial: { opacity: 0, y: 16, filter: "blur(6px)" },
    whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
    viewport: { once: false, amount: 0.3 },
    transition: { duration: 0.55, ease: "easeOut" as const },
};

const CourseCardCategories1 = () => {
    const [showFloatingButton, setShowFloatingButton] = useState(false);
    const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);
    const [isEnrollmentModalOpen, setIsEnrollmentModalOpen] = useState(false);
    const [enrollmentSlug, setEnrollmentSlug] = useState("");
    const { setIsActive: setFloatingBottomBarActive } = useFloatingBottomBar();
    const coursesSectionRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLDivElement>(null);
    const cardsGridRef = useRef<HTMLDivElement>(null);
    const headingInView = useInView(headingRef, { once: false, margin: "-80px" });
    const { getCourses } = useCourses();
    const allCourses = getCourses();

    const getProgramImage = (slug: string) =>
        allCourses.find((course) => course.slug === slug)?.image ?? "";

    const handleEnroll = (slug: string) => {
        setEnrollmentSlug(slug);
        setIsEnrollmentModalOpen(true);
    };

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

    useEffect(() => {
        setFloatingBottomBarActive(showFloatingButton);
        return () => setFloatingBottomBarActive(false);
    }, [showFloatingButton, setFloatingBottomBarActive]);

    return (
        <section
            ref={coursesSectionRef}
            id="flagship-programs"
            className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-16 md:py-24 border-t border-neutral-200/80 overflow-hidden"
        >
            <div className="w-full space-y-5 md:space-y-5">
                <div ref={headingRef} className="text-center md:text-left">
                    <AnimatedHeading
                        inView={headingInView}
                        lines={[
                            {
                                text: "CYBERLABS ",
                                className: `${headingBaseClass} text-primary`,
                                as: "h2",
                            },
                            {
                                text: "Flagship Programs",
                                className: `${headingBaseClass} text-text-primary`,
                                as: "h2",
                                startDelay: 0.25,
                            },
                        ]}
                    />

                    <motion.div
                        className="mt-4 flex flex-wrap items-center justify-center md:justify-start gap-2"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                    >
                        {HIGHLIGHTS.map((label) => (
                            <span
                                key={label}
                                className="inline-flex items-center rounded-lg border border-neutral-200 bg-white px-3 py-1 text-xs sm:text-sm font-inter-display font-medium text-text-primary/80 shadow-sm"
                            >
                                {label}
                            </span>
                        ))}
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1.75fr_1fr] gap-10 lg:gap-12 items-center">
                    <motion.div
                        className="relative overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <div className="relative z-10  text-left">
                            <motion.p
                                className="text-lg md:text-xl font-inter-display text-text-primary leading-relaxed text-pretty"
                                {...paragraphMotion}
                            >
                                The cybersecurity industry rewards professionals who possess{" "}
                                <span className="font-semibold text-text-primary">
                                    specialized expertise, operational capability, and real-world problem-solving skills.
                                </span>{" "}
                                As organizations face increasingly sophisticated threats, demand continues to grow for professionals who can move beyond foundational knowledge and{" "}
                                <span className="font-semibold text-primary">contribute at a higher level.</span>
                            </motion.p>

                            <motion.p
                                className="text-lg md:text-xl font-inter-display text-text-primary leading-relaxed text-pretty"
                                {...paragraphMotion}
                                transition={{ ...paragraphMotion.transition, delay: 0.08 }}
                            >
                                <span className="font-semibold text-primary">CYBERLABS Flagship Programs</span> are immersive{" "}
                                <span className="font-semibold text-text-primary">145–450 hour professional development pathways</span> designed to help learners develop advanced cybersecurity expertise, prepare for specialized and leadership-oriented roles, and position themselves for{" "}
                                <span className="font-semibold text-text-primary">career progression, salary growth, and global opportunities.</span>
                            </motion.p>

                            <motion.p
                                className="text-lg md:text-xl font-inter-display text-text-primary leading-relaxed text-pretty"
                                {...paragraphMotion}
                                transition={{ ...paragraphMotion.transition, delay: 0.16 }}
                            >
                                Focused on{" "}
                                <span className="font-semibold text-primary">practical capability rather than certifications alone,</span> these programs help professionals build the skills, experience, and confidence required to succeed in today&apos;s{" "}
                                <span className="font-semibold text-text-primary">rapidly evolving cybersecurity industry.</span>
                            </motion.p>

                            <div className="pt-2 md:pt-3 border-t border-neutral-200/80">
                                <motion.p
                                    className="text-lg sm:text-xl md:text-2xl font-montserrat font-semibold text-text-primary leading-snug text-left"
                                    {...paragraphMotion}
                                    transition={{ ...paragraphMotion.transition, delay: 0.24 }}
                                >
                                    <span className="text-primary">Build Expertise.</span>{" "}
                                    <span className="text-primary">Increase Your Value.</span>{" "}
                                    <span className="text-primary">Accelerate Your Career.</span>
                                </motion.p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="relative flex items-center justify-center lg:justify-end"
                        initial={{ opacity: 0, x: 48 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.25 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <img
                            src={assetSrc(flagshipImage)}
                            alt="CYBERLABS Flagship Programs"
                            className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[340px] h-auto mx-auto lg:mx-0"
                        />
                    </motion.div>
                </div>

                <div id="our-programs">
                    <div
                        ref={cardsGridRef}
                        className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-stretch gap-6 md:gap-8 pt-4 md:pt-8"
                    >
                        {flagshipProgramCards.map((program, index) => (
                            <FlagshipProgramCard
                                key={program.id}
                                program={program}
                                image={getProgramImage(program.slug)}
                                index={index}
                                onEnroll={handleEnroll}
                            />
                        ))}
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
                        className="fixed bottom-4 left-1/2 z-1000 -translate-x-1/2 sm:bottom-6"
                    >
                        <ShinyButton
                            type="button"
                            size="compact"
                            onClick={() => setIsCallbackModalOpen(true)}
                            className="rounded-lg! font-montserrat! text-xs font-medium whitespace-nowrap shadow-lg! active:scale-95! sm:text-sm px-10! py-3!"
                        >
                            Request Callback
                        </ShinyButton>
                    </motion.div>
                )}
            </AnimatePresence>

            

            {/* Callback Modal */}
            <CallbackModal
                isOpen={isCallbackModalOpen}
                onClose={() => setIsCallbackModalOpen(false)}
            />

            <EnrollmentModal
                isOpen={isEnrollmentModalOpen}
                onClose={() => setIsEnrollmentModalOpen(false)}
                slug={enrollmentSlug}
            />
        </section>
    );
};

export default CourseCardCategories1;
