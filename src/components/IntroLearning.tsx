import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";
import { MagicText } from "./ui/magic-text";
import { AnimatedHeading } from "./ui/animated-heading";
import type { AnimatedListItem } from "./ui/animated-list";
import openingSvg from "@/assets/img/Learning-Enviorment/opening.svg";

const styleParagraphWords = (word: string, index: number, words: string[]) => {
  const lower = word.toLowerCase().replace(/[.,-]/g, "");
  const prev = index > 0 ? words[index - 1].toLowerCase().replace(/[.,-]/g, "") : "";
  const shouldStyle =
    lower === "cyberlabs" ||
    (lower === "india" && (prev === "cyberlabs" || index === 0)) ||
    ["operating", "realistic", "systems", "structured", "cyber", "learning", "environment"].includes(lower);
  if (shouldStyle) {
    return (
      <span className="text-primary font-bold">
        {word}
      </span>
    );
  }
  return word;
};

const What = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const headingRef = useRef<HTMLDivElement>(null);
  const subheadingRef = useRef<HTMLDivElement>(null);
  const subheadingInView = useInView(subheadingRef, { once: false, margin: "-80px" });
  const listRef = useRef<HTMLDivElement>(null);
  const listInView = useInView(listRef, { once: false, margin: "-80px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.6,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Animated Icon Components
  const AnimatedIcon1 = ({ isInView }: { isInView: boolean }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-primary w-12 h-12  lg:w-14 lg:h-14"
    >
      <motion.path
        stroke="none"
        d="M0 0h24v24H0z"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.3, delay: 0, repeat: Infinity, repeatDelay: 3 }}
      />
      <motion.path
        d="M3 10a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v6a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4v-6"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
      />
      <motion.path
        d="M8 3l2 3"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.5, repeat: Infinity, repeatDelay: 3 }}
      />
      <motion.path
        d="M16 3l-2 3"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.7, repeat: Infinity, repeatDelay: 3 }}
      />
      <motion.path
        d="M9 13v-2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.3, delay: 1, repeat: Infinity, repeatDelay: 3 }}
      />
      <motion.path
        d="M15 11v2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.3, delay: 1.2, repeat: Infinity, repeatDelay: 3 }}
      />
    </svg>
  );

  const AnimatedIcon2 = ({ isInView }: { isInView: boolean }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-primary w-12 h-12 sm:w-14 sm:h-14"
    >
      <motion.path
        stroke="none"
        d="M0 0h24v24H0z"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.3, delay: 0, repeat: Infinity, repeatDelay: 3 }}
      />
      <motion.path
        d="M8 9l3 3l-3 3"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
      />
      <motion.path
        d="M13 15l3 0"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.5, repeat: Infinity, repeatDelay: 3 }}
      />
      <motion.path
        d="M3 6a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -12"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.8, repeat: Infinity, repeatDelay: 3 }}
      />
    </svg>
  );

  const AnimatedIcon3 = ({ isInView }: { isInView: boolean }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-primary w-12 h-12 sm:w-14 sm:h-14"
    >
      <motion.path
        stroke="none"
        d="M0 0h24v24H0z"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.3, delay: 0, repeat: Infinity, repeatDelay: 3 }}
      />
      <motion.path
        d="M11 15a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.7, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
      />
      <motion.path
        d="M18.5 18.5l2.5 2.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.6, repeat: Infinity, repeatDelay: 3 }}
      />
      <motion.path
        d="M4 6h16"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.9, repeat: Infinity, repeatDelay: 3 }}
      />
      <motion.path
        d="M4 12h4"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.3, delay: 1.2, repeat: Infinity, repeatDelay: 3 }}
      />
      <motion.path
        d="M4 18h4"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.3, delay: 1.4, repeat: Infinity, repeatDelay: 3 }}
      />
    </svg>
  );

  const AnimatedIcon4 = ({ isInView }: { isInView: boolean }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-primary w-12 h-12 sm:w-14 sm:h-14"
    >
      <motion.path
        stroke="none"
        d="M0 0h24v24H0z"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.3, delay: 0, repeat: Infinity, repeatDelay: 3 }}
      />
      <motion.path
        d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.7, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
      />
      <motion.path
        d="M6 21v-2a4 4 0 0 1 4 -4h3.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.6, repeat: Infinity, repeatDelay: 3 }}
      />
      <motion.path
        d="M20 21l2 -2l-2 -2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.4, delay: 1, repeat: Infinity, repeatDelay: 3 }}
      />
      <motion.path
        d="M17 17l-2 2l2 2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.4, delay: 1.2, repeat: Infinity, repeatDelay: 3 }}
      />
    </svg>
  );

  const highlightsListItems: AnimatedListItem[] = [
    { text: "Live instructor-led online sessions", icon: <AnimatedIcon1 isInView={listInView} /> },
    { text: "Hands-on execution inside a virtual environment", icon: <AnimatedIcon2 isInView={listInView} /> },
    { text: "Investigation-driven analysis", icon: <AnimatedIcon3 isInView={listInView} /> },
    { text: "Guided exercises and independent self-practice", icon: <AnimatedIcon4 isInView={listInView} /> },
  ];

  // Per-card scroll entrance: each of the four cards has a different cool animation
  const cardAnimations = [
    { initial: { opacity: 0, x: -70 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
    { initial: { opacity: 0, y: 50, scale: 0.92 }, whileInView: { opacity: 1, y: 0, scale: 1 }, transition: { duration: 0.65, ease: [0.34, 1.56, 0.64, 1] as const } },
    { initial: { opacity: 0, scale: 0.75, rotateY: -12 }, whileInView: { opacity: 1, scale: 1, rotateY: 0 }, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }, style: { perspective: 600, transformStyle: "preserve-3d" as const } },
    { initial: { opacity: 0, x: 70 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
  ];

  return (
    <>
      <motion.section
        ref={ref}
        className="w-full mx-auto px-5 md:px-10 lg:px-16 py-8 sm:py-12 lg:py-16 bg-bg"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Statement + closing block — same style as WhatTruelySet (image left, content right) */}
        <motion.div
          ref={headingRef}
          variants={itemVariants}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="rounded-xl border border-neutral-200 bg-white overflow-hidden shadow-sm mb-8 sm:mb-10 md:mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 sm:gap-8 md:gap-10 items-center p-6 sm:p-8 md:p-10 lg:p-12">
            {/* Image — left side (top on mobile) */}
            <div className="order-1 md:order-1 flex justify-center md:justify-start shrink-0">
              <img src={openingSvg} alt="" className="w-full max-w-[200px] sm:max-w-[240px] md:w-[200px] md:max-w-none lg:w-[260px] h-auto" />
            </div>
            {/* Content — right side */}
            <div className="order-2 md:order-2 space-y-5 sm:space-y-6 text-center md:text-left">
              <motion.p
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-inter-display font-semibold text-text-primary leading-snug"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <span className="block sm:inline">Cybersecurity cannot be mastered through theory alone.</span>
                
              </motion.p>
              <div className="w-16 sm:w-20 h-0.5 bg-primary/30 mx-auto md:mx-0" aria-hidden />
              <div className="space-y-4 sm:space-y-5">
                <div className="text-lg sm:text-xl md:text-2xl font-inter-display font-medium text-text-primary leading-relaxed">
                  <MagicText
                    text="Real cyber professionals are built by operating inside realistic systems, analyzing failures, investigating attacks, and making decisions under controlled but authentic conditions. At CYBERLABS India, learning happens inside a structured cyber learning environment that combines live instructor-led online learning with a comprehensive virtual simulator - designed to reflect how cybersecurity works in real organizations."
                    className="text-text-primary font-medium leading-relaxed"
                    renderWord={styleParagraphWords}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div ref={subheadingRef} className="mb-4 sm:mb-6">
          <AnimatedHeading
            inView={subheadingInView}
            lines={[
              { text: "THE CYBERLABS LEARNING APPROACH", className: "text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight font-inter-display text-text-primary leading-tight", as: "h4" },
            ]}
          />
        </div>
        <motion.p
          className="text-text-primary text-base sm:text-lg md:text-xl lg:text-2xl font-inter-display font-medium mb-8 sm:mb-10 md:mb-12 lg:mb-16  leading-relaxed"
          variants={itemVariants}
        >
          Our learning approach is based on the following principles: <br />
          <span className="text-primary font-bold">Every concept must be experienced, tested, and applied.</span> <br />
          Instead of seperating theory from practice, CYBERLABS INDIA intregrates:
        </motion.p>



        <div ref={listRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 xl:gap-10 mb-8 sm:mb-4 md:mb-6 lg:mb-8">
          {highlightsListItems.map((item, index) => {
            const anim = cardAnimations[index];
            return (
              <motion.div
                key={index}
                className="flex lg:flex-col lg:items-center items-start gap-4 md:gap-5 group border border-neutral-300 border-dashed rounded-md p-6 md:p-8 xl:p-10 transition-all duration-300 hover:border-primary/50 overflow-hidden"
                style={{
                  background:
                    "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                  ...anim.style,
                }}
                initial={anim.initial}
                whileInView={anim.whileInView}
                viewport={{ once: false, amount: 0.4 }}
                transition={anim.transition}
              >
                <span className="text-primary shrink-0 flex items-center pt-0.5">{item.icon}</span>
                <p className="text-lg lg:text-xl text-text-primary font-inter-display font-medium leading-relaxed text-left lg:text-center">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
        <motion.p
          className="text-text-primary text-lg sm:text-xl md:text-2xl lg:text-3xl font-inter-display font-medium mb-8 sm:my-4 md:my-6 lg:my-8 text-center max-w-7xl mx-auto leading-relaxed"
          animate={{ x: [0, -6, 6, -4, 4, -2, 2, 0] }}
          transition={{ duration: 0.5, ease: "easeOut", repeat: Infinity, repeatDelay: 2 }}
        >

          This ensures learners develop <span className="text-primary font-bold">real operational capability</span>, not just academic understanding.

        </motion.p>
      </motion.section>
    </>
  );
};

export default What;
