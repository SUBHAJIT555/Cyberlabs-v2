import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";
import { AnimatedHeading } from "./ui/animated-heading";
import { AnimatedList } from "./ui/animated-list";
import type { AnimatedListItem } from "./ui/animated-list";
import { StackOrbit } from "./ui/StackOrbit";

const CheckIcon = () => (
    <div className="shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
        >
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
    </div>
);

const WhyThisMatters = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-100px" });
    const headingRef = useRef<HTMLDivElement>(null);
    const headingInView = useInView(headingRef, { once: false, margin: "-100px" });

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
            y: 30,
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

    const listItemsData = [
        "Operated inside realistic cyber environments",
        "Completed structured hands-on labs",
        "Practiced end-to-end investigations",
        "Developed confidence before entering live systems",
    ];

    const animatedListItems: AnimatedListItem[] = listItemsData.map((text) => ({
        text,
        icon: <CheckIcon />,
    }));

    return (
        <section className="w-full bg-background py-16 md:py-24">
            <div className="w-full px-5 md:px-10 lg:px-16">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {/* Heading */}
                    <div ref={headingRef} className="mb-8 sm:mb-12">
                        <AnimatedHeading
                            inView={headingInView}
                            lines={[
                                { text: "Why This Matters ?", className: "text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-montserrat text-text-primary font-semibold tracking-tight leading-tight" },
                            ]}
                        />
                    </div>

                    {/* Two Column Layout: Text Left, Image Right */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                        {/* Left Side: Text Content */}
                        <motion.div className="order-1 md:order-1" variants={itemVariants}>
                            {/* Opening Statement */}
                            <motion.p
                                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-inter-display font-medium text-text-primary leading-tight mb-6 sm:mb-8"
                                variants={itemVariants}
                            >
                                Cybersecurity roles demand <span className="font-bold text-primary">confidence, judgment, and experience.</span>
                            </motion.p>

                            {/* By the time statement */}
                            <motion.p
                                className="text-base sm:text-lg md:text-xl lg:text-2xl font-inter-display font-semibold text-text-primary leading-tight mb-4 sm:mb-6"
                                variants={itemVariants}
                            >
                                By the time learners complete a CYBERLABS India program, they have already:
                            </motion.p>

                            {/* List Items */}
                            <div className="mb-6 sm:mb-8">
                                <AnimatedList
                                    items={animatedListItems}
                                    viewportOnce={false}
                                    viewportAmount={0.5}
                                    duration={0.6}
                                    staggerDelay={0.1}
                                    xOffset={50}
                                    containerClassName="space-y-3 sm:space-y-4"
                                    contentClassName="text-base sm:text-lg md:text-xl lg:text-2xl font-inter-display font-medium text-text-primary leading-tight flex-1"
                                    itemClassName="flex items-start gap-3 sm:gap-4"
                                    iconClassName="shrink-0 flex items-center pt-0.5"
                                    boldText={false}
                                />
                            </div>

                            {/* Closing Statement */}
                            <motion.p
                                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-inter-display font-semibold text-text-primary leading-tight pt-4 border-t border-neutral-300 border-dashed"
                                variants={itemVariants}
                            >
                                This is the difference between <span className="font-bold text-primary">learning cybersecurity</span> and <span className="font-bold text-primary">being ready to practice it.</span>
                            </motion.p>
                        </motion.div>

                        {/* Right Side: Tech stack orbit */}
                        <motion.div
                            className="order-2 md:order-2 relative w-full h-full min-h-[280px] md:min-h-[320px] lg:min-h-[380px] rounded-lg overflow-hidden bg-background"
                            variants={itemVariants}
                        >
                            <div className="relative z-10 w-full h-full">
                                <StackOrbit />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyThisMatters;
