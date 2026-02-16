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

// List item icons
const LayersIntersectIcon = (
  <div className="border border-neutral-200 bg-neutral-100 rounded-xl p-1.5 sm:p-2 ring ring-neutral-200 ring-offset-2 flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-layers-intersect w-4 h-4 sm:w-5 sm:h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M8 6a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -8" />
      <path d="M4 10a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -8" />
    </svg>
  </div>
);

const ClipboardCheckIcon = (
  <div className="border border-neutral-200 bg-neutral-100 rounded-xl p-1.5 sm:p-2 ring ring-neutral-200 ring-offset-2 flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-clipboard-check w-4 h-4 sm:w-5 sm:h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
      <path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2" />
      <path d="M9 14l2 2l4 -4" />
    </svg>
  </div>
);

const Radar2Icon = (
  <div className="border border-neutral-200 bg-neutral-100 rounded-xl p-1.5 sm:p-2 ring ring-neutral-200 ring-offset-2 flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-radar-2 w-4 h-4 sm:w-5 sm:h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M15.51 15.56a5 5 0 1 0 -3.51 1.44" />
      <path d="M18.832 17.86a9 9 0 1 0 -6.832 3.14" />
      <path d="M12 12v9" />
    </svg>
  </div>
);

const ShieldLockIcon = (
  <div className="border border-neutral-200 bg-neutral-100 rounded-xl p-1.5 sm:p-2 ring ring-neutral-200 ring-offset-2 flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-shield-lock w-4 h-4 sm:w-5 sm:h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
      <path d="M11 11a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M12 12l0 2.5" />
    </svg>
  </div>
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
    { text: "Curriculum depth and learning progression.", icon: LayersIntersectIcon },
    { text: "Assessment and evaluation standards.", icon: ClipboardCheckIcon },
    {
      text: "Simulation-driven, investigation-focused training methodology.",
      icon: Radar2Icon,
    },
    {
      text: "Alignment with real cybersecurity roles and industry expectations.",
      icon: ShieldLockIcon,
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
              Programs delivered in India follow this same framework - without
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
