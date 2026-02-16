import { useState, useEffect, type ReactElement } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";
import { useLenis } from "../hooks/useLenis";
// import { Parallax } from "react-parallax";
import { AnimatedHeading } from "./ui/animated-heading";

// Team member images
import guyKlisman from "../assets/img/TeamMemberImages/GuyKlisman.webp";
import ramiSimanTov from "../assets/img/TeamMemberImages/Rami.webp";
import adamGarfinkel from "../assets/img/TeamMemberImages/Adam.webp";
import lucienFransman from "../assets/img/TeamMemberImages/Lucien.webp";
import shmulikYehezkel from "../assets/img/TeamMemberImages/Shmulik.webp";
import najeebIbrahim from "../assets/img/TeamMemberImages/NajeebIbrahim.webp";
// import groupImage from "../assets/img/TeamMemberImages/teamImage.webp"

interface TeamMember {
    src: string;
    alt: string;
    name: string;
    designation: string;
    description: string;
}

// Slight variations per card so each hovers at a different angle
const hoverAngles = [
    { rotateX: -6, rotateY: 4, skewX: 1, skewY: -0.5 },
    { rotateX: 5, rotateY: -5, skewX: -1.2, skewY: 0.6 },
    { rotateX: -4, rotateY: -6, skewX: 0.8, skewY: 1 },
    { rotateX: 6, rotateY: 3, skewX: -0.6, skewY: -0.8 },
    { rotateX: -5, rotateY: 5, skewX: 1.2, skewY: -0.4 },
    { rotateX: 4, rotateY: -4, skewX: -0.8, skewY: 0.7 },
];

// Team Member Card Component with hover effect
const TeamMemberCard = ({
    member,
    index = 0,
    itemVariants,
    onCardClick,
    onMouseMove,
    onMouseEnter,
    onMouseLeave,
}: {
    member: TeamMember;
    index?: number;
    itemVariants: Variants;
    onCardClick: (member: TeamMember) => void;
    onMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}) => {
    const angle = hoverAngles[index % hoverAngles.length];
    return (
        <motion.div
            variants={itemVariants}
            onClick={() => onCardClick(member)}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onMouseMove={onMouseMove}
            whileHover={{
                y: -8,
                scale: 1.03,
                rotateX: angle.rotateX,
                rotateY: angle.rotateY,
                skewX: angle.skewX,
                skewY: angle.skewY,
                boxShadow: "0 20px 40px -12px rgba(0,0,0,0.15)",
            }}
            transition={{ type: "spring", stiffness: 350, damping: 22 }}
            className="relative flex flex-col h-full border border-neutral-200 rounded-xl bg-white overflow-hidden cursor-pointer will-change-transform ring ring-neutral-300 ring-offset-2 md:ring-offset-4"
            style={{
                background: "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
            }}
        >
            {/* Image - fixed aspect so all cards align */}
            <div className="w-full aspect-3/4 overflow-hidden shrink-0">
                <img
                    src={member.src}
                    alt={member.alt}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content - flex-1 so card fills height */}
            <div className="p-3 md:p-4 flex flex-col flex-1 min-h-0">
                <h3 className="text-sm sm:text-base md:text-lg font-montserrat font-semibold text-text-primary leading-tight mb-1">
                    {member.name}
                </h3>
                <p className="text-xs sm:text-sm md:text-base font-inter-display text-text-primary/80 font-medium leading-tight">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="float-left w-3 h-3 sm:w-4 sm:h-4 mr-1.5 mt-0.5">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M6.5 7.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                        <path d="M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3" />
                    </svg>
                    {member.designation}
                </p>
            </div>
        </motion.div>
    );
};

