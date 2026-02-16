import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { AnimatedList } from "./ui/animated-list";
import type { AnimatedListItem } from "./ui/animated-list";
import comptiaImage from "@/assets/img/CertificateTag/cyberlab_ceritificate_comptia.webp";
import iscImage from "@/assets/img/CertificateTag/cyberlab_ceritificate_isc.webp";
import ecCouncilImage from "@/assets/img/CertificateTag/cyberlab_ceritificate_ec-council.webp";
import assesmentSvg from "@/assets/img/Official certification/assesment.svg";
import industryallignmentSvg from "@/assets/img/Official certification/industryallignment.svg";

const AssesmentPhilosophy = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: false, margin: "-100px" });
    const philosophyListRef = useRef<HTMLDivElement>(null);

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

    const SectionBlock = ({
        children,
        className = "",
    }: {
        children: ReactNode;
        className?: string;
    }) => (
        <div
            className={`w-full pt-4 sm:pt-6 md:pt-8 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 border-b border-neutral-200/80 ${className}`}
        >
            <div className="w-full">{children}</div>
        </div>
    );

    // Animated SVG Icon Components (always visible, no isInView)
    const AnimatedBrainIcon = () => (
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
            className="w-5 h-5 sm:w-6 sm:h-6 text-primary"
        >
            <motion.path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M17.5 16a3.5 3.5 0 0 0 0 -7h-.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M6.5 16a3.5 3.5 0 0 1 0 -7h.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.4, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 1.7, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    const AnimatedMapSearchIcon = () => (
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
            className="w-5 h-5 sm:w-6 sm:h-6 text-primary"
        >
            <motion.path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M9 4v13"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.6, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M15 7v5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.9, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M20.2 20.2l1.8 1.8"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.5, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    const AnimatedChartDotsIcon = () => (
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
            className="w-5 h-5 sm:w-6 sm:h-6 text-primary"
        >
            <motion.path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M3 3v18h18"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M7 15a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.5, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M11 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.8, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M16 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.1, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M21 3l-6 1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.4, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M14.113 6.65l2.771 3.695"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.7, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M16 12.5l-5 2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 2, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    const AnimatedScaleIcon = () => (
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
            className="w-5 h-5 sm:w-6 sm:h-6 text-primary"
        >
            <motion.path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M7 20l10 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M6 6l6 -1l6 1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M12 3l0 17"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M9 12l-3 -6l-3 6a3 3 0 0 0 6 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 1.1, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M21 12l-3 -6l-3 6a3 3 0 0 0 6 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 1.4, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    const AnimatedRosetteCheckIcon = () => (
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
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7c.412 .41 .97 .64 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1c0 .58 .23 1.138 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M9 12l2 2l4 -4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 1, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    const philosophyListItems: AnimatedListItem[] = [
        { text: "How learners think under complexity.", icon: <AnimatedBrainIcon /> },
        { text: "How they investigate unfamiliar scenarios.", icon: <AnimatedMapSearchIcon /> },
        { text: "How they analyze evidence and data.", icon: <AnimatedChartDotsIcon /> },
        { text: "How they make defensible, professional decisions.", icon: <AnimatedScaleIcon /> },
    ];

    return (
        <section className="w-full bg-background pt-4 md:pt-8 pb-12 md:pb-20" ref={containerRef}>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="w-full"
            >
                {/* 1. Assessment Philosophy — content left, image right */}
                <SectionBlock className="bg-white">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
                        <div className="space-y-6 order-2 md:order-1">
                            <motion.h2
                                className="text-2xl sm:text-3xl md:text-4xl font-montserrat text-text-primary font-semibold tracking-tight leading-tight mb-6"
                                initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
                                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            >
                                Assessment Philosophy
                            </motion.h2>
                            <p className="text-sm sm:text-base md:text-lg font-inter-display font-medium text-text-primary leading-relaxed">
                                Assessments at CYBERLABS are <span className="font-bold">not memory-based exams.</span>
                            </p>
                            <p className="text-base sm:text-lg md:text-xl font-inter-display font-semibold text-text-primary leading-light my-4 mb-8">
                                They are designed to evaluate:
                            </p>
                            <div ref={philosophyListRef} className="mb-6">
                                <AnimatedList
                                    items={philosophyListItems}
                                    viewportOnce={false}
                                    viewportAmount={0.5}
                                    duration={0.6}
                                    staggerDelay={0.1}
                                    xOffset={50}
                                    containerClassName="space-y-4 sm:space-y-6"
                                    contentClassName="font-inter-display font-semibold text-text-primary text-sm sm:text-base md:text-lg leading-tight flex-1"
                                    itemClassName="flex items-start gap-3 sm:gap-4"
                                    iconClassName="mt-0.5 shrink-0 flex items-center pt-0.5 text-primary"
                                    boldText={false}
                                />
                            </div>
                            <div className="pt-2 border-t border-neutral-300 border-dashed">
                                <motion.p
                                    className="text-lg sm:text-xl md:text-2xl text-text-primary leading-light font-montserrat tracking-tighter font-semibold mb-2 sm:mb-3"
                                    initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
                                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                >
                                    This mirrors how cybersecurity professionals are evaluated in real-world roles.
                                </motion.p>
                            </div>
                        </div>
                        <div className="order-1 md:order-2 flex justify-center md:justify-end">
                            <img src={assesmentSvg} alt="" className="w-full max-w-md h-auto" />
                        </div>
                    </div>
                </SectionBlock>

                {/* 2. Industry Alignment & Professional Relevance — zigzag: image left, content right */}
                <SectionBlock className="bg-neutral-50/80 border-b-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
                        <div className="order-1 md:order-1 flex justify-center md:justify-start">
                            <img src={industryallignmentSvg} alt="" className="w-full max-w-md h-auto" />
                        </div>
                        <div className="space-y-6 order-2 md:order-2">
                            <motion.h2
                                className="text-2xl sm:text-3xl md:text-4xl font-montserrat text-text-primary font-semibold tracking-tight leading-tight mb-6"
                                initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
                                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            >
                                Industry Alignment & Professional Relevance
                            </motion.h2>
                            <p className="text-sm sm:text-base md:text-lg font-inter-display font-medium text-text-primary leading-tight mb-4">
                                All certificates issued by CYBERLABS USA are{" "}
                                <span className="font-bold">industry-aligned and professionally relevant</span> in the context of global cybersecurity role requirements.
                            </p>
                            <p className="text-sm sm:text-base md:text-lg font-inter-display font-medium text-text-primary leading-tight mb-6">
                                CYBERLABS USA programs are <span className="font-bold">mapped and aligned</span> to the knowledge domains, skill areas, and professional competencies defined by globally recognized cybersecurity bodies such as:
                            </p>
                            {/* Three certificate cards — images always visible */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6">
                                {[
                                    { name: "ISC²", src: iscImage, alt: "ISC² Certificate" },
                                    { name: "CompTIA", src: comptiaImage, alt: "CompTIA Certificate" },
                                    { name: "EC-Council", src: ecCouncilImage, alt: "EC-Council Certificate" },
                                ].map((org) => (
                                    <motion.div
                                        key={org.name}
                                        className="rounded-lg border border-neutral-300 border-dashed overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
                                        style={{
                                            background: "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                                        }}
                                        initial={{ opacity: 0, y: 12 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <p className="text-center font-montserrat font-semibold text-text-primary text-sm sm:text-base pt-4 px-3 pb-2 border-b border-neutral-200/80">
                                            {org.name}
                                        </p>
                                        <div className="p-3 sm:p-4 flex justify-center items-center min-h-[140px] sm:min-h-[160px]">
                                            <img
                                                src={org.src}
                                                alt={org.alt}
                                                className="w-full max-w-[140px] sm:max-w-[160px] h-auto object-contain"
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                            <div
                                className="p-4 sm:p-5 md:p-6 rounded-lg border border-neutral-300 border-dashed mb-6"
                                style={{
                                    background: "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                                }}
                            >
                                <p className="text-sm sm:text-base md:text-lg font-inter-display font-medium text-text-primary leading-tight">
                                    This alignment ensures that learners develop capabilities that are <span className="font-bold">relevant, transferable, and compatible</span> with internationally recognized cybersecurity career pathways, while maintaining CYBERLABS' own investigation-driven and operational training standards.
                                </p>
                            </div>
                            <div
                                className="p-4 sm:p-5 md:p-6 rounded-lg border border-neutral-300 border-dashed flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
                                style={{
                                    background: "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                                }}
                            >
                                <p className="text-sm sm:text-base md:text-lg font-inter-display font-medium text-text-primary leading-tight flex-1">
                                    CYBERLABS certifications emphasize <span className="font-bold">practical capability and operational readiness</span>, rather than exam-only credentialing.
                                </p>
                                <div className="flex justify-center sm:justify-end shrink-0">
                                    <div className="scale-150 sm:scale-[1.75] md:scale-[2]">
                                        <AnimatedRosetteCheckIcon />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SectionBlock>
            </motion.div>
        </section>
    );
};

export default AssesmentPhilosophy;
