import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router";
// import textmask from "../../assets/img/text/text-mask.webp";
// import WrapButton from "./WrapButton";

interface CTAButton {
  text: string;
  link: string;
  variant?: "primary" | "secondary";
}

interface HeroProps {
  headline: string;
  subtext: string;
  backgroundImage: string;
  ctaButtons?: CTAButton[];
  height?: "sm" | "md" | "lg" | "full";
  showDivider?: boolean;
  titleSuffix?: string;
}

const Hero: React.FC<HeroProps> = ({
  headline,
  subtext,
  backgroundImage,
  ctaButtons = [],
  height = "full",
  showDivider = true,
  titleSuffix,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const heightClasses = {
    sm: "h-[50vh] min-h-[400px]",
    md: "h-[70vh] min-h-[500px]",
    lg: "h-[85vh] min-h-[600px]",
    full: "h-screen min-h-screen",
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden border-b-2 border-text ${heightClasses[height]}`}
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 w-full h-[120%] -top-10"
        style={{ y }}
      >
        <img
          src={backgroundImage}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/90 via-black/50 to-black/90" />
      </motion.div>

      {/* Content */}
      <motion.div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl space-y-8">
          <motion.div
            className="space-y-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal mb-4 font-inter-display text-background bg-clip-text leading-tight">
              {headline}
            </h1>
            {titleSuffix && (
              <h3 className="font-inter-display text-background font-light tracking-wide text-2xl md:text-3xl lg:text-4xl">
                {titleSuffix}
              </h3>
            )}
            {showDivider && (
              <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            )}
          </motion.div>

          <motion.p
            className="md:text-xl lg:text-2xl text-background font-inter-display max-w-2xl mx-auto leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {subtext}
          </motion.p>

          {/* CTA Buttons */}
          {ctaButtons.length > 0 && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center cursor-pointer"
            >
              {ctaButtons.map((button, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                >
                  {button.variant === "secondary" ? (
                    <Link to={button.link}>
                      <button className="bg-text-primary text-bg px-4 py-2 rounded-md font-montserrat text-base sm:text-lg md:text-xl lg:text-2xl hover:bg-white transition-all duration-300 cursor-pointer">
                        {button.text}
                      </button>
                    </Link>
                  ) : (
                    <Link to={button.link}>
                      <button className="bg-background/40 backdrop-blur-sm border border-neutral-300 border-dashed text-background px-4 py-2 rounded-md hover:bg-background hover:text-text-primary font-montserrat text-base sm:text-lg md:text-xl lg:text-2xl transition-all duration-300 cursor-pointer">
                        {button.text}
                      </button>
                    </Link>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
