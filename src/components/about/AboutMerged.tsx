import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { AnimatedList } from "../ui/animated-list";
import type { AnimatedListItem } from "../ui/animated-list";
import { parseBoldText } from "@/lib/utils";
import whatcyberlabsSvg from "../../assets/img/AboutPageImages/whatcyberlabs.svg";
import foundationSvg from "../../assets/img/AboutPageImages/foundation.svg";
import whySvg from "../../assets/img/AboutPageImages/why.svg";



// Foundation section icons
const AlertOctagonIcon = (
  <div className="border border-neutral-200 bg-neutral-100 rounded-xl p-1.5 sm:p-2 ring ring-neutral-200 ring-offset-2 flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-alert-octagon w-4 h-4 sm:w-5 sm:h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M12.802 2.165l5.575 2.389c.48 .206 .863 .589 1.07 1.07l2.388 5.574c.22 .512 .22 1.092 0 1.604l-2.389 5.575c-.206 .48 -.589 .863 -1.07 1.07l-5.574 2.388c-.512 .22 -1.092 .22 -1.604 0l-5.575 -2.389a2.036 2.036 0 0 1 -1.07 -1.07l-2.388 -5.574a2.036 2.036 0 0 1 0 -1.604l2.389 -5.575c.206 -.48 .589 -.863 1.07 -1.07l5.574 -2.388a2.036 2.036 0 0 1 1.604 0" />
      <path d="M12 8v4" />
      <path d="M12 16h.01" />
    </svg>
  </div>
);

const RadarIcon = (
  <div className="border border-neutral-200 bg-neutral-100 rounded-xl p-1.5 sm:p-2 ring ring-neutral-200 ring-offset-2 flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-radar w-4 h-4 sm:w-5 sm:h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M21 12h-8a1 1 0 1 0 -1 1v8a9 9 0 0 0 9 -9" />
      <path d="M16 9a5 5 0 1 0 -7 7" />
      <path d="M20.486 9a9 9 0 1 0 -11.482 11.495" />
    </svg>
  </div>
);

const FingerprintIcon = (
  <div className="border border-neutral-200 bg-neutral-100 rounded-xl p-1.5 sm:p-2 ring ring-neutral-200 ring-offset-2 flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-fingerprint w-4 h-4 sm:w-5 sm:h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M18.9 7a8 8 0 0 1 1.1 5v1a6 6 0 0 0 .8 3" />
      <path d="M8 11a4 4 0 0 1 8 0v1a10 10 0 0 0 2 6" />
      <path d="M12 11v2a14 14 0 0 0 2.5 8" />
      <path d="M8 15a18 18 0 0 0 1.8 6" />
      <path d="M4.9 19a22 22 0 0 1 -.9 -7v-1a8 8 0 0 1 12 -6.95" />
    </svg>
  </div>
);

const RosetteDiscountCheckIcon = (
  <div className="border border-neutral-200 bg-neutral-100 rounded-xl p-1.5 sm:p-2 ring ring-neutral-200 ring-offset-2 flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-rosette-discount-check w-4 h-4 sm:w-5 sm:h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7c.412 .41 .97 .64 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1c0 .58 .23 1.138 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1" />
      <path d="M9 12l2 2l4 -4" />
    </svg>
  </div>
);

// Why Built section icons
const ListNumbersIcon = (
  <div className="border border-neutral-200 bg-neutral-100 rounded-xl p-1.5 sm:p-2 ring ring-neutral-200 ring-offset-2 flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-list-numbers w-4 h-4 sm:w-5 sm:h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M11 6h9" />
      <path d="M11 12h9" />
      <path d="M12 18h8" />
      <path d="M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4" />
      <path d="M6 10v-6l-2 2" />
    </svg>
  </div>
);

const MessageQuestionIcon = (
  <div className="border border-neutral-200 bg-neutral-100 rounded-xl p-1.5 sm:p-2 ring ring-neutral-200 ring-offset-2 flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-message-question w-4 h-4 sm:w-5 sm:h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M8 9h8" />
      <path d="M8 13h6" />
      <path d="M14 18h-1l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4.5" />
      <path d="M19 22v.01" />
      <path d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
    </svg>
  </div>
);

const TargetIcon = (
  <div className="border border-neutral-200 bg-neutral-100 rounded-xl p-1.5 sm:p-2 ring ring-neutral-200 ring-offset-2 flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-target w-4 h-4 sm:w-5 sm:h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M7 12a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    </svg>
  </div>
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
    { text: "Constant exposure to sophisticated cyber threats.", icon: AlertOctagonIcon },
    { text: "Intelligence-driven cyber defense operations.", icon: RadarIcon },
    { text: "Deep focus on attribution, investigation, and response.", icon: FingerprintIcon },
    {
      text: "Accountability at national, enterprise, and institutional levels.",
      icon: RosetteDiscountCheckIcon,
    },
  ];

  const whyBuiltListItems: AnimatedListItem[] = [
    { text: "There are no step-by-step labs.", icon: ListNumbersIcon },
    { text: "There are no predefined answers.", icon: MessageQuestionIcon },
    { text: "There are no exam objectives to follow.", icon: TargetIcon },
  ];

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
        {/* 1. What is CYBERLABS */}
        <SectionBlock>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat text-text-primary font-semibold tracking-tight leading-tight mb-6"
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
        <SectionBlock>
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
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat text-text-primary font-semibold tracking-tight leading-tight mb-6 uppercase"
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
                boldText={true}
              />
              <p className="text-base sm:text-lg md:text-xl font-inter-display text-text-primary leading-relaxed font-medium italic">
                CYBERLABS is built on this operational reality - not on academic
                models or certification-driven training.
              </p>
            </div>
          </div>
        </SectionBlock>

        {/* 3. Why CYBERLABS Was Built */}
        <SectionBlock>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 order-2 md:order-1">
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat text-text-primary font-semibold tracking-tight leading-tight mb-6 uppercase"
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
                boldText={true}
              />
              <p className="text-base sm:text-lg md:text-xl font-inter-display text-text-primary leading-relaxed font-medium">
                {parseBoldText(
                  "Professionals are expected to **analyze unfamiliar systems, understand attacker intent, assess impact, and act with accountability**."
                )}
              </p>
              <p className="text-base sm:text-lg md:text-xl font-inter-display text-text-primary leading-relaxed font-medium italic">
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
