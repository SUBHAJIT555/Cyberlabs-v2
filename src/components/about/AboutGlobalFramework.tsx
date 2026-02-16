import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";
import oneGlobal from '../../assets/img/AboutPageImages/oneGlobal.svg'
// import aboutUsaImage from "../../assets/img/Home/ABOUTCYBERLABSUSA.webp";
// import buildYour from "../../assets/img/Home/buildYour.webp";
import { AnimatedHeading } from "../ui/animated-heading";
import { AnimatedList } from "../ui/animated-list";
import type { AnimatedListItem } from "../ui/animated-list";

const mainTitleBaseClass =
  "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-montserrat font-semibold tracking-tight leading-tight md:leading-normal inline";

const bulletIcon = (
  <span className="text-primary text-sm sm:text-base mt-0.5 shrink-0">•</span>
);

const AboutGlobalFramework = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef(null);
  const imageRef = useRef(null);
  const listRef = useRef(null);

  const titleInView = useInView(titleRef, { once: false, margin: "-100px" });
  const rightContentInView = useInView(rightContentRef, { once: false, margin: "-100px" });
  const imageInView = useInView(imageRef, { once: false, margin: "-100px" });

  const listItems: AnimatedListItem[] = [
    { text: "Curriculum depth and learning progression", icon: bulletIcon },
    { text: "Assessment and evaluation standards", icon: bulletIcon },
    {
      text: "Simulation-driven, investigation-focused training methodology",
      icon: bulletIcon,
    },
    {
      text: "Alignment with real cybersecurity roles and industry expectations",
      icon: bulletIcon,
    },
  ];

  const rightContentVariants: Variants = {
    hidden: { opacity: 0, x: 80, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, x: -80, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-4 sm:py-5 md:py-6 bg-background">
      <div className="w-full">
        <div ref={titleRef} className="mb-3 md:mb-4 flex flex-wrap items-baseline">
          <AnimatedHeading
            inView={titleInView}
            lines={[
              {
                text: "One Global Framework, Delivered Locally",
                className: `${mainTitleBaseClass} text-text-primary`,
              },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-start mb-12 md:mb-16">
          <motion.div
            ref={imageRef}
            variants={imageVariants}
            initial="hidden"
            animate={imageInView ? "visible" : "hidden"}
            className="lg:sticky lg:top-24 order-1 lg:order-1 relative"
          >
            <div className="flex items-center justify-center">
              <img
                src={oneGlobal}
                alt="One Global Framework"
                className="
      w-full
      max-w-[420px]
      sm:max-w-[480px]
      md:max-w-[520px]
      lg:max-w-[560px]
      h-auto
    "
              />
            </div>

          </motion.div>

          <div ref={rightContentRef} className="space-y-6 md:space-y-8 order-2 lg:order-2">
            <motion.p
              variants={rightContentVariants}
              initial="hidden"
              animate={rightContentInView ? "visible" : "hidden"}
              className="text-lg sm:text-xl md:text-2xl font-inter-display text-text-primary leading-tight"
            >
              CYBERLABS operates under a unified global training framework
              governed by CYBERLABS USA.
            </motion.p>

            <motion.p
              variants={rightContentVariants}
              initial="hidden"
              animate={rightContentInView ? "visible" : "hidden"}
              className="text-text-primary text-base sm:text-lg font-inter-display font-semibold leading-tight"
            >
              This framework defines:
            </motion.p>

            <div ref={listRef}>
              <AnimatedList
                items={listItems}
                containerClassName="space-y-2 sm:space-y-3 pl-0"
                contentClassName="text-base sm:text-lg font-inter-display text-text-primary leading-tight"
                itemClassName="flex items-start gap-3"
                iconClassName="text-primary shrink-0 flex items-center pt-0.5"
                boldText={false}
              />
            </div>

            <motion.p
              variants={rightContentVariants}
              initial="hidden"
              animate={rightContentInView ? "visible" : "hidden"}
              className="text-text-primary text-lg sm:text-xl font-inter-display leading-tight font-medium"
            >
              Programs delivered in India follow this same framework — without
              dilution — while being adapted for local learners through Cyveritas
              Technologies LLP.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGlobalFramework;
