import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";
import { AnimatedHeading } from "./ui/animated-heading";
import { AnimatedList } from "./ui/animated-list";
import type { AnimatedListItem } from "./ui/animated-list";
import cyberDefenseTraining from '../assets/img/HomePageImages/cybredefensetraining.svg';
import whoourtraining from '../assets/img/HomePageImages/whoourtraining.svg'

const iconBoxStyle = {
  background: "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
};
const iconBoxClass =
  "flex items-center justify-center rounded p-1 border border-neutral-200 ring ring-neutral-300 ring-offset-2 md:ring-offset-4 rounded-lg shrink-0 group-hover:border-primary/60 group-hover:bg-primary/10 transition-all duration-300 text-primary";

const PracticalHome = () => {
  const ref = useRef(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const rightTitleRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const titleInView = useInView(titleRef, { once: false, margin: "-100px" });
  const rightTitleInView = useInView(rightTitleRef, { once: false, margin: "-80px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const leftCardVariants: Variants = {
    hidden: {
      opacity: 0,
      x: -150,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const rightCardVariants: Variants = {
    hidden: {
      opacity: 0,
      x: 150,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const programs = [
    {
      text: "Realistic attack and defense simulations",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M21 3v5l-11 9l-4 4l-3 -3l4 -4l9 -11l5 0" />
          <path d="M5 13l6 6" />
          <path d="M14.32 17.32l3.68 3.68l3 -3l-3.365 -3.365" />
          <path d="M10 5.5l-2 -2.5h-5v5l3 2.5" />
        </svg>
      ),
    },
    {
      text: "SOC-style workflows and investigation-driven labs",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M10 20a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M10 20h-6" />
          <path d="M14 20h6" />
          <path d="M12 15l-2 -2h-3a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-3l-2 2" />
        </svg>
      ),
    },
    {
      text: "Incident response and threat analysis exercises",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9.884 5.873a3 3 0 0 1 5.116 2.127v1" />
          <path d="M13 9h3a6 6 0 0 1 1 3v1m-.298 3.705a5 5 0 0 1 -9.702 -1.705v-3a6 6 0 0 1 1 -3h1" />
          <path d="M3 13h4" />
          <path d="M17 13h4" />
          <path d="M12 20v-6" />
          <path d="M4 19l3.35 -2" />
          <path d="M4 7l3.75 2.4" />
          <path d="M20 7l-3.75 2.4" />
          <path d="M3 3l18 18" />
        </svg>
      ),
    },
    {
      text: "Identity, platform, cloud, and infrastructure abuse analysis",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M19 18a3.5 3.5 0 0 0 0 -7h-1c.397 -1.768 -.285 -3.593 -1.788 -4.787c-1.503 -1.193 -3.6 -1.575 -5.5 -1s-3.315 2.019 -3.712 3.787c-2.199 -.088 -4.155 1.326 -4.666 3.373c-.512 2.047 .564 4.154 2.566 5.027" />
          <path d="M8 16a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1l0 -3" />
          <path d="M10 15v-2a2 2 0 1 1 4 0v2" />
        </svg>
      ),
    },
    {
      text: "Decision-making under real-world pressure",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8" />
          <path d="M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8" />
          <path d="M17.5 16a3.5 3.5 0 0 0 0 -7h-.5" />
          <path d="M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0" />
          <path d="M6.5 16a3.5 3.5 0 0 1 0 -7h.5" />
          <path d="M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10" />
        </svg>
      ),
    },
  ];

  const trainingServes = [
    {
      text: "Individuals and families",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
          <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
          <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
        </svg>
      ),
    },
    {
      text: "Global enterprises and technology platforms",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 7a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-2" />
          <path d="M3 15a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3l0 -2" />
          <path d="M7 8l0 .01" />
          <path d="M7 16l0 .01" />
          <path d="M11 8h6" />
          <path d="M11 16h6" />
        </svg>
      ),
    },
    {
      text: "Banks and financial institutions",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3l0 -8" />
          <path d="M3 10l18 0" />
          <path d="M7 15l.01 0" />
          <path d="M11 15l2 0" />
        </svg>
      ),
    },
    {
      text: "Healthcare, education, and critical infrastructure",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" />
          <path d="M13 7l0 .01" />
          <path d="M17 7l0 .01" />
          <path d="M17 11l0 .01" />
          <path d="M17 15l0 .01" />
        </svg>
      ),
    },
    {
      text: "Government and public-sector systems",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 5a5 5 0 0 1 7 0a5 5 0 0 0 7 0v9a5 5 0 0 1 -7 0a5 5 0 0 0 -7 0v-9" />
          <path d="M5 21v-7" />
        </svg>
      ),
    },
  ];

  const programsListItems: AnimatedListItem[] = programs.map((item) => ({
    text: item.text,
    icon: (
      <span className={iconBoxClass} style={iconBoxStyle}>
        {item.icon}
      </span>
    ),
  }));

  const trainingServesListItems: AnimatedListItem[] = trainingServes.map((item) => ({
    text: item.text,
    icon: (
      <span className={iconBoxClass} style={iconBoxStyle}>
        {item.icon}
      </span>
    ),
  }));

  return (
    <motion.section
      ref={ref}
      className="w-full mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-24 py-6 sm:py-8 md:py-12 lg:py-16"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Main heading – full width, same position */}
      <div ref={titleRef} className="md:px-6 lg:px-8 mb-8 sm:mb-10 lg:mb-12">
        <AnimatedHeading
          inView={titleInView}
          lines={[
            { text: "PRACTICAL. OPERATIONAL. REAL.", className: "text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-montserrat font-semibold text-text-primary leading-tight wrap-break-words tracking-tight mb-4", as: "h3" },
            { text: "Israeli Cyber Defense Training", className: "text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-montserrat text-primary leading-tight wrap-break-words tracking-tight inline font-semibold", as: "h2" },
            { text: ", Delivered Hands-On", className: "text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-montserrat text-text-primary leading-tight wrap-break-words tracking-tight inline font-semibold", as: "h2" },
          ]}
        />
      </div>

      {/* Section 1: Content (left) | Image (right) – style aligned with AboutGlobalFramework */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-start mb-16 sm:mb-20 lg:mb-24">
        <motion.div variants={leftCardVariants} className="space-y-6 md:space-y-8 order-2 lg:order-1 px-4 sm:px-6 lg:px-8 lg:pr-10">
          <p className="text-text-primary text-sm sm:text-base lg:text-lg xl:text-xl leading-tight tracking-tight font-semibold font-inter-display">
            CYBERLABS INDIA training mirrors <span className="font-extrabold">how cyber defense actually works in
              Israel and global organizations.</span>
          </p>
          <motion.h4
            className="text-text-primary text-lg sm:text-xl lg:text-2xl xl:text-3xl font-montserrat font-semibold"
            initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Programs include:
          </motion.h4>

          <AnimatedList
            items={programsListItems}
            viewportOnce={false}
            boldText={false}
            containerClassName="space-y-2 sm:space-y-3 pl-0"
            itemClassName="flex items-start gap-3 font-inter-display text-text-primary text-sm sm:text-base lg:text-lg xl:text-xl group"
            contentClassName="flex-1 pt-0.5 font-inter-display font-medium"
            iconClassName="mt-0.5 shrink-0 flex items-center pt-0.5 text-primary"
          />

          <p className="text-text-primary text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed font-inter-display font-semibold capitalize">
            Graduates are trained to operate in real cybersecurity roles from
            day one.
          </p>
        </motion.div>

        <motion.div variants={rightCardVariants} className="lg:sticky lg:top-24 order-1 lg:order-2 relative">
          <div className="flex items-center justify-center">
            <img
              src={cyberDefenseTraining}
              alt="Cyber defense training - programs"
              className="w-full max-w-[420px] sm:max-w-[480px] md:max-w-[520px] lg:max-w-[560px] h-auto"
            />
          </div>
        </motion.div>
      </div>

      {/* Section 2: Desktop = image left, content right. Mobile: two lines first, then image, then rest – style aligned with AboutGlobalFramework */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-start">
        {/* Block A: "WHO OUR TRAINING SERVES" + subheading – mobile: first (order-1); desktop: col 2 row 1 */}
        <motion.div variants={rightCardVariants} className="order-1 lg:col-start-2 lg:row-start-1 space-y-2 px-4 sm:px-6 lg:px-8 lg:pl-10 lg:pb-4">
          <div ref={rightTitleRef}>
            <AnimatedHeading
              inView={rightTitleInView}
              lines={[
                { text: "WHO OUR TRAINING SERVES", className: "text-text-primary text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-montserrat font-semibold", as: "h4" },
              ]}
            />
          </div>
          <p className="text-primary text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-tight tracking-tight font-semibold font-inter-display">
            Cyber Defenders the World Can Rely On.
          </p>
        </motion.div>

        {/* Block B: Image – mobile: second (order-2); desktop: col 1 row-span 2 */}
        <motion.div variants={leftCardVariants} className="lg:sticky lg:top-24 lg:row-span-2 order-2 lg:order-1 relative flex items-center justify-center">
          <div className="flex items-center justify-center">
            <img
              src={whoourtraining}
              alt="Who our training serves"
              className="w-full max-w-[420px] sm:max-w-[480px] md:max-w-[520px] lg:max-w-[560px] h-auto"
            />
          </div>
        </motion.div>

        {/* Block C: List + closing copy – mobile: third (order-3); desktop: col 2 row 2 */}
        <motion.div variants={rightCardVariants} className="order-3 lg:col-start-2 lg:row-start-2 space-y-6 md:space-y-8 px-4 sm:px-6 lg:px-8 lg:pl-10">
          <motion.h4
            className="text-text-primary text-lg sm:text-xl lg:text-2xl xl:text-3xl font-montserrat font-semibold"
            initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            CYBERLABS INDIA trains professionals capable of protecting:
          </motion.h4>

          <AnimatedList
            items={trainingServesListItems}
            viewportOnce={false}
            boldText={false}
            containerClassName="space-y-2 sm:space-y-3 pl-0"
            itemClassName="flex items-start gap-3 font-inter-display text-text-primary text-sm sm:text-base lg:text-lg xl:text-xl group"
            contentClassName="flex-1 pt-0.5 font-inter-display font-medium"
            iconClassName="mt-0.5 shrink-0 flex items-center pt-0.5 text-primary"
          />

          <p className="text-text-primary text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed font-inter-display font-medium capitalize">
            Our graduates carry forward the <span className="font-bold">
              Israeli cyber defense standard of responsibility, discipline, and trust.</span>
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PracticalHome;
