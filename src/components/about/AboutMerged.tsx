import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { AnimatedList } from "../ui/animated-list";
import type { AnimatedListItem } from "../ui/animated-list";
import { parseBoldText } from "@/lib/utils";
import whatcyberlabsSvg from "../../assets/img/AboutPageImages/whatcyberlabs.svg";
import foundationSvg from "../../assets/img/AboutPageImages/foundation.svg";
import whySvg from "../../assets/img/AboutPageImages/why.svg";

const bulletIcon = (
  <span className="text-primary text-sm sm:text-base mt-0.5 shrink-0">•</span>
);

const AboutMerged = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const foundationListItems: AnimatedListItem[] = [
    { text: "Constant exposure to sophisticated cyber threats", icon: bulletIcon },
    { text: "Intelligence-driven cyber defense operations", icon: bulletIcon },
    { text: "Deep focus on attribution, investigation, and response", icon: bulletIcon },
    {
      text: "Accountability at national, enterprise, and institutional levels",
      icon: bulletIcon,
    },
  ];

  const whyBuiltListItems: AnimatedListItem[] = [
    { text: "There are no step-by-step labs", icon: bulletIcon },
    { text: "There are no predefined answers", icon: bulletIcon },
    { text: "There are no exam objectives to follow", icon: bulletIcon },
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
      <div className="w-full">
        {children}
      </div>
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
        {/* 1. What is CYBERLABS */}
        <SectionBlock className="bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl font-montserrat text-text-primary font-semibold tracking-tight leading-tight mb-6"
                initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                What is CYBERLABS
              </motion.h2>
              <motion.p
                className="text-lg sm:text-xl md:text-2xl font-inter-display text-text-primary leading-relaxed font-medium"
                initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                CYBERLABS is a global cybersecurity training and capability-building
                organization founded in Israel and built by professionals with
                real-world experience in cyber defense, investigations, and platform
                security.
              </motion.p>
              <motion.p
                className="text-lg sm:text-xl md:text-2xl font-inter-display text-text-primary leading-relaxed font-medium"
                initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
              >
                {parseBoldText(
                  "CYBERLABS exists to prepare individuals and organizations to **operate inside real cyber environments**, where incidents are complex, information is incomplete, and decisions carry real consequences."
                )}
              </motion.p>
            </div>
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <img
                src={whatcyberlabsSvg}
                alt=""
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>
        </SectionBlock>

        {/* 2. Our Foundation — zigzag: image left, text right */}
        <SectionBlock className="bg-neutral-50/80">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-1 md:order-1 flex justify-center md:justify-start">
              <img
                src={foundationSvg}
                alt=""
                className="w-full max-w-md h-auto"
              />
            </div>
            <div className="space-y-6 order-2 md:order-2">
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl font-montserrat text-text-primary font-semibold tracking-tight leading-tight mb-6 uppercase"
                initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                Our Foundation
              </motion.h2>
              <p className="text-base sm:text-lg md:text-xl font-inter-display text-text-primary leading-relaxed font-medium">
                {parseBoldText(
                  "CYBERLABS was founded in **Israel**, one of the world's most operationally advanced cybersecurity ecosystems."
                )}
              </p>
              <p className="text-base sm:text-lg md:text-xl font-inter-display text-text-primary leading-tight font-medium">
                This ecosystem is shaped by:
              </p>
              <AnimatedList
                items={foundationListItems}
                containerClassName="space-y-2 sm:space-y-3 pl-0 mb-6"
                contentClassName="text-base sm:text-lg font-inter-display text-text-primary leading-tight"
                itemClassName="flex items-start gap-3"
                iconClassName="text-primary shrink-0 flex items-center pt-0.5"
                boldText={false}
              />
              <p className="text-base sm:text-lg md:text-xl font-inter-display text-text-primary leading-relaxed font-medium">
                CYBERLABS is built on this operational reality — not on academic
                models or certification-driven training.
              </p>
            </div>
          </div>
        </SectionBlock>

        {/* 3. Why CYBERLABS Was Built */}
        <SectionBlock className="bg-white border-b-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 order-2 md:order-1">
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl font-montserrat text-text-primary font-semibold tracking-tight leading-tight mb-6 uppercase"
                initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                Why CYBERLABS Was Built
              </motion.h2>
              <p className="text-base sm:text-lg md:text-xl font-inter-display text-text-primary leading-relaxed font-medium">
                CYBERLABS was created to address a hard reality in cybersecurity
                education:
              </p>
              <p className="text-base sm:text-lg md:text-xl font-inter-display text-text-primary leading-relaxed font-medium">
                Most programs teach tools and techniques.
              </p>
              <p className="text-base sm:text-lg md:text-xl font-inter-display text-text-primary leading-relaxed font-medium">
                {parseBoldText(
                  "Real cybersecurity work demands **judgment, investigation, and decision-making under pressure**."
                )}
              </p>
              <p className="text-base sm:text-lg md:text-xl font-inter-display text-text-primary leading-tight font-medium">
                In real-world cyber incidents:
              </p>
              <AnimatedList
                items={whyBuiltListItems}
                containerClassName="space-y-2 sm:space-y-3 pl-0 mb-6"
                contentClassName="text-base sm:text-lg font-inter-display text-text-primary leading-tight"
                itemClassName="flex items-start gap-3"
                iconClassName="text-primary shrink-0 flex items-center pt-0.5"
                boldText={false}
              />
              <p className="text-base sm:text-lg md:text-xl font-inter-display text-text-primary leading-relaxed font-medium">
                {parseBoldText(
                  "Professionals are expected to **analyze unfamiliar systems, understand attacker intent, assess impact, and act with accountability**."
                )}
              </p>
              <p className="text-base sm:text-lg md:text-xl font-inter-display text-text-primary leading-relaxed font-medium">
                CYBERLABS exists to train professionals for that reality.
              </p>
            </div>
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <img
                src={whySvg}
                alt=""
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>
        </SectionBlock>
      </motion.div>
    </section>
  );
};

export default AboutMerged;
