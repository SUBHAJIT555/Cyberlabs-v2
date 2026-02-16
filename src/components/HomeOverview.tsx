import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";
import { MagicText } from "./ui/magic-text";
// Replace with your image when ready — e.g. import overviewImage from "@/assets/img/Home/your-image.webp";
import overviewImage from "@/assets/img/Home/homepageopening.svg";

const styleBrandWords = (word: string, index: number, words: string[]) => {
  const lowerWord = word.toLowerCase().replace(/[.,-]/g, "");
  const prevWord = index > 0 ? words[index - 1].toLowerCase().replace(/[.,-]/g, "") : "";
  const shouldStyle =
    lowerWord === "cyberlabs" ||
    (lowerWord === "india" && (prevWord === "cyberlabs" || index === 0)) ||
    lowerWord === "cyveritas" ||
    (lowerWord === "technology" && prevWord === "cyveritas") ||
    (lowerWord === "usa" && prevWord === "cyberlabs");
  if (shouldStyle) {
    return (
      <span className="font-inter-display uppercase font-semibold text-primary">
        {word}
      </span>
    );
  }
  return word;
};

const HomeOverview = () => {
  const ref = useRef(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      className="relative w-full px-5 md:px-10 lg:px-16 py-8 sm:py-12 lg:py-16"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Statement + content block — same style as IntroLearning (image left, content right) */}
      <motion.div
        ref={headingRef}
        variants={itemVariants}
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="relative rounded-xl border border-neutral-200 bg-white overflow-hidden ring ring-neutral-200 ring-offset-4 md:ring-offset-8"
      >
        {/* Dashed grid background (fade at top) */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #e2e8f0 1px, transparent 1px),
              linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
            `,
            backgroundSize: "1px 1px",
            backgroundPosition: "0 0, 0 0",
            maskImage: `
              repeating-linear-gradient(
                to right,
                black 0px,
                black 3px,
                transparent 3px,
                transparent 8px
              ),
              repeating-linear-gradient(
                to bottom,
                black 0px,
                black 3px,
                transparent 3px,
                transparent 8px
              ),
              radial-gradient(ellipse 70% 60% at 50% 0%, #000 40%, transparent 80%)
            `,
            WebkitMaskImage: `
              repeating-linear-gradient(
                to right,
                black 0px,
                black 3px,
                transparent 3px,
                transparent 8px
              ),
              repeating-linear-gradient(
                to bottom,
                black 0px,
                black 3px,
                transparent 3px,
                transparent 8px
              ),
              radial-gradient(ellipse 70% 60% at 50% 0%, #000 40%, transparent 80%)
            `,
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        />
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 sm:gap-8 md:gap-10 items-center p-6 sm:p-8 md:p-10 lg:p-12">
          {/* Image — left side (top on mobile). Replace src with your image when ready. */}
          <div className="order-1 md:order-1 flex justify-center md:justify-start shrink-0">
            <img
              src={overviewImage}
              alt=""
              className="w-full max-w-[240px] sm:max-w-[280px] md:w-[260px] md:max-w-none lg:w-[320px] h-auto"
            />
          </div>
          {/* Content — right side */}
          <div className="order-2 md:order-2 space-y-5 sm:space-y-6 text-center md:text-left">
            <motion.p
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-inter-display font-semibold text-text-primary leading-snug"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <span className="block sm:inline">Cybercrime has become one of the most serious threats to modern life.</span>
              <span className="block mt-2 sm:mt-3 text-primary font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">It impacts families, global enterprises, banks, institutions, and governments - every day, everywhere.</span>
            </motion.p>
            <div className="w-16 sm:w-20 h-0.5 bg-primary/30 mx-auto md:mx-0" aria-hidden />
            <div className="space-y-4 sm:space-y-5">
              <div className="text-lg sm:text-xl md:text-2xl font-inter-display font-medium text-text-primary leading-relaxed">
                <MagicText
                  text="CYBERLABS INDIA brings Israeli-led, real-world cybersecurity training to India - designed to prepare professionals for the same cyber threats faced by global companies and nations today. Launched by Cyveritas Technology, in collaboration with CYBERLABS USA, an Israeli-founded global cyber defense training organization, CYBERLABS India delivers one of the most advanced and practical cybersecurity training programs in the world."
                  className="text-text-primary font-medium leading-relaxed"
                  renderWord={styleBrandWords}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default HomeOverview;
