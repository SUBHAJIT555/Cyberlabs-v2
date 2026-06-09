import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedHeading } from "./ui/animated-heading";
import { TechStackOrbitCarousel } from "./ui/TechStackOrbitCarousel";


const headingBaseClass = "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-inter-display font-semibold tracking-tighter leading-tight inline";

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

                {/* CONTENT GRID: Text left, carousel right */}
                <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] xl:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] gap-8 md:gap-10 lg:gap-12 xl:gap-16 lg:items-center">
                    {/* LEFT: text */}
                    <div className="space-y-5 sm:space-y-6 md:space-y-8 min-w-0">
                        <motion.p
                            className="text-base sm:text-lg md:text-xl lg:text-2xl font-inter-display font-medium text-text-primary leading-snug md:leading-tight max-w-2xl"
                            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                        >
                            The future of cybersecurity belongs to professionals who can <span className="font-bold">investigate, analyze, detect, defend, and make decisions under pressure.</span>
                        </motion.p>

                        <motion.p
                            className="text-base sm:text-lg md:text-xl lg:text-2xl font-inter-display font-medium text-text-primary leading-snug md:leading-tight max-w-2xl"
                            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                        >
                            <span className="font-semibold text-primary">CYBERLABS</span> Elite Boot Camps and Flagship Programs are built to develop operational capability across <span className="font-bold">cyber defense, threat intelligence, platform security, cybercrime investigations, AI security, and modern security operations.</span>
                        </motion.p>

                        <motion.p
                            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-inter-display font-semibold text-text-primary leading-snug md:leading-tight pt-2 sm:pt-4 max-w-2xl"
                            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                        >
                            This is not about learning tools. It&apos;s about{" "}
                            <span className="text-primary tracking-wide text-shadow-lg">mastering how cyber defense actually works.</span>
                        </motion.p>
                    </div>

                    {/* RIGHT: tech stack carousel */}
                    <motion.div
                        className="relative w-full min-w-0 flex items-center justify-center py-6 sm:py-8 lg:py-0"
                        initial={{ opacity: 0, x: 48 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.25 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="relative z-10 w-full max-w-[min(100%,340px)] sm:max-w-[360px] lg:max-w-[380px] xl:max-w-[400px] mx-auto flex items-center justify-center">
                            <TechStackOrbitCarousel />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProgramPageOpening;
