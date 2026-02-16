import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";
import aboutUsaImage from "../assets/img/Home/ABOUTCYBERLABSUSA.webp";
import { AnimatedHeading } from "./ui/animated-heading";
// import buildYour from "../assets/img/Home/buildYour.webp";
const mainTitleBaseClass = "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-montserrat font-semibold tracking-tight leading-tight md:leading-normal inline";

const AboutUsa = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef(null);
  const imageRef = useRef(null);
  const tagsRef = useRef(null);

  const titleInView = useInView(titleRef, { once: false, margin: "-100px" });
  const rightContentInView = useInView(rightContentRef, { once: false, margin: "-100px" });
  const imageInView = useInView(imageRef, { once: false, margin: "-100px" });
  const tagsInView = useInView(tagsRef, { once: false, margin: "-100px" });

  // Animation variants for right content (coming from right)
  const rightContentVariants: Variants = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Animation variants for image (coming from left)
  const imageVariants: Variants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Animation variants for tags (popup effect)
  const tagContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const tagVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        type: "spring",
        stiffness: 200,
      },
    },
  };

  const professionalTags = [
    "Served in elite Israeli cyber and intelligence units",
    "Built and commanded national and enterprise cyber defense operations",
    "Designed large-scale cyber training frameworks",
    "Led real incident response and threat investigation teams",
  ];

  return (
    <section className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-4 sm:py-5 md:py-6 ">
      <div className="w-full">
        {/* Title Section */}
        <div ref={titleRef} className="mb-3 md:mb-4 flex flex-wrap items-baseline">
          <AnimatedHeading
            inView={titleInView}
            lines={[
              { text: "ABOUT ", className: `${mainTitleBaseClass} text-text-primary` },
              { text: "CYBERLABS USA.", className: `${mainTitleBaseClass} text-primary` },
            ]}
          />
        </div>

        {/* Main Content Grid - Image on left, Text on right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-start mb-12 md:mb-16">
          {/* Left side image */}
          <motion.div
            ref={imageRef}
            variants={imageVariants}
            initial="hidden"
            animate={imageInView ? "visible" : "hidden"}
            className="lg:sticky lg:top-24 order-1 lg:order-1 relative"
          >
            <div className="overflow-hidden rounded-xl border border-neutral-200 ring ring-neutral-300 ring-offset-4 md:ring-offset-8">
              {/* <div className="flex absolute text-2xl items-center justify-center -top-[5%] lg:-top-[3%] -left-10 sm:-left-18 md:-left-20 animate-float"><img className=" lg:w-65 w-40  sm:w-60" alt="" fetchPriority="high" loading="eager" src={buildYour} /><h1 className="absolute font-medium text-center leading-tight text-sm lg:text-2xl sm:text-xl flex justify-center flex-wrap -mt-7 sm:-mt-14 font-inter-display text-text-primary">Build your<span className="font-light w-full -mt-1  tracking-tight">career</span></h1></div> */}

              <img
                src={aboutUsaImage}
                alt="About CYBERLABS USA"
                className="w-full h-auto object-cover rounded-xl "
              />
            </div>
          </motion.div>

          {/* Right side text content */}
          <div ref={rightContentRef} className="space-y-6 md:space-y-8 order-2 lg:order-2">
            <motion.h3
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-inter-display text-primary font-bold mb-5 md:mb-6 leading-tight md:leading-normal"
              initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Israeli-Founded. Globally Respected.
            </motion.h3>

            <motion.p
              variants={rightContentVariants}
              initial="hidden"
              animate={rightContentInView ? "visible" : "hidden"}
              className="text-lg sm:text-xl md:text-2xl font-inter-display text-text-primary leading-tight md:leading-tight"
            >
              CYBERLABS USA is an Israeli-founded global cybersecurity training and simulation organization, created by leaders from Israel's cyber defense and intelligence ecosystem.
            </motion.p>

            <div ref={tagsRef}>
              <motion.p
                variants={rightContentVariants}
                initial="hidden"
                animate={rightContentInView ? "visible" : "hidden"}
                className="text-text-primary text-base sm:text-lg md:text-xl font-inter-display mb-5 md:mb-6 leading-tight md:leading-normal font-semibold"
              >
                Its programs are built by professionals who have:
              </motion.p>

              <motion.div
                variants={tagContainerVariants}
                initial="hidden"
                animate={tagsInView ? "visible" : "hidden"}
                className="flex flex-wrap gap-2 md:gap-4"
              >
                {professionalTags.map((tag, index) => (
                  <motion.div
                    key={index}
                    variants={tagVariants}
                    className="px-2 md:px-3 py-1 md:py-2 border border-neutral-200  rounded-xl ring ring-neutral-300 ring-offset-2 md:ring-offset-4 bg-white text-text-primary text-sm sm:text-base md:text-lg font-inter-display transition-colors shadow-[2px_2px_6px_0_rgba(0,0,0,0.05)]"
                    style={{
                      background:
                        "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                    }}
                  >
                    {tag}
                  </motion.div>
                ))}
              </motion.div>

              <motion.p
                className="text-text-primary text-lg sm:text-xl md:text-2xl font-inter-display mt-6 leading-tight md:leading-normal italic"
                initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                " This Israeli operational experience forms the foundation of every CYBERLABS program - now delivered in India through{" "}
                <span className="font-semibold text-primary">CYBERLABS INDIA</span>. "
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsa;
