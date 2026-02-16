import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { AnimatedList } from "../ui/animated-list";
import type { AnimatedListItem } from "../ui/animated-list";
import { parseBoldText } from "@/lib/utils";
import howSvg from "../../assets/img/AboutPageImages/how.svg";
import whoSvg from "../../assets/img/AboutPageImages/who.svg";
import whatnotdoSvg from "../../assets/img/AboutPageImages/whatnotdo.svg";
// import aspiringImage from "../../assets/img/whoThis/aspiring.webp";
import whoCyberlabs from '../../assets/img/AboutPageImages/whoCyberlabs.svg'
// import enterpriseImage from "../../assets/img/whoThis/enterprise.webp";
import closingImage from "../../assets/img/AboutPageImages/closingImage.svg";

const bulletIcon = (
  <span className="text-primary text-sm sm:text-base mt-0.5 shrink-0">•</span>
);

const AboutTrainsWhoClosing = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const howTrainsListItems: AnimatedListItem[] = [
    { text: "Simulation-driven cyber environments", icon: bulletIcon },
    { text: "Scenario-based exercises", icon: bulletIcon },
    { text: "Investigation-led workflows", icon: bulletIcon },
    { text: "Instructor-guided, real-time sessions", icon: bulletIcon },
  ];

  const whoLeadsListItems: AnimatedListItem[] = [
    { text: "Defended real systems", icon: bulletIcon },
    { text: "Handled live cyber incidents", icon: bulletIcon },
    { text: "Led investigations and response teams", icon: bulletIcon },
    {
      text: "Built cybersecurity capabilities at enterprise and national levels",
      icon: bulletIcon,
    },
  ];

  const doesNotDoListItems: AnimatedListItem[] = [
    { text: "Slide-based instruction", icon: bulletIcon },
    { text: "Exam-only credentialing", icon: bulletIcon },
    { text: "Short-term certification programs", icon: bulletIcon },
    { text: "Marketing-led education models", icon: bulletIcon },
  ];

  const whoBuiltForListItems: AnimatedListItem[] = [
    { text: "Aspiring cybersecurity professionals", icon: bulletIcon },
    { text: "Career switchers seeking serious, structured entry", icon: bulletIcon },
    { text: "Working professionals advancing into complex cyber roles", icon: bulletIcon },
    { text: "Organizations seeking operationally ready talent", icon: bulletIcon },
  ];

  const closingListItems: AnimatedListItem[] = [
    { text: "Real-world relevance", icon: bulletIcon },
    { text: "Operational rigor", icon: bulletIcon },
    { text: "Accountability", icon: bulletIcon },
    { text: "Long-term professional credibility", icon: bulletIcon },
  ];

  const SectionBlock = ({
    children,
    className = "",
  }: {
    children: ReactNode;
    className?: string;
  }) => (
    <div
      className={`w-full py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 border-b border-neutral-200/80 ${className}`}
    >
      <div className="w-full">{children}</div>
    </div>
  );

  return (
    <section className="w-full bg-background py-12 md:py-20" ref={containerRef}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full"
      >
        {/* 1. How CYBERLABS Trains — content left, image right */}
        <SectionBlock className="bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="space-y-6 order-2 md:order-1">
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl font-montserrat text-text-primary font-semibold tracking-tight leading-tight mb-6 uppercase"
                initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                How CYBERLABS Trains
              </motion.h2>
              <p className="text-base sm:text-lg md:text-xl font-inter-display text-text-primary leading-relaxed font-medium">
                {parseBoldText(
                  "CYBERLABS training is built around **execution**, **investigation**, and **accountability**."
                )}
              </p>
              <p className="text-base sm:text-lg md:text-xl font-inter-display text-text-primary leading-tight font-medium">
                Learners train inside:
              </p>
              <AnimatedList
                items={howTrainsListItems}
                containerClassName="space-y-2 sm:space-y-3 pl-0 mb-6"
                contentClassName="text-base sm:text-lg font-inter-display text-text-primary leading-tight"
                itemClassName="flex items-start gap-3"
                iconClassName="text-primary shrink-0 flex items-center pt-0.5"
                boldText={false}
              />
              <p className="text-base sm:text-lg md:text-xl font-inter-display text-text-primary leading-relaxed font-medium">
                {parseBoldText(
                  "Learning is continuous, hands-on, and measured against **operational outcomes**, not attendance."
                )}
              </p>
            </div>
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <img src={howSvg} alt="" className="w-full max-w-md h-auto" />
            </div>
          </div>
        </SectionBlock>

        {/* 2. Who Leads & Teaches — zigzag: image left, content right */}
        <SectionBlock className="bg-neutral-50/80">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="order-1 md:order-1 flex justify-center md:justify-start">
              <img src={whoSvg} alt="" className="w-full max-w-md h-auto" />
            </div>
            <div className="space-y-6 order-2 md:order-2">
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl font-montserrat text-text-primary font-semibold tracking-tight leading-tight mb-6 uppercase"
                initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                Who Leads & Teaches
              </motion.h2>
              <p className="text-base sm:text-lg md:text-xl font-inter-display text-text-primary leading-tight font-medium">
                CYBERLABS programs are led and delivered by professionals who have:
              </p>
              <AnimatedList
                items={whoLeadsListItems}
                containerClassName="space-y-2 sm:space-y-3 pl-0 mb-6"
                contentClassName="text-base sm:text-lg font-inter-display text-text-primary leading-tight"
                itemClassName="flex items-start gap-3"
                iconClassName="text-primary shrink-0 flex items-center pt-0.5"
                boldText={false}
              />
              <p className="text-base sm:text-lg md:text-xl font-inter-display text-text-primary leading-relaxed font-medium">
                CYBERLABS does not rely on classroom-only trainers.
              </p>
              <p className="text-base sm:text-lg md:text-xl font-inter-display text-text-primary leading-relaxed font-medium">
                {parseBoldText("Instruction is grounded in **experience**, not theory.")}
              </p>
            </div>
          </div>
        </SectionBlock>

        {/* 3. What CYBERLABS Does Not Do — content left, image right */}
        <SectionBlock className="bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="space-y-6 order-2 md:order-1">
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl font-montserrat text-text-primary font-semibold tracking-tight leading-tight mb-6 uppercase"
                initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                What CYBERLABS Does Not Do
              </motion.h2>
              <p className="text-base sm:text-lg md:text-xl font-inter-display text-text-primary leading-tight font-medium">
                To be clear, CYBERLABS does not focus on:
              </p>
              <AnimatedList
                items={doesNotDoListItems}
                containerClassName="space-y-2 sm:space-y-3 pl-0 mb-6"
                contentClassName="text-base sm:text-lg font-inter-display text-text-primary leading-tight"
                itemClassName="flex items-start gap-3"
                iconClassName="text-primary shrink-0 flex items-center pt-0.5"
                boldText={false}
              />
              <p className="text-base sm:text-lg md:text-xl font-inter-display text-text-primary leading-relaxed font-medium">
                {parseBoldText("Our focus is **operational readiness**.")}
              </p>
            </div>
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <img src={whatnotdoSvg} alt="" className="w-full max-w-md h-auto" />
            </div>
          </div>
        </SectionBlock>

        {/* 4. Who CYBERLABS Is Built For — zigzag: image left, content right */}
        <SectionBlock className="bg-neutral-50/80">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="order-1 md:order-1 flex justify-center md:justify-start">
              <img
                src={whoCyberlabs}
                alt="Aspiring professionals"
                className="w-full max-w-md h-auto object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6 order-2 md:order-2">
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl font-montserrat text-text-primary font-semibold tracking-tight leading-tight mb-6"
                initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                Who CYBERLABS Is Built For
              </motion.h2>
              <p className="text-base sm:text-lg md:text-xl font-inter-display text-text-primary leading-relaxed font-medium">
                {parseBoldText(
                  "CYBERLABS is built for individuals and organizations that value **real capability** over **superficial credentials**, including:"
                )}
              </p>
              <AnimatedList
                items={whoBuiltForListItems}
                containerClassName="space-y-2 sm:space-y-3 pl-0 mb-6"
                contentClassName="text-base sm:text-lg font-inter-display text-text-primary leading-tight"
                itemClassName="flex items-start gap-3"
                iconClassName="text-primary shrink-0 flex items-center pt-0.5"
                boldText={false}
              />
              <p className="text-base sm:text-lg md:text-xl font-inter-display text-text-primary leading-relaxed font-semibold pt-4 border-t border-neutral-300 border-dashed">
                {parseBoldText(
                  "If you are serious about building a **long-term career** in cybersecurity, CYBERLABS is built for you."
                )}
              </p>
            </div>
          </div>
        </SectionBlock>

        {/* 5. Closing Perspective — same design as WhatTruelySet: card with image left, big quote + divider + content */}
        <SectionBlock className="bg-background border-b-0">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="rounded-xl border border-neutral-200 bg-white overflow-hidden shadow-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 sm:gap-8 md:gap-10 items-center p-6 sm:p-8 md:p-10 lg:p-12">

              {/* Content — right side */}
              <div className="order-1 md:order-1 space-y-5 sm:space-y-6 text-center md:text-left">
                <motion.p
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-inter-display font-semibold text-text-primary leading-snug"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <span className="block sm:inline">CYBERLABS represents a different standard in cybersecurity education.</span>
                </motion.p>
                <div className="w-16 sm:w-20 h-0.5 bg-primary/30 mx-auto md:mx-0" aria-hidden />
                <div className="space-y-4 sm:space-y-5">
                  <p className="text-base sm:text-lg md:text-xl font-inter-display font-medium text-text-primary leading-tight">
                    A standard defined by:
                  </p>
                  <AnimatedList
                    items={closingListItems}
                    containerClassName="space-y-2 sm:space-y-3 pl-0 mb-4"
                    contentClassName="text-base sm:text-lg font-inter-display text-text-primary leading-tight"
                    itemClassName="flex items-start gap-3"
                    iconClassName="text-primary shrink-0 flex items-center pt-0.5"
                    boldText={false}
                  />
                  <p className="text-base sm:text-lg md:text-xl font-inter-display font-medium text-text-primary leading-relaxed">
                    <span className="font-bold text-primary">CYBERLABS</span> was built by people who have <span className="font-semibold text-text-primary">carried responsibility</span>, not just credentials — and it trains professionals to do the same.
                  </p>
                </div>
              </div>
              {/* Image — left side (top on mobile) */}
              <div className="order-2 md:order-2 flex justify-center md:justify-start shrink-0">
                <img
                  src={closingImage}
                  alt="Closing Image"
                  className="w-full max-w-[200px] sm:max-w-[240px] md:w-[200px] md:max-w-none lg:w-[260px] h-auto object-cover rounded-lg"
                />
              </div>
            </div>
          </motion.div>
        </SectionBlock>
      </motion.div>
    </section>
  );
};

export default AboutTrainsWhoClosing;
