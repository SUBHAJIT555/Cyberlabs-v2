import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";
import aboutIndiaImage from "../assets/img/Home/ABOUTCYBERLABSINDIA.webp";
import { AnimatedHeading } from "./ui/animated-heading";
// import weUnderstandYou from "../assets/img/Home/weUnderstand.webp";



const mainTitleBaseClass = "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-montserrat font-semibold tracking-tight leading-tight md:leading-normal inline";

const AboutIndia = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef(null);
  const imageRef = useRef(null);
  const tagsRef = useRef(null);

  const titleInView = useInView(titleRef, { once: false, margin: "-100px" });
  const leftContentInView = useInView(leftContentRef, { once: false, margin: "-100px" });
  const imageInView = useInView(imageRef, { once: false, margin: "-100px" });
  const tagsInView = useInView(tagsRef, { once: false, margin: "-100px" });

  // Animation variants for left content (coming from left)
  const leftContentVariants: Variants = {
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

  // Animation variants for image (coming from right)
  const imageVariants: Variants = {
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

  const tags = [
    "Global technology companies",
    "Multinational enterprises",
    "Banks and financial institutions",
    "Critical infrastructure providers",
    "Governments and public-sector organizations",
  ];

  return (
    <section className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 sm:py-10 md:py-12 ">
      <div className="w-full">
        {/* Title Section */}
        <div ref={titleRef} className="mb-3 md:mb-4 flex flex-wrap items-baseline">
          <AnimatedHeading
            inView={titleInView}
            lines={[
              { text: "ABOUT ", className: `${mainTitleBaseClass} text-text-primary` },
              { text: "CYBERLABS INDIA.", className: `${mainTitleBaseClass} text-primary` },
            ]}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-start mb-12 md:mb-16">
          {/* Left side text content */}
          <div ref={leftContentRef} className="space-y-6 md:space-y-8">
            <motion.h3
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-inter-display text-primary font-bold mb-3 md:mb-4 leading-tight md:leading-normal tracking-tight"
              initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Bringing Israeli Cyber Defense Training to India.
            </motion.h3>

            <motion.p
              variants={leftContentVariants}
              initial="hidden"
              animate={leftContentInView ? "visible" : "hidden"}
              className="text-lg sm:text-xl md:text-2xl font-inter-display text-text-primary leading-tight md:leading-none max-w-4xl font-semibold"
            >
              CYBERLABS INDIA is the Indian launch of a globally proven, Israeli - led cyber defense training ecosystem.
            </motion.p>

            <motion.p
              variants={leftContentVariants}
              initial="hidden"
              animate={leftContentInView ? "visible" : "hidden"}
              className="text-text-primary text-lg sm:text-xl md:text-xl lg:text-2xl font-inter-display leading-tight md:leading-tight"
            >
              Through a strategic collaboration between{" "}
              <span className="font-semibold text-text-primary">Cyveritas Technology</span> and{" "}
              <span className="font-semibold text-text-primary">CYBERLABS USA</span>, CYBERLABS INDIA brings to India   <span className="font-bold">training programs designed by Israeli cyber defense leaders and practitioners.</span>
            </motion.p>

            <div ref={tagsRef}>
              <motion.p
                variants={leftContentVariants}
                initial="hidden"
                animate={leftContentInView ? "visible" : "hidden"}
                className="text-text-primary text-base sm:text-lg md:text-xl font-inter-display mb-5 md:mb-6 leading-tight md:leading-normal font-semibold"
              >
                These programs are built to meet the expectations of:
              </motion.p>

              <motion.div
                variants={tagContainerVariants}
                initial="hidden"
                animate={tagsInView ? "visible" : "hidden"}
                className="flex flex-wrap gap-2 md:gap-4"
              >
                {tags.map((tag, index) => (
                  <motion.div
                    key={index}
                    variants={tagVariants}
                    className="px-2 md:px-3 py-1 md:py-1 border border-neutral-200 rounded-xl bg-white text-text-primary text-sm sm:text-base md:text-lg font-inter-display transition-colors ring ring-neutral-300 ring-offset-2 md:ring-offset-4" style={{
                      background:
                        "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                    }}
                  >
                    {tag}
                  </motion.div>
                ))}
              </motion.div>

              <motion.p
                className="text-text-primary text-lg sm:text-xl md:text-2xl font-inter-display mt-6 leading-tight md:leading-normal italic underline underline-offset-4 decoration-neutral-300 decoration-1"
                initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                " CYBERLABS INDIA is built for{" "}
                <span className="font-semibold text-primary">global threats</span>,{" "}
                <span className="font-semibold text-primary">global standards</span>, and{" "}
                <span className="font-semibold text-primary">global careers</span> - with{" "}
                <span className="font-semibold text-primary">Israeli cyber defense</span> at its core. "
              </motion.p>
            </div>
          </div>

          {/* Right side image */}
          <motion.div
            ref={imageRef}
            variants={imageVariants}
            initial="hidden"
            animate={imageInView ? "visible" : "hidden"}
            className="lg:sticky lg:top-24 relative"
          >

            <div className="overflow-hidden rounded-xl border border-neutral-200 ring ring-neutral-300 ring-offset-4 md:ring-offset-8">
              {/* <div className="flex absolute bottom-1/3 md:bottom-[60%] -right-10 sm:-right-18 md:-right-20 lg:-right-10  items-center justify-center flex-col animate-float">
                <img className="lg:w-50 w-40 sm:w-60" alt="" fetchPriority="high" loading="eager" src={weUnderstandYou} />
                <h2 className="absolute flex w-10 justify-center -mt-5 leading-tight sm:-mt-10 font-inter-display text-white  font-medium text-center">
                  
                  We understand you
                </h2>
              </div> */}
              <img
                src={aboutIndiaImage}
                alt="About CYBERLABS INDIA"
                className="w-full h-auto object-cover rounded-xl "
              />
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutIndia;
