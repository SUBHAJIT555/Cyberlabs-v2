import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "./ui/card";
import { AnimatedHeading } from "./ui/animated-heading";

const tableRows = [
  {
    category: "Lab Simulations & Technical Exercises",
    weightage: "40%",
    grade: "A+ (92%)",
    classification: "Distinction",
  },
  {
    category: "Module Deliverables (Maps, Reports, Analysis)",
    weightage: "30%",
    grade: "A (88%)",
    classification: "Merit",
  },
  {
    category: "Integrated Practical Assessment",
    weightage: "30%",
    grade: "A+ (95%)",
    classification: "Distinction",
  },
  {
    category: "Overall Final Grade",
    weightage: "100%",
    grade: "A (91%)",
    classification: "First Class with Distinction",
    isBold: true,
  },
];

const GradeFramework = () => {
  const containerRef = useRef(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLTableSectionElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });
  const headingInView = useInView(headingRef, { once: false, margin: "-80px" });
  const tableInView = useInView(tableRef, { once: false, margin: "-60px" });

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
    <section ref={containerRef} className="w-full px-4 md:px-12 xl:px-25">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className=""
      >
        <Card
          className="group overflow-hidden border-none"

        >
          <CardContent className="p-0 space-y-4 md:space-y-6">
            <motion.div variants={cardVariants} className="space-y-3 md:space-y-4">
              <div ref={headingRef} className="mb-8">
                <AnimatedHeading
                  inView={headingInView}
                  lines={[
                    {
                      text: "Illustration of the Graded Performance Framework",
                      className: "text-2xl sm:text-4xl md:text-5xl font-montserrat font-semibold text-text-primary leading-tight tracking-tight",
                      as: "p",
                    },
                    {
                      text: "(India Segment)",
                      className: "text-2xl sm:text-4xl md:text-5xl font-montserrat font-semibold text-primary leading-tight tracking-tight",
                      as: "p",
                      startDelay: 0.2,
                    },
                  ]}
                />
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-neutral-300 border-dashed bg-white text-left">
                  <thead
                    className="bg-white"
                    style={{
                      background:
                        "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                    }}
                  >
                    <tr>
                      <th className="border border-neutral-300 border-dashed px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-xs sm:text-sm md:text-base font-montserrat font-bold text-text-primary">
                        Assessment Category
                      </th>
                      <th className="border border-neutral-300 border-dashed px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm md:text-base font-montserrat font-bold text-text-primary">
                        Weightage
                      </th>
                      <th className="border border-neutral-300 border-dashed px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm md:text-base font-montserrat font-bold text-text-primary">
                        Grade / Score
                      </th>
                      <th className="border border-neutral-300 border-dashed px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm md:text-base font-montserrat font-bold text-text-primary">
                        Classification
                      </th>
                    </tr>
                  </thead>
                  <tbody ref={tableRef}>
                    {tableRows.map((row, index) => (
                      <motion.tr
                        key={row.category}
                        initial={{ opacity: 0, y: 16 }}
                        animate={tableInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                        transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
                      >
                        <td
                          className={`border border-neutral-300 border-dashed px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-xs sm:text-sm md:text-base font-inter-display text-text-primary ${row.isBold ? "font-bold" : "font-medium"}`}
                        >
                          {row.category}
                        </td>
                        <td
                          className={`border border-neutral-300 border-dashed px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm md:text-base font-inter-display text-text-primary ${row.isBold ? "font-bold" : "font-medium"}`}
                        >
                          {row.weightage}
                        </td>
                        <td
                          className={`border border-neutral-300 border-dashed px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm md:text-base font-inter-display text-text-primary ${row.isBold ? "font-bold" : "font-medium"}`}
                        >
                          {row.grade}
                        </td>
                        <td
                          className={`border border-neutral-300 border-dashed px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-xs sm:text-sm md:text-base font-inter-display text-text-primary ${row.isBold ? "font-bold" : "font-medium"}`}
                        >
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

export default GradeFramework;
