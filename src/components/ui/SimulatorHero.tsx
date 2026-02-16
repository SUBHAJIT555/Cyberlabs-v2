import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";
import { useInViewOnce } from "../../hooks/useInViewOnce.tsx";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { parseBoldText } from "@/lib/utils";

const SimulatorHero = () => {
    const { ref, visible } = useInViewOnce();
    const featuresRef = useRef(null);
    const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });

    // Animated SVG: device-desktop-analytics (Enterprise-Style Virtual Cyber Simulator)
    const AnimatedIcon1 = ({ isInView }: { isInView: boolean }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-12 h-12 sm:w-15 sm:h-15 text-primary shrink-0"
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
                d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1l0 -10"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M7 20h10"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.8, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M9 16v4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.2, delay: 1.1, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M15 16v4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.2, delay: 1.3, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M9 12v-4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 1.5, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M12 12v-1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.2, delay: 1.7, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M15 12v-2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 1.9, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M12 12v-1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.2, delay: 2.1, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    // Animated SVG: clipboard-search (Scenario-Based, Investigation-Driven Learning)
    const AnimatedIcon2 = ({ isInView }: { isInView: boolean }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-12 h-12 sm:w-15 sm:h-15 text-primary shrink-0"
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
                d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h4.5m7.5 -10v-4a2 2 0 0 0 -2 -2h-2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.8, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 1.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M20.2 20.2l1.8 1.8"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 1.7, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    // Animated SVG: user-screen (Live Instructor-Led Online Delivery)
    const AnimatedIcon3 = ({ isInView }: { isInView: boolean }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-12 h-12 sm:w-15 sm:h-15 text-primary shrink-0"
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
                d="M19.03 17.818a3 3 0 0 0 1.97 -2.818v-8a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -3 3v8c0 1.317 .85 2.436 2.03 2.84"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M10 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 1, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M8 21a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 1.4, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

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

    const items = [
        {
            title: "**Enterprise-Style Cyber Simulator**",
            body: "Realistic environments used for hands-on labs, assessments, and investigations.",
            Icon: AnimatedIcon1,
        },
        {
            title: "**Scenario & Investigation Driven**",
            body: "Learners analyze failures, trace attacks, and make real decisions under guided conditions.",
            Icon: AnimatedIcon2,
        },
        {
            title: "**Instructor-Led, Online & Live**",
            body: "Operational mentors explain **why** actions are taken - not just **how**.",
            Icon: AnimatedIcon3,
        },
    ];

    return (
        <section
            ref={ref}
            className="relative min-h-screen w-full overflow-x-hidden overflow-y-auto"
        >
            {/* Fallback Background */}
            <div className="absolute inset-0 bg-linear-to-br from-background via-neutral-200 to-background" />

            {/* DottedGlowBackground */}
            <DottedGlowBackground
                gap={12}
                radius={2}
                opacity={0.5}
                speedScale={1}
                blur={2}
                color="rgba(43, 13, 62, 0.4)"
                glowColor="rgba(122, 63, 145, 0.7)"
                colorLightVar="--green-light"
                glowColorLightVar="--primary"
                colorDarkVar="--evening-dark"
                glowColorDarkVar="--text-primary"
            />

            {/* Vintage Masking Overlay - Top, Bottom, and Sides */}
            <div className="absolute inset-0 z-5 pointer-events-none">
                {/* Top Mask */}
                <div
                    className="absolute top-0 left-0 w-full h-1/3"
                    style={{
                        background:
                            "linear-gradient(to bottom, rgba(245, 245, 245, 1) 0%, rgba(245, 245, 245, 0.8) 30%, rgba(245, 245, 245, 0) 100%)",
                    }}
                />
                {/* Bottom Mask */}
                <div
                    className="absolute bottom-0 left-0 w-full h-1/3"
                    style={{
                        background:
                            "linear-gradient(to top, rgba(245, 245, 245, 1) 0%, rgba(245, 245, 245, 0.8) 30%, rgba(245, 245, 245, 0) 100%)",
                    }}
                />
                {/* Left Side Mask */}
                <div
                    className="absolute top-0 left-0 h-full w-1/3"
                    style={{
                        background:
                            "linear-gradient(to right, rgba(245, 245, 245, 1) 0%, rgba(245, 245, 245, 0.8) 30%, rgba(245, 245, 245, 0) 100%)",
                    }}
                />
                {/* Right Side Mask */}
                <div
                    className="absolute top-0 right-0 h-full w-1/3"
                    style={{
                        background:
                            "linear-gradient(to left, rgba(245, 245, 245, 1) 0%, rgba(245, 245, 245, 0.8) 30%, rgba(245, 245, 245, 0) 100%)",
                    }}
                />
                {/* Radial Vignette for Vintage Look */}
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(245, 245, 245, 0.3) 70%, rgba(245, 245, 245, 0.8) 100%)",
                    }}
                />
            </div>

            {/* Content */}
            <div
                className={`
          relative z-10 flex items-start md:items-center justify-center min-h-0 md:min-h-screen px-3 sm:px-6 md:px-8 lg:px-12 pt-16 sm:pt-20 md:pt-16
          transition-all duration-700 ease-out
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        `}
            >
                <div className="w-full max-w-7xl">
                    {/* Heading */}
                    <div className="text-center mb-2 sm:mb-3 md:mb-5 overflow-x-hidden">
                        <h2 className="text-lg xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl font-inter-display mb-1 sm:mb-2 tracking-tight leading-tight font-bold text-text-primary">
                            Learn Cybersecurity by <span className="text-primary relative inline-block">
                                <span className="relative z-10">Operating Inside It</span>
                                <span className="absolute -bottom-1 left-0 right-0 h-2 bg-primary/20 blur-xl"></
                                span>
                            </span>
                        </h2>
                    </div>

                    {/* Tagline */}
                    <div className="text-center mb-4 sm:mb-6 md:mb-8 overflow-x-hidden">
                        <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-montserrat font-bold text-text-primary">
                            Not Slides. Not Demos. Real Cyber Environments.
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="max-w-7xl mx-auto space-y-3 sm:space-y-4 md:space-y-5 mb-6 sm:mb-8 md:mb-8 pb-8 sm:pb-12 md:pb-0">
                        {/* First Paragraph */}
                        <p
                            className="text-xs xs:text-sm sm:text-lg md:text-lg lg:text-xl font-montserrat font-medium leading-relaxed text-text-primary text-center"
                            style={{ textShadow: "0 2px 22px #fff, 0 1px 4px #fff, 0 0px 0px #fff" }}
                        >
                            {parseBoldText("CYBERLABS delivers a simulation-driven learning environment where cybersecurity is learned by **executing, investigating, and responding** inside realistic virtual systems - guided by live instructors.")}
                        </p>

                        {/* Second Paragraph */}
                        <p
                            className="text-xs xs:text-sm sm:text-lg md:text-lg lg:text-xl font-montserrat font-medium leading-relaxed text-text-primary text-center"
                            style={{ textShadow: "0 2px 22px #fff, 0 1px 4px #fff, 0 0px 0px #fff" }}
                        >
                            {parseBoldText("This is operational training built for **real-world readiness**, not passive learning.")}
                        </p>

                        {/* Horizontal Separator */}
                        <div className="pb-6 sm:pb-8 md:pb-10"></div>

                        {/* Feature Cards */}
                        <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 pb-4 sm:pb-6 md:pb-0">
                            {items.map((item, index) => {
                                const IconComponent = item.Icon;
                                return (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        initial="hidden"
                                        animate={featuresInView ? "visible" : "hidden"}
                                        className=" rounded-md p-4 sm:p-6 md:p-8 group"
                                    >
                                        <div className="flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
                                            <IconComponent isInView={featuresInView} />
                                        </div>
                                        <h4 className="text-center text-sm xs:text-base sm:text-lg md:text-xl font-inter-display text-primary font-semibold leading-tight tracking-tight mb-2 sm:mb-3 md:mb-4 gap-2 sm:gap-3">
                                            <span>{parseBoldText(item.title)}</span>
                                        </h4>
                                        <p
                                            className="text-xs xs:text-sm sm:text-base font-montserrat font-medium text-text-primary leading-relaxed text-center"
                                            style={{ textShadow: "0 2px 22px #fff, 0 1px 4px #fff, 0 0px 0px #fff" }}
                                        >
                                            {parseBoldText(item.body)}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Horizontal Separator */}
                        <div className="pb-6 sm:pb-8 md:pb-10"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SimulatorHero;
