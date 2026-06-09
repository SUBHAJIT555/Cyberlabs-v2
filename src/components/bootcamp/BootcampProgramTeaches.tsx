import { useRef } from "react";
import { useParams } from "react-router";
import { motion, useInView, type Variants } from "framer-motion";
import { useBootcamps } from "@/hooks/useBootcamps";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { AnimatedList } from "@/components/ui/animated-list";
import type { AnimatedListItem } from "@/components/ui/animated-list";

const dashedCenterFadeGridStyle = {
    backgroundImage: `
        linear-gradient(to right, #e7e5e4 1px, transparent 1px),
        linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
    `,
    backgroundSize: "10px 10px",
    backgroundPosition: "0 0, 0 0",
    maskImage: `
        repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
        repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
        radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
    `,
    WebkitMaskImage: `
        repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
        repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
        radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
    `,
    maskComposite: "intersect" as const,
    WebkitMaskComposite: "source-in" as const,
};

const BootcampProgramTeaches = () => {
    const { slug } = useParams();
    const { getBootcampDetailBySlug } = useBootcamps();
    const programTeaches = getBootcampDetailBySlug(slug as string)?.programTeaches;

    const containerRef = useRef(null);
    const headingRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: false, margin: "-100px" });
    const headingInView = useInView(headingRef, { once: false, margin: "-100px" });

    if (!programTeaches) return null;

    const {
        whatYouLearn,
        readinessIntro,
        readinessSubheading,
        readinessPoints,
        closingStatement,
    } = programTeaches;

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <section ref={containerRef} className="w-full text-text-primary py-6 md:py-10">
            <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-25">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8 md:space-y-12"
                >
                    <div ref={headingRef} className="mb-2">
                        <AnimatedHeading
                            inView={headingInView}
                            lines={[
                                {
                                    text: "What the Program Teaches You &",
                                    className:
                                        "text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-text-primary font-montserrat font-semibold tracking-tight leading-tight",
                                    as: "h2",
                                },
                                {
                                    text: "Your Career Readiness",
                                    className:
                                        "text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-primary font-montserrat font-semibold tracking-tight leading-tight",
                                    as: "h2",
                                    startDelay: 0.15,
                                },
                            ]}
                        />
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-36 py-6 md:py-10"
                    >
                        <motion.div variants={itemVariants}>
                            <Card className="relative h-full border border-neutral-200 ring ring-neutral-200 ring-offset-4 md:ring-offset-8 rounded-xl bg-white overflow-hidden">
                                <div
                                    className="absolute inset-0 z-0 pointer-events-none"
                                    style={dashedCenterFadeGridStyle}
                                />
                                <CardHeader className="relative z-10 p-6 md:p-8">
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-montserrat font-semibold tracking-tight text-text-primary mb-4">
                                        What You Learn
                                    </h3>
                                    <AnimatedList
                                        items={whatYouLearn.map(
                                            (item): AnimatedListItem => ({
                                                text: item,
                                                icon: (
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
                                                        className="w-5 h-5 sm:w-6 sm:h-6 text-primary"
                                                        aria-hidden
                                                    >
                                                        <path d="M9 12l2 2l4 -4" />
                                                    </svg>
                                                ),
                                            }),
                                        )}
                                        viewportOnce={false}
                                        boldText={false}
                                        containerClassName="space-y-3 sm:space-y-4"
                                        itemClassName="flex items-start gap-2 sm:gap-3"
                                        contentClassName="text-sm sm:text-base md:text-lg font-inter-display font-medium text-text-primary leading-relaxed"
                                        iconClassName="mt-0.5 shrink-0"
                                    />
                                </CardHeader>
                            </Card>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <Card className="relative h-full border border-neutral-200 ring ring-neutral-200 ring-offset-4 md:ring-offset-8 rounded-xl bg-white overflow-hidden">
                                <div
                                    className="absolute inset-0 z-0 pointer-events-none"
                                    style={dashedCenterFadeGridStyle}
                                />
                                <CardHeader className="relative z-10 p-6 md:p-8">
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-montserrat font-semibold tracking-tight text-text-primary mb-4">
                                        Your Readiness After Completion
                                    </h3>
                                    {readinessIntro && (
                                        <p className="text-sm sm:text-base md:text-lg font-inter-display font-medium text-text-primary leading-relaxed mb-4">
                                            {readinessIntro}
                                        </p>
                                    )}
                                    {readinessSubheading && (
                                        <p className="text-base sm:text-lg md:text-xl font-inter-display font-semibold text-text-primary mb-4">
                                            {readinessSubheading}
                                        </p>
                                    )}
                                    <AnimatedList
                                        items={readinessPoints.map(
                                            (point, index): AnimatedListItem => ({
                                                text: point,
                                                icon: (
                                                    <span className="text-primary font-semibold text-sm sm:text-base tabular-nums">
                                                        {index + 1}.
                                                    </span>
                                                ),
                                            }),
                                        )}
                                        viewportOnce={false}
                                        boldText={false}
                                        containerClassName="space-y-3 sm:space-y-4"
                                        itemClassName="flex items-start gap-2 sm:gap-3"
                                        contentClassName="text-sm sm:text-base md:text-lg font-inter-display font-medium text-text-primary leading-relaxed"
                                        iconClassName="shrink-0 pt-0.5"
                                    />
                                </CardHeader>
                                <CardContent className="relative z-10 p-6 md:p-8 pt-0">
                                    <motion.p
                                        className="text-sm sm:text-base md:text-lg font-inter-display font-semibold text-text-primary leading-relaxed pt-4 border-t border-neutral-300"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={
                                            isInView
                                                ? { opacity: 1, y: 0 }
                                                : { opacity: 0, y: 10 }
                                        }
                                        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                                    >
                                        {closingStatement}
                                    </motion.p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default BootcampProgramTeaches;
