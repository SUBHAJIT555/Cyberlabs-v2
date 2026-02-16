import { motion } from "framer-motion";
import { useState } from "react";
import type { Variants } from "framer-motion";
import {
  FaChartLine,
  FaChalkboardTeacher,
  FaLaptopCode,
  FaGlobeAmericas,
} from "react-icons/fa";
import CallbackModal from "./CallbackModal";
import { GiThink } from "react-icons/gi";

interface CardData {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  size: "small" | "large";
}

const WhyCyberlabsIndia = () => {
  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);

  const features: CardData[] = [
    {
      id: 1,
      icon: <FaLaptopCode className="text-4xl text-white" />,
      title: "Real-World Labs",
      description:
        "Practice in safe, sandboxed cyber environments built to mimic real threats.",
      image:
        "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg",
      size: "large",
    },
    {
      id: 2,
      icon: <FaChalkboardTeacher className="text-3xl text-white" />,
      title: "Expert Mentors",
      description:
        "Learn directly from industry professionals and certified trainers.",
      image:
        "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg",
      size: "small",
    },
    {
      id: 3,
      icon: <FaChartLine className="text-3xl text-white" />,
      title: "Career-Ready Skills",
      description: "Aligned with CompTIA, CEH, and SOC Analyst certifications.",
      image:
        "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
      size: "small",
    },
    {
      id: 4,
      icon: <FaGlobeAmericas className="text-4xl text-white" />,
      title: "Flexible Learning",
      description:
        "Online access + onsite cyber arena experiences with 24/7 support.",
      image:
        "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg",
      size: "large",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95,
      rotateX: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const titleVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -40,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 120,
        damping: 20,
      },
    },
  };

  return (
    <section className="py-20 px-6 bg-bg">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-left mb-16"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 font-montserrat bg-clip-text text-text-primary">
            Why <GiThink className="inline-block" /> Top Cybersecurity
            Professionals Choose CYBERLABS INDIA
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 h-auto lg:h-[600px]"
        >
          {/* Large Card 1 - Real-World Labs */}
          <motion.div
            variants={cardVariants}
            whileHover={{
              // y: -5,
              transition: {
                duration: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
              },
            }}
            whileTap={{ scale: 0.98 }}
            className="md:col-span-2 lg:col-span-2 lg:row-span-1 bg-linear-to-br from-bg/90 to-bg/90 via-bg backdrop-blur-xl border border-text-primary/40  rounded-xl overflow-hidden group cursor-pointer min-h-[300px] md:min-h-[280px]"
          >
            <div className="relative h-full">
              <div
                className="absolute inset-0 opacity-30 group-hover:opacity-40 transition-opacity duration-300 rounded-lg"
                style={{
                  backgroundImage: `url(${features[0].image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-end">
                <div className="mb-4">{features[0].icon}</div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl  text-text-primary mb-4 font-montserrat">
                  {features[0].title}
                </h3>
                <p className="text-text-primary text-base md:text-lg lg:text-2xl xl:text-3xl font-switzer ">
                  {features[0].description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Small Card 1 - Expert Mentors */}
          <motion.div
            variants={cardVariants}
            whileHover={{
              // y: -5,
              transition: {
                duration: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
              },
            }}
            whileTap={{ scale: 0.98 }}
            className="bg-linear-to-br from-gray-900/80 to-bg/80 backdrop-blur-xl border border-text-primary/40   rounded-xl overflow-hidden group cursor-pointer  min-h-[300px]"
          >
            <div className="relative h-full min-h-[280px]">
              <div
                className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300 rounded-lg"
                style={{
                  backgroundImage: `url(${features[1].image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="relative z-10 p-4 md:p-6 h-full flex flex-col justify-end">
                <div className="mb-3">{features[1].icon}</div>
                <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-text-primary mb-3 font-montserrat">
                  {features[1].title}
                </h3>
                <p className="text-text-primary text-sm md:text-base lg:text-lg xl:text-2xl  font-switzer">
                  {features[1].description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Small Card 2 - Career-Ready Skills */}
          <motion.div
            variants={cardVariants}
            whileHover={{
              // y: -5,
              transition: {
                duration: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
              },
            }}
            whileTap={{ scale: 0.98 }}
            className="bg-linear-to-br from-gray-900/80 to-bg/80 backdrop-blur-xl border border-text-primary/40   rounded-xl overflow-hidden group cursor-pointer  min-h-[300px]"
          >
            <div className="relative h-full min-h-[280px]">
              <div
                className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300 rounded-lg"
                style={{
                  backgroundImage: `url(${features[2].image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="relative z-10 p-4 md:p-6 h-full flex flex-col justify-end">
                <div className="mb-3">{features[2].icon}</div>
                <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-text-primary mb-3 font-montserrat">
                  {features[2].title}
                </h3>
                <p className="text-text-primary text-sm md:text-base lg:text-lg xl:text-2xl  font-switzer">
                  {features[2].description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Large Card 2 - Flexible Learning */}
          <motion.div
            variants={cardVariants}
            whileHover={{
              // y: -5,
              transition: {
                duration: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
              },
            }}
            whileTap={{ scale: 0.98 }}
            className="md:col-span-2 lg:col-span-2 lg:row-span-1 bg-linear-to-br from-gray-900/80 to-bg/80 backdrop-blur-xl border border-text-primary/40   rounded-xl overflow-hidden group cursor-pointer  min-h-[300px] md:min-h-[280px]"
          >
            <div className="relative h-full">
              <div
                className="absolute inset-0 opacity-30 group-hover:opacity-40 transition-opacity duration-300 rounded-lg"
                style={{
                  backgroundImage: `url(${features[3].image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-end">
                <div className="mb-4">{features[3].icon}</div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-text-primary mb-4 font-montserrat">
                  {features[3].title}
                </h3>
                <p className="text-text-primary text-base md:text-lg lg:text-2xl xl:text-3xl font-switzer ">
                  {features[3].description}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Callback Modal */}
      <CallbackModal
        isOpen={isCallbackModalOpen}
        onClose={() => setIsCallbackModalOpen(false)}
      />
    </section>
  );
};

export default WhyCyberlabsIndia;
