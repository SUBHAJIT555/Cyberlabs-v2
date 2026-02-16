import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useInViewOnce } from "../hooks/useInViewOnce.tsx";
import type { Variants } from "framer-motion";
import { AnimatedHeading } from "./ui/animated-heading";
import { AnimatedList } from "./ui/animated-list";
import type { AnimatedListItem } from "./ui/animated-list";

const bulletIcon = <span className="text-primary text-xl sm:text-2xl mt-0.5 shrink-0 font-bold">•</span>;

const WhoApplyAdmission = () => {
    const { ref, visible } = useInViewOnce();
    const headingRef = useRef<HTMLDivElement>(null);
    const headingInView = useInView(headingRef, { once: false, margin: "-100px" });

    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };



    const programs = [
        {
            name: "Cybercrime, Dark Web & Crypto Investigations",
            educationalBackground: [
                "Computer Science / IT",
                "Engineering (any branch)",
                "Commerce / Finance / Economics",
                "Law, Criminology, or Criminal Justice"
            ],
            bestFor: [
                "Aspiring cybercrime investigators",
                "Fintech, AML & fraud analysts",
                "Intelligence & compliance professionals",
                "Individuals interested in digital investigations & attribution"
            ],
            notRecommended: [
                "Candidates with no interest in investigation or analysis",
                "Those seeking purely technical or coding-focused roles"
            ]
        },
        {
            name: "Platform, Identity & Abuse Defense Engineering",
            educationalBackground: [
                "Computer Science / IT",
                "Engineering (Software, Electronics, Telecom)",
                "Mathematics / Data-focused degrees"
            ],
            bestFor: [
                "Platform security & Trust & Safety aspirants",
                "Product, identity & abuse prevention roles",
                "SaaS, fintech & marketplace security teams"
            ],
            notRecommended: [
                "Candidates without interest in systems, platforms, or applications",
                "Those expecting traditional \"ethical hacking\" content"
            ]
        },
        {
            name: "Full-Stack Cyber Defense & Offensive Security",
            educationalBackground: [
                "Any graduate or final-year student",
                "Engineering / Science / IT preferred but not mandatory"
            ],
            bestFor: [
                "Beginners seeking structured entry into cybersecurity",
                "Career switchers from non-cyber backgrounds",
                "Students building end-to-end cyber capability"
            ],
            notRecommended: [
                "Candidates looking for a short or casual program",
                "Those unwilling to commit to a long, intensive learning journey"
            ]
        }
    ];

    return (
        <section
            ref={ref}
            className="w-full mx-auto px-5 md:px-10 lg:px-16 py-8 sm:py-12 lg:py-16 bg-bg"
        >
            {/* Main Heading */}
            <div ref={headingRef} className="mb-8 sm:mb-10 md:mb-12">
                <AnimatedHeading
                    inView={headingInView}
                    lines={[
                        { text: "Who Should Apply – ", className: "text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-inter-display text-text-primary leading-tight tracking-tight font-semibold" },
                        { text: "Program Alignment Guide", className: "text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-inter-display text-primary leading-tight tracking-tight font-semibold", startDelay: 0.2 },
                    ]}
                />
            </div>

            {/* Programs Grid */}
            <motion.div
                initial="hidden"
                animate={visible ? "visible" : "hidden"}
                variants={staggerContainer}
                className="space-y-6 sm:space-8 md:space-10"
            >
                {programs.map((program, index) => (
                    <motion.div
                        key={index}
                        variants={fadeInUp}
                        className="border border-neutral-300 border-dashed rounded-md overflow-hidden p-6 sm:p-8 md:p-10 lg:p-12"
                        style={{
                            background:
                                "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                        }}
                    >
                        {/* Program Name Header */}
                        <div className="border-b border-neutral-300 border-dashed pb-6 sm:pb-8 mb-6 sm:mb-8">
                            <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-inter-display font-semibold text-text-primary leading-tight tracking-tight">
                                {program.name}
                            </h3>
                        </div>

                        {/* Table Content */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                            {/* Educational Background */}
                            <div className="border-b lg:border-b-0 lg:border-r border-neutral-300 border-dashed pt-6 md:pt-0 md:pl-6 lg:pl-8 md:pr-6 lg:pr-8 pb-6 md:pb-0">
                                <h4 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-inter-display font-semibold text-text-primary leading-tight mb-4 sm:mb-6 tracking-tight">
                                    Educational Background
                                </h4>
                                <AnimatedList
                                    items={program.educationalBackground.map((text): AnimatedListItem => ({ text, icon: bulletIcon }))}
                                    viewportOnce={false}
                                    viewportAmount={0.5}
                                    duration={0.6}
                                    staggerDelay={0.08}
                                    xOffset={40}
                                    containerClassName="space-y-3"
                                    contentClassName="font-inter-display font-medium text-base sm:text-lg md:text-xl text-text-primary leading-relaxed flex-1"
                                    itemClassName="flex items-start gap-3"
                                    iconClassName="shrink-0 flex items-center pt-0.5"
                                    boldText={false}
                                />
                            </div>

                            {/* Who This Is Best For */}
                            <div className="border-b lg:border-b-0 lg:border-r border-neutral-300 border-dashed pt-6 md:pt-0 md:pl-6 lg:pl-8 md:pr-6 lg:pr-8 pb-6 md:pb-0">
                                <h4 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-inter-display font-semibold text-text-primary leading-tight mb-4 sm:mb-6 tracking-tight">
                                    Who This Is Best For
                                </h4>
                                <AnimatedList
                                    items={program.bestFor.map((text): AnimatedListItem => ({ text, icon: bulletIcon }))}
                                    viewportOnce={false}
                                    viewportAmount={0.5}
                                    duration={0.6}
                                    staggerDelay={0.08}
                                    xOffset={40}
                                    containerClassName="space-y-3"
                                    contentClassName="font-inter-display font-medium text-base sm:text-lg md:text-xl text-text-primary leading-relaxed flex-1"
                                    itemClassName="flex items-start gap-3"
                                    iconClassName="shrink-0 flex items-center pt-0.5"
                                    boldText={false}
                                />
                            </div>

                            {/* Not Recommended For */}
                            <div className="pt-6 md:pt-0 md:pl-6 lg:pl-8">
                                <h4 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-inter-display font-semibold text-text-primary leading-tight mb-4 sm:mb-6 tracking-tight">
                                    Not Recommended For
                                </h4>
                                <AnimatedList
                                    items={program.notRecommended.map((text): AnimatedListItem => ({ text, icon: bulletIcon }))}
                                    viewportOnce={false}
                                    viewportAmount={0.5}
                                    duration={0.6}
                                    staggerDelay={0.08}
                                    xOffset={40}
                                    containerClassName="space-y-3"
                                    contentClassName="font-inter-display font-medium text-base sm:text-lg md:text-xl text-text-primary leading-relaxed flex-1"
                                    itemClassName="flex items-start gap-3"
                                    iconClassName="shrink-0 flex items-center pt-0.5"
                                    boldText={false}
                                />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default WhoApplyAdmission;