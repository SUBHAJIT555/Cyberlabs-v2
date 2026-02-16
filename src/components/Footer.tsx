import { Link } from "react-router";

import { useForm, type FieldValues } from "react-hook-form";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import CTAButton from "./ui/CTAButton";

import footerlogo from "../assets/img/logo/Cyberlabs-logo-03.svg";
// import { PiTrademarkRegisteredFill } from "react-icons/pi";
import { CONTACT } from "@/constants/contactInfo";
import { MAIL_API_URL } from "@/lib/api";



import {
  FaFacebookF,
  FaHeart,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  const [message, setMessage] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,

    handleSubmit,

    formState: { errors, isSubmitting },

    reset,
  } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: FieldValues) => {
    try {
      const response = await fetch(MAIL_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "newsletter",
          email: data.email,
        }),
      });
      console.log(response);

      // Check if response is actually JSON before parsing
      // const contentType = response.headers.get("content-type");
      // if (!contentType || !contentType.includes("application/json")) {
      //   const text = await response.text();
      //   throw new Error(`Server returned non-JSON response: ${text.substring(0, 100)}`);
      // }

      const result = await response.json();
      console.log(result);
      if (!response.ok) {
        throw new Error(result?.error ?? "Subscription failed");
      }
      setMessage(result.message ?? "Subscribed successfully.");
      setTimeout(() => setMessage(""), 3000);
      reset();
    } catch (error) {
      console.error(error);
      setMessage(error instanceof Error ? error.message : "Something went wrong.");
    }
  };

  return (
    <>
      <footer className="w-full bg-neutral-100 relative overflow-hidden"
        style={{
          background: "repeating-linear-gradient(90deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
        }}
      >
        {/* Two Dashed Border Lines */}
        <div className="w-full border-t border-neutral-200"></div>
        <div className="w-full border-t border-neutral-200 mt-2 "></div>

        <div className="w-full mx-auto px-5 py-2 lg:py-5 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="relative">
            {/* Vertical Dividers - Desktop Only - Extend from top to bottom border only */}
              <div className="hidden lg:block absolute -top-[calc(1.25rem+0.5rem+2px)] bottom-0 left-[25%] border-l border-neutral-200"></div>
            <div className="hidden lg:block absolute -top-[calc(1.25rem+0.5rem+2px)] bottom-0 left-[41.666%] border-l border-neutral-200"></div>
            <div className="hidden lg:block absolute -top-[calc(1.25rem+0.5rem+2px)] bottom-0 left-[58.333%] border-l border-neutral-200"></div>
            <div className="hidden lg:block absolute -top-[calc(1.25rem+0.5rem+2px)] bottom-0 left-[75%] border-l border-neutral-200"></div>

            <div className="grid grid-cols-2 lg:grid-cols-12 lg:gap-y-8 relative">

              {/* About / Logo */}
              <div className="col-span-2 lg:col-span-3 border-b lg:border-b-0 border-neutral-200 pb-8 lg:pb-0 pr-5 lg:pr-8">
                <div className="text-text-primary md:text-5xl text-3xl font-montserrat flex items-center gap-2 tracking-tighter">
                  <Link to="/">
                    <img
                      src={footerlogo}
                      alt="CYBERLABS INDIA Logo"
                      className="w-50 h-25"
                    />
                  </Link>
                </div>

                {/* <a target="_blank" href="/">
                  <h3 className="text-text-primary text-sm md:text-xl  font-inter-display tracking-widest mt-2 px-2 py-1 rounded-md w-fit border border-neutral-300 border-dashed"
                    style={{
                      background:
                        "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                    }}>
                    CYBERLABS INDIA{" "}
                    <PiTrademarkRegisteredFill className="inline-block text-text-primary text-lg" />
                  </h3>
                </a> */}

                <p className="mt-4 text-text-primary text-base md:text-2xl font-montserrat leading-tight max-w-sm">
                  <span>
                    An Israeli Cyber Defense Training Ecosystem, Launched by
                    <span className="font-semibold">{" "}{CONTACT.registeredEntity.replace(" LLP", "")}.</span>
                  </span>
                  <br />
                  <span className="font-bold">Training Real Cyber Defenders for a Real World</span>
                </p>

                {/* <div className="flex items-center gap-10 mt-6  ">
                <div className="border border-zinc-700 rounded-full p-2 backdrop-blur-sm">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-primary hover:text-primary transition-colors duration-300"
                  >
                    <FaFacebookF size={24} />
                  </a>
                </div>

                <div className="border border-zinc-700 rounded-full p-2 backdrop-blur-sm">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-primary hover:text-primary transition-colors duration-300"
                  >
                    <FaInstagram size={24} />
                  </a>
                </div>

                <div className="border border-zinc-700 rounded-full p-2 backdrop-blur-sm">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-primary hover:text-primary transition-colors duration-300"
                  >
                    <FaLinkedinIn size={24} />
                  </a>
                </div>

                <div className="border border-zinc-700 rounded-full p-2 backdrop-blur-sm">
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-primary hover:text-primary transition-colors duration-300"
                  >
                    <FaWhatsapp size={24} />
                  </a>
                </div>
              </div> */}
              </div>

              {/* Useful Links */}

              <div className="col-span-2 sm:col-span-1 lg:col-span-2 border-b lg:border-b-0 border-neutral-300  pb-8 lg:pb-0 pr-5 lg:pr-8 pl-2">
                <h3 className="text-primary text-xl md:text-2xl font-montserrat tracking-tighter font-bold mb-5 ">
                  Useful Links
                </h3>

                <ul className="text-text-primary text-sm md:text-xl font-inter-display mt-2">
                  <li>
                    <Link
                      to="/"
                      className="relative inline-block pl-1 pr-5 text-text-primary text-sm md:text-xl font-inter-display group overflow-hidden"
                    >
                      <span className="relative z-10 transition-colors duration-500 group-hover:text-white ease-out flex items-center">
                        CYBERLABS Home
                      </span>
                      <span
                        className="absolute left-0 top-0 bottom-0 right-0 bg-neutral-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"

                      ></span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/about-cyberlabs"
                      className="relative inline-block pl-1 pr-5 text-text-primary text-sm md:text-xl font-inter-display group overflow-hidden"
                    >
                      <span className="relative z-10 transition-colors duration-500 group-hover:text-white ease-out flex items-center">
                        About CYBERLABS
                      </span>
                      <span
                        className="absolute left-0 top-0 bottom-0 right-0 bg-neutral-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"

                      ></span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/leadership-and-faculty"
                      className="relative inline-block pl-1 pr-5 text-text-primary text-sm md:text-xl font-inter-display group overflow-hidden"
                    >
                      <span className="relative z-10 transition-colors duration-500 group-hover:text-white ease-out flex items-center">
                        Leadership and Faculty
                      </span>
                      <span
                        className="absolute left-0 top-0 bottom-0 right-0 bg-neutral-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"

                      ></span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/cyber-defense-programs"
                      className="relative inline-block pl-1 pr-5 text-text-primary text-sm md:text-xl font-inter-display group overflow-hidden"
                    >
                      <span className="relative z-10 transition-colors duration-500 group-hover:text-white ease-out flex items-center">
                        Cyber Defense Programs
                      </span>
                      <span
                        className="absolute left-0 top-0 bottom-0 right-0 bg-neutral-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"

                      ></span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/learning-environment"
                      className="relative inline-block pl-1 pr-5 text-text-primary text-sm md:text-xl font-inter-display group overflow-hidden"
                    >
                      <span className="relative z-10 transition-colors duration-500 group-hover:text-white ease-out flex items-center">
                        Learning Environment
                      </span>
                      <span
                        className="absolute left-0 top-0 bottom-0 right-0 bg-neutral-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"

                      ></span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/certification-and-evaluation-framework"
                      className="relative inline-block pl-1 pr-5 text-text-primary text-sm md:text-xl font-inter-display group overflow-hidden"
                    >
                      <span className="relative z-10 transition-colors duration-500 group-hover:text-white ease-out flex items-center">
                        Certification & Evaluation Framework
                      </span>
                      <span
                        className="absolute left-0 top-0 bottom-0 right-0 bg-neutral-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"

                      ></span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/who-should-apply"
                      className="relative inline-block pl-1 pr-5 text-text-primary text-sm md:text-xl font-inter-display group overflow-hidden"
                    >
                      <span className="relative z-10 transition-colors duration-500 group-hover:text-white ease-out flex items-center">
                        Who Should Apply
                      </span>
                      <span
                        className="absolute left-0 top-0 bottom-0 right-0 bg-neutral-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"

                      ></span>
                    </Link>
                  </li>





                  <li>
                    <Link
                      to="/request-callback"
                      className="relative inline-block pl-1 pr-5 text-text-primary text-sm md:text-xl font-inter-display group overflow-hidden"
                    >
                      <span className="relative z-10 transition-colors duration-500 group-hover:text-white ease-out flex items-center">
                        Request Call Back
                      </span>
                      <span
                        className="absolute left-0 top-0 bottom-0 right-0 bg-neutral-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"

                      ></span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/contact-cyberlabs"
                      className="relative inline-block pl-1 pr-5 text-text-primary text-sm md:text-xl font-inter-display group overflow-hidden"
                    >
                      <span className="relative z-10 transition-colors duration-500 group-hover:text-white ease-out flex items-center">
                        Contact CYBERLABS
                      </span>
                      <span
                        className="absolute left-0 top-0 bottom-0 right-0 bg-neutral-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"

                      ></span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/frequently-asked-questions"
                      className="relative inline-block pl-1 pr-5 text-text-primary text-sm md:text-xl font-inter-display group overflow-hidden"
                    >
                      <span className="relative z-10 transition-colors duration-500 group-hover:text-white ease-out flex items-center">
                        FAQs
                      </span>
                      <span
                        className="absolute left-0 top-0 bottom-0 right-0 bg-neutral-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"

                      ></span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Legals */}

              <div className="col-span-2 sm:col-span-1 lg:col-span-2 border-b lg:border-b-0 border-neutral-300  pb-8 lg:pb-0 pr-5 lg:pr-8 pl-2">
                <h3 className="text-primary text-xl md:text-2xl font-montserrat tracking-tighter font-bold mb-5 ">
                  Legals
                </h3>

                <ul className="text-text-primary text-sm md:text-xl font-inter-display mt-2">
                  <li>
                    <Link
                      to="/terms-and-conditions"
                      className="relative inline-block pl-1 pr-5 text-text-primary text-sm md:text-xl font-inter-display group overflow-hidden"
                    >
                      <span className="relative z-10 transition-colors duration-500 group-hover:text-white ease-out  flex items-center">
                        Terms & Condition
                      </span>
                      <span className="absolute left-0 top-0 bottom-0 right-0 bg-neutral-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"

                      ></span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/privacy-policy"
                      className="relative inline-block pl-1 pr-5 text-text-primary text-sm md:text-xl font-inter-display group overflow-hidden"
                    >
                      <span className="relative z-10 transition-colors duration-500 group-hover:text-white ease-out  flex items-center">
                        Privacy Policy
                      </span>
                      <span className="absolute left-0 top-0 bottom-0 right-0 bg-neutral-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"

                      ></span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/cookie-policy"
                      className="relative inline-block pl-1 pr-5 text-text-primary text-sm md:text-xl font-inter-display group overflow-hidden"
                    >
                      <span className="relative z-10 transition-colors duration-500 group-hover:text-white ease-out  flex items-center">
                        Cookie Policy
                      </span>
                      <span className="absolute left-0 top-0 bottom-0 right-0 bg-neutral-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"

                      ></span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/refund-and-cancellation"
                      className="relative inline-block pl-1 pr-5 text-text-primary text-sm md:text-xl font-inter-display group overflow-hidden"
                    >
                      <span className="relative z-10 transition-colors duration-500 group-hover:text-white ease-out  flex items-center">
                        Refund Policy
                      </span>
                      <span className="absolute left-0 top-0 bottom-0 right-0 bg-neutral-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"

                      ></span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to={`mailto:${CONTACT.supportEmail}`}
                      className="relative inline-block pl-1 pr-5 text-text-primary text-sm md:text-xl font-inter-display group overflow-hidden"
                    >
                      <span className="relative z-10 transition-colors duration-500 group-hover:text-white ease-out  flex items-center">
                        Support
                      </span>
                      <span className="absolute left-0 top-0 bottom-0 right-0 bg-neutral-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"

                      ></span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Socials */}

              <div className="col-span-2 sm:col-span-1 lg:col-span-2 border-b lg:border-b-0 border-neutral-300  pb-8 lg:pb-0 pr-5 lg:pr-8 pl-2">
                <h3 className="text-primary text-xl md:text-2xl font-montserrat tracking-tighter font-bold mb-5 ">
                  Socials
                </h3>

                <ul className="text-text-primary text-sm md:text-xl font-inter-display mt-2">
                  <li>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative inline-block pl-1 pr-5 text-text-primary text-sm md:text-xl font-inter-display group overflow-hidden"
                    >
                      <span className="relative z-10 transition-colors duration-500 group-hover:text-white ease-out  flex items-center">
                        <FaInstagram className="mr-2 text-lg shrink-0" />
                        Instagram
                      </span>
                      <span className="absolute left-0 top-0 bottom-0 right-0 bg-neutral-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"

                      ></span>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative inline-block pl-1 pr-5 text-text-primary text-sm md:text-xl font-inter-display group overflow-hidden"
                    >
                      <span className="relative z-10 transition-colors duration-500 group-hover:text-white ease-out  flex items-center">
                        <FaFacebookF className="mr-2 text-lg shrink-0" />
                        Facebook
                      </span>
                      <span className="absolute left-0 top-0 bottom-0 right-0 bg-neutral-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"

                      ></span>
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.linkedin.com/company/cyberlabs-india/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative inline-block pl-1 pr-5 text-text-primary text-sm md:text-xl font-inter-display group overflow-hidden"
                    >
                      <span className="relative z-10 transition-colors duration-500 group-hover:text-white ease-out  flex items-center">
                        <FaLinkedinIn className="mr-2 text-lg shrink-0" />
                        LinkedIn
                      </span>
                      <span className="absolute left-0 top-0 bottom-0 right-0 bg-neutral-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"

                      ></span>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative inline-block pl-1 pr-5 text-text-primary text-sm md:text-xl font-inter-display group overflow-hidden"
                    >
                      <span className="relative z-10 transition-colors duration-500 group-hover:text-white ease-out  flex items-center">
                        <FaWhatsapp className="mr-2 text-lg shrink-0" />
                        WhatsApp
                      </span>
                      <span className="absolute left-0 top-0 bottom-0 right-0 bg-neutral-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"

                      ></span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Newsletter */}

              <div className="col-span-2 sm:col-span-1 lg:col-span-3 border-b lg:border-b-0 border-neutral-300  pb-8 lg:pb-1 pl-2 lg:pl-2">
                <h3 className="text-primary text-xl md:text-2xl font-montserrat tracking-tighter font-bold mb-5 ">
                  Newsletter
                </h3>

                <p className="text-text-primary text-sm md:text-lg font-montserrat">
                  Stay updated with our latest news, industry insights, and
                  exclusive offers.
                </p>

                <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
                  <input type="hidden" name="formType" value="newsletter" />

                  <label
                    htmlFor="newsletter-email"
                    className="block text-text-primary text-sm md:text-lg font-inter-display mt-5 mb-2"
                  >
                    Enter Your Email id :
                  </label>

                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    {...register("email")}
                    placeholder="username@example.com"
                    className="w-full px-4 py-3 bg-transparent backdrop-blur-sm border border-neutral-200 rounded-xl ring ring-neutral-300 ring-offset-2 md:ring-offset-3 text-text-primary placeholder:text-text-primary/50 text-sm md:text-lg focus:outline-none focus:border-b-neutral-400 hover:border-b-neutral-400 transition-all duration-300 ease-in-out font-inter-display!"
                  />

                  <div className="flex justify-end mt-5">
                    <CTAButton
                      label={isSubmitting ? "Submitting..." : "Subscribe Us"}
                      onClick={() => {
                        if (formRef.current && !isSubmitting) {
                          formRef.current.requestSubmit();
                        }
                      }}
                      variant="light"
                      className={isSubmitting ? "opacity-70 cursor-not-allowed" : " font-inter-display"}
                    />
                  </div>
                </form>

                {message && (
                  <p className="text-green-500 text-base mt-2">{message}</p>
                )}

                {errors.email && (
                  <p className="text-red-500 text-base mt-2">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            {/* Bottom Border */}
            <div className="w-full border-t border-neutral-300 "></div>
          </div>

          {/* Bottom Bar */}

          <div className="w-full flex justify-center items-center py-5 px-10 font-inter-display tracking-tighter">
            <div className="text-text-primary text-sm md:text-lg leading-none text-center">
              &copy; {new Date().getFullYear()}{" "}
              <motion.div
                className="inline-block relative group"
                whileHover="hover"
                initial="initial"
              >
                <Link
                  to="/"
                  className="text-primary text-sm md:text-lg font-medium relative inline-block"
                >
                  CYBERLABS INDIA
                  <motion.span
                    className="absolute bottom-0 left-0 h-px bg-primary"
                    variants={{
                      initial: { width: 0 },
                      hover: { width: "100%" }
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </Link>
              </motion.div>{" "}
              All rights reserved | Made with{" "}
              <FaHeart className="inline text-primary text-sm md:text-base animate-pulse" />{" "}
              by:&nbsp;
              <motion.div
                className="inline-block relative group"
                whileHover="hover"
                initial="initial"
              >
                <a
                  href="https://codecobble.com/"
                  target="_blank"
                  className="text-primary text-sm md:text-lg font-medium relative inline-block"
                  rel="noopener noreferrer"
                >
                  CodeCobble
                  <motion.span
                    className="absolute bottom-0 left-0 h-px bg-primary"
                    variants={{
                      initial: { width: 0 },
                      hover: { width: "100%" }
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
