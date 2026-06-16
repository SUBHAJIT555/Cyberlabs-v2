import { assetSrc } from "@/lib/utils";
import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { usePageDetail } from "@/hooks/useProgramDetail";
import buildingFutureImage from "@/assets/img/ProgramPageImage/buildingfuture.svg";

const BootcampWhatsNew = () => {
    const whatsNew = usePageDetail()?.whatsNew;

    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: false, margin: "-100px" });

    if (!whatsNew) return null;

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2, duration: 0.6 },
        },
    };

    const leftImageVariants: Variants = {
        hidden: { opacity: 0, x: -150, scale: 0.9 },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], type: "spring" },
        },
    };

    const rightContentVariants: Variants = {
        hidden: { opacity: 0, x: 150, scale: 0.9 },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], type: "spring" },
        },
    };

    return (
        <motion.section
            ref={containerRef}
            className="w-full mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-24 py-6 sm:py-8 md:py-12 lg:py-16"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            <div className="md:px-6 lg:px-8 mb-8 sm:mb-10 lg:mb-12">
                <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-montserrat font-bold tracking-tight text-text-primary leading-tight">
                    {whatsNew.heading}
                </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-start">
                <motion.div
                    variants={leftImageVariants}
                    className="lg:sticky lg:top-24 order-1 lg:order-1 relative"
                >
                    <div className="flex items-center justify-center">
                        <img
                            src={assetSrc(buildingFutureImage)}
                            alt="Why this program stands apart"
                            className="w-full max-w-[420px] sm:max-w-[480px] md:max-w-[520px] lg:max-w-[560px] h-auto"
                        />
                    </div>
                </motion.div>

                <motion.div variants={rightContentVariants} className="order-2 lg:order-2">
                    <div className="rounded-md p-6 sm:p-8 md:p-10">
                        <ol className="space-y-8 sm:space-y-10">
                            {whatsNew.items.map((item, index) => (
                                <li
                                    key={`${item.title}-${index}`}
                                    className={`relative pb-6 ${
                                        index !== whatsNew.items.length - 1
                                            ? "border-b border-neutral-300"
                                            : ""
                                    }`}
                                >
                                    <div className="flex gap-3 sm:gap-4">
                                        <span className="text-text-primary font-bold text-xl sm:text-2xl md:text-3xl font-montserrat shrink-0">
                                            {index + 1}.
                                        </span>
                                        <div className="flex-1">
                                            {item.title && (
                                                <h4 className="text-text-primary font-bold text-lg sm:text-xl md:text-2xl font-montserrat mb-2 sm:mb-3">
                                                    {item.title}
                                                </h4>
                                            )}
                                            {item.text &&
                                                item.text.split("\n").map((line, lineIdx) => (
                                                    <p
                                                        key={lineIdx}
                                                        className="text-text-primary text-base sm:text-lg md:text-xl font-inter-display leading-relaxed"
                                                    >
                                                        {line}
                                                    </p>
                                                ))}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ol>

                        {whatsNew.closingParagraph && (
                            <p className="mt-8 sm:mt-10 text-text-primary text-base sm:text-lg md:text-xl font-inter-display leading-relaxed">
                                {whatsNew.closingParagraph}
                            </p>
                        )}
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default BootcampWhatsNew;
