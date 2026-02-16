// import { Link } from "react-router";
// import CountUp from "react-countup";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";
import { useInViewOnce } from "../../hooks/useInViewOnce.tsx";
import { parseBoldText } from "@/lib/utils";

// Animated SVG: icon-tabler-search (Investigation Before Instruction)
const AnimatedSearchIcon = ({ isInView }: { isInView: boolean }) => (
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
    className="w-12 h-12 sm:w-15 sm:h-15 text-primary shrink-0"
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
      d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
    />
    <motion.path
      d="M21 21l-6 -6"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.3, delay: 0.7, repeat: Infinity, repeatDelay: 3 }}
    />
  </svg>
);

// Animated SVG: icon-tabler-network (Architecture-First Thinking)
const AnimatedNetworkIcon = ({ isInView }: { isInView: boolean }) => (
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
    className="w-12 h-12 sm:w-15 sm:h-15 text-primary shrink-0"
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
      d="M6 9a6 6 0 1 0 12 0a6 6 0 0 0 -12 0"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
    />
    <motion.path
      d="M12 3c1.333 .333 2 2.333 2 6s-.667 5.667 -2 6"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.4, delay: 0.7, repeat: Infinity, repeatDelay: 3 }}
    />
    <motion.path
      d="M12 3c-1.333 .333 -2 2.333 -2 6s.667 5.667 2 6"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.4, delay: 1.1, repeat: Infinity, repeatDelay: 3 }}
    />
    <motion.path
      d="M6 9h12"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.2, delay: 1.5, repeat: Infinity, repeatDelay: 3 }}
    />
    <motion.path
      d="M3 20h7"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.2, delay: 1.7, repeat: Infinity, repeatDelay: 3 }}
    />
    <motion.path
      d="M14 20h7"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.2, delay: 1.9, repeat: Infinity, repeatDelay: 3 }}
    />
    <motion.path
      d="M10 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.3, delay: 2.1, repeat: Infinity, repeatDelay: 3 }}
    />
    <motion.path
      d="M12 15v3"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.2, delay: 2.4, repeat: Infinity, repeatDelay: 3 }}
    />
  </svg>
);

// Animated SVG: icon-tabler-target-arrow (Operational Accountability)
const AnimatedTargetArrowIcon = ({ isInView }: { isInView: boolean }) => (
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
    className="w-12 h-12 sm:w-15 sm:h-15 text-primary shrink-0"
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
      d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.2, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
    />
    <motion.path
      d="M12 7a5 5 0 1 0 5 5"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.4, repeat: Infinity, repeatDelay: 3 }}
    />
    <motion.path
      d="M13 3.055a9 9 0 1 0 7.941 7.945"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.6, delay: 0.9, repeat: Infinity, repeatDelay: 3 }}
    />
    <motion.path
      d="M15 6v3h3l3 -3h-3v-3l-3 3"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.4, delay: 1.5, repeat: Infinity, repeatDelay: 3 }}
    />
    <motion.path
      d="M15 9l-3 3"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.2, delay: 1.9, repeat: Infinity, repeatDelay: 3 }}
    />
  </svg>
);

