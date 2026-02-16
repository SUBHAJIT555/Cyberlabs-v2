import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";
import { AnimatedHeading } from "./ui/animated-heading";
import { AnimatedList } from "./ui/animated-list";
import type { AnimatedListItem } from "./ui/animated-list";
import aspiringImage from "../assets/img/Learning-Enviorment/aspiring.webp";
import workingImage from "../assets/img/Learning-Enviorment/working-professionals.webp";
import enterpriseImage from "../assets/img/Learning-Enviorment/enterprises-developing-internal.webp";

const AboutWho = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: false, margin: "-100px" });
    const headingRef = useRef<HTMLDivElement>(null);
    const headingInView = useInView(headingRef, { once: false, margin: "-100px" });
    const whoIconsRef = useRef(null);
    const whoIconsInView = useInView(whoIconsRef, { once: false, margin: "-100px" });
    // Animated SVG: user-plus (Aspiring cybersecurity professionals)
    const AnimatedUserPlusIcon = ({ isInView }: { isInView: boolean }) => (
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
            className="w-5 h-5 text-primary shrink-0"
        >
            <motion.path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M16 19h6"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.2, delay: 0.6, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M19 16v6"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.2, delay: 0.7, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M6 21v-2a4 4 0 0 1 4 -4h4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.8, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    // Animated SVG: switch-horizontal (Career switchers)
    const AnimatedSwitchHorizontalIcon = ({ isInView }: { isInView: boolean }) => (
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
            className="w-5 h-5 text-primary shrink-0"
        >
            <motion.path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M16 3l4 4l-4 4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M10 7l10 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.5, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M8 13l-4 4l4 4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.7, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M4 17l9 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 1, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    // Animated SVG: user-cog (Working professionals)
    const AnimatedUserCogIcon2 = ({ isInView }: { isInView: boolean }) => (
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
            className="w-5 h-5 text-primary shrink-0"
        >
            <motion.path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M6 21v-2a4 4 0 0 1 4 -4h2.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.6, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M17.001 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 1, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M19.001 15.5v1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.2, delay: 1.3, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M19.001 21v1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.2, delay: 1.4, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M22.032 17.25l-1.299 .75"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 1.5, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M17.27 20l-1.3 .75"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 1.6, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M15.97 17.25l1.3 .75"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 1.7, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M20.733 20l1.3 .75"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 1.8, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    // Animated SVG: building-skyscraper (Organizations)
    const AnimatedBuildingSkyscraperIcon = ({ isInView }: { isInView: boolean }) => (
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
            className="w-5 h-5 text-primary shrink-0"
        >
            <motion.path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M3 21l18 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M5 21v-14l8 -4v18"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.4, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M19 21v-10l-6 -4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.9, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M9 9l0 .01"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.1, delay: 1.3, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M9 12l0 .01"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.1, delay: 1.4, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M9 15l0 .01"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.1, delay: 1.5, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M9 18l0 .01"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.1, delay: 1.6, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

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
        hidden: {
            opacity: 0,
            y: 30,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    const whoListItems: AnimatedListItem[] = [
        { text: "Aspiring cybersecurity professionals", icon: <AnimatedUserPlusIcon isInView={whoIconsInView} /> },
        { text: "Career switchers seeking structured, serious entry", icon: <AnimatedSwitchHorizontalIcon isInView={whoIconsInView} /> },
        { text: "Working professionals advancing into advanced roles", icon: <AnimatedUserCogIcon2 isInView={whoIconsInView} /> },
        { text: "Organizations seeking operationally ready talent", icon: <AnimatedBuildingSkyscraperIcon isInView={whoIconsInView} /> },
    ];

    return (
        <section className="w-full bg-background py-8 md:py-12 lg:py-16" ref={containerRef}>
            <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {/* Who CYBERLABS Is Built For Section - Heading */}
                    <motion.div variants={itemVariants} className="mb-12 md:mb-16 text-center">
                        <AnimatedHeading
                            ref={headingRef as React.RefObject<HTMLDivElement>}
                            inView={headingInView}
                            lines={[
                                { text: "Who CYBERLABS Is Built For", className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-montserrat text-text-primary font-semibold tracking-tight leading-tight md:leading-normal mb-6" },
                            ]}
                        />
                        <p className="text-lg sm:text-xl md:text-2xl font-inter-display text-text-primary leading-relaxed font-medium max-w-4xl mx-auto">
                            CYBERLABS is built for individuals and organizations that value <span className="text-primary font-bold">capability over certificates</span>, including:
                        </p>
                    </motion.div>

                    {/* Bento Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {/* Card 1 - Who It's Built For with Image (from left on scroll) */}
                        <motion.div
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="lg:col-span-2 border border-neutral-300 border-dashed rounded-lg overflow-hidden group"
                            style={{
                                background:
                                    "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                            }}
                        >
                            <div className="grid md:grid-cols-2 gap-0">
                                {/* Image Side */}
                                <div className="relative h-64 md:h-full min-h-[300px] overflow-hidden">
                                    <img
                                        src={aspiringImage}
                                        alt="Aspiring professionals"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div
                                        className="absolute inset-0"
                                        style={{
                                            background: "linear-gradient(to top, rgba(0, 0, 0, 0.3), transparent)"
                                        }}
                                    />
                                </div>

                                {/* Content Side */}
                                <div className="p-6 md:p-8 flex flex-col justify-center">
                                    <div ref={whoIconsRef}>
                                        <AnimatedList
                                            items={whoListItems}
                                            viewportOnce={false}
                                            viewportAmount={0.5}
                                            duration={0.6}
                                            staggerDelay={0.1}
                                            xOffset={50}
                                            containerClassName="space-y-4 mb-6"
                                            contentClassName="text-base sm:text-lg md:text-xl font-inter-display text-text-primary font-medium leading-tight"
                                            itemClassName="flex items-start gap-3"
                                            iconClassName="text-text-primary shrink-0 flex items-center pt-0.5"
                                            boldText={false}
                                        />
                                    </div>
                                    <p className="text-base sm:text-lg md:text-xl font-inter-display text-text-primary leading-relaxed font-semibold pt-4 border-t border-neutral-300 border-dashed">
                                        If you are serious about building a <span className="text-primary font-bold">long-term cybersecurity career</span>, CYBERLABS is designed for you.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 2 - A Long-Term Vision (from right on scroll) */}
                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="border border-neutral-300 border-dashed rounded-lg p-6 md:p-8 relative overflow-hidden group"
                            style={{
                                background:
                                    "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                            }}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-300">
                                <img
                                    src={workingImage}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="relative z-10 h-full flex flex-col">
                                <div className="mb-6">
                                    <motion.h3
                                        className="text-xl sm:text-2xl md:text-3xl font-montserrat text-text-primary font-semibold tracking-tight leading-tight"
                                        initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
                                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                        viewport={{ once: false, amount: 0.2 }}
                                        transition={{ duration: 1, ease: "easeOut" }}
                                    >
                                        A Long-Term Vision
                                    </motion.h3>
                                </div>
                                <div className="space-y-4 flex-1">
                                    <p className="text-base sm:text-lg md:text-xl font-inter-display text-text-primary leading-tight font-medium">
                                        CYBERLABS is not a short-term training provider.
                                    </p>
                                    <p className="text-base sm:text-lg md:text-xl font-inter-display text-text-primary leading-relaxed font-medium">
                                        We are building a long-term cybersecurity education ecosystem - aligned with <span className="text-primary font-bold">global standards</span>, grounded in <span className="text-primary font-bold">real operations</span>, and designed to evolve alongside the threat landscape.
                                    </p>
                                    <p className="text-base sm:text-lg md:text-xl font-inter-display text-text-primary leading-relaxed font-medium mt-auto">
                                        Our focus is not on trends. It is on producing professionals who can <span className="text-primary font-bold">operate when it matters</span>.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 3 - Built by Practitioners - Full Width (from bottom on scroll) */}
                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="lg:col-span-3 border border-neutral-300 border-dashed rounded-lg overflow-hidden group"
                            style={{
                                background:
                                    "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                            }}
                        >
                            <div className="grid md:grid-cols-3 gap-0">
                                {/* Image */}
                                <div className="relative h-64 md:h-auto min-h-[300px] overflow-hidden order-2 md:order-1">
                                    <img
                                        src={enterpriseImage}
                                        alt="Enterprise"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div
                                        className="absolute inset-0"
                                        style={{
                                            background: "linear-gradient(to right, rgba(0, 0, 0, 0.2), transparent)"
                                        }}
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6 md:p-8 md:col-span-2 flex flex-col justify-center order-1 md:order-2">

                                    <div className="space-y-4">
                                        <p className="text-lg sm:text-xl md:text-2xl font-inter-display text-text-primary leading-relaxed font-medium">
                                            CYBERLABS was built by people who have <span className="text-primary font-bold">lived cybersecurity</span>, not just studied it.
                                        </p>
                                        <div className="my-6 md:my-12 h-px w-full bg-neutral-300"> </div>
                                        <p className="text-lg sm:text-xl md:text-2xl font-inter-display text-text-primary leading-relaxed font-medium">
                                            With <span className="text-primary font-bold">Israel-founded roots</span>, a global framework led by <span className="text-primary font-bold">CYBERLABS USA</span>, and practitioner-driven instruction delivered in India through <span className="text-primary font-bold">Cyveritas Technologies LLP</span>, CYBERLABS represents a new standard in cybersecurity education - <span className="text-primary font-bold">serious, operational, and trusted</span>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutWho;
