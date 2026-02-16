import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { AnimatedList } from "../ui/animated-list";
import type { AnimatedListItem } from "../ui/animated-list";
import { parseBoldText } from "@/lib/utils";
import howSvg from "../../assets/img/AboutPageImages/how.svg";
import whoSvg from "../../assets/img/AboutPageImages/who.svg";
import whatnotdoSvg from "../../assets/img/AboutPageImages/whatnotdo.svg";
// import aspiringImage from "../../assets/img/whoThis/aspiring.webp";
import whoCyberlabs from '../../assets/img/AboutPageImages/whoCyberlabs.svg'
// import enterpriseImage from "../../assets/img/whoThis/enterprise.webp";
import closingImage from "../../assets/img/AboutPageImages/closingImage.svg";

// List item icons
const CubePlusIcon = (
  <div className="border border-neutral-200 bg-neutral-100 rounded-lg p-0.5 sm:p-1 ring ring-neutral-200 ring-offset-2 flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-cube-plus w-4 h-4 sm:w-5 sm:h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M21 12.5v-4.509a1.98 1.98 0 0 0 -1 -1.717l-7 -4.008a2.016 2.016 0 0 0 -2 0l-7 4.007c-.619 .355 -1 1.01 -1 1.718v8.018c0 .709 .381 1.363 1 1.717l7 4.008a2.016 2.016 0 0 0 2 0" />
      <path d="M12 22v-10" />
      <path d="M12 12l8.73 -5.04" />
      <path d="M3.27 6.96l8.73 5.04" />
      <path d="M16 19h6" />
      <path d="M19 16v6" />
    </svg>
  </div>
);

const SitemapIcon = (
  <div className="border border-neutral-200 bg-neutral-100 rounded-lg p-0.5 sm:p-1 ring ring-neutral-200 ring-offset-2 flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-sitemap w-4 h-4 sm:w-5 sm:h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M3 17a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2l0 -2" />
      <path d="M15 17a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2l0 -2" />
      <path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2l0 -2" />
      <path d="M6 15v-1a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v1" />
      <path d="M12 9l0 3" />
    </svg>
  </div>
);

const GitBranchIcon = (
  <div className="border border-neutral-200 bg-neutral-100 rounded-lg p-0.5 sm:p-1 ring ring-neutral-200 ring-offset-2 flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-git-branch w-4 h-4 sm:w-5 sm:h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M5 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M5 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M15 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M7 8l0 8" />
      <path d="M9 18h6a2 2 0 0 0 2 -2v-5" />
      <path d="M14 14l3 -3l3 3" />
    </svg>
  </div>
);

const ClockPlayIcon = (
  <div className="border border-neutral-200 bg-neutral-100 rounded-lg p-0.5 sm:p-1 ring ring-neutral-200 ring-offset-2 flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-clock-play w-4 h-4 sm:w-5 sm:h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M12 7v5l2 2" />
      <path d="M17 22l5 -3l-5 -3l0 6" />
      <path d="M13.017 20.943a9 9 0 1 1 7.831 -7.292" />
    </svg>
  </div>
);

const Server2Icon = (
  <div className="border border-neutral-200 bg-neutral-100 rounded-lg p-0.5 sm:p-1 ring ring-neutral-200 ring-offset-2 flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-server-2 w-4 h-4 sm:w-5 sm:h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M3 7a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-2" />
      <path d="M3 15a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3l0 -2" />
      <path d="M7 8l0 .01" />
      <path d="M7 16l0 .01" />
      <path d="M11 8h6" />
      <path d="M11 16h6" />
    </svg>
  </div>
);

const BoltIcon = (
  <div className="border border-neutral-200 bg-neutral-100 rounded-lg p-0.5 sm:p-1 ring ring-neutral-200 ring-offset-2 flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-bolt w-4 h-4 sm:w-5 sm:h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" />
    </svg>
  </div>
);

const UserStarIcon = (
  <div className="border border-neutral-200 bg-neutral-100 rounded-lg p-0.5 sm:p-1 ring ring-neutral-200 ring-offset-2 flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-user-star w-4 h-4 sm:w-5 sm:h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
      <path d="M6 21v-2a4 4 0 0 1 4 -4h.5" />
      <path d="M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138" />
    </svg>
  </div>
);

