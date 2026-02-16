import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";
import { useInViewOnce } from "../hooks/useInViewOnce.tsx";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { parseBoldText } from "@/lib/utils";

const CertificationHero = () => {
    const { ref, visible } = useInViewOnce();
    const featuresRef = useRef(null);
    const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });

    // Animated SVG: shield-check (Capability-Based Certification)
    const AnimatedShieldCheckIcon = ({ isInView }: { isInView: boolean }) => (
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
                d="M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M15 19l2 2l4 -4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 1, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    // Animated SVG: settings (Assessment-Driven Evaluation)
    const AnimatedSettingsIcon = ({ isInView }: { isInView: boolean }) => (
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
                d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 1, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 1.2, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    // Animated SVG: world (Industry-Aligned & Role-Relevant)
    const AnimatedWorldIcon = ({ isInView }: { isInView: boolean }) => (
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
                d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M3.6 9h16.8"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 1, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M3.6 15h16.8"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 1.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M11.5 3a17 17 0 0 0 0 18"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 1.4, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M12.5 3a17 17 0 0 1 0 18"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 1.6, repeat: Infinity, repeatDelay: 3 }}
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
            title: "**Capability-Based Certification**",
            body: "Credentials issued only after verified practical competence.",
            Icon: AnimatedShieldCheckIcon,
        },
        {
            title: "**Assessment-Driven Evaluation**",
            body: "Hands-on labs, scenarios, and real execution - not memory-based exams.",
            Icon: AnimatedSettingsIcon,
        },
        {
            title: "**Industry-Aligned & Role-Relevant**",
            body: "Mapped to global cybersecurity role expectations, not exam shortcuts.",
            Icon: AnimatedWorldIcon,
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
            {/* py-8 sm:py-12 md:py-8 lg:py-10  pb-12 sm:pb-16 md:pb-8 */}
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
                            Credibility Through Capability. Not Just Completion.
                        </h2>
                    </div>

                    {/* Tagline */}
                    <div className="text-center mb-4 sm:mb-6 md:mb-8 overflow-x-hidden">
                        <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-montserrat font-bold text-text-primary">
                            Assessed. Verified. Operationally Proven.
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="max-w-7xl mx-auto space-y-3 sm:space-y-4 md:space-y-5 mb-6 sm:mb-8 md:mb-8 pb-8 sm:pb-12 md:pb-0">
                        {/* First Paragraph */}
                        <p
                            className="text-xs xs:text-sm sm:text-lg md:text-lg lg:text-xl font-montserrat font-medium leading-relaxed text-text-primary text-center"
                            style={{ textShadow: "0 2px 22px #fff, 0 1px 4px #fff, 0 0px 0px #fff" }}
                        >
                            At CYBERLABS, certification is not a formality.
                        </p>

                        {/* Second Paragraph */}
                        <p
                            className="text-xs xs:text-sm sm:text-lg md:text-lg lg:text-xl font-montserrat font-medium leading-relaxed text-text-primary text-center"
                            style={{ textShadow: "0 2px 22px #fff, 0 1px 4px #fff, 0 0px 0px #fff" }}
                        >
                            {parseBoldText("Every credential reflects **demonstrated skill, assessed performance, and real operational readiness** - not attendance or theory.")}
                        </p>

                        {/* Third Paragraph */}
                        <p
                            className="text-xs xs:text-sm sm:text-lg md:text-lg lg:text-xl font-montserrat font-medium leading-relaxed text-text-primary text-center"
                            style={{ textShadow: "0 2px 22px #fff, 0 1px 4px #fff, 0 0px 0px #fff" }}
                        >
                            {parseBoldText("We certify **what professionals can actually do** in real cyber environments.")}
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
                                    // style={{
                                    //     background:
                                    //         "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                                    // }}
                                    >
                                        <div className="flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
                                            <IconComponent isInView={featuresInView} />
                                        </div>
                                        <h4 className="text-center text-sm xs:text-base sm:text-lg md:text-xl font-inter-display text-primary font-semibold leading-tight tracking-tight mb-2 sm:mb-3 md:mb-4 gap-2 sm:gap-3">
                                            {/* <span className="bg-background shadow-md rounded-md p-1.5 sm:p-2 rotate-12 group-hover:rotate-0 transition-all duration-300">
                                                <IconComponent isInView={featuresInView} />
                                            </span> */}
                                            <span>{parseBoldText(item.title)}</span>
                                        </h4>
                                        <p
                                            className="text-xs xs:text-sm sm:text-base font-montserrat font-medium text-text-primary leading-relaxed text-center"
                                            style={{ textShadow: "0 2px 22px #fff, 0 1px 4px #fff, 0 0px 0px #fff" }}
                                        >
                                            {item.body}
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

export default CertificationHero;
