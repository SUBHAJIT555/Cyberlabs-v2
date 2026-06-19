import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import {
    FaLinkedinIn,
    FaFacebookF,
    FaInstagram,
} from "react-icons/fa";
import { useCourses } from "@/hooks/useCourses";
import { useBootcamps } from "@/hooks/useBootcamps";
import { Course } from "@/interface/program";
import { CONTACT } from "@/constants/contactInfo";
import { LetterSwapPingPong } from "@/components/ui/LetterSwap";
import { ShinyButton } from "@/components/ui/shiny-button";
import {
    DateTimePickerField,
    defaultDateTimeLocal,
} from "@/components/ui/DateTimePickerField";
import { EmailField } from "@/components/ui/EmailField";
import { IndianPhoneField } from "@/components/ui/IndianPhoneField";
import { FormSuccessPopup } from "@/components/ui/FormSuccessPopup";
import { FormErrorPopup } from "@/components/ui/FormErrorPopup";
import { useFormSubmitFeedback } from "@/hooks/useFormSubmitFeedback";
import { FORM_FEEDBACK_COPY } from "@/constants/formFeedbackCopy";
import { formatIndianMobileE164 } from "@/lib/formValidation";

const inputBase =
    "w-full px-4 py-3 rounded-lg border bg-white/95 text-text-primary placeholder:text-neutral-400 font-inter-display text-base focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors";
const inputError = "border-red-300 focus:border-red-500 focus:ring-red-500/20";
const inputNormal = "border-neutral-200";

const horizontalLinesFadeStyle = {
    WebkitMaskImage: "linear-gradient(to bottom, #000 0%, transparent 75%)",
    backgroundImage:
        "repeating-linear-gradient(0deg, transparent 0px, transparent 3px, #d4d4d8 3px, #d4d4d8 4px)",
    height: "100%",
    left: 0,
    maskImage: "linear-gradient(to bottom, #000 0%, transparent 75%)",
    opacity: 0.5,
    pointerEvents: "none" as const,
    position: "absolute" as const,
    top: 0,
    width: "100%",
};

const HorizontalLinesBg = () => (
    <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden>
        <div style={horizontalLinesFadeStyle} />
    </div>
);

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

interface FormData {
    fullName: string;
    email: string;
    mobileNumber: string;
    currentBackground: string;
    yearsOfExperience: string;
    programOfInterest: string;
    bootCampOfInterest: string;
    preferredTime: string;
    questionsOrGoals?: string;
}

const validateProgramOrBootCamp = (_value: string, formValues: FormData): true | string => {
    const hasProgram = Boolean(formValues.programOfInterest);
    const hasBootcamp = Boolean(formValues.bootCampOfInterest);
    if (!hasProgram && !hasBootcamp) {
        return "Please select at least one program or boot camp";
    }
    return true;
};

const ContactHeader = () => {
    const { getCourses } = useCourses();
    const { getBootcamps } = useBootcamps();
    const allCourses = getCourses() as unknown as Course[];
    const allBootcamps = getBootcamps();
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const {
        showSuccessPopup,
        setShowSuccessPopup,
        showErrorPopup,
        setShowErrorPopup,
        errorMessage,
        submitForm,
    } = useFormSubmitFeedback();

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
            bootCampOfInterest: "",
            preferredTime: defaultDateTimeLocal(),
            questionsOrGoals: "",
        },
    });

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);

        try {
            await submitForm(
                {
                    formType: "contact",
                    fullName: data.fullName,
                    email: data.email,
                    mobileNumber: formatIndianMobileE164(data.mobileNumber),
                    currentBackground: data.currentBackground,
                    yearsOfExperience: data.yearsOfExperience,
                    programOfInterest: data.programOfInterest,
                    bootCampOfInterest: data.bootCampOfInterest,
                    preferredTime: data.preferredTime,
                    questionsOrGoals: data.questionsOrGoals ?? "",
                },
                { successMessage: FORM_FEEDBACK_COPY.contact.successMessage },
            );
            reset();
        } catch {
            // Error popup is handled by useFormSubmitFeedback.
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
                        <div className="relative border border-neutral-200 bg-white overflow-hidden h-full shadow-sm rounded-xl">
                            <HorizontalLinesBg />
                            <div className="relative z-10 p-6 md:p-8 pb-0">
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-inter-display text-text-primary font-semibold tracking-tight leading-tight mb-3">
                                    CYBERLABS INDIA
                                </h3>
                                <p className="text-base sm:text-lg font-inter-display text-text-primary/80 leading-relaxed">
                                    (A division of {CONTACT.registeredEntity})
                                </p>
                            </div>

                            <div className="relative z-10 p-6 md:p-8 pt-0 space-y-6">
                                {/* Registered Entity */}
                                <div>
                                    <h4 className="text-sm sm:text-base font-inter-display font-semibold text-text-primary mb-2 uppercase tracking-wide">
                                        Registered Entity:
                                    </h4>
                                    <p className="text-base sm:text-lg font-inter-display text-text-primary leading-relaxed">
                                        {CONTACT.registeredEntity}
                                    </p>
                                </div>

                                {/* Office Address */}
                                <div>
                                    <h4 className="text-sm sm:text-base font-inter-display font-semibold text-text-primary mb-2 uppercase tracking-wide">
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
                                    <h4 className="text-sm sm:text-base font-inter-display font-semibold text-text-primary mb-2 uppercase tracking-wide">
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
                                    <h4 className="text-sm sm:text-base font-inter-display font-semibold text-text-primary mb-3 uppercase tracking-wide">
                                        Social Media:
                                    </h4>
                                    <div className="flex flex-col gap-6">
                                        <a
                                            href="https://www.linkedin.com/company/cyberlabs-india/posts/?feedView=all"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 text-base sm:text-lg font-inter-display text-text-primary hover:text-primary transition-colors group"
                                        >
                                            <FaLinkedinIn className="w-7 h-7 bg-white/95 p-1 border border-neutral-200 rounded-lg transition-colors" />
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
                                            <FaFacebookF className="w-7 h-7 bg-white/95 p-1 border border-neutral-200 rounded-lg transition-colors" />
                                            <LetterSwapPingPong
                                                label="Facebook"
                                                reverse={true}
                                                className="inline-block"
                                            />
                                        </a>
                                        <a
                                            href="https://www.instagram.com/cyberlabsindia"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 text-base sm:text-lg font-inter-display text-text-primary hover:text-primary transition-colors group"
                                        >
                                            <FaInstagram className="w-7 h-7 bg-white/95 p-1 border border-neutral-200 rounded-lg transition-colors" />
                                            <LetterSwapPingPong
                                                label="Instagram"
                                                reverse={true}
                                                className="inline-block"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN - Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 min-w-0"
                    >
                        <div className="relative border border-neutral-200 bg-white overflow-hidden shadow-sm rounded-xl">
                            <VerticalStripesBg lineColor="#d4d4d8" opacity={0.22} />
                            <div className="relative z-10 p-6 md:p-8">
                                <div className="mb-6 sm:mb-8 pb-6 border-b border-neutral-200 border-dashed">
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-inter-display text-text-primary font-semibold tracking-tight leading-tight mb-2">
                                        Connect with CYBERLABS
                                    </h2>
                                    <p className="text-sm sm:text-base md:text-lg font-inter-display text-text-primary/70 leading-relaxed">
                                        Fill out the form below and we&apos;ll get back to you as soon as possible.
                                    </p>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 sm:space-y-6">
                                    {/* Two-column layout for name and email */}
                                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 sm:gap-6">
                                        {/* Full Name */}
                                        <div>
                                            <label className="block text-text-primary text-sm sm:text-base font-medium font-inter-display mb-2">
                                                Full Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                {...register("fullName", {
                                                    required: "Full name is required",
                                                })}
                                                className={`${inputBase} ${errors.fullName ? inputError : inputNormal}`}
                                                placeholder="Enter your full name"
                                            />
                                            {errors.fullName && (
                                                <p className="mt-1 text-sm text-red-500 font-inter-display">
                                                    {errors.fullName.message}
                                                </p>
                                            )}
                                        </div>

                                        {/* Email Address */}
                                        <EmailField
                                            label="Email Address"
                                            name="email"
                                            register={register}
                                            error={errors.email}
                                            inputClassName={`${inputBase} ${errors.email ? inputError : inputNormal}`}
                                        />
                                    </div>

                                    <IndianPhoneField
                                        label="Mobile Number"
                                        name="mobileNumber"
                                        register={register}
                                        error={errors.mobileNumber}
                                        inputClassName={`flex-1 ${inputBase} ${errors.mobileNumber ? inputError : inputNormal}`}
                                        prefixClassName={`shrink-0 px-4 py-3 rounded-lg border bg-white/95 text-text-primary font-inter-display font-medium text-base ${errors.mobileNumber ? inputError : inputNormal}`}
                                    />

                                    {/* Two-column layout for background and experience */}
                                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 sm:gap-6 pt-2 border-t border-neutral-200 border-dashed">
                                        {/* Current Background */}
                                        <div className="sm:pt-4">
                                            <label className="block text-text-primary text-sm sm:text-base font-medium font-inter-display mb-2">
                                                Current Background <span className="text-red-500">*</span>
                                            </label>
                                            <select
                                                {...register("currentBackground", {
                                                    required: "Please select your current background",
                                                })}
                                                className={`${inputBase} appearance-none cursor-pointer ${errors.currentBackground ? inputError : inputNormal}`}
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
                                        <div className="sm:pt-4">
                                            <label className="block text-text-primary text-sm sm:text-base font-medium font-inter-display mb-2">
                                                Years of Experience <span className="text-red-500">*</span>
                                            </label>
                                            <select
                                                {...register("yearsOfExperience", {
                                                    required: "Please select years of experience",
                                                })}
                                                className={`${inputBase} appearance-none cursor-pointer ${errors.yearsOfExperience ? inputError : inputNormal}`}
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

                                    <div className="space-y-4 pt-2 border-t border-neutral-200 border-dashed">
                                        <p className="pt-4 text-sm font-inter-display text-text-primary/70">
                                            Select at least one program or boot camp <span className="text-red-500">*</span>
                                        </p>

                                        <div>
                                            <label className="block text-text-primary text-sm sm:text-base font-medium font-inter-display mb-2">
                                                Program of Interest
                                            </label>
                                            <select
                                                {...register("programOfInterest", {
                                                    validate: (value, formValues) =>
                                                        validateProgramOrBootCamp(value, formValues as FormData),
                                                })}
                                                className={`${inputBase} appearance-none cursor-pointer ${errors.programOfInterest ? inputError : inputNormal}`}
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

                                        <div>
                                            <label className="block text-text-primary text-sm sm:text-base font-medium font-inter-display mb-2">
                                                Boot Camp of Interest
                                            </label>
                                            <select
                                                {...register("bootCampOfInterest", {
                                                    validate: (value, formValues) =>
                                                        validateProgramOrBootCamp(value, formValues as FormData),
                                                })}
                                                className={`${inputBase} appearance-none cursor-pointer ${errors.bootCampOfInterest ? inputError : inputNormal}`}
                                            >
                                                <option value="">Select a boot camp</option>
                                                {allBootcamps.map((bootcamp) => (
                                                    <option key={bootcamp.id} value={bootcamp.title}>
                                                        {bootcamp.title}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.bootCampOfInterest && (
                                                <p className="mt-1 text-sm text-red-500 font-inter-display">
                                                    {errors.bootCampOfInterest.message}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <DateTimePickerField
                                        label="When should we call you?"
                                        name="preferredTime"
                                        register={register}
                                        rules={{ required: "Preferred callback time is required" }}
                                        error={errors.preferredTime}
                                        labelClassName="block text-text-primary text-sm sm:text-base font-medium font-inter-display mb-2"
                                        inputClassName="bg-white/95 focus:ring-primary/20 focus:border-primary"
                                    />

                                    {/* Questions or Goals (Optional) */}
                                    <div className="space-y-2 pt-2 border-t border-neutral-200 border-dashed">
                                        <label className="block text-text-primary text-sm sm:text-base font-medium font-inter-display mb-2 pt-4">
                                            Any specific questions or goals{" "}
                                            <span className="text-text-primary/50 text-xs font-normal">(Optional)</span>
                                        </label>
                                        <textarea
                                            {...register("questionsOrGoals")}
                                            rows={4}
                                            className={`${inputBase} resize-none ${inputNormal}`}
                                            placeholder="Share any specific questions or goals you'd like to discuss..."
                                        />
                                    </div>

                                    <div className="pt-2">
                                        <ShinyButton
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full rounded-lg! font-inter-display! text-base font-medium shadow-lg! active:scale-95! disabled:cursor-not-allowed disabled:opacity-50"
                                        >
                                            {isSubmitting ? "Submitting..." : "Submit"}
                                        </ShinyButton>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <FormSuccessPopup
                open={showSuccessPopup}
                onClose={() => setShowSuccessPopup(false)}
                title={FORM_FEEDBACK_COPY.contact.successTitle}
                message={FORM_FEEDBACK_COPY.contact.successMessage}
            />
            <FormErrorPopup
                open={showErrorPopup}
                onClose={() => setShowErrorPopup(false)}
                title={FORM_FEEDBACK_COPY.contact.errorTitle}
                message={errorMessage}
            />
        </section>
    );
};

export default ContactHeader;
