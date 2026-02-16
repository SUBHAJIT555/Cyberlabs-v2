import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const flowSteps = [
  { label: "Structured training", sub: "Theory & methodology" },
  { label: "Hands-on labs", sub: "Practical execution" },
  { label: "Formal assessment", sub: "Evaluation & grading" },
  { label: "Official credential", sub: "CYBERLABS USA certificate" },
];

const dashedGridStyle = {
  backgroundImage: `
    linear-gradient(to right, #e2e8f0 1px, transparent 1px),
    linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
  `,
  backgroundSize: "1px 1px",
  backgroundPosition: "0 0, 0 0",
  maskImage: `
    repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
    repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
    radial-gradient(ellipse 70% 60% at 50% 0%, #000 40%, transparent 80%)
  `,
  WebkitMaskImage: `
    repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
    repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
    radial-gradient(ellipse 70% 60% at 50% 0%, #000 40%, transparent 80%)
  `,
  maskComposite: "intersect" as const,
  WebkitMaskComposite: "source-in" as const,
};

const LevelUp = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const textMaskVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.3,
      },
    },
  };

  return (
    <div className="w-full py-12 md:py-16 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
      <div className="mx-auto">
        {/* Headline */}
        <div>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="mb-8 md:mb-10"
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-montserrat font-semibold text-text-primary tracking-tight leading-tight"
            >
              Certification & Professional{" "}
              <motion.span variants={textMaskVariants} className="text-primary font-montserrat">
                {" "} Grading
              </motion.span>
            </motion.h2>
          </motion.div>

          {/* Subheading */}
          <motion.h3
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-xl md:text-2xl lg:text-3xl text-text-primary font-montserrat font-semibold mb-6 md:mb-8"
          >
            Official Credentials Issued by CYBERLABS USA
          </motion.h3>

          {/* Body copy with left accent bar */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative pl-4 md:pl-6 border-l-2 border-primary/30 mb-10 md:mb-12"
          >
            <motion.div variants={itemVariants} className="space-y-6 text-lg md:text-xl lg:text-2xl text-text-primary font-inter-display font-medium leading-relaxed">
              <p>
                Upon successful completion of the Cyber Defense Program, learners are awarded an{" "}
                <span className="font-bold text-primary">official internal certificate issued by CYBERLABS USA</span>.
              </p>
              <p>
                These certificates are issued under{" "}
                <span className="text-primary font-semibold">CYBERLABS USA's global training and evaluation framework</span>{" "}
                and represent a{" "}
                <span className="font-bold">rigorous standard of practical cybersecurity capability</span>, with strong emphasis on investigation, operational thinking, and real-world execution.
              </p>
              <p>
                The certification validates that the learner has successfully completed structured training, extensive hands-on labs, and formal assessments aligned with{" "}
                <span className="text-primary font-semibold">CYBERLABS USA methodologies.</span>
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Path to credential – 4 steps */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {flowSteps.map((step, index) => (
            <motion.div
              key={step.label}
              variants={itemVariants}
              className="relative rounded-lg border border-neutral-200 ring ring-neutral-200 ring-offset-2 md:ring-offset-4 overflow-hidden bg-white p-4 md:p-5 transition-colors hover:border-primary/40"
            >
              <div className="absolute inset-0 z-0 pointer-events-none" style={dashedGridStyle} />
              <div className="relative z-10">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg ring ring-neutral-300 ring-offset-2 border border-neutral-200 bg-neutral-500 text-white font-montserrat font-bold text-base mb-2">
                  {index + 1}
                </span>
                <p className="font-montserrat font-semibold text-text-primary text-base md:text-lg mb-0.5">
                  {step.label}
                </p>
                <p className="text-neutral-500 text-sm md:text-base font-inter-display">
                  {step.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LevelUp;
