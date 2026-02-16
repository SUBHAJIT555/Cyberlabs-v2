import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import contactClosingSvg from "@/assets/img/Learning-Enviorment/contactclosing.svg";

const HowReachUs = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: false, margin: "-80px" });

    return (
        <section className="w-full bg-background py-10 sm:py-14 md:py-20" ref={containerRef}>
            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                {/* Closing statement — image left, text right */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full rounded-2xl border border-neutral-200 bg-white overflow-hidden shadow-sm"
                >
                    <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 sm:gap-8 md:gap-10 items-center p-6 sm:p-8 md:p-10 lg:p-12">
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
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HowReachUs;
