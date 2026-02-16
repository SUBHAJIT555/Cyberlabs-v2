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

// List item icons
const BriefcaseIcon = (
  <div className="border border-neutral-200 bg-neutral-100 rounded-xl p-1.5 sm:p-2 ring ring-neutral-200 ring-offset-2 flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-briefcase w-4 h-4 sm:w-5 sm:h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -9" />
      <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
      <path d="M12 12l0 .01" />
      <path d="M3 13a20 20 0 0 0 18 0" />
    </svg>
  </div>
);

const UserScanIcon = (
  <div className="border border-neutral-200 bg-neutral-100 rounded-xl p-1.5 sm:p-2 ring ring-neutral-200 ring-offset-2 flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-user-scan w-4 h-4 sm:w-5 sm:h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M10 9a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
      <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
      <path d="M4 16v2a2 2 0 0 0 2 2h2" />
      <path d="M16 4h2a2 2 0 0 1 2 2v2" />
      <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
      <path d="M8 16a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2" />
    </svg>
  </div>
);

const SearchIcon = (
  <div className="border border-neutral-200 bg-neutral-100 rounded-xl p-1.5 sm:p-2 ring ring-neutral-200 ring-offset-2 flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-search w-4 h-4 sm:w-5 sm:h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
      <path d="M21 21l-6 -6" />
    </svg>
  </div>
);

const TrendingUpIcon = (
  <div className="border border-neutral-200 bg-neutral-100 rounded-xl p-1.5 sm:p-2 ring ring-neutral-200 ring-offset-2 flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-trending-up w-4 h-4 sm:w-5 sm:h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M3 17l6 -6l4 4l8 -8" />
      <path d="M14 7l7 0l0 7" />
    </svg>
  </div>
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
    { text: "Enterprise cybersecurity roles.", icon: BriefcaseIcon },
    { text: "Cybercrime and investigation functions.", icon: UserScanIcon },
    { text: "Platform, identity, and abuse defense teams.", icon: SearchIcon },
    {
      text: "India's rapidly expanding digital and regulatory environment.",
      icon: TrendingUpIcon,
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
    <section className="w-full px-5 md:px-10 lg:px-16">
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
                { text: "CYBERLABS ", className: `${mainTitleBaseClass} text-text-primary` },
                { text: "INDIA", className: `${mainTitleBaseClass} text-primary` },
              ]}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-start">
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
                boldText={true}
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
      </div>
    </section>
  );
};

export default AboutIndiaSection;
