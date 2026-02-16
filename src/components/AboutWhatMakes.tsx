import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";
import { AnimatedHeading } from "./ui/animated-heading";
import { AnimatedList } from "./ui/animated-list";
import type { AnimatedListItem } from "./ui/animated-list";

const AboutWhatMakes = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: false, margin: "-100px" });
    const headingRef = useRef<HTMLDivElement>(null);
    const headingInView = useInView(headingRef, { once: false, margin: "-100px" });
    const practitionerIconsRef = useRef(null);
    const practitionerIconsInView = useInView(practitionerIconsRef, { once: false, margin: "-100px" });
    const investigationIconsRef = useRef(null);
    const investigationIconsInView = useInView(investigationIconsRef, { once: false, margin: "-100px" });
    const simulationIconsRef = useRef(null);
    const simulationIconsInView = useInView(simulationIconsRef, { once: false, margin: "-100px" });
    // Animated SVG: radar-2 (Cyber defense and security operations)
    const AnimatedRadar2Icon = ({ isInView }: { isInView: boolean }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 text-primary shrink-0"
        >
            <motion.path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M15.51 15.56a5 5 0 1 0 -3.51 1.44"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.4, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M18.832 17.86a9 9 0 1 0 -6.832 3.14"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.7, delay: 0.7, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M12 12v9"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 1.3, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    // Animated SVG: password-fingerprint (Digital investigations and cybercrime response)
    const AnimatedPasswordFingerprintIcon = ({ isInView }: { isInView: boolean }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 text-primary shrink-0"
        >
            <motion.path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M17 8c.788 1 1 2 1 3v1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M9 11c0 -1.578 1.343 -3 3 -3s3 1.422 3 3v2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.5, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M12 11v2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.2, delay: 0.9, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M6 12v-1.397c-.006 -1.999 1.136 -3.849 2.993 -4.85a6.385 6.385 0 0 1 6.007 -.005"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.6, delay: 1, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M12 17v4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.2, delay: 1.5, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M10 20l4 -2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.2, delay: 1.6, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M10 18l4 2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.2, delay: 1.7, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M5 17v4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.2, delay: 1.8, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M3 20l4 -2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.2, delay: 1.9, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M3 18l4 2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.2, delay: 2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M19 17v4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.2, delay: 2.1, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M17 20l4 -2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.2, delay: 2.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M17 18l4 2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.2, delay: 2.3, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    // Animated SVG: id (Platform security, identity systems, and abuse prevention)
    const AnimatedIdIcon = ({ isInView }: { isInView: boolean }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 text-primary shrink-0"
        >
            <motion.path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M3 7a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3l0 -10"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M7 10a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.7, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M15 8l2 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.2, delay: 1, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M15 12l2 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.2, delay: 1.1, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M7 16l10 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 1.2, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    // Animated SVG: brain (Threat intelligence and adversary analysis)
    const AnimatedBrainIcon = ({ isInView }: { isInView: boolean }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 text-primary shrink-0"
        >
            <motion.path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.6, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M17.5 16a3.5 3.5 0 0 0 0 -7h-.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 1, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 1.3, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M6.5 16a3.5 3.5 0 0 1 0 -7h.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 1.6, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.6, delay: 1.9, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    // Animated SVG: settings-bolt (Tool demonstrations)
    const AnimatedSettingsBoltIcon = ({ isInView }: { isInView: boolean }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 text-primary shrink-0"
        >
            <motion.path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M13.256 20.473c-.855 .907 -2.583 .643 -2.931 -.79a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.07 .26 1.488 1.29 1.254 2.15"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 1, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M19 16l-2 3h4l-2 3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 1.1, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 1.4, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    // Animated SVG: stairs-up (Step-by-step labs)
    const AnimatedStairsUpIcon = ({ isInView }: { isInView: boolean }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 text-primary shrink-0"
        >
            <motion.path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M22 6h-5v5h-5v5h-5v5h-5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M6 10v-7"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.9, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M3 6l3 -3l3 3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 1.1, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    // Animated SVG: file-certificate (Exam-centric teaching)
    const AnimatedFileCertificateIcon = ({ isInView }: { isInView: boolean }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 text-primary shrink-0"
        >
            <motion.path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M14 3v4a1 1 0 0 0 1 1h4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.4, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M3 14a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.9, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 1.2, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    // Animated SVG: topology-star (How systems are designed)
    const AnimatedTopologyStarIcon = ({ isInView }: { isInView: boolean }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 text-primary shrink-0"
        >
            <motion.path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M8 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M20 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.4, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M8 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.6, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M20 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.8, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 1, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M7.5 7.5l3 3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 1.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M7.5 16.5l3 -3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 1.4, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M13.5 13.5l3 3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 1.6, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M16.5 7.5l-3 3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 1.8, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    // Animated SVG: shield-off (Why defenses fail)
    const AnimatedShieldOffIcon = ({ isInView }: { isInView: boolean }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 text-primary shrink-0"
        >
            <motion.path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M17.67 17.667a12 12 0 0 1 -5.67 3.333a12 12 0 0 1 -8.5 -15c.794 .036 1.583 -.006 2.357 -.124m3.128 -.926a11.997 11.997 0 0 0 3.015 -1.95a12 12 0 0 0 8.5 3a12 12 0 0 1 -1.116 9.376"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M3 3l18 18"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.9, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    // Animated SVG: bug (How attackers and abusers think)
    const AnimatedBugIcon = ({ isInView }: { isInView: boolean }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 text-primary shrink-0"
        >
            <motion.path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M9 9v-1a3 3 0 0 1 6 0v1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M8 9h8a6 6 0 0 1 1 3v3a5 5 0 0 1 -10 0v-3a6 6 0 0 1 1 -3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.5, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M3 13l4 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.2, delay: 1, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M17 13l4 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.2, delay: 1.1, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M12 20l0 -6"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.2, delay: 1.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M4 19l3.35 -2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 1.3, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M20 19l-3.35 -2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 1.4, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M4 7l3.75 2.4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 1.6, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M20 7l-3.75 2.4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 1.7, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    // Animated SVG: clipboard-search (How investigations are structured and defended)
    const AnimatedClipboardSearchIcon = ({ isInView }: { isInView: boolean }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 text-primary shrink-0"
        >
            <motion.path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h4.5m7.5 -10v-4a2 2 0 0 0 -2 -2h-2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.7, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 1.1, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M20.2 20.2l1.8 1.8"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 1.4, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    // Animated SVG: puzzle (Work through complex, realistic scenarios)
    const AnimatedPuzzleIcon = ({ isInView }: { isInView: boolean }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 text-primary shrink-0"
        >
            <motion.path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 1.2, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    // Animated SVG: search (Investigate failures and attacks)
    const AnimatedSearchIcon = ({ isInView }: { isInView: boolean }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 text-primary shrink-0"
        >
            <motion.path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M21 21l-6 -6"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.7, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    // Animated SVG: alert-triangle (Make decisions with incomplete information)
    const AnimatedAlertTriangleIcon = ({ isInView }: { isInView: boolean }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 text-primary shrink-0"
        >
            <motion.path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M12 9v4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.2, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.3, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M12 16h.01"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.2, delay: 1, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    // Animated SVG: file-check (Produce professional-grade outputs)
    const AnimatedFileCheckIcon = ({ isInView }: { isInView: boolean }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 text-primary shrink-0"
        >
            <motion.path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M14 3v4a1 1 0 0 0 1 1h4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.4, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M9 15l2 2l4 -4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.9, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

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

    const practitionerListItems: AnimatedListItem[] = [
        { text: "Cyber defense and security operations", icon: <AnimatedRadar2Icon isInView={practitionerIconsInView} /> },
        { text: "Digital investigations and cybercrime response", icon: <AnimatedPasswordFingerprintIcon isInView={practitionerIconsInView} /> },
        { text: "Platform security, identity systems, and abuse prevention", icon: <AnimatedIdIcon isInView={practitionerIconsInView} /> },
        { text: "Threat intelligence and adversary analysis", icon: <AnimatedBrainIcon isInView={practitionerIconsInView} /> },
    ];

    const investigationList1Items: AnimatedListItem[] = [
        { text: "Tool demonstrations", icon: <AnimatedSettingsBoltIcon isInView={investigationIconsInView} /> },
        { text: "Step-by-step labs", icon: <AnimatedStairsUpIcon isInView={investigationIconsInView} /> },
        { text: "Exam-centric teaching", icon: <AnimatedFileCertificateIcon isInView={investigationIconsInView} /> },
    ];

    const investigationList2Items: AnimatedListItem[] = [
        { text: "How systems are designed", icon: <AnimatedTopologyStarIcon isInView={investigationIconsInView} /> },
        { text: "Why defenses fail", icon: <AnimatedShieldOffIcon isInView={investigationIconsInView} /> },
        { text: "How attackers and abusers think", icon: <AnimatedBugIcon isInView={investigationIconsInView} /> },
        { text: "How investigations are structured and defended", icon: <AnimatedClipboardSearchIcon isInView={investigationIconsInView} /> },
    ];

    const simulationListItems: AnimatedListItem[] = [
        { text: "Work through complex, realistic scenarios", icon: <AnimatedPuzzleIcon isInView={simulationIconsInView} /> },
        { text: "Investigate failures and attacks", icon: <AnimatedSearchIcon isInView={simulationIconsInView} /> },
        { text: "Make decisions with incomplete information", icon: <AnimatedAlertTriangleIcon isInView={simulationIconsInView} /> },
        { text: "Produce professional-grade outputs", icon: <AnimatedFileCheckIcon isInView={simulationIconsInView} /> },
    ];

    return (
        <section className="w-full bg-background py-8 md:py-12 lg:py-16" ref={containerRef}>
            <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {/* What Makes CYBERLABS Different Section - Heading */}
                    <motion.div variants={itemVariants} className="mb-16 md:mb-20 md:text-center text-left">
                        <AnimatedHeading
                            ref={headingRef as React.RefObject<HTMLDivElement>}
                            inView={headingInView}
                            lines={[
                                { text: "What Makes CYBERLABS Different", className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-montserrat text-text-primary font-semibold tracking-tight leading-tight md:leading-normal mb-6" },
                            ]}
                        />
                    </motion.div>

                    {/* Three Column Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
                        {/* Practitioner-Led, Not Classroom-Led Section */}
                        <motion.div variants={itemVariants} className="border border-neutral-300 border-dashed rounded-md p-4"
                            style={{
                                background:
                                    "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                            }}
                        >
                            <div className="flex items-start gap-4 mb-6">
                                <motion.h3
                                    className="text-xl sm:text-2xl md:text-3xl font-montserrat text-text-primary font-semibold tracking-tight leading-tight"
                                    initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
                                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                >
                                    Practitioner-Led, Not Classroom-Led
                                </motion.h3>
                            </div>
                            <div className="space-y-6">
                                <p className="text-base sm:text-lg md:text-xl font-inter-display text-text-primary leading-tight font-medium">
                                    CYBERLABS programs are designed and delivered by professionals who have <span className="text-primary font-bold">worked in real cybersecurity roles</span> , including:
                                </p>
                                <div ref={practitionerIconsRef}>
                                    <AnimatedList
                                        items={practitionerListItems}
                                        viewportOnce={false}
                                        viewportAmount={0.5}
                                        duration={0.6}
                                        staggerDelay={0.1}
                                        xOffset={50}
                                        containerClassName="space-y-3 mb-6"
                                        contentClassName="text-base sm:text-lg md:text-xl font-inter-display text-text-primary font-medium leading-tight"
                                        itemClassName="flex items-start gap-3"
                                        iconClassName="text-text-primary shrink-0 flex items-center pt-0.5"
                                        boldText={false}
                                    />
                                </div>
                                <p className="text-base sm:text-lg md:text-xl font-inter-display text-text-primary leading-tight font-medium">
                                    Our instructors are <span className="text-primary font-bold">operators first, educators second</span>. They teach from experience - not from slides or recycled content.
                                </p>
                            </div>
                        </motion.div>

                        {/* Investigation & Architecture Over Tools Section */}
                        <motion.div variants={itemVariants} className="border border-neutral-300 border-dashed rounded-md p-4"
                            style={{
                                background:
                                    "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                            }}
                        >
                            <div className="flex items-start gap-4 mb-6">
                                <motion.h3
                                    className="text-xl sm:text-2xl md:text-3xl font-montserrat text-text-primary font-semibold tracking-tight leading-tight"
                                    initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
                                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                >
                                    Investigation & Architecture Over Tools
                                </motion.h3>
                            </div>
                            <div className="space-y-6">
                                <p className="text-base sm:text-lg md:text-xl font-inter-display text-text-primary leading-tight font-medium mb-4">
                                    Most training institutes focus on:
                                </p>
                                <div ref={investigationIconsRef}>
                                    <AnimatedList
                                        items={investigationList1Items}
                                        viewportOnce={false}
                                        viewportAmount={0.5}
                                        duration={0.6}
                                        staggerDelay={0.1}
                                        xOffset={50}
                                        containerClassName="space-y-3 mb-6"
                                        contentClassName="text-base sm:text-lg md:text-xl font-inter-display text-text-primary font-medium leading-tight"
                                        itemClassName="flex items-start gap-3"
                                        iconClassName="text-text-primary shrink-0 flex items-center pt-0.5"
                                        boldText={false}
                                    />
                                    <p className="text-base sm:text-lg md:text-xl font-inter-display text-text-primary leading-tight font-medium mb-4">
                                        CYBERLABS focuses on:
                                    </p>
                                    <AnimatedList
                                        items={investigationList2Items}
                                        viewportOnce={false}
                                        viewportAmount={0.5}
                                        duration={0.6}
                                        staggerDelay={0.1}
                                        xOffset={50}
                                        containerClassName="space-y-3 mb-6"
                                        contentClassName="text-base sm:text-lg md:text-xl font-inter-display text-text-primary font-medium leading-tight"
                                        itemClassName="flex items-start gap-3"
                                        iconClassName="text-text-primary shrink-0 flex items-center pt-0.5"
                                        boldText={false}
                                    />
                                </div>
                                <p className="text-base sm:text-lg md:text-xl font-inter-display text-text-primary leading-relaxed font-medium">
                                    <span className="text-primary font-bold">Tools change. <br />
                                        Thinking frameworks endure.</span>
                                </p>
                            </div>
                        </motion.div>

                        {/* Simulation-Driven Learning Section */}
                        <motion.div variants={itemVariants} className="border border-neutral-300 border-dashed rounded-md p-4"
                            style={{
                                background:
                                    "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                            }}
                        >
                            <div className="flex items-start gap-4 mb-6">
                                <motion.h3
                                    className="text-xl sm:text-2xl md:text-3xl font-montserrat text-text-primary font-semibold tracking-tight leading-tight"
                                    initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
                                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                >
                                    Simulation-Driven Learning
                                </motion.h3>
                            </div>
                            <div className="space-y-6">
                                <p className="text-base sm:text-lg md:text-xl font-inter-display text-text-primary leading-tight font-medium">
                                    Learning at CYBERLABS happens inside <span className="text-primary font-bold">structured virtual environments</span> , where learners:
                                </p>
                                <div ref={simulationIconsRef}>
                                    <AnimatedList
                                        items={simulationListItems}
                                        viewportOnce={false}
                                        viewportAmount={0.5}
                                        duration={0.6}
                                        staggerDelay={0.1}
                                        xOffset={50}
                                        containerClassName="space-y-3 mb-6"
                                        contentClassName="text-base sm:text-lg md:text-xl font-inter-display text-text-primary font-medium leading-tight"
                                        itemClassName="flex items-start gap-3"
                                        iconClassName="text-text-primary shrink-0 flex items-center pt-0.5"
                                        boldText={false}
                                    />
                                </div>
                                <p className="text-base sm:text-lg md:text-xl font-inter-display text-text-primary leading-relaxed font-medium">
                                    This mirrors how <span className="text-primary font-bold">modern cybersecurity teams operate</span> in real organizations.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutWhatMakes;
