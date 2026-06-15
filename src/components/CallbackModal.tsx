import React, { useState, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { createPortal } from "react-dom";
import { useCourses } from "@/hooks/useCourses";
import { useBootcamps } from "@/hooks/useBootcamps";
import type { Course } from "@/interface/program";
import { MAIL_API_URL } from "@/lib/api";
import { crosshatchBgStyle } from "@/constants/bootcampStyles";
import { ShinyButton } from "@/components/ui/shiny-button";
import BootcampPriceBlock from "@/components/ui/BootcampPriceBlock";

interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  programSlug?: string;
  bootcampSlug?: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  callbackTime: string;
  enquiryFor: string;
  bootCampOfInterest: string;
}

const validateProgramOrBootCamp = (_value: string, formValues: FormData): true | string => {
  const hasProgram = Boolean(formValues.enquiryFor);
  const hasBootcamp = Boolean(formValues.bootCampOfInterest);
  if (!hasProgram && !hasBootcamp) {
    return "Please select at least one program or boot camp";
  }
  return true;
};

const defaultCallbackTime = () => {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  d.setHours(10, 0, 0, 0);
  return d.toISOString().slice(0, 16);
};

const CallbackModal: React.FC<CallbackModalProps> = ({
  isOpen,
  onClose,
  programSlug,
  bootcampSlug,
}) => {
  const { getCourses, getCourseBySlug } = useCourses();
  const { getBootcamps, getBootcampBySlug } = useBootcamps();
  const allCourses = useMemo(() => getCourses() as unknown as Course[], [getCourses]);
  const allBootcamps = useMemo(() => getBootcamps(), [getBootcamps]);
  const course = programSlug ? getCourseBySlug(programSlug) : undefined;
  const bootcamp = bootcampSlug ? getBootcampBySlug(bootcampSlug) : undefined;
  const hasContext = Boolean(course || bootcamp);
  const [isMobile, setIsMobile] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const {
    register,
    handleSubmit: rhfHandleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      callbackTime: defaultCallbackTime(),
      enquiryFor: "",
      bootCampOfInterest: "",
    },
  });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isOpen) {
      reset({
        name: "",
        email: "",
        phone: "",
        callbackTime: defaultCallbackTime(),
        enquiryFor: course?.title ?? "",
        bootCampOfInterest: bootcamp?.title ?? "",
      });
      setSubmitStatus(null);
    }
  }, [isOpen, course?.title, bootcamp?.title, reset]);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {

      const response = await fetch(MAIL_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "callback-modal",
          name: data.name,
          email: data.email,
          phone: data.phone.startsWith("+") ? data.phone : `+91${data.phone.replace(/\D/g, "")}`,
          callbackTime: data.callbackTime,
          enquiryFor: data.enquiryFor,
          bootCampOfInterest: data.bootCampOfInterest,
          programSlug: programSlug ?? "",
          bootcampSlug: bootcampSlug ?? "",
        }),
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result?.error ?? "Submission failed");
      }
      setSubmitStatus("success");
      reset();
      setTimeout(() => {
        onClose();
      }, 1500);
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-background/50 backdrop-blur-sm z-9998"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
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
              padding: isMobile ? "1rem" : "2rem",
            }}
          >
            <motion.div
              className="bg-white border border-neutral-200 ring ring-neutral-200 ring-offset-4 md:ring-offset-8 rounded-xl w-full max-w-md relative overflow-hidden"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxHeight: "90vh",
                overflowY: "auto",
                margin: isMobile ? "1rem" : "2rem",
                maxWidth: isMobile ? "calc(100vw - 2rem)" : "28rem",
                width: isMobile ? "auto" : "28rem",
              }}
            >
              <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={crosshatchBgStyle}
              />
              {/* Header */}
              <div className="relative z-10 p-4 sm:p-6 pb-4">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-text-primary text-lg sm:text-xl md:text-2xl lg:text-3xl font-inter-display font-bold">
                    Request a callback
                  </h2>
                  <motion.button
                    className="text-text-primary hover:text-primary cursor-pointer transition-colors"
                    onClick={onClose}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IoClose className="w-6 h-6" />
                  </motion.button>
                </div>
                <p className="text-text-primary text-sm font-inter-display">
                  Fill the form below to request a callback from our team.
                </p>
              </div>

              {/* Form */}
              <form
                onSubmit={rhfHandleSubmit(onSubmit)}
                className="relative z-10 px-4 sm:px-6 pb-4 sm:pb-6 space-y-4"
              >
                {submitStatus === "success" && (
                  <div className="bg-green-50 border border-green-200 border-dashed rounded-lg p-3 text-green-700 text-sm font-inter-display">
                    Thank you! We will call you at the requested time.
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="bg-red-50 border border-red-200 border-dashed rounded-lg p-3 text-red-600 text-sm font-inter-display">
                    Something went wrong. Please try again.
                  </div>
                )}

                {hasContext && course && (
                  <div className="rounded-lg border border-neutral-200 bg-white/95 p-3 sm:p-4">
                    <p className="mb-2 text-xs font-inter-display font-semibold uppercase tracking-wide text-primary">
                      Flagship Program
                    </p>
                    <div className="flex gap-3">
                      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-sm font-inter-display font-semibold text-text-primary leading-snug line-clamp-2">
                          {course.title}
                        </h3>
                        {course.subheading && (
                          <p className="mt-1 text-xs font-inter-display font-medium text-primary line-clamp-1">
                            {course.subheading}
                          </p>
                        )}
                        {course.originalPrice > 0 && course.currentPrice > 0 && (
                          <div className="mt-2">
                            <BootcampPriceBlock
                              originalPrice={course.originalPrice}
                              launchPrice={course.currentPrice}
                              currency="INR"
                              variant="strip"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {hasContext && bootcamp && (
                  <div className="rounded-lg border border-neutral-200 bg-white/95 p-3 sm:p-4">
                    <p className="mb-2 text-xs font-inter-display font-semibold uppercase tracking-wide text-primary">
                      Elite Boot Camp
                    </p>
                    <div className="flex gap-3">
                      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50">
                        <img
                          src={bootcamp.image}
                          alt={bootcamp.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-sm font-inter-display font-semibold text-text-primary leading-snug line-clamp-2">
                          {bootcamp.title}
                        </h3>
                        <p className="mt-1 text-xs font-inter-display font-medium text-primary">
                          {bootcamp.duration} · {bootcamp.language}
                        </p>
                        <div className="mt-2">
                          <BootcampPriceBlock
                            originalPrice={bootcamp.originalPrice}
                            launchPrice={bootcamp.launchPrice}
                            currency={bootcamp.currency}
                            variant="strip"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {hasContext && (
                  <>
                    <input type="hidden" {...register("enquiryFor")} />
                    <input type="hidden" {...register("bootCampOfInterest")} />
                  </>
                )}

                {/* Name Field */}
                <div>
                  <label className="block text-text-primary text-sm font-medium font-inter-display mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: "Full name is required" })}
                    placeholder="Name"
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-background border text-text-primary placeholder-neutral-400 focus:outline-none rounded-lg focus:ring focus:ring-neutral-400 focus:ring-offset-2 md:focus-ring-offset-4 transition-colors text-sm sm:text-base font-inter-display ${errors.name ? "border-red-400 focus:border-red-500" : "border-neutral-300 focus:border-neutral-400"
                      }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500 font-inter-display">{errors.name.message}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-text-primary text-sm font-medium font-inter-display mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email address is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    placeholder="Enter your email address"
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-background border text-text-primary placeholder-neutral-400 focus:outline-none rounded-lg focus:ring focus:ring-neutral-400 focus:ring-offset-2 md:focus-ring-offset-4 transition-colors text-sm sm:text-base font-inter-display ${errors.email ? "border-red-400 focus:border-red-500" : "border-neutral-300 focus:border-neutral-400"
                      }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500 font-inter-display">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label className="block text-text-primary text-sm font-medium font-inter-display mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-2 sm:px-3 py-2 sm:py-3 bg-neutral-100 border border-neutral-300 border-r-0 rounded-l-lg text-text-primary text-sm sm:text-base font-inter-display">
                      🇮🇳 +91
                    </span>
                    <input
                      type="tel"
                      {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[6-9]\d{9}$/,
                          message: "Enter a valid 10-digit Indian mobile number",
                        },
                        minLength: { value: 10, message: "Phone number must be 10 digits" },
                        maxLength: { value: 10, message: "Phone number must be 10 digits" },
                      })}
                      placeholder="9876543210"
                      maxLength={10}
                      className={`flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-background border border-l-0 text-text-primary placeholder-neutral-400 focus:outline-none focus:ring focus:ring-neutral-400 focus:ring-offset-2 md:focus-ring-offset-4 rounded-r-lg transition-colors text-sm sm:text-base font-inter-display ${errors.phone ? "border-red-400 focus:border-red-500" : "border-neutral-300 focus:border-neutral-400"
                        }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500 font-inter-display">{errors.phone.message}</p>
                  )}
                </div>

                {/* Callback Time Field */}
                <div>
                  <label className="block text-text-primary text-sm font-medium font-inter-display mb-2">
                    When should we call you? <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="datetime-local"
                      {...register("callbackTime", { required: "Preferred callback time is required" })}
                      min={new Date().toISOString().slice(0, 16)}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 pr-10 sm:pr-12 bg-background border text-text-primary focus:outline-none focus:ring focus:ring-neutral-400 focus:ring-offset-2 md:focus-ring-offset-4 rounded-lg transition-colors text-sm sm:text-base font-inter-display cursor-pointer [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none [&::-webkit-calendar-picker-indicator]:w-0 [&::-webkit-calendar-picker-indicator]:h-0 ${errors.callbackTime ? "border-red-400" : "border-neutral-300 focus:border-neutral-400"
                        }`}
                      style={{
                        fontSize: isMobile ? "14px" : "16px",
                        minHeight: isMobile ? "44px" : "auto",
                        lineHeight: "1.2",
                        WebkitAppearance: "none",
                        MozAppearance: "textfield",
                        colorScheme: "dark",
                      }}
                      onFocus={(e) => {
                        if (isMobile) e.target.style.fontSize = "16px";
                      }}
                      onBlur={(e) => {
                        if (isMobile) e.target.style.fontSize = "14px";
                      }}
                    />
                    <button
                      type="button"
                      className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 pointer-events-auto cursor-pointer bg-transparent border-0 p-0"
                      onClick={(e) => {
                        e.preventDefault();
                        const input = (e.currentTarget as HTMLElement).previousElementSibling as HTMLInputElement;
                        if (input) {
                          input.showPicker?.();
                          input.focus();
                        }
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-text-primary">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12" />
                        <path d="M16 3v4" />
                        <path d="M8 3v4" />
                        <path d="M4 11h16" />
                        <path d="M7 14h.013" />
                        <path d="M10.01 14h.005" />
                        <path d="M13.01 14h.005" />
                        <path d="M16.015 14h.005" />
                        <path d="M13.015 17h.005" />
                        <path d="M7.01 17h.005" />
                        <path d="M10.01 17h.005" />
                      </svg>
                    </button>
                  </div>
                  {errors.callbackTime && (
                    <p className="mt-1 text-sm text-red-500 font-inter-display">{errors.callbackTime.message}</p>
                  )}
                </div>

                {!hasContext && (
                <div className="space-y-4 pt-2 border-t border-neutral-200 border-dashed">
                  <p className="text-sm font-inter-display text-text-primary/70">
                    Select at least one program or boot camp <span className="text-red-500">*</span>
                  </p>

                  <div>
                    <label className="block text-text-primary text-sm font-medium font-inter-display mb-2">
                      Program Enquiry
                    </label>
                    <select
                      {...register("enquiryFor", {
                        validate: (value, formValues) =>
                          validateProgramOrBootCamp(value, formValues as FormData),
                      })}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-background border text-text-primary focus:outline-none focus:ring focus:ring-neutral-400 focus:ring-offset-2 md:focus-ring-offset-4 rounded-lg transition-colors appearance-none cursor-pointer text-sm sm:text-base font-inter-display ${errors.enquiryFor ? "border-red-400 focus:border-red-500" : "border-neutral-300 focus:border-neutral-400"
                        }`}
                    >
                      <option value="">Select a program</option>
                      {allCourses.map((c) => (
                        <option key={c.id} value={c.title}>
                          {c.title}
                        </option>
                      ))}
                    </select>
                    {errors.enquiryFor && (
                      <p className="mt-1 text-sm text-red-500 font-inter-display">{errors.enquiryFor.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-text-primary text-sm font-medium font-inter-display mb-2">
                      Boot Camp Enquiry
                    </label>
                    <select
                      {...register("bootCampOfInterest", {
                        validate: (value, formValues) =>
                          validateProgramOrBootCamp(value, formValues as FormData),
                      })}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-background border text-text-primary focus:outline-none focus:ring focus:ring-neutral-400 focus:ring-offset-2 md:focus-ring-offset-4 rounded-lg transition-colors appearance-none cursor-pointer text-sm sm:text-base font-inter-display ${errors.bootCampOfInterest ? "border-red-400 focus:border-red-500" : "border-neutral-300 focus:border-neutral-400"
                        }`}
                    >
                      <option value="">Select a boot camp</option>
                      {allBootcamps.map((b) => (
                        <option key={b.id} value={b.title}>
                          {b.title}
                        </option>
                      ))}
                    </select>
                    {errors.bootCampOfInterest && (
                      <p className="mt-1 text-sm text-red-500 font-inter-display">{errors.bootCampOfInterest.message}</p>
                    )}
                  </div>
                </div>
                )}

                <ShinyButton
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-lg! font-inter-display! text-base sm:text-lg font-medium shadow-lg! active:scale-95! disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </ShinyButton>
              </form>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default CallbackModal;
