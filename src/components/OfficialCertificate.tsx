import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";
import officialCertSvg from "../assets/img/Official certification/officialcertification.svg";
import performanceTranscriptSvg from "../assets/img/Official certification/performancetranscript.svg";

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

  const dashedGridStyle = {
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

  // const cardDashedGridStyle = {
  //   backgroundImage: `
  //     linear-gradient(to right, #e2e8f0 1px, transparent 1px),
  //     linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
  //   `,
  //   backgroundSize: "1px 1px",
  //   backgroundPosition: "0 0, 0 0",
  //   maskImage: `
  //     repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
  //     repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
  //     radial-gradient(ellipse 70% 60% at 50% 0%, #000 40%, transparent 80%)
  //   `,
  //   WebkitMaskImage: `
  //     repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
  //     repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
  //     radial-gradient(ellipse 70% 60% at 50% 0%, #000 40%, transparent 80%)
  //   `,
  //   maskComposite: "intersect" as const,
  //   WebkitMaskComposite: "source-in" as const,
  // };

  const SectionBlock = ({
    children,
    className = "",
  }: {
    children: ReactNode;
    className?: string;
  }) => (
    <div className={`w-full mb-8 md:mb-10 ${className}`}>
      <div className="relative rounded-xl border border-neutral-200 bg-white overflow-hidden ring ring-neutral-200 ring-offset-4 md:ring-offset-8">
        <div className="absolute inset-0 z-0 pointer-events-none" style={dashedGridStyle} />
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                {[
                  "Practical Execution",
                  "Investigation & Analytical Thinking",
                  "Operational Decision Making",
                  "Real-world Cyber Scenarios",
                ].map((text, i) => (
                  <div
                    key={i}
                    className="relative p-5 border border-neutral-200 rounded-xl ring ring-neutral-200 ring-offset-2 md:ring-offset-4 bg-white overflow-hidden"
                  >
                    <div
                      className="absolute inset-0 z-0 pointer-events-none"
                     
                    />
                    <p className="relative z-10 text-sm sm:text-base md:text-lg font-inter-display font-semibold text-text-primary leading-relaxed">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-lg sm:text-xl md:text-2xl font-inter-display font-semibold text-text-primary leading-relaxed mb-6">
                The certification confirms that the learner has successfully completed:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
                {[
                  "Structured Academic Instruction",
                  "Extensive Hands-on Labs and Simulations",
                  "Formal Assessments Aligned with CYBERLABS USA Standards",
                ].map((text, i) => (
                  <div
                    key={i}
                    className="relative p-5 border border-neutral-200 rounded-xl ring ring-neutral-200 ring-offset-2 md:ring-offset-4 bg-white overflow-hidden"
                  >
                    <div
                      className="absolute inset-0 z-0 pointer-events-none"
                      // style={cardDashedGridStyle}
                    />
                    <p className="relative z-10 text-sm sm:text-base md:text-lg font-inter-display font-semibold text-text-primary leading-relaxed">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <img src={officialCertSvg} alt="" className="w-full max-w-md h-auto" />
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
                This transcript is designed to meet the expectations of <span className="font-bold">Indian enterprises, multinational employers, and institutional stakeholders</span>, offering a <span className="font-bold">clear, skills-based view of learner performance</span> beyond course completion.
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
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-4">
                  {[
                    "Practical lab execution",
                    "Investigation and analytical work",
                    "Scenario-based assessments",
                    "Professional reporting and documentation",
                  ].map((text, i) => (
                    <div
                      key={i}
                      className={`relative p-4 sm:p-5 border border-neutral-200 rounded-xl ring ring-neutral-200 ring-offset-2 md:ring-offset-4 bg-white overflow-hidden ${i === 3 ? "sm:col-span-3" : ""}`}
                    >
                      <div
                        className="absolute inset-0 z-0 pointer-events-none"
                        // style={cardDashedGridStyle}
                      />
                      <p className="relative z-10 text-sm sm:text-base md:text-lg font-inter-display font-medium text-text-primary leading-tight">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-base sm:text-lg font-inter-display font-medium text-text-primary leading-tight">
                  This enables employers to evaluate <span className="font-bold">capability, depth, and readiness</span>, not just attendance or exam results.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <img src={performanceTranscriptSvg} alt="" className="w-full max-w-md h-auto" />
            </div>
          </div>
        </SectionBlock>
      </motion.div>
    </section>
  );
};

export default OfficialCertificate;
