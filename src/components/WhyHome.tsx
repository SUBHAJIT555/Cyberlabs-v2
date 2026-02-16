import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";
import { AnimatedHeading } from "./ui/animated-heading";
import { AnimatedList } from "./ui/animated-list";
import type { AnimatedListItem } from "./ui/animated-list";

const iconBoxStyle = {
  background: "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
};
const iconBoxClass = "flex items-center justify-center rounded p-0.5 sm:p-1 border border-neutral-200 bg-white shrink-0 group-hover:border-primary/60 group-hover:bg-primary/10 transition-all duration-300 text-primary ring ring-neutral-300 ring-offset-2 md:ring-offset-4 rounded-lg";

const WhyHome = () => {
  const ref = useRef(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const leftTitleRef = useRef<HTMLDivElement>(null);
  const rightTitleRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const titleInView = useInView(titleRef, { once: false, margin: "-100px" });
  const leftTitleInView = useInView(leftTitleRef, { once: false, margin: "-80px" });
  const rightTitleInView = useInView(rightTitleRef, { once: false, margin: "-80px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const leftCardVariants: Variants = {
    hidden: {
      opacity: 0,
      x: -150,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const rightCardVariants: Variants = {
    hidden: {
      opacity: 0,
      x: 150,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const leftSectionItems = [
    {
      text: "National cyber defense and intelligence operations",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 10a2 2 0 0 1 1.678 .911l.053 .089h7.269l.117 .007a1 1 0 0 1 .883 .993c0 5.523 -4.477 10 -10 10a1 1 0 0 1 -1 -1v-7.269l-.089 -.053a2 2 0 0 1 -.906 -1.529l-.005 -.149a2 2 0 0 1 2 -2m9.428 -1.334a1 1 0 0 1 -1.884 .668a8 8 0 1 0 -10.207 10.218a1 1 0 0 1 -.666 1.886a10 10 0 1 1 12.757 -12.772m-4.628 -.266a1 1 0 0 1 -1.6 1.2a4 4 0 1 0 -5.6 5.6a1 1 0 0 1 -1.2 1.6a6 6 0 1 1 8.4 -8.4" />
        </svg>
      ),
    },
    {
      text: "Security Operations Centers (SOCs)",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 4h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1" />
          <path d="M5 16h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" />
          <path d="M15 12h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1" />
          <path d="M15 4h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" />
        </svg>
      ),
    },
    {
      text: "Financial-sector and enterprise incident response",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 21l18 0" />
          <path d="M3 10l18 0" />
          <path d="M5 6l7 -3l7 3" />
          <path d="M4 10l0 11" />
          <path d="M20 10l0 11" />
          <path d="M8 14l0 3" />
          <path d="M12 14l0 3" />
          <path d="M16 14l0 3" />
        </svg>
      ),
    },
    {
      text: "Government and critical infrastructure cyber programs",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 9a6 6 0 1 0 12 0a6 6 0 0 0 -12 0" />
          <path d="M12 3c1.333 .333 2 2.333 2 6s-.667 5.667 -2 6" />
          <path d="M12 3c-1.333 .333 -2 2.333 -2 6s.667 5.667 2 6" />
          <path d="M6 9h12" />
          <path d="M3 20h7" />
          <path d="M14 20h7" />
          <path d="M10 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <path d="M12 15v3" />
        </svg>
      ),
    },
  ];

  const rightSectionItems = [
    {
      text: "Built and commanded cyber defense units",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M11.143 20.743a12 12 0 0 1 -7.643 -14.743a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3c.504 1.716 .614 3.505 .343 5.237" />
          <path d="M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138" />
        </svg>
      ),
    },
    {
      text: "Designed national-level cyber training and simulation programs",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M10 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
          <path d="M18 5a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
          <path d="M10 5a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
          <path d="M6 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
          <path d="M18 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
          <path d="M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
          <path d="M22 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
          <path d="M6 12h4" />
          <path d="M14 12h4" />
          <path d="M15 7l-2 3" />
          <path d="M9 7l2 3" />
          <path d="M11 14l-2 3" />
          <path d="M13 14l2 3" />
        </svg>
      ),
    },
    {
      text: "Responded to live cyber attacks affecting governments and enterprises",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M15.04 19.745c-.942 .551 -1.964 .976 -3.04 1.255a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 .195 6.015" />
          <path d="M19 16v3" />
          <path d="M19 22v.01" />
        </svg>
      ),
    },
    {
      text: "Operated across Israel, the United States, and global cyber environments",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M20.985 12.52a9 9 0 1 0 -7.52 8.36" />
          <path d="M3.6 9h16.8" />
          <path d="M3.6 15h10.9" />
          <path d="M11.5 3a17 17 0 0 0 0 18" />
          <path d="M12.5 3c2.313 3.706 3.07 7.856 2.27 12" />
          <path d="M19 16l-2 3h4l-2 3" />
        </svg>
      ),
    },
  ];

  const leftListItems: AnimatedListItem[] = leftSectionItems.map((item) => ({
    text: item.text,
    icon: (
      <span className={iconBoxClass} style={iconBoxStyle}>
        {item.icon}
      </span>
    ),
  }));

  const rightListItems: AnimatedListItem[] = rightSectionItems.map((item) => ({
    text: item.text,
    icon: (
      <span className={iconBoxClass} style={iconBoxStyle}>
        {item.icon}
      </span>
    ),
  }));

  return (
    <motion.section
      ref={ref}
      className="w-full mx-auto px-4 sm:px-5 md:px-10 lg:px-16 py-6 sm:py-8 md:py-12 lg:py-16"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Title Section */}
      <div ref={titleRef} className="mb-8 sm:mb-6 lg:mb-8">
        <AnimatedHeading
          inView={titleInView}
          lines={[
            { text: "WHY CYBERLABS INDIA IS DIFFERENT", className: "text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-montserrat font-semibold text-text-primary leading-tight wrap-break-words tracking-tight", as: "h3" },
          ]}
        />
      </div>

      {/* Desktop Layout: Two Sections Side by Side */}
      <div className="hidden lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-12 px-8 lg:px-12">
        {/* Left Section */}
        <motion.div variants={leftCardVariants} className="flex flex-col">
          <div ref={leftTitleRef} className="mb-4">
            <AnimatedHeading
              inView={leftTitleInView}
              lines={[
                { text: "Led by Israeli Cyber Defense Leadership", className: "text-text-primary text-lg sm:text-xl lg:text-2xl xl:text-3xl font-montserrat font-semibold", as: "h4" },
              ]}
            />
          </div>
          <p className="text-text-primary text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-tight tracking-tight font-bold font-inter-display mb-6">
            Led by Israeli Cyber Defense Leadership 
          </p>
          <p className="text-text-primary text-sm sm:text-base lg:text-lg xl:text-xl leading-tight tracking-tight font-semibold font-inter-display mb-6">
            Cybersecurity cannot be mastered through theory or tools alone. It must be learned from those who
            have <span className="font-extrabold">defended real systems, under real attack, with real consequences.</span>
          </p>
          <p className="text-text-primary text-sm sm:text-base lg:text-lg xl:text-xl leading-tight tracking-tight font-semibold font-inter-display mb-6">
            Cyberlabs India is guided by an <span className="font-extrabold">Israeli leadership and faculty team</span> with decades of experience
            across:
            
          </p>

          <AnimatedList
            items={leftListItems}
            viewportOnce={false}
            boldText={false}
            containerClassName="space-y-4 mb-6"
            itemClassName="flex items-start font-switzer text-text-primary text-sm sm:text-base lg:text-lg xl:text-xl group"
            contentClassName="flex-1 pt-0.5 font-inter-display font-medium"
            iconClassName="mt-0.5 mr-3 sm:mr-4 shrink-0"
          />

          <p className="text-text-primary text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed font-inter-display font-semibold mt-auto pt-4 italic">
            This is not academic cybersecurity. This is <span className="font-extrabold">Israeli cyber defense methodology applied to global threats.</span>
          </p>
        </motion.div>

        {/* Right Section */}
        <motion.div variants={rightCardVariants} className="flex flex-col">
          <div ref={rightTitleRef} className="mb-4">
            <AnimatedHeading
              inView={rightTitleInView}
              lines={[
                { text: "Leadership Shaped by Real Cyber Battlefields", className: "text-text-primary text-lg sm:text-xl lg:text-2xl xl:text-3xl font-montserrat font-semibold", as: "h4" },
              ]}
            />
          </div>
          <p className="text-text-primary text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-tight tracking-tight font-bold font-inter-display mb-6">
            Leadership Shaped by Real Cyber Battlefields.
          </p>
          
          <p className="text-text-primary text-sm sm:text-base lg:text-lg xl:text-xl leading-tight tracking-tight font-semibold font-inter-display mb-6">
            The leadership behind Cyberlabs India includes professionals who have: 

          </p>

          <AnimatedList
            items={rightListItems}
            viewportOnce={false}
            boldText={false}
            containerClassName="space-y-4 mb-6"
            itemClassName="flex items-start font-switzer text-text-primary text-sm sm:text-base lg:text-lg xl:text-xl group"
            contentClassName="flex-1 pt-0.5 font-inter-display font-medium"
            iconClassName="mt-0.5 mr-3 sm:mr-4 shrink-0"
          />

          <p className="text-text-primary text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed font-inter-display font-semibold mt-auto pt-4 italic">
            "This depth of experience defines how CYBERLABS INDIA trains - and why our graduates are different."
          </p>
        </motion.div>
      </div>

      {/* Mobile Layout: Stacked Sections */}
      <div className="lg:hidden space-y-8 sm:space-y-10">
        {/* Mobile - First Section */}
        <motion.div variants={cardVariants}>
          <div ref={leftTitleRef} className="mb-3 sm:mb-4">
            <AnimatedHeading
              inView={leftTitleInView}
              lines={[
                { text: "Led by Israeli Cyber Defense Leadership", className: "text-text-primary text-lg sm:text-xl md:text-2xl font-montserrat font-semibold", as: "h4" },
              ]}
            />
          </div>
          
          <p className="text-text-primary text-sm sm:text-base lg:text-lg xl:text-xl leading-tight tracking-tight font-semibold font-inter-display mb-6">
            Cybersecurity cannot be mastered through theory or tools alone. It must be learned from those who
            have <span className="font-extrabold">defended real systems, under real attack, with real consequences.</span>
          </p>
          <p className="text-text-primary text-sm sm:text-base lg:text-lg xl:text-xl leading-tight tracking-tight font-semibold font-inter-display mb-6">
            Cyberlabs India is guided by an <span className="font-extrabold">Israeli leadership and faculty team</span> with decades of experience
            across:

          </p>

          <AnimatedList
            items={leftListItems}
            viewportOnce={false}
            boldText={false}
            containerClassName="space-y-3 sm:space-y-4 mb-4 sm:mb-5"
            itemClassName="flex items-start font-inter-display text-text-primary text-sm sm:text-base md:text-lg group"
            contentClassName="flex-1 pt-0.5 font-inter-display font-medium"
            iconClassName="mt-0.5 mr-2 sm:mr-3 shrink-0"
          />

          <p className="text-text-primary text-sm sm:text-base md:text-lg font-inter-display tracking-tight font-semibold pt-3 sm:pt-4  leading-tight italic">
            "This depth of experience defines <span className="font-extrabold">how CYBERLABS INDIA trains - and why our graduates are different.</span>"
          </p>
        </motion.div>

        {/* Mobile - Second Section */}
        <motion.div variants={cardVariants}>
          <div ref={rightTitleRef} className="mb-3 sm:mb-4">
            <AnimatedHeading
              inView={rightTitleInView}
              lines={[
                { text: "Leadership Shaped by Real Cyber Battlefields", className: "text-text-primary text-lg sm:text-xl md:text-2xl font-montserrat font-semibold", as: "h4" },
              ]}
            />
          </div>
          <p className="text-text-primary text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-tight tracking-tight font-bold font-inter-display mb-6">
            Leadership Shaped by Real Cyber Battlefields.
          </p>

          <p className="text-text-primary text-sm sm:text-base lg:text-lg xl:text-xl leading-tight tracking-tight font-semibold font-inter-display mb-6">
            The leadership behind Cyberlabs India includes professionals who have:

          </p>

          <AnimatedList
            items={rightListItems}
            viewportOnce={false}
            boldText={false}
            containerClassName="space-y-3 sm:space-y-4 mb-4 sm:mb-5"
            itemClassName="flex items-start font-inter-display text-text-primary text-sm sm:text-base md:text-lg group"
            contentClassName="flex-1 pt-0.5 font-inter-display font-medium"
            iconClassName="mt-0.5 mr-2 sm:mr-3 shrink-0"
          />

          <p className="text-text-primary text-sm sm:text-base md:text-lg font-inter-display tracking-tight font-semibold pt-3 sm:pt-4 leading-tight italic">
            "This depth of experience defines <span className="font-extrabold italic">how CYBERLABS INDIA trains - and why our graduates are different."</span>
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyHome;
