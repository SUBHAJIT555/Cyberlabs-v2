import { motion, useInView, useAnimationControls } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  FaPython,
  FaLinux,
  FaWindows,
  FaDocker,
  FaAws,
  FaTerminal,
  FaMicrosoft,
} from "react-icons/fa";
import {
  SiKubernetes,
  SiMetasploit,
  SiWireshark,
  SiBurpsuite,
  SiJavascript,
  SiCplusplus,
  SiC,
  SiMysql,
} from "react-icons/si";

import { IoBugOutline } from "react-icons/io5";
import { IoKeyOutline } from "react-icons/io5";
import { TbRobot } from "react-icons/tb";
import { LiaSkullCrossbonesSolid } from "react-icons/lia";
import { MdLockOutline } from "react-icons/md";
import { GrLineChart } from "react-icons/gr";
import { BsShieldLock } from "react-icons/bs";

import { AnimatedHeading } from "./ui/animated-heading";
import { AnimatedList } from "./ui/animated-list";
import type { AnimatedListItem } from "./ui/animated-list";









const AiDriven = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: false, margin: "-100px" });
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
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

  const imageVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 1.1,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const TechItem = ({
    tech,
    boxSize,
    iconSize,
    index,
    isInView
  }: {
    tech: { name: string; icon?: React.ComponentType<{ className?: string; style?: React.CSSProperties }>; imageUrl?: string; category: string; description?: string };
    boxSize: number;
    iconSize: number;
    index: number;
    isInView: boolean;
  }) => {
    return (
      <motion.div
        className="flex items-center justify-center relative"
        style={{
          width: boxSize,
          height: boxSize,
          flexShrink: 0,
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{
          delay: index * 0.01,
          duration: 0.3,
          ease: "easeOut",
        }}
      >
        {/* Grid box container - no gap, boxes touch each other */}
        <div
          className="flex items-center justify-center bg-white border-l border-b border-t border-neutral-300 border-dashed relative"
          style={{
            background:
              "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
            width: boxSize,
            height: boxSize,
          }}
        >
          {/* Logo/Icon */}
          {tech.imageUrl ? (
            <img
              src={tech.imageUrl}
              alt={tech.name}
              className="object-contain"
              style={{ width: iconSize, height: iconSize, minWidth: iconSize, minHeight: iconSize }}
            />
          ) : tech.icon ? (
            <div style={{ width: iconSize, height: iconSize }}>
              {(() => {
                const IconComponent = tech.icon;
                return <IconComponent className="text-primary" style={{ width: iconSize, height: iconSize }} />;
              })()}
            </div>
          ) : null}
        </div>
      </motion.div>
    );
  };

  const MarqueeRow = ({
    techItems,
    direction,
    speed,
    iconSize,
    isInView
  }: {
    techItems: Array<{ name: string; icon?: React.ComponentType<{ className?: string; style?: React.CSSProperties }>; imageUrl?: string; category: string; description?: string }>;
    direction: "left" | "right";
    speed: number;
    iconSize: number;
    isInView: boolean;
  }) => {
    const controls = useAnimationControls();

    // Duplicate items enough times for seamless infinite loop
    // Need at least 2 full sets to ensure seamless transition
    const duplicatedItems = [...techItems, ...techItems, ...techItems, ...techItems];
    const boxSize = iconSize + 40;
    const totalWidth = techItems.length * boxSize;

    useEffect(() => {
      const startX = direction === "left" ? 0 : -totalWidth;
      const endX = direction === "left" ? -totalWidth : 0;

      controls.start({
        x: [startX, endX],
        transition: {
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        },
      });
    }, [controls, direction, speed, totalWidth]);

    return (
      <div
        className="relative overflow-hidden w-full"
      >
        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to right, var(--background, #f5f5f5), transparent)",
          }}
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to left, var(--background, #f5f5f5), transparent)",
          }}
        />

        <motion.div
          className="flex"
          animate={controls}
          style={{
            width: "fit-content",
          }}
        >
          {duplicatedItems.map((tech, index) => (
            <TechItem
              key={`${tech.name}-${index}`}
              tech={tech}
              boxSize={boxSize}
              iconSize={iconSize}
              index={index}
              isInView={isInView}
            />
          ))}
        </motion.div>
      </div>
    );
  };

  const techStack = [
    { name: "Python", icon: FaPython, category: "Programming", description: "Scripting & automation for security tasks." },
    { name: "C", icon: SiC, category: "Programming", description: "Low-level programming for security research." },
    { name: "C++", icon: SiCplusplus, category: "Programming", description: "System-level programming & exploit development." },
    { name: "JavaScript", icon: SiJavascript, category: "Programming", description: "Web security & client-side exploits." },
    { name: "Bash", icon: FaTerminal, category: "Programming", description: "Shell scripting for automation & penetration testing." },
    { name: "PowerShell", icon: FaMicrosoft, category: "Programming", description: "Windows automation & security administration." },
    { name: "Linux (Kali / Ubuntu)", icon: FaLinux, category: "Operating System", description: "Primary OS for penetration testing." },
    { name: "Windows Internals", icon: FaWindows, category: "Operating System", description: "Enterprise environment simulation." },
    { name: "SQL", icon: SiMysql, category: "Database", description: "Database security & SQL injection testing." },
    { name: "Docker", icon: FaDocker, category: "Containerization", description: "Container-based environments." },
    { name: "Kubernetes", icon: SiKubernetes, category: "Containerization", description: "Container orchestration platform." },
    { name: "AWS Cloud", icon: FaAws, category: "Cloud Platform", description: "Cloud infrastructure & services." },
    { name: "Wireshark", icon: SiWireshark, category: "Security Tool", description: "Network protocol analyzer." },
    { name: "Metasploit", icon: SiMetasploit, category: "Security Tool", description: "Exploitation framework for testing." },
    { name: "Burp Suite", icon: SiBurpsuite, category: "Security Tool", description: "Web application security testing." },
    { name: "Cryptography & Data Protection", icon: MdLockOutline, category: "Security Domain", description: "Encryption & data security." },
    { name: "Identity & Access Management (IAM)", icon: IoKeyOutline, category: "Security Domain", description: "Access control & authentication." },
    { name: "Malware Analysis & Reverse Engineering", icon: LiaSkullCrossbonesSolid, category: "Security Domain", description: "Threat analysis & code reverse engineering." },
    { name: "Threat Intelligence & SOAR Automation", icon: TbRobot, category: "Security Domain", description: "Automated threat response & intelligence." },
    { name: "Vulnerability Assessment & Scanning", icon: IoBugOutline, category: "Security Domain", description: "Security scanning & vulnerability detection." },
    { name: "SIEM & Log Monitoring", icon: GrLineChart, category: "Security Domain", description: "Security information & event management." },
    { name: "EDR / XDR Security", icon: BsShieldLock, category: "Security Domain", description: "Endpoint detection & response." },

  ];

  const features = [
    {
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 7l5 5l-5 5" /><path d="M12 19l7 0" /></svg>`,
      text: "Practical hands-on exercises",
    },
    {
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" /><path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2" /><path d="M9 14l2 2l4 -4" /></svg>`,
      text: "Assessment-based lab scenarios",
    },
    {
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4" /><path d="M15 19l2 2l4 -4" /></svg>`,
      text: "Guided instructor-led exercises",
    },
    {
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h3.5" /><path d="M20 21l2 -2l-2 -2" /><path d="M17 17l-2 2l2 2" /></svg>`,
      text: "Independent self-practice sessions",
    },
    {
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M19 7a2 2 0 1 0 0 -4a2 2 0 0 0 0 4" /><path d="M11 19h5.5a3.5 3.5 0 0 0 0 -7h-8a3.5 3.5 0 0 1 0 -7h4.5" /></svg>`,
      text: "End-to-end investigation workflows",
    },
    {
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 9v-1a3 3 0 0 1 6 0v1" /><path d="M8 9h8a6 6 0 0 1 1 3v3a5 5 0 0 1 -10 0v-3a6 6 0 0 1 1 -3" /><path d="M3 13l4 0" /><path d="M17 13l4 0" /><path d="M12 20l0 -6" /><path d="M4 19l3.35 -2" /><path d="M20 19l-3.35 -2" /><path d="M4 7l3.75 2.4" /><path d="M20 7l-3.75 2.4" /></svg>`,
      text: "Controlled real-world attack simulations (in progressive development)",
    },
  ];

  const featuresListItems: AnimatedListItem[] = features.map((f) => ({
    text: f.text,
    icon: (
      <span
        className="flex items-center justify-center bg-white border border-neutral-300 border-dashed rounded p-0.5 sm:p-1 mt-1 shrink-0 text-primary"
        style={{
          background: "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
          width: 24,
          height: 24,
        }}
        dangerouslySetInnerHTML={{ __html: f.svg }}
      />
    ),
  }));

  return (
    <motion.section
      ref={ref}
      className="w-full mx-auto px-5 md:px-10 lg:px-16 py-8 sm:py-12 lg:py-16"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div>
        {/* Title Section */}
        <motion.div
          className="mb-8 sm:mb-12 lg:mb-16  md:px-10 lg:px-16"
          variants={containerVariants}
        >
          <div ref={headingRef} className="mb-4">
            <AnimatedHeading
              inView={headingInView}
              lines={[
                { text: "Virtual Cyber Simulator (Core Platform)", className: "text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-montserrat text-text-primary leading-tight tracking-tight font-semibold" },
              ]}
            />
          </div>

          <p className="text-text-primary text-lg sm:text-xl lg:text-2xl xl:text-3xl font-inter-display font-medium mb-8">
            At the center of the CYBERLABS learning environment is a <span className="text-primary font-inter-display font-bold"> comprehensive virtual cyber simulator
              with advanced lab infrastructure.</span>
            This simulator serves as the <span className="text-primary font-inter-display font-bold">primary platform for all practical learning </span> across programs.
          </p>
          <motion.div
            className="w-full h-px mt-4 sm:mt-6"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            style={{
              originX: 0,
              borderBottom: "1.5px dashed #d1d5db", // #d1d5db is tailwind's neutral-300
              width: "100%",
            }}
          />
        </motion.div>

        {/* Content Grid - Desktop: Tech Stack Left, Content Right */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16 px-5 md:px-10 lg:px-16">
          {/* Tech Stack Section - Marquee Grid */}
          <motion.div
            variants={imageVariants}
            className="relative flex flex-col justify-center min-h-[450px] w-full overflow-visible"
          >
            {size.width > 0 && (() => {
              const iconSize = 48;
              const rowHeight = iconSize + 32;

              // Split tech stack into 6 rows for desktop - evenly distribute items
              const numRows = 6;
              const itemsPerRow = Math.floor(techStack.length / numRows);
              const remainder = techStack.length % numRows;
              const rows: typeof techStack[] = [];
              let currentIndex = 0;

              for (let i = 0; i < numRows; i++) {
                const itemsInThisRow = itemsPerRow + (i < remainder ? 1 : 0);
                rows.push(techStack.slice(currentIndex, currentIndex + itemsInThisRow));
                currentIndex += itemsInThisRow;
              }

              return (
                <div className="relative w-full space-y-0 overflow-visible">
                  {rows.map((row, index) => (
                    <div key={index} className="relative overflow-visible" style={{ height: rowHeight }}>
                      <MarqueeRow
                        techItems={row}
                        direction={index % 2 === 0 ? "left" : "right"}
                        speed={20 + index * 2}
                        iconSize={iconSize}
                        isInView={isInView}
                      />
                    </div>
                  ))}
                </div>
              );
            })()}
          </motion.div>

          {/* Content Section */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-center"
          >


            <div className="mb-6">
              <div className="mb-6">
                <motion.h3
                  className="text-text-primary text-xl sm:text-2xl lg:text-3xl font-inter-display font-semibold"
                  initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  Students use the simulator throughout the course for:
                </motion.h3>
              </div>
              <AnimatedList
                items={featuresListItems}
                viewportOnce={false}
                viewportAmount={0.5}
                duration={0.6}
                staggerDelay={0.1}
                xOffset={50}
                containerClassName="space-y-4"
                contentClassName="text-text-primary text-base sm:text-lg lg:text-xl xl:text-2xl font-inter-display font-medium"
                itemClassName="flex items-start gap-4 font-switzer text-text-primary"
                iconClassName="shrink-0 flex items-center pt-0.5"
                boldText={false}
              />
            </div>

            <motion.p
              variants={itemVariants}
              className="text-text-primary text-lg sm:text-xl lg:text-2xl  leading-tight font-inter-display font-medium mt-6 "
            >
              The virtual simulator is designed to replicate <span className="text-primary font-inter-display font-bold">real enterprise environments</span>, allowing learners to
              safely explore, test, investigate, and respond to realistic cybersecurity scenarios.
            </motion.p>
          </motion.div>
        </div>

        {/* Mobile Layout: Stacked */}
        <div className="lg:hidden space-y-8 md:px-10">
          {/* Tech Stack Section - Marquee Grid (Mobile: 4 rows) */}
          <motion.div
            variants={imageVariants}
            className="relative flex flex-col justify-center  w-full overflow-visible"
          >
            {size.width > 0 && (() => {
              const iconSize = 20;
              const rowHeight = iconSize + 38;

              // Split tech stack into 4 rows for mobile
              const itemsPerRow = Math.ceil(techStack.length / 4);
              const rows = [
                techStack.slice(0, itemsPerRow),
                techStack.slice(itemsPerRow, itemsPerRow * 2),
                techStack.slice(itemsPerRow * 2, itemsPerRow * 3),
                techStack.slice(itemsPerRow * 3),
              ];

              return (
                <div className="relative w-full space-y-0 overflow-visible">
                  {rows.map((row, index) => (
                    <div key={index} className="relative overflow-visible" style={{ height: rowHeight }}>
                      <MarqueeRow
                        techItems={row}
                        direction={index % 2 === 0 ? "left" : "right"}
                        speed={18 + index * 3}
                        iconSize={iconSize}
                        isInView={isInView}
                      />
                    </div>
                  ))}
                </div>
              );
            })()}
          </motion.div>

          {/* Content Section */}
          <motion.div variants={itemVariants}>
            <p className="text-text-primary text-base sm:text-lg  font-inter-display font-medium leading-tight mb-6">
              Our proprietary simulator-developed and maintained by{" "}
              <span className="text-primary font-inter-display font-semibold uppercase">CYBERLABS USA</span>
              -brings the most realistic form of cybersecurity training to{" "}
              <span className="text-primary font-inter-display font-semibold uppercase">India</span>.
            </p>

            <div className="mb-6">
              <div className="mb-4">
                <motion.h3
                  className="text-text-primary text-lg sm:text-xl font-inter-display font-semibold"
                  initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  Students use the simulator throughout the course for:
                </motion.h3>
              </div>
              <AnimatedList
                items={featuresListItems}
                viewportOnce={false}
                viewportAmount={0.5}
                duration={0.6}
                staggerDelay={0.1}
                xOffset={50}
                containerClassName="space-y-3"
                contentClassName="text-text-primary text-sm sm:text-base font-inter-display font-medium"
                itemClassName="flex items-start gap-3 font-switzer text-text-primary"
                iconClassName="shrink-0 flex items-center pt-0.5"
                boldText={false}
              />
            </div>

            <motion.p
              variants={itemVariants}
              className="text-text-primary text-base sm:text-lg leading-tight font-inter-display font-medium mt-6 "
            >
              The virtual simulator is designed to replicate real enterprise environments, allowing learners to
              safely explore, test, investigate, and respond to realistic cybersecurity scenarios.
            </motion.p>

            {/* <motion.p
              variants={itemVariants}
              className="text-text-primary text-base sm:text-lg leading-tight font-inter-display font-medium"
            >
              Learners train through{" "}
              <span className="text-primary font-inter-display font-semibold">
                immersive missions
              </span>
              ,{" "}
              <span className="text-primary font-inter-display font-semibold ">
                <span className="text-red-400 font-bold">red-team</span> /{" "}
                <span className="text-blue-400 font-bold">blue-team</span>{" "}
                exercises
              </span>
              , and{" "}
              <span className="text-primary font-inter-display font-semibold ">
                live attack-response simulations
              </span>
              .
            </motion.p> */}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AiDriven;
