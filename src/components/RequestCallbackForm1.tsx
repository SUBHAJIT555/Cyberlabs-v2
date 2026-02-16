import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

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

const RequestCallbackForm = () => {
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
            // TODO: Replace with actual API endpoint
            // await fetch('/api/request-callback', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(data),
            // });

            // Simulate API call
            console.log("Form data:", data);
            await new Promise((resolve) => setTimeout(resolve, 1000));

            setSubmitStatus("success");
            reset();
        } catch {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="w-full bg-background py-4 md:py-8" ref={containerRef}>

            <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center  font-montserrat text-text-primary font-semibold tracking-tight leading-tight mb-8 md:mb-12">
                    Let's Set Up a Conversation – Wishing You a Bright Future!
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-36 items-start">
                    {/* Main Form - Left column */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:col-span-7"
                    >
                        <Card
                            className="border border-neutral-300 border-dashed bg-white overflow-hidden" id="request-callback-form"
                            style={{
                                background:
                                    "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                            }}
                        >
                            <CardHeader className="p-6 md:p-8">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-montserrat text-text-primary font-semibold tracking-tight leading-tight mb-2">
                                    Request a Call Back
                                </h2>
                                <p className="text-sm sm:text-base md:text-lg font-inter-display text-text-primary/80 leading-relaxed">
                                    Please share the following details. Our team will contact you within one business day.
                                </p>
                            </CardHeader>

                            <CardContent className="p-6 md:p-8 pt-0">
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 sm:space-y-6" >
                                    {/* Success Message */}
                                    {submitStatus === "success" && (
                                        <div className="bg-green-50 border border-green-200 border-dashed rounded-lg p-4 text-green-700 text-sm font-inter-display">
                                            Thank you! We've received your request and will contact you within one business day.
                                        </div>
                                    )}

                                    {/* Error Message */}
                                    {submitStatus === "error" && (
                                        <div className="bg-red-50 border border-red-200 border-dashed rounded-lg p-4 text-red-600 text-sm font-inter-display">
                                            Something went wrong. Please try again later.
                                        </div>
                                    )}

                                    {/* Two-column layout for name and email */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
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
                                                className={`w-full px-4 py-3 bg-white border border-dashed rounded-lg text-text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors font-inter-display ${errors.fullName
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
                                                className={`w-full px-4 py-3 bg-white border border-dashed rounded-lg text-text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors font-inter-display ${errors.email
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
                                            Mobile Number <span className="text-red-500">*</span>
                                        </label>
                                        <div className="flex gap-2">
                                            <div className="shrink-0">
                                                <div className="px-4 py-3 bg-neutral-50 border border-dashed border-neutral-300 rounded-lg text-text-primary font-inter-display font-medium">
                                                    +91
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <input
                                                    type="tel"
                                                    {...register("mobileNumber", {
                                                        required: "Mobile number is required",
                                                        pattern: {
                                                            value: /^[6-9]\d{9}$/,
                                                            message: "Please enter a valid 10-digit Indian mobile number",
                                                        },
                                                        minLength: {
                                                            value: 10,
                                                            message: "Mobile number must be 10 digits",
                                                        },
                                                        maxLength: {
                                                            value: 10,
                                                            message: "Mobile number must be 10 digits",
                                                        },
                                                    })}
                                                    className={`w-full px-4 py-3 bg-white border border-dashed rounded-lg text-text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors font-inter-display ${errors.mobileNumber
                                                        ? "border-red-300 focus:border-red-500"
                                                        : "border-neutral-300 focus:border-primary"
                                                        }`}
                                                    placeholder="9876543210"
                                                    maxLength={10}
                                                />
                                            </div>
                                        </div>
                                        {errors.mobileNumber && (
                                            <p className="mt-1 text-sm text-red-500 font-inter-display">
                                                {errors.mobileNumber.message}
                                            </p>
                                        )}
                                        <p className="mt-1 text-xs text-text-primary/60 font-inter-display">
                                            Indian mobile numbers only (10 digits, starting with 6-9)
                                        </p>
                                    </div>

                                    {/* Two-column layout for background and experience */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                                        {/* Current Background */}
                                        <div>
                                            <label className="block text-text-primary text-sm sm:text-base font-medium font-montserrat mb-2">
                                                Current Background <span className="text-red-500">*</span>
                                            </label>
                                            <select
                                                {...register("currentBackground", {
                                                    required: "Please select your current background",
                                                })}
                                                className={`w-full px-4 py-3 bg-white border border-dashed rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors font-inter-display appearance-none cursor-pointer ${errors.currentBackground
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
                                                className={`w-full px-4 py-3 bg-white border border-dashed rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors font-inter-display appearance-none cursor-pointer ${errors.yearsOfExperience
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
                                            className={`w-full px-4 py-3 bg-white border border-dashed rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors font-inter-display appearance-none cursor-pointer ${errors.programOfInterest
                                                ? "border-red-300 focus:border-red-500"
                                                : "border-neutral-300 focus:border-primary"
                                                }`}
                                        >
                                            <option value="">Select a program</option>
                                            <option value="Cybercrime, Dark Web & Crypto Investigations">
                                                Cybercrime, Dark Web & Crypto Investigations
                                            </option>
                                            <option value="Platform, Identity & Abuse Defense Engineering">
                                                Platform, Identity & Abuse Defense Engineering
                                            </option>
                                            <option value="Full-Stack Cyber Defense & Offensive Security">
                                                Full-Stack Cyber Defense & Offensive Security
                                            </option>
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
                                            className={`w-full px-4 py-3 bg-white border border-dashed rounded-lg text-text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors font-inter-display ${errors.preferredTime
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
                                            Any specific questions or goals <span className="text-text-primary/60 text-xs">(Optional)</span>
                                        </label>
                                        <textarea
                                            {...register("questionsOrGoals")}
                                            rows={4}
                                            className="w-full px-4 py-3 bg-white border border-dashed border-neutral-300 rounded-lg text-text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors font-inter-display resize-none"
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
                                            {isSubmitting ? "Submitting..." : "Submit Request"}
                                        </button>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Right column - Two stacked info panels */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full lg:col-span-5"
                    >
                        <div className="flex flex-col ">
                            {/* What Happens Next */}
                            <Card
                                className="border border-neutral-300 border-dashed bg-white overflow-hidden"
                                style={{
                                    background:
                                        "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                                }}
                            >
                                <CardHeader className="p-5 md:p-6">
                                    <h3 className="text-xl md:text-2xl font-montserrat text-text-primary font-semibold tracking-tight leading-tight mb-4">
                                        What Happens Next
                                    </h3>
                                </CardHeader>
                                <CardContent className="p-5 md:p-6 pt-0">
                                    <div className="space-y-4">
                                        <div className="flex gap-3">
                                            <div className="shrink-0 w-8 h-8 rounded-full bg-primary text-background flex items-center justify-center font-montserrat font-bold text-base sm:text-lg">
                                                1
                                            </div>
                                            <p className="flex-1 pt-1 text-base sm:text-lg font-inter-display text-text-primary font-medium leading-relaxed">
                                                Your request is reviewed by the admissions team
                                            </p>
                                        </div>
                                        <div className="flex gap-3">
                                            <div className="shrink-0 w-8 h-8 rounded-full bg-primary text-background flex items-center justify-center font-montserrat font-bold text-base sm:text-lg">
                                                2
                                            </div>
                                            <p className="flex-1 pt-1 font-medium text-base sm:text-lg font-inter-display text-text-primary leading-relaxed">
                                                An advisor contacts you to schedule a call
                                            </p>
                                        </div>
                                        <div className="flex gap-3">
                                            <div className="shrink-0 w-8 h-8 rounded-full bg-primary text-background flex items-center justify-center font-montserrat font-bold text-base sm:text-lg">
                                                3
                                            </div>
                                            <p className="flex-1 pt-1 font-medium text-base sm:text-lg font-inter-display text-text-primary leading-relaxed">
                                                You receive a structured walkthrough of the relevant program
                                            </p>
                                        </div>
                                        <div className="flex gap-3">
                                            <div className="shrink-0 w-8 h-8 rounded-full bg-primary text-background flex items-center justify-center font-montserrat font-bold text-base sm:text-lg">
                                                4
                                            </div>
                                            <p className="flex-1 pt-1 font-medium text-base sm:text-lg font-inter-display text-text-primary leading-relaxed">
                                                Clear next steps are shared-only if the program is the right fit
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-6 pt-6 border-t border-neutral-300 border-dashed">
                                        <p className="text-base sm:text-lg font-inter-display text-text-primary leading-relaxed font-medium italic">
                                            No pressure. No spam. Only informed decision-making.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Why CYBERLABS*/}
                            <Card
                                className="border border-neutral-300 border-dashed bg-white overflow-hidden"
                                style={{
                                    background:
                                        "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                                }}
                            >
                                <CardHeader className="p-5 md:p-6">
                                    <h3 className="text-xl md:text-2xl font-montserrat text-text-primary font-semibold tracking-tight leading-tight mb-4">
                                        Why CYBERLABS
                                    </h3>
                                </CardHeader>
                                <CardContent className="p-5 md:p-6 pt-0">
                                    <ul className="space-y-3 font-inter-display text-base sm:text-lg text-text-primary leading-relaxed font-medium">
                                        <li className="flex items-start gap-3">
                                            <span className="text-primary mt-1 shrink-0">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="18"
                                                    height="18"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="icon icon-tabler icons-tabler-outline icon-tabler-alert-square-rounded"
                                                >
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" />
                                                    <path d="M12 8v4" />
                                                    <path d="M12 16h.01" />
                                                </svg>
                                            </span>
                                            <span>Programs delivered under the global training framework of CYBERLABS USA</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-primary mt-1 shrink-0">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="18"
                                                    height="18"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="icon icon-tabler icons-tabler-outline icon-tabler-alert-square-rounded"
                                                >
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" />
                                                    <path d="M12 8v4" />
                                                    <path d="M12 16h.01" />
                                                </svg>
                                            </span>
                                            <span>Simulation-driven, investigation-focused learning</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-primary mt-1 shrink-0">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="18"
                                                    height="18"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="icon icon-tabler icons-tabler-outline icon-tabler-alert-square-rounded"
                                                >
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" />
                                                    <path d="M12 8v4" />
                                                    <path d="M12 16h.01" />
                                                </svg>
                                            </span>
                                            <span>Structured assessments and professional evaluation</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-primary mt-1 shrink-0">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="18"
                                                    height="18"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="icon icon-tabler icons-tabler-outline icon-tabler-alert-square-rounded"
                                                >
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" />
                                                    <path d="M12 8v4" />
                                                    <path d="M12 16h.01" />
                                                </svg>
                                            </span>
                                            <span>Built for real cyber defense, investigation, and platform security roles</span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default RequestCallbackForm;