const AboutHero = () => {
  const { ref, visible } = useInViewOnce();
  const featuresRef = useRef(null);
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const items = [
    {
      title: "**Investigation Before Instruction**",
      body: "We teach how cyber incidents unfold, not just how tools are used.",
      Icon: AnimatedSearchIcon,
    },
    {
      title: "**Architecture-First Thinking**",
      body: "Learners understand systems, trust boundaries, and failure points before touching tools.",
      Icon: AnimatedNetworkIcon,
    },
    {
      title: "**Operational Accountability**",
      body: "Training outcomes are measured by real execution and decision-making, not attendance.",
      Icon: AnimatedTargetArrowIcon,
    },
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-screen w-full overflow-x-hidden overflow-y-auto bg-white"
    >
      {/* Dashed grid background (fade at top) - same as CallToAction / HomeOverview */}
      <div
        className="absolute inset-0 z-0 bg-white pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e2e8f0 1px, transparent 1px),
            linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
          `,
          backgroundSize: "1px 1px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 40%, transparent 80%)
          `,
          WebkitMaskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 40%, transparent 80%)
          `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />

      {/* Content */}
      <div
        className={`
          relative z-10 flex items-start md:items-center justify-center min-h-0 md:min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 pt-16 sm:pt-20 md:pt-16
          transition-all duration-700 ease-out
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        `}
      >
        <div className="w-full max-w-7xl">
          {/* Heading - Large, Bold, with Typography Play */}
          <div className="text-center mb-2 sm:mb-3 md:mb-5 overflow-x-hidden">
            <h2 className="text-lg xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl font-inter-display mb-1 sm:mb-2 tracking-tight leading-tight font-bold text-text-primary sm:whitespace-nowrap">
              <span>Built Where </span>
              <span className="text-primary relative inline-block">
                <span className="relative z-10">Cybersecurity</span>
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-primary/20 blur-xl"></span>
              </span>
              {" "}Is Real
            </h2>
          </div>

          {/* Tagline - Small Caps, Spaced Out */}
          <div className="text-center py-4 sm:py-6 md:py-8 overflow-x-hidden">
            <p className="text-xs xs:text-sm sm:text-base md:text-base font-montserrat tracking-widest sm:tracking-[0.15em] uppercase font-bold text-text-primary/70 flex flex-wrap justify-center gap-3 sm:gap-6">
              <span className="inline-block px-2 py-0.5 md:py-1 rounded-lg border border-neutral-200 ring ring-neutral-300 ring-offset-2 md:ring-offset-4"
                style={{
                  background:
                    "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                }}>ISRAEL-FOUNDED</span>
              
              <span className="inline-block px-2 py-0.5 md:py-1 rounded-lg border border-neutral-200 ring ring-neutral-300 ring-offset-2 md:ring-offset-4"
                style={{
                  background:
                    "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                }}>PRACTITIONER-LED</span>
              
              <span className="inline-block px-2 py-0.5 md:py-1 rounded-lg border border-neutral-200 ring ring-neutral-300 ring-offset-2 md:ring-offset-4"
                style={{
                  background:
                    "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                }}>GLOBALLY ALIGNED</span>
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-7xl mx-auto space-y-3 sm:space-y-4 md:space-y-5 mb-6 sm:mb-8 md:mb-8 pb-8 sm:pb-12 md:pb-0">
            {/* First Paragraph */}
            <p
              className="text-xs xs:text-sm sm:text-lg md:text-lg lg:text-xl font-montserrat font-medium leading-relaxed text-text-primary text-center"
              style={{ textShadow: "0 2px 22px #fff, 0 1px 4px #fff, 0 0px 0px #fff" }}
            >
              {parseBoldText("CYBERLABS was founded in Israel and built by professionals who have defended **real** systems, led investigations, and operated under **real cyber risk**.")}
            </p>

            {/* Second Paragraph */}
            <p
              className="text-xs xs:text-sm sm:text-lg md:text-lg lg:text-xl font-montserrat font-medium leading-relaxed text-text-primary text-center max-w-4xl mx-auto"
              style={{ textShadow: "0 2px 22px #fff, 0 1px 4px #fff, 0 0px 0px #fff" }}
            >
              We train cybersecurity professionals to think, investigate, and operate - not just learn tools.
            </p>

            {/* Horizontal Separator */}
            <div className="pb-6 sm:pb-8 md:pb-10"></div>

            {/* Section Title */}
            {/* <p className="text-center text-xs xs:text-sm sm:text-base font-montserrat font-bold tracking-widest uppercase text-text-primary/80 mb-4 sm:mb-6">
              WHAT DEFINES CYBERLABS
            </p> */}

            {/* Feature Cards - ContactHero style: centered icon above title, no border */}
            <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 pb-4 sm:pb-6 md:pb-0">
              {items.map((item, index) => {
                const IconComponent = item.Icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    initial="hidden"
                    animate={featuresInView ? "visible" : "hidden"}
                    className="rounded-md p-4 sm:p-6 md:p-8 group"
                  >
                    <div className="flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
                      <IconComponent isInView={featuresInView} />
                    </div>
                    <h4 className="text-center text-sm xs:text-base sm:text-lg md:text-xl font-inter-display text-primary font-semibold leading-tight tracking-tight mb-2 sm:mb-3 md:mb-4 gap-2 sm:gap-3">
                      <span>{parseBoldText(item.title)}</span>
                    </h4>
                    <p
                      className="text-xs xs:text-sm sm:text-base font-montserrat font-medium text-text-primary leading-relaxed text-center"
                      style={{ textShadow: "0 2px 22px #fff, 0 1px 4px #fff, 0 0px 0px #fff" }}
                    >
                      {item.body}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Horizontal Separator */}
            <div className="pb-6 sm:pb-8 md:pb-10"></div>
          </div>

          {/* Buttons - Enhanced Styling */}
          {/* <div className="flex flex-row flex-nowrap gap-3 sm:gap-4 justify-center items-center mb-16 px-2">
            <Link to="/request-callback" className="shrink-0">
              <button className="bg-primary text-white px-4 sm:px-5 py-2.5 sm:py-2 rounded-lg font-montserrat text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 active:scale-95 hover:bg-primary/90 cursor-pointer whitespace-nowrap">
                Request Callback
              </button>
            </Link>
            <Link to="/contact-cyberlabs" className="shrink-0">
              <button className="border border-dashed border-neutral-300 bg-neutral-200 text-text-primary px-3 xs:px-4 sm:px-5 py-2 rounded-md font-montserrat text-sm xs:text-base sm:text-lg font-medium transition active:scale-95 hover:text-text-primary hover:text-shadow-lg whitespace-nowrap cursor-pointer group "
                style={{
                  background: "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white"
                }}
              >
                Contact Us
              </button>
            </Link>
          </div> */}

          {/* Stats Section */}
          {/* <div className="grid grid-cols-3 gap-2 xs:gap-4 sm:gap-8 md:gap-10 lg:gap-12 text-center max-w-5xl mx-auto">
            <div className="flex flex-col items-center">
              <h3 className="text-lg xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-inter-display font-medium text-text-primary mb-1 sm:mb-2">
                <CountUp end={25} suffix="k+" duration={3} />
              </h3>
              <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-text-primary font-inter-display font-medium leading-tight">
                Students taught
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-lg xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-inter-display font-medium text-text-primary mb-1 sm:mb-2">
                <CountUp end={20} suffix="+" duration={3} />
              </h3>
              <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-text-primary font-inter-display font-medium leading-tight">
                Instructors
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-lg xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-inter-display font-medium text-text-primary mb-1 sm:mb-2">
                <CountUp end={500} suffix="hrs+" duration={3} />
              </h3>
              <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-text-primary font-inter-display font-medium leading-tight">
                Content
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