const BuildingBankIcon = (
  <div className="border border-neutral-200 bg-neutral-100 rounded-lg p-0.5 sm:p-1 ring ring-neutral-200 ring-offset-2 flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-building-bank w-4 h-4 sm:w-5 sm:h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M3 21l18 0" />
      <path d="M3 10l18 0" />
      <path d="M5 6l7 -3l7 3" />
      <path d="M4 10l0 11" />
      <path d="M20 10l0 11" />
      <path d="M8 14l0 3" />
      <path d="M12 14l0 3" />
      <path d="M16 14l0 3" />
    </svg>
  </div>
);

const FileTextIcon = (
  <div className="border border-neutral-200 bg-neutral-100 rounded-lg p-0.5 sm:p-1 ring ring-neutral-200 ring-offset-2 flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-file-text w-4 h-4 sm:w-5 sm:h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
      <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" />
      <path d="M9 9l1 0" />
      <path d="M9 13l6 0" />
      <path d="M9 17l6 0" />
    </svg>
  </div>
);

const IdBadgeIcon = (
  <div className="border border-neutral-200 bg-neutral-100 rounded-lg p-0.5 sm:p-1 ring ring-neutral-200 ring-offset-2 flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-id-badge w-4 h-4 sm:w-5 sm:h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M5 6a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-8a3 3 0 0 1 -3 -3l0 -12" />
      <path d="M10 13a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M10 6h4" />
      <path d="M9 18h6" />
    </svg>
  </div>
);

const HourglassIcon = (
  <div className="border border-neutral-200 bg-neutral-100 rounded-lg p-0.5 sm:p-1 ring ring-neutral-200 ring-offset-2 flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-hourglass w-4 h-4 sm:w-5 sm:h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M6.5 7h11" />
      <path d="M6.5 17h11" />
      <path d="M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1" />
      <path d="M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1" />
    </svg>
  </div>
);

const SpeakerphoneIcon = (
  <div className="border border-neutral-200 bg-neutral-100 rounded-lg p-0.5 sm:p-1 ring ring-neutral-200 ring-offset-2 flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-speakerphone w-4 h-4 sm:w-5 sm:h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M18 8a3 3 0 0 1 0 6" />
      <path d="M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5" />
      <path d="M12 8l4.524 -3.77a.9 .9 0 0 1 1.476 .692v12.156a.9 .9 0 0 1 -1.476 .692l-4.524 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8" />
    </svg>
  </div>
);

const UserPlusIcon = (
  <div className="border border-neutral-200 bg-neutral-100 rounded-lg p-0.5 sm:p-1 ring ring-neutral-200 ring-offset-2 flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-user-plus w-4 h-4 sm:w-5 sm:h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
      <path d="M16 19h6" />
      <path d="M19 16v6" />
      <path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
    </svg>
  </div>
);

const RepeatIcon = (
  <div className="border border-neutral-200 bg-neutral-100 rounded-lg p-0.5 sm:p-1 ring ring-neutral-200 ring-offset-2 flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-repeat w-4 h-4 sm:w-5 sm:h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3" />
      <path d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3" />
    </svg>
  </div>
);

const StackFrontIcon = (
  <div className="border border-neutral-200 bg-neutral-100 rounded-lg p-0.5 sm:p-1 ring ring-neutral-200 ring-offset-2 flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-stack-front w-4 h-4 sm:w-5 sm:h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M12 4l-8 4l8 4l8 -4l-8 -4" fill="currentColor" />
      <path d="M8 14l-4 2l8 4l8 -4l-4 -2" />
      <path d="M8 10l-4 2l8 4l8 -4l-4 -2" />
    </svg>
  </div>
);

const UserIcon = (
  <div className="border border-neutral-200 bg-neutral-100 rounded-lg p-0.5 sm:p-1 ring ring-neutral-200 ring-offset-2 flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-user w-4 h-4 sm:w-5 sm:h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
      <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
    </svg>
  </div>
);

const WorldIcon = (
  <div className="border border-neutral-200 bg-neutral-100 rounded-lg p-0.5 sm:p-1 ring ring-neutral-200 ring-offset-2 flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-world w-4 h-4 sm:w-5 sm:h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
      <path d="M3.6 9h16.8" />
      <path d="M3.6 15h16.8" />
      <path d="M11.5 3a17 17 0 0 0 0 18" />
      <path d="M12.5 3a17 17 0 0 1 0 18" />
    </svg>
  </div>
);

