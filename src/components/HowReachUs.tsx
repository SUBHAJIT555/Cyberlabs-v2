import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import contactClosingSvg from "@/assets/img/Learning-Enviorment/contactclosing.svg";

const HowReachUs = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: false, margin: "-80px" });

    return (
        <section className="relative w-full overflow-hidden py-10" ref={containerRef}>
            {/* Bottom Information Section */}
            <div className="relative p-2 md:p-0">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-6 sm:py-8 md:py-10 border border-neutral-200 rounded-xl overflow-hidden bg-white mb-6 sm:mb-8 md:mb-10 ring ring-neutral-200 ring-offset-4 md:ring-offset-8 shadow-lg">
                    {/* Dashed grid background (fade at top) - same as CallToAction */}
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
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="relative z-10 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 sm:gap-8 md:gap-10 items-center"
                    >
                        {/* Image — left (top on mobile), reduced opacity */}
                        <div className="order-1 md:order-1 flex justify-center md:justify-start shrink-0">
                            <img
                                src={contactClosingSvg}
                                alt=""
                                className="w-full max-w-[200px] sm:max-w-[260px] md:w-[220px] md:max-w-none lg:w-[280px] h-auto opacity-80 object-contain"
                            />
                        </div>
                        {/* Text — right */}
                        <div className="order-2 md:order-2 text-center md:text-left space-y-4 sm:space-y-5">
                            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-inter-display font-semibold text-text-primary leading-tight tracking-tight">
                                Cybersecurity is global.
                            </p>
                            <div className="w-16 sm:w-20 h-0.5 bg-primary/40 mx-auto md:mx-0" aria-hidden />
                            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-inter-display font-bold text-primary leading-tight tracking-tight">
                                Your training should be too.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HowReachUs;
