import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { usePageDetail } from "@/hooks/useProgramDetail";
import { AnimatedHeading } from "@/components/ui/animated-heading";

const BootcampCareerOpportunity = () => {
    const detail = usePageDetail();
    const careerChart = detail?.careerChart;

    const headingRef = useRef<HTMLDivElement>(null);
    const tableRef = useRef<HTMLTableSectionElement>(null);
    const headingInView = useInView(headingRef, { once: false, margin: "-80px" });
    const tableInView = useInView(tableRef, { once: false, margin: "-60px" });

    if (!careerChart || careerChart.length === 0) return null;

    return (
        <section className="w-full text-text-primary py-12 md:py-16">
            <div className="mx-auto px-4 md:px-12 xl:px-25">
                <div ref={headingRef} className="mb-8 md:mb-10">
                    <AnimatedHeading
                        inView={headingInView}
                        lines={[
                            {
                                text: "Career Opportunities & Hiring Landscape",
                                className:
                                    "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat font-semibold tracking-tight leading-tight",
                                as: "h3",
                            },
                            {
                                text: "(2026+)",
                                className:
                                    "text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary font-montserrat font-medium tracking-tight leading-tight",
                                as: "h3",
                                startDelay: 0.12,
                            },
                        ]}
                    />
                    {detail?.careerIntro && (
                        <p className="mt-3 text-sm sm:text-base md:text-lg font-inter-display text-text-primary font-medium max-w-3xl">
                            {detail.careerIntro}
                        </p>
                    )}
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full min-w-160 sm:min-w-230 md:min-w-6xl table-fixed border-collapse border border-neutral-300 bg-white">
                        <thead
                            className="bg-white"
                            style={{
                                background:
                                    "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                            }}
                        >
                            <tr>
                                <th className="border border-neutral-300 px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm md:text-base font-montserrat font-bold text-text-primary w-[22%] md:w-[24%] lg:w-[26%]">
                                    Job Role
                                </th>
                                <th className="border border-neutral-300 px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm md:text-base font-montserrat font-bold text-text-primary w-[32%] md:w-[34%] lg:w-[36%]">
                                    What You&apos;ll Do
                                </th>
                                <th className="border border-neutral-300 px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm md:text-base font-montserrat font-bold text-text-primary w-[46%] md:w-[42%] lg:w-[38%]">
                                    Example Employers
                                </th>
                            </tr>
                        </thead>
                        <tbody ref={tableRef}>
                            {careerChart.map((row, index) => (
                                <motion.tr
                                    key={row.jobRole}
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={
                                        tableInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }
                                    }
                                    transition={{
                                        duration: 0.4,
                                        delay: index * 0.06,
                                        ease: "easeOut",
                                    }}
                                >
                                    <td className="align-top border border-neutral-300 px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-xs sm:text-sm md:text-base font-inter-display font-medium text-text-primary whitespace-normal sm:whitespace-nowrap">
                                        {row.jobRole}
                                    </td>
                                    <td className="align-top border border-neutral-300 px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-xs sm:text-sm md:text-base font-inter-display font-medium text-text-primary leading-relaxed">
                                        {row.whatYouDo}
                                    </td>
                                    <td className="align-top border border-neutral-300 px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-xs sm:text-sm md:text-base font-inter-display font-medium text-text-primary leading-relaxed">
                                        {row.exampleEmployers}
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {detail?.careerClosing && (
                    <p className="mt-8 text-sm sm:text-base md:text-lg font-inter-display font-medium text-text-primary leading-relaxed max-w-4xl">
                        {detail.careerClosing}
                    </p>
                )}
            </div>
        </section>
    );
};

export default BootcampCareerOpportunity;
