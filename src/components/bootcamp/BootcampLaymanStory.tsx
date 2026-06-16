import { assetSrc } from "@/lib/utils";
import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { usePageDetail } from "@/hooks/useProgramDetail";
import laymansStoryImage from "@/assets/img/ProgramPageImage/LaymansStory.svg";

const getHighlightedHeading = (heading: string) => {
    const words = heading.split(" ");
    if (words.length <= 1) {
        return <span className="text-text-primary">{heading}</span>;
    }
    const lastWord = words[words.length - 1];
    const restOfHeading = words.slice(0, words.length - 1).join(" ");

    return (
        <>
            <span className="text-text-primary">{restOfHeading}</span>{" "}
            <span className="text-primary">{lastWord}</span>
        </>
    );
};

const BootcampLaymanStory = () => {
    const layman = usePageDetail()?.laymanExplanation;

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

    if (!layman) return null;

    return (
        <motion.section
            ref={containerRef}
            className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-4 sm:py-8 md:py-10 overflow-hidden"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
                <motion.div variants={itemVariants} className="relative z-10 order-2 lg:order-1">
                    <div className="relative">
                        <motion.h3
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-inter-display font-bold tracking-tight leading-tight mb-4 sm:mb-6 md:mb-8 text-left"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        >
                            {getHighlightedHeading(layman.heading)}
                        </motion.h3>
                        <div className="border-t border-neutral-300 my-4" />

                        <div className="space-y-5 sm:space-y-6 md:space-y-7">
                            {layman.lines.map((line, index) => (
                                <motion.p
                                    key={index}
                                    className="text-base sm:text-lg md:text-xl font-inter-display font-medium text-text-primary leading-relaxed"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={
                                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                                    }
                                    transition={{
                                        duration: 0.6,
                                        delay: 0.3 + index * 0.08,
                                        ease: "easeOut",
                                    }}
                                >
                                    {line}
                                </motion.p>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="relative z-10 order-1 lg:order-2 flex items-center justify-center"
                >
                    <img
                        src={assetSrc(laymansStoryImage)}
                        alt="Layman's explanation illustration"
                        className="w-full max-w-[420px] sm:max-w-[480px] md:max-w-[520px] lg:max-w-[560px] h-auto"
                    />
                </motion.div>
            </div>
        </motion.section>
    );
};

export default BootcampLaymanStory;
