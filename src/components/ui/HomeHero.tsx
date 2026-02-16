import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { parseBoldText } from "@/lib/utils";
import CTAButton from "@/components/ui/CTAButton";
// import backgroundImage from "../../assets/img/backgrounds/bg.webp";
import backgroundVideo from "../../assets/img/Hero_vid_02.webm";

// Animated SVG: shield-code (Israeli Cyber Defense DNA)
const AnimatedShieldIcon = ({ isInView }: { isInView: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 sm:w-15 sm:h-15 text-white shrink-0">
    <motion.path stroke="none" d="M0 0h24v24H0z" fill="none" initial={{ pathLength: 0, opacity: 0 }} animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }} transition={{ duration: 0.3, delay: 0, repeat: Infinity, repeatDelay: 3 }} />
    <motion.path d="M12 21a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.078 7.024" initial={{ pathLength: 0, opacity: 0 }} animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }} transition={{ duration: 0.7, delay: 0.2, repeat: Infinity, repeatDelay: 3 }} />
    <motion.path d="M20 21l2 -2l-2 -2" initial={{ pathLength: 0, opacity: 0 }} animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }} transition={{ duration: 0.3, delay: 0.5, repeat: Infinity, repeatDelay: 3 }} />
    <motion.path d="M17 17l-2 2l2 2" initial={{ pathLength: 0, opacity: 0 }} animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }} transition={{ duration: 0.3, delay: 0.7, repeat: Infinity, repeatDelay: 3 }} />
  </svg>
);

// Animated SVG: user-shield (Taught by Real Cyber Operators)
const AnimatedGearIcon = ({ isInView }: { isInView: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 sm:w-15 sm:h-15 text-white shrink-0">
    <motion.path stroke="none" d="M0 0h24v24H0z" fill="none" initial={{ pathLength: 0, opacity: 0 }} animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }} transition={{ duration: 0.3, delay: 0, repeat: Infinity, repeatDelay: 3 }} />
    <motion.path d="M6 21v-2a4 4 0 0 1 4 -4h2" initial={{ pathLength: 0, opacity: 0 }} animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }} transition={{ duration: 0.5, delay: 0.2, repeat: Infinity, repeatDelay: 3 }} />
    <motion.path d="M22 16c0 4 -2.5 6 -3.5 6s-3.5 -2 -3.5 -6c1 0 2.5 -.5 3.5 -1.5c1 1 2.5 1.5 3.5 1.5" initial={{ pathLength: 0, opacity: 0 }} animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }} transition={{ duration: 0.6, delay: 0.5, repeat: Infinity, repeatDelay: 3 }} />
    <motion.path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" initial={{ pathLength: 0, opacity: 0 }} animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }} transition={{ duration: 0.4, delay: 0.9, repeat: Infinity, repeatDelay: 3 }} />
  </svg>
);

// Animated SVG: world-bolt (Aligned to Global Cyber Roles)
const AnimatedGlobeIcon = ({ isInView }: { isInView: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 sm:w-15 sm:h-15 text-white shrink-0">
    <motion.path stroke="none" d="M0 0h24v24H0z" fill="none" initial={{ pathLength: 0, opacity: 0 }} animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }} transition={{ duration: 0.3, delay: 0, repeat: Infinity, repeatDelay: 3 }} />
    <motion.path d="M20.985 12.52a9 9 0 1 0 -7.52 8.36" initial={{ pathLength: 0, opacity: 0 }} animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }} transition={{ duration: 0.6, delay: 0.2, repeat: Infinity, repeatDelay: 3 }} />
    <motion.path d="M3.6 9h16.8" initial={{ pathLength: 0, opacity: 0 }} animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }} transition={{ duration: 0.3, delay: 0.5, repeat: Infinity, repeatDelay: 3 }} />
    <motion.path d="M3.6 15h10.9" initial={{ pathLength: 0, opacity: 0 }} animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }} transition={{ duration: 0.3, delay: 0.7, repeat: Infinity, repeatDelay: 3 }} />
    <motion.path d="M11.5 3a17 17 0 0 0 0 18" initial={{ pathLength: 0, opacity: 0 }} animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }} transition={{ duration: 0.5, delay: 0.9, repeat: Infinity, repeatDelay: 3 }} />
    <motion.path d="M12.5 3c2.313 3.706 3.07 7.856 2.27 12" initial={{ pathLength: 0, opacity: 0 }} animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }} transition={{ duration: 0.5, delay: 1.1, repeat: Infinity, repeatDelay: 3 }} />
    <motion.path d="M19 16l-2 3h4l-2 3" initial={{ pathLength: 0, opacity: 0 }} animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }} transition={{ duration: 0.3, delay: 1.3, repeat: Infinity, repeatDelay: 3 }} />
  </svg>
);

const HomeHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const featuresRef = useRef(null);
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const [videoError, setVideoError] = useState(false);

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const whyItems = [
    { title: "**Israeli Cyber Defense DNA**", body: "Forged in one of the world's most advanced cybersecurity ecosystems.", Icon: AnimatedShieldIcon },
    { title: "**Taught by Real Cyber Operators**", body: "Led by professionals who have handled live attacks and investigations.", Icon: AnimatedGearIcon },
    { title: "**Aligned to Global Cyber Roles**", body: "Built for enterprises, platforms, and critical infrastructure worldwide.", Icon: AnimatedGlobeIcon },
  ];

  // Parallax scroll effect (desktop only)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Ensure video plays (especially on iOS)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set video properties explicitly for iOS compatibility
    video.setAttribute("autoplay", "true");
    video.setAttribute("muted", "true");
    video.setAttribute("playsinline", "true");
    video.setAttribute("loop", "true");
    video.muted = true;
    video.playsInline = true;
    video.loop = true;
    video.autoplay = true;

    // Function to attempt video playback
    const attemptPlay = async () => {
      try {
        await video.play();
        setVideoError(false);
      } catch (error) {
        console.log("Video play attempt failed:", error);
        // Don't set error immediately, video might still be loading
      }
    };

    // Handle successful video load
    const handleLoadedData = () => {
      setVideoError(false);
      attemptPlay();
    };

    // Handle when video metadata is loaded
    const handleLoadedMetadata = () => {
      attemptPlay();
    };

    // Handle when video can play
    const handleCanPlay = () => {
      attemptPlay();
    };

    // Handle when video can play through (fully loaded)
    const handleCanPlayThrough = () => {
      attemptPlay();
    };

    // Handle video load errors
    const handleError = (e: Event) => {
      console.error("Video error:", e);
      setVideoError(true);
    };

    // Add event listeners
    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("canplaythrough", handleCanPlayThrough);
    video.addEventListener("error", handleError);

    // Try to play immediately
    attemptPlay();

    // Also try after a short delay (iOS sometimes needs this)
    const timeoutId = setTimeout(() => {
      attemptPlay();
    }, 500);

    // Cleanup
    return () => {
      clearTimeout(timeoutId);
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("canplaythrough", handleCanPlayThrough);
      video.removeEventListener("error", handleError);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full overflow-x-hidden overflow-y-auto"
    >
      {/* Mobile CSS-only background (hidden on desktop) */}
      {/* <div
        className="absolute inset-0 md:hidden"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(192, 114, 224, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(192, 114, 224, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(39, 224, 179, 0.08) 0%, transparent 60%),
            linear-gradient(135deg, #111827 0%, #000000 50%, #1f2937 100%)
          `,
        }}
      /> */}

      {/* Fallback Background (desktop only) */}
      {/* <div className="hidden md:block absolute inset-0 bg-linear-to-br from-gray-900 via-black to-gray-800" /> */}

      {/* Background Video */}
      <motion.div className="absolute inset-0 z-1 overflow-hidden " style={{ y }}>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          preload="auto"
          webkit-playsinline="true"
          x5-playsinline="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 1
          }}
        >
          {/* Video source - corrected MIME type for webm */}
          <source
            src={backgroundVideo}
            type="video/webm"
          />
          {/* Fallback for browsers that don't support webm */}
          <source
            src={backgroundVideo}
            type="video/mp4"
          />
        </video>
        {/* Fallback background - only show if video fails to load */}
        {videoError && (
          <div
            className="absolute inset-0 bg-linear-to-br from-gray-900 via-black to-gray-800"
            style={{ zIndex: 0 }}
          />
        )}
      </motion.div>

      {/* Shader Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 2,
          background: `
            radial-gradient(circle at 20% 30%, rgba(192, 114, 224, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(39, 224, 179, 0.12) 0%, transparent 50%),
            linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.5) 100%),
            linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, transparent 50%, rgba(0, 0, 0, 0.2) 100%)
          `,
          mixBlendMode: 'multiply',
        }}
      />

      {/* Dither/Noise Shader Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 3,
          backgroundImage: `
            radial-gradient(circle at 0.5px 0.5px, rgba(0,0,0,0.4) 0.5px, transparent 0),
            radial-gradient(circle at 1.5px 1.5px, rgba(255,255,255,0.15) 0.5px, transparent 0),
            radial-gradient(circle at 2.5px 2.5px, rgba(0,0,0,0.3) 0.5px, transparent 0),
            radial-gradient(circle at 3.5px 3.5px, rgba(255,255,255,0.1) 0.5px, transparent 0)
          `,
          backgroundSize: '2px 2px, 2px 2px, 2px 2px, 2px 2px',
          backgroundPosition: '0 0, 1px 1px, 0 0, 1px 1px',
          mixBlendMode: 'overlay',
          opacity: 0.6,
        }}
      />


      {/* Content - unified for mobile & desktop, scrollable over video */}
      <div className="relative z-10 flex items-start justify-center min-h-screen py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-black/50">
        <div className="w-full max-w-7xl">
          {/* Intro: Headline 1 (small) + Headline 2 (large bold) */}
          <div className="text-center mb-3 sm:mb-4 md:mb-5 overflow-x-hidden">
            <p className="text-sm xs:text-base sm:text-lg md:text-2xl font-montserrat font-normal text-white/90 tracking-tight mb-1 sm:mb-2">
              Global Cyber Defense Training
            </p>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-inter-display tracking-tight leading-tight font-bold text-white">
              Built for Real-World Threats
            </h2>
          </div>

          {/* Paragraphs */}
          <div className="max-w-7xl mx-auto space-y-2 sm:space-y-3 md:space-y-4 mb-6 sm:mb-8">
            <p className="text-base xs:text-lg sm:text-xl md:text-xl lg:text-2xl font-montserrat font-medium leading-relaxed text-white text-center" style={{ textShadow: "0 2px 22px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.3)" }}>
              Training Real-World Cyber Defenders for a Digitally Exposed World
            </p>
            <p className="text-sm xs:text-base sm:text-lg md:text-lg font-montserrat font-semibold text-white/95 text-center">
              Israeli-founded. Practitioner-led.
            </p>
            <p className="text-base xs:text-lg sm:text-xl md:text-xl font-montserrat font-medium leading-relaxed text-white/90 text-center max-w-4xl mx-auto" style={{ textShadow: "0 2px 22px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.3)" }}>
              {parseBoldText("Preparing professionals to **defend, investigate, and operate** in real digital environments - not classrooms.")}
            </p>
          </div>

          {/* Horizontal Separator */}
          {/* <div className="border-t border-white/30 border-dashed my-6 sm:my-8 md:my-10" /> */}

          {/* WHY CYBERLABS INDIA */}

          <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 pb-4 sm:pb-6 md:pb-8">
            {whyItems.map((item, index) => {
              const IconComponent = item.Icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate={featuresInView ? "visible" : "hidden"}
                  className="rounded-md p-4 sm:p-6 md:p-8"
                >
                  <div className="flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
                    <IconComponent isInView={featuresInView} />
                  </div>
                  <h4 className="text-center text-sm xs:text-base sm:text-lg md:text-xl font-inter-display text-white font-medium leading-tight  mb-2 sm:mb-3 md:mb-4">
                    {parseBoldText(item.title)}
                  </h4>
                  <p className="text-xs xs:text-sm sm:text-base font-montserrat font-medium text-white leading-relaxed text-center" style={{ textShadow: "0 2px 22px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.3)" }}>
                    {item.body}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Horizontal Separator */}
          {/* <div className="border-t border-white/30 border-dashed my-6 sm:my-8 md:my-10" /> */}

          {/* PRIMARY ACTIONS */}

          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center items-center pb-8 sm:pb-12">
            <CTAButton to="/leadership-and-faculty" label="Leadership Team" variant="light" className="shrink-0 bg-linear-to-l from-neutral-100 to-neutral-500 font-inter-display" />
            <CTAButton to="/about-cyberlabs" label="About CYBERLABS" variant="dark" className="shrink-0 bg-linear-to-l from-neutral-600 to-neutral-900 font-inter-display" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
