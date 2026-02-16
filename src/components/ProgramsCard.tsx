import React, { useEffect, useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";

import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import realAttackEnvironmentsImage from "../assets/img/Platform/REALATTACKENVIRONMENTS.webp";
import scenarioBasedMissionsImage from "../assets/img/Platform/SCENARIO-BASEDMISSIONS.webp";
import mitreAttAckAlignedLearningImage from "../assets/img/Platform/MITREATTACKALIGNEDLEARNING.webp";
import aiPoweredScoringPerformanceFeedbackImage from "../assets/img/Platform/AI-POWEREDSCORING&PERFORMANCEFEEDBACK.webp";
import gamifiedProgressionLeaderboardsImage from "../assets/img/Platform/GAMIFIEDPROGRESSION&LEADERBOARDS.webp";
import { Link } from "react-router";

gsap.registerPlugin(ScrollTrigger);

interface LearningTrack {
  id: number;
  title: string;
  icon: React.ComponentType<{ isInView: boolean; className?: string }>;
  description: string;
  image: string;
}

// Animated SVG Icon Components
const AnimatedTopologyIcon = ({ isInView }: { isInView: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-text-primary"
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
      d="M10 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
    />
    <motion.path
      d="M18 5a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.4, repeat: Infinity, repeatDelay: 3 }}
    />
    <motion.path
      d="M10 5a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.6, repeat: Infinity, repeatDelay: 3 }}
    />
    <motion.path
      d="M6 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.8, repeat: Infinity, repeatDelay: 3 }}
    />
    <motion.path
      d="M18 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.5, delay: 1, repeat: Infinity, repeatDelay: 3 }}
    />
    <motion.path
      d="M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.5, delay: 1.2, repeat: Infinity, repeatDelay: 3 }}
    />
    <motion.path
      d="M22 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.5, delay: 1.4, repeat: Infinity, repeatDelay: 3 }}
    />
    <motion.path
      d="M6 12h4"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.4, delay: 1.6, repeat: Infinity, repeatDelay: 3 }}
    />
    <motion.path
      d="M14 12h4"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.4, delay: 1.8, repeat: Infinity, repeatDelay: 3 }}
    />
    <motion.path
      d="M15 7l-2 3"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.4, delay: 2, repeat: Infinity, repeatDelay: 3 }}
    />
    <motion.path
      d="M9 7l2 3"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.4, delay: 2.2, repeat: Infinity, repeatDelay: 3 }}
    />
    <motion.path
      d="M11 14l-2 3"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.4, delay: 2.4, repeat: Infinity, repeatDelay: 3 }}
    />
    <motion.path
      d="M13 14l2 3"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.4, delay: 2.6, repeat: Infinity, repeatDelay: 3 }}
    />
  </svg>
);

const AnimatedTerminalIcon = ({ isInView }: { isInView: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-text-primary"
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
      d="M5 7l5 5l-5 5"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.6, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
    />
    <motion.path
      d="M12 19l7 0"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.5, repeat: Infinity, repeatDelay: 3 }}
    />
  </svg>
);

const AnimatedAnalyzeIcon = ({ isInView }: { isInView: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-text-primary"
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
      d="M20 11a8.1 8.1 0 0 0 -6.986 -6.918a8.095 8.095 0 0 0 -8.019 3.918"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.8, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
    />
    <motion.path
      d="M4 13a8.1 8.1 0 0 0 15 3"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.8, delay: 0.5, repeat: Infinity, repeatDelay: 3 }}
    />
    <motion.path
      d="M18 16a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.4, delay: 1, repeat: Infinity, repeatDelay: 3 }}
    />
    <motion.path
      d="M4 8a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.4, delay: 1.2, repeat: Infinity, repeatDelay: 3 }}
    />
    <motion.path
      d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.6, delay: 1.4, repeat: Infinity, repeatDelay: 3 }}
    />
  </svg>
);

const AnimatedShieldCheckIcon = ({ isInView }: { isInView: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-text-primary"
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
      d="M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.8, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
    />
    <motion.path
      d="M15 19l2 2l4 -4"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.6, repeat: Infinity, repeatDelay: 3 }}
    />
  </svg>
);

