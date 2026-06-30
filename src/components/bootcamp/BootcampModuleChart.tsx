import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { usePageDetail } from "@/hooks/useProgramDetail";
import { AnimatedHeading } from "@/components/ui/animated-heading";

const BootcampModuleChart = () => {
    const headingRef = useRef<HTMLDivElement>(null);
    const headingInView = useInView(headingRef, { once: false, margin: "-80px" });
    const detail = usePageDetail();
    const moduleChart = detail?.moduleChart;

    if (!moduleChart || moduleChart.length === 0) return null;

    return (
        <section className="w-full text-text-primary py-12 md:py-16">
            <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-26">
                <div ref={headingRef} className="mb-8 md:mb-10">
                    <AnimatedHeading
                        inView={headingInView}
                        lines={[
                            {
                                text: "Program Structure & Modules",
                                className:
                                    "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-inter-display font-semibold tracking-tight leading-tight",
                                as: "h3",
                            },
                        ]}
                    />
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full min-w-[640px] table-fixed border-collapse border border-neutral-300 bg-white">
                        <thead
                            className="bg-white"
                            style={{
                                background:
                                    "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                            }}
                        >
                            <tr>
                                <th className="border border-neutral-300 px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm md:text-base font-montserrat font-bold text-text-primary w-[20%] md:w-[16%] lg:w-[14%] min-w-26">
                                    Module
                                </th>
                                <th className="border border-neutral-300 px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm md:text-base font-montserrat font-bold text-text-primary w-[26%] md:w-[28%] lg:w-[30%]">
                                    Focus Area
                                </th>
                                <th className="border border-neutral-300 px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm md:text-base font-montserrat font-bold text-text-primary w-[54%] md:w-[56%] lg:w-[56%]">
                                    What You Learn
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {moduleChart.map((row, index) => (
                                <motion.tr
                                    key={row.module + row.focusArea}
                                    initial={{ opacity: 0, x: 24 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{
                                        duration: 0.45,
                                        ease: "easeOut",
                                        delay: index * 0.06,
                                    }}
                                >
                                    <td className="align-top border border-neutral-300 px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-xs sm:text-sm md:text-base font-inter-display font-medium text-text-primary whitespace-normal wrap-break-words">
                                        {row.module}
                                    </td>
                                    <td className="align-top border border-neutral-300 px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-xs sm:text-sm md:text-base font-inter-display font-medium text-text-primary whitespace-normal wrap-break-words">
                                        {row.focusArea}
                                    </td>
                                    <td className="align-top border border-neutral-300 px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-xs sm:text-sm md:text-base font-inter-display font-medium text-text-primary leading-relaxed whitespace-normal wrap-break-words">
                                        {row.whatYouLearn}
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default BootcampModuleChart;
