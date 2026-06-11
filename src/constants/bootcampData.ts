import type { Bootcamp } from "@/interface/bootcamp";

import cybercrimeImage from "@/assets/img/ProgramImage/CybercrimeDarkWebAndFinancialIntelligenceOperations.webp";
import fullStackImage from "@/assets/img/ProgramImage/FullStackCyberDefenseAndOffensiveSecurity.webp";
import platformImage from "@/assets/img/ProgramImage/PlatformIdentityAndAbuseDefenseEngineering.webp";
import cyberDefenseTraining from "@/assets/img/HomePageImages/cybredefensetraining.svg";
import buildingFutureImage from "@/assets/img/ProgramPageImage/buildingfuture.svg";
import whoOurTraining from "@/assets/img/HomePageImages/whoourtraining.svg";

export const bootcamps: Bootcamp[] = [
    {
        id: 1,
        slug: "dark-web-intelligence-covert-cyber-investigations",
        title: "Dark Web Intelligence & Covert Cyber Investigations",
        duration: "30 Hours",
        date: "Enrolling Now",
        language: "English",
        originalPrice: 29999,
        launchPrice: 20999,
        currency: "INR",
        description:
            "Expand your expertise into one of cybersecurity's fastest-growing domains. Develop practical skills in Threat Intelligence, Cyber Investigations, Cryptocurrency Tracing, and Threat Actor Analysis that support career progression into specialized intelligence and investigative roles.",
        image: cybercrimeImage,
    },
    {
        id: 2,
        slug: "advanced-threat-hunting-adversary-detection",
        title: "Advanced Threat Hunting & Adversary Detection",
        duration: "28 Hours",
        date: "Enrolling Now",
        language: "English",
        originalPrice: 24999,
        launchPrice: 16999,
        currency: "INR",
        description:
            "Advance your cybersecurity career by developing the proactive threat hunting skills increasingly sought by employers worldwide. Learn how to identify hidden threats, investigate suspicious activity, and strengthen your value as a modern security professional.",
        image: fullStackImage,
    },
    {
        id: 3,
        slug: "detection-engineering-adversary-analytics",
        title: "Detection Engineering & Adversary Analytics",
        duration: "28 Hours",
        date: "Enrolling Now",
        language: "English",
        originalPrice: 24999,
        launchPrice: 16999,
        currency: "INR",
        description:
            "Position yourself for advanced SOC, Detection Engineering, and Cyber Defense roles by learning how modern organizations identify and analyze adversary activity. Develop practical skills that help you move beyond monitoring and contribute to building stronger security operations.",
        image: platformImage,
    },
    {
        id: 4,
        slug: "ai-security-adversarial-ai-operations",
        title: "AI Security & Adversarial AI Operations",
        duration: "30 Hours",
        date: "Enrolling Now",
        language: "English",
        originalPrice: 29999,
        launchPrice: 20999,
        currency: "INR",
        description:
            "Prepare for the next evolution of cybersecurity. As organizations rapidly adopt Artificial Intelligence, professionals with AI Security and AI Red Teaming capabilities will be among the industry's most sought-after specialists and command premium career opportunities.",
        image: cyberDefenseTraining,
    },
    {
        id: 5,
        slug: "ai-powered-security-operations-center",
        title: "AI-Powered Security Operations Center (SOC)",
        duration: "30 Hours",
        date: "TBA",
        language: "English",
        originalPrice: 24999,
        launchPrice: 16999,
        currency: "INR",
        phase: 2,
        launchNote: "Phase 2 Program – Launch Date to Be Announced",
        description:
            "Stay ahead of the future of cyber defense by learning how Artificial Intelligence is transforming modern Security Operations Centers. Develop skills that will help you remain relevant, valuable, and future-ready as SOC environments become increasingly automated and intelligence-driven.",
        image: buildingFutureImage,
    },
    {
        id: 6,
        slug: "digital-intelligence-collection-analysis-osint-webint",
        title: "Digital Intelligence Collection & Analysis (OSINT/WEBINT)",
        duration: "30 Hours",
        date: "TBA",
        language: "English",
        originalPrice: 24999,
        launchPrice: 16999,
        currency: "INR",
        phase: 2,
        launchNote: "Phase 2 Program – Launch Date to Be Announced",
        description:
            "Enhance your investigative, analytical, and intelligence-gathering capabilities through structured intelligence collection and analysis. Develop highly transferable skills valued across Cybersecurity, Threat Intelligence, Fraud Investigations, Risk Management, and Corporate Intelligence functions.",
        image: whoOurTraining,
    },
];
