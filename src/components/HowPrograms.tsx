import React from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef, useState } from "react";
import {
  FaPlay,
  FaLaptop,
  FaFlask,
  FaRobot,
  FaCertificate,
  FaBriefcase,
} from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

import howProgramsImage from "../assets/img/HowProgramsWork.webp";

interface StepData {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  step: string;
}

const HowPrograms = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeStep, setActiveStep] = useState<number | null>(1);

  const steps: StepData[] = [
    {
      id: 1,
      icon: <FaPlay className="text-text-primary" />,
      title: "Pick a Program",
      description: "Explore and select the cybersecurity program or career track that best aligns with your ambitions and goals.",
      step: "01",
    },
    {
      id: 2,
      icon: <FaLaptop className="text-text-primary" />,
      title: "Learn Online",
      description: "Access expert-curated modules, live and recorded sessions, and study at your own pace with continuous mentor support.",
      step: "02",
    },
    {
      id: 3,
      icon: <FaFlask className="text-text-primary" />,
      title: "Practice Labs",
      description: "Apply your knowledge in our interactive labs to solve practical, real-world cybersecurity challenges and scenarios.",
      step: "03",
    },
    {
      id: 4,
      icon: <FaRobot className="text-text-primary" />,
      title: "Simulate & Defend",
      description: "Utilize our AI-powered simulator to experience and resolve live cyber incidents, preparing you for real attacks.",
      step: "04",
    },
    {
      id: 5,
      icon: <FaCertificate className="text-text-primary" />,
      title: "Get Certified",
      description: "Earn Cyberslabs badges for course completion and prepare with confidence for top global cybersecurity certification exams.",
      step: "05",
    },
    {
      id: 6,
      icon: <FaBriefcase className="text-text-primary" />,
      title: "Start Your Career",
      description:
        "Receive comprehensive job search support, including placement assistance, resume building, interview coaching and expert guidance to launch your cybersecurity career.",
      step: "06",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants: Variants = {
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

  const titleVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -40,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 120,
        damping: 20,
      },
    },
  };

  const imageVariants: Variants = {
    hidden: {
      opacity: 0,
      x: -60,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const stepsVariants: Variants = {
    hidden: {
      opacity: 0,
      x: 60,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const toggleStep = (id: number) => {
    setActiveStep(activeStep === id ? null : id);
  };

  return (
    <motion.section
      ref={ref}
      className="w-full mx-auto  md:px-10 lg:px-16 py-16"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Title Section */}
      <motion.div variants={titleVariants} className=" mb-8 sm:mb-12 lg:mb-16">
        <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 font-montserrat tracking-tight font-semibold text-text-primary leading-tight px-4 md:px-10 lg:px-16 ">
          How programs work.
        </h2>
        <p className="text-text-primary text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-inter-display mb-8 sm:mb-12 lg:mb-16  max-w-7xl px-4 md:px-10 lg:px-16 tracking-tight">
          CYBERLABS INDIA provides a comprehensive learning experience that
          combines{" "}
          <span className="font-inter-display text-primary tracking-tight font-semibold">
            online classes,
          </span>{" "}
          <span className="font-inter-display text-primary tracking-tight font-semibold">
            practical labs,
          </span>{" "}
          and{" "}
          <span className="font-inter-display text-primary tracking-tight font-semibold">
            simulated attacks
          </span>{" "}
          to help you build the skills you need to succeed in the cybersecurity
          industry.
        </p>
      </motion.div>

      {/* Desktop Layout: Image Left, Steps Right */}
      <div className="hidden lg:grid lg:grid-cols-2 lg:gap-20 xl:gap-35 items-start">
        {/* Left Side - Image */}
        <motion.div variants={imageVariants} className="relative w-3/4 mx-auto">
          <div className="relative overflow-hidden aspect-5/4 group cursor-pointer border border-neutral-300 border-dashed">
            <img
              src={howProgramsImage}
              alt="Cybersecurity learning process and career development"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 p-2 "
            />
            <div className="absolute inset-0 bg-linear-to-t from-bg/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Text overlays */}
            <div className="absolute top-4 right-4 bg-bg/10 backdrop-blur-sm rounded-lg px-3 py-2">
              <span className="text-background text-sm font-bold font-montserrat">
                LEARN
              </span>
            </div>

            <div className="absolute bottom-4 left-4 bg-bg/5 backdrop-blur-sm rounded-lg px-3 py-2">
              <span className="text-background text-sm font-bold font-montserrat">
                GROW
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Steps */}
        <motion.div variants={stepsVariants} className="w-11/12">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              className="border-b border-neutral-300 border-dashed  last:border-b-0"
            >
              <motion.button
                onClick={() => toggleStep(step.id)}
                className="w-full py-3 md:py-4 text-left flex items-center justify-between cursor-pointer transition-colors duration-200"
              >
                <div className="flex items-center space-x-3 md:space-x-4">
                  <div className="flex items-center space-x-3">
                    <span
                      className="relative flex items-center justify-center rounded p-0.5 sm:p-1 md:p-1 border border-dashed border-neutral-300 overflow-hidden"
                      style={{
                        background:
                          "repeating-linear-gradient(135deg, #e5e7eb 0px, #e5e7eb 1px, transparent 1px, transparent 3px)",
                        backgroundColor: "#ffffff",
                      }}
                    >
                      <span className="relative z-10 text-xl md:text-2xl">{step.icon}</span>
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-text-primary font-montserrat">
                      {step.title}
                    </h3>
                  </div>
                </div>
                <div className="text-text-primary">
                  {activeStep === step.id ? (
                    <IoIosCheckmarkCircleOutline className="text-2xl text-primary md:text-3xl" />
                  ) : (
                    <GoArrowUpRight className="text-2xl text-text-primary md:text-3xl" />
                  )}
                </div>
              </motion.button>

              <AnimatePresence>
                {activeStep === step.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-4 md:pb-6 pl-12 md:pl-16 pr-4 md:pr-6">
                      <p className="text-primary text-xl md:text-2xl leading-relaxed font-medium font-inter-display">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Mobile Layout: Heading, Image, Steps */}
      <div className="lg:hidden">
        {/* Mobile Image */}
        <motion.div variants={imageVariants} className="mb-8 px-5">
          <div className="relative overflow-hidden  aspect-16/10 group cursor-pointer border border-neutral-300 border-dashed">
            <img
              src={howProgramsImage}
              alt="Cybersecurity learning process and career development"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 p-2"
            />
            <div className="absolute inset-0 bg-linear-to-t from-bg/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </motion.div>

        {/* Mobile Steps */}
        <motion.div variants={stepsVariants}>
          {steps.map((step) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              className="border-b border-neutral-300 border-dashed last:border-b-0 px-5"
            >
              <motion.button
                onClick={() => toggleStep(step.id)}
                className="w-full py-3 sm:py-6 text-left flex items-center justify-between  transition-colors duration-200"
              >
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="flex items-center space-x-3">
                    {/* <span className="text-xs sm:text-sm text-primary  font-switzer">
                      {step.step}
                    </span> */}
                    <span
                      className="relative flex items-center justify-center rounded p-0.5 sm:p-1 md:p-1 border border-dashed border-neutral-300 overflow-hidden"
                      style={{
                        background:
                          "repeating-linear-gradient(135deg, #e5e7eb 0px, #e5e7eb 1px, transparent 1px, transparent 3px)",
                        backgroundColor: "#ffffff",
                      }}
                    >
                      <span className="relative z-10 text-xs sm:text-sm">{step.icon}</span>
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-text-primary font-montserrat">
                      {step.title}
                    </h3>
                  </div>
                </div>
                <div className="text-text-primary">
                  {activeStep === step.id ? (
                    <IoIosCheckmarkCircleOutline className="text-lg text-primary sm:text-xl" />
                  ) : (
                    <GoArrowUpRight className="text-lg text-text-primary sm:text-xl" />
                  )}
                </div>
              </motion.button>

              <AnimatePresence>
                {activeStep === step.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-4 sm:pb-6 pl-10 sm:pl-12 md:pl-16 pr-4 sm:pr-6">
                      <p className="text-primary text-base sm:text-lg leading-tight font-medium font-inter-display">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HowPrograms;
