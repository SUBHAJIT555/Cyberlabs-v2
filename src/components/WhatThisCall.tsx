import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AnimatedHeading } from "./ui/animated-heading";
import { AnimatedList } from "./ui/animated-list";
import type { AnimatedListItem } from "./ui/animated-list";
import closingSvg from "@/assets/img/Learning-Enviorment/reqcallback.svg";

const WhatThisCall = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: false, margin: "-100px" });
    const headingRef = useRef<HTMLDivElement>(null);
    const card1TitleRef = useRef<HTMLDivElement>(null);
    const card1TitleInView = useInView(card1TitleRef, { once: false, margin: "-80px" });
    const card2TitleRef = useRef<HTMLDivElement>(null);
    const card2TitleInView = useInView(card2TitleRef, { once: false, margin: "-80px" });

    const steps = [
        {
            number: 1,
            title: "Understand which program best fits your current experience",
            description: "We'll discuss your background, goals, and help you identify the program that aligns best with your current experience and career aspirations.",
        },
        {
            number: 2,
            title: "Assess readiness for advanced, simulation-driven learning",
            description: "We'll evaluate your technical foundation and determine if you're prepared for our rigorous, hands-on approach to cybersecurity training.",
        },
        {
            number: 3,
            title: "Clarify learning structure, time commitment, and expectations",
            description: "We'll explain our curriculum structure, the time investment required, and what you can expect from the learning experience and outcomes.",
        },
        {
            number: 4,
            title: "Understand certification, assessments, and career pathways",
            description: "We'll walk you through our certification framework, assessment methods, and how our programs prepare you for real-world cybersecurity roles.",
        },
        {
            number: 5,
            title: "Address questions from professionals, parents, or sponsors",
            description: "We'll answer any questions you have about program rigor, outcomes, investment, and how it fits into your or your sponsored student's career path.",
        },
    ];

    const whoShouldCall = [
        {
            title: "Aspiring cybersecurity professionals and career switchers",
            description: "Whether you're starting fresh or transitioning from another field, we'll help you understand how our programs can build your cybersecurity foundation and accelerate your career change.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M8 16l2 -6l6 -2l-2 6l-6 2" />
                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                    <path d="M12 3l0 2" />
                    <path d="M12 19l0 2" />
                    <path d="M3 12l2 0" />
                    <path d="M19 12l2 0" />
                </svg>
            ),
        },
        {
            title: "Working IT, engineering, or security professionals",
            description: "For professionals already in tech, we'll discuss how our advanced programs can deepen your expertise and prepare you for specialized cybersecurity roles.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1l0 -10" />
                    <path d="M7 20h10" />
                    <path d="M9 16v4" />
                    <path d="M15 16v4" />
                    <path d="M9 12v-4" />
                    <path d="M12 12v-1" />
                    <path d="M15 12v-2" />
                    <path d="M12 12v-1" />
                </svg>
            ),
        },
        {
            title: "Individuals considering advanced investigation or platform security roles",
            description: "If you're interested in digital forensics, incident response, or platform security, we'll explain how our programs align with these specialized career paths.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
                    <path d="M11 11a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    <path d="M12 12l0 2.5" />
                </svg>
            ),
        },
        {
            title: "Parents or sponsors evaluating program rigor and outcomes",
            description: "We'll provide transparent information about program structure, time commitment, certification value, and career outcomes to help you make an informed decision.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9.615 20h-2.615a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8" />
                    <path d="M14 19l2 2l4 -4" />
                    <path d="M9 8h4" />
                    <path d="M9 12h2" />
                </svg>
            ),
        },
        {
            title: "Enterprises or institutions exploring structured cyber training",
            description: "For organizations looking to upskill teams, we'll discuss our enterprise training options, curriculum alignment, and how we can support your cybersecurity workforce development.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 21l18 0" />
                    <path d="M5 21v-14l8 -4v18" />
                    <path d="M19 21v-10l-6 -4" />
                    <path d="M9 9l0 .01" />
                    <path d="M9 12l0 .01" />
                    <path d="M9 15l0 .01" />
                    <path d="M9 18l0 .01" />
                </svg>
            ),
        },
    ];

    const stepsListItems: AnimatedListItem[] = steps.map((step) => ({
        text: step.title,
        icon: (
            <div className="shrink-0 w-8 h-8 sm:w-8 sm:h-8 rounded-lg ring ring-neutral-200 ring-offset-2 md:ring-offset-4 flex items-center justify-center font-montserrat font-bold text-sm sm:text-base bg-primary text-background">
                {step.number}
            </div>
        )
    }));

    const whoShouldCallListItems: AnimatedListItem[] = whoShouldCall.map((item) => ({
        text: item.title,
        icon: (
            <div className="shrink-0 w-8 h-8 sm:w-8 sm:h-8 rounded-lg ring ring-neutral-200 ring-offset-2 md:ring-offset-4 flex items-center justify-center bg-primary text-background [&_svg]:text-background">
                {item.icon}
            </div>
        ),
    }));

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

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    const dashedCenterFadeGridStyle = {
        backgroundImage: `
            linear-gradient(to right, #e7e5e4 1px, transparent 1px),
            linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
        `,
        backgroundSize: "10px 10px",
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
            radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
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
            radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
        `,
        maskComposite: "intersect" as const,
        WebkitMaskComposite: "source-in" as const,
    };

    return (
        <section className="w-full py-4 md:py-8" ref={containerRef}>
            <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-3 md:space-y-4"
                >
                    {/* Closing statement — image left, content right */}
                    <motion.div
                        ref={headingRef}
                        initial={{ opacity: 0, y: 24 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="relative rounded-xl border border-neutral-200 bg-white overflow-hidden ring ring-neutral-200 ring-offset-4 md:ring-offset-8 mb-8 md:mb-10"
                    >
                        {/* Dashed grid background (fade at top) */}
                        <div
                            className="absolute inset-0 z-0"
                            style={{
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
                                maskComposite: "intersect",
                                WebkitMaskComposite: "source-in",
                            }}
                        />
                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 sm:gap-8 md:gap-10 items-center p-6 sm:p-8 md:p-10 lg:p-12">
                            <div className="order-1 md:order-1 flex justify-center md:justify-start shrink-0">
                                <img src={closingSvg} alt="" className="w-full max-w-[200px] sm:max-w-[240px] md:w-[200px] md:max-w-none lg:w-[260px] h-auto" />
                            </div>
                            <div className="order-2 md:order-2 space-y-5 sm:space-y-6 text-center md:text-left">
                                <motion.p
                                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-inter-display font-semibold text-text-primary leading-snug"
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                >
                                    <span className="block sm:inline">Speak With a CYBERLABS Admissions Advisor</span>
                                    <span className="block mt-2 sm:mt-3 text-primary font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Choosing the right cybersecurity program is a serious decision.</span>
                                </motion.p>
                                <div className="w-16 sm:w-20 h-0.5 bg-primary/30 mx-auto md:mx-0" aria-hidden />
                                <div className="space-y-4 sm:space-y-5">
                                    <p className="text-base sm:text-lg md:text-xl font-inter-display font-medium text-text-primary leading-relaxed">
                                        Our programs are <span className="font-bold text-primary">rigorous, time-intensive, and designed to prepare you for real-world cybersecurity roles.</span> Before you enroll, we want to ensure the program you choose aligns with your background, goals,
                                        and career direction.
                                    </p>
                                    <p className="text-sm sm:text-base md:text-lg font-montserrat font-medium text-text-primary/90 leading-relaxed">
                                        Request a call back to speak with a CYBERLABS admissions advisor and receive a guided, one-to-one consultation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Grid Structure */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
                    >
                        {/* Card 1: What This Call Is For */}
                        <motion.div variants={itemVariants}>
                            <Card className="relative h-full border border-neutral-200 bg-white overflow-hidden ring ring-neutral-200 ring-offset-4 md:ring-offset-8 rounded-xl">
                                <div className="absolute inset-0 z-0 pointer-events-none" style={dashedCenterFadeGridStyle} />
                                <CardHeader className="relative z-10 p-6 md:p-8">
                                    <div ref={card1TitleRef} className="mb-4">
                                        <AnimatedHeading
                                            inView={card1TitleInView}
                                            lines={[
                                                { text: "What This Call is For", className: "text-xl sm:text-3xl md:text-4xl font-montserrat font-semibold text-text-primary leading-tight tracking-tight", as: "h3" },
                                            ]}
                                        />
                                    </div>

                                    <p className="text-sm sm:text-base md:text-lg font-inter-display font-semibold text-text-primary leading-relaxed mb-6">
                                        This is <span className="font-bold text-primary">not a sales call.</span>
                                    </p>
                                    <p className="text-sm sm:text-base md:text-lg font-inter-display font-semibold text-text-primary leading-relaxed mb-6">During the conversation, we will help you:</p>
                                    <AnimatedList
                                        items={stepsListItems}
                                        viewportOnce={false}
                                        viewportAmount={0.5}
                                        duration={0.6}
                                        staggerDelay={0.1}
                                        xOffset={50}
                                        containerClassName="space-y-3 sm:space-y-4"
                                        contentClassName="flex-1 text-sm sm:text-base md:text-lg font-inter-display font-medium text-text-primary leading-relaxed"
                                        itemClassName="flex items-center gap-3 sm:gap-4 pb-3 sm:pb-4 border-b border-neutral-200 last:border-b-0 last:pb-0"
                                        iconClassName="shrink-0 flex items-center justify-center pt-0.5"
                                        boldText={false}
                                    />
                                </CardHeader>
                                <CardContent className="relative z-10 p-6 md:p-8 pt-0 -mt-2 sm:-mt-3">
                                    <p className="text-base sm:text-lg md:text-xl font-inter-display font-semibold text-text-primary leading-relaxed">
                                        Our goal is to ensure mutual fit, not just enrollment.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Card 2: Who Should Request a Call Back */}
                        <motion.div variants={itemVariants}>
                            <Card className="relative h-full border border-neutral-200 bg-white overflow-hidden ring ring-neutral-200 ring-offset-4 md:ring-offset-8 rounded-xl">
                                <div className="absolute inset-0 z-0 pointer-events-none" style={dashedCenterFadeGridStyle} />
                                <CardHeader className="relative z-10 p-6 md:p-8">
                                    <div ref={card2TitleRef} className="mb-8 md:mb-10">
                                        <AnimatedHeading
                                            inView={card2TitleInView}
                                            lines={[
                                                { text: "Who Should Request a Call Back", className: "text-xl sm:text-3xl md:text-4xl font-montserrat font-semibold text-text-primary leading-tight tracking-tight", as: "h3" },
                                            ]}
                                        />
                                    </div>
                                    <AnimatedList
                                        items={whoShouldCallListItems}
                                        viewportOnce={false}
                                        viewportAmount={0.5}
                                        duration={0.6}
                                        staggerDelay={0.1}
                                        xOffset={50}
                                        containerClassName="space-y-3 sm:space-y-4"
                                        contentClassName="flex-1 text-sm sm:text-base md:text-lg font-inter-display font-medium text-text-primary leading-relaxed"
                                        itemClassName="flex items-center gap-3 sm:gap-4 pb-3 sm:pb-4 border-b border-neutral-200 last:border-b-0 last:pb-0"
                                        iconClassName="shrink-0 flex items-center justify-center pt-0.5 [&_svg]:text-background"
                                        boldText={false}
                                    />
                                </CardHeader>
                                <CardContent className="relative z-10 p-6 md:p-8 pt-0 -mt-2 sm:-mt-3">
                                    <p className="text-base sm:text-lg md:text-xl font-inter-display font-semibold text-text-primary leading-relaxed">
                                        If you are serious about building real cybersecurity capability, this call is for you.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhatThisCall;
