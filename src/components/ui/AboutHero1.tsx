import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import CountUp from "react-countup";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

const AboutHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen h-screen w-full overflow-hidden border-text border-b-2"
    >
      {/* Fallback Background */}
      <div className="absolute inset-0 bg-linear-to-br from-background via-[#c59dd9] to-background" />

      {/* DottedGlowBackground */}
      <DottedGlowBackground
        gap={12}
        radius={2}
        opacity={0.4}
        speedScale={1}
        color="rgba(43, 13, 62, 0.3)"
        glowColor="rgba(122, 63, 145, 0.6)"
        colorLightVar="--green-light"
        glowColorLightVar="--primary"
        colorDarkVar="--evening-dark"
        glowColorDarkVar="--text-primary"
      />

      {/* Smooth Gradient Fade Out at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 md:h-48 bg-linear-to-t from-background via-background/80 to-transparent pointer-events-none z-5" />

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-linear-to-br from-black/85 via-black/60 to-black/85 xs:from-black/80 xs:via-black/50 xs:to-black/80 sm:from-black/70 sm:via-black/40 sm:to-black/70" /> */}

      {/* Content */}
      <motion.div className="relative z-10 flex items-center justify-center h-full text-center text-text-primary px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl w-full">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-inter-display text-text-primary mb-4 sm:mb-6 md:mb-8 tracking-tighter leading-tight sm:leading-none"
          >
            building cyber defenders for a{" "}
            <span className="text-primary font-light">safer digital world</span>
          </motion.h2>

          {/* Punchline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 md:mb-12 text-text-primary tracking-tight max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto font-montserrat leading-relaxed px-2 xs:px-0"
          >
            India's Premier Online Cybersecurity Training Platform - Empowering
            the Next Generation of Security Professionals through cutting-edge
            education and real-world experience.
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 md:mb-16 lg:mb-20"
          >
            <motion.div whileTap={{ scale: 0.95 }}>
              <Link to="/programs">
                <button className="bg-primary text-black px-4 py-2 rounded-md font-montserrat  text-base sm:text-lg md:text-xl lg:text-2xl hover:bg-text-primary hover:text-black transition-all duration-300 cursor-pointer">
                  Explore Our Programs
                </button>
              </Link>
            </motion.div>
            <motion.div whileTap={{ scale: 0.95 }}>
              <Link to="/contact">
                <button className="bg-transparent border-2 border-primary text-primary px-4 py-2 rounded-md font-montserrat  text-base sm:text-lg md:text-xl lg:text-2xl hover:bg-primary hover:text-black transition-all duration-300 cursor-pointer">
                  Contact Us Now
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="grid grid-cols-3 gap-2 xs:gap-4 sm:gap-8 md:gap-10 lg:gap-12 text-center max-w-5xl mx-auto"
          >
            <div className="flex flex-col items-center">
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-lg xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-switzer font-light text-text-primary mb-1 sm:mb-2"
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                >
                  <CountUp end={25} suffix="k+" duration={3} />
                </motion.span>
              </motion.h3>
              <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-text-primary/80 font-montserrat font-bold leading-tight">
                Students taught
              </p>
            </div>

            <div className="flex flex-col items-center">
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-lg xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-switzer font-light text-text-primary mb-1 sm:mb-2"
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                >
                  <CountUp end={20} suffix="+" duration={3} />
                </motion.span>
              </motion.h3>
              <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-text-primary/80 font-montserrat font-bold leading-tight">
                Instructors
              </p>
            </div>

            <div className="flex flex-col items-center">
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-lg xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-switzer font-light text-text-primary mb-1 sm:mb-2"
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                >
                  <CountUp end={500} suffix="hrs+" duration={3} />
                </motion.span>
              </motion.h3>
              <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-text-primary/80 font-montserrat font-bold leading-tight">
                Content
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutHero;
