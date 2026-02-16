import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { AnimatedList } from "./ui/animated-list";
import type { AnimatedListItem } from "./ui/animated-list";
import employeemeanSvg from "@/assets/img/Official certification/employeemean.svg";
import learnermeanSvg from "@/assets/img/Official certification/learnermean.svg";
import intrigitySvg from "@/assets/img/Official certification/intrigity.svg";

const WhatThisMean = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: false, margin: "-100px" });

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

    // Animated SVG Icon Components (always visible)
    const AnimatedNetworkIcon = () => (
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
                d="M6 9a6 6 0 1 0 12 0a6 6 0 0 0 -12 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M12 3c1.333 .333 2 2.333 2 6s-.667 5.667 -2 6"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M12 3c-1.333 .333 -2 2.333 -2 6s.667 5.667 2 6"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M6 9h12"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.1, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M3 20h7"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.4, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M14 20h7"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.7, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M10 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 2.0, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M12 15v3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 2.3, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    // Icon 2: Analyze - Conduct structured investigations and technical analysis
    const AnimatedAnalyzeIcon = () => (
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
                d="M20 11a8.1 8.1 0 0 0 -6.986 -6.918a8.095 8.095 0 0 0 -8.019 3.918"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M4 13a8.1 8.1 0 0 0 15 3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M18 16a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.0, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M4 8a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.3, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.6, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    // Icon 3: Checklist - Execute tasks under formal assessment conditions
    const AnimatedChecklistIcon = () => (
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
                d="M9.615 20h-2.615a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M14 19l2 2l4 -4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M9 8h4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.1, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M9 12h2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.4, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    // Icon 4: File Text Shield - Produce professional-grade reports and documentation
    const AnimatedFileTextShieldIcon = () => (
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
                d="M13 3v4a.997 .997 0 0 0 1 1h4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M11 21h-5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v3.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M8 9h1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.0, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M8 12.994l3 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.3, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M8 16.997l2 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.6, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M21 15.994c0 4 -2.5 6 -3.5 6s-3.5 -2 -3.5 -6c1 0 2.5 -.5 3.5 -1.5c1 1 2.5 1.5 3.5 1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.9, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    // Icon 5: Briefcase - Demonstrate judgment aligned with real cybersecurity roles
    const AnimatedBriefcaseIcon = () => (
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
                d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -9"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M12 12l0 .01"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.3, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M3 13a20 20 0 0 0 18 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.6, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    // Icon 6: Shield Check - Verified, assessed cybersecurity capability
    const AnimatedShieldCheckIcon = () => (
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
                d="M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M15 19l2 2l4 -4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.0, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    // Icon 7: Chart Bubble - Clear performance differentiation
    const AnimatedChartBubbleIcon = () => (
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
                d="M3 16a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M14 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M10 7.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0 -9 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    // Icon 8: User Shield - Confidence entering professional cyber roles
    const AnimatedUserShieldIcon = () => (
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
                d="M6 21v-2a4 4 0 0 1 4 -4h2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M22 16c0 4 -2.5 6 -3.5 6s-3.5 -2 -3.5 -6c1 0 2.5 -.5 3.5 -1.5c1 1 2.5 1.5 3.5 1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    // Icon 9: File Certificate - Credentials backed by real evaluation, not attendance
    const AnimatedFileCertificateIcon = () => (
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
                d="M14 3v4a1 1 0 0 0 1 1h4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M3 14a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.5, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    const employersListItems: AnimatedListItem[] = [
        { text: "Operate inside realistic cyber environments", icon: <AnimatedNetworkIcon /> },
        { text: "Conduct structured investigations and technical analysis", icon: <AnimatedAnalyzeIcon /> },
        { text: "Execute tasks under formal assessment conditions", icon: <AnimatedChecklistIcon /> },
        { text: "Produce professional-grade reports and documentation", icon: <AnimatedFileTextShieldIcon /> },
        { text: "Demonstrate judgment aligned with real cybersecurity roles", icon: <AnimatedBriefcaseIcon /> },
    ];

    const learnersListItems: AnimatedListItem[] = [
        { text: "Verified, assessed cybersecurity capability", icon: <AnimatedShieldCheckIcon /> },
        { text: "Clear performance differentiation", icon: <AnimatedChartBubbleIcon /> },
        { text: "Confidence entering professional cyber roles", icon: <AnimatedUserShieldIcon /> },
        { text: "Credentials backed by real evaluation, not attendance", icon: <AnimatedFileCertificateIcon /> },
    ];

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

    return (
        <section className="w-full px-5 md:px-10 lg:px-16 py-4 sm:py-6 lg:py-6" ref={containerRef}>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="w-full"
            >
                {/* 1. What This Means for Employers — content left, image right (zigzag start) */}
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
                                What This Means for Employers
                            </motion.h2>
                            <p className="text-base sm:text-lg md:text-xl font-inter-display font-semibold text-text-primary leading-relaxed mb-5">
                                CYBERLABS-certified professionals are comprehensively evaluated on their ability to:
                            </p>
                            <AnimatedList
                                items={employersListItems}
                                viewportOnce={false}
                                viewportAmount={0.5}
                                duration={0.6}
                                staggerDelay={0.1}
                                xOffset={50}
                                containerClassName="space-y-1 sm:space-y-1.5"
                                contentClassName="font-inter-display font-medium text-text-primary text-sm sm:text-base md:text-lg leading-relaxed flex-1"
                                itemClassName="flex items-start gap-2 sm:gap-3"
                                iconClassName="mt-0.5 shrink-0 flex items-center pt-0.5 text-primary"
                                boldText={false}
                            />
                            <p className="text-sm sm:text-base md:text-lg font-inter-display font-medium text-text-primary leading-relaxed pt-4 border-t border-neutral-200/80">
                                For employers, this provides transparent, skills-based validation, not just certificate issuance.
                            </p>
                        </div>
                        <div className="order-1 md:order-2 flex justify-center md:justify-end">
                            <img src={employeemeanSvg} alt="" className="w-full max-w-md h-auto" />
                        </div>
                    </div>
                </SectionBlock>

                {/* 2. What This Means for Learners — zigzag: image left, content right */}
                <SectionBlock>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
                        <div className="order-1 md:order-1 flex justify-center md:justify-start">
                            <img src={learnermeanSvg} alt="" className="w-full max-w-md h-auto" />
                        </div>
                        <div className="space-y-6 order-2 md:order-2">
                            <motion.h2
                                className="text-2xl sm:text-3xl md:text-4xl font-montserrat text-text-primary font-semibold tracking-tight leading-tight mb-6"
                                initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
                                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                What This Means for Learners
                            </motion.h2>
                            <p className="text-sm sm:text-base md:text-lg font-inter-display font-medium text-text-primary leading-relaxed mb-4">
                                For learners, certification represents:
                            </p>
                            <AnimatedList
                                items={learnersListItems}
                                viewportOnce={false}
                                viewportAmount={0.5}
                                duration={0.6}
                                staggerDelay={0.1}
                                xOffset={50}
                                containerClassName="space-y-1 sm:space-y-6"
                                contentClassName="font-inter-display font-medium text-text-primary text-sm sm:text-base md:text-lg leading-relaxed flex-1"
                                itemClassName="flex items-start gap-2 sm:gap-3"
                                iconClassName="mt-0.5 shrink-0 flex items-center pt-0.5 text-primary"
                                boldText={false}
                            />
                            <p className="text-sm sm:text-base md:text-lg font-inter-display font-medium text-text-primary leading-relaxed pt-4 border-t border-neutral-200/80">
                                This framework supports <span className="font-bold">long-term career credibility</span>, not short-term certification goals.
                            </p>
                        </div>
                    </div>
                </SectionBlock>

                {/* 3. Integrity, Transparency & Standards — content left, image right (zigzag) */}
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
                                Integrity, Transparency & Standards
                            </motion.h2>
                            <p className="text-sm sm:text-base md:text-lg font-inter-display font-medium text-text-primary leading-relaxed">
                                CYBERLABS does not issue certificates for mere participation.
                            </p>
                            <p className="text-sm sm:text-base md:text-lg font-inter-display font-medium text-text-primary leading-relaxed">
                                Certification is awarded <span className="font-bold">only upon successful completion of assessments and practical</span> requirements, ensuring fairness, credibility, and trust for learners, employers, and institutions alike.
                            </p>
                            <p className="text-base sm:text-lg md:text-xl font-inter-display font-semibold text-text-primary leading-relaxed italic border-l-4 border-primary/40 pl-4">
                                &ldquo;In cybersecurity, trust is earned through evidence.&rdquo;
                            </p>
                            <p className="text-base sm:text-lg md:text-xl font-inter-display font-semibold text-text-primary leading-relaxed">
                                CYBERLABS certification and evaluation framework ensures that every credential stands for{" "}
                                <span className="text-primary font-bold">Real Skill, Real Effort, and Real Readiness.</span>
                            </p>
                        </div>
                        <div className="order-1 md:order-2 flex justify-center md:justify-end">
                            <img src={intrigitySvg} alt="" className="w-full max-w-md h-auto" />
                        </div>
                    </div>
                </SectionBlock>
            </motion.div>
        </section>
    );
};

export default WhatThisMean;
