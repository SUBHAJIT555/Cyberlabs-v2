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
    <section className="w-full px-5 md:px-10 lg:px-16 py-8 sm:py-12 lg:py-16">
      <div className="relative rounded-xl border border-neutral-200 bg-white overflow-hidden ring ring-neutral-200 ring-offset-4 md:ring-offset-8">
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
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
            }}
        />
        <div className="relative z-10 p-6 sm:p-8 md:p-10 lg:p-12">
          <div ref={titleRef} className="mb-6 md:mb-8 flex flex-wrap items-baseline">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-start">
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
                boldText={true}
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
      </div>
    </section>
  );
};

export default AboutGlobalFramework;
