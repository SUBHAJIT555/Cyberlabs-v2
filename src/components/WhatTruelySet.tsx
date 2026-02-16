import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";
import { AnimatedHeading } from "./ui/animated-heading";
import { AnimatedList } from "./ui/animated-list";
import type { AnimatedListItem } from "./ui/animated-list";
import closingSvg from "@/assets/img/TeamMemberImages/closing.svg";

const WhatTruelySet = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: false, margin: "-100px" });
    const headingRef = useRef<HTMLDivElement>(null);
    const headingInView = useInView(headingRef, { once: false, margin: "-100px" });
    // Animation variants
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    // Animated SVG icons for bullet points
    const AnimatedXIcon = ({ isInView }: { isInView: boolean }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 shrink-0"
        >
            <motion.path
                d="M18 6L6 18"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 0, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M6 6l12 12"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    const AnimatedCheckIcon = ({ isInView }: { isInView: boolean }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 sm:w-6 sm:h-6 text-primary shrink-0"
        >
            <motion.path
                d="M20 6L9 17l-5-5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    const mostInstitutesListItems: AnimatedListItem[] = [
        { text: "Trainers with certification-only backgrounds", icon: <AnimatedXIcon isInView={isInView} /> },
        { text: "Academic instructors disconnected from live threats", icon: <AnimatedXIcon isInView={isInView} /> },
        { text: "Static syllabi updated once every few years", icon: <AnimatedXIcon isInView={isInView} /> },
    ];

    const cyberlabsListItems: AnimatedListItem[] = [
        { text: "Cyber commanders and intelligence officers", icon: <AnimatedCheckIcon isInView={isInView} /> },
        { text: "CISOs and incident responders", icon: <AnimatedCheckIcon isInView={isInView} /> },
        { text: "Architects of real cyber systems and national training frameworks", icon: <AnimatedCheckIcon isInView={isInView} /> },
    ];

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

    return (
        <section
            ref={containerRef}
            className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 sm:py-10 md:py-12 lg:py-16"
        >
            <div className="w-full">
                {/* Main Heading */}
                <div ref={headingRef} className="mb-8 sm:mb-10 md:mb-12">
                    <AnimatedHeading
                        inView={headingInView}
                        lines={[
                            { text: "What Truly Sets CYBERLABS Apart", className: "text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-inter-display text-text-primary leading-tight tracking-tight font-semibold" },
                        ]}
                    />
                </div>

                {/* Comparison Section */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mb-12 md:mb-16"
                >
                    {/* Most institutes section */}
                    <motion.div
                        variants={itemVariants}
                        className="relative border border-neutral-200 ring ring-neutral-300 ring-offset-3 md:ring-offset-6 bg-white rounded-xl overflow-hidden"
                    >
                        <div className="absolute inset-0 z-0 pointer-events-none" style={dashedGridCardStyle} />
                        <div className="relative z-10 p-6 sm:p-8 md:p-10">
                        <div className="mb-4 sm:mb-5">
                            <motion.h3
                                className="text-lg sm:text-xl md:text-2xl font-inter-display text-text-primary font-semibold leading-tight tracking-tight"
                                initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
                                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            >
                                Most institutes are led by:
                            </motion.h3>
                        </div>
                        <AnimatedList
                            items={mostInstitutesListItems}
                            viewportOnce={false}
                            viewportAmount={0.5}
                            duration={0.6}
                            staggerDelay={0.1}
                            xOffset={50}
                            containerClassName="space-y-3 md:space-y-4"
                            contentClassName="text-base sm:text-lg md:text-xl font-montserrat font-medium text-text-primary leading-relaxed"
                            itemClassName="flex items-center gap-3"
                            iconClassName="text-text-primary shrink-0 flex items-center"
                            boldText={false}
                        />
                        </div>
                    </motion.div>

                    {/* CYBERLABS section */}
                    <motion.div
                        variants={itemVariants}
                        className="relative border border-neutral-200 ring ring-neutral-300 ring-offset-3 md:ring-offset-6 bg-white rounded-xl overflow-hidden"
                    >
                        <div className="absolute inset-0 z-0 pointer-events-none" style={dashedGridCardStyle} />
                        <div className="relative z-10 p-6 sm:p-8 md:p-10">
                        <div className="mb-4 sm:mb-5">
                            <motion.h3
                                className="text-lg sm:text-xl md:text-2xl font-inter-display text-text-primary font-semibold leading-tight tracking-tight"
                                initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
                                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            >
                                CYBERLABS is led by:
                            </motion.h3>
                        </div>
                        <AnimatedList
                            items={cyberlabsListItems}
                            viewportOnce={false}
                            viewportAmount={0.5}
                            duration={0.6}
                            staggerDelay={0.1}
                            xOffset={50}
                            containerClassName="space-y-3 md:space-y-4"
                            contentClassName="text-base sm:text-lg md:text-xl font-montserrat font-medium text-text-primary leading-relaxed"
                            itemClassName="flex items-center gap-3"
                            iconClassName="text-text-primary shrink-0 flex items-center"
                            boldText={false}
                        />
                        </div>
                    </motion.div>
                </motion.div>

                {/* Statement + Closing — image left, content right (background same as CallToAction) */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    className="relative rounded-xl border border-neutral-200 ring ring-neutral-300 ring-offset-4 md:ring-offset-8 bg-white overflow-hidden shadow-sm"
                >
                    <div
                        className="absolute inset-0 z-0 pointer-events-none"
                        style={{
                            backgroundImage: `
                                linear-gradient(to right, #e2e8f0 1px, transparent 1px),
                                linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
                            `,
                            backgroundSize: "1px 1px",
                            backgroundPosition: "0 0, 0 0",
                            maskImage: `
                                repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
                                repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
                                radial-gradient(ellipse 70% 60% at 50% 0%, #000 40%, transparent 80%)
                            `,
                            WebkitMaskImage: `
                                repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
                                repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
                                radial-gradient(ellipse 70% 60% at 50% 0%, #000 40%, transparent 80%)
                            `,
                            maskComposite: "intersect",
                            WebkitMaskComposite: "source-in",
                        }}
                    />
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 sm:gap-8 md:gap-10 items-center p-6 sm:p-8 md:p-10 lg:p-12">
                        {/* Image — left side (top on mobile) */}
                        <div className="order-1 md:order-1 flex justify-center md:justify-start shrink-0">
                            <img src={closingSvg} alt="" className="w-full max-w-[200px] sm:max-w-[240px] md:w-[200px] md:max-w-none lg:w-[260px] h-auto" />
                        </div>
                        {/* Content — right side */}
                        <div className="order-2 md:order-2 space-y-5 sm:space-y-6 text-center md:text-left">
                            <motion.p
                                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-inter-display font-semibold text-text-primary leading-snug"
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                            >
                                <span className="block sm:inline">We don&apos;t teach cybersecurity as a subject.</span>
                                <span className="block mt-2 sm:mt-3 text-primary font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">We teach it as a profession.</span>
                            </motion.p>
                            <div className="w-16 sm:w-20 h-0.5 bg-primary/30 mx-auto md:mx-0" aria-hidden />
                            <div className="space-y-4 sm:space-y-5">
                                <p className="text-base sm:text-lg md:text-xl font-inter-display font-medium text-text-primary leading-relaxed">
                                    <span className="font-bold text-primary">CYBERLABS</span> was built by people who have <span className="font-semibold text-text-primary">lived cybersecurity</span>, not just studied it.
                                </p>
                                <p className="text-sm sm:text-base md:text-lg font-montserrat font-medium text-text-primary/90 leading-relaxed">
                                    With Israel-founded roots, leadership drawn from real cyber operations, and instructors actively engaged in the field, <span className="font-semibold text-primary">CYBERLABS</span> delivers cybersecurity education that is <span className="font-semibold text-text-primary">serious, operational, and trusted</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhatTruelySet;
