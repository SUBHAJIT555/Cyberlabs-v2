import { useRef } from "react";
import { useParams } from "react-router";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";

import { useCourses } from "@/hooks/useCourses";
import { FallingPattern } from "@/components/ui/falling-pattern";

// Helper function to highlight the last word(s) in the heading
const getHighlightedHeading = (heading: string) => {
    const words = heading.split(" ");
    if (words.length <= 1) {
        return <span className="text-text-primary">{heading}</span>;
    }
    // Highlight the last word
    const lastWord = words[words.length - 1];
    const restOfHeading = words.slice(0, words.length - 1).join(" ");

    return (
        <>
            <span className="text-text-primary">{restOfHeading}</span>{" "}
            <span className="text-primary">{lastWord}</span>
        </>
    );
};

const LaymanStory = () => {
    const { slug } = useParams();
    const { getCourses } = useCourses();

    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    const course = getCourses().find((c) => c.slug === slug);
    const layman = course?.laymanExplanation;

    if (!layman) return null;

    return (
        <motion.section
            ref={containerRef}
            className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-4 sm:py-8 md:py-10 overflow-hidden"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            {/* Falling Pattern Background - full width including center */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <FallingPattern
                    color="rgba(83, 86, 90, 0.65)"
                    backgroundColor="rgb(245, 245, 245)"
                    duration={200}
                    blurIntensity="0.4em"
                    density={1.2}
                    className="h-full w-full"
                    style={{
                        maskImage: 'linear-gradient(to bottom, transparent 0%, rgb(245, 245, 245) 10%, rgb(245, 245, 245) 90%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, rgb(245, 245, 245) 10%, rgb(245, 245, 245) 90%, transparent 100%)',
                    }}
                />
            </div>

            <motion.div
                variants={itemVariants}
                className="relative max-w-5xl mx-auto z-10"
            >
                {/* Clean, simple container */}
                <div className="relative">
                    {/* Title */}
                    <motion.h3
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold tracking-tight leading-tight mb-4 sm:mb-6 md:mb-8 text-left"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    >
                        {getHighlightedHeading(layman.heading)}
                    </motion.h3>
                    <div className="botder-t border border-neutral-300 border-dashed my-4"></div>

                    {/* Story lines */}
                    <div className="space-y-5 sm:space-y-6 md:space-y-7">
                        {layman.lines.map((line, index) => (
                            <motion.p
                                key={index}
                                className="text-base sm:text-lg md:text-xl lg:text-2xl font-inter-display font-semibold text-text-primary leading-relaxed text-left bg-background/30 backdrop-blur-sm w-fit"
                                style={{
                                    textShadow: "0 1px 8px rgba(255,255,255,0.92), 0 0px 2px #fff",
                                }}
                                initial={{ opacity: 0, y: 15 }}
                                animate={
                                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }
                                }
                                transition={{
                                    duration: 0.6,
                                    delay: 0.3 + index * 0.1,
                                    ease: "easeOut",
                                }}
                            >
                                {line}
                            </motion.p>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.section>
    );
};

export default LaymanStory;