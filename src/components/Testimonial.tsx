import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PiTrophyDuotone } from "react-icons/pi";
import { SiGoogle, SiAmazon, SiPaypal, SiInfosys } from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";

import adityaImage from "../assets/img/HomePageImages/AdityaSharma.webp";
import priyankaImage from "../assets/img/HomePageImages/PriyankaPatel.webp";
import rajeshImage from "../assets/img/HomePageImages/RajeshKumar.webp";
import snehaImage from "../assets/img/HomePageImages/SnehaReddy.webp";
import arjunImage from "../assets/img/HomePageImages/ArjunMehta.webp";

const testimonials = [
  {
    company: "Google India",
    icon: SiGoogle,
    reviewer: "Aditya Sharma",
    read: true,
    details: {
      tags: [
        "BATCH 2021",
        "ADVANCED PENTESTING",
        "RED TEAMING",
        "CURRENTLY @ GOOGLE",
        "SECURITY ENGINEER",
      ],
      image: adityaImage,
      text: `Being part of CYBERLABS INDIA's Advanced Pentesting batch in 2021 was a turning point in my career. The hands-on labs and real-world attack simulations gave me the practical experience I needed. Today, I'm working as a Security Engineer at Google India, implementing the same methodologies I learned during my training.`,
    },
  },
  {
    company: "Microsoft",
    icon: FaMicrosoft,
    reviewer: "Priyanka Patel",
    read: true,
    details: {
      tags: [
        "BATCH 2020",
        "INCIDENT RESPONSE",
        "THREAT HUNTING",
        "CURRENTLY @ MICROSOFT",
        "SECURITY ANALYST",
      ],
      image: priyankaImage,
      text: `I joined CYBERLABS INDIA's Incident Response program in 2020 while working as a system administrator. The course structure and mentorship were exceptional. Now, I'm leading threat hunting operations at Microsoft's Security Operations Center. The practical exposure at CYBERLABS INDIA prepared me for real-world challenges.`,
    },
  },
  {
    company: "Amazon AWS",
    icon: SiAmazon,
    reviewer: "Rajesh Kumar",
    read: true,
    details: {
      tags: [
        "BATCH 2019",
        "CLOUD SECURITY",
        "AWS SPECIALIZATION",
        "CURRENTLY @ AWS",
        "CLOUD SECURITY ARCHITECT",
      ],
      image: rajeshImage,
      text: `The Cloud Security specialization at CYBERLABS INDIA in 2019 gave me deep insights into AWS security. The instructors' industry experience and practical assignments were invaluable. Today, I work as a Cloud Security Architect at Amazon AWS, securing enterprise-scale cloud infrastructures.`,
    },
  },
  {
    company: "Infosys",
    icon: SiInfosys,
    reviewer: "Sneha Reddy",
    read: true,
    details: {
      tags: [
        "BATCH 2022",
        "APPLICATION SECURITY",
        "SECURE CODING",
        "CURRENTLY @ INFOSYS",
        "APPSEC LEAD",
      ],
      image: snehaImage,
      text: `Fresh out of college, I joined CYBERLABS INDIA's Application Security program in 2022. The focus on secure coding practices and hands-on vulnerability assessment helped me land a role at Infosys. Within a year, I've been promoted to AppSec Lead, thanks to the strong foundation built at CYBERLABS INDIA.`,
    },
  },
  {
    company: "PayPal",
    icon: SiPaypal,
    reviewer: "Arjun Mehta",
    read: true,
    details: {
      tags: [
        "BATCH 2018",
        "PAYMENT SECURITY",
        "FINTECH SECURITY",
        "CURRENTLY @ PAYPAL",
        "SECURITY CONSULTANT",
      ],
      image: arjunImage,
      text: `Enrolled in CYBERLABS INDIA's FinTech Security program back in 2018. The specialized focus on payment security and financial compliance was exactly what I needed. Now at PayPal, I'm consulting on global security projects, applying the advanced concepts I learned at CYBERLABS INDIA.`,
    },
  },
];

const rowVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const detailsVariants = {
  collapsed: {
    opacity: 0,
    height: 0,
    marginTop: 0,
    transition: { duration: 0.3 },
  },
  open: {
    opacity: 1,
    height: "auto",
    marginTop: 16,
    transition: { duration: 0.5 },
  },
};

const Testimonial = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-16 bg-background">
      <div className="w-full mx-auto px-5 md:px-10 lg:px-16">
        <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6 sm:mb-8 font-montserrat bg-clip-text text-text-primary leading-tight sm:text-left ">
          Hear From Our Real{" "}
          <PiTrophyDuotone className="inline-block rotate-45" /> Champions
        </h2>

        <p className="text-base md:text-xl lg:text-2xl font-montserrat text-text-primary/80 mb-12 max-w-6xl px-5 md:px-10 lg:px-16">
          Hear What Our Students Have To Say As They Shared{" "}
          <span className="text-primary font-inter-display">Real Stories</span> of
          Learning, <span className="text-primary font-inter-display">Growth</span>{" "}
          and <span className="text-primary font-inter-display">Success</span>.
        </p>

        <div className="border-t">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.company}
              className="grid grid-cols-12 items-center py-8 border-b border-text-primary/30 last:border-b-0 gap-4 cursor-pointer  transition-colors"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={rowVariants}
              custom={idx}
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            >
              {/* Company */}
              <div
                className={`lg:col-span-2 text-left ${idx === openIdx
                    ? "md:col-span-12 col-span-12"
                    : "md:col-span-3 col-span-3"
                  }`}
              >
                <span className="flex items-center justify-start">
                  {t.icon && (
                    <t.icon className="text-xl text-text-primary hover:text-primary transition-colors" />
                  )}
                </span>
              </div>

              {/* Reviewer and details */}
              <div
                className={` ${idx === openIdx
                    ? "md:col-span-12 col-span-12"
                    : "md:col-span-6 col-span-6"
                  } lg:col-span-8`}
              >
                <div
                  className={` text-lg text-center font-montserrat font-bold text-text-primary ${idx === openIdx ? "md:text-2xl uppercase " : "md:text-lg "
                    }`}
                >
                  {t.reviewer}
                </div>
                <AnimatePresence initial={false}>
                  {openIdx === idx && t.details && (
                    <motion.div
                      key="details"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={detailsVariants}
                      className="overflow-hidden"
                    >
                      <div className="flex gap-8 flex-col-reverse md:flex-row-reverse lg:flex-row justify-between items-center">
                        {/* Tags */}
                        <div className="flex flex-col gap-2 min-w-[220px]">
                          <span className="font-switzer text-text-primary mb-2 font-medium">
                            Services:
                          </span>
                          {t.details.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-block border font-montserrat text-text-primary border-secondary/40 bg-secondary/10 rounded-md px-4 py-1 text-sm  hover:bg-primary/10 transition-colors"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Image and text */}
                        <div className="flex flex-col items-center gap-6">
                          <img
                            src={t.details.image}
                            alt={t.reviewer}
                            className="w-28 h-28 rounded-lg object-cover mb-2 border border-text-primary/20"
                          />
                          <p className="max-w-xl font-switzer text-text-primary/90 text-md md:text-lg text-left leading-4 md:leading-none">
                            {t.details.text}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Read link */}
              <div
                className={`lg:col-span-2 ${idx === openIdx
                    ? "md:col-span-12 text-center col-span-12"
                    : "md:col-span-3 text-right col-span-3"
                  }`}
              >
                {t.read ? (
                  <button
                    className="underline font-medium text-lg font-switzer text-primary hover:text-text-primary transition-colors cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenIdx(openIdx === idx ? null : idx);
                    }}
                  >
                    {openIdx === idx ? "close" : "read"}
                  </button>
                ) : (
                  <span className="text-text-primary/50 font-medium text-lg font-switzer cursor-pointer">
                    READ
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
