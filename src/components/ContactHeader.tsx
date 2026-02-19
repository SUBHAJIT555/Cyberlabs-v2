import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
    FaLinkedinIn,
    FaFacebookF,
    FaInstagram,
} from "react-icons/fa";
import { useCourses } from "@/hooks/useCourses";
import { Course } from "@/interface/program";
import { CONTACT } from "@/constants/contactInfo";
import { MAIL_API_URL } from "@/lib/api";
import { LetterSwapPingPong } from "@/components/ui/LetterSwap";

interface FormData {
    fullName: string;
    email: string;
    mobileNumber: string;
    currentBackground: string;
    yearsOfExperience: string;
    programOfInterest: string;
    preferredTime: string;
    questionsOrGoals?: string;
}

const ContactHeader = () => {
    const { getCourses } = useCourses();
    const allCourses = getCourses() as unknown as Course[];
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>({
        defaultValues: {
            fullName: "",
            email: "",
            mobileNumber: "",
            currentBackground: "",
            yearsOfExperience: "",
            programOfInterest: "",
            preferredTime: "",
            questionsOrGoals: "",
        },
    });

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch(MAIL_API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    formType: "contact",
                    fullName: data.fullName,
                    email: data.email,
                    mobileNumber: data.mobileNumber,
                    currentBackground: data.currentBackground,
                    yearsOfExperience: data.yearsOfExperience,
                    programOfInterest: data.programOfInterest,
                    preferredTime: data.preferredTime,
                    questionsOrGoals: data.questionsOrGoals ?? "",
                }),
            });
            const result = await response.json();
            if (!response.ok) {
                throw new Error(result?.error ?? "Submission failed");
            }
            setSubmitStatus("success");
            reset();
        } catch {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20" ref={containerRef}>
            <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                {/* Two-column layout: Company Info (left) | Form (right) */}
                <div className="flex flex-col lg:flex-row lg:gap-8 xl:gap-10 lg:items-start">
                    {/* LEFT COLUMN - Company Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full lg:w-[400px] xl:w-[600px] shrink-0 mb-8 lg:mb-0 xl:sticky xl:top-24 xl:self-start"
                    >
                        <Card
                            className="border border-neutral-200 bg-white overflow-hidden h-full ring ring-neutral-200 ring-offset-4 md:ring-offset-8 rounded-xl"
                            style={{
                                background:
                                    "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                            }}
                        >
                            <CardHeader className="p-6 md:p-8">
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-montserrat text-text-primary font-semibold tracking-tight leading-tight mb-3">
                                    CYBERLABS INDIA
                                </h3>
                                <p className="text-base sm:text-lg font-inter-display text-text-primary/80 leading-relaxed">
                                    (A division of {CONTACT.registeredEntity})
                                </p>
                            </CardHeader>

                            <CardContent className="p-6 md:p-8 pt-0 space-y-6">
                                {/* Registered Entity */}
                                <div>
                                    <h4 className="text-sm sm:text-base font-montserrat font-semibold text-text-primary mb-2 uppercase tracking-wide">
                                        Registered Entity:
                                    </h4>
                                    <p className="text-base sm:text-lg font-inter-display text-text-primary leading-relaxed">
                                        {CONTACT.registeredEntity}
                                    </p>
                                </div>

                                {/* Office Address */}
                                <div>
                                    <h4 className="text-sm sm:text-base font-montserrat font-semibold text-text-primary mb-2 uppercase tracking-wide">
                                        Office Address:
                                    </h4>
                                    <p className="text-base sm:text-lg font-inter-display text-text-primary leading-relaxed">
                                        {CONTACT.officeAddressIndia.map((line, i) => (
                                            <span key={i}>{line}{i < CONTACT.officeAddressIndia.length - 1 && <br />}</span>
                                        ))}
                                    </p>
                                </div>

                                {/* Email */}
                                <div>
                                    <h4 className="text-sm sm:text-base font-montserrat font-semibold text-text-primary mb-2 uppercase tracking-wide">
                                        Email:
                                    </h4>
                                    <a
                                        href={`mailto:${CONTACT.educationEmail}`}
                                        className="text-base sm:text-lg font-inter-display text-primary hover:underline leading-relaxed break-all transition-colors inline-block"
                                    >
                                        <LetterSwapPingPong
                                            label={CONTACT.educationEmail}
                                            reverse={true}
                                            className="inline-block"
                                        />
                                    </a>
                                </div>

                                {/* Social Media */}
                                <div>
                                    <h4 className="text-sm sm:text-base font-montserrat font-semibold text-text-primary mb-3 uppercase tracking-wide">
                                        Social Media:
                                    </h4>
                                    <div className="flex flex-col gap-6">
                                        <a
                                            href="https://www.linkedin.com/company/cyberlabs-india/posts/?feedView=all"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 text-base sm:text-lg font-inter-display text-text-primary hover:text-primary transition-colors group"
                                        >
                                            <FaLinkedinIn className="w-7 h-7 bg-neutral-100 p-1 border border-neutral-200 rounded-lg  transition-transform ring ring-neutral-300 ring-offset-2 md:ring-offset-4" />
                                            <LetterSwapPingPong
                                                label="LinkedIn"
                                                reverse={true}
                                                className="inline-block"
                                            />
                                        </a>
                                        <a
                                            href="https://www.facebook.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 text-base sm:text-lg font-inter-display text-text-primary hover:text-primary transition-colors group"
                                        >
                                            <FaFacebookF className="w-7 h-7 bg-neutral-100 p-1 border border-neutral-200 rounded-lg  transition-transform ring ring-neutral-300 ring-offset-2 md:ring-offset-4" />
                                            <LetterSwapPingPong
                                                label="Facebook"
                                                reverse={true}
                                                className="inline-block"
                                            />
                                        </a>
                                        <a
                                            href="https://www.instagram.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 text-base sm:text-lg font-inter-display text-text-primary hover:text-primary transition-colors group"
                                        >
                                            <FaInstagram className="w-7 h-7 bg-neutral-100 p-1 border border-neutral-200 rounded-lg  transition-transform ring ring-neutral-300 ring-offset-2 md:ring-offset-4" />
                                            <LetterSwapPingPong
                                                label="Instagram"
                                                reverse={true}
                                                className="inline-block"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* RIGHT COLUMN - Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 min-w-0"
                    >
                        <Card
                            className="border border-neutral-200 bg-white overflow-hidden ring ring-neutral-200 ring-offset-4 md:ring-offset-8 rounded-xl"
                            style={{
                                background:
                                    "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                            }}
                        >
                            <CardHeader className="p-6 md:p-8">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-montserrat text-text-primary font-semibold tracking-tight leading-tight mb-2">
                                    Connect with CYBERLABS
                                </h2>
                                <p className="text-sm sm:text-base md:text-lg font-inter-display text-text-primary/80 leading-relaxed">
                                    Fill out the form below and we'll get back to you as soon as possible.
                                </p>
                            </CardHeader>

                            <CardContent className="p-6 md:p-8 pt-0">
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 sm:space-y-6">
                                    {/* Success Message */}
                                    {submitStatus === "success" && (
                                        <div className="bg-green-50 border border-green-200  rounded-lg p-4 text-green-700 text-sm font-inter-display">
                                            Thank you! We've received your message and will contact you soon.
                                        </div>
                                    )}

                                    {/* Error Message */}
                                    {submitStatus === "error" && (
                                        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-600 text-sm font-inter-display">
                                            Something went wrong. Please try again later.
                                        </div>
                                    )}

                                    {/* Two-column layout for name and email */}
                                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 sm:gap-6">
                                        {/* Full Name */}
                                        <div>
                                            <label className="block text-text-primary text-sm sm:text-base font-medium font-montserrat mb-2">
                                                Full Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                {...register("fullName", {
                                                    required: "Full name is required",
                                                })}
                                                className={`w-full px-4 py-3 bg-white border border-neutral-200 rounded-lg text-text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors font-inter-display ${errors.fullName
                                                    ? "border-red-300 focus:border-red-500"
                                                    : "border-neutral-300 focus:border-primary"
                                                    }`}
                                                placeholder="Enter your full name"
                                            />
                                            {errors.fullName && (
                                                <p className="mt-1 text-sm text-red-500 font-inter-display">
                                                    {errors.fullName.message}
                                                </p>
                                            )}
                                        </div>

                                        {/* Email Address */}
                                        <div>
                                            <label className="block text-text-primary text-sm sm:text-base font-medium font-montserrat mb-2">
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
                                                className={`w-full px-4 py-3 bg-white border border-neutral-200 rounded-lg text-text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors font-inter-display ${errors.email
                                                    ? "border-red-300 focus:border-red-500"
                                                    : "border-neutral-300 focus:border-primary"
                                                    }`}
                                                placeholder="Enter your email address"
                                            />
                                            {errors.email && (
                                                <p className="mt-1 text-sm text-red-500 font-inter-display">
                                                    {errors.email.message}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Mobile Number */}
                                    <div>
                                        <label className="block text-text-primary text-sm sm:text-base font-medium font-montserrat mb-2">
                                            Mobile Number (with country code) <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            {...register("mobileNumber", {
                                                required: "Mobile number is required",
                                                pattern: {
                                                    value: /^\+?[1-9]\d{1,14}$/,
                                                    message: "Please enter a valid mobile number with country code",
                                                },
                                            })}
                                            className={`w-full px-4 py-3 bg-white border border-neutral-200 rounded-lg text-text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors font-inter-display ${errors.mobileNumber
                                                ? "border-red-300 focus:border-red-500"
                                                : "border-neutral-300 focus:border-primary"
                                                }`}
                                            placeholder="e.g., +91 9876543210"
                                        />
                                        {errors.mobileNumber && (
                                            <p className="mt-1 text-sm text-red-500 font-inter-display">
                                                {errors.mobileNumber.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Two-column layout for background and experience */}
                                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 sm:gap-6">
                                        {/* Current Background */}
                                        <div>
                                            <label className="block text-text-primary text-sm sm:text-base font-medium font-montserrat mb-2">
                                                Current Background <span className="text-red-500">*</span>
                                            </label>
                                            <select
                                                {...register("currentBackground", {
                                                    required: "Please select your current background",
                                                })}
                                                className={`w-full px-4 py-3 bg-white border border-neutral-200 rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors font-inter-display appearance-none cursor-pointer ${errors.currentBackground
                                                    ? "border-red-300 focus:border-red-500"
                                                    : "border-neutral-300 focus:border-primary"
                                                    }`}
                                            >
                                                <option value="">Select your current background</option>
                                                <option value="Student">Student</option>
                                                <option value="IT Professional">IT Professional</option>
                                                <option value="Security Professional">Security Professional</option>
                                                <option value="Other">Other</option>
                                            </select>
                                            {errors.currentBackground && (
                                                <p className="mt-1 text-sm text-red-500 font-inter-display">
                                                    {errors.currentBackground.message}
                                                </p>
                                            )}
                                        </div>

                                        {/* Years of Experience */}
                                        <div>
                                            <label className="block text-text-primary text-sm sm:text-base font-medium font-montserrat mb-2">
                                                Years of Experience <span className="text-red-500">*</span>
                                            </label>
                                            <select
                                                {...register("yearsOfExperience", {
                                                    required: "Please select years of experience",
                                                })}
                                                className={`w-full px-4 py-3 bg-white border border-neutral-200 rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors font-inter-display appearance-none cursor-pointer ${errors.yearsOfExperience
                                                    ? "border-red-300 focus:border-red-500"
                                                    : "border-neutral-300 focus:border-primary"
                                                    }`}
                                            >
                                                <option value="">Select years of experience</option>
                                                <option value="0-1">0–1</option>
                                                <option value="1-3">1–3</option>
                                                <option value="3-7">3–7</option>
                                                <option value="7+">7+</option>
                                            </select>
                                            {errors.yearsOfExperience && (
                                                <p className="mt-1 text-sm text-red-500 font-inter-display">
                                                    {errors.yearsOfExperience.message}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Program of Interest */}
                                    <div>
                                        <label className="block text-text-primary text-sm sm:text-base font-medium font-montserrat mb-2">
                                            Program of Interest <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            {...register("programOfInterest", {
                                                required: "Please select a program of interest",
                                            })}
                                            className={`w-full px-4 py-3 bg-white border border-neutral-200 rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors font-inter-display appearance-none cursor-pointer ${errors.programOfInterest
                                                ? "border-red-300 focus:border-red-500"
                                                : "border-neutral-300 focus:border-primary"
                                                }`}
                                        >
                                            <option value="">Select a program</option>
                                            {allCourses.map((course) => (
                                                <option key={course.id} value={course.title}>
                                                    {course.title}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.programOfInterest && (
                                            <p className="mt-1 text-sm text-red-500 font-inter-display">
                                                {errors.programOfInterest.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Preferred Time for Call */}
                                    <div>
                                        <label className="block text-text-primary text-sm sm:text-base font-medium font-montserrat mb-2">
                                            Preferred Time for Call <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            {...register("preferredTime", {
                                                required: "Please specify your preferred time for call",
                                            })}
                                            className={`w-full px-4 py-3 bg-white border border-neutral-200 rounded-lg text-text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors font-inter-display ${errors.preferredTime
                                                ? "border-red-300 focus:border-red-500"
                                                : "border-neutral-300 focus:border-primary"
                                                }`}
                                            placeholder="e.g., Weekdays 10 AM - 2 PM IST"
                                        />
                                        {errors.preferredTime && (
                                            <p className="mt-1 text-sm text-red-500 font-inter-display">
                                                {errors.preferredTime.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Questions or Goals (Optional) */}
                                    <div>
                                        <label className="block text-text-primary text-sm sm:text-base font-medium font-montserrat mb-2">
                                            Any specific questions or goals{" "}
                                            <span className="text-text-primary/60 text-xs">(Optional)</span>
                                        </label>
                                        <textarea
                                            {...register("questionsOrGoals")}
                                            rows={4}
                                            className="w-full px-4 py-3 bg-white border  border-neutral-300 rounded-lg text-text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors font-inter-display resize-none"
                                            placeholder="Share any specific questions or goals you'd like to discuss..."
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full px-6 py-3 bg-primary text-background font-montserrat font-semibold rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                                        >
                                            {isSubmitting ? "Submitting..." : "Submit"}
                                        </button>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactHeader;