const AnimatedUserCodeIcon = ({ isInView }: { isInView: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-text-primary"
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
      d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.6, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
    />
    <motion.path
      d="M6 21v-2a4 4 0 0 1 4 -4h3.5"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.6, delay: 0.5, repeat: Infinity, repeatDelay: 3 }}
    />
    <motion.path
      d="M20 21l2 -2l-2 -2"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.4, delay: 0.9, repeat: Infinity, repeatDelay: 3 }}
    />
    <motion.path
      d="M17 17l-2 2l2 2"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.4, delay: 1.1, repeat: Infinity, repeatDelay: 3 }}
    />
  </svg>
);

const learningTracks: LearningTrack[] = [
  {
    id: 1,
    title: "Understand the Environment",
    icon: AnimatedTopologyIcon,
    description:
      "Architecture, assets, and trust assumptions",
    image: realAttackEnvironmentsImage,
  },
  {
    id: 2,
    title: "Execute the Scenario",
    icon: AnimatedTerminalIcon,
    description:
      "Hands-on labs, guided exercises, and simulations",
    image: scenarioBasedMissionsImage,
  },
  {
    id: 3,
    title: "Investigate and Analyze",
    icon: AnimatedAnalyzeIcon,
    description:
      "Logs, behavior, evidence, and indicators",
    image: mitreAttAckAlignedLearningImage,
  },
  {
    id: 4,
    title: "Respond and Improve",
    icon: AnimatedShieldCheckIcon,
    description:
      "Detection logic, mitigation steps, and remediation",
    image: aiPoweredScoringPerformanceFeedbackImage,
  },
  {
    id: 5,
    title: "Reinforce Through Self-Practice",
    icon: AnimatedUserCodeIcon,
    description:
      "Independent practice to build confidence and mastery",
    image: gamifiedProgressionLeaderboardsImage,
  },
];

