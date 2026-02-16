import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";
import { AnimatedHeading } from "../ui/animated-heading";
import { AnimatedList } from "../ui/animated-list";
import type { AnimatedListItem } from "../ui/animated-list";

const bulletIcon = (
  <span className="text-primary text-sm sm:text-base mt-0.5 shrink-0">•</span>
);

const dashedGridStyle = {
  backgroundImage: `
    linear-gradient(to right, #e7e5e4 1px, transparent 1px),
    linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
  `,
  backgroundSize: "1px 1px",
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

const AboutHowDifferent = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: false, margin: "-100px" });

  const mostProgramsList: AnimatedListItem[] = [
    { text: "Tool demonstrations", icon: bulletIcon },
    { text: "Predefined lab paths", icon: bulletIcon },
    { text: "Exam-oriented learning", icon: bulletIcon },
  ];

  const cyberlabsFocusesList: AnimatedListItem[] = [
    { text: "System architecture and trust models", icon: bulletIcon },
    { text: "Failure analysis and attack behavior", icon: bulletIcon },
    { text: "Investigation methodology", icon: bulletIcon },
    { text: "Decision-making under real-world constraints", icon: bulletIcon },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full px-5 md:px-10 lg:px-16 py-8 sm:py-12 lg:py-16" ref={containerRef}>
      <div className="w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="mb-10 md:mb-12 text-left">
            <AnimatedHeading
              ref={headingRef as React.RefObject<HTMLDivElement>}
              inView={headingInView}
              lines={[
                {
                  text: "How CYBERLABS Is Different",
                  className:
                    "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-montserrat text-text-primary font-semibold tracking-tight leading-tight md:leading-normal mb-6",
                },
              ]}
            />
            <p className="text-lg sm:text-xl md:text-2xl font-inter-display text-text-primary leading-relaxed font-medium ">
              CYBERLABS does not follow the traditional cybersecurity training model.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            <motion.div
              variants={itemVariants}
              className="relative rounded-xl border border-neutral-200 bg-white overflow-hidden ring ring-neutral-200 ring-offset-4 group"
              whileHover={{
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <div className="absolute inset-0 z-0 pointer-events-none" style={dashedGridStyle} />
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-1" />
              <div className="relative z-10 p-6 sm:p-8 md:p-10">
                <motion.h3
                  className="text-xl sm:text-2xl md:text-3xl font-montserrat text-text-primary font-semibold tracking-tight leading-tight mb-6"
                  initial={{ opacity: 0, y: 30, filter: "blur(16px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  Where most programs focus on:
                </motion.h3>
                <div>
                  <AnimatedList
                    items={mostProgramsList}
                    containerClassName="space-y-2 sm:space-y-3 pl-0"
                    contentClassName="text-base sm:text-lg lg:text-xl font-inter-display text-text-primary font-medium leading-tight"
                    itemClassName="flex items-start gap-3"
                    iconClassName="text-primary shrink-0 flex items-center pt-0.5"
                    boldText={false}
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative rounded-xl border border-neutral-200 bg-white overflow-hidden ring ring-neutral-200 ring-offset-4 group"
              whileHover={{
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <div className="absolute inset-0 z-0 pointer-events-none" style={dashedGridStyle} />
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-1" />
              <div className="relative z-10 p-6 sm:p-8 md:p-10">
                <motion.h3
                  className="text-xl sm:text-2xl md:text-3xl font-montserrat text-text-primary font-semibold tracking-tight leading-tight mb-6"
                  initial={{ opacity: 0, y: 30, filter: "blur(16px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  CYBERLABS focuses on:
                </motion.h3>
                <div>
                  <AnimatedList
                    items={cyberlabsFocusesList}
                    containerClassName="space-y-2 sm:space-y-3 pl-0"
                    contentClassName="text-base sm:text-lg lg:text-xl font-inter-display text-text-primary font-medium leading-tight"
                    itemClassName="flex items-start gap-3"
                    iconClassName="text-primary shrink-0 flex items-center pt-0.5"
                    boldText={false}
                  />
                </div>
              </div>
            </motion.div>
          </div>

          <motion.p
            variants={itemVariants}
            className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl capitalize font-inter-display text-text-primary font-medium mt-10 md:mt-12"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
          >
            The difference is how professionals are trained to think.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHowDifferent;
