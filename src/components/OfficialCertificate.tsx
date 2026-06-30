import { assetSrc } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";
import officialCertSvg from "../assets/img/Official certification/officialcertification.svg";
import performanceTranscriptSvg from "../assets/img/Official certification/performancetranscript.svg";
import { FlowStepCard } from "./ui/FlowStepCard";

const OfficialCertificate = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const horizontalLinesFadeStyle = {
    WebkitMaskImage: "linear-gradient(to bottom, #000 0%, transparent 75%)",
    backgroundImage:
      "repeating-linear-gradient(0deg, transparent 0px, transparent 3px, #d4d4d8 3px, #d4d4d8 4px)",
    height: "100%",
    left: 0,
    maskImage: "linear-gradient(to bottom, #000 0%, transparent 75%)",
    opacity: 0.5,
    pointerEvents: "none" as const,
    position: "absolute" as const,
    top: 0,
    width: "100%",
  };

  const HorizontalLinesBg = () => (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div style={horizontalLinesFadeStyle} />
    </div>
  );

  const SectionBlock = ({
    children,
    className = "",
  }: {
    children: ReactNode;
    className?: string;
  }) => (
    <div className={`w-full mb-8 md:mb-10 ${className}`}>
      <div className="relative rounded-xl border border-neutral-200 bg-white overflow-hidden ">
        <HorizontalLinesBg />
        <div className="relative z-10 p-6 sm:p-8 md:p-10 lg:p-12">
          {children}
        </div>
      </div>
    </div>
  );

  return (
    <section className="w-full px-5 md:px-10 lg:px-16 py-4 sm:py-6 lg:py-6" ref={containerRef}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full"
      >
        {/* 1. Official Certification Issued by CYBERLABS USA */}
        <SectionBlock>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl font-montserrat text-text-primary font-semibold tracking-tight leading-tight mb-6"
                initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                Official Certification Issued by CYBERLABS USA
              </motion.h2>
              <p className="text-lg sm:text-xl md:text-2xl font-inter-display font-medium text-text-primary leading-relaxed">
                Upon successful completion of a program, learners are awarded an{" "}
                <span className="font-bold">official internal certificate issued by CYBERLABS USA.</span>
              </p>
              <p className="text-lg sm:text-xl md:text-2xl font-inter-display font-semibold text-text-primary leading-tight mb-6">
                These certificates are issued under CYBERLABS USA&apos;s global training and evaluation framework and represent a rigorous standard of cybersecurity competence, with strong emphasis on:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6">
                {[
                  "Practical Execution",
                  "Investigation & Analytical Thinking",
                  "Operational Decision Making",
                  "Real-world Cyber Scenarios",
                ].map((text) => (
                  <FlowStepCard key={text} label={text} className="h-full" />
                ))}
              </div>
              <p className="text-lg sm:text-xl md:text-2xl font-inter-display font-semibold text-text-primary leading-relaxed mb-6">
                The certification confirms that the learner has successfully completed:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-6">
                {[
                  "Structured Academic Instruction",
                  "Extensive Hands-on Labs and Simulations",
                  "Formal Assessments Aligned with CYBERLABS USA Standards",
                ].map((text) => (
                  <FlowStepCard key={text} label={text} className="h-full" />
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <img src={assetSrc(officialCertSvg)} alt="" className="w-full max-w-md h-auto" />
            </div>
          </div>
        </SectionBlock>

        {/* 2. Professional Performance Transcript */}
        <SectionBlock>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl font-montserrat text-text-primary font-semibold tracking-tight leading-tight mb-6"
                initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                Professional Performance Transcript <span className="text-primary">(India Programs)</span>
              </motion.h2>
              <p className="text-base sm:text-lg md:text-xl font-inter-display font-medium text-text-primary leading-tight">
                In addition to the primary certificate, CYBERLABS INDIA provides a <span className="font-bold">Professional Performance Transcript</span> for programs delivered in India.
              </p>
              <p className="text-base sm:text-lg md:text-xl font-inter-display font-medium text-text-primary leading-tight">
                This transcript is designed to meet the expectations of <span className="font-bold">Global enterprises, multinational employers, and institutional stakeholders</span>, offering a <span className="font-bold">clear, skills-based view of learner performance</span> beyond course completion.
              </p>
              <p className="text-base sm:text-lg md:text-xl font-inter-display font-medium text-text-primary leading-tight">
                The transcript complements the CYBERLABS USA certificate and does not replace or modify it.
              </p>
              <div className="pt-6 border-t border-neutral-300 space-y-4">
                <motion.p
                  className="text-lg sm:text-xl md:text-2xl font-inter-display font-semibold text-text-primary leading-tight"
                  initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  What the Performance Transcript Covers
                </motion.p>
                <p className="text-base sm:text-lg font-inter-display font-medium text-text-primary leading-tight mb-4">
                  The Professional Performance Transcript provides granular insight into performance across:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-4">
                  {[
                    "Practical lab execution",
                    "Investigation and analytical work",
                    "Scenario-based assessments",
                    "Professional reporting and documentation",
                  ].map((text, i) => (
                    <FlowStepCard
                      key={text}
                      label={text}
                      className={`h-full ${i === 3 ? "sm:col-span-3" : ""}`}
                    />
                  ))}
                </div>
                <p className="text-base sm:text-lg font-inter-display font-medium text-text-primary leading-tight">
                  This enables employers to evaluate <span className="font-bold">capability, depth, and readiness</span>, not just attendance or exam results.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <img src={assetSrc(performanceTranscriptSvg)} alt="" className="w-full max-w-md h-auto" />
            </div>
          </div>
        </SectionBlock>
      </motion.div>
    </section>
  );
};

export default OfficialCertificate;
