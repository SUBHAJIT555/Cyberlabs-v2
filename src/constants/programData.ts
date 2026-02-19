import type { Course } from "@/interface/program";
// Import images

import CybercrimeDarkWebImage from "@/assets/img/ProgramImage/CybercrimeDarkWebAndFinancialIntelligenceOperations.webp";
import PlatformIdentityAndAbuseDefenseEngineeringImage from "@/assets/img/ProgramImage/PlatformIdentityAndAbuseDefenseEngineering.webp";
import FullStackCyberDefenseAndOffensiveSecurityImage from "@/assets/img/ProgramImage/FullStackCyberDefenseAndOffensiveSecurity.webp";

// icons import
import {
  TbCompass,
  TbShieldLock,
  TbBrandPython,
  TbUserShield,
  TbCurrencyBitcoin,
  TbSword,
  TbRosetteDiscountCheck,
  TbTopologyStar,
  TbAlertTriangle,
  TbChartArrows,
  TbDeviceMobileExclamation,
  TbBracketsContain,
  TbRobot,
  TbWorldSearch,
  TbShieldCheck,
  TbTrophy,
  TbTopologyRing,
  TbEyeOff,
  TbFingerprint,
  TbMapSearch,
  TbListSearch,
} from "react-icons/tb";

export const courses: Course[] = [
  // Cybercrime, Dark Web & Financial Intelligence Operations - 1
  {
    id: 1,
    slug: "master-the-modern-underworld-cybercrime-dark-web-and-crypto-investigations",
    title:
      "Master the Modern Underworld: Cybercrime, Dark Web & Crypto Investigations",
    subheading: "Master The Modern Underworld",
    category: "Cybercrime Investigation",
    language: "English",
    instructor: "Cybercrime Investigation Expert",
    duration: "145 Hours",
    image: CybercrimeDarkWebImage,
    originalPrice: 3500,
    currentPrice: 2500,
    discount: 29,

    // program hero section data
    hero: {
      title: "Cybercrime, Dark Web & Financial Intelligence Operations",
      tags: [
        { text: "Cybercrime Investigation" },
        { text: "Dark Web Analysis" },
        { text: "Financial Intelligence" },
        { text: "10 Modules" },
        { text: "145 Hours" },
        { text: "Fully Remote" },
        { text: "Investigation Driven" },
        { text: "Capstone Project" },
      ],
      pricing: {
        currentPrice: "2500",
        originalPrice: "3500",
        currency: "$",
        taxNote: "",
        discountText: "Flat 29% OFF on Launch Offer",
        image: CybercrimeDarkWebImage,
      },
      buttons: [
        { text: "Enroll Now", variant: "primary" },
        { text: "Download Syllabus", variant: "secondary" },
      ],
      enrollmentMessage: {
        text: "Limited Time Offer -",
        highlightedText: "Launch Price!",
      },
      image: {
        src: CybercrimeDarkWebImage,
        alt: "Cybercrime, Dark Web & Financial Intelligence Operations",
      },
      details: [
        { label: "Language", value: "English" },
        { label: "Certificate", value: "YES" },
        { label: "Schedule", value: "Flexible" },
        { label: "Duration", value: "145 Hours" },
      ],
    },

    // program description data
    programTagLine:
      "Move Beyond Tools. Master the Mindset of a Digital Investigator.",
    description:
      "Most cybersecurity programs stop at prevention-firewalls, alerts, and controls. This 145-hour advanced investigation program is for people who want to understand what happens after the breach. Delivered under the global training framework of CYBERLABS USA, it trains you to operate inside the real business of cybercrime-from dark web marketplaces and scam ecosystems to cryptocurrency laundering, attribution, and intelligence reporting. This is not a hacking course; it is a professional cybercrime investigation program built for the modern digital threat landscape.",
    descriptionParagraphs: [
      "Most cybersecurity programs stop at prevention-firewalls, alerts, and controls. This **145-hour advanced investigation program** is designed for those who want to understand **what happens after the breach.**",
      "Delivered under the global training framework of **CYBERLABS USA**, this program trains you to operate inside the **real business of cybercrime**-from dark web marketplaces and scam ecosystems to cryptocurrency laundering, attribution, and intelligence reporting.",
      "This is not a hacking course. It is a **professional cybercrime investigation program** built for the modern digital threat landscape.",
    ],
    certifications: [
      "Cybercrime Investigation",
      "Financial Intelligence",
      "OSINT",
    ],
    idealFor:
      "Entry-level (0–3 years) cybersecurity professionals, but designed to progress quickly into real-world, operational thinking",
    whatYouLearn: [
      "Advanced OSINT - Finding intelligence that does not appear on Google.",
      "Blockchain Analysis - Visualizing and tracing illicit crypto flows in real time.",
      "Cybercrime Psychology - Understanding how and why criminals behave the way they do.",
      "Attribution Methodology - Separating correlation from proof.",
      "Legal & Evidence Handling - Ensuring investigations stand up to legal scrutiny.",
    ],

    // Program Module Chart data
    moduleChart: [
      {
        module: "Module 1",
        focusArea: "Cybercrime Ecosystems",
        whatYouLearn:
          "How modern cybercrime operates as an industry, including roles, monetization models, and criminal supply chains.",
      },
      {
        module: "Module 2",
        focusArea: "Dark Web Architecture & Markets",
        whatYouLearn:
          "TOR fundamentals, underground marketplaces, forums, OPSEC practices, and criminal behavior analysis.",
      },
      {
        module: "Module 3",
        focusArea: "Digital Identity & Attribution",
        whatYouLearn:
          "Linking aliases, personas, and digital footprints across platforms using intelligence correlation.",
      },
      {
        module: "Module 4",
        focusArea: "Cryptocurrency Fundamentals",
        whatYouLearn:
          "Blockchain mechanics, wallets, transactions, privacy models, and tracing concepts.",
      },
      {
        module: "Module 5",
        focusArea: "Crypto Forensics I",
        whatYouLearn:
          "Wallet analysis, transaction flows, clustering, and fund movement tracking.",
      },
      {
        module: "Module 6",
        focusArea: "Crypto Forensics II",
        whatYouLearn:
          "Scam analysis, rug pulls, DeFi abuse, and laundering techniques.",
      },
      {
        module: "Module 7",
        focusArea: "Financial Intelligence & AML",
        whatYouLearn:
          "Illicit finance patterns, compliance considerations, and financial crime workflows.",
      },
      {
        module: "Module 8",
        focusArea: "Investigation Methodology",
        whatYouLearn:
          "Structuring end-to-end cyber investigations and intelligence reporting.",
      },
      {
        module: "Module 9",
        focusArea: "Legal & Evidence Handling",
        whatYouLearn:
          "Evidence integrity, documentation, and investigation-grade reporting.",
      },
      {
        module: "Final Assessment",
        focusArea: "Capstone Investigation",
        whatYouLearn:
          "Full-scope cybercrime investigation with professional intelligence output.",
      },
    ],

    // why this program different data
    whatsNew: {
      heading: {
        title: "Why This Program Stands Apart in the Indian Market",
        subtitle: "Investigation & Intelligence",
        highlightedText: "Driven Learning",
      },
      differenceLabel: "The Difference",
      cards: [
        {
          title: "CYBERLABS INDIA",
          price: "$ 2,500",
          titleColor: "text-blue-600",
          priceColor: "text-blue-600",
          features: [
            {
              title: "Investigation Over Exploitation",
              text: "Most Indian courses teach how to break in. This program teaches how to **find who broke in**-a rarer and higher-value skill.",
            },
            {
              title: "Closing the Crypto Investigation Gap",
              text: "India has one of the world's highest crypto adoption and fraud rates, yet very few programs teach blockchain forensics at depth.",
            },
            {
              title: "Simulation-Driven, Remote-First Labs",
              text: "Training mirrors how global investigation teams actually work-distributed, remote, and evidence-driven.",
            },
            {
              title: "Evidence & Legal Focus",
              text: "",
            },
            {
              title: "",
              text: "Many investigations fail due to poor evidence handling. This program trains you to meet Indian IT Act requirements and global legal standards.",
            },
          ],
          careerPreparation: {
            title: "What You Learn",
            items: [
              "Advanced OSINT - Finding intelligence that does not appear on Google.",
              "Blockchain Analysis - Visualizing and tracing illicit crypto flows in real time.",
              "Cybercrime Psychology - Understanding how and why criminals behave the way they do.",
              "Attribution Methodology - Separating correlation from proof.",
              "Legal & Evidence Handling - Ensuring investigations stand up to legal scrutiny.",
            ],
          },
        },
      ],
    },
    syllabusLink: "",

    // layman story data
    laymanExplanation: {
      heading: 'The Layman’s Explanation - The "Digital Detective" Story',
      lines: [
        "Imagine a bank robbery.",
        "Traditional cybersecurity is the guard at the door - trying to stop the thief from getting in.",
        "This program trains you to be the lead detective.",
        "If the thief gets inside and steals the money, your job begins.",
        "You learn how to follow the digital breadcrumbs they leave behind. If they hide behind anonymity (the Dark Web), you learn how to see through it.",
        "If they move the money into cryptocurrency, you learn how to follow the money trail across blockchains.",
        "You’re not just protecting systems. You’re solving crimes and removing hiding places.",
      ],
    },

    // program teaches data
    programTeaches: {
      whatYouLearn: [
        "Advanced OSINT – Finding intelligence that does not appear on Google",
        "Blockchain Analysis – Visualizing and tracing illicit crypto flows in real time",
        "Cybercrime Psychology – Understanding how and why criminals behave the way they do",
        "Attribution Methodology – Separating correlation from proof",
        "Legal & Evidence Handling – Ensuring investigations stand up to legal scrutiny",
      ],
      readinessIntro:
        "By the time you complete the final integrated investigation, you are deployment-ready.",
      readinessSubheading: "You will be able to:",
      readinessPoints: [
        "Take a raw cyber incident and trace it back to a specific threat actor or ecosystem",
        "Produce executive-level intelligence reports for enterprises or law-enforcement teams",
        "Act as a subject-matter expert (SME) on cryptocurrency fraud and cybercrime cases",
      ],
      closingStatement:
        'You are not trained for "entry-level observation." You are trained to contribute from day one.',
    },

    // New Component data
    programDeepDive: {
      title: "Deep Dive: Point-by-Point Program Breakdown",
      subtitle: "145 Total Academic Hours - A True Investigation Residency",
      paragraphs: [
        "This is not a short certification or overview course. The program is structured as a **deep-dive investigation residency**, where each module is designed to ensure **mastery, not surface familiarity**.",
        "You spend meaningful time inside each investigative domain, working through realistic scenarios, evidence, and intelligence workflows.",
      ],
    },

    // Program Module Discussion data
    syllabus: [
      {
        id: 1,
        title: "Cybercrime Ecosystems & Markets",
        icon: TbTopologyRing,
        content: [
          {
            paragraphs: [
              "You don’t just study malware or scams in isolation. You map the entire **cybercrime supply chain**-from data theft and access brokers to monetization, laundering, and cash-out actors.",
              "You learn how cybercrime functions as a **business**, not just a technical act.",
            ],
          },
        ],
      },
      {
        id: 2,
        title: "Dark Web Lab",
        icon: TbEyeOff,
        content: [
          {
            paragraphs: [
              "You are guided through **controlled, safe access to TOR environments**, where you analyze:",
            ],
            points: [
              "Criminal forums and marketplaces",
              "Reputation systems and trust signals",
              "OPSEC behaviors and mistakes",
              "Law enforcement takedown patterns",
            ],
          },
          {
            paragraphs: [
              "This module focuses on **behavioral analysis**, not browsing curiosity.",
            ],
          },
        ],
      },
      {
        id: 3,
        title: "Crypto Forensics (4 Dedicated Modules)",
        icon: TbCurrencyBitcoin,
        content: [
          {
            paragraphs: [
              "A major focus of the program is the **money trail**.",
              "You move from:",
            ],
            points: [
              "Basic wallet tracing",
              "Scam and rug-pull investigations",
              "Token fraud and fake projects",
              "To advanced laundering techniques involving mixers, chain hopping, and DeFi abuse",
            ],
          },
          {
            paragraphs: [
              "You learn how criminals **move, hide, and clean money**-and how investigators follow it.",
            ],
          },
        ],
      },
      {
        id: 4,
        title: "The Attribution Engine",
        icon: TbFingerprint,
        content: [
          {
            paragraphs: [
              "Attribution is the hardest part of cyber investigations.",
              'This module teaches the "holy grail" of cybercrime work:',
            ],
          },
          {
            paragraphs: [
              "**Connecting a digital alias to a real-world actor**",
            ],
          },
          {
            paragraphs: ["You learn intelligence correlation across:"],
            points: [
              "Forums",
              "Wallets",
              "Infrastructure",
              "Behavioral fingerprints",
            ],
          },
          {
            paragraphs: [
              "This is where investigators separate speculation from evidence.",
            ],
          },
        ],
      },
      {
        id: 5,
        title: "Architecture & Investigation Strategy",
        icon: TbMapSearch,
        content: [
          {
            paragraphs: [
              "Rather than teaching you which buttons to click, the program trains you to:",
            ],
            points: [
              "Design an investigation from scratch",
              "Decide what evidence matters",
              "Build hypotheses and test them",
              "Avoid false attribution",
            ],
          },
          {
            paragraphs: [
              "You learn **how to think like an investigator**, **not a tool operator**.",
            ],
          },
        ],
      },
      {
        id: 6,
        title: "Deliverable-Focused Learning",
        icon: TbTrophy,
        content: [
          {
            paragraphs: [
              "Every module ends with a **professional student output**, such as:",
            ],
            points: [
              "Ecosystem maps",
              "Intelligence reports",
              "Transaction tracing dossiers",
              "Attribution assessments",
            ],
          },
          {
            paragraphs: [
              "By the end of the program, you have a **portfolio of real investigative work**, **not just a certificate**.",
            ],
          },
        ],
      },
    ],

    // Career opportunities chart data
    careerChart: [
      {
        jobRole: "Crypto Forensic Analyst",
        whatYouDo: "Investigate rug pulls, fake tokens, and stolen crypto.",
        exampleEmployers: "Chainalysis, Binance, WazirX, CoinDCX",
      },
      {
        jobRole: "Threat Intelligence Lead",
        whatYouDo: "Monitor dark web threats and criminal activity.",
        exampleEmployers: "Google, TCS, CrowdStrike, Recorded Future",
      },
      {
        jobRole: "Cybercrime Investigator",
        whatYouDo: "Support legal and compliance investigations.",
        exampleEmployers: "Deloitte, EY, KPMG, PwC",
      },
      {
        jobRole: "Digital Forensics Specialist",
        whatYouDo: "Collect and analyze admissible evidence.",
        exampleEmployers: "I4C (India), CBI, Enterprise IR teams",
      },
      {
        jobRole: "AML / Compliance Analyst",
        whatYouDo: "Prevent laundering through financial systems.",
        exampleEmployers: "HSBC, Standard Chartered, JPMorgan",
      },
    ],
  },

  // Platform, Identity & Abuse Defense Engineering - 2
  {
    id: 2,
    slug: "defend-digital-platforms-at-scale-platform-identity-and-abuse-defense-engineering",
    title:
      "Defend Digital Platforms at Scale: Platform, Identity & Abuse Defense Engineering",
    subheading: "Defend Digital Platforms at Scale",
    category: "Platform Security & Trust & Safety",
    language: "English",
    instructor: "Platform Security Expert",
    duration: "145 Hours",
    image: PlatformIdentityAndAbuseDefenseEngineeringImage,
    originalPrice: 3500,
    currentPrice: 2500,
    discount: 29,

    // program hero section data
    hero: {
      title: "Platform, Identity & Abuse Defense Engineering",
      subheading: "Defend Digital Platforms at Scale",
      tags: [
        { text: "Platform Security" },
        { text: "Trust & Safety" },
        { text: "Abuse Defense" },
        { text: "10 Modules" },
        { text: "145 Hours" },
        { text: "SaaS & Mobile" },
        { text: "Investigation Driven" },
        { text: "Capstone Project" },
      ],
      pricing: {
        currentPrice: "2500",
        originalPrice: "3500",
        currency: "$",
        taxNote: "",
        discountText: "Flat 29% OFF on Launch Offer",
        image: PlatformIdentityAndAbuseDefenseEngineeringImage,
      },
      buttons: [
        { text: "Enroll Now", variant: "primary" },
        { text: "Download Syllabus", variant: "secondary" },
      ],
      enrollmentMessage: {
        text: "Limited Time Offer -",
        highlightedText: "Launch Price!",
      },
      image: {
        src: PlatformIdentityAndAbuseDefenseEngineeringImage,
        alt: "Platform, Identity & Abuse Defense Engineering",
      },
      details: [
        { label: "Language", value: "English" },
        { label: "Certificate", value: "YES" },
        { label: "Schedule", value: "Flexible" },
        { label: "Duration", value: "145 Hours" },
      ],
    },

    // program description data
    programTagLine:
      "Go Beyond Hacking. Learn How Real Platforms Fail - and How They Are Defended.",
    description:
      'Most cybersecurity courses teach you how to exploit vulnerabilities. Very few teach you how large digital platforms actually break in the real world. This 145-hour advanced program, delivered under the global training framework of CYBERLABS USA, is built for professionals who want to operate at the intersection of platform security, identity systems, abuse prevention, and Trust & Safety engineering. You will not learn how to "hack apps"-you will learn how attackers abuse features, identities, APIs, and business logic at scale, and how real companies detect, prevent, and enforce against that abuse.',
    descriptionParagraphs: [
      "Most cybersecurity courses teach you how to exploit vulnerabilities. Very few teach you how **large digital platforms actually break in the real world.**",
      "This **145-hour advanced program**, delivered under the global training framework of **CYBERLABS USA**, is built for those who want to operate at the intersection of **platform security, identity systems, abuse prevention, and Trust & Safety engineering.**",
      'You will not learn how to "hack apps." You will learn how **attackers abuse features, identities, APIs, and business logic at scale**-and how real companies detect, prevent, and enforce against that abuse.',
    ],
    certifications: [
      "Platform Defense",
      "Trust & Safety Engineering",
      "Abuse Investigation",
    ],
    idealFor:
      "Security engineers, Trust & Safety practitioners, fraud and abuse analysts, and product/security engineers working on SaaS, marketplace, and fintech platforms",
    whatYouLearn: [
      "Platform architecture and trust modeling",
      "Identity and authentication abuse analysis",
      "Feature abuse and attacker economics",
      "API and business logic abuse",
      "Scam and automation detection",
      "Trust & Safety enforcement strategy",
      "Investigation-driven decision-making",
      "Platform Security & Trust Engineering roles at global tech companies.",
      "Specialist in identity, abuse, and fraud defenses for SaaS and fintech.",
      "Prepared for advanced interviews in product security and Trust & Safety.",
    ],

    // Program Module Chart data
    moduleChart: [
      {
        module: "Module 1",
        focusArea: "Platform Architecture",
        whatYouLearn:
          "SaaS, mobile, and cloud platform design, data flows, and trust boundaries.",
      },
      {
        module: "Module 2",
        focusArea: "Security Failure Modes",
        whatYouLearn:
          "Why secure designs fail in production and how assumptions break at scale.",
      },
      {
        module: "Module 3",
        focusArea: "Identity & Authentication Systems",
        whatYouLearn:
          "Sessions, tokens, OAuth flows, account recovery, and common identity abuse paths.",
      },
      {
        module: "Module 4",
        focusArea: "Feature & Business Logic Abuse",
        whatYouLearn:
          "The difference between exploitation and abuse, attacker ROI, and how legitimate features are misused.",
      },
      {
        module: "Module 5",
        focusArea: "Mobile Application Abuse",
        whatYouLearn:
          "Client-side trust issues, permission abuse, and mobile-specific threat vectors.",
      },
      {
        module: "Module 6",
        focusArea: "API & Backend Abuse",
        whatYouLearn:
          "Authorization failures, logic flaws, and large-scale abuse of backend and API surfaces.",
      },
      {
        module: "Module 7",
        focusArea: "Automation, Bots & Scam Ops",
        whatYouLearn:
          "Fraud automation, fake accounts, scam funnels, and detection of abuse at scale.",
      },
      {
        module: "Module 8",
        focusArea: "OSINT & Intelligence Correlation",
        whatYouLearn:
          "Cross-platform identity analysis and confidence-based attribution without over-claiming.",
      },
      {
        module: "Module 9",
        focusArea: "Detection & Enforcement Engineering",
        whatYouLearn:
          "Designing detection signals, thresholds, and Trust & Safety enforcement workflows.",
      },
      {
        module: "Final Assessment",
        focusArea: "Platform Abuse Investigation",
        whatYouLearn:
          "End-to-end analysis of a platform abuse case and design of a realistic defense strategy.",
      },
    ],

    // why this program is different
    whatsNew: {
      heading: {
        title: "Why This Program Stands Apart in the Indian Market",
        subtitle: "Platform & Trust",
        highlightedText: "Defense First",
      },
      differenceLabel: "The Difference",
      cards: [
        {
          title: "Our Program",
          price: "$ 2,500",
          titleColor: "text-blue-600",
          priceColor: "text-blue-600",
          features: [
            {
              title: "Abuse > Exploits",
              text: "Indian courses focus on hacking. Global platforms hire for abuse defense and Trust & Safety.",
            },
            {
              title: "Built for SaaS & Mobile Reality",
              text: "India is a SaaS and fintech hub-this program matches that reality.",
            },
            {
              title: "Architecture-First Thinking",
              text: "You learn why systems fail, not just how to test them.",
            },
            {
              title: "Investigation-Driven, Not Tool-Driven",
              text: "Tools change. Thinking doesn't.",
            },
            {
              title: "Direct Alignment with Global Platform Roles",
              text: "This is how Google, Meta, Stripe, and Uber actually defend platforms.",
            },
          ],
          careerPreparation: {
            title: "What You Learn",
            items: [
              "Platform architecture and trust modeling",
              "Identity and authentication abuse analysis",
              "Feature abuse and attacker economics",
              "API and business logic abuse",
              "Scam and automation detection",
              "Trust & Safety enforcement strategy",
              "Investigation-driven decision-making",
              "Platform Security & Trust Engineering roles at global tech companies.",
              "Specialist in identity, abuse, and fraud defenses for SaaS and fintech.",
              "Prepared for advanced interviews in product security and Trust & Safety.",
            ],
          },
        },
      ],
    },
    syllabusLink: "",

    // layman story data
    laymanExplanation: {
      heading: "The Layman’s Explanation - The “Platform Guardian” Story",
      lines: [
        "Imagine a large online platform-payments, rides, social media, or e-commerce.",
        "Traditional security tries to keep hackers out.",
        "This program trains you to protect the platform after users are already inside.",
        "You learn how:",
        "• Fake users bypass onboarding",
        "• Scammers abuse features",
        "• Bots scale fraud",
        "• Identity systems are manipulated",
        "Your job is not to stop one attacker. Your job is to protect the entire ecosystem at scale.",
        "You become the guardian of trust.",
      ],
    },

    // program teaches data
    programTeaches: {
      whatYouLearn: [
        "Platform architecture and trust modeling",
        "Identity and authentication abuse analysis",
        "Feature abuse and attacker economics",
        "API and business logic abuse",
        "Scam and automation detection",
        "Trust & Safety enforcement strategy",
        "Investigation-driven decision-making",
      ],
      readinessIntro:
        "By the end of the capstone, you are platform-defense ready.",
      readinessSubheading: "You will be able to:",
      readinessPoints: [
        "Analyze why a real-world SaaS or mobile platform is being abused",
        "Identify identity, API, or logic failure points",
        "Design detection and enforcement strategies used by global platforms",
        "Operate effectively in Platform Security or Trust & Safety teams",
      ],
      closingStatement:
        "This is not junior-level knowledge. This is production-relevant capability",
    },

    // New Component data
    programDeepDive: {
      title: "Deep Dive: Point-by-Point Program Breakdown",
      subtitle: "145 Total Academic Hours - Platform Defense Residency",
      paragraphs: [
        "This is not a bug bounty or penetration testing course.",
        "It is a **deep**, **investigation-driven residency** designed to teach how modern SaaS platforms, mobile apps, and APIs fail under real-world conditions-and how defenders respond.",
        "Each module focuses on **architecture, assumptions, abuse paths, and enforcement logic**, not tools.",
      ],
    },

    // Program Module Discussion data
    syllabus: [
      {
        id: 1,
        title: "Platform Architecture & Trust Boundaries",
        icon: TbTopologyStar,
        content: [
          {
            paragraphs: [
              "You begin by learning how modern platforms are designed.",
              "You analyze:",
            ],
            points: [
              "Mobile and SaaS architectures",
              "Data flows and trust boundaries",
              "Implicit assumptions developers make",
              "Where trust breaks down in production",
            ],
          },
          {
            paragraphs: [
              "You learn to **see platforms the way attackers do.**",
            ],
          },
        ],
      },
      {
        id: 2,
        title: "Security Failure Modes",
        icon: TbAlertTriangle,
        content: [
          {
            paragraphs: [
              'Secure designs fail-not because they are "bad," but because assumptions don\'t hold at scale.',
              "This module teaches you how to:",
            ],
            points: [
              "Identify flawed assumptions",
              "Analyze why security controls fail in production",
              "Break down real-world platform incidents",
            ],
          },
          {
            paragraphs: [
              'You learn why "secure on paper" often means "broken in reality."',
            ],
          },
        ],
      },
      {
        id: 3,
        title: "Identity & Authentication Abuse",
        icon: TbUserShield,
        content: [
          {
            paragraphs: [
              "Identity is the most abused layer in modern platforms.",
            ],
            points: [
              "OAuth flows, tokens, and sessions",
              "Account recovery and takeover abuse",
              "Session lifecycle manipulation",
            ],
          },
          {
            paragraphs: [
              "This module builds a **deep understanding of identity abuse**, not just authentication theory.",
            ],
          },
        ],
      },
      {
        id: 4,
        title: "Abuse vs Hacking - The Critical Shift",
        icon: TbChartArrows,
        content: [
          {
            paragraphs: [
              "Most real-world attacks are **feature abuse**, not exploits.",
              "You learn to differentiate:",
            ],
            points: [
              "Exploitation vs abuse",
              "Attacker economics and ROI",
              "Why abuse scales better than hacking",
            ],
          },
          {
            paragraphs: [
              "This mindset shift is essential for **Trust & Safety and platform security roles.**",
            ],
          },
        ],
      },
      {
        id: 5,
        title: "Mobile App Abuse",
        icon: TbDeviceMobileExclamation,
        content: [
          {
            paragraphs: [
              "Mobile ecosystems introduce unique risks.",
              "You investigate:",
            ],
            points: [
              "Client-side trust assumptions",
              "Permission misuse",
              "Business logic abuse on mobile platforms",
            ],
          },
          {
            paragraphs: [
              "This module explains why mobile apps are a primary abuse surface in 2026.",
            ],
          },
        ],
      },
      {
        id: 6,
        title: "API & Backend Abuse",
        icon: TbBracketsContain,
        content: [
          {
            paragraphs: [
              "APIs are the backbone-and the weakest link-of modern platforms.",
              "You learn to analyze:",
            ],
            points: [
              "Authorization flaws",
              "Business logic abuse",
              "Privilege escalation through APIs",
            ],
          },
          {
            paragraphs: [
              "The focus is on **logic and trust**, not scanner output.",
            ],
          },
        ],
      },
      {
        id: 7,
        title: "Scams, Automation & Abuse at Scale",
        icon: TbRobot,
        content: [
          {
            paragraphs: ["Modern abuse is automated.", "This module covers:"],
            points: [
              "Bot-driven abuse",
              "Fake users and scam funnels",
              "Scaling attacks across platforms",
            ],
          },
          {
            paragraphs: [
              "You model how **abuse operations grow**, and how defenders disrupt them.",
            ],
          },
        ],
      },
      {
        id: 8,
        title: "OSINT & Intelligence Correlation",
        icon: TbWorldSearch,
        content: [
          {
            paragraphs: ["Abuse rarely exists in isolation.", "You learn to:"],
            points: [
              "Correlate identities across platforms",
              "Assign confidence to intelligence",
              "Avoid false attribution",
            ],
          },
          {
            paragraphs: [
              "This builds **investigation-grade analytical discipline**.",
            ],
          },
        ],
      },
      {
        id: 9,
        title: "Detection & Enforcement Engineering",
        icon: TbShieldCheck,
        content: [
          {
            paragraphs: ["Prevention alone is not enough.", "You design:"],
            points: [
              "Detection signals",
              "Enforcement strategies",
              "Trust & Safety workflows",
            ],
          },
          {
            paragraphs: [
              "This module mirrors how **real platform security teams operate**.",
            ],
          },
        ],
      },
      {
        id: 10,
        title: "Capstone: End-to-End Platform Abuse Investigation",
        icon: TbTrophy,
        content: [
          {
            paragraphs: [
              "The program concludes with a **full-scale platform abuse investigation**, where you:",
            ],
            points: [
              "Analyze architecture",
              "Identify abuse paths",
              "Correlate intelligence",
              "Propose detection and enforcement",
            ],
          },
          {
            paragraphs: [
              "You finish with a **professional investigation report and presentation**.",
            ],
          },
        ],
      },
    ],

    // Career opportunities chart data
    careerChart: [
      {
        jobRole: "Platform Security Engineer",
        whatYouDo:
          "Design and defend SaaS and cloud platforms against abuse and misuse.",
        exampleEmployers: "Google, Meta, Amazon",
      },
      {
        jobRole: "Trust & Safety Analyst",
        whatYouDo:
          "Detect, investigate, and prevent user and content abuse at scale.",
        exampleEmployers: "Uber, Airbnb, Stripe",
      },
      {
        jobRole: "Identity Security Engineer",
        whatYouDo:
          "Secure authentication, authorization, and account lifecycle flows.",
        exampleEmployers: "Microsoft, Okta",
      },
      {
        jobRole: "Abuse Prevention Specialist",
        whatYouDo:
          "Design and operate controls that stop fraud, scams, and automation.",
        exampleEmployers: "Paytm, PhonePe, Razorpay",
      },
      {
        jobRole: "Product Security Analyst",
        whatYouDo:
          "Secure product features and business logic for modern SaaS and fintech firms.",
        exampleEmployers: "Leading fintech & SaaS companies",
      },
    ],
  },

  // Full-Stack Cyber Defense & Offensive Security - 3
  {
    id: 3,
    slug: "build-complete-cyber-capability-full-stack-cyber-defense-and-offensive-security",
    title:
      "Build Complete Cyber Capability: Full-Stack Cyber Defense & Offensive Security",
    subheading: "Build Complete Cyber Capability",
    category: "Full-Stack Cybersecurity",
    language: "English",
    instructor: "Cyber Operations Expert",
    duration: "430 Hours",
    image: FullStackCyberDefenseAndOffensiveSecurityImage,
    originalPrice: 3500,
    currentPrice: 2500,
    discount: 29,

    // program hero section data
    hero: {
      title: "Full-Stack Cyber Defense & Offensive Security",
      subheading: "Build Complete Cyber Capability",
      tags: [
        { text: "Full-Stack Cybersecurity" },
        { text: "Offensive & Defensive" },
        { text: "Cyber Operations" },
        { text: "430 Hours" },
        { text: "Multi-Phase Program" },
        { text: "Hands-on Labs" },
        { text: "Beginner to Advanced" },
        { text: "Capstone Project" },
      ],
      pricing: {
        currentPrice: "2500",
        originalPrice: "3500",
        currency: "$",
        taxNote: "",
        discountText: "Flat 29% OFF on Launch Offer",
        image: FullStackCyberDefenseAndOffensiveSecurityImage,
      },
      buttons: [
        { text: "Enroll Now", variant: "primary" },
        { text: "Download Syllabus", variant: "secondary" },
      ],
      enrollmentMessage: {
        text: "Limited Time Offer -",
        highlightedText: "Launch Price!",
      },
      image: {
        src: FullStackCyberDefenseAndOffensiveSecurityImage,
        alt: "Full-Stack Cyber Defense & Offensive Security",
      },
      details: [
        { label: "Language", value: "English" },
        { label: "Certificate", value: "YES" },
        { label: "Schedule", value: "Flexible" },
        { label: "Duration", value: "430 Hours" },
      ],
    },

    // program description data
    programTagLine:
      "Learn How Attacks Really Happen - and How Real Defenders Stop Them.",
    description:
      "Cybersecurity is not a single skill; it is a stack of disciplines-systems, networks, applications, identity, automation, offense, defense, and investigation. This 430-hour immersive program, delivered under the global training framework of CYBERLABS USA, takes learners from foundational digital literacy to advanced cyber operations, covering both offensive security and defensive response in a single, structured journey. This is not a crash course; it is a full-stack cybersecurity residency built for those who want real, long-term careers in cyber defense, red teaming, and security operations.",
    descriptionParagraphs: [
      "Cybersecurity is not a single skill. It is a **stack of disciplines**-systems, networks, applications, identity, automation, offense, defense, and investigation.",
      "This **430-hour immersive program**, delivered under the global training framework of **CYBERLABS USA**, is designed to take learners from **foundational digital literacy to advanced cyber operations**, covering both **offensive security** and **defensive response** in a single, structured journey.",
      "This is not a crash course. It is a **full-stack cybersecurity residency** built for those who want real, long-term careers in cyber defense, red teaming, and security operations.",
    ],
    certifications: [
      "Full-Stack Cyber Defense",
      "Offensive Security",
      "Cyber Operations",
    ],
    idealFor:
      "Beginners and early-career professionals who want an end-to-end path into cyber defense, red teaming, and security operations, as well as IT professionals transitioning into cybersecurity.",
    whatYouLearn: [
      "Core systems, networking, and security fundamentals",
      "Offensive security and adversary techniques",
      "Defensive architecture and mitigation strategies",
      "Automation and scripting for cyber operations",
      "Investigation, OSINT, and crypto analysis",
      "Professional reporting and operational discipline",
      "Readiness for SOC, red team, and security analyst roles.",
      "Foundation to specialize into platform security or investigations.",
      "Portfolio of capstone and lab work for real-world interviews.",
    ],

    // Program Module Chart data
    moduleChart: [
      {
        module: "Week 1",
        focusArea: "Course Orientation, Digital Literacy",
        hours: "10 hours",
        whatYouLearn:
          "Cybersecurity intro, practical course setup, goals, ethics, learning plan",
      },
      {
        module: "Week 2",
        focusArea: "Core Computing & OS Fundamentals",
        hours: "10 hours",
        whatYouLearn:
          "Windows/Linux basics, files/folders, permissions, installations, VMs",
      },
      {
        module: "Week 3",
        focusArea: "Core Computing & OS Fundamentals",
        hours: "10 hours",
        whatYouLearn:
          "Bash, CLI skills, user management, OS commands, troubleshooting",
      },
      {
        module: "Week 4",
        focusArea: "Core Computing & OS Fundamentals",
        hours: "10 hours",
        whatYouLearn:
          "System tools, file systems, virtualization, hands-on labs",
      },
      {
        module: "Week 5",
        focusArea: "Networking & Internet Essentials",
        hours: "10 hours",
        whatYouLearn:
          "Overview, OSI & TCP/IP, IP addressing, devices, networking basics",
      },
      {
        module: "Week 6",
        focusArea: "Networking & Internet Essentials",
        hours: "10 hours",
        whatYouLearn:
          "Protocols (ARP, DHCP, DNS, HTTP), Wireshark, live demonstrations",
      },
      {
        module: "Week 7",
        focusArea: "Networking & Internet Essentials",
        hours: "10 hours",
        whatYouLearn: "Routing, subnetting, firewalls, VPNs, troubleshooting",
      },
      {
        module: "Week 8",
        focusArea: "Networking & Internet Essentials",
        hours: "5 hours",
        whatYouLearn: "Advanced network labs, VLANs, defense scenarios",
      },
      {
        module: "Week 9",
        focusArea: "InfoSec Fundamentals",
        hours: "10 hours",
        whatYouLearn:
          "Security concepts, CIA triad, risk assessment, threat modeling",
      },
      {
        module: "Week 10",
        focusArea: "InfoSec Fundamentals",
        hours: "10 hours",
        whatYouLearn: "Authentication, passwords, security controls",
      },
      {
        module: "Week 11",
        focusArea: "InfoSec Fundamentals",
        hours: "10 hours",
        whatYouLearn: "Basic cryptography, real-world encryption, malware",
      },
      {
        module: "Week 12",
        focusArea: "InfoSec Fundamentals",
        hours: "5 hours",
        whatYouLearn:
          "Advanced auth, multi-factor, applied crypto/hashing tools",
      },
      {
        module: "Week 13",
        focusArea: "Python & Scripting for Beginners",
        hours: "10 hours",
        whatYouLearn: "Python syntax, data types, structures, scripting basics",
      },
      {
        module: "Week 14",
        focusArea: "Python & Scripting for Beginners",
        hours: "10 hours",
        whatYouLearn:
          "File I/O, libraries, automating tasks, cyber scripting project",
      },
      {
        module: "Week 15",
        focusArea: "Python & Scripting for Beginners",
        hours: "10 hours",
        whatYouLearn:
          "Socket programming, build tools (scanner, keylogger), practice labs",
      },
      {
        module: "Week 16-17",
        focusArea: "Social Media Security & Intelligence",
        hours: "20 hours",
        whatYouLearn:
          "OSINT, privacy, account protection, social engineering, investigations, impersonation, monitoring",
      },
      {
        module: "Week 18-19",
        focusArea: "Introduction to Ethical Hacking",
        hours: "20 hours",
        whatYouLearn:
          "Ethics vs. illegal hacking, responsible disclosure, methods, Kali toolkit, OWASP Top 10, threat mod.",
      },
      {
        module: "Week 20-21",
        focusArea: "Ethical Hacking Tools & Defense",
        hours: "20 hours",
        whatYouLearn:
          "Kali, Nmap, Metasploit, Burp Suite, configuring tools, firewalls, hardening, antivirus, response",
      },
      {
        module: "Week 22-25",
        focusArea: "Application Hacking: Manual/Automated",
        hours: "45 hours",
        whatYouLearn:
          "Web structures, HTML/JS/CSS, HTTP analysis, SQLi, XSS, CSRF, hands-on labs, CTF, secure coding",
      },
      {
        module: "Week 26-28",
        focusArea: "Mobile Hacking & Security",
        hours: "30 hours",
        whatYouLearn:
          "Android/iOS, threat landscape, reverse engineering, forensics, pentest labs, API security",
      },
      {
        module: "Week 29-32",
        focusArea: "Intermediate Pentesting & Exploitation",
        hours: "40 hours",
        whatYouLearn:
          "Scanning, enumeration, buffer overflows, exploitation, privesc, pivoting, reporting",
      },
      {
        module: "Week 33-35",
        focusArea: "Dark Web Analysis & Investigations",
        hours: "30 hours",
        whatYouLearn:
          "Tor, dark net, privacy, onion OSINT, tools, crypto tracing, legal, case studies, intel",
      },
      {
        module: "Week 36",
        focusArea: "OSINT Pipeline: Onion-to-Surface Mapping",
        hours: "10 hours",
        whatYouLearn:
          "Harvest usernames/data from onion forums, cross-reference with surface-web handles, report automation",
      },
      {
        module: "Week 37",
        focusArea: "Blockchain Analytics: Transaction Flow & Mixer Detection",
        hours: "10 hours",
        whatYouLearn:
          "Trace blockchain transactions, clustering wallets, mixing detection, analytic fraud report",
      },
      {
        module: "Week 38-42",
        focusArea: "Red Teaming & Advanced Topics",
        hours: "55 hours",
        whatYouLearn:
          "Adversary emulation, MITRE, cloud, containers, supply chain, hardware, fuzzing, AI/ML, CTF",
      },
      {
        module: "Week 43",
        focusArea: "Capstone Project/Professional Practice",
        hours: "10 hours",
        whatYouLearn:
          "Full-scope team/individual scenario, reporting, defense, oral exam, career skills, review",
      },
    ],

    // why this program is different
    whatsNew: {
      heading: {
        title: "Why This Program Stands Apart in the Indian Market",
        subtitle: "Full-Stack Cyber Capability",
        highlightedText: "Built for Real Operations",
      },
      differenceLabel: "The Difference",
      cards: [
        {
          title: "Our Program",
          price: "$ 2,500",
          titleColor: "text-blue-600",
          priceColor: "text-blue-600",
          features: [
            {
              title: "True Full-Stack Coverage",
              text: "Most programs teach fragments. This program builds complete cyber capability.",
            },
            {
              title: "Offense with Responsibility",
              text: "Attacks are taught to improve defense-not glorify hacking.",
            },
            {
              title: "Built for Beginners, Respected by Professionals",
              text: "The structure supports newcomers while remaining rigorous.",
            },
            {
              title: "Investigation & Evidence Awareness",
              text: "Learners understand legal, ethical, and operational boundaries.",
            },
            {
              title: "Aligned with Global Cyber Roles",
              text: "This mirrors how modern security teams are trained internationally.",
            },
          ],
          careerPreparation: {
            title: "What You Learn",
            items: [
              "Core systems, networking, and security fundamentals",
              "Offensive security and adversary techniques",
              "Defensive architecture and mitigation strategies",
              "Automation and scripting for cyber operations",
              "Investigation, OSINT, and crypto analysis",
              "Professional reporting and operational discipline",
              "Readiness for SOC, red team, and security analyst roles.",
              "Foundation to specialize into platform security or investigations.",
              "Portfolio of capstone and lab work for real-world interviews.",
            ],
          },
        },
      ],
    },
    syllabusLink: "",

    // layman story data
    laymanExplanation: {
      heading: "The Layman’s Explanation - The “Cyber Professional” Story",
      lines: [
        "Imagine cybersecurity as a battlefield.",
        "Some people only know how to attack.",
        "Some only know how to defend.",
        "This program trains you to understand the entire battlefield.",
        "You learn:",
        "• How attackers find weaknesses",
        "• How systems are supposed to protect themselves",
        "• Why defenses fail",
        "• How investigations uncover the truth",
        "You are not trained for one moment in an attack. You are trained for the entire lifecycle of cyber conflict.",
      ],
    },

    // program teaches data
    programTeaches: {
      whatYouLearn: [
        "Core systems, networking, and security fundamentals",
        "Offensive security and adversary techniques",
        "Defensive architecture and mitigation strategies",
        "Automation and scripting for cyber operations",
        "Investigation, OSINT, and crypto analysis",
        "Professional reporting and operational discipline",
      ],
      whatYouLearnNote:
        "This is full-stack cybersecurity capability, not narrow specialization.",
      readinessIntro:
        "By the end of the program, you are job-ready for real cyber roles.",
      readinessSubheading: "You will be able to:",
      readinessPoints: [
        "Analyze and exploit vulnerabilities with defensive awareness",
        "Assist in incident response and investigation tasks",
        "Contribute to red-team, blue-team, or security operations teams",
        "Transition into specialized tracks such as platform security, investigations, or advanced defense",
      ],
      closingStatement:
        'You do not graduate as a "tool user." You graduate as a cyber operator.',
    },

    // New Component data
    programDeepDive: {
      title: "Deep Dive: Point-by-Point Program Breakdown",
      subtitle: "430 Total Academic Hours - A True Cyber Operations Residency",
      paragraphs: [
        "This program is intentionally long because **real capability takes time**.",
        "Rather than fragmenting learning into disconnected certifications, the program builds skills **layer by layer**, ensuring learners understand not just *how* attacks work, but *why* systems fail and *how* defenses must evolve.",
        "The structure moves from **core foundations** → **applied offense** → **defensive thinking** → **advanced operations**.",
      ],
    },

    // Program Module Discussion data
    syllabus: [
      {
        id: 1,
        title: "Foundations: Computing, Systems & Networks",
        icon: TbCompass,
        content: [
          {
            paragraphs: [
              "You begin by mastering the fundamentals most people skip:",
            ],
            points: [
              "Operating systems (Windows & Linux)",
              "Command-line proficiency",
              "Virtualization and lab environments",
              "Networking architecture, protocols, and traffic analysis",
            ],
          },
          {
            paragraphs: [
              "This phase ensures every learner can **operate confidently inside real systems**, regardless of background.",
            ],
          },
        ],
      },
      {
        id: 2,
        title: "Security Fundamentals & Defensive Thinking",
        icon: TbShieldLock,
        content: [
          {
            paragraphs: [
              "Before learning how attacks work, you learn how security is supposed to work:",
            ],
            points: [
              "Threat modeling and risk assessment",
              "Authentication and access control",
              "Cryptography and malware fundamentals",
              "Defensive controls and security architecture",
            ],
          },
          {
            paragraphs: [
              "This builds **defender intuition**, not just attacker curiosity.",
            ],
          },
        ],
      },
      {
        id: 3,
        title: "Scripting, Automation & Intelligence Foundations",
        icon: TbBrandPython,
        content: [
          {
            paragraphs: ["Modern cybersecurity is automated.", "You learn to:"],
            points: [
              "Script security tasks in Python",
              "Automate reconnaissance and analysis",
              "Build tools for investigation and defense",
              "Understand systems through code",
            ],
          },
          {
            paragraphs: [
              "This is where learners shift from **users** to **operators**.",
            ],
          },
        ],
      },
      {
        id: 4,
        title: "Offensive Security & Adversary Techniques",
        icon: TbUserShield,
        content: [
          {
            paragraphs: [
              "Offense is taught as a **means of understanding systems**, not glorifying attacks.",
              "You cover:",
            ],
            points: [
              "Application security and OWASP risks",
              "Manual and automated exploitation",
              "Mobile and API security",
              "Privilege escalation and attack chaining",
            ],
          },
          {
            paragraphs: [
              "Every offensive concept is paired with **defensive context and mitigation**.",
            ],
          },
        ],
      },
      {
        id: 5,
        title: "Advanced Cyber Operations & Red Team Concepts",
        icon: TbSword,
        content: [
          {
            paragraphs: ["As the program progresses, learners explore:"],
            points: [
              "Adversary emulation and MITRE ATT&CK",
              "Cloud, container, and supply-chain risks",
              "Red-team vs blue-team dynamics",
              "Advanced attack simulations",
            ],
          },
          {
            paragraphs: [
              "The focus is on **how real attackers think and adapt**, not just tools.",
            ],
          },
        ],
      },
      {
        id: 6,
        title: "Dark Web, OSINT & Crypto Investigations",
        icon: TbListSearch,
        content: [
          {
            paragraphs: [
              "Cyber operations do not stop at the breach.",
              "You are trained to:",
            ],
            points: [
              "Analyze dark web ecosystems",
              "Perform OSINT and identity correlation",
              "Trace cryptocurrency transactions",
              "Understand laundering and fraud workflows",
            ],
          },
          {
            paragraphs: [
              "This connects offensive activity to **real-world impact and investigation**.",
            ],
          },
        ],
      },
      {
        id: 7,
        title: "Capstone: Full-Scope Cyber Operations Scenario",
        icon: TbRosetteDiscountCheck,
        content: [
          {
            paragraphs: [
              "The program concludes with a **comprehensive capstone**, where learners:",
            ],
            points: [
              "Operate inside a realistic cyber environment",
              "Execute offensive and defensive tasks",
              "Analyze incidents and produce reports",
              "Defend technical and strategic decisions",
            ],
          },
          {
            paragraphs: [
              "You finish with **professional-grade outputs**, not just completion status.",
            ],
          },
        ],
      },
    ],

    // Career opportunities chart data
    careerChart: [
      {
        jobRole: "Cybersecurity Analyst",
        whatYouDo: "Monitor, analyze, and respond to threats.",
        exampleEmployers: "SOCs, enterprises",
      },
      {
        jobRole: "Security Operations Engineer",
        whatYouDo: "Defend infrastructure and platforms.",
        exampleEmployers: "Banks, SaaS firms",
      },
      {
        jobRole: "Offensive Security Analyst",
        whatYouDo: "Test and validate security controls.",
        exampleEmployers: "Consulting firms",
      },
      {
        jobRole: "Incident Response Associate",
        whatYouDo: "Assist in breach response and analysis.",
        exampleEmployers: "IR & DFIR teams",
      },
      {
        jobRole: "Junior Red / Blue Team Member",
        whatYouDo: "Support advanced security operations.",
        exampleEmployers: "Global tech firms",
      },
    ],
  },
];
