import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";
import { AnimatedHeading } from "./ui/animated-heading";
import { AnimatedList } from "./ui/animated-list";
import type { AnimatedListItem } from "./ui/animated-list";
import RotatingEarth from "./RotatingEarth";

const FoundationFaculty = () => {
    const headingRef = useRef<HTMLDivElement>(null);
    const leftContentRef = useRef(null);
    const globeRef = useRef(null);

    const headingInView = useInView(headingRef, { once: false, margin: "-100px" });
    const leftContentInView = useInView(leftContentRef, { once: false, margin: "-100px" });
    const globeInView = useInView(globeRef, { once: false, margin: "-100px" });

    // Animation variants for left content (coming from left)
    const leftContentVariants: Variants = {
        hidden: {
            opacity: 0,
            x: -100,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    // Animation variants for globe (fade in from center)
    const globeVariants: Variants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    // Animated SVG: alert-square-rounded (Operate under uncertainty)
    const AnimatedAlertSquareRoundedIcon = ({ isInView }: { isInView: boolean }) => (
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
            className="w-6 h-6 sm:w-7 sm:h-7 text-primary shrink-0"
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
                d="M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M12 8v4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 1, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M12 16h.01"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.2, delay: 1.3, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    // Animated SVG: search (Investigate complex, multi-layered incidents)
    const AnimatedSearchIcon = ({ isInView }: { isInView: boolean }) => (
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
            className="w-6 h-6 sm:w-7 sm:h-7 text-primary shrink-0"
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
                d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M21 21l-6 -6"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.8, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    // Animated SVG: shield-lock (Design defenses that survive real attackers)
    const AnimatedShieldLockIcon = ({ isInView }: { isInView: boolean }) => (
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
            className="w-6 h-6 sm:w-7 sm:h-7 text-primary shrink-0"
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
                transition={{ duration: 0.3, delay: 1, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M12 12l0 2.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 1.3, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    // Animated SVG: target (Be accountable for outcomes, not theory)
    const AnimatedTargetIcon = ({ isInView }: { isInView: boolean }) => (
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
            className="w-6 h-6 sm:w-7 sm:h-7 text-primary shrink-0"
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
                transition={{ duration: 0.2, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M7 12a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.4, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.8, delay: 1, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    const facultyListItems: AnimatedListItem[] = [
        { text: "Operate under uncertainty.", icon: <AnimatedAlertSquareRoundedIcon isInView={leftContentInView} /> },
        { text: "Investigate complex, multi-layered incidents.", icon: <AnimatedSearchIcon isInView={leftContentInView} /> },
        { text: "Design defenses that survive real attackers.", icon: <AnimatedShieldLockIcon isInView={leftContentInView} /> },
        { text: "Be accountable for outcomes, not theory.", icon: <AnimatedTargetIcon isInView={leftContentInView} /> },
    ];

    return (
        <section className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 mt-8 md:mt-12 bg-background">
            <div className="w-full">
                {/* Separate Heading - Full Width */}
                <div ref={headingRef} className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                    <AnimatedHeading
                        inView={headingInView}
                        lines={[
                            { text: "Israel-Founded Cybersecurity DNA", className: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-montserrat text-text-primary font-semibold tracking-tight leading-tight" },
                        ]}
                    />
                </div>

                {/* Main Content Grid - Two columns: Left text, Right globe */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
                    {/* Left side - Text Content */}
                    <motion.div
                        ref={leftContentRef}
                        variants={leftContentVariants}
                        initial="hidden"
                        animate={leftContentInView ? "visible" : "hidden"}
                        className="space-y-6 md:space-y-8 order-1 md:order-1 flex flex-col"
                    >
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-inter-display text-text-primary font-medium leading-relaxed">
                            <span className="font-bold text-primary">CYBERLABS</span> was founded in Israel, one of the world&apos;s most advanced cybersecurity ecosystems, where cyber defense is inseparable from national security, intelligence operations, and real adversarial pressure.
                        </p>

                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-inter-display text-text-primary font-medium leading-relaxed">
                            This environment produces professionals trained to:
                        </p>

                        <AnimatedList
                            items={facultyListItems}
                            viewportOnce={false}
                            viewportAmount={0.5}
                            duration={0.6}
                            staggerDelay={0.1}
                            xOffset={50}
                            containerClassName="space-y-3 md:space-y-4"
                            contentClassName="text-base sm:text-lg md:text-xl lg:text-2xl font-inter-display text-text-primary leading-relaxed font-medium"
                            itemClassName="flex items-center gap-3"
                            iconClassName="text-text-primary shrink-0 flex items-center"
                            boldText={false}
                        />

                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-inter-display text-text-primary font-medium leading-relaxed">
                            This DNA defines how <span className="font-bold text-primary">CYBERLABS</span> trains, evaluates, and certifies cybersecurity professionals globally, under the governance of <span className="font-bold">CYBERLABS USA</span>.
                        </p>
                    </motion.div>

                    {/* Right side - Globe */}
                    <motion.div
                        ref={globeRef}
                        variants={globeVariants}
                        initial="hidden"
                        animate={globeInView ? "visible" : "hidden"}
                        className="flex justify-center items-start w-full order-2 md:order-2 h-full"
                    >
                        <div className="w-full flex justify-center items-start sticky top-24">
                            <div className="w-full max-w-full aspect-square">
                                <RotatingEarth width={600} height={600} className="w-full h-full" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FoundationFaculty;