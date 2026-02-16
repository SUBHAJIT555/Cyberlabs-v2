import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";
import { useInViewOnce } from "../../hooks/useInViewOnce.tsx";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { parseBoldText } from "@/lib/utils";

const ContactHero = () => {
  const { ref, visible } = useInViewOnce();
  const featuresRef = useRef(null);
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });

  // Animated SVG: world-search (Reach CYBERLABS Globally)
  const AnimatedIcon1 = ({ isInView }: { isInView: boolean }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
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
        d="M21 12a9 9 0 1 0 -9 9"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
      />
      <motion.path
        d="M3.6 9h16.8"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.3, delay: 1, repeat: Infinity, repeatDelay: 3 }}
      />
      <motion.path
        d="M3.6 15h7.9"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.3, delay: 1.2, repeat: Infinity, repeatDelay: 3 }}
      />
      <motion.path
        d="M11.5 3a17 17 0 0 0 0 18"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.5, delay: 1.4, repeat: Infinity, repeatDelay: 3 }}
      />
      <motion.path
        d="M12.5 3a16.984 16.984 0 0 1 2.574 8.62"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.5, delay: 1.6, repeat: Infinity, repeatDelay: 3 }}
      />
      <motion.path
        d="M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.5, delay: 2, repeat: Infinity, repeatDelay: 3 }}
      />
      <motion.path
        d="M20.2 20.2l1.8 1.8"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.3, delay: 2.5, repeat: Infinity, repeatDelay: 3 }}
      />
    </svg>
  );

  // Animated SVG: users-plus (Communicate With the Right Team)
  const AnimatedIcon2 = ({ isInView }: { isInView: boolean }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
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
        d="M5 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
      />
      <motion.path
        d="M3 21v-2a4 4 0 0 1 4 -4h4c.96 0 1.84 .338 2.53 .901"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.7, repeat: Infinity, repeatDelay: 3 }}
      />
      <motion.path
        d="M16 3.13a4 4 0 0 1 0 7.75"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.5, delay: 1.3, repeat: Infinity, repeatDelay: 3 }}
      />
      <motion.path
        d="M16 19h6"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.3, delay: 1.8, repeat: Infinity, repeatDelay: 3 }}
      />
      <motion.path
        d="M19 16v6"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.3, delay: 2.1, repeat: Infinity, repeatDelay: 3 }}
      />
    </svg>
  );

  // Animated SVG: shield-check (Engage With Confidence)
  const AnimatedIcon3 = ({ isInView }: { isInView: boolean }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
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
        d="M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
      />
      <motion.path
        d="M15 19l2 2l4 -4"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.4, delay: 1, repeat: Infinity, repeatDelay: 3 }}
      />
    </svg>
  );

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const items = [
    {
      title: "**Global Reach**",
      body: "Access CYBERLABS across regions under one unified global framework.",
      Icon: AnimatedIcon1,
    },
    {
      title: "**Right Team, Right Channel**",
      body: "Get connected to admissions, partnerships, or advisory teams directly.",
      Icon: AnimatedIcon2,
    },
    {
      title: "**Professional & Transparent Engagement**",
      body: "Clear communication, informed guidance, and respectful interaction.",
      Icon: AnimatedIcon3,
    },
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-screen w-full overflow-x-hidden overflow-y-auto"
    >
      {/* Fallback Background */}
      <div className="absolute inset-0 bg-linear-to-br from-background via-neutral-200 to-background" />

      {/* DottedGlowBackground */}
      <DottedGlowBackground
        gap={12}
        radius={2}
        opacity={0.5}
        speedScale={1}
        blur={2}
        color="rgba(43, 13, 62, 0.4)"
        glowColor="rgba(122, 63, 145, 0.7)"
        colorLightVar="--green-light"
        glowColorLightVar="--primary"
        colorDarkVar="--evening-dark"
        glowColorDarkVar="--text-primary"
      />

      {/* Vintage Masking Overlay - Top, Bottom, and Sides */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        {/* Top Mask */}
        <div
          className="absolute top-0 left-0 w-full h-1/3"
          style={{
            background:
              "linear-gradient(to bottom, rgba(245, 245, 245, 1) 0%, rgba(245, 245, 245, 0.8) 30%, rgba(245, 245, 245, 0) 100%)",
          }}
        />
        {/* Bottom Mask */}
        <div
          className="absolute bottom-0 left-0 w-full h-1/3"
          style={{
            background:
              "linear-gradient(to top, rgba(245, 245, 245, 1) 0%, rgba(245, 245, 245, 0.8) 30%, rgba(245, 245, 245, 0) 100%)",
          }}
        />
        {/* Left Side Mask */}
        <div
          className="absolute top-0 left-0 h-full w-1/3"
          style={{
            background:
              "linear-gradient(to right, rgba(245, 245, 245, 1) 0%, rgba(245, 245, 245, 0.8) 30%, rgba(245, 245, 245, 0) 100%)",
          }}
        />
        {/* Right Side Mask */}
        <div
          className="absolute top-0 right-0 h-full w-1/3"
          style={{
            background:
              "linear-gradient(to left, rgba(245, 245, 245, 1) 0%, rgba(245, 245, 245, 0.8) 30%, rgba(245, 245, 245, 0) 100%)",
          }}
        />
        {/* Radial Vignette for Vintage Look */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(245, 245, 245, 0.3) 70%, rgba(245, 245, 245, 0.8) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div
        className={`
          relative z-10 flex items-start md:items-center justify-center min-h-0 md:min-h-screen px-3 sm:px-6 md:px-8 lg:px-12 pt-16 sm:pt-20 md:pt-16
          transition-all duration-700 ease-out
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        `}
      >
        <div className="w-full max-w-7xl">
          {/* Heading - same style: large, bold, primary-highlighted phrases with blur */}
          <div className="text-center mb-2 sm:mb-3 md:mb-5 overflow-x-hidden">
            <h2 className="text-lg xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl font-inter-display mb-1 sm:mb-2 tracking-tight leading-tight font-bold text-text-primary">
              <span>Global </span>
              <span className="text-primary relative inline-block">
                <span className="relative z-10">Presence.</span>
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-primary/20 blur-xl"></span>
              </span>
              {" "}Direct{" "}
              <span className="text-primary relative inline-block">
                <span className="relative z-10">Access.</span>
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-primary/20 blur-xl"></span>
              </span>
            </h2>
          </div>

          {/* Tagline - bold, slightly smaller */}
          <div className="text-center mb-4 sm:mb-6 md:mb-8 overflow-x-hidden">
            <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-montserrat font-bold text-text-primary">
              One Organization. Multiple Locations. Clear Communication.
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-7xl mx-auto space-y-3 sm:space-y-4 md:space-y-5 mb-6 sm:mb-8 md:mb-8 pb-8 sm:pb-12 md:pb-0">
            {/* First Paragraph */}
            <p
              className="text-xs xs:text-sm sm:text-lg md:text-lg lg:text-xl font-montserrat font-medium leading-relaxed text-text-primary text-center"
              style={{ textShadow: "0 2px 22px #fff, 0 1px 4px #fff, 0 0px 0px #fff" }}
            >
              {parseBoldText("CYBERLABS operates as a globally connected cybersecurity education organization, with leadership, faculty, and operations across **India, the United States, and Israel.**")}
            </p>

            {/* Second Paragraph */}
            <p
              className="text-xs xs:text-sm sm:text-lg md:text-lg lg:text-xl font-montserrat font-medium leading-relaxed text-text-primary text-center max-w-4xl mx-auto"
              style={{ textShadow: "0 2px 22px #fff, 0 1px 4px #fff, 0 0px 0px #fff" }}
            >
              {parseBoldText("This page provides **direct, transparent access** to the teams responsible for programs, admissions, and partnerships - without intermediaries or generic inboxes.")}
            </p>

            {/* Horizontal Separator */}
            <div className="pb-6 sm:pb-8 md:pb-10"></div>

            {/* Feature Cards - centered icon above title, no border (RequestCallbackHero style) */}
            <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 pb-4 sm:pb-6 md:pb-0">
              {items.map((item, index) => {
                const IconComponent = item.Icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    initial="hidden"
                    animate={featuresInView ? "visible" : "hidden"}
                    className=" rounded-md p-4 sm:p-6 md:p-8 group"
                  >
                    <div className="flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
                      <IconComponent isInView={featuresInView} />
                    </div>
                    <h4 className="text-center text-sm xs:text-base sm:text-lg md:text-xl font-inter-display text-primary font-medium leading-tight mb-2 sm:mb-3 md:mb-4 gap-2 sm:gap-3">
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
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
