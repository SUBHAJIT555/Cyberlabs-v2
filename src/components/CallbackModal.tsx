import React, { useState, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { createPortal } from "react-dom";
import { useCourses } from "@/hooks/useCourses";
import type { Course } from "@/interface/program";
import { MAIL_API_URL } from "@/lib/api";

interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  phone: string;
  callbackTime: string;
  enquiryFor: string;
}

const defaultCallbackTime = () => {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  d.setHours(10, 0, 0, 0);
  return d.toISOString().slice(0, 16);
};

const CallbackModal: React.FC<CallbackModalProps> = ({ isOpen, onClose }) => {
  const { getCourses } = useCourses();
  // Memoize allCourses to prevent infinite re-renders
  const allCourses = useMemo(() => getCourses() as unknown as Course[], [getCourses]);
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
      phone: "",
      callbackTime: defaultCallbackTime(),
      enquiryFor: "",
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
        phone: "",
        callbackTime: defaultCallbackTime(),
        enquiryFor: allCourses.length > 0 ? allCourses[0].title : "",
      });
      setSubmitStatus(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]); // Only depend on isOpen - reset is stable from react-hook-form, allCourses is memoized

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
          phone: data.phone.startsWith("+") ? data.phone : `+91${data.phone.replace(/\D/g, "")}`,
          callbackTime: data.callbackTime,
          enquiryFor: data.enquiryFor,
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
              className="bg-background border border-neutral-300 border-dashed w-full max-w-md relative overflow-hidden"
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
                background:
                  "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
              }}
            >
              {/* Header */}
              <div className="relative z-10 p-4 sm:p-6 pb-4">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-text-primary text-lg sm:text-xl md:text-2xl lg:text-3xl font-montserrat">
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

                {/* Name Field */}
                <div>
                  <label className="block text-text-primary text-sm font-medium font-inter-display mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: "Full name is required" })}
                    placeholder="Name"
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-background border text-text-primary placeholder-neutral-400 focus:outline-none rounded transition-colors text-sm sm:text-base font-inter-display ${errors.name ? "border-red-400 focus:border-red-500" : "border-neutral-300 focus:border-neutral-400"
                      }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500 font-inter-display">{errors.name.message}</p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label className="block text-text-primary text-sm font-medium font-inter-display mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-2 sm:px-3 py-2 sm:py-3 bg-neutral-100 border border-neutral-300 border-r-0 rounded-l text-text-primary text-sm sm:text-base font-inter-display">
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
                      className={`flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-background border border-l-0 text-text-primary placeholder-neutral-400 focus:outline-none rounded-r transition-colors text-sm sm:text-base font-inter-display ${errors.phone ? "border-red-400 focus:border-red-500" : "border-neutral-300 focus:border-neutral-400"
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
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 pr-10 sm:pr-12 bg-background border text-text-primary focus:outline-none rounded transition-colors text-sm sm:text-base font-inter-display cursor-pointer [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none [&::-webkit-calendar-picker-indicator]:w-0 [&::-webkit-calendar-picker-indicator]:h-0 ${errors.callbackTime ? "border-red-400" : "border-neutral-300 focus:border-neutral-400"
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

                {/* Enquiry For Field */}
                <div>
                  <label className="block text-text-primary text-sm font-medium font-inter-display mb-2">
                    Enquiry For <span className="text-red-500">*</span>
                  </label>
                  <select
                    {...register("enquiryFor", { required: "Please select a program" })}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-background border text-text-primary focus:outline-none rounded transition-colors appearance-none cursor-pointer text-sm sm:text-base font-inter-display ${errors.enquiryFor ? "border-red-400 focus:border-red-500" : "border-neutral-300 focus:border-neutral-400"
                      }`}
                  >
                    <option value="">Select a program</option>
                    {allCourses.map((course) => (
                      <option key={course.id} value={course.title}>
                        {course.title}
                      </option>
                    ))}
                  </select>
                  {errors.enquiryFor && (
                    <p className="mt-1 text-sm text-red-500 font-inter-display">{errors.enquiryFor.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-background font-medium font-montserrat py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-primary/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg sm:text-xl cursor-pointer"
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </motion.button>
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
