import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";
// import aboutIndiaImage from "../../assets/img/Home/ABOUTCYBERLABSINDIA.webp";
// import weUnderstandYou from "../../assets/img/Home/weUnderstand.webp";
import { AnimatedHeading } from "../ui/animated-heading";
import { AnimatedList } from "../ui/animated-list";
import type { AnimatedListItem } from "../ui/animated-list";
import cyberlabsIndiaImage from "../../assets/img/AboutPageImages/cyberlabsindia.svg";

const mainTitleBaseClass =
  "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-montserrat font-semibold tracking-tight leading-tight md:leading-normal inline";

const bulletIcon = (
  <span className="text-primary text-sm sm:text-base mt-0.5 shrink-0">•</span>
);

const AboutIndiaSection = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef(null);
  const imageRef = useRef(null);
  const listRef = useRef(null);

  const titleInView = useInView(titleRef, { once: false, margin: "-100px" });
  const leftContentInView = useInView(leftContentRef, { once: false, margin: "-100px" });
  const imageInView = useInView(imageRef, { once: false, margin: "-100px" });

  const listItems: AnimatedListItem[] = [
    { text: "Enterprise cybersecurity roles", icon: bulletIcon },
    { text: "Cybercrime and investigation functions", icon: bulletIcon },
    { text: "Platform, identity, and abuse defense teams", icon: bulletIcon },
    {
      text: "India's rapidly expanding digital and regulatory environment",
      icon: bulletIcon,
    },
  ];

  const leftContentVariants: Variants = {
    hidden: { opacity: 0, x: -80, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, x: 80, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 sm:py-10 md:py-12 bg-background">
      <div className="w-full">
        <div ref={titleRef} className="mb-3 md:mb-4 flex flex-wrap items-baseline">
          <AnimatedHeading
            inView={titleInView}
            lines={[
              { text: "CYBERLABS ", className: `${mainTitleBaseClass} text-text-primary` },
              { text: "INDIA", className: `${mainTitleBaseClass} text-primary` },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-start mb-12 md:mb-16">
          <div ref={leftContentRef} className="space-y-6 md:space-y-8">
            <motion.p
              variants={leftContentVariants}
              initial="hidden"
              animate={leftContentInView ? "visible" : "hidden"}
              className="text-lg sm:text-xl md:text-2xl font-inter-display text-text-primary leading-tight md:leading-tight"
            >
              CYBERLABS India brings this operational training philosophy to the
              Indian market through Cyveritas Technologies LLP.
            </motion.p>

            <motion.p
              variants={leftContentVariants}
              initial="hidden"
              animate={leftContentInView ? "visible" : "hidden"}
              className="text-text-primary text-lg sm:text-xl font-inter-display leading-tight"
            >
              The objective of CYBERLABS India is not mass training.
            </motion.p>

            <motion.p
              variants={leftContentVariants}
              initial="hidden"
              animate={leftContentInView ? "visible" : "hidden"}
              className="text-text-primary text-base sm:text-lg font-inter-display font-semibold leading-tight"
            >
              It is capability development aligned with:
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
              variants={leftContentVariants}
              initial="hidden"
              animate={leftContentInView ? "visible" : "hidden"}
              className="text-text-primary text-lg sm:text-xl font-inter-display leading-tight font-medium"
            >
              CYBERLABS India focuses on long-term professional readiness, not
              short-term certification outcomes.
            </motion.p>
          </div>

          <motion.div
            ref={imageRef}
            variants={imageVariants}
            initial="hidden"
            animate={imageInView ? "visible" : "hidden"}
            className="lg:sticky lg:top-24 relative"
          >
            <div className="flex items-center justify-center">


              <img
                src={cyberlabsIndiaImage}
                alt="About CYBERLABS INDIA"
                className="w-full max-w-[420px] sm:max-w-[480px] md:max-w-[520px] lg:max-w-[560px] h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutIndiaSection;
