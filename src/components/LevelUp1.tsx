import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

import certificate from "@/assets/img/about/CyberlabsCertificate.webp";
import { Link } from "react-router";

import iscCertificate from "@/assets/img/CertificateTag/cyberlab_ceritificate_isc.webp";
import ecCouncilCertificate from "@/assets/img/CertificateTag/cyberlab_ceritificate_ec-council.webp";
import comptiaCertificate from "@/assets/img/CertificateTag/cyberlab_ceritificate_comptia.webp";

const LevelUp = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const certificateVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const textMaskVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.3,
      },
    },
  };

  return (
    <div className="w-full py-8 px-4 md:px-12 xl:px-25">
      <div className="">
        {/* Main Headline at Top */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className=" mb-8"
        >
          <motion.h2
            variants={itemVariants}
            className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl  mb-4 font-montserrat font-semibold text-text-primary tracking-tight"
          >
            Level Up With {" "}
            <motion.span
              variants={textMaskVariants}
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl  mb-4 font-montserrat bg-clip-text text-primary "
            >
              Certification.
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* Learner area  */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className=""
        >
          <h2 className="text-2xl md:text-3xl text-text-primary font-montserrat font-semibold my-6">Official Credentials Issued by CYBERLABS USA</h2>
          <motion.h3
            variants={itemVariants}
            className="text-base md:text-2xl text-text-primary font-inter-display font-semibold"
          >
            Upon successful completion of the Cyber Defense Program, learners are awarded an official <br />internal certificate issued by <span className="text-primary">CYBERLABS USA</span>.
            <br />
            These certificates are issued under <span className="text-primary">CYBERLABS USA’s global training and evaluation framework</span> and represent a rigorous standard of practical cybersecurity capability, with strong emphasis on investigation, operational thinking, and real-world execution.
            <br />
            The certification validates that the learner has successfully completed structured training, extensive hands-on labs, and formal assessments aligned with <span className="text-primary">CYBERLABS USA methodologies.</span>
          </motion.h3>

          <motion.h4
            variants={itemVariants}
            className="text-2xl md:text-3xl text-text-primary font-montserrat font-semibold mt-6"
          >
            Learners are evaluated through:
          </motion.h4>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-0 mt-8 mb-12">
              {/* Practical cyber-range missions */}
              <motion.div variants={itemVariants} className="h-full flex">
                <div className="relative w-full flex flex-col">
                  <div className="p-4 transition-all duration-300 h-full relative bg-white border border-neutral-300 border-dashed rounded-md lg:rounded-l-md lg:rounded-r-none lg:border-r-0"
                    style={{ background: "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white", }}
                  >

                    <div className="relative z-20">
                      <div className="mb-4">
                        <h5 className="text-xl md:text-2xl lg:text-2xl font-bold tracking-tight font-inter-display text-primary inline-flex items-center gap-2 flex-wrap">
                          <span>Practical Cyber-Range Missions <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-primary inline-block align-middle"
                          >
                            <motion.path
                              stroke="none"
                              d="M0 0h24v24H0z"
                              fill="none"
                              initial={{ pathLength: 0, opacity: 0 }}
                              animate={{
                                pathLength: [0, 1, 1, 0, 0],
                                opacity: [0, 1, 1, 0, 0],
                              }}
                              transition={{
                                duration: 4,
                                times: [0, 0.3, 0.6, 0.8, 1],
                                ease: "easeInOut",
                                repeat: Infinity,
                              }}
                            />
                            <motion.path
                              d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
                              initial={{ pathLength: 0, opacity: 0 }}
                              animate={{
                                pathLength: [0, 1, 1, 0],
                                opacity: [0, 1, 1, 0],
                              }}
                              transition={{
                                duration: 2.5,
                                ease: "easeInOut",
                                delay: 0.2,
                                repeat: Infinity,
                                repeatDelay: 1,
                              }}
                            />
                            <motion.path
                              d="M12 7a5 5 0 1 0 5 5"
                              initial={{ pathLength: 0, opacity: 0 }}
                              animate={{
                                pathLength: [0, 1, 1, 0],
                                opacity: [0, 1, 1, 0],
                              }}
                              transition={{
                                duration: 2.5,
                                ease: "easeInOut",
                                delay: 0.4,
                                repeat: Infinity,
                                repeatDelay: 1,
                              }}
                            />
                            <motion.path
                              d="M13 3.055a9 9 0 1 0 7.941 7.945"
                              initial={{ pathLength: 0, opacity: 0 }}
                              animate={{
                                pathLength: [0, 1, 1, 0],
                                opacity: [0, 1, 1, 0],
                              }}
                              transition={{
                                duration: 2.5,
                                ease: "easeInOut",
                                delay: 0.6,
                                repeat: Infinity,
                                repeatDelay: 1,
                              }}
                            />
                            <motion.path
                              d="M15 6v3h3l3 -3h-3v-3l-3 3"
                              initial={{ pathLength: 0, opacity: 0 }}
                              animate={{
                                pathLength: [0, 1, 1, 0],
                                opacity: [0, 1, 1, 0],
                              }}
                              transition={{
                                duration: 2.5,
                                ease: "easeInOut",
                                delay: 0.8,
                                repeat: Infinity,
                                repeatDelay: 1,
                              }}
                            />
                            <motion.path
                              d="M15 9l-3 3"
                              initial={{ pathLength: 0, opacity: 0 }}
                              animate={{
                                pathLength: [0, 1, 1, 0],
                                opacity: [0, 1, 1, 0],
                              }}
                              transition={{
                                duration: 2.5,
                                ease: "easeInOut",
                                delay: 1,
                                repeat: Infinity,
                                repeatDelay: 1,
                              }}
                            />
                          </motion.svg></span>

                        </h5>
                      </div>
                      <p className="text-text-primary font-inter-display font-medium text-base md:text-lg lg:text-xl">
                        Hands-on experience in simulated environments that
                        mirror real-world cyber threats and scenarios.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Realistic attack/defense simulations */}
              <motion.div variants={itemVariants} className="h-full flex">
                <div className="relative w-full flex flex-col">
                  <div className="p-4 transition-all duration-300 h-full relative bg-white border border-neutral-300 border-dashed rounded-md lg:rounded-none lg:border-r-0" style={{ background: "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white", }}>
                    <div className="relative z-20">
                      <div className="mb-4">
                        <h5 className="text-xl md:text-2xl lg:text-2xl font-bold tracking-tight font-inter-display text-primary inline-flex items-center gap-2 flex-wrap">
                          <span>Realistic Attack <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-primary inline-block align-middle"
                          >
                            <motion.path
                              stroke="none"
                              d="M0 0h24v24H0z"
                              fill="none"
                              initial={{ pathLength: 0, opacity: 0 }}
                              animate={{
                                pathLength: [0, 1, 1, 0, 0],
                                opacity: [0, 1, 1, 0, 0],
                              }}
                              transition={{
                                duration: 4,
                                times: [0, 0.3, 0.6, 0.8, 1],
                                ease: "easeInOut",
                                repeat: Infinity,
                              }}
                            />
                            <motion.path
                              d="M9 9v-1a3 3 0 0 1 6 0v1"
                              initial={{ pathLength: 0, opacity: 0 }}
                              animate={{
                                pathLength: [0, 1, 1, 0],
                                opacity: [0, 1, 1, 0],
                              }}
                              transition={{
                                duration: 2.5,
                                ease: "easeInOut",
                                delay: 0.2,
                                repeat: Infinity,
                                repeatDelay: 1,
                              }}
                            />
                            <motion.path
                              d="M8 9h8a6 6 0 0 1 1 3v3a5 5 0 0 1 -10 0v-3a6 6 0 0 1 1 -3"
                              initial={{ pathLength: 0, opacity: 0 }}
                              animate={{
                                pathLength: [0, 1, 1, 0],
                                opacity: [0, 1, 1, 0],
                              }}
                              transition={{
                                duration: 2.5,
                                ease: "easeInOut",
                                delay: 0.4,
                                repeat: Infinity,
                                repeatDelay: 1,
                              }}
                            />
                            <motion.path
                              d="M3 13l4 0"
                              initial={{ pathLength: 0, opacity: 0 }}
                              animate={{
                                pathLength: [0, 1, 1, 0],
                                opacity: [0, 1, 1, 0],
                              }}
                              transition={{
                                duration: 2.5,
                                ease: "easeInOut",
                                delay: 0.6,
                                repeat: Infinity,
                                repeatDelay: 1,
                              }}
                            />
                            <motion.path
                              d="M17 13l4 0"
                              initial={{ pathLength: 0, opacity: 0 }}
                              animate={{
                                pathLength: [0, 1, 1, 0],
                                opacity: [0, 1, 1, 0],
                              }}
                              transition={{
                                duration: 2.5,
                                ease: "easeInOut",
                                delay: 0.8,
                                repeat: Infinity,
                                repeatDelay: 1,
                              }}
                            />
                            <motion.path
                              d="M12 20l0 -6"
                              initial={{ pathLength: 0, opacity: 0 }}
                              animate={{
                                pathLength: [0, 1, 1, 0],
                                opacity: [0, 1, 1, 0],
                              }}
                              transition={{
                                duration: 2.5,
                                ease: "easeInOut",
                                delay: 1,
                                repeat: Infinity,
                                repeatDelay: 1,
                              }}
                            />
                            <motion.path
                              d="M4 19l3.35 -2"
                              initial={{ pathLength: 0, opacity: 0 }}
                              animate={{
                                pathLength: [0, 1, 1, 0],
                                opacity: [0, 1, 1, 0],
                              }}
                              transition={{
                                duration: 2.5,
                                ease: "easeInOut",
                                delay: 1.2,
                                repeat: Infinity,
                                repeatDelay: 1,
                              }}
                            />
                            <motion.path
                              d="M20 19l-3.35 -2"
                              initial={{ pathLength: 0, opacity: 0 }}
                              animate={{
                                pathLength: [0, 1, 1, 0],
                                opacity: [0, 1, 1, 0],
                              }}
                              transition={{
                                duration: 2.5,
                                ease: "easeInOut",
                                delay: 1.4,
                                repeat: Infinity,
                                repeatDelay: 1,
                              }}
                            />
                            <motion.path
                              d="M4 7l3.75 2.4"
                              initial={{ pathLength: 0, opacity: 0 }}
                              animate={{
                                pathLength: [0, 1, 1, 0],
                                opacity: [0, 1, 1, 0],
                              }}
                              transition={{
                                duration: 2.5,
                                ease: "easeInOut",
                                delay: 1.6,
                                repeat: Infinity,
                                repeatDelay: 1,
                              }}
                            />
                            <motion.path
                              d="M20 7l-3.75 2.4"
                              initial={{ pathLength: 0, opacity: 0 }}
                              animate={{
                                pathLength: [0, 1, 1, 0],
                                opacity: [0, 1, 1, 0],
                              }}
                              transition={{
                                duration: 2.5,
                                ease: "easeInOut",
                                delay: 1.8,
                                repeat: Infinity,
                                repeatDelay: 1,
                              }}
                            />
                          </motion.svg></span>

                        </h5>
                      </div>
                      <p className="text-text-primary font-inter-display font-medium text-base md:text-lg lg:text-xl">
                        Live exercises that test your ability to both execute
                        and defend against sophisticated cyber attacks.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Forensics & investigation tasks */}
              <motion.div variants={itemVariants} className="h-full flex">
                <div className="relative  w-full flex flex-col">
                  <div className="p-4 transition-all duration-300 h-full relative bg-white border border-neutral-300 border-dashed rounded-md lg:rounded-none lg:border-r-0" style={{ background: "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white", }}>
                    <div className="relative z-20">
                      <div className="mb-4">
                        <h5 className="text-xl md:text-2xl lg:text-2xl font-bold tracking-tight font-inter-display text-primary inline-flex items-center gap-2 flex-wrap">
                          <span>Forensics & Investigation Tasks <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-primary inline-block align-middle"
                          >
                            <motion.path
                              stroke="none"
                              d="M0 0h24v24H0z"
                              fill="none"
                              initial={{ pathLength: 0, opacity: 0 }}
                              animate={{
                                pathLength: [0, 1, 1, 0, 0],
                                opacity: [0, 1, 1, 0, 0],
                              }}
                              transition={{
                                duration: 4,
                                times: [0, 0.3, 0.6, 0.8, 1],
                                ease: "easeInOut",
                                repeat: Infinity,
                              }}
                            />
                            <motion.path
                              d="M9 11a3 3 0 0 1 6 0c0 1.657 .612 3.082 1 4"
                              initial={{ pathLength: 0, opacity: 0 }}
                              animate={{
                                pathLength: [0, 1, 1, 0],
                                opacity: [0, 1, 1, 0],
                              }}
                              transition={{
                                duration: 2.5,
                                ease: "easeInOut",
                                delay: 0.2,
                                repeat: Infinity,
                                repeatDelay: 1,
                              }}
                            />
                            <motion.path
                              d="M12 11v1.75c-.001 1.11 .661 2.206 1 3.25"
                              initial={{ pathLength: 0, opacity: 0 }}
                              animate={{
                                pathLength: [0, 1, 1, 0],
                                opacity: [0, 1, 1, 0],
                              }}
                              transition={{
                                duration: 2.5,
                                ease: "easeInOut",
                                delay: 0.4,
                                repeat: Infinity,
                                repeatDelay: 1,
                              }}
                            />
                            <motion.path
                              d="M9 14.25c.068 .58 .358 1.186 .5 1.75"
                              initial={{ pathLength: 0, opacity: 0 }}
                              animate={{
                                pathLength: [0, 1, 1, 0],
                                opacity: [0, 1, 1, 0],
                              }}
                              transition={{
                                duration: 2.5,
                                ease: "easeInOut",
                                delay: 0.6,
                                repeat: Infinity,
                                repeatDelay: 1,
                              }}
                            />
                            <motion.path
                              d="M4 8v-2a2 2 0 0 1 2 -2h2"
                              initial={{ pathLength: 0, opacity: 0 }}
                              animate={{
                                pathLength: [0, 1, 1, 0],
                                opacity: [0, 1, 1, 0],
                              }}
                              transition={{
                                duration: 2.5,
                                ease: "easeInOut",
                                delay: 0.8,
                                repeat: Infinity,
                                repeatDelay: 1,
                              }}
                            />
                            <motion.path
                              d="M4 16v2a2 2 0 0 0 2 2h2"
                              initial={{ pathLength: 0, opacity: 0 }}
                              animate={{
                                pathLength: [0, 1, 1, 0],
                                opacity: [0, 1, 1, 0],
                              }}
                              transition={{
                                duration: 2.5,
                                ease: "easeInOut",
                                delay: 1,
                                repeat: Infinity,
                                repeatDelay: 1,
                              }}
                            />
                            <motion.path
                              d="M16 4h2a2 2 0 0 1 2 2v2"
                              initial={{ pathLength: 0, opacity: 0 }}
                              animate={{
                                pathLength: [0, 1, 1, 0],
                                opacity: [0, 1, 1, 0],
                              }}
                              transition={{
                                duration: 2.5,
                                ease: "easeInOut",
                                delay: 1.2,
                                repeat: Infinity,
                                repeatDelay: 1,
                              }}
                            />
                            <motion.path
                              d="M16 20h2a2 2 0 0 0 2 -2v-2"
                              initial={{ pathLength: 0, opacity: 0 }}
                              animate={{
                                pathLength: [0, 1, 1, 0],
                                opacity: [0, 1, 1, 0],
                              }}
                              transition={{
                                duration: 2.5,
                                ease: "easeInOut",
                                delay: 1.4,
                                repeat: Infinity,
                                repeatDelay: 1,
                              }}
                            />
                          </motion.svg></span>

                        </h5>
                      </div>
                      <p className="text-text-primary font-inter-display font-medium text-base md:text-lg lg:text-xl">
                        Digital forensics challenges that develop your
                        investigative skills and evidence analysis capabilities.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Capstone projects */}
              <motion.div variants={itemVariants} className="h-full flex">
                <div className="relative w-full flex flex-col">
                  <div className="p-4 transition-all duration-300 h-full relative bg-white border border-neutral-300 border-dashed rounded-md lg:rounded-none lg:border-r-0" style={{ background: "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white", }}>
                    <div className="relative z-20">
                      <div className="mb-4">
                        <h5 className="text-xl md:text-2xl lg:text-2xl font-bold tracking-tight font-inter-display text-primary inline-flex items-center gap-2 flex-wrap">
                          <span>Capstone Projects <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-primary inline-block align-middle"
                          >
                            <motion.path
                              stroke="none"
                              d="M0 0h24v24H0z"
                              fill="none"
                              initial={{ pathLength: 0, opacity: 0 }}
                              animate={{
                                pathLength: [0, 1, 1, 0, 0],
                                opacity: [0, 1, 1, 0, 0],
                              }}
                              transition={{
                                duration: 4,
                                times: [0, 0.3, 0.6, 0.8, 1],
                                ease: "easeInOut",
                                repeat: Infinity,
                              }}
                            />
                            <motion.path
                              d="M3 7a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3l0 -10"
                              initial={{ pathLength: 0, opacity: 0 }}
                              animate={{
                                pathLength: [0, 1, 1, 0],
                                opacity: [0, 1, 1, 0],
                              }}
                              transition={{
                                duration: 2.5,
                                ease: "easeInOut",
                                delay: 0.2,
                                repeat: Infinity,
                                repeatDelay: 1,
                              }}
                            />
                            <motion.path
                              d="M7 10a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
                              initial={{ pathLength: 0, opacity: 0 }}
                              animate={{
                                pathLength: [0, 1, 1, 0],
                                opacity: [0, 1, 1, 0],
                              }}
                              transition={{
                                duration: 2.5,
                                ease: "easeInOut",
                                delay: 0.4,
                                repeat: Infinity,
                                repeatDelay: 1,
                              }}
                            />
                            <motion.path
                              d="M15 8l2 0"
                              initial={{ pathLength: 0, opacity: 0 }}
                              animate={{
                                pathLength: [0, 1, 1, 0],
                                opacity: [0, 1, 1, 0],
                              }}
                              transition={{
                                duration: 2.5,
                                ease: "easeInOut",
                                delay: 0.6,
                                repeat: Infinity,
                                repeatDelay: 1,
                              }}
                            />
                            <motion.path
                              d="M15 12l2 0"
                              initial={{ pathLength: 0, opacity: 0 }}
                              animate={{
                                pathLength: [0, 1, 1, 0],
                                opacity: [0, 1, 1, 0],
                              }}
                              transition={{
                                duration: 2.5,
                                ease: "easeInOut",
                                delay: 0.8,
                                repeat: Infinity,
                                repeatDelay: 1,
                              }}
                            />
                            <motion.path
                              d="M7 16l10 0"
                              initial={{ pathLength: 0, opacity: 0 }}
                              animate={{
                                pathLength: [0, 1, 1, 0],
                                opacity: [0, 1, 1, 0],
                              }}
                              transition={{
                                duration: 2.5,
                                ease: "easeInOut",
                                delay: 1,
                                repeat: Infinity,
                                repeatDelay: 1,
                              }}
                            />
                          </motion.svg></span>

                        </h5>
                      </div>
                      <p className="text-text-primary font-inter-display font-medium text-base md:text-lg lg:text-xl">
                        Comprehensive projects that demonstrate your mastery of
                        cybersecurity concepts and practical application.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Knowledge assessments */}
              <motion.div variants={itemVariants} className="h-full flex">
                <div className="relative w-full flex flex-col">
                  <div className="p-4 transition-all duration-300 h-full relative bg-white border border-neutral-300 border-dashed rounded-md lg:rounded-r-md lg:rounded-l-none" style={{ background: "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white", }}>
                    <div className="relative z-20">
                      <div className="mb-4">
                        <h5 className="text-xl md:text-2xl lg:text-2xl font-bold tracking-tight font-inter-display text-primary inline-flex items-center gap-2 flex-wrap">
                          <span>Knowledge Assessments <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-primary inline-block align-middle"
                          >
                            <motion.path
                              stroke="none"
                              d="M0 0h24v24H0z"
                              fill="none"
                              initial={{ pathLength: 0, opacity: 0 }}
                              animate={{
                                pathLength: [0, 1, 1, 0, 0],
                                opacity: [0, 1, 1, 0, 0],
                              }}
                              transition={{
                                duration: 4,
                                times: [0, 0.3, 0.6, 0.8, 1],
                                ease: "easeInOut",
                                repeat: Infinity,
                              }}
                            />
                            <motion.path
                              d="M9.615 20h-2.615a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8"
                              initial={{ pathLength: 0, opacity: 0 }}
                              animate={{
                                pathLength: [0, 1, 1, 0],
                                opacity: [0, 1, 1, 0],
                              }}
                              transition={{
                                duration: 2.5,
                                ease: "easeInOut",
                                delay: 0.2,
                                repeat: Infinity,
                                repeatDelay: 1,
                              }}
                            />
                            <motion.path
                              d="M14 19l2 2l4 -4"
                              initial={{ pathLength: 0, opacity: 0 }}
                              animate={{
                                pathLength: [0, 1, 1, 0],
                                opacity: [0, 1, 1, 0],
                              }}
                              transition={{
                                duration: 2.5,
                                ease: "easeInOut",
                                delay: 0.4,
                                repeat: Infinity,
                                repeatDelay: 1,
                              }}
                            />
                            <motion.path
                              d="M9 8h4"
                              initial={{ pathLength: 0, opacity: 0 }}
                              animate={{
                                pathLength: [0, 1, 1, 0],
                                opacity: [0, 1, 1, 0],
                              }}
                              transition={{
                                duration: 2.5,
                                ease: "easeInOut",
                                delay: 0.6,
                                repeat: Infinity,
                                repeatDelay: 1,
                              }}
                            />
                            <motion.path
                              d="M9 12h2"
                              initial={{ pathLength: 0, opacity: 0 }}
                              animate={{
                                pathLength: [0, 1, 1, 0],
                                opacity: [0, 1, 1, 0],
                              }}
                              transition={{
                                duration: 2.5,
                                ease: "easeInOut",
                                delay: 0.8,
                                repeat: Infinity,
                                repeatDelay: 1,
                              }}
                            />
                          </motion.svg></span>

                        </h5>
                      </div>
                      <p className="text-text-primary font-inter-display font-medium text-base md:text-lg lg:text-xl">
                        Rigorous evaluations that validate your theoretical
                        understanding and practical expertise.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* certification tag  */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mt-12 md:mt-20"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-0.5 h-8 bg-primary"></div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-montserrat font-medium tracking-tight text-text-primary">
                Earn Globally-Recognized <span className="text-primary">Certification.</span>
              </h3>
            </div>
            <p className="text-text-primary font-inter-display font-semibold text-base md:text-lg lg:text-xl leading-tight max-w-4xl">
              At CYBERLABS USA, you can earn leading international certifications such as (ISC)², EC-Council, and CompTIA. These credentials are recognized by employers and industry organizations across the globe, validating your skills and enhancing your career opportunities worldwide.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mt-8"
          >
            {[
              {
                src: iscCertificate,
                alt: "ISC Certification",
                description:
                  "(ISC)² is a global cybersecurity authority known for certifications like CISSP and CCSP. Our training meets (ISC)²’s international standards.",
              },
              {
                src: ecCouncilCertificate,
                alt: "EC-Council Certification",
                description:
                  "EC-Council is the creator of top certifications like CEH. As an authorized partner, we deliver hands-on cybersecurity training to global standards.",
              },
              {
                src: comptiaCertificate,
                alt: "CompTIA Certification",
                description:
                  "CompTIA is a globally trusted, vendor-neutral certification body. We provide training aligned with CompTIA’s international standards.",
              },
            ].map((cert, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="relative">


                  <div className="p-4 transition-all duration-300 h-full relative bg-white border border-neutral-300 border-dashed rounded-md" style={{ background: "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white", }}>
                    <div className="relative z-20 flex items-center justify-center h-full min-h-[140px] md:min-h-[160px] gap-4">
                      <img
                        src={cert.src}
                        alt={cert.alt}
                        className="w-full h-auto max-w-[140px] md:max-w-[160px] object-contain border-r pr-4 border-zinc-300 border-dashed"
                      />
                      <p className="text-text-primary font-inter-display font-medium text-base md:text-lg lg:text-xl leading-6">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Two Column Layout */}
        <motion.section
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="bg-bg text-white py-5 md:py-10 w-full"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-16 items-center">
            {/* LEFT CONTENT */}
            <motion.div variants={itemVariants} className="space-y-12">
              {/* START TODAY */}
              <motion.div variants={itemVariants} className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-1.5 h-8 bg-primary"></div>
                  <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-3xl xl:text-4xl font-montserrat font-bold tracking-tight text-text-primary ">
                    START TODAY
                  </h3>
                </div>
                <p className="text-primary text-lg xs:text-xl sm:text-2xl md:text-xl xl:text-2xl leading-relaxed max-w-md font-inter-display font-medium">
                  Just months from now, your life could look completely
                  different.
                </p>
              </motion.div>



              {/* BELIEVE IN YOURSELF */}
              <motion.div variants={itemVariants} className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-1.5 h-8 bg-primary"></div>
                  <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-3xl xl:text-4xl font-montserrat text-text-primary font-bold tracking-tight">
                    BELIEVE IN YOURSELF
                  </h3>
                </div>
                <p className="text-primary text-lg xs:text-xl sm:text-2xl md:text-xl xl:text-2xl leading-relaxed max-w-md font-inter-display font-medium">
                  Consistency and the right guidance can take you from beginner
                  to master the field.
                </p>
              </motion.div>

              {/* CTA */}
              <Link to="/cyber-defense-programs#our-programs">
                <motion.button
                  variants={itemVariants}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary hover:bg-primary/80 text-bg  text-lg xs:text-xl sm:text-2xl md:text-xl xl:text-2xl py-3 px-10 rounded-md transition-all duration-200 flex items-center justify-center cursor-pointer text-center font-montserrat font-medium"
                >
                  Explore Programs
                </motion.button>
              </Link>
            </motion.div>

            {/* RIGHT SIDE - CERTIFICATE */}
            <motion.div
              variants={certificateVariants}
              className="flex justify-center lg:justify-end font-switzer"
            >
              <img src={certificate} alt="Level Up" />
            </motion.div>
          </div>
        </motion.section>





        {/* Global Recognition Section */}
        <motion.section
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mt-12 md:mt-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
            {/* LEFT SIDE - Global Recognition */}
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.h2
                variants={itemVariants}
                className="text-xl xs:text-2xl sm:text-3xl md:text-4xl  font-montserrat font-medium tracking-tight text-text-primary"
              >
                Global Recognition
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-text-primary text-lg md:text-2xl font-inter-display leading-relaxed font-semibold"
              >
                Certification recognition and international equivalency details
                will be provided by CYBERLABS USA and published once received.
              </motion.p>
            </motion.div>

            {/* RIGHT SIDE - Credential Format */}
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.h3
                variants={itemVariants}
                className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-montserrat font-medium tracking-tight text-text-primary"
              >
                Credential Format
              </motion.h3>

              <motion.ul
                variants={itemVariants}
                className=" text-text-primary text-lg md:text-2xl font-inter-display font-semibold list-none"
              >
                <motion.li
                  variants={itemVariants}
                  className="flex items-center space-x-3"
                >
                  <div className="shrink-0 flex items-center h-6">
                    <span className="text-primary text-2xl leading-none flex items-center justify-center">
                      •
                    </span>
                  </div>
                  <span>CYBERLABS USA - endorsed digital certificate.</span>
                </motion.li>
                <motion.li
                  variants={itemVariants}
                  className="flex items-center space-x-3"
                >
                  <div className="shrink-0 flex items-center h-6">
                    <span className="text-primary text-2xl leading-none flex items-center justify-center">
                      •
                    </span>
                  </div>
                  <span>Performance score mapping.</span>
                </motion.li>
                <motion.li
                  variants={itemVariants}
                  className="flex items-center space-x-3"
                >
                  <div className="shrink-0 flex items-center h-6">
                    <span className="text-primary text-2xl leading-none flex items-center justify-center">
                      •
                    </span>
                  </div>
                  <span>
                    Digital badge availability pending confirmation from
                    CYBERLABS USA.
                  </span>
                </motion.li>
              </motion.ul>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default LevelUp;
