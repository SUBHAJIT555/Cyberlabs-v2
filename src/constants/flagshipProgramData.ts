export type FlagshipProgramCard = {
    id: number;
    slug: string;
    title: string;
    duration: string;
    category: string;
    description: string;
    price: number;
    currency: string;
};

export const flagshipProgramCards: FlagshipProgramCard[] = [
    {
        id: 1,
        slug: "master-the-modern-underworld-cybercrime-dark-web-and-crypto-investigations",
        title: "Master the Modern Underworld",
        duration: "145 Hours",
        category: "Cybercrime Investigation",
        description:
            "Develop advanced expertise in Cybercrime Investigations, Dark Web Intelligence, Threat Actor Analysis, and Cryptocurrency Investigations. Designed for professionals seeking specialized careers in Cyber Threat Intelligence, Digital Investigations, Fraud Analysis, and Financial Intelligence Operations.",
        price: 49999,
        currency: "INR",
    },
    {
        id: 2,
        slug: "defend-digital-platforms-at-scale-platform-identity-and-abuse-defense-engineering",
        title: "Defend Digital Platforms at Scale",
        duration: "145 Hours",
        category: "Platform Security & Trust",
        description:
            "Learn how global organizations protect users, platforms, and digital ecosystems from Identity Abuse, Fraud, Platform Manipulation, and Trust & Safety Threats. Build highly specialized skills increasingly sought by Technology Companies, FinTech Firms, and Digital Platforms Worldwide.",
        price: 49999,
        currency: "INR",
    },
    {
        id: 3,
        slug: "build-complete-cyber-capability-full-stack-cyber-defense-and-offensive-security",
        title: "From Foundations to Operations",
        duration: "450 Hours",
        category: "Full-Stack Cybersecurity",
        description:
            "Build complete cybersecurity capability through an immersive learning journey covering Cyber Defense, Threat Detection, Incident Response, Digital Forensics, and Security Operations. Develop the knowledge, skills, and operational mindset required to launch and grow a successful career in cybersecurity.",
        price: 99999,
        currency: "INR",
    },
];
