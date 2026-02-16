import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";

import DatabaseWithRestApi from "./ui/database-with-rest-api";
import { AnimatedHeading } from "./ui/animated-heading";
import { AnimatedList } from "./ui/animated-list";
import type { AnimatedListItem } from "./ui/animated-list";











const baseTitleClass = "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-montserrat font-semibold tracking-tight leading-tight md:leading-normal inline";

// List item icons (no border)
const CurrentLocationIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-current-location w-4 h-4 sm:w-5 sm:h-5 text-primary">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <path d="M4 12a8 8 0 1 0 16 0a8 8 0 1 0 -16 0" />
    <path d="M12 2l0 2" />
    <path d="M12 20l0 2" />
    <path d="M20 12l2 0" />
    <path d="M2 12l2 0" />
  </svg>
);

const RadarIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-radar w-4 h-4 sm:w-5 sm:h-5 text-primary">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M12 10a2 2 0 0 1 1.678 .911l.053 .089h7.269l.117 .007a1 1 0 0 1 .883 .993c0 5.523 -4.477 10 -10 10a1 1 0 0 1 -1 -1v-7.269l-.089 -.053a2 2 0 0 1 -.906 -1.529l-.005 -.149a2 2 0 0 1 2 -2m9.428 -1.334a1 1 0 0 1 -1.884 .668a8 8 0 1 0 -10.207 10.218a1 1 0 0 1 -.666 1.886a10 10 0 1 1 12.757 -12.772m-4.628 -.266a1 1 0 0 1 -1.6 1.2a4 4 0 1 0 -5.6 5.6a1 1 0 0 1 -1.2 1.6a6 6 0 1 1 8.4 -8.4" />
  </svg>
);

const ShieldCheckIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-shield-check w-4 h-4 sm:w-5 sm:h-5 text-primary">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06" />
    <path d="M15 19l2 2l4 -4" />
  </svg>
);

const RouteSquare2Icon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-route-square-2 w-4 h-4 sm:w-5 sm:h-5 text-primary">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M14 5a2 2 0 0 0 -2 2v10a2 2 0 0 1 -2 2" />
    <path d="M3 17h4v4h-4l0 -4" />
    <path d="M17 3h4v4h-4l0 -4" />
  </svg>
);

const WhyIsrael = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const introRef = useRef(null);

  const titleInView = useInView(titleRef, { once: false, margin: "-100px" });
  const introInView = useInView(introRef, { once: false, margin: "-100px" });

  const fadeInUpVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const cyberDefenseItems: AnimatedListItem[] = [
    { text: "Mission-critical.", icon: CurrentLocationIcon },
    { text: "Intelligence-led.", icon: RadarIcon },
    { text: "Continuously tested against real adversaries.", icon: ShieldCheckIcon },
    { text: "Integrated into national security, enterprises, and infrastructure.", icon: RouteSquare2Icon },
  ];





  return (
    <section className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 sm:py-10 md:py-12 ">
      <div className="w-full">
        {/* Title Section */}
        <div
          ref={titleRef}
          className="mb-5 md:mb-7 lg:mb-8 flex flex-wrap items-baseline"
        >
          <AnimatedHeading
            inView={titleInView}
            lines={[
              { text: "WHY ", className: `${baseTitleClass} text-text-primary` },
              { text: "ISRAEL", className: `${baseTitleClass} text-primary` },
              { text: " LEADS GLOBAL CYBER DEFENSE ?", className: `${baseTitleClass} text-text-primary` },
            ]}
          />
        </div>

        {/* Intro Section - Left Right Layout */}
        <motion.div
          ref={introRef}
          variants={fadeInUpVariants}
          initial="hidden"
          animate={introInView ? "visible" : "hidden"}
          className="mb-12 md:mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-6">
              <motion.h3
                className="text-2xl sm:text-3xl md:text-4xl font-inter-display text-primary tracking-tight font-bold leading-tight"
                initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                Cybersecurity Forged in Real Conflict, Not Classrooms
              </motion.h3>
              <p className="text-lg sm:text-xl md:text-2xl font-inter-display text-text-primary leading-tight font-semibold">
                Israel is globally recognized as the leader in cybersecurity and cyber defense - not by theory, but by necessity.
              </p>
              <div className="space-y-4">
                <p className="text-base sm:text-lg md:text-xl font-inter-display text-text-primary leading-tight font-semibold">
                  Cyber defense in Israel is:
                </p>
                <AnimatedList
                  items={cyberDefenseItems}
                  viewportOnce={false}
                  boldText={false}
                  contentClassName="text-base sm:text-lg md:text-xl font-inter-display text-text-primary leading-tight font-semibold"
                  iconClassName="text-primary shrink-0 flex items-center pt-0.5 mr-2"
                  containerClassName="space-y-2 list-none pl-0"
                />
                <p className="text-base sm:text-lg md:text-xl font-inter-display text-text-primary leading-tight">
                  Israeli cyber professionals are trained to <span className="font-bold">defend live systems, respond to real attacks, and protect national-scale assets.</span>
                </p>
                <p className="text-lg sm:text-xl md:text-2xl font-inter-display text-text-primary leading-tight font-semibold">
                  This real-world mindset is what defines CYBERLABS.

                </p>
              </div>
            </div>

            {/* Right Side - Database/REST API Visual */}
            <div className="relative w-full h-full flex items-center justify-center">
              <DatabaseWithRestApi
                title="CYBERLABS INDIA"
                badgeTexts={{
                  first: "scan",
                  second: "protect",
                  third: "monitor",
                  fourth: "respond"
                }}
                buttonTexts={{
                  first: "CYBERLABS",
                  second: "Defense"
                }}
                lightColor="#27E0B3"
              />
            </div>
          </div>
        </motion.div>


      </div>
    </section>
  );
};

export default WhyIsrael;