// Team member data
const teamMembers: TeamMember[] = [
    {
        src: guyKlisman,
        alt: "Guy Klisman",
        name: "Guy Klisman",
        designation: "Founder & Chief Executive Officer , CYBERLABS",
        description: `Guy Klisman is a former senior commander and officer in the Israeli security establishment, with 25+ years of experience across cyber operations, intelligence, and national security.
During his service, he:
• Commanded specialized cyber and intelligence units
• Led the establishment of cyber training frameworks for elite and special forces
• Served in advanced SIGINT and intelligence leadership roles
• Directed international cyber and intelligence cooperation programs
In the civilian domain, Guy has spearheaded multiple cyber and technology ventures and currently leads CYBERLABS USA, specializing in the development and operation of global cyber training and simulation centers.
Under his leadership, CYBERLABS has trained and certified hundreds of cyber professionals who have integrated into the international cybersecurity industry, working in collaboration with top academic institutions in the United States and globally.`,
    },
    {
        src: ramiSimanTov,
        alt: "Rami Siman-Tov",
        name: "Rami Siman-Tov",
        designation: "Co-Founder & Chief Operating Officer , CYBERLABS",
        description: `Rami Siman-Tov is a global cyber operations and program delivery leader with 25+ years of experience across Israel, the United States, Europe, Africa, and Asia.
Before founding CYBERLABS, Rami:
• Led large-scale technology and telecom programs for international clients
• Managed complex, multi-country deployments across China, West Africa, and Europe
• Held senior leadership roles at Comverse, including Regional Services Director and Program Manager for large-scale global projects
• Founded and led municipal and government technology initiatives end-to-end
At CYBERLABS, Rami is responsible for global operations, execution quality, and learner-to-professional transformation, ensuring programs meet real industry and enterprise readiness standards, not academic checklists.`,
    },
    {
        src: shmulikYehezkel,
        alt: "Shmulik Yehezkel",
        name: "Shmulik Yehezkel",
        designation: "Advisory Board , National Cyber Defense & Strategy",
        description: `Colonel (Res.) Shmulik Yehezkel is one of Israel's most senior cyber defense professionals, with 25+ years of experience across government, defense, and national cybersecurity leadership.
He has served in key roles within the Prime Minister's Office, including:
• Head of the Cyber & Operational Technology Academy, leading national-level cyber and OT training frameworks
• Architect of advanced training programs integrating exercises, simulations, and workforce readiness
• Leader of large-scale strategic and operational cyber simulations
• Builder of long-term national cyber capability and human capital pipelines
At CYBERLABS, Shmulik chairs the committee responsible for approving instructors, certifying training quality, and enforcing international-level standards, ensuring Israeli-grade rigor across all programs.`,
    },
    {
        src: adamGarfinkel,
        alt: "Adam Garfinkel",
        name: "Adam Garfinkel",
        designation: "Lead Instructor , Cybersecurity, Cloud & Infrastructure",
        description: `Adam Garfinkel is a graduate of the Technological Unit of the IDF's elite C4I Corps, with extensive experience across networking, cybersecurity, cloud systems, and AI-driven environments.
His background spans:
• Enterprise and cloud security architecture
• Product management for cybersecurity and communications solutions
• QA leadership for database security products
• DevOps support, tool development, and knowledge-center management
• Training and certifying cybersecurity professionals at scale
Adam is known for bridging advanced technology with human capability, translating complex systems into operational understanding, not just technical configuration.`,
    },
    {
        src: lucienFransman,
        alt: "Lucien Fransman",
        name: "Lucien Fransman",
        designation: "Head of Content & Lead Instructor , Asia Region",
        description: `Lucien Fransman is a globally respected cybersecurity leader with 25+ years of experience across incident response, digital forensics, SOC operations, and threat hunting.
Key highlights include:
• Over 20 years leading and delivering cybersecurity training to enterprises, universities, and government cyber offices worldwide
• Founder & Technical Director of IronBox, delivering managed SOC and forensic services internationally
• Architect of Suriname's National SOC, aligned with ISO 27001 standards
• Senior Risk Analyst at ABN AMRO Bank during major merger operations
• Security consultant for Delta Lloyd and Philips, leading APT response efforts
• Advisor to national crisis boards and government e-governance cyber initiatives
Lucien currently serves as Virtual CISO for an Israeli cybersecurity startup and is a member of the SANS Institute Advisory Board, bringing real operational depth into CYBERLABS curricula.`,
    },
    {
        src: najeebIbrahim,
        alt: "Najeeb Ibrahim",
        name: "Najeeb Ibrahim",
        designation: "Chief Information Security Officer & Senior Instructor",
        description: `Najeeb Ibrahim is a Senior Security Analyst and CISO with 8+ years of hands-on experience across offensive and defensive cybersecurity, SOC operations, detection engineering, and incident response.
He currently serves as Senior Security Analyst & CISO at CyberArk, where he:
• Builds and scales enterprise-grade security programs
• Operates within advanced monitoring and threat detection environments
• Actively participates in real-world incident response
Alongside his industry role, Najeeb is an experienced cybersecurity lecturer, delivering structured, practice-driven training focused on real attack and defense methodologies. He holds multiple globally recognized certifications across cloud, offensive, and defensive security domains.`,
    },
];

