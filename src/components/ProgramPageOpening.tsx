import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedHeading } from "./ui/animated-heading";
import { TechStackOrbitCarousel } from "./ui/TechStackOrbitCarousel";
import { DottedGlowBackground } from "./ui/dotted-glow-background";

const headingBaseClass = "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-montserrat font-semibold leading-[1.05] tracking-tight inline";

const ProgramPageOpening = () => {
    const sectionRef = useRef(null);
    const headingRef = useRef<HTMLDivElement>(null);

    const headingInView = useInView(headingRef, { once: false, margin: "-100px" });

    return (
        <section
            ref={sectionRef}
            className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-24 md:py-32 bg-background overflow-hidden"
        >
            <div className="space-y-12 md:space-y-16">
                {/* HEADING - AnimatedHeading */}
                <div ref={headingRef} className="text-center md:text-left flex flex-wrap items-baseline">
                    <AnimatedHeading
                        inView={headingInView}
                        lines={[
                            { text: "Secure the Future: Master the Frontlines of ", className: `${headingBaseClass} text-text-primary`, as: "h1" },
                            { text: "Cyber Defense & Investigation", className: `${headingBaseClass} text-primary mt-1 md:mt-0`, as: "h1" },
                        ]}
                    />
                </div>

                {/* CONTENT GRID: Text Left, Tech Stack Carousel Right */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                    {/* LEFT: TEXT CONTENT - staggered fade + blur on scroll */}
                    <div className="space-y-6 md:space-y-8">
                        <motion.p
                            className="text-lg md:text-xl lg:text-2xl font-inter-display font-medium text-text-primary leading-tight"
                            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                        >
                            Welcome to the next generation of cybersecurity training. At <span className="font-semibold text-primary">CYBERLABS</span>, we move beyond the industry-standard &ldquo;tool-centric&rdquo; approach to deliver a curriculum driven by <span className="font-bold">architecture, investigation, and strategic decision-making.</span>
                        </motion.p>

                        <motion.p
                            className="text-lg md:text-xl lg:text-2xl font-inter-display font-medium text-text-primary leading-tight"
                            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                        >
                            Whether you are an absolute beginner looking to become a professional practitioner through our <span className="font-bold">430-hour Full-Stack Cyber Defense & Offensive Security journey,</span> or a professional aiming to master the complexities of <span className="font-bold">Cybercrime, Dark Web & Crypto Investigations or Platform, Identity & Abuse Defense,</span> our programs are built for the modern threat landscape.
                        </motion.p>

                        <motion.p
                            className="text-lg md:text-xl lg:text-2xl font-inter-display font-medium text-text-primary leading-tight"
                            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                        >
                            Delivered via a fully remote, simulation-driven environment, we equip you with the <span className="font-bold">operational thinking</span> required to unmask digital actors, secure global platforms, and lead high-stakes cyber investigations.
                        </motion.p>

                        <motion.p
                            className="text-2xl md:text-3xl lg:text-4xl font-montserrat font-semibold text-text-primary leading-tight pt-4"
                            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
                        >
                            Don&apos;t just learn the tools -{" "}
                            <span className="text-primary tracking-wide text-shadow-lg">master the mindset.</span>
                        </motion.p>
                    </div>

                    {/* RIGHT: Tech stack orbit carousel + DottedGlowBackground with masking (like GlobalThreat) */}
                    <motion.div
                        className="relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden rounded-lg"
                        initial={{ opacity: 0, x: 48 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.25 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* Fallback background */}
                        <div className="absolute inset-0 bg-linear-to-br from-background via-neutral-200 to-background" />

                        {/* DottedGlowBackground - same as GlobalThreat */}
                        <div className="absolute inset-0 opacity-100">
                            <DottedGlowBackground
                                gap={16}
                                radius={1.5}
                                opacity={0.15}
                                speedScale={0.5}
                                color="rgba(43, 13, 62, 0.15)"
                                glowColor="rgba(122, 63, 145, 0.25)"
                                colorLightVar="--green-light"
                                glowColorLightVar="--primary"
                                colorDarkVar="--evening-dark"
                                glowColorDarkVar="--text-primary"
                            />
                        </div>

                        {/* Masking overlays - same as GlobalThreat */}
                        <div className="absolute inset-0 z-5 pointer-events-none">
                            <div
                                className="absolute top-0 left-0 w-full h-1/3"
                                style={{
                                    background:
                                        "linear-gradient(to bottom, rgba(245, 245, 245, 0.95) 0%, rgba(245, 245, 245, 0.6) 40%, transparent 100%)",
                                }}
                            />
                            <div
                                className="absolute bottom-0 left-0 w-full h-1/3"
                                style={{
                                    background:
                                        "linear-gradient(to top, rgba(245, 245, 245, 0.95) 0%, rgba(245, 245, 245, 0.6) 40%, transparent 100%)",
                                }}
                            />
                            <div
                                className="absolute top-0 left-0 h-full w-1/4"
                                style={{
                                    background:
                                        "linear-gradient(to right, rgba(245, 245, 245, 0.9) 0%, rgba(245, 245, 245, 0.5) 50%, transparent 100%)",
                                }}
                            />
                            <div
                                className="absolute top-0 right-0 h-full w-1/4"
                                style={{
                                    background:
                                        "linear-gradient(to left, rgba(245, 245, 245, 0.9) 0%, rgba(245, 245, 245, 0.5) 50%, transparent 100%)",
                                }}
                            />
                            <div
                                className="absolute inset-0"
                                style={{
                                    background:
                                        "radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(245, 245, 245, 0.4) 80%, rgba(245, 245, 245, 0.7) 100%)",
                                }}
                            />
                        </div>

                        {/* Content */}
                        <div className="relative z-10 w-full flex items-center justify-center">
                            <TechStackOrbitCarousel />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProgramPageOpening;
