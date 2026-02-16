import { useState, useEffect, type ReactElement } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";
import { useLenis } from "../hooks/useLenis";

// Import Swiper styles

// team members Images
import guyKlisman from "../assets/img/TeamMemberImages/GuyKlisman.webp";
import ramiSimanTov from "../assets/img/TeamMemberImages/Rami.webp";
import adamGarfinkel from "../assets/img/TeamMemberImages/Adam.webp";
import lucienFransman from "../assets/img/TeamMemberImages/Lucien.webp";
import shmulikYehezkel from "../assets/img/TeamMemberImages/Shmulik.webp";
import najeebIbrahim from "../assets/img/TeamMemberImages/NajeebIbrahim.webp";

interface TeamMember {
  src: string;
  alt: string;
  name: string;
  designation: string;
  description: string;
}

// Team member data
const teamMembers: TeamMember[] = [
  {
    src: guyKlisman,
    alt: "Guy Klisman",
    name: "Guy Klisman",
    designation: "Founder & CEO , CYBERLABS",
    description: `Guy Klisman is an Israeli cyber and intelligence leader with over 25 years of operational experience across national security, cyber defense, and intelligence domains.\n
A former senior commander in Israel's security establishment, he has:\n
• Commanded elite cyber and intelligence units
• Led the cyber and intelligence training frameworks for special forces
• Built national-level cyber training and simulation capabilities
• Directed international cyber cooperation programs with global defense forces and was instrumental in establishing cyber training frameworks for special forces and intelligence officers. His career spans leadership roles across some of Israel’s most advanced intelligence and SIGINT units.\n
As Founder and CEO of CYBERLABS, Guy has built one of the world's most realistic cyber training ecosystems, CYBERLAB’ AI-driven cyber-range platforms and simulation-based training centers. Under his leadership, CYBERLABS has trained and certified hundreds of cyber professionals who now operate across the global cybersecurity industry, in collaboration with leading academic institutions in the United States and internationally.`,
  },
  {
    src: ramiSimanTov,
    alt: "Rami Siman-Tov",
    name: "Rami Siman-Tov",
    designation: "Co-Founder & COO , CYBERLABS",
    description: `Rami Siman-Tov is an Israeli technology and cyber operations leader with 25+ years of global delivery and operational leadership experience.\n
He has led large-scale technology, telecom, and cybersecurity programs across:\n
• Israel\n
• United States\n
• Europe\n
• Africa\n
• Asia\n
Rami specializes in building scalable "zero-to-hero" cyber talent pipelines, transforming individuals into job-ready cyber professionals aligned with real industry needs.\n
At CYBERLABS, he oversees:\n
• Global program delivery and operations\n
• Academic and enterprise partnerships\n
• International training deployments\n
• Operational excellence across regions\n
His experience ensures that CYBERLABS INDIA operates at global execution standards, not local training norms.`,
  },
  {
    src: shmulikYehezkel,
    alt: "Shmulik Yehezkel",
    name: "Shmulik Yehezkel",
    designation: "Advisory Board , National Cyber Defense & Strategy",
    description: `Colonel (Res.) Shmulik Yehezkel is one of Israel's most senior cyber defense and operational technology leaders, with 25+ years of experience across government, defense, and national cyber programs.\n
He has served in key leadership roles including:\n
• Head of the Cyber & Operational Technology Academy at Israel's Prime Minister's Office\n
• Designer of national cyber training and exercise frameworks\n
• Leader of large-scale cyber simulations and readiness programs\n
• Architect of organizational cyber defense capability at national scale\n
At CYBERLABS, he leads the instructor approval and certification framework, ensuring that every trainer meets Israeli and international cyber defense standards.\n
His presence ensures CYBERLABStraining remains strategic, disciplined, and nationally relevant.`,
  },
  {
    src: adamGarfinkel,
    alt: "Adam Garfinkel",
    name: "Adam Garfinkel",
    designation: "Lead Instructor , Cybersecurity & Cloud Systems",
    description: `Adam Garfinkel is an Israeli cybersecurity expert and graduate of the IDF's elite C4I technological corps, with deep expertise across networking, cloud security, AI, and enterprise systems.\n
His experience spans:\n
• Cybersecurity instruction within Israeli defense environments\n
• Enterprise cybersecurity product development\n
• Cloud and infrastructure security\n
• DevOps and database security\n
• Professional certification and workforce training\n
Adam bridges technical depth with instructional excellence, ensuring students understand not just how systems work - but how they fail and how they are attacked.`,
  },
  {
    src: lucienFransman,
    alt: "Lucien Fransman",
    name: "Lucien Fransman",
    designation: "Head of Content & Lead Instructor , Asia",
    description: `Lucien Fransman is a globally respected cybersecurity professional with 25+ years of hands-on experience in:\n
• Incident response\n
• Digital forensics\n
• SOC operations\n
• Malware analysis\n
• Threat hunting\n
He has led and delivered cybersecurity training for:\n
• Global enterprises\n
• Governments\n
• National cyber offices\n
• Universities and institutions worldwide\n
Lucien has built and operated SOCs, led forensic investigations for international clients, and advised governments on cyber readiness.\n
At CYBERLABS, he designs and delivers advanced, investigation-driven training, ensuring students are prepared for real SOC and incident response roles.`,
  },
  {
    src: najeebIbrahim,
    alt: "Najeeb Ibrahim",
    name: "Najeeb Ibrahim",
    designation: "CYBERLABS CISO, Senior Security Leader & Instructor",
    description: `Najeeb Ibrahim is a senior cybersecurity leader with deep expertise across offensive security, defensive security, SOC operations, detection engineering, and incident response.\n
He has:\n
• Built and scaled enterprise security programs\n
• Operated inside advanced security monitoring environments\n
• Led real-world incident response efforts\n
• Bridged industry security practice with structured cyber education\n
As both a practitioner and instructor, Najeeb ensures CYBERLABStraining reflects current threat landscapes, modern attack techniques, and real enterprise defense needs.`,
  },
];

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (member: TeamMember) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedMember(null), 300);
  };

  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    if (isModalOpen) {
      // Stop Lenis scrolling
      lenis.stop();
      // Lock body scroll
      document.body.style.overflow = 'hidden';
    } else {
      // Resume Lenis scrolling
      lenis.start();
      // Unlock body scroll
      document.body.style.overflow = '';
    }

    return () => {
      // Cleanup: ensure body scroll is unlocked
      document.body.style.overflow = '';
      if (lenis) lenis.start();
    };
  }, [isModalOpen, lenis]);


  // Lock body scroll when modal is open
  // useEffect(() => {
  //   if (isModalOpen) {
  //     // Save current scroll position
  //     const scrollY = lenis?.scroll || window.scrollY || 0;
  //     // Lock body scroll
  //     document.body.style.position = "fixed";
  //     document.body.style.top = `-${scrollY}px`;
  //     document.body.style.width = "100%";
  //     document.body.style.overflow = "hidden";

  //     // Stop Lenis scrolling
  //     if (lenis) {
  //       lenis.stop();
  //     }

  //     return () => {
  //       // Restore scroll position when modal closes
  //       document.body.style.position = "";
  //       document.body.style.top = "";
  //       document.body.style.width = "";
  //       document.body.style.overflow = "";

  //       // Resume Lenis and restore scroll position
  //       if (lenis) {
  //         lenis.start();
  //         lenis.scrollTo(scrollY, { immediate: false });
  //       } else {
  //         window.scrollTo(0, scrollY);
  //       }
  //     };
  //   }
  // }, [isModalOpen, lenis]);

  const css = `
  .swiper {
    width: 100%;
    padding-bottom: 50px;
  }
  
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 350px;
    height: auto;
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
  
  .swiper-pagination-bullet {
    background-color: #000;
    opacity: 0.5;
  }
  
  .swiper-pagination-bullet-active {
    background-color: #000;
    opacity: 1;
  }
  
  .swiper-3d .swiper-slide-shadow-left {
    background-image: none;
  }
  .swiper-3d .swiper-slide-shadow-right{
    background: none;
  }
  `;

  return (
    <>
      <section className="px-1 sm:px-16 md:px-24 lg:px-32 xl:px-40 space-y-4 mb-12">
        <style>{css}</style>
        <div className="mx-auto w-full  border border-neutral-300 border-dashed rounded-md p-1 ">
          <div className="relative mx-auto flex w-full flex-col  border border-neutral-300 border-dashed rounded-md bg-bg p-1 md:items-center md:gap-8  md:p-2">
            <div className="flex flex-col justify-center items-center pb-2 pt-14 w-full">
              <div className="text-center w-full">
                {/* heading  */}
                <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6 sm:mb-8 font-montserrat font-semibold text-text-primary leading-tighter tracking-tight text-center">
                  Meet Our Cyber Leadership Team.
                </h3>
                {/* tagline  */}
                <h5 className="text-primary text-lg sm:text-xl md:text-2xl lg:text-4xl font-inter-display font-semibold tracking-tight leading-tight text-center">
                  Israeli Cyber Defense Leaders Behind CYBERLABS INDIA</h5>
                {/* supportive paragraph  */}
                <div className="text-text-primary text-base sm:text-lg md:text-xl lg:text-2xl mt-4 font-inter-display tracking-tight leading-tight max-w-6xl mx-auto">
                  <p className=" font-semibold">
                    CYBERLABS INDIA is led by a globally respected Israeli cyber defense leadership team with decades of experience across national security, intelligence, enterprise cybersecurity, and global cyber training. {" "}
                  </p>
                  <p className="font-semibold underline underline-offset-4 decoration-neutral-300 decoration-1 decoration-dashed my-4">
                    This is not an academic faculty. This is a team of real-world cyber defenders who have built, commanded, and operated cyber defense systems under real threat conditions.
                  </p>
                </div>
              </div>
            </div>

            {/* Team member swiper cards section */}
            <div className="flex w-full items-center justify-center gap-4 select-none">
              <div className="w-full">
                <Swiper
                  spaceBetween={50}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  effect={"coverflow"}
                  grabCursor={true}
                  centeredSlides={true}
                  loop={true}
                  slidesPerView={"auto"}
                  coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                  }}
                  pagination={true}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }}
                  modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
                >
                  {teamMembers.map((member, index) => (
                    <SwiperSlide key={index}>
                      <div
                        onClick={() => handleCardClick(member)}
                        className="flex flex-col items-center bg-white p-4 border border-neutral-300 border-dashed cursor-pointer hover:border-neutral-400 rounded-md transition-colors duration-300"
                        style={{ background: "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white", }}
                      >
                        <img
                          src={member.src}
                          width={500}
                          height={500}
                          className="w-full  object-cover rounded"
                          alt={member.alt}
                        />
                        <div className="mt-4 text-center px-2 w-full">
                          <h4 className="text-text-primary font-semibold tracking-tight text-base sm:text-lg md:text-xl font-inter-display mb-2">
                            {member.name}
                          </h4>
                          <p className="text-text-primary text-xs sm:text-sm md:text-base font-montserrat font-medium leading-tight">
                            {member.designation}
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                  {teamMembers.map((member, index) => (
                    <SwiperSlide key={`duplicate-${index}`}>
                      <div
                        onClick={() => handleCardClick(member)}
                        className="flex flex-col items-center  bg-white p-4 border border-neutral-300 border-dashed cursor-pointer hover:border-neutral-400 rounded-md transition-colors duration-300"
                        style={{ background: "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white" }}
                      >
                        <img
                          src={member.src}
                          width={200}
                          height={200}
                          className="w-full  object-cover rounded"
                          alt={member.alt}
                        />
                        <div className="mt-4 text-center px-2 w-full">
                          <h4 className="text-text-primary font-semibold tracking-tight text-base sm:text-lg md:text-xl font-inter-display mb-2">
                            {member.name}
                          </h4>
                          <p className="text-text-primary text-xs sm:text-sm md:text-base font-montserrat font-medium leading-tight">
                            {member.designation}
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            {/* Leadership Philosophy Section */}
            {/* <div className="w-full px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8 pt-4 sm:pt-6 md:pt-8 pb-4 sm:pb-6 md:pb-8">
              <h5 className="text-text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight font-inter-display mb-2 sm:mb-3 md:mb-4">
                Our collective strength.
              </h5>

              <p className="text-text-primary text-sm sm:text-base md:text-lg lg:text-xl font-inter-display font-semibold mb-2 sm:mb-3 underline underline-offset-4 decoration-neutral-300 decoration-1 decoration-dashed">
                Why This Team Matters ?
              </p>

              <ul className="space-y-1 sm:space-y-1 mb-4 sm:mb-5 md:mb-6">
                <span className="text-text-primary text-sm sm:text-base md:text-lg lg:text-xl font-inter-display font-normal mb-2 sm:mb-3">Together, the CYBERLABSleadership and faculty represent:</span>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-primary text-base sm:text-lg md:text-xl font-bold shrink-0">
                    •
                  </span>
                  <span className="text-text-primary text-sm sm:text-base md:text-lg lg:text-xl font-inter-display font-semibold">
                    100+ years of combined cyber defense experience.
                  </span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-primary text-base sm:text-lg md:text-xl font-bold shrink-0">
                    •
                  </span>
                  <span className="text-text-primary text-sm sm:text-base md:text-lg lg:text-xl font-inter-display font-semibold">
                    Deep roots in Israeli national cyber security.
                  </span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-primary text-base sm:text-lg md:text-xl font-bold shrink-0">
                    •
                  </span>
                  <span className="text-text-primary text-sm sm:text-base md:text-lg lg:text-xl font-inter-display font-semibold">
                    Proven leadership across USA, Israel, and global markets.
                  </span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-primary text-base sm:text-lg md:text-xl font-bold shrink-0">
                    •
                  </span>
                  <span className="text-text-primary text-sm sm:text-base md:text-lg lg:text-xl font-inter-display font-semibold">
                    Real operational exposure - not academic theory.
                  </span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-primary text-base sm:text-lg md:text-xl font-bold shrink-0">
                    •
                  </span>
                  <span className="text-text-primary text-sm sm:text-base md:text-lg lg:text-xl font-inter-display font-semibold">
                    A shared mission to build trusted cyber defenders.
                  </span>
                </li>
              </ul>

              <p className="text-text-primary text-sm sm:text-base md:text-lg lg:text-xl font-inter-display font-semibold leading-tight">
                This is why CYBERLABS INDIA is different. <br /> We are not led by trainers. We are led by cyber defenders who have protected real systems, under real threat, with real consequences.

              </p>
            </div> */}
          </div>
        </div>
      </section>

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
                    className="relative bg-white w-full max-w-6xl h-[90vh] flex flex-col border border-neutral-300 border-dashed overflow-hidden"
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
                    <div className="bg-white relative flex flex-col h-full overflow-hidden"
                      style={{
                        background:
                          "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                      }}
                    >
                      {/* Clean Header */}
                      <div className="border-b border-neutral-300 border-dashed shrink-0 relative bg-white">
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
                                <div className="border border-neutral-300 p-3 bg-white border-dashed rounded-md">
                                  <img
                                    src={selectedMember.src}
                                    alt={selectedMember.alt}
                                    className="w-full h-auto object-cover rounded"
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
    </>
  );
};

export default Team;
