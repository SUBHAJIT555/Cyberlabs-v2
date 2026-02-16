import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";
import generaladmission1Svg from "@/assets/img/Learning-Enviorment/generaladmission1.svg";
import generaladmission2Svg from "@/assets/img/Learning-Enviorment/generaladmission2.svg";
import { AnimatedHeading } from "./ui/animated-heading";
import { AnimatedList } from "./ui/animated-list";
import type { AnimatedListItem } from "./ui/animated-list";

const iconClass = "w-5 h-5 sm:w-6 sm:h-6 text-primary shrink-0 mt-0.5";

const GeneralAdmission = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: false, margin: "-100px" });
    const headingRef = useRef<HTMLDivElement>(null);
    const headingInView = useInView(headingRef, { once: false, margin: "-100px" });

    const column1ListItems: AnimatedListItem[] = [
        { text: "Live instructor-led online sessions", icon: <span className={iconClass}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10" /><path d="M7 20h10" /><path d="M9 16v4" /><path d="M15 16v4" /></svg></span> },
        { text: "Hands-on labs and simulation-based learning", icon: <span className={iconClass}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 7l5 5l-5 5" /><path d="M12 19l7 0" /></svg></span> },
        { text: "Continuous assessments and practical evaluations", icon: <span className={iconClass}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3.5 5.5l1.5 1.5l2.5 -2.5" /><path d="M3.5 11.5l1.5 1.5l2.5 -2.5" /><path d="M3.5 17.5l1.5 1.5l2.5 -2.5" /><path d="M11 6l9 0" /><path d="M11 12l9 0" /><path d="M11 18l9 0" /></svg></span> },
        { text: "Independent practice and investigation work", icon: <span className={iconClass}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M12 21h-5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v4.5" /><path d="M14 17.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" /><path d="M18.5 19.5l2.5 2.5" /></svg></span> },
        { text: "A professional learning environment with high standards", icon: <span className={iconClass}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7c.412 .41 .97 .64 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1c0 .58 .23 1.138 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1" /><path d="M9 12l2 2l4 -4" /></svg></span> },
    ];

    const column2ListItems: AnimatedListItem[] = [
        { text: "Not mandatory", rest: "for Full-Stack Cyber Defense & Offensive Security programs", icon: <span className={iconClass}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 9a3 3 0 1 1 -3 3l.005 -.176a3 3 0 0 1 2.995 -2.824" /><path d="M16 5a7 7 0 0 1 0 14h-8a7 7 0 0 1 0 -14zm0 2h-8a5 5 0 1 0 0 10h8a5 5 0 0 0 0 -10" /></svg></span> },
        { text: "Helpful but not compulsory", rest: "for advanced investigation and platform programs", icon: <span className={iconClass}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg></span> },
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 },
        },
    };

    const dashedGridStyle = {
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

    const callToActionGridStyle = {
        backgroundImage: `
            linear-gradient(to right, #e2e8f0 1px, transparent 1px),
            linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
        `,
        backgroundSize: "1px 1px",
        backgroundPosition: "0 0, 0 0",
        maskImage: `
            repeating-linear-gradient(
                to right,
                black 0px,
                black 3px,
                transparent 3px,
                transparent 8px
            ),
            repeating-linear-gradient(
                to bottom,
                black 0px,
                black 3px,
                transparent 3px,
                transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 40%, transparent 80%)
        `,
        WebkitMaskImage: `
            repeating-linear-gradient(
                to right,
                black 0px,
                black 3px,
                transparent 3px,
                transparent 8px
            ),
            repeating-linear-gradient(
                to bottom,
                black 0px,
                black 3px,
                transparent 3px,
                transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 40%, transparent 80%)
        `,
        maskComposite: "intersect" as const,
        WebkitMaskComposite: "source-in" as const,
    };

    const SectionBlock = ({
        children,
        className = "",
    }: {
        children: ReactNode;
        className?: string;
    }) => (
        <div className={`w-full mb-8 md:mb-10 ${className}`}>
            <div className="relative rounded-xl border border-neutral-200 bg-white overflow-hidden ring ring-neutral-200 ring-offset-4 md:ring-offset-8">
                <div className="absolute inset-0 z-0 pointer-events-none" style={dashedGridStyle} />
                <div className="relative z-10 p-6 sm:p-8 md:p-10 lg:p-12">
                    {children}
                </div>
            </div>
        </div>
    );

    return (
        <section className="w-full px-5 md:px-10 lg:px-16 py-4 sm:py-6 lg:py-6" ref={containerRef}>
            <div ref={headingRef} className="mb-6 sm:mb-8">
                <AnimatedHeading
                    inView={headingInView}
                    lines={[
                        { text: "General Admission Expectations ", className: "text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-inter-display text-text-primary leading-tight tracking-tight font-semibold" },
                        { text: "(All Programs)", className: "text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-inter-display text-primary leading-tight tracking-tight font-semibold", startDelay: 0.15 },
                    ]}
                />
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="w-full"
            >
                {/* 1. Regardless of background — content left, image right */}
                <SectionBlock>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
                        <div className="space-y-6 order-2 md:order-1">
                            <motion.h2
                                className="text-2xl sm:text-3xl md:text-4xl font-montserrat text-text-primary font-semibold tracking-tight leading-tight mb-6"
                                initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
                                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                Regardless of background, applicants should be prepared for:
                            </motion.h2>
                            <AnimatedList
                                items={column1ListItems}
                                viewportOnce={false}
                                viewportAmount={0.5}
                                duration={0.6}
                                staggerDelay={0.08}
                                xOffset={40}
                                containerClassName="space-y-3 mb-6"
                                contentClassName="font-inter-display font-medium text-base sm:text-lg md:text-xl text-text-primary leading-relaxed flex-1"
                                itemClassName="flex items-start gap-3"
                                iconClassName="shrink-0 flex items-center pt-0.5"
                                boldText={false}
                            />
                            <p className="text-base sm:text-lg md:text-xl font-inter-display text-text-primary leading-tight font-medium pt-4 border-t border-neutral-200/80">
                                These programs are not passive. They require{" "}
                                <span className="font-semibold text-primary">focus</span>,{" "}
                                <span className="font-semibold text-primary">discipline</span>, and{" "}
                                <span className="font-semibold text-primary">curiosity</span>.
                            </p>
                        </div>
                        <div className="order-1 md:order-2 flex justify-center md:justify-end">
                            <img
                                src={generaladmission1Svg}
                                alt=""
                                className="w-full max-w-md aspect-square object-contain rounded-lg"
                            />
                        </div>
                    </div>
                </SectionBlock>

                {/* 2. Do you need prior experience? — image left, content right (zigzag) */}
                <SectionBlock>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
                        <div className="order-1 md:order-1 flex justify-center md:justify-start">
                            <img
                                src={generaladmission2Svg}
                                alt=""
                                className="w-full max-w-md aspect-square object-contain rounded-lg"
                            />
                        </div>
                        <div className="space-y-6 order-2 md:order-2">
                            <motion.h2
                                className="text-2xl sm:text-3xl md:text-4xl font-montserrat text-text-primary font-semibold tracking-tight leading-tight mb-6"
                                initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
                                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                Do you need prior cybersecurity experience?
                            </motion.h2>
                            <AnimatedList
                                items={column2ListItems}
                                viewportOnce={false}
                                viewportAmount={0.5}
                                duration={0.6}
                                staggerDelay={0.08}
                                xOffset={40}
                                containerClassName="space-y-3 mb-6"
                                contentClassName="font-inter-display font-medium text-base sm:text-lg md:text-xl text-text-primary leading-relaxed flex-1"
                                itemClassName="flex items-start gap-3"
                                iconClassName="shrink-0 flex items-center pt-0.5"
                                boldText={true}
                            />
                            <p className="text-base sm:text-lg md:text-xl font-inter-display text-text-primary leading-tight font-medium pt-4 border-t border-neutral-200/80">
                                Readiness and fit are evaluated through the{" "}
                                <span className="font-semibold text-primary">Request a Call Back</span> process, not automated rejection.
                                Every applicant gets a real conversation with our admissions team before decisions are made.
                            </p>
                        </div>
                    </div>
                </SectionBlock>

                {/* 3. Closing statement — no heading, only two paragraphs */}
                <div className="w-full mb-8 md:mb-10">
                    <div className="relative rounded-xl border border-neutral-200 bg-white overflow-hidden ring ring-neutral-200 ring-offset-4 md:ring-offset-8">
                        {/* Dashed grid background (fade at top) - same as CallToAction */}
                        <div
                            className="absolute inset-0 z-0 pointer-events-none"
                            style={callToActionGridStyle}
                        />
                        <div className="relative z-10 p-6 sm:p-8 md:p-10 lg:p-12">
                            <motion.div
                                initial={{ opacity: 0, y: 24 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                                className="space-y-5 sm:space-y-6"
                            >
                                <p className="text-base sm:text-lg md:text-xl font-inter-display font-medium text-text-primary leading-relaxed italic border-l-4 border-primary/40 pl-4 py-1">
                                    CYBERLABS programs are designed for learners who want to{" "}
                                    <span className="font-semibold text-primary not-italic">think</span>,{" "}
                                    <span className="font-semibold text-primary not-italic">investigate</span>, and{" "}
                                    <span className="font-semibold text-primary not-italic">operate</span>, not just collect certificates.
                                </p>
                                <p className="text-base sm:text-lg md:text-xl font-inter-display font-medium text-text-primary leading-relaxed italic border-l-4 border-primary/40 pl-4 py-1">
                                    If you are <span className="font-semibold text-primary not-italic">motivated</span>,{" "}
                                    <span className="font-semibold text-primary not-italic">curious</span>, and{" "}
                                    <span className="font-semibold text-primary not-italic">serious</span> about building a long-term cybersecurity career,
                                    your educational background will not limit you here.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default GeneralAdmission;
