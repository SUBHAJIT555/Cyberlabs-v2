import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { AnimatedHeading } from "./ui/animated-heading";

// Import images
import aspiringImage from "../assets/img/Learning-Enviorment/aspiring.webp";
import workingImage from "../assets/img/Learning-Enviorment/working-professionals.webp";
import advancedImage from "../assets/img/Learning-Enviorment/advanced-learners.webp";
import enterpriseImage from "../assets/img/Learning-Enviorment/enterprises-developing-internal.webp";
import academicImage from "../assets/img/Learning-Enviorment/academic-institutions-seekings.webp";




interface TargetAudience {
  image: string;
  title: string;
  description: string;
}

const For = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: false, margin: "-100px" });

  // Per-card scroll entrance: each card has a different cool animation
  const cardAnimations = [
    { initial: { opacity: 0, x: -80 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } },
    { initial: { opacity: 0, y: 60, scale: 0.88 }, whileInView: { opacity: 1, y: 0, scale: 1 }, transition: { duration: 0.7, ease: [0.34, 1.56, 0.64, 1] as const } },
    { initial: { opacity: 0, scale: 0.6, rotateY: -18 }, whileInView: { opacity: 1, scale: 1, rotateY: 0 }, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const }, style: { perspective: 800, transformStyle: "preserve-3d" as const } },
    { initial: { opacity: 0, x: 80 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } },
    { initial: { opacity: 0, y: 50, filter: "blur(12px)" }, whileInView: { opacity: 1, y: 0, filter: "blur(0px)" }, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
  ];

  const targetAudiences: TargetAudience[] = [
    {
      image: aspiringImage,
      title: "Aspiring cybersecurity professionals.",
      description: "Individuals starting their journey in cybersecurity, seeking structured learning and hands-on experience to build foundational skills.",
    },
    {
      image: workingImage,
      title: "Working professionals transitioning into cyber roles.",
      description: "Experienced professionals from other fields looking to pivot into cybersecurity, needing practical training and industry-relevant skills.",
    },
    {
      image: advancedImage,
      title: "Advanced learners building investigative capability.",
      description: "Cybersecurity practitioners aiming to enhance their investigation and analysis skills through advanced scenarios and real-world simulations.",
    },
    {
      image: enterpriseImage,
      title: "Enterprises developing internal cybersecurity skills.",
      description: "Organizations building internal cybersecurity capabilities through team training and skill development programs.",
    },
    {
      image: academicImage,
      title: "Academic institutions seeking industry-grade virtual labs.",
      description: "Educational institutions requiring enterprise-level virtual lab environments to provide students with practical, industry-aligned training.",
    },
  ];

  return (
    <motion.section
      ref={ref}
      className="w-full px-5 md:px-10 lg:px-16 py-4 sm:py-6 lg:py-6"
    >
      <div ref={headingRef} className="mb-6 sm:mb-8">
        <AnimatedHeading
          inView={headingInView}
          lines={[
            { text: "Who this environment is built for ?", className: "text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-montserrat font-semibold tracking-tight text-text-primary leading-tight" },
          ]}
        />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl mb-6 sm:mb-8 text-text-primary font-inter-display font-medium leading-tight"
      >
        The CYBERLABS cyber learning environment supports:
      </motion.p>

      {/* Five Boxes Grid - each card has its own scroll-triggered animation */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-0">
        {targetAudiences.map((audience, index) => {
          const isFirst = index === 0;
          const isLast = index === targetAudiences.length - 1;
          const anim = cardAnimations[index];

          return (
            <motion.div
              key={index}
              className={`relative p-4 sm:p-5 md:p-6 border border-neutral-200 border-b-0 sm:border-b ${!isLast ? "sm:border-r-0" : ""
                } ${isFirst
                  ? "rounded-tl-md rounded-tr-md sm:rounded-tr-none sm:rounded-bl-md"
                  : isLast
                    ? "rounded-bl-md rounded-br-md sm:rounded-tl-none sm:rounded-bl-none sm:rounded-tr-md sm:rounded-br-md"
                    : "sm:rounded-none"
                } flex flex-col overflow-hidden bg-white`}
              style={anim.style}
              initial={anim.initial}
              whileInView={anim.whileInView}
              viewport={{ once: false, amount: 0.4 }}
              transition={anim.transition}
            >
              <div className="relative z-10 flex flex-col">
                {/* Image */}
                <div className="mb-3 sm:mb-4 shrink-0 ring ring-neutral-200 ring-offset-2 md:ring-offset-4 rounded-md">
                  <img
                    src={audience.image}
                    alt={audience.title}
                    className="w-full h-auto object-cover rounded-md"
                  />
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg md:text-xl font-inter-display font-semibold text-text-primary leading-tight mb-2 sm:mb-3">
                  {audience.title}
                </h3>

                {/* Description */}
                {/* <p className="text-sm sm:text-base md:text-lg font-inter-display font-medium text-text-primary leading-tight">
                  {audience.description}
                </p> */}
              </div>
            </motion.div>
          );
        })}
      </div>
      <TypewriterText />
    </motion.section>
  );
};

// Typewriter component with flip animation
const phrases = [
  "ONE ENVIRONMENT.",
  "MULTIPLE LEARNING JOURNEYS.",
  "REAL OUTCOMES."
];

const TypewriterText = () => {
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true, margin: "-50px" });

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    let timeoutId: ReturnType<typeof setTimeout>;
    let typingTimeoutId: ReturnType<typeof setTimeout>;
    let flipTimeoutId: ReturnType<typeof setTimeout>;

    const startTyping = () => {
      setIsTyping(true);
      setIsFlipping(false);
      setCurrentText("");
      const phrase = phrases[currentPhraseIndex];
      let charIndex = 0;

      const typeChar = () => {
        if (charIndex < phrase.length) {
          setCurrentText(phrase.substring(0, charIndex + 1));
          charIndex++;
          typingTimeoutId = setTimeout(typeChar, 50); // Typing speed
        } else {
          setIsTyping(false);

          // Wait before flipping to next phrase
          timeoutId = setTimeout(() => {
            setIsFlipping(true);

            // After flip out animation, change phrase and flip in
            flipTimeoutId = setTimeout(() => {
              const nextIndex = currentPhraseIndex < phrases.length - 1
                ? currentPhraseIndex + 1
                : 0;
              setCurrentPhraseIndex(nextIndex);
              setIsFlipping(false);
            }, 300); // Half of flip duration
          }, 2000); // Wait 2 seconds before flipping
        }
      };

      typeChar();
    };

    // Small delay before starting
    timeoutId = setTimeout(startTyping, 300);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(typingTimeoutId);
      clearTimeout(flipTimeoutId);
    };
  }, [isInView, currentPhraseIndex]);

  return (
    <div ref={textRef} className="text-lg sm:text-xl md:text-2xl font-inter-display font-bold text-text-primary leading-tight my-6 md:my-8 min-h-10 flex items-center">
      <motion.span
        key={currentPhraseIndex}
        initial={{ rotateX: -90, opacity: 0 }}
        animate={isFlipping ? { rotateX: 90, opacity: 0 } : { rotateX: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{
          display: "inline-block",
          transformStyle: "preserve-3d",
        }}
      >
        {currentText}
        {isTyping && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block ml-1"
          >
            |
          </motion.span>
        )}
      </motion.span>
    </div>
  );
};

export default For;