const SettingsCodeIcon = (
  <div className="border border-neutral-200 bg-neutral-100 rounded-lg p-0.5 sm:p-1 ring ring-neutral-200 ring-offset-2 flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-settings-code w-4 h-4 sm:w-5 sm:h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M11.482 20.924a1.666 1.666 0 0 1 -1.157 -1.241a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.312 .318 1.644 1.794 .995 2.697" />
      <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
      <path d="M20 21l2 -2l-2 -2" />
      <path d="M17 17l-2 2l2 2" />
    </svg>
  </div>
);

const SquareRoundedCheckIcon = (
  <div className="border border-neutral-200 bg-neutral-100 rounded-lg p-0.5 sm:p-1 ring ring-neutral-200 ring-offset-2 flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-square-rounded-check w-4 h-4 sm:w-5 sm:h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M9 12l2 2l4 -4" />
      <path d="M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" />
    </svg>
  </div>
);

const AwardIcon = (
  <div className="border border-neutral-200 bg-neutral-100 rounded-lg p-0.5 sm:p-1 ring ring-neutral-200 ring-offset-2 flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-award w-4 h-4 sm:w-5 sm:h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M6 9a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
      <path d="M12 15l3.4 5.89l1.598 -3.233l3.598 .232l-3.4 -5.889" />
      <path d="M6.802 12l-3.4 5.89l3.598 -.233l1.598 3.232l3.4 -5.889" />
    </svg>
  </div>
);



