import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";
import { CreditCard, Factory, Hospital, Shield, Lock, Database } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
// import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { AnimatedHeading } from "./ui/animated-heading";
import { AnimatedList } from "./ui/animated-list";
import type { AnimatedListItem } from "./ui/animated-list";

const GlobalThreat = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: false });


  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.6,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };


  // const titleVariants: Variants = {
  //   hidden: {
  //     opacity: 0,
  //     y: -20,
  //   },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       duration: 0.8,
  //       ease: "easeOut",
  //     },
  //   },
  // };

  const threatListItems: AnimatedListItem[] = [
    {
      text: "Steal life savings through digital fraud.",
      rest: "",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6 text-text-primary">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 19h-6a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4.5" />
          <path d="M3 10h18" />
          <path d="M16 19h6" />
          <path d="M19 16l3 3l-3 3" />
          <path d="M7.005 15h.005" />
          <path d="M11 15h2" />
        </svg>
      ),
    },
    {
      text: "Shut down businesses & supply chains.",
      rest: "",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6 text-text-primary">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 21c1.147 -4.02 1.983 -8.027 2 -12h6c.017 3.973 .853 7.98 2 12" />
          <path d="M12.5 13h4.5c.025 2.612 .894 5.296 2 8" />
          <path d="M9 5a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1" />
          <path d="M3 21l19 0" />
        </svg>
      ),
    },
    {
      text: "Target banks, financial systems, and customer trust. ",
      rest: "",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6 text-text-primary">
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
      text: "Disrupt hospitals, universities, governments, and public infrastructure.",
      rest: "",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6 text-text-primary">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M8 8v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
          <path d="M4 10a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -8" />
          <path d="M10 14h4" />
          <path d="M12 12v4" />
        </svg>
      ),
    },
  ];

  const timelineData = [
    {
      id: 1,
      title: "Ransomware Attacks",
      date: "2023-2024",
      content: "Criminals encrypt critical systems and demand payment, paralyzing hospitals, schools, and businesses. Learn to defend against encryption-based attacks and incident response protocols.",
      category: "Malware",
      icon: Lock,
      relatedIds: [2, 4],
      status: "in-progress" as const,
      energy: 95,
    },
    {
      id: 2,
      title: "Social Engineering",
      date: "2024",
      content: "Attackers manipulate human psychology through phishing, pretexting, and baiting to bypass technical defenses. Master the art of recognizing and preventing human-based attack vectors.",
      category: "Human Factor",
      icon: Shield,
      relatedIds: [1, 3, 5],
      status: "in-progress" as const,
      energy: 88,
    },
    {
      id: 3,
      title: "Data Breaches",
      date: "2023-2024",
      content: "Massive leaks of personal and corporate data expose millions. Understand database security, encryption, access controls, and compliance frameworks like GDPR and HIPAA.",
      category: "Data Security",
      icon: Database,
      relatedIds: [2, 4, 6],
      status: "in-progress" as const,
      energy: 85,
    },
    {
      id: 4,
      title: "Critical Infrastructure",
      date: "2024",
      content: "Nation-state actors target power grids, water systems, and transportation networks. Study SCADA security, industrial control systems, and critical infrastructure protection strategies.",
      category: "Infrastructure",
      icon: Hospital,
      relatedIds: [1, 3, 5],
      status: "in-progress" as const,
      energy: 90,
    },
    {
      id: 5,
      title: "Financial Fraud",
      date: "2024",
      content: "Sophisticated fraud schemes drain accounts through identity theft, payment fraud, and cryptocurrency scams. Learn fraud detection, transaction monitoring, and financial cybersecurity.",
      category: "Financial",
      icon: CreditCard,
      relatedIds: [2, 3, 6],
      status: "in-progress" as const,
      energy: 82,
    },
    {
      id: 6,
      title: "Supply Chain Attacks",
      date: "2023-2024",
      content: "Attackers compromise software vendors and third-party services to infiltrate multiple organizations. Understand vendor risk management, software supply chain security, and zero-trust architectures.",
      category: "Business",
      icon: Factory,
      relatedIds: [3, 4, 5],
      status: "in-progress" as const,
      energy: 78,
    },
  ];

  return (
    <motion.section
      ref={ref}
      className="relative w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 sm:py-10 md:py-12 bg-bg"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Content */}
      <div className="relative z-10">
        <div className="w-full">
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Left Column - Text Content */}
            <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
              {/* Main Title */}
              {/* <motion.div variants={titleVariants}> */}
              {/* <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-montserrat font-semibold text-text-primary mb-6 sm:mb-8 tracking-tight uppercase">
                  The Global Cyber Threat Reality.
                </h2> */}
              {/* </motion.div> */}
              <AnimatedHeading
                ref={headingRef as React.RefObject<HTMLDivElement>}
                inView={headingInView}
                lines={[
                  { text: "The Global Cyber Threat Reality.", className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-montserrat font-semibold text-text-primary mb-6 sm:mb-8 tracking-tight uppercase", },
                ]}
              />

              {/* Crisis Statement */}
              <motion.div variants={itemVariants} className="space-y-2">
                <p className="text-2xl sm:text-3xl md:text-4xl font-inter-display font-semibold text-primary leading-none">
                  Cybercrime Is a Global Crisis <span className="text-xl sm:text-2xl md:text-3xl font-inter-display font-semibold text-text-primary">With Real Human Consequences.</span>
                </p>

              </motion.div>

              {/* Introductory Paragraph */}
              <motion.div variants={itemVariants}>
                <p className="text-base sm:text-lg md:text-xl font-montserrat font-semibold tracking-tight text-text-primary leading-relaxed">
                  Modern cyber attacks :
                </p>
              </motion.div>

              {/* Bullet Points */}
              <AnimatedList
                items={threatListItems}
                viewportOnce={false}
                viewportAmount={0.5}
                duration={0.6}
                staggerDelay={0.1}
                xOffset={50}
              />

              {/* Concluding Statement */}
              <motion.div variants={itemVariants} className="pt-4 sm:pt-6">
                <p className="text-lg sm:text-xl md:text-2xl font-montserrat font-medium text-text-primary leading-tight">
                  Cybercrime operates continuously, across borders, and at massive scale.
                  The world no longer needs awareness. It needs <span className="font-bold">professionals trained to defend real systems
                    under real pressure.</span>
                </p>

              </motion.div>
            </motion.div>

            {/* Right Column - Radial Orbital Timeline */}
            <motion.div
              variants={itemVariants}
              className="relative w-full h-full min-h-[600px] overflow-hidden"
            >
              {/* Fallback Background */}
              <div className="absolute inset-0 " />

              {/* DottedGlowBackground - Very Subtle */}
              {/* <div className="absolute inset-0 opacity-100">
                <DottedGlowBackground
                  gap={16}
                  radius={1.5}
                  opacity={0.15}
                  speedScale={0.5}
                  color="rgba(43, 13, 62, 0.15)"
                  glowColor="rgba(122, 63, 145, 0.25)"
                  colorLightVar="--green-light"
                  glowColorLightVar="--primary"
                  colorDarkVar="--evening-dark"
                  glowColorDarkVar="--text-primary"
                />
              </div> */}

              {/* Masking Overlays - Top, Bottom, and Sides */}
              <div className="absolute inset-0 z-5 pointer-events-none">
                {/* Top Mask */}
                {/* <div
                  className="absolute top-0 left-0 w-full h-1/3"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(245, 245, 245, 0.95) 0%, rgba(245, 245, 245, 0.6) 40%, transparent 100%)",
                  }}
                /> */}
                {/* Bottom Mask */}
                {/* <div
                  className="absolute bottom-0 left-0 w-full h-1/3"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(245, 245, 245, 0.95) 0%, rgba(245, 245, 245, 0.6) 40%, transparent 100%)",
                  }}
                /> */}
                {/* Left Side Mask */}
                {/* <div
                  className="absolute top-0 left-0 h-full w-1/4"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(245, 245, 245, 0.9) 0%, rgba(245, 245, 245, 0.5) 50%, transparent 100%)",
                  }}
                /> */}
                {/* Right Side Mask */}
                {/* <div
                  className="absolute top-0 right-0 h-full w-1/4"
                  style={{
                    background:
                      "linear-gradient(to left, rgba(245, 245, 245, 0.9) 0%, rgba(245, 245, 245, 0.5) 50%, transparent 100%)",
                  }}
                /> */}
                {/* Radial Vignette */}
                {/* <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(245, 245, 245, 0.4) 80%, rgba(245, 245, 245, 0.7) 100%)",
                  }}
                /> */}
              </div>

              {/* Content */}
              <div className="relative z-10 w-full h-full">
                <RadialOrbitalTimeline timelineData={timelineData} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default GlobalThreat;
