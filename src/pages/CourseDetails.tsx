import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, useNavigate } from "react-router";
import { IoArrowBack } from "react-icons/io5";
import ProgramHero from "../components/ui/ProgramDeatailHero";
import WhatsNew from "../components/ui/WhatsNew";
import ModuleExplained from "../components/ui/ModuleExplained";
// import LevelUp from "../components/LevelUp";
// import CallToAction from "../components/CallToAction";
import CallbackModal from "../components/CallbackModal";
import EnrollmentModal from "../components/EnrollmentModal";
import ModuleChart from "@/components/ModuleChart";
import CareerOpertunity from "@/components/CareerOpertunity";
import LaymanStory from "@/components/LaymanStory";
// import ProgramDescription from "@/components/ProgramDescription";
// import GradeFramework from "@/components/GradeFramework";
import ProgramTeaches from "@/components/ProgramTeaches";
// import ProgramDeepDive from "@/components/ProgramDeepDive";
import { useLenis } from "@/hooks/useLenis";

const CourseDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const lenis = useLenis();
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  const [showBackButton, setShowBackButton] = useState(false);
  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);
  const [isEnrollmentModalOpen, setIsEnrollmentModalOpen] = useState(false);
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const callToActionRef = useRef<HTMLDivElement>(null);

  // Show back button and Enroll / Request Callback bar after one scroll — uses Lenis like ScrollToTop
  useEffect(() => {
    if (!lenis) {
      setShowBackButton(false);
      setShowFloatingButton(false);
      return;
    }
    const viewportHeight = typeof window !== "undefined" ? window.innerHeight : 800;
    const scrollThreshold = viewportHeight; // appear after one viewport scroll
    const handleScroll = ({ scroll }: { scroll: number }) => {
      const show = scroll > scrollThreshold;
      setShowBackButton(show);
      setShowFloatingButton(show);
    };
    handleScroll({ scroll: lenis.scroll || 0 });
    lenis.on("scroll", handleScroll);
    return () => {
      lenis.off("scroll", handleScroll);
    };
  }, [lenis]);

  return (
    <>
      {/* Fixed full-viewport dashed grid background (same as About) */}
      <div
        className="fixed inset-0 h-screen w-full z-0 bg-white pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e2e8f0 1px, transparent 1px),
            linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
          `,
          backgroundSize: "5px 5px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
            repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
            repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
            radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
          `,
          WebkitMaskImage: `
            repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
            repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
            radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
          `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />
      <div className="relative z-10">
        <div ref={heroSectionRef}>
          <ProgramHero />
          {/* <ProgramDescription /> */}
        </div>
        <ModuleChart />
        {/* <ProgramDeepDive /> */}
        <ModuleExplained />
        <ProgramTeaches />
        <LaymanStory />
        <CareerOpertunity />
        <WhatsNew />
        {/* <GradeFramework /> */}
        {/* <LevelUp /> */}
        <div ref={callToActionRef}>
          {/* <CallToAction /> */}
        </div>

        {/* Floating Action Button - Appears when scrolling */}
        <AnimatePresence>
          {showFloatingButton && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-998 flex flex-row items-center gap-3 bg-neutral-200/20 backdrop-blur-sm text-background p-1.5 sm:p-2 border border-neutral-300 rounded-md w-[calc(100%-2rem)] sm:w-auto min-w-[280px] sm:min-w-[400px] max-w-[95vw] sm:max-w-[600px] "
            >
              {/* Enroll Now Button */}
              <button
                onClick={() => setIsEnrollmentModalOpen(true)}
                className="bg-primary hover:bg-white text-background hover:text-text-primary px-6 sm:px-8 md:px-10 py-1.5 sm:py-2 shadow-lg font-montserrat font-medium tracking-tight text-md sm:text-md md:text-base transition-all duration-300 text-center whitespace-nowrap flex-1 cursor-pointer rounded-md"
              >
                Enroll Now
              </button>

              {/* Request Callback Button */}
              <button
                onClick={() => setIsCallbackModalOpen(true)}
                className="bg-text-primary/80 hover:bg-text-primary text-background hover:text-background px-6 sm:px-8 md:px-10 py-1.5 sm:py-2 shadow-lg font-montserrat font-medium tracking-tight text-md sm:text-md md:text-base transition-all duration-300 text-center whitespace-nowrap rounded-md flex-1 cursor-pointer"
              >
                Request Callback
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Back Button - Left bottom, same height as ScrollToTop (right bottom), appears after two scrolls */}
        <button
          type="button"
          aria-label="Go back"
          onClick={() => navigate(-1)}
          className={`fixed bottom-20 left-4 sm:bottom-24 sm:left-6 md:bottom-8 md:left-8 z-900 inline-flex p-0.5 md:p-1 items-center justify-center rounded-md bg-white border border-neutral-300 ring ring-neutral-300 ring-offset-2 md:ring-offset-4 text-text-primary shadow-lg transition-all duration-300 ease-out hover:opacity-90 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-primary/50 motion-reduce:transition-none ${showBackButton
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 translate-y-8 sm:translate-y-10 scale-95 pointer-events-none"
            }`}
          style={{
            background:
              "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
          }}
        >
          <IoArrowBack className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-neutral-500" />
        </button>

        {/* Callback Modal */}
        <CallbackModal
          isOpen={isCallbackModalOpen}
          onClose={() => setIsCallbackModalOpen(false)}
        />

        {/* Enrollment Modal */}
        {slug && (
          <EnrollmentModal
            isOpen={isEnrollmentModalOpen}
            onClose={() => setIsEnrollmentModalOpen(false)}
            slug={slug}
          />
        )}
      </div>
    </>
  );
};

export default CourseDetails;
