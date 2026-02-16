import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";
import { AnimatedHeading } from "../ui/animated-heading";
import { AnimatedList } from "../ui/animated-list";
import type { AnimatedListItem } from "../ui/animated-list";

// List item icons
const TerminalIcon = (
  <div className="border border-neutral-200 bg-neutral-100 rounded-lg p-0.5 sm:p-1 ring ring-neutral-200 ring-offset-2 flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-terminal w-4 h-4 sm:w-5 sm:h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M5 7l5 5l-5 5" />
      <path d="M12 19l7 0" />
    </svg>
  </div>
);

const RouteIcon = (
  <div className="border border-neutral-200 bg-neutral-100 rounded-lg p-0.5 sm:p-1 ring ring-neutral-200 ring-offset-2 flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-route w-4 h-4 sm:w-5 sm:h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M3 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
      <path d="M19 7a2 2 0 1 0 0 -4a2 2 0 0 0 0 4" />
      <path d="M11 19h5.5a3.5 3.5 0 0 0 0 -7h-8a3.5 3.5 0 0 1 0 -7h4.5" />
    </svg>
  </div>
);

const RosetteDiscountCheckIcon = (
  <div className="border border-neutral-200 bg-neutral-100 rounded-lg p-0.5 sm:p-1 ring ring-neutral-200 ring-offset-2 flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-rosette-discount-check w-4 h-4 sm:w-5 sm:h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7c.412 .41 .97 .64 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1c0 .58 .23 1.138 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1" />
      <path d="M9 12l2 2l4 -4" />
    </svg>
  </div>
);

const AffiliateIcon = (
  <div className="border border-neutral-200 bg-neutral-100 rounded-lg p-0.5 sm:p-1 ring ring-neutral-200 ring-offset-2 flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-affiliate w-4 h-4 sm:w-5 sm:h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M5.931 6.936l1.275 4.249m5.607 5.609l4.251 1.275" />
      <path d="M11.683 12.317l5.759 -5.759" />
      <path d="M4 5.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
      <path d="M17 5.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
      <path d="M17 18.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
      <path d="M4 15.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0 -9 0" />
    </svg>
  </div>
);

const BugIcon = (
  <div className="border border-neutral-200 bg-neutral-100 rounded-lg p-0.5 sm:p-1 ring ring-neutral-200 ring-offset-2 flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-bug w-4 h-4 sm:w-5 sm:h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M9 9v-1a3 3 0 0 1 6 0v1" />
      <path d="M8 9h8a6 6 0 0 1 1 3v3a5 5 0 0 1 -10 0v-3a6 6 0 0 1 1 -3" />
      <path d="M3 13l4 0" />
      <path d="M17 13l4 0" />
      <path d="M12 20l0 -6" />
      <path d="M4 19l3.35 -2" />
      <path d="M20 19l-3.35 -2" />
      <path d="M4 7l3.75 2.4" />
      <path d="M20 7l-3.75 2.4" />
    </svg>
  </div>
);

const FileSearchIcon = (
  <div className="border border-neutral-200 bg-neutral-100 rounded-lg p-0.5 sm:p-1 ring ring-neutral-200 ring-offset-2 flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-file-search w-4 h-4 sm:w-5 sm:h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
      <path d="M12 21h-5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v4.5" />
      <path d="M14 17.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" />
      <path d="M18.5 19.5l2.5 2.5" />
    </svg>
  </div>
);

const BrainIcon = (
  <div className="border border-neutral-200 bg-neutral-100 rounded-lg p-0.5 sm:p-1 ring ring-neutral-200 ring-offset-2 flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brain w-4 h-4 sm:w-5 sm:h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8" />
      <path d="M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8" />
      <path d="M17.5 16a3.5 3.5 0 0 0 0 -7h-.5" />
      <path d="M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0" />
      <path d="M6.5 16a3.5 3.5 0 0 1 0 -7h.5" />
      <path d="M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10" />
    </svg>
  </div>
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
    { text: "Tool demonstrations.", icon: TerminalIcon },
    { text: "Predefined lab paths.", icon: RouteIcon },
    { text: "Exam-oriented learning.", icon: RosetteDiscountCheckIcon },
  ];

  const cyberlabsFocusesList: AnimatedListItem[] = [
    { text: "System architecture and trust models.", icon: AffiliateIcon },
    { text: "Failure analysis and attack behavior.", icon: BugIcon },
    { text: "Investigation methodology.", icon: FileSearchIcon },
    { text: "Decision-making under real-world constraints.", icon: BrainIcon },
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