const AboutTrainsWhoClosing = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const howTrainsListItems: AnimatedListItem[] = [
    { text: "Simulation-driven cyber environments.", icon: CubePlusIcon },
    { text: "Scenario-based exercises.", icon: SitemapIcon },
    { text: "Investigation-led workflows.", icon: GitBranchIcon },
    { text: "Instructor-guided, real-time sessions.", icon: ClockPlayIcon },
  ];

  const whoLeadsListItems: AnimatedListItem[] = [
    { text: "Defended real systems.", icon: Server2Icon },
    { text: "Handled live cyber incidents.", icon: BoltIcon },
    { text: "Led investigations and response teams.", icon: UserStarIcon },
    {
      text: "Built cybersecurity capabilities at enterprise and national levels.",
      icon: BuildingBankIcon,
    },
  ];

  const doesNotDoListItems: AnimatedListItem[] = [
    { text: "Slide-based instruction.", icon: FileTextIcon },
    { text: "Exam-only credentialing.", icon: IdBadgeIcon },
    { text: "Short-term certification programs.", icon: HourglassIcon },
    { text: "Marketing-led education models.", icon: SpeakerphoneIcon },
  ];

  const whoBuiltForListItems: AnimatedListItem[] = [
    { text: "Aspiring cybersecurity professionals.", icon: UserPlusIcon },
    { text: "Career switchers seeking serious, structured entry.", icon: RepeatIcon },
    { text: "Working professionals advancing into complex cyber roles.", icon: StackFrontIcon },
    { text: "Organizations seeking operationally ready talent.", icon: UserIcon },
  ];

  const closingListItems: AnimatedListItem[] = [
    { text: "Real-world relevance.", icon: WorldIcon },
    { text: "Operational rigor.", icon: SettingsCodeIcon },
    { text: "Accountability.  ", icon: SquareRoundedCheckIcon },
    { text: "Long-term professional credibility.", icon: AwardIcon },
  ];

  const dashedGridStyle = {
    backgroundImage: `
      linear-gradient(to right, #e7e5e4 1px, transparent 1px),
      linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
    `,
    backgroundSize: "10px 10px",
    backgroundPosition: "0 0, 0 0",
    maskImage: `
      repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
      repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
      radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
    `,
    WebkitMaskImage: `
      repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
      repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
      radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
    `,
    maskComposite: "intersect" as const,
    WebkitMaskComposite: "source-in" as const,
  };

  const SectionBlock = ({
    children,
  }: {
    children: ReactNode;
  }) => (
    <div className="w-full mb-8 md:mb-10">
      <div className="relative rounded-xl border border-neutral-200 bg-white overflow-hidden ring ring-neutral-200 ring-offset-4 md:ring-offset-8">
        <div className="absolute inset-0 z-0 pointer-events-none" style={dashedGridStyle} />
        <div className="relative z-10 p-6 sm:p-8 md:p-10 lg:p-12">
          {children}
        </div>
      </div>
    </div>
  );

  return (
    <section className="w-full px-5 md:px-10 lg:px-16 py-8 sm:py-12 lg:py-16" ref={containerRef}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full"
      >
        {/* 1. How CYBERLABS Trains — content left, image right */}
        <SectionBlock>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="space-y-6 order-2 md:order-1">
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat text-text-primary font-semibold tracking-tight leading-tight mb-6 uppercase"
                initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                How CYBERLABS Trains
              </motion.h2>
              <p className="text-base sm:text-lg md:text-xl font-inter-display text-text-primary leading-relaxed font-medium">
                {parseBoldText(
                  "CYBERLABS training is built around **execution**, **investigation**, and **accountability**."
                )}
              </p>
              <p className="text-base sm:text-lg md:text-xl font-inter-display text-text-primary leading-tight font-medium">
                Learners train inside:
              </p>
              <AnimatedList
                items={howTrainsListItems}
                containerClassName="space-y-2 sm:space-y-3 pl-0 mb-6"
                contentClassName="text-base sm:text-lg font-inter-display text-text-primary leading-tight"
                itemClassName="flex items-start gap-3"
                iconClassName="text-primary shrink-0 flex items-center pt-0.5"
                boldText={true}
              />
              <p className="text-base sm:text-lg md:text-xl font-inter-display text-text-primary leading-relaxed font-medium">
                {parseBoldText(
                  "Learning is continuous, hands-on, and measured against **operational outcomes**, not attendance."
                )}
              </p>
            </div>
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <img src={howSvg} alt="" className="w-full max-w-md h-auto" />
            </div>
          </div>
        </SectionBlock>

        {/* 2. Who Leads & Teaches — zigzag: image left, content right */}
        <SectionBlock>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="order-1 md:order-1 flex justify-center md:justify-start">
              <img src={whoSvg} alt="" className="w-full max-w-md h-auto" />
            </div>
            <div className="space-y-6 order-2 md:order-2">
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat text-text-primary font-semibold tracking-tight leading-tight mb-6 uppercase"
                initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                Who Leads & Teaches
              </motion.h2>
              <p className="text-base sm:text-lg md:text-xl font-inter-display text-text-primary leading-tight font-medium">
                CYBERLABS programs are led and delivered by professionals who have:
              </p>
              <AnimatedList
                items={whoLeadsListItems}
                containerClassName="space-y-2 sm:space-y-3 pl-0 mb-6"
                contentClassName="text-base sm:text-lg font-inter-display text-text-primary leading-tight"
                itemClassName="flex items-start gap-3"
                iconClassName="text-primary shrink-0 flex items-center pt-0.5"
                boldText={true}
              />
              <p className="text-base sm:text-lg md:text-xl font-inter-display text-text-primary leading-relaxed font-medium">
                CYBERLABS does not rely on classroom-only trainers.
              </p>
              <p className="text-base sm:text-lg md:text-xl font-inter-display text-text-primary leading-relaxed font-medium">
                {parseBoldText("Instruction is grounded in **experience**, not theory.")}
              </p>
            </div>
          </div>
        </SectionBlock>

        {/* 3. What CYBERLABS Does Not Do — content left, image right */}
        <SectionBlock>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="space-y-6 order-2 md:order-1">
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat text-text-primary font-semibold tracking-tight leading-tight mb-6 uppercase"
                initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                What CYBERLABS Does Not Do
              </motion.h2>
              <p className="text-base sm:text-lg md:text-xl font-inter-display text-text-primary leading-tight font-medium">
                To be clear, CYBERLABS does not focus on:
              </p>
              <AnimatedList
                items={doesNotDoListItems}
                containerClassName="space-y-2 sm:space-y-3 pl-0 mb-6"
                contentClassName="text-base sm:text-lg font-inter-display text-text-primary leading-tight"
                itemClassName="flex items-start gap-3"
                iconClassName="text-primary shrink-0 flex items-center pt-0.5"
                boldText={true}
              />
              <p className="text-base sm:text-lg md:text-xl font-inter-display text-text-primary leading-relaxed font-medium">
                {parseBoldText("Our focus is **operational readiness**.")}
              </p>
            </div>
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <img src={whatnotdoSvg} alt="" className="w-full max-w-md h-auto" />
            </div>
          </div>
        </SectionBlock>

        {/* 4. Who CYBERLABS Is Built For — zigzag: image left, content right */}
        <SectionBlock>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="order-1 md:order-1 flex justify-center md:justify-start">
              <img
                src={whoCyberlabs}
                alt="Aspiring professionals"
                className="w-full max-w-md h-auto object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6 order-2 md:order-2">
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat text-text-primary font-semibold tracking-tight leading-tight mb-6"
                initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                Who CYBERLABS Is Built For
              </motion.h2>
              <p className="text-base sm:text-lg md:text-xl font-inter-display text-text-primary leading-relaxed font-medium">
                {parseBoldText(
                  "CYBERLABS is built for individuals and organizations that value **real capability** over **superficial credentials**, including:"
                )}
              </p>
              <AnimatedList
                items={whoBuiltForListItems}
                containerClassName="space-y-2 sm:space-y-3 pl-0 mb-6"
                contentClassName="text-base sm:text-lg font-inter-display text-text-primary leading-tight"
                itemClassName="flex items-start gap-3"
                iconClassName="text-primary shrink-0 flex items-center pt-0.5"
                boldText={true}
              />
              <p className="text-base sm:text-lg md:text-xl font-inter-display text-text-primary leading-relaxed font-semibold pt-4 border-t border-neutral-300 border-dashed">
                {parseBoldText(
                  "If you are serious about building a **long-term career** in cybersecurity, CYBERLABS is built for you."
                )}
              </p>
            </div>
          </div>
        </SectionBlock>

        {/* 5. Closing Perspective — background same as CallToAction (dashed grid, fade at top) */}
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="relative rounded-xl border border-neutral-200 bg-white overflow-hidden ring ring-neutral-200 ring-offset-4 md:ring-offset-8"
          >
            <div
              className="absolute inset-0 z-0 pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(to right, #e2e8f0 1px, transparent 1px),
                  linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
                `,
                backgroundSize: "1px 1px",
                backgroundPosition: "0 0, 0 0",
                maskImage: `
                  repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
                  repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
                  radial-gradient(ellipse 70% 60% at 50% 0%, #000 40%, transparent 80%)
                `,
                WebkitMaskImage: `
                  repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
                  repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
                  radial-gradient(ellipse 70% 60% at 50% 0%, #000 40%, transparent 80%)
                `,
                maskComposite: "intersect" as const,
                WebkitMaskComposite: "source-in" as const,
              }}
            />
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 sm:gap-8 md:gap-10 items-center p-6 sm:p-8 md:p-10 lg:p-12">

              {/* Content — right side */}
              <div className="order-1 md:order-1 space-y-5 sm:space-y-6 text-center md:text-left">
                <motion.p
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl capitalize font-inter-display font-semibold text-text-primary leading-snug"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <span className="block sm:inline">CYBERLABS represents a different standard in cybersecurity education.</span>
                </motion.p>
                <div className="w-16 sm:w-20 h-0.5 bg-primary/30 mx-auto md:mx-0" aria-hidden />
                <div className="space-y-4 sm:space-y-5">
                  <p className="text-base sm:text-lg md:text-xl font-inter-display font-medium text-text-primary leading-tight">
                    A standard defined by:
                  </p>
                  <AnimatedList
                    items={closingListItems}
                    containerClassName="space-y-2 sm:space-y-3 pl-0 mb-4"
                    contentClassName="text-base sm:text-lg font-inter-display text-text-primary leading-tight"
                    itemClassName="flex items-start gap-3"
                    iconClassName="text-primary shrink-0 flex items-center pt-0.5"
                    boldText={true}
                  />
                  <p className="text-base sm:text-lg md:text-xl font-inter-display font-medium text-text-primary leading-relaxed">
                    <span className="font-bold text-primary">CYBERLABS</span> was built by people who have <span className="font-semibold text-text-primary">carried responsibility</span>, not just credentials — and it trains professionals to do the same.
                  </p>
                </div>
              </div>
              {/* Image — left side (top on mobile) */}
              <div className="order-2 md:order-2 flex justify-center md:justify-start shrink-0">
                <img
                  src={closingImage}
                  alt="Closing Image"
                  className="w-full max-w-[200px] sm:max-w-[240px] md:w-[200px] md:max-w-none lg:w-[260px] h-auto object-cover rounded-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutTrainsWhoClosing;
