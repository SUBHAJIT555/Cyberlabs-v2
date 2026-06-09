import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedHeading } from "./ui/animated-heading";
import { TechStackOrbitCarousel } from "./ui/TechStackOrbitCarousel";


const headingBaseClass = "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-montserrat font-semibold leading-[1.05] tracking-tight inline";

const ProgramPageOpening = () => {
    const sectionRef = useRef(null);
    const headingRef = useRef<HTMLDivElement>(null);

    const headingInView = useInView(headingRef, { once: false, margin: "-100px" });

    return (
        <section
            ref={sectionRef}
            className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-24 md:py-32  overflow-hidden"
        >
            <div className="space-y-12 md:space-y-16">
                {/* HEADING - AnimatedHeading */}
                <div ref={headingRef} className="text-center md:text-left flex flex-wrap items-baseline">
                    <AnimatedHeading
                        inView={headingInView}
                        lines={[
                            { text: "Train Beyond the Tools. Think Like a Cyber Operator. ", className: `${headingBaseClass} text-text-primary`, as: "h1" },
                            
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
                            The future of cybersecurity belongs to professionals who can <span className="font-bold">investigate, analyze, detect, defend, and make decisions under pressure.</span>
                        </motion.p>

                        <motion.p
                            className="text-lg md:text-xl lg:text-2xl font-inter-display font-medium text-text-primary leading-tight"
                            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                        >
                            <span className="font-semibold text-primary">CYBERLABS</span> Elite Boot Camps and Flagship Programs are built to develop operational capability across <span className="font-bold">cyber defense, threat intelligence, platform security, cybercrime investigations, AI security, and modern security operations.</span>
                        </motion.p>

                        <motion.p
                            className="text-2xl md:text-3xl lg:text-4xl font-montserrat font-semibold text-text-primary leading-tight pt-4"
                            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                        >
                            This is not about learning tools. It&apos;s about{" "}
                            <span className="text-primary tracking-wide text-shadow-lg">mastering how cyber defense actually works.</span>
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
                        <div className="absolute inset-0 " />

                        {/* DottedGlowBackground - same as GlobalThreat */}
                        {/* <div className="absolute inset-0 opacity-100">
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
                        </div> */}

                        {/* Masking overlays - same as GlobalThreat */}
                       

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