const CoreFaculty = () => {
    const containerRef = useRef(null);
    const headingRef = useRef<HTMLDivElement>(null);
    const headingInView = useInView(headingRef, { once: false, margin: "-100px" });
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const lenis = useLenis();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e: React.MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    const handleCardClick = (member: TeamMember) => {
        setSelectedMember(member);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedMember(null), 300);
    };

    useEffect(() => {
        if (!lenis) return;

        if (isModalOpen) {
            lenis.stop();
            document.body.style.overflow = 'hidden';
        } else {
            lenis.start();
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
            if (lenis) lenis.start();
        };
    }, [isModalOpen, lenis]);

    // No-op variants for cards when using scroll-based wrapper animation
    const noOpVariants: Variants = {
        hidden: { opacity: 1, y: 0 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20  " ref={containerRef}>
            <div className="w-full">
                {/* Header */}
                <div ref={headingRef} className="mb-8 md:mb-12">
                    <AnimatedHeading
                        inView={headingInView}
                        lines={[
                            { text: "Leadership & Core Faculty", className: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-montserrat font-semibold text-text-primary leading-tight tracking-tight mb-4" },
                        ]}
                    />
                </div>

                {/* Mouse Following Text - Fixed positioning like example */}
                <motion.div
                    className="fixed pointer-events-none z-50"
                    animate={{
                        x: mousePosition.x + 15,
                        y: mousePosition.y + 15,
                        opacity: isHovering ? 1 : 0,
                        scale: isHovering ? 1 : 0.5,
                    }}
                    transition={{
                        x: {
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                            mass: 0.3,
                        },
                        y: {
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                            mass: 0.3,
                        },
                        opacity: {
                            type: "spring",
                            stiffness: 400,
                            damping: 35,
                            mass: 0.4,
                        },
                        scale: {
                            type: "spring",
                            stiffness: 450,
                            damping: 30,
                            mass: 0.3,
                        },
                    }}
                    style={{
                        left: 0,
                        top: 0,
                    }}
                >
                    <div className="relative inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 border border-neutral-300  rounded-md"
                        style={{
                            background:
                                "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                        }}>
                        <span className="inline-flex items-center gap-1.5 sm:gap-2 relative z-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 sm:w-4 sm:h-4 shrink-0 text-text-primary">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M3 12l3 0" />
                                <path d="M12 3l0 3" />
                                <path d="M7.8 7.8l-2.2 -2.2" />
                                <path d="M16.2 7.8l2.2 -2.2" />
                                <path d="M7.8 16.2l-2.2 2.2" />
                                <path d="M12 12l9 3l-4 2l-2 4l-3 -9" />
                            </svg>
                            <span className="font-montserrat text-text-primary text-xs sm:text-sm md:text-base font-medium leading-tight whitespace-nowrap">
                                Click to explore
                            </span>
                        </span>
                    </div>
                </motion.div>

                {/* Team Grid - each card animates on scroll with stagger; items-stretch for equal height */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6 items-stretch">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            className="flex h-full min-h-0"
                            style={{ perspective: 1200 }}
                            initial={{ opacity: 0, y: 48, scale: 0.94 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.08,
                                ease: [0.25, 0.46, 0.45, 0.94],
                            }}
                        >
                            <TeamMemberCard
                                member={member}
                                index={index}
                                itemVariants={noOpVariants}
                                onCardClick={handleCardClick}
                                onMouseMove={handleMouseMove}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* <Parallax
                    bgImage={groupImage}
                    strength={400}
                    className="mt-8 md:mt-12 border border-neutral-300 border-dashed overflow-hidden"
                    style={{
                        minHeight: "280px",
                        height: "75vh",
                    }}
                    bgImageAlt="Leadership & Core Faculty"
                    bgImageStyle={{ objectFit: "cover", objectPosition: "center" }}
                >
                    <div
                        className="relative w-full h-[280px] sm:h-[360px] md:h-[75vh] min-h-[280px] flex flex-col items-end justify-end px-4 sm:px-6 md:px-8 md:pb-8 pb-4"
                        style={{ minHeight: "280px" }}
                    >
                        <h2
                            className="text-lg md:text-2xl font-inter-display font-semibold text-text-primary px-4 border border-neutral-300 border-dashed rounded leading-tight tracking-tight mb-0 w-fit flex items-center gap-2 z-10"
                            style={{
                                background:
                                    "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                            }}
                        >
                            <AnimatedThumbsUpIcon isInView={isInView} />
                            Leadership & Core Faculty
                        </h2>
                    </div>
                </Parallax> */}
            </div>

            {/* Team Member Modal */}
            {selectedMember &&
                createPortal(
                    <AnimatePresence>
                        {isModalOpen && (
                            <>
                                {/* Backdrop */}
                                <motion.div
                                    className="fixed inset-0 bg-background z-9998"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    onWheel={(e) => e.preventDefault()}
                                    onTouchMove={(e) => e.preventDefault()}
                                    onClick={handleCloseModal}
                                    style={{
                                        position: "fixed",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        zIndex: 9998,
                                    }}
                                />

                                {/* Modal */}
                                <motion.div
                                    className="fixed inset-0 z-9999 flex items-center justify-center p-4"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    style={{
                                        position: "fixed",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        zIndex: 9999,
                                        padding: "1rem",
                                    }}
                                >
                                    <motion.div
                                        className="relative bg-white w-full max-w-6xl h-[90vh] flex flex-col border border-neutral-200 rounded-xl overflow-hidden ring ring-neutral-300 ring-offset-4 md:ring-offset-8"
                                        initial={{ scale: 0.95, y: 20 }}
                                        animate={{ scale: 1, y: 0 }}
                                        exit={{ scale: 0.95, y: 20 }}
                                        transition={{
                                            duration: 0.4,
                                            ease: [0.25, 0.46, 0.45, 0.94],
                                        }}
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        {/* Content Container */}
                                        <div
                                            className="bg-white relative flex flex-col h-full overflow-hidden"
                                            style={{
                                                background:
                                                    "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                                            }}
                                        >
                                            {/* Clean Header */}
                                            <div className="border-b border-neutral-300 shrink-0 relative bg-white">
                                                <div className="flex items-center justify-between px-6 sm:px-8 md:px-12 py-4 sm:py-5">
                                                    <div className="flex-1">
                                                        <h2 className="text-lg sm:text-xl text-gray-500 font-montserrat font-semibold uppercase tracking-wider">
                                                            {selectedMember.name}
                                                        </h2>
                                                    </div>
                                                    <motion.button
                                                        className="text-gray-600 hover:text-primary transition-colors p-2 shrink-0 rounded-md hover:bg-gray-100"
                                                        onClick={handleCloseModal}
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                        aria-label="Close modal"
                                                    >
                                                        <IoClose className="w-6 h-6 sm:w-7 sm:h-7" />
                                                    </motion.button>
                                                </div>
                                            </div>

                                            {/* Modal Content - Scrollable */}
                                            <div className="flex-1 overflow-y-auto" data-lenis-prevent>
                                                <div className="px-6 sm:px-8 md:px-12 py-8 sm:py-10 md:py-12">
                                                    {/* Two Column Layout */}
                                                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 md:gap-12 max-w-5xl mx-auto">
                                                        {/* Left Column - Image */}
                                                        <div className="md:col-span-4">
                                                            <div className="sticky top-8">
                                                                <div className="border border-neutral-200 ring ring-neutral-300 ring-offset-3 md:ring-offset-6 bg-white  rounded-xl shadow-lg">
                                                                    <img
                                                                        src={selectedMember.src}
                                                                        alt={selectedMember.alt}
                                                                        className="w-full h-auto object-cover rounded-xl"
                                                                    />
                                                                </div>
                                                                <p className="text-sm sm:text-base text-gray-700 font-montserrat font-semibold mt-4 text-left border-l-3 border-primary pl-2 bg-white w-fit">
                                                                    {selectedMember.name}
                                                                </p>
                                                                <p className="text-xs sm:text-sm text-gray-500 font-inter-display font-medium mt-2 text-left leading-relaxed text-shadow-sm">
                                                                    {selectedMember.designation}
                                                                </p>
                                                            </div>
                                                        </div>

                                                        {/* Right Column - Text Content */}
                                                        <div className="md:col-span-8">
                                                            <div className="prose prose-lg max-w-none">
                                                                {(() => {
                                                                    const description = selectedMember.description;
                                                                    const lines = description.split('\n').filter(line => line.trim() !== '');
                                                                    const elements: ReactElement[] = [];
                                                                    let currentParagraph: string[] = [];
                                                                    let isFirstParagraph = true;
                                                                    let currentBulletList: string[] = [];

                                                                    const flushParagraph = () => {
                                                                        if (currentParagraph.length > 0) {
                                                                            const text = currentParagraph.join(' ');
                                                                            elements.push(
                                                                                <p
                                                                                    key={`para-${elements.length}`}
                                                                                    className={`text-base sm:text-lg md:text-xl text-gray-700 font-inter-display font-medium leading-relaxed mb-4  ${isFirstParagraph
                                                                                        ? 'first-letter:float-left first-letter:text-7xl sm:first-letter:text-8xl md:first-letter:text-9xl first-letter:font-bold first-letter:text-primary first-letter:mr-3 sm:first-letter:mr-4 first-letter:leading-[0.8] first-letter:mt-1'
                                                                                        : ''
                                                                                        }`}
                                                                                >
                                                                                    {text}
                                                                                </p>
                                                                            );
                                                                            currentParagraph = [];
                                                                            isFirstParagraph = false;
                                                                        }
                                                                    };

                                                                    const flushBulletList = () => {
                                                                        if (currentBulletList.length > 0) {
                                                                            elements.push(
                                                                                <ul key={`bullet-${elements.length}`} className="mb-4 sm:mb-6 space-y-2 sm:space-y-3">
                                                                                    {currentBulletList.map((bullet, idx) => (
                                                                                        <li
                                                                                            key={idx}
                                                                                            className="flex items-start text-base sm:text-lg md:text-xl text-gray-700 font-inter-display font-medium leading-relaxed"
                                                                                        >
                                                                                            <span className="text-gray-500 mr-3 sm:mr-4 mt-0.5 shrink-0 text-xl sm:text-2xl">
                                                                                                •
                                                                                            </span>
                                                                                            <span className="flex-1">{bullet}</span>
                                                                                        </li>
                                                                                    ))}
                                                                                </ul>
                                                                            );
                                                                            currentBulletList = [];
                                                                        }
                                                                    };

                                                                    lines.forEach((line) => {
                                                                        const trimmed = line.trim();
                                                                        if (trimmed.startsWith('•')) {
                                                                            flushParagraph();
                                                                            currentBulletList.push(trimmed.substring(1).trim());
                                                                        } else {
                                                                            flushBulletList();
                                                                            currentParagraph.push(trimmed);
                                                                        }
                                                                    });

                                                                    flushParagraph();
                                                                    flushBulletList();

                                                                    return <>{elements}</>;
                                                                })()}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>,
                    document.body
                )}
        </section>
    );
};

export default CoreFaculty;