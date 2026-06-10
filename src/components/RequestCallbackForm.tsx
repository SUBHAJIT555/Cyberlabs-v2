import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useCourses } from "@/hooks/useCourses";
import { Course } from "@/interface/program";
import { MAIL_API_URL } from "@/lib/api";
import mailSvg from "@/assets/img/Learning-Enviorment/mail.svg";
import { crosshatchBgStyle } from "@/constants/bootcampStyles";
import { ShinyButton } from "@/components/ui/shiny-button";

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

const inputBase =
    "w-full px-4 py-3 rounded-lg border bg-white/95 text-text-primary placeholder:text-neutral-400 font-inter-display text-base focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors";
const inputError = "border-red-300 focus:border-red-500 focus:ring-red-500/20";
const inputNormal = "border-neutral-200";

const VerticalStripesBg = ({
    lineColor,
    opacity = 0.22,
}: {
    lineColor: string;
    opacity?: number;
}) => (
    <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden>
        <div
            className="absolute inset-0"
            style={{
                WebkitMaskImage: "linear-gradient(to top, #000 0%, transparent 80%)",
                maskImage: "linear-gradient(to top, #000 0%, transparent 80%)",
                backgroundImage: `linear-gradient(90deg, ${lineColor} 1px, transparent 1px)`,
                backgroundSize: "4px 100%",
                opacity,
            }}
        />
    </div>
);

const RequestCallbackForm = () => {
    const { getCourses } = useCourses();
    const allCourses = getCourses() as unknown as Course[];
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-80px" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
    const [showWhatHappensNext, setShowWhatHappensNext] = useState(false);

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
            const mobileNumber = data.mobileNumber.startsWith("+") ? data.mobileNumber : `+91${data.mobileNumber.replace(/\D/g, "")}`;
            const response = await fetch(MAIL_API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    formType: "request-callback",
                    fullName: data.fullName,
                    email: data.email,
                    mobileNumber,
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
            setShowWhatHappensNext(true);
        } catch {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    const whatHappensNextContent = (
        <div className="space-y-4">
            {[
                "Your request is reviewed by the admissions team",
                "An advisor contacts you to schedule a call",
                "You receive a structured walkthrough of the relevant program",
                "Clear next steps are shared only if the program is the right fit",
            ].map((text, i) => (
                <div key={i} className="flex gap-3">
                    <div className="shrink-0 w-9 h-9 rounded-lg border border-neutral-200 bg-neutral-500 text-white flex items-center justify-center font-inter-display font-bold text-sm">
                        {i + 1}
                    </div>
                    <p className="flex-1 pt-1 text-sm sm:text-base font-inter-display text-text-primary font-medium leading-relaxed">
                        {text}
                    </p>
                </div>
            ))}
            <p className="pt-4 mt-4 border-t border-neutral-200 border-dashed text-sm sm:text-base font-inter-display text-text-primary/90 font-medium italic">
                No pressure. No spam. Only informed decision-making.
            </p>
        </div>
    );

    return (
        <section className="w-full min-h-[80vh] py-10 sm:py-14 md:py-20" ref={containerRef}>
            <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] xl:grid-cols-[minmax(0,420px)_1fr] gap-8 lg:gap-10 xl:gap-12 items-start">
                    {/* Left: illustration panel */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="order-1 lg:order-1 lg:sticky lg:top-24"
                    >
                        <div className="flex justify-center p-4 sm:p-6 md:p-8">
                            <img
                                src={mailSvg}
                                alt=""
                                className="w-full max-w-sm aspect-square object-contain"
                            />
                        </div>
                        <div className="relative mt-6 rounded-lg border border-neutral-200 bg-white overflow-hidden shadow-sm">
                            <div className="absolute inset-0 z-0 pointer-events-none" style={crosshatchBgStyle} />
                            <p className="relative z-10 p-5 sm:p-6 text-sm sm:text-base md:text-lg font-inter-display text-text-primary font-medium leading-relaxed italic border-l-4 border-primary/40">
                                Cybersecurity is not learned casually. If you are ready to take it seriously, we&apos;re ready to guide you.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right: form */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                        transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
                        className="order-2 lg:order-2 min-w-0"
                    >
                        <div className="relative border border-neutral-200 bg-white shadow-sm rounded-xl overflow-hidden">
                            <VerticalStripesBg lineColor="#d4d4d8" opacity={0.22} />
                            <div className="relative z-10 p-6 sm:p-8 md:p-10">
                                <div className="mb-6 sm:mb-8 pb-6 border-b border-neutral-200 border-dashed">
                                    <h2 className="text-2xl sm:text-3xl font-inter-display text-text-primary font-semibold tracking-tight leading-tight mb-2">
                                        Request a Call Back
                                    </h2>
                                    <p className="text-sm sm:text-base font-inter-display text-text-primary/70 leading-relaxed">
                                        Share your details. Our team will contact you within one business day.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 sm:space-y-6">
                                    {submitStatus === "error" && (
                                        <div className="rounded-lg bg-amber-50/95 border border-amber-200/80 border-dashed px-4 py-3.5 flex items-start gap-3 font-inter-display text-amber-800 text-sm">
                                            <span className="shrink-0 mt-0.5 text-amber-500" aria-hidden>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                                    <path d="M12 16h.01" />
                                                </svg>
                                            </span>
                                            <span>We couldn&apos;t send your request. Please check your connection and try again.</span>
                                        </div>
                                    )}

                                    <div className="space-y-2">
                                        <label className="block text-sm font-inter-display font-medium text-text-primary">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            {...register("fullName", { required: "Full name is required" })}
                                            className={`${inputBase} ${errors.fullName ? inputError : inputNormal}`}
                                            placeholder="Enter your full name"
                                        />
                                        {errors.fullName && <p className="mt-1 text-sm text-red-500 font-inter-display">{errors.fullName.message}</p>}
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                                        <div className="space-y-2">
                                            <label className="block text-sm font-inter-display font-medium text-text-primary">
                                                Email Address <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                {...register("email", {
                                                    required: "Email address is required",
                                                    pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address" },
                                                })}
                                                className={`${inputBase} ${errors.email ? inputError : inputNormal}`}
                                                placeholder="Enter your email address"
                                            />
                                            {errors.email && <p className="mt-1 text-sm text-red-500 font-inter-display">{errors.email.message}</p>}
                                        </div>

                                        <div className="space-y-2">
                                            <label className="block text-sm font-inter-display font-medium text-text-primary">
                                                Mobile Number <span className="text-red-500">*</span>
                                            </label>
                                            <div className="flex gap-2">
                                                <div className="shrink-0 px-4 py-3 rounded-lg border border-neutral-200 bg-white/95 text-text-primary font-inter-display font-medium text-base">
                                                    +91
                                                </div>
                                                <input
                                                    type="tel"
                                                    {...register("mobileNumber", {
                                                        required: "Mobile number is required",
                                                        pattern: { value: /^[6-9]\d{9}$/, message: "Please enter a valid 10-digit Indian mobile number" },
                                                        minLength: { value: 10, message: "Mobile number must be 10 digits" },
                                                        maxLength: { value: 10, message: "Mobile number must be 10 digits" },
                                                    })}
                                                    className={`${inputBase} flex-1 ${errors.mobileNumber ? inputError : inputNormal}`}
                                                    placeholder="9876543210"
                                                    maxLength={10}
                                                />
                                            </div>
                                            {errors.mobileNumber && <p className="mt-1 text-sm text-red-500 font-inter-display">{errors.mobileNumber.message}</p>}
                                        </div>
                                    </div>
                                    <p className="text-xs text-text-primary/60 font-inter-display -mt-2">Indian mobile numbers only (10 digits, 6–9)</p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 pt-2 border-t border-neutral-200 border-dashed">
                                        <div className="space-y-2 sm:pt-4">
                                            <label className="block text-sm font-inter-display font-medium text-text-primary">
                                                Current Background <span className="text-red-500">*</span>
                                            </label>
                                            <select
                                                {...register("currentBackground", { required: "Please select your current background" })}
                                                className={`${inputBase} appearance-none cursor-pointer ${errors.currentBackground ? inputError : inputNormal}`}
                                            >
                                                <option value="">Select your current background</option>
                                                <option value="Student">Student</option>
                                                <option value="IT Professional">IT Professional</option>
                                                <option value="Security Professional">Security Professional</option>
                                                <option value="Other">Other</option>
                                            </select>
                                            {errors.currentBackground && <p className="mt-1 text-sm text-red-500 font-inter-display">{errors.currentBackground.message}</p>}
                                        </div>

                                        <div className="space-y-2 sm:pt-4">
                                            <label className="block text-sm font-inter-display font-medium text-text-primary">
                                                Years of Experience <span className="text-red-500">*</span>
                                            </label>
                                            <select
                                                {...register("yearsOfExperience", { required: "Please select years of experience" })}
                                                className={`${inputBase} appearance-none cursor-pointer ${errors.yearsOfExperience ? inputError : inputNormal}`}
                                            >
                                                <option value="">Select years of experience</option>
                                                <option value="0-1">0–1</option>
                                                <option value="1-3">1–3</option>
                                                <option value="3-7">3–7</option>
                                                <option value="7+">7+</option>
                                            </select>
                                            {errors.yearsOfExperience && <p className="mt-1 text-sm text-red-500 font-inter-display">{errors.yearsOfExperience.message}</p>}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-inter-display font-medium text-text-primary">
                                            Program of Interest <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            {...register("programOfInterest", { required: "Please select a program of interest" })}
                                            className={`${inputBase} appearance-none cursor-pointer ${errors.programOfInterest ? inputError : inputNormal}`}
                                        >
                                            <option value="">Select a program</option>
                                            {allCourses.map((course) => (
                                                <option key={course.id} value={course.title}>{course.title}</option>
                                            ))}
                                        </select>
                                        {errors.programOfInterest && <p className="mt-1 text-sm text-red-500 font-inter-display">{errors.programOfInterest.message}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-inter-display font-medium text-text-primary">
                                            Preferred Time for Call <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            {...register("preferredTime", { required: "Please specify your preferred time for call" })}
                                            className={`${inputBase} ${errors.preferredTime ? inputError : inputNormal}`}
                                            placeholder="e.g., Weekdays 10 AM - 2 PM IST"
                                        />
                                        {errors.preferredTime && <p className="mt-1 text-sm text-red-500 font-inter-display">{errors.preferredTime.message}</p>}
                                    </div>

                                    <div className="space-y-2 pt-2 border-t border-neutral-200 border-dashed">
                                        <label className="block text-sm font-inter-display font-medium text-text-primary pt-4">
                                            Any specific questions or goals <span className="text-text-primary/50 text-xs font-normal">(Optional)</span>
                                        </label>
                                        <textarea
                                            {...register("questionsOrGoals")}
                                            rows={4}
                                            className={`${inputBase} resize-none ${inputNormal}`}
                                            placeholder="Share any questions or goals you'd like to discuss..."
                                        />
                                    </div>

                                    <div className="pt-2">
                                        <ShinyButton
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full rounded-lg! font-inter-display! text-base font-medium shadow-lg! active:scale-95! disabled:cursor-not-allowed disabled:opacity-50"
                                        >
                                            {isSubmitting ? "Submitting..." : "Submit Request"}
                                        </ShinyButton>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* What Happens Next — popup after submit */}
            {showWhatHappensNext && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
                    onClick={() => setShowWhatHappensNext(false)}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="what-happens-next-title"
                >
                    <div
                        className="relative w-full max-w-md rounded-xl border border-neutral-200 bg-white shadow-xl overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="absolute inset-0 z-0 pointer-events-none" style={crosshatchBgStyle} />
                        <div className="relative z-10 p-6 sm:p-8">
                            <div className="flex items-start justify-between gap-4 mb-6 pb-4 border-b border-neutral-200 border-dashed">
                                <h2 id="what-happens-next-title" className="text-xl sm:text-2xl font-inter-display text-text-primary font-semibold tracking-tight">
                                    What Happens Next
                                </h2>
                                <button
                                    type="button"
                                    onClick={() => setShowWhatHappensNext(false)}
                                    className="shrink-0 p-2 rounded-lg text-text-primary/70 hover:bg-neutral-100 hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                                    aria-label="Close"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 6L6 18M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            {whatHappensNextContent}
                            <ShinyButton
                                type="button"
                                onClick={() => setShowWhatHappensNext(false)}
                                className="mt-6 w-full rounded-lg! font-inter-display! text-base font-medium shadow-lg! active:scale-95!"
                            >
                                Got it
                            </ShinyButton>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default RequestCallbackForm;
