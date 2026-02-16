import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";

const WhatAndWhyTeam = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const cardVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 30,
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

    // Animated SVG Icon Components
    const AnimatedChalkboardTeacherIcon = ({ isInView }: { isInView: boolean }) => (
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
            className="w-5 h-5 sm:w-6 sm:h-6 text-primary shrink-0 mt-1"
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
                d="M8 19h-3a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v11a1 1 0 0 1 -1 1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M12 14a2 2 0 1 0 4.001 -.001a2 2 0 0 0 -4.001 .001"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.8, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M17 19a2 2 0 0 0 -2 -2h-2a2 2 0 0 0 -2 2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 1.2, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    const AnimatedBadgeIcon = ({ isInView }: { isInView: boolean }) => (
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
            className="w-5 h-5 sm:w-6 sm:h-6 text-primary shrink-0 mt-1"
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
                d="M17 17v-13l-5 3l-5 -3v13l5 3l5 -3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    const AnimatedClipboardListIcon = ({ isInView }: { isInView: boolean }) => (
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
            className="w-5 h-5 sm:w-6 sm:h-6 text-primary shrink-0 mt-1"
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
                d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.8, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M9 12l.01 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 1.3, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M13 12l2 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 1.3, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M9 16l.01 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 1.6, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M13 16l2 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 1.6, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    const AnimatedScanEyeIcon = ({ isInView }: { isInView: boolean }) => (
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
            className="w-5 h-5 sm:w-6 sm:h-6 text-primary shrink-0 mt-1"
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
                transition={{ duration: 0.4, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M4 16v2a2 2 0 0 0 2 2h2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.6, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M16 4h2a2 2 0 0 1 2 2v2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 1.0, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M16 20h2a2 2 0 0 0 2 -2v-2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 1.4, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M7 12c3.333 -4.667 6.667 -4.667 10 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 1.8, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M7 12c3.333 4.667 6.667 4.667 10 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 2.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M12 12h-.01"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 2.6, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    const AnimatedReportSearchIcon = ({ isInView }: { isInView: boolean }) => (
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
            className="w-5 h-5 sm:w-6 sm:h-6 text-primary shrink-0 mt-1"
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
                d="M8 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h5.697"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M18 12v-5a2 2 0 0 0 -2 -2h-2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.8, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M8 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 1.3, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M8 11h4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 1.8, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M8 15h3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 2.1, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M14 17.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 2.4, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M18.5 19.5l2.5 2.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 2.8, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

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
            className="w-5 h-5 sm:w-6 sm:h-6 text-primary shrink-0 mt-1"
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
                transition={{ duration: 0.6, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.8, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M17.5 16a3.5 3.5 0 0 0 0 -7h-.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 1.4, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 2.0, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M6.5 16a3.5 3.5 0 0 1 0 -7h.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 2.6, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.6, delay: 3.2, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    const AnimatedBulbIcon = ({ isInView }: { isInView: boolean }) => (
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
            className="w-5 h-5 sm:w-6 sm:h-6 text-primary shrink-0 mt-1"
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
                d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.8, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M9.7 17l4.6 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 1.4, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    const AnimatedAlertSquareRoundedIcon = ({ isInView }: { isInView: boolean }) => (
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
            className="w-5 h-5 sm:w-6 sm:h-6 text-primary shrink-0 mt-1"
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
                d="M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M12 8v4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.8, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M12 16h.01"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 1.2, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

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
            className="w-5 h-5 sm:w-6 sm:h-6 text-primary shrink-0 mt-1"
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
                transition={{ duration: 0.5, delay: 0.8, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    const AnimatedGavelIcon = ({ isInView }: { isInView: boolean }) => (
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
            className="w-5 h-5 sm:w-6 sm:h-6 text-primary shrink-0 mt-1"
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
                d="M13 10l7.383 7.418c.823 .82 .823 2.148 0 2.967a2.11 2.11 0 0 1 -2.976 0l-7.407 -7.385"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M6 9l4 4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.8, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M13 10l-4 -4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 1.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M3 21h7"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 1.6, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M6.793 15.793l-3.586 -3.586a1 1 0 0 1 0 -1.414l2.293 -2.293l.5 .5l3 -3l-.5 -.5l2.293 -2.293a1 1 0 0 1 1.414 0l3.586 3.586a1 1 0 0 1 0 1.414l-2.293 2.293l-.5 -.5l-3 3l.5 .5l-2.293 2.293a1 1 0 0 1 -1.414 0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.8, delay: 2.0, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    const AnimatedMessageReportIcon = ({ isInView }: { isInView: boolean }) => (
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
            className="w-5 h-5 sm:w-6 sm:h-6 text-primary shrink-0 mt-1"
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
                d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M12 8v3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.8, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
                d="M12 14v.01"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: 1.2, repeat: Infinity, repeatDelay: 3 }}
            />
        </svg>
    );

    return (
        <section className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 md:py-24 bg-background" ref={containerRef}>
            <div className="w-full max-w-7xl mx-auto">
                {/* Title Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8 md:mb-12"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-montserrat font-semibold text-text-primary leading-tight tracking-tight">
                        What Makes CYBERLABSFaculty Different
                    </h2>
                </motion.div>

                {/* Bento Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="mx-auto grid gap-4 sm:grid-cols-5"
                >
                    {/* Card 1: What Makes CYBERLABSFaculty Different - Large (3 cols) */}
                    <Card className="group overflow-hidden shadow-black/5 sm:col-span-3 sm:rounded-none sm:rounded-tl-xl border-neutral-300 border-dashed bg-white"
                        style={{ background: "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white", }}
                    >
                        <CardHeader className="p-6 md:p-8 pb-4 md:pb-6">
                            <motion.div variants={cardVariants} className="space-y-6">
                                <p className="text-lg sm:text-xl md:text-2xl text-text-primary leading-tight font-montserrat tracking-tighter font-semibold">
                                    Unlike traditional institutes, CYBERLABSdoes not rely on:
                                </p>

                                <ul className="space-y-3 font-inter-display font-medium text-text-primary text-base sm:text-lg md:text-xl leading-relaxed">
                                    <li className="flex items-start gap-3">
                                        <AnimatedChalkboardTeacherIcon isInView={isInView} />
                                        <span>Classroom-trained trainers</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <AnimatedBadgeIcon isInView={isInView} />
                                        <span>Instructors whose only experience is certifications</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <AnimatedClipboardListIcon isInView={isInView} />
                                        <span>Generic, recycled course material</span>
                                    </li>
                                </ul>
                            </motion.div>
                        </CardHeader>

                        <CardContent className="relative h-fit p-0">
                            <div className="absolute -inset-6 "></div>
                            <div className="relative overflow-hidden">
                                <div className="pt-0 px-6 md:px-8 pb-6 md:pb-8">
                                    <motion.div variants={cardVariants} className="space-y-6">
                                        <p className="text-lg sm:text-xl md:text-2xl text-text-primary leading-tight font-montserrat tracking-tighter font-semibold">
                                            Instead, CYBERLABSfaculty bring:
                                        </p>

                                        <ul className="space-y-3 font-inter-display font-medium text-text-primary text-base sm:text-lg md:text-xl leading-relaxed">
                                            <li className="flex items-start gap-3">
                                                <AnimatedScanEyeIcon isInView={isInView} />
                                                <span>First-hand exposure to real cyber incidents</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <AnimatedReportSearchIcon isInView={isInView} />
                                                <span>Experience handling live investigations and failures</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <AnimatedBrainIcon isInView={isInView} />
                                                <span>Understanding of how defenders think under pressure</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <AnimatedBulbIcon isInView={isInView} />
                                                <span>Ability to teach decision-making, not just tools</span>
                                            </li>
                                        </ul>

                                        <p className="text-sm sm:text-base md:text-lg font-inter-display font-medium text-text-primary leading-relaxed pt-2">
                                            This ensures learning is context-driven, realistic, and operationally relevant.
                                        </p>
                                    </motion.div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Card 2: Mentor-Driven - Small (2 cols) */}
                    <Card className="group overflow-hidden shadow-zinc-950/5 sm:col-span-2 sm:rounded-none sm:rounded-tr-xl border-neutral-300 border-dashed bg-white relative"
                        style={{ background: "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white", }}
                    >


                        {/* Subtle Grid Pattern */}
                        <div
                            className="absolute inset-0 opacity-[0.03]"
                            style={{
                                backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px)`,
                                backgroundSize: '20px 20px',
                            }}
                        />

                        <CardContent className="flex flex-col h-full p-6 md:p-8 relative z-10">
                            <motion.div variants={cardVariants} className="space-y-4">
                                <p className="text-lg sm:text-xl md:text-2xl text-text-primary leading-tight font-montserrat tracking-tighter font-semibold">
                                    Mentor-Driven, Not Lecture-Driven
                                </p>

                                <p className="text-sm sm:text-base md:text-lg font-inter-display font-medium text-text-primary leading-relaxed">
                                    CYBERLABSinstruction is mentor-led, not lecture-based.
                                </p>

                                <p className="text-sm sm:text-base md:text-lg font-inter-display font-semibold text-text-primary leading-tight">
                                    Faculty members guide learners through:
                                </p>

                                <ul className="space-y-2.5 font-inter-display font-medium text-text-primary text-sm sm:text-base md:text-lg leading-relaxed">
                                    <li className="flex items-start gap-3">
                                        <AnimatedAlertSquareRoundedIcon isInView={isInView} />
                                        <span>How to think when systems fail</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <AnimatedSearchIcon isInView={isInView} />
                                        <span>How to investigate unknown scenarios</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <AnimatedGavelIcon isInView={isInView} />
                                        <span>How to make defensible, professional decisions</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <AnimatedMessageReportIcon isInView={isInView} />
                                        <span>How to communicate findings in real environments</span>
                                    </li>
                                </ul>

                                <p className="text-sm sm:text-base md:text-lg font-inter-display font-medium text-text-primary leading-relaxed pt-2">
                                    Learners are trained to operate, not memorize.
                                </p>
                            </motion.div>
                        </CardContent>
                    </Card>

                    {/* Card 3: Why This Matters - Full width on mobile, spans 5 cols on desktop */}
                    <Card className="group overflow-hidden shadow-black/5 sm:col-span-5 sm:rounded-none sm:rounded-bl-xl sm:rounded-br-xl border-neutral-300 border-dashed bg-white"
                        style={{ background: "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white", }}
                    >
                        <CardContent className="p-6 md:p-8">
                            <motion.div variants={cardVariants} className="space-y-6">
                                <p className="text-lg sm:text-xl md:text-2xl text-text-primary leading-tight font-montserrat tracking-tighter font-semibold">
                                    Why This Matters
                                </p>

                                <p className="text-sm sm:text-base md:text-lg font-inter-display font-medium text-text-primary leading-relaxed">
                                    Being trained by professionals with real operational exposure means learners gain:
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                    <div
                                        className="p-4 sm:p-5 md:p-6 border border-neutral-300 border-dashed rounded-md bg-white"

                                    >
                                        <p className="text-sm sm:text-base md:text-lg font-inter-display font-semibold text-text-primary leading-relaxed">
                                            Practical insight into real cyber incidents
                                        </p>
                                    </div>
                                    <div
                                        className="p-4 sm:p-5 md:p-6 border border-neutral-300 border-dashed rounded-md bg-white"

                                    >
                                        <p className="text-sm sm:text-base md:text-lg font-inter-display font-semibold text-text-primary leading-relaxed">
                                            Understanding beyond checklists and tools
                                        </p>
                                    </div>
                                    <div
                                        className="p-4 sm:p-5 md:p-6 border border-neutral-300 border-dashed rounded-md bg-white"

                                    >
                                        <p className="text-sm sm:text-base md:text-lg font-inter-display font-semibold text-text-primary leading-relaxed">
                                            Confidence to operate in professional security roles
                                        </p>
                                    </div>
                                    <div
                                        className="p-4 sm:p-5 md:p-6 border border-neutral-300 border-dashed rounded-md bg-white"

                                    >
                                        <p className="text-sm sm:text-base md:text-lg font-inter-display font-semibold text-text-primary leading-relaxed">
                                            Exposure to how global cyber teams actually function
                                        </p>
                                    </div>
                                </div>

                                <p className="text-base sm:text-lg md:text-2xl font-inter-display font-medium text-text-primary leading-relaxed pt-2">
                                    This is the difference between{" "}
                                    <span className="text-primary font-semibold inline-flex items-baseline gap-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 self-center">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7c.412 .41 .97 .64 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1c0 .58 .23 1.138 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1" />
                                            <path d="M9 12l2 2l4 -4" />
                                        </svg>
                                        earning a certificate
                                    </span>
                                    {" "} and {" "}
                                    <span className="text-primary font-semibold inline-flex items-baseline gap-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 self-center">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06" />
                                            <path d="M15 19l2 2l4 -4" />
                                        </svg>
                                        becoming a cybersecurity professional
                                    </span>.
                                </p>

                                <div className="bg-white border border-neutral-300 border-dashed rounded-md p-4">
                                    <p className="text-base sm:text-lg md:text-xl font-inter-display font-medium text-text-primary leading-tight pt-2">
                                        CYBERLABSwas built by people who have lived cybersecurity, not just studied it. <br />
                                        With its <span className="text-primary font-semibold">Israel-founded roots</span> , global leadership, and practitioner-led faculty, CYBERLABS INDIA
                                        delivers cybersecurity education that is <span className="text-primary font-semibold">serious, operational, and trusted</span> - designed for those
                                        who want to work in the real world, not just the classroom.
                                    </p>
                                </div>
                            </motion.div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
};

export default WhatAndWhyTeam;
