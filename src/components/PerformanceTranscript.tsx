import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";
import { AnimatedHeading } from "./ui/animated-heading";
import { Card, CardContent } from "./ui/card";
import professionalTranscript from "@/assets/img/ProgramPageImage/performacetranscribe.svg";

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

const PerformanceTranscript = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: false, margin: "-100px" });
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={containerRef}
      className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 md:py-24 bg-background"
    >
      <div ref={headingRef} className="w-full mb-8 md:mb-12">
        <AnimatedHeading
          inView={headingInView}
          lines={[
            { text: "Professional Performance Transcript (India Program)", className: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat font-semibold text-text-primary leading-tight tracking-tight" },
          ]}
        />
      </div>

      {/* Bento grid layout */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid gap-6 sm:grid-cols-5"
      >
        {/* Card 1: Professional Performance Transcript (India Program) */}
        <Card className="group relative overflow-hidden border border-neutral-200 ring ring-neutral-200 ring-offset-2 md:ring-offset-4 rounded-xl bg-white sm:col-span-3">
          <div className="absolute inset-0 z-0 pointer-events-none" style={dashedCenterFadeGridStyle} />
          <CardContent className="relative z-10 p-6 md:p-8 space-y-4 md:space-y-6">
            <motion.div variants={cardVariants} className="space-y-3 md:space-y-10">
              {/* <div>
                <motion.p
                  className="text-lg sm:text-xl md:text-2xl font-montserrat font-semibold text-text-primary leading-tight tracking-tight"
                  initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  Professional Performance Transcript (India Program)
                </motion.p>
              </div> */}
              <p className="text-sm sm:text-base md:text-lg font-inter-display font-medium text-text-primary leading-relaxed">
                To meet the expectations of Indian enterprises, corporates, and institutional employers,
                CYBERLABS INDIA provides an additional{" "}
                <span className="font-semibold text-text-primary">
                  Professional Performance Transcript
                </span>{" "}
                alongside the primary certificate.
              </p>
              <p className="text-sm sm:text-base md:text-lg font-inter-display font-medium text-text-primary leading-relaxed">
                This transcript offers a granular, skills-based evaluation of learner performance across
                technical execution, investigative capability, and analytical decision-making-allowing
                employers to clearly assess real-world readiness beyond course completion.
              </p>
              <p className="text-sm sm:text-base md:text-lg font-inter-display font-medium text-text-primary leading-relaxed">
                The transcript{" "}
                <span className="font-semibold text-text-primary">
                  complements
                </span>{" "}
                the CYBERLABS USA certificate and does not replace or modify it. Together, they give a
                complete view of both formal completion and operational performance.
              </p>
            </motion.div>
          </CardContent>
        </Card>

        {/* Card 2: Industry Recognition & Professional Alignment */}
        <Card className="group relative overflow-hidden border border-neutral-200 ring ring-neutral-200 ring-offset-2 md:ring-offset-4 rounded-xl bg-white sm:col-span-2 flex flex-col min-h-0">
          <div className="absolute inset-0 z-0 pointer-events-none" style={dashedCenterFadeGridStyle} />
          <CardContent className="relative z-10 flex-1 flex flex-col min-h-0 p-3 md:p-4">
            <div className="relative flex-1 min-h-0 overflow-hidden flex items-center justify-center">
              <img
                src={professionalTranscript}
                alt="Industry Recognition"
                className="max-h-full max-w-full w-auto h-auto object-contain"
              />
            </div>
          </CardContent>
        </Card>

        {/* <Card className="group overflow-hidden border-neutral-300 border-dashed bg-white sm:col-span-2 relative"
          style={{ background: "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white", }}
        >
       
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(0,0,0,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.2) 1px, transparent 1px)",
              backgroundSize: "18px 18px",
            }}
          />
          <CardContent className="p-3 md:p-4 h-full">
            <div className="relative">
              <img className="object-cover absolute inset-0" src={professionalTranscript} alt="Industry Recognition" />
            </div>
          </CardContent>
        </Card> */}

        {/* Card 3: Graded Performance Framework table */}
        <Card className="group relative overflow-hidden border border-neutral-200 ring ring-neutral-200 ring-offset-2 md:ring-offset-4 rounded-xl bg-white sm:col-span-5">
          <div className="absolute inset-0 z-0 pointer-events-none" style={dashedCenterFadeGridStyle} />
          <CardContent className="relative z-10 p-6 md:p-8 space-y-4 md:space-y-6">
            <motion.div variants={cardVariants} className="space-y-3 md:space-y-4">
              <div>
                <motion.p
                  className="text-lg sm:text-xl md:text-2xl font-montserrat font-semibold text-text-primary leading-tight tracking-tight"
                  initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  Illustration of the Graded Performance Framework (India Segment)
                </motion.p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-neutral-300 bg-white text-left">
                  <motion.thead
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white"
                    style={{
                      background:
                        "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                    }}
                  >
                    <tr>
                      <th className="border border-neutral-300  px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-xs sm:text-sm md:text-base font-montserrat font-bold text-text-primary">
                        Assessment Category
                      </th>
                      <th className="border border-neutral-300 px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm md:text-base font-montserrat font-bold text-text-primary">
                        Weightage
                      </th>
                      <th className="border border-neutral-300 px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm md:text-base font-montserrat font-bold text-text-primary">
                        Grade / Score
                      </th>
                      <th className="border border-neutral-300 px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm md:text-base font-montserrat font-bold text-text-primary">
                        Classification
                      </th>
                    </tr>
                  </motion.thead>
                  <tbody>
                    {[
                      { category: "Lab Simulations & Technical Exercises", weight: "40%", grade: "A+ (92%)", classification: "Distinction" },
                      { category: "Module Deliverables (Maps, Reports, Analysis)", weight: "30%", grade: "A (88%)", classification: "Merit" },
                      { category: "Integrated Practical Assessment", weight: "30%", grade: "A+ (95%)", classification: "Distinction" },
                      { category: "Overall Final Grade", weight: "100%", grade: "A (91%)", classification: "First Class with Distinction", isBold: true },
                    ].map((row, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.4, delay: index * 0.08 }}
                        className={row.isBold ? "font-bold" : ""}
                      >
                        <td className="border border-neutral-300 px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-xs sm:text-sm md:text-base font-inter-display font-medium text-text-primary">
                          {row.category}
                        </td>
                        <td className="border border-neutral-300 px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm md:text-base font-inter-display font-medium text-text-primary">
                          {row.weight}
                        </td>
                        <td className="border border-neutral-300 px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm md:text-base font-inter-display font-medium text-text-primary">
                          {row.grade}
                        </td>
                        <td className="border border-neutral-300 px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-xs sm:text-sm md:text-base font-inter-display font-medium text-text-primary">
                          {row.classification}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base md:text-lg font-inter-display font-medium text-text-primary leading-relaxed italic">
                <span className="font-semibold text-text-primary">Note: </span>
                Assessment structure and weightage may vary by program, based on curriculum depth and
                role alignment.
              </p>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
};

export default PerformanceTranscript;