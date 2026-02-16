import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";

import DatabaseWithRestApi from "./ui/database-with-rest-api";
import { AnimatedHeading } from "./ui/animated-heading";
import { AnimatedList } from "./ui/animated-list";
import type { AnimatedListItem } from "./ui/animated-list";











const baseTitleClass = "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-montserrat font-semibold tracking-tight leading-tight md:leading-normal inline";

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
    { text: "Mission-critical", icon: <span className="text-primary">•</span> },
    { text: "Intelligence-led", icon: <span className="text-primary">•</span> },
    { text: "Continuously tested against real adversaries", icon: <span className="text-primary">•</span> },
    { text: "Integrated into national security, enterprises, and infrastructure", icon: <span className="text-primary">•</span> },
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
                <p className="text-base sm:text-lg md:text-xl font-inter-display text-text-primary leading-tight">
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
