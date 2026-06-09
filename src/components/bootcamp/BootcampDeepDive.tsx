import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { usePageDetail } from "@/hooks/useProgramDetail";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { AnimatedList } from "@/components/ui/animated-list";
import type { AnimatedListItem } from "@/components/ui/animated-list";

const dashedGridStyle = {
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
    maskComposite: "intersect" as const,
    WebkitMaskComposite: "source-in" as const,
};

const BootcampDeepDive = () => {
    const detail = usePageDetail();
    const deepDive = detail?.deepDive;

    const headerRef = useRef<HTMLDivElement>(null);
    const introRef = useRef(null);
    const headerInView = useInView(headerRef, { once: false, margin: "-100px" });
    const introInView = useInView(introRef, { once: true, margin: "-100px" });
    const [openIndex, setOpenIndex] = useState(0);

    if (!deepDive) return null;

    const toggleAccordion = (index: number) => {
        setOpenIndex((prev) => (prev === index ? -1 : index));
    };

    return (
        <div
            className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-26 py-8 sm:py-12 md:py-16"
            id="bootcamp-deep-dive"
        >
            <div ref={headerRef} className="mb-8">
                <AnimatedHeading
                    inView={headerInView}
                    lines={[
                        {
                            text: deepDive.title,
                            className:
                                "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat font-medium text-text-primary leading-tight mb-8 sm:leading-none tracking-tight",
                            as: "h3",
                        },
                    ]}
                />

                <motion.div
                    ref={introRef}
                    className="relative border border-neutral-200 ring ring-neutral-200 ring-offset-4 md:ring-offset-8 rounded-xl w-full overflow-hidden bg-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={introInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div className="absolute inset-0 z-0 pointer-events-none" style={dashedGridStyle} />
                    <div className="relative z-10 p-3 sm:p-4 md:p-4 lg:p-5">
                        <h4 className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl lg:text-3xl text-text-primary font-inter-display font-bold tracking-tight leading-tight mb-6 sm:mb-8 md:mb-10">
                            <div className="bg-background shadow-sm rounded-md p-2">
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
                                    className="text-primary shrink-0"
                                    aria-hidden
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                                    <path d="M12 7v5l3 3" />
                                </svg>
                            </div>
                            {deepDive.subtitle}
                        </h4>

                        <div className="space-y-4 sm:space-y-5 md:space-y-6">
                            {deepDive.introParagraphs.map((paragraph, index) => (
                                <p
                                    key={index}
                                    className="text-base sm:text-lg md:text-xl font-inter-display text-text-primary font-medium leading-relaxed"
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="flex flex-col divide-y divide-neutral-300 mb-8 sm:mb-10"
            >
                {deepDive.sections.map((section, index) => (
                    <motion.div
                        key={section.title}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, margin: "-80px" }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        className="py-3 sm:py-4 group"
                    >
                        <button
                            type="button"
                            onClick={() => toggleAccordion(index)}
                            className="w-full flex justify-between items-center text-left focus:outline-none group cursor-pointer"
                        >
                            <h4 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-montserrat font-medium text-text-primary leading-tight tracking-tighter pr-4">
                                {section.title}
                            </h4>
                            <div className="text-gray-400 flex items-center gap-1 sm:gap-2 font-inter-display shrink-0">
                                <span className="text-xs sm:text-sm md:text-base lg:text-lg hidden sm:inline">
                                    {openIndex === index ? "Collapse" : "Expand"}
                                </span>
                                {openIndex === index ? (
                                    <FiChevronUp className="text-lg sm:text-xl" />
                                ) : (
                                    <FiChevronDown className="text-lg sm:text-xl" />
                                )}
                            </div>
                        </button>

                        <motion.div
                            initial={false}
                            animate={{
                                height: openIndex === index ? "auto" : 0,
                                opacity: openIndex === index ? 1 : 0,
                            }}
                            transition={{
                                duration: 0.5,
                                ease: [0.25, 0.46, 0.45, 0.94],
                                opacity: { duration: 0.3 },
                            }}
                            className="overflow-hidden"
                        >
                            <div className="pr-2 text-text-primary font-medium space-y-4 sm:space-y-6 font-inter-display mt-3 sm:mt-4">
                                {section.paragraphs?.map((paragraph, paraIdx) => (
                                    <p
                                        key={paraIdx}
                                        className="text-sm sm:text-base md:text-lg lg:text-xl font-inter-display font-medium text-text-primary leading-relaxed whitespace-pre-line"
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                                {section.points && section.points.length > 0 && (
                                    <AnimatedList
                                        items={section.points.map(
                                            (point): AnimatedListItem => ({
                                                text: point,
                                                icon: (
                                                    <span className="text-primary text-xs sm:text-sm mt-1 sm:mt-2 shrink-0">
                                                        •
                                                    </span>
                                                ),
                                            }),
                                        )}
                                        viewportOnce={false}
                                        boldText={false}
                                        containerClassName="list-none space-y-2 sm:space-y-3 md:space-y-4"
                                        itemClassName="flex items-start gap-2 sm:gap-3"
                                        contentClassName="text-sm sm:text-base md:text-lg lg:text-xl font-inter-display font-medium text-text-primary"
                                        iconClassName="shrink-0 pt-0.5"
                                    />
                                )}
                                {section.closingParagraphs?.map((paragraph, paraIdx) => (
                                    <p
                                        key={`closing-${paraIdx}`}
                                        className="text-sm sm:text-base md:text-lg lg:text-xl font-inter-display font-medium text-text-primary leading-relaxed whitespace-pre-line"
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default BootcampDeepDive;
