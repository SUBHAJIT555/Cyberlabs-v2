import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";
import { AnimatedHeading } from "./ui/animated-heading";
import { AnimatedList } from "./ui/animated-list";
import type { AnimatedListItem } from "./ui/animated-list";

const AboutWhy = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: false, margin: "-100px" });
    const headingRef = useRef<HTMLDivElement>(null);
    const headingInView = useInView(headingRef, { once: false, margin: "-100px" });
    const iconsRef = useRef(null);
    const iconsInView = useInView(iconsRef, { once: false, margin: "-100px" });
    const usaIconsRef = useRef(null);
    const usaIconsInView = useInView(usaIconsRef, { once: false, margin: "-100px" });
    const indiaIconsRef = useRef(null);
    const indiaIconsInView = useInView(indiaIconsRef, { once: false, margin: "-100px" });
    // Animated SVG: radar (National-level cyber defense)
    const AnimatedRadarIcon = ({ isInView }: { isInView: boolean }) => (
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
                d="M21 12h-8a1 1 0 1 0 -1 1v8a9 9 0 0 0 9 -9"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M16 9a5 5 0 1 0 -7 7"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.8, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M20.486 9a9 9 0 1 0 -11.482 11.495"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.8, delay: 1.2, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    // Animated SVG: alert-hexagon (Continuous exposure to advanced threats)
    const AnimatedAlertHexagonIcon = ({ isInView }: { isInView: boolean }) => (
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
                d="M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M12 8v4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 1, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M12 16h.01"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.2, delay: 1.3, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    // Animated SVG: fingerprint-scan (Deep focus on attribution)
    const AnimatedFingerprintScanIcon = ({ isInView }: { isInView: boolean }) => (
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
                d="M9 11a3 3 0 0 1 6 0c0 1.657 .612 3.082 1 4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M12 11v1.75c-.001 1.11 .661 2.206 1 3.25"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.7, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M9 14.25c.068 .58 .358 1.186 .5 1.75"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 1.1, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M4 8v-2a2 2 0 0 1 2 -2h2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 1.4, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M4 16v2a2 2 0 0 0 2 2h2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 1.6, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M16 4h2a2 2 0 0 1 2 2v2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 1.8, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M16 20h2a2 2 0 0 0 2 -2v-2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 2, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    // Animated SVG: target-arrow (High accountability)
    const AnimatedTargetArrowIcon = ({ isInView }: { isInView: boolean }) => (
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
                d="M12 7a5 5 0 1 0 5 5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.4, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M13 3.055a9 9 0 1 0 7.941 7.945"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.8, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M15 6v3h3l3 -3h-3v-3l-3 3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 1.4, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M15 9l-3 3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 1.8, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    // Animated SVG: sitemap (Curriculum depth and structure)
    const AnimatedSitemapIcon = ({ isInView }: { isInView: boolean }) => (
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
                d="M3 17a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2l0 -2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M15 17a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2l0 -2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.6, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2l0 -2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 1, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M6 15v-1a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 1.4, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M12 9l0 3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 1.7, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    // Animated SVG: checklist (Assessment and evaluation standards)
    const AnimatedChecklistIcon = ({ isInView }: { isInView: boolean }) => (
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
                d="M9.615 20h-2.615a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M14 19l2 2l4 -4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.7, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M9 8h4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 1, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M9 12h2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.2, delay: 1.2, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    // Animated SVG: device-desktop-code (Simulation-driven learning methodology)
    const AnimatedDeviceDesktopCodeIcon = ({ isInView }: { isInView: boolean }) => (
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
                d="M12.5 16h-8.5a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v8"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.7, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M7 20h4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.8, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M9 16v4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 1, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M20 21l2 -2l-2 -2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 1.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M17 17l-2 2l2 2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 1.4, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    // Animated SVG: user-shield (Alignment with real cybersecurity roles)
    const AnimatedUserShieldIcon2 = ({ isInView }: { isInView: boolean }) => (
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
                d="M6 21v-2a4 4 0 0 1 4 -4h2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M22 16c0 4 -2.5 6 -3.5 6s-3.5 -2 -3.5 -6c1 0 2.5 -.5 3.5 -1.5c1 1 2.5 1.5 3.5 1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.6, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 1.1, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    // Animated SVG: user-cog (Build capability)
    const AnimatedUserCogIcon = ({ isInView }: { isInView: boolean }) => (
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
                d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M6 21v-2a4 4 0 0 1 4 -4h2.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.6, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M17.001 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 1, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M19.001 15.5v1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.2, delay: 1.3, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M19.001 21v1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.2, delay: 1.4, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M22.032 17.25l-1.299 .75"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 1.5, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M17.27 20l-1.3 .75"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 1.6, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M15.97 17.25l1.3 .75"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 1.7, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M20.733 20l1.3 .75"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 1.8, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    // Animated SVG: zoom-scan (Focus on depth)
    const AnimatedZoomScanIcon = ({ isInView }: { isInView: boolean }) => (
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
                d="M4 8v-2a2 2 0 0 1 2 -2h2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M4 16v2a2 2 0 0 0 2 2h2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.4, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M16 4h2a2 2 0 0 1 2 2v2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.6, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M16 20h2a2 2 0 0 0 2 -2v-2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.8, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M8 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 1, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M16 16l-2.5 -2.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 1.4, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    // Animated SVG: briefcase-2 (Align training with real cyber roles)
    const AnimatedBriefcase2Icon = ({ isInView }: { isInView: boolean }) => (
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
                d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.7, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    // Animated SVG: trending-up-2 (Long-term careers)
    const AnimatedTrendingUp2Icon = ({ isInView }: { isInView: boolean }) => (
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
                d="M18 5l3 3l-3 3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M3 18h5l7 -10h6"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.5, repeat: Infinity, repeatDelay: 3 }}
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

    const israelListItems: AnimatedListItem[] = [
        { text: "National-level cyber defense and intelligence operations", icon: <AnimatedRadarIcon isInView={iconsInView} /> },
        { text: "Continuous exposure to advanced threats", icon: <AnimatedAlertHexagonIcon isInView={iconsInView} /> },
        { text: "Deep focus on attribution, investigation, and adversary behavior", icon: <AnimatedFingerprintScanIcon isInView={iconsInView} /> },
        { text: "High accountability, where failure has real-world consequences", icon: <AnimatedTargetArrowIcon isInView={iconsInView} /> },
    ];

    const usaListItems: AnimatedListItem[] = [
        { text: "Curriculum depth and structure", icon: <AnimatedSitemapIcon isInView={usaIconsInView} /> },
        { text: "Assessment and evaluation standards", icon: <AnimatedChecklistIcon isInView={usaIconsInView} /> },
        { text: "Simulation-driven learning methodology", icon: <AnimatedDeviceDesktopCodeIcon isInView={usaIconsInView} /> },
        { text: "Alignment with real cybersecurity roles and expectations", icon: <AnimatedUserShieldIcon2 isInView={usaIconsInView} /> },
    ];

    return (
        <section className="w-full bg-background py-8 md:py-12 lg:py-16" ref={containerRef}>
            <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {/* Why CYBERLABS Exists Section - Heading and Supporting Paragraph */}
                    <motion.div variants={itemVariants} className="mb-16 md:mb-20 md:text-center text-left">
                        <AnimatedHeading
                            ref={headingRef as React.RefObject<HTMLDivElement>}
                            inView={headingInView}
                            lines={[
                                { text: "Why CYBERLABS Exists", className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-montserrat text-text-primary font-semibold tracking-tight leading-tight md:leading-normal mb-6" },
                            ]}
                        />
                        <div className="space-y-6 max-w-7xl mx-auto">
                            <motion.p
                                className="text-lg sm:text-xl md:text-2xl font-inter-display text-text-primary leading-relaxed font-medium"
                                initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
                                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            >
                                CYBERLABS was created to address a fundamental gap in cybersecurity education. While most programs focus on tools, certifications, or surface-level skills, real cybersecurity work demands something deeper: <span className="text-primary font-bold">judgment, investigation capability, architectural understanding, and the ability to operate under uncertainty</span>.
                            </motion.p>
                            <motion.p
                                className="text-xl sm:text-2xl md:text-3xl font-montserrat text-text-primary leading-relaxed font-bold"
                                initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
                                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
                            >
                                CYBERLABS exists to build that capability.
                            </motion.p>
                        </div>
                    </motion.div>

                    {/* Three Column Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
                        {/* Israel-Founded Cybersecurity DNA Section */}
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
                                    Israel-Founded Cybersecurity DNA
                                </motion.h3>
                            </div>
                            <div className="space-y-6">
                                <p className="text-base sm:text-lg md:text-xl font-inter-display text-text-primary leading-tight font-medium">
                                    Israel&apos;s cybersecurity ecosystem is shaped by realities that few regions experience at the same scale:
                                </p>
                                <div ref={iconsRef}>
                                    <AnimatedList
                                        items={israelListItems}
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
                                    This environment produces professionals trained to <span className="text-primary font-bold">analyze deeply, investigate methodically, and act decisively</span> . That same philosophy forms the backbone of CYBERLABS&apos; global training framework.
                                </p>
                            </div>
                        </motion.div>

                        {/* CYBERLABS USA Section */}
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
                                    CYBERLABS USA – The Global Framework
                                </motion.h3>
                            </div>
                            <div className="space-y-6">
                                <p className="text-base sm:text-lg md:text-xl font-inter-display text-text-primary leading-tight font-medium">
                                    CYBERLABS operates globally under the framework of <span className="text-primary font-bold">CYBERLABS USA</span>, which defines:
                                </p>
                                <div ref={usaIconsRef}>
                                    <AnimatedList
                                        items={usaListItems}
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
                                    Programs delivered across regions follow this unified framework, ensuring <span className="text-primary font-bold">consistency, rigor, and international relevance</span>.
                                </p>
                            </div>
                        </motion.div>

                        {/* CYBERLABS India Section */}
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
                                    CYBERLABS India
                                </motion.h3>
                            </div>
                            <div className="space-y-6">
                                <p className="text-base sm:text-lg md:text-xl font-inter-display text-text-primary leading-tight font-medium">
                                    CYBERLABS India operates under <span className="text-primary font-bold">Cyveritas Technologies LLP</span>, bringing CYBERLABS&apos; global standards to the Indian market.
                                </p>
                                <p className="text-base sm:text-lg md:text-xl font-inter-display text-text-primary leading-tight font-semibold">
                                    Our objective in India is clear:
                                </p>
                                <ul className="space-y-3 mb-6" ref={indiaIconsRef}>
                                    {[
                                        { icon: <AnimatedUserCogIcon isInView={indiaIconsInView} />, content: <>Build <span className="text-primary font-bold">capability</span>, not just credentials</> },
                                        { icon: <AnimatedZoomScanIcon isInView={indiaIconsInView} />, content: <>Focus on <span className="text-primary font-bold">depth over volume</span></> },
                                        { icon: <AnimatedBriefcase2Icon isInView={indiaIconsInView} />, content: <>Align training with <span className="text-primary font-bold">real cyber roles</span>, not outdated syllabi</> },
                                        { icon: <AnimatedTrendingUp2Icon isInView={indiaIconsInView} />, content: <>Prepare professionals for <span className="text-primary font-bold">long-term careers</span>, not short-term certifications</> },
                                    ].map((item, index) => (
                                        <motion.li
                                            key={index}
                                            className="flex items-start gap-3 text-base sm:text-lg md:text-xl font-inter-display text-text-primary font-medium leading-tight"
                                            initial={{ opacity: 0, x: 50 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: false, amount: 0.5 }}
                                            transition={{ duration: 0.6, delay: index * 0.1 }}
                                        >
                                            <span className="mt-1 text-text-primary shrink-0 flex items-center pt-0.5">{item.icon}</span>
                                            <span>{item.content}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                                <p className="text-base sm:text-lg md:text-xl font-inter-display text-text-primary leading-relaxed font-medium">
                                    CYBERLABS INDIA focuses on advanced cyber defense, investigations, platform security, and full-stack cybersecurity - aligned with India&apos;s rapidly expanding digital and regulatory landscape.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutWhy;