const ProgramsCard: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const stickySpaceRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);
  const isIconsInView = useInView(iconsRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!wrapperRef.current || !stickySpaceRef.current) return;

    const cards = cardsRef.current;
    const stickySpace = stickySpaceRef.current;
    const animation = gsap.timeline();
    let maxCardHeight = 0;
    const cardSpacing = 24;

    function initCards() {
      animation.clear();

      maxCardHeight = Math.max(...cards.map((card) => card?.offsetHeight || 0));

      if (maxCardHeight === 0) {
        maxCardHeight = 480;
      }

      cards.forEach((card, index) => {
        if (!card) return;
        if (index > 0) {
          gsap.set(card, { y: index * (maxCardHeight + cardSpacing) });
          animation.to(card, { y: 0, duration: index * 0.5, ease: "none" }, 0);
        }
      });
    }

    const timer = setTimeout(initCards, 100);

    ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: "top top",
      pin: true,
      end: () =>
        `+=${cards.length * (maxCardHeight + cardSpacing) +
        stickySpace.offsetHeight
        }`,
      scrub: true,
      animation,
      invalidateOnRefresh: true,
    });

    ScrollTrigger.addEventListener("refreshInit", initCards);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.removeEventListener("refreshInit", initCards);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section className="min-h-screen  bg-bg text-text-primary px-4 sm:px-6 md:px-8 lg:px-16 py-16 sm:py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 sm:mb-10 md:mb-12"
        >
          <h3 className="text-xl xs:text-xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 sm:mb-6 md:mb-8 font-montserrat text-text-primary font-semibold tracking-tight">
            How Practical Learning Flows
          </h3>
          <p className="text-xl md:text-3xl lg:text-4xl text-text-primary max-w-5xl font-inter-display font-medium mb-4 sm:mb-0">
            Practical learning at CYBERLABS INDIA follows a {" "}
            <span className="text-primary capitalize">industry-focused</span>{" "}
            structured, real-world workflow:
          </p>
        </motion.div>

        {/* Stacked Cards Wrapper */}
        <div className="stack-wrapper relative" ref={wrapperRef}>
          <div className="stack-offset h-4" ref={stickySpaceRef}></div>

          <div className="services-stack min-h-[480px] sm:min-h-[500px] md:min-h-0 md:h-[400px] lg:h-[75vh] relative" ref={iconsRef}>
            {learningTracks.map((track, idx) => {
              const IconComponent = track.icon;

              return (
                <div
                  key={track.id}
                  className="stack-item absolute top-0 left-0 w-full"
                  ref={(el) => {
                    if (el) cardsRef.current[idx] = el;
                  }}
                >
                  <div className="group relative backdrop-blur-sm border border-neutral-300 border-dashed overflow-hidden transition-all duration-300 h-[480px] sm:h-[500px] md:h-[400px] lg:h-auto">
                    <div
                      className="flex flex-col md:flex-row h-full bg-white overflow-hidden"
                      style={{
                        background:
                          "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                      }}
                    >
                      {/* Left Side - Content */}
                      <div className="flex flex-col justify-between p-5 sm:p-6 lg:p-10 md:w-1/2">
                        {/* Top Content */}
                        <div>
                          {/* Track Number */}
                          <div className="flex items-center gap-4 mb-4 sm:mb-6">
                            <span
                              className=" text-4xl sm:text-5xl lg:text-6xl font-inter-display font-semibold"
                              style={{
                                WebkitTextStroke: "0.5px #252525",
                                color: "transparent",
                              }}
                            >
                              0{track.id}
                            </span>
                            <div className="h-px flex-1 bg-neutral-300 hidden md:block" />

                            {/* Mobile Button - Top Right */}
                            <div className="flex md:hidden items-center gap-2">
                              <Link to="/programs">
                                <button className="px-3 py-1.5 bg-background border border-neutral-300 border-dashed text-text-primary text-sm font-inter-display font-medium tracking-wider rounded-md transition-colors duration-300 flex items-center justify-center gap-1.5 cursor-pointer">
                                  <span>Explore Program</span>
                                  <FiArrowUpRight className="text-xs" />
                                </button>
                              </Link>
                            </div>
                          </div>

                          {/* Title */}
                          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-inter-display font-semibold text-text-primary mb-4 lg:mb-6 leading-tight tracking-tight">
                            {track.title}
                          </h3>
                        </div>

                        {/* Bottom Content */}
                        <div className="flex flex-col gap-4 sm:gap-6">
                          {/* Icon */}
                          <div
                            className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-md p-px"

                          >
                            {/* Main container */}
                            <div
                              className="w-full h-full rounded-md bg-background border border-neutral-300 border-dashed flex items-center justify-center"

                            >
                              <IconComponent isInView={isIconsInView} />
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-text-primary/80 text-sm sm:text-base md:text-lg lg:text-xl font-inter-display font-medium leading-relaxed tracking-wide">
                            {track.description}
                          </p>

                          {/* CTA Button - Desktop */}
                          <Link to="/programs">
                            <button className="hidden md:flex items-center gap-3 px-4 py-1.5 bg-background border border-neutral-300 border-dashed font-inter-display font-medium text-base sm:text-lg tracking-wider rounded-md transition-all duration-300 w-fit group/btn cursor-pointer text-text-primary">
                              <span>Explore Program</span>
                              <span className="w-8 h-8 rounded-lg bg-bg/20 flex items-center justify-center">
                                <FiArrowUpRight className="text-base group-hover/btn:rotate-45 transition-transform duration-300" />
                              </span>
                            </button>
                          </Link>
                        </div>
                      </div>

                      {/* Right Side - Image */}
                      <div className="flex flex-col md:w-1/2 p-4 sm:p-5 md:p-0 flex-1">
                        <div className="flex-1 flex items-center justify-center md:h-full md:p-6 lg:p-8">
                          <div className="relative w-full h-40 sm:h-44 md:h-full overflow-hidden">
                            <img
                              src={track.image}
                              alt={track.title}
                              className="w-full h-full object-cover transform transition-transform duration-700 "
                            />
                            {/* Image Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-bg/60 to-transparent opacity-60" />
                          </div>
                        </div>

                        {/* Mobile Button */}
                        <Link to="/programs">
                          <button className="mt-2 px-4 py-2 w-full bg-primary/20 hover:bg-primary/30 text-primary text-sm font-montserrat font-medium rounded-lg transition-colors duration-300 hidden items-center justify-center gap-2 cursor-pointer">
                            Explore →
                          </button>
                        </Link>
                      </div>
                    </div>

                    {/* Active Indicator */}
                    <div className="absolute top-4 sm:top-6 left-4 sm:left-6 w-2 h-2 sm:w-3 sm:h-3 rounded-sm bg-primary animate-pulse" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsCard;
