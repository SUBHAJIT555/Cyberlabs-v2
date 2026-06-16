import { assetSrc } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { AnimatedHeading } from "./ui/animated-heading";
import ElitBootcampCard from "./ElitBootcampCard";
import BootcampEnrollmentModal from "./BootcampEnrollmentModal";
import { useBootcamps } from "@/hooks/useBootcamps";
import bootcampImage from "@/assets/img/ProgramPageImage/elitbootcamp.svg";

const headingBaseClass =
    "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-inter-display font-semibold tracking-tighter leading-tight inline";

const HIGHLIGHTS = [
    "30–50 Hour Programs",
    "Skills Over Certificates",
    "Future-Ready Curriculum",
] as const;

const paragraphMotion = {
    initial: { opacity: 0, y: 16, filter: "blur(6px)" },
    whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
    viewport: { once: false, amount: 0.3 },
    transition: { duration: 0.55, ease: "easeOut" as const },
};

const ElitBootcamp = () => {
    const sectionRef = useRef(null);
    const headingRef = useRef<HTMLDivElement>(null);
    const cardsGridRef = useRef<HTMLDivElement>(null);
    const headingInView = useInView(headingRef, { once: false, margin: "-80px" });
    const { getBootcamps } = useBootcamps();
    const allBootcamps = getBootcamps();
    const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);
    const [enrollmentSlug, setEnrollmentSlug] = useState("");

    const handleEnroll = (slug: string) => {
        setEnrollmentSlug(slug);
        setIsEnrollmentOpen(true);
    };

    return (
        <section
            ref={sectionRef}
            id="elite-bootcamps"
            className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-16 md:py-24 border-t border-neutral-200/80 overflow-hidden"
        >
            <div className="w-full space-y-5 md:space-y-5">
                <div ref={headingRef} className="text-center md:text-left">
                    <AnimatedHeading
                        inView={headingInView}
                        lines={[
                            {
                                text: "CYBERLABS ",
                                className: `${headingBaseClass} text-primary`,
                                as: "h2",
                            },
                            {
                                text: "Elite Boot Camps",
                                className: `${headingBaseClass} text-text-primary`,
                                as: "h2",
                                startDelay: 0.25,
                            },
                        ]}
                    />

                    <motion.div
                        className="mt-4 flex flex-wrap items-center justify-center md:justify-start gap-2"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                    >
                        {HIGHLIGHTS.map((label) => (
                            <span
                                key={label}
                                className="inline-flex items-center rounded-lg border border-neutral-200 bg-white px-3 py-1 text-xs sm:text-sm font-inter-display font-medium text-text-primary/80 shadow-sm"
                            >
                                {label}
                            </span>
                        ))}
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1.75fr_1fr] gap-10 lg:gap-12 items-center">
                    <motion.div
                        className="relative overflow-hidden "
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <div className="absolute inset-0 z-0 pointer-events-none"  />

                        <div className="relative z-10  text-left">
                            <motion.p
                                className="text-lg md:text-xl font-inter-display text-text-primary leading-relaxed text-pretty"
                                {...paragraphMotion}
                            >
                                In today&apos;s cybersecurity industry, <span className="font-semibold text-text-primary">standing still means falling behind.</span> Just as doctors continuously update their knowledge, cybersecurity professionals must develop new skills to address <span className="font-semibold text-primary">evolving technologies, emerging threats, and changing attack methodologies.</span>
                            </motion.p>

                            <motion.p
                                className="text-lg md:text-xl font-inter-display text-text-primary leading-relaxed text-pretty"
                                {...paragraphMotion}
                                transition={{ ...paragraphMotion.transition, delay: 0.08 }}
                            >
                                <span className="font-semibold text-primary">CYBERLABS</span> Elite Boot Camps are intensive <span className="font-semibold text-text-primary">30–50 hour specialized programs</span> designed to build expertise in high-demand domains and position professionals for <span className="font-semibold text-text-primary">career advancement, promotions, salary growth, and global opportunities.</span>
                            </motion.p>

                            <motion.p
                                className="text-lg md:text-xl font-inter-display text-text-primary leading-relaxed text-pretty"
                                {...paragraphMotion}
                                transition={{ ...paragraphMotion.transition, delay: 0.16 }}
                            >
                                Today&apos;s employers want <span className="font-semibold text-primary">skills and operational capability—not just certificates.</span> Our boot camps deliver practical, industry-relevant expertise so professionals remain <span className="font-semibold text-text-primary">valuable, relevant, and ready for future growth.</span>
                            </motion.p>

                            <motion.p
                                className="text-lg md:text-xl font-inter-display text-text-primary leading-relaxed text-pretty"
                                {...paragraphMotion}
                                transition={{ ...paragraphMotion.transition, delay: 0.24 }}
                            >
                                As threats evolve, <span className="font-semibold text-primary">CYBERLABS</span> will regularly launch new boot camps across <span className="font-semibold text-text-primary">emerging technologies, specialized disciplines, and evolving threat domains</span>—keeping learners current and future-ready.
                            </motion.p>
                       

                            <div className="pt-2 md:pt-3 border-t border-neutral-200/80">
                                <motion.p
                                    className="text-lg sm:text-xl md:text-2xl font-montserrat font-semibold text-text-primary leading-snug text-left"
                                    {...paragraphMotion}
                                    transition={{ ...paragraphMotion.transition, delay: 0.32 }}
                                >
                                    <span className="text-primary">Stay Relevant.</span>{" "}
                                    <span className="text-primary">Increase Your Value.</span>{" "}
                                    <span className="text-primary">Advance Your Career.</span>
                                </motion.p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="relative flex items-center justify-center lg:justify-end"
                        initial={{ opacity: 0, x: 48 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.25 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <img
                            src={assetSrc(bootcampImage)}
                            alt="CYBERLABS Elite Boot Camps"
                            className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[340px] h-auto mx-auto lg:mx-0"
                        />
                    </motion.div>
                </div>

                <div ref={cardsGridRef} className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-stretch gap-6 md:gap-8 pt-4 md:pt-8">
                    {allBootcamps.map((bootcamp, index) => (
                        <ElitBootcampCard
                            key={bootcamp.id}
                            bootcamp={bootcamp}
                            index={index}
                            onEnroll={handleEnroll}
                        />
                    ))}
                </div>
            </div>

            <BootcampEnrollmentModal
                isOpen={isEnrollmentOpen}
                onClose={() => setIsEnrollmentOpen(false)}
                slug={enrollmentSlug}
            />
        </section>
    );
};

export default ElitBootcamp;
