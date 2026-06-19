import { assetSrc } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useCourses } from "@/hooks/useCourses";
import { useBootcamps } from "@/hooks/useBootcamps";
import { Course } from "@/interface/program";
import mailSvg from "@/assets/img/Learning-Enviorment/mail.svg";
import { crosshatchBgStyle } from "@/constants/bootcampStyles";
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

const validateProgramOrBootCamp = (_value: string, formValues: FormData): true | string => {
    const hasProgram = Boolean(formValues.programOfInterest);
    const hasBootcamp = Boolean(formValues.bootCampOfInterest);
    if (!hasProgram && !hasBootcamp) {
        return "Please select at least one program or boot camp";
    }
    return true;
};

const RequestCallbackForm = () => {
    const { getCourses } = useCourses();
    const { getBootcamps } = useBootcamps();
    const allCourses = getCourses() as unknown as Course[];
    const allBootcamps = getBootcamps();
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-80px" });
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
            const mobileNumber = formatIndianMobileE164(data.mobileNumber);
            await submitForm(
                {
                    formType: "request-callback",
                    fullName: data.fullName,
                    email: data.email,
                    mobileNumber,
                    currentBackground: data.currentBackground,
                    yearsOfExperience: data.yearsOfExperience,
                    programOfInterest: data.programOfInterest,
                    bootCampOfInterest: data.bootCampOfInterest,
                    preferredTime: data.preferredTime,
                    questionsOrGoals: data.questionsOrGoals ?? "",
                },
                { successMessage: FORM_FEEDBACK_COPY.requestCallback.successMessage },
            );
            reset();
        } catch {
            // Error popup is handled by useFormSubmitFeedback.
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
                                src={assetSrc(mailSvg)}
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
                                        <EmailField
                                            label="Email Address"
                                            name="email"
                                            register={register}
                                            error={errors.email}
                                            labelClassName="block text-sm font-inter-display font-medium text-text-primary mb-2"
                                            inputClassName={`${inputBase} ${errors.email ? inputError : inputNormal}`}
                                        />

                                        <IndianPhoneField
                                            label="Mobile Number"
                                            name="mobileNumber"
                                            register={register}
                                            error={errors.mobileNumber}
                                            labelClassName="block text-sm font-inter-display font-medium text-text-primary mb-2"
                                            inputClassName={`flex-1 ${inputBase} ${errors.mobileNumber ? inputError : inputNormal}`}
                                            prefixClassName={`shrink-0 px-4 py-3 rounded-lg border bg-white/95 text-text-primary font-inter-display font-medium text-base ${errors.mobileNumber ? inputError : inputNormal}`}
                                        />
                                    </div>

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

                                    <div className="space-y-4 pt-2 border-t border-neutral-200 border-dashed">
                                        <p className="pt-4 text-sm font-inter-display text-text-primary/70">
                                            Select at least one program or boot camp <span className="text-red-500">*</span>
                                        </p>

                                        <div className="space-y-2">
                                            <label className="block text-sm font-inter-display font-medium text-text-primary">
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

                                        <div className="space-y-2">
                                            <label className="block text-sm font-inter-display font-medium text-text-primary">
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
                                        inputClassName="bg-white/95 focus:ring-primary/20 focus:border-primary"
                                    />

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

            <FormSuccessPopup
                open={showSuccessPopup}
                onClose={() => setShowSuccessPopup(false)}
                title={FORM_FEEDBACK_COPY.requestCallback.successTitle}
                message={FORM_FEEDBACK_COPY.requestCallback.successMessage}
            >
                <h3 className="mb-4 text-lg font-inter-display font-semibold text-text-primary">
                    What Happens Next
                </h3>
                {whatHappensNextContent}
            </FormSuccessPopup>
            <FormErrorPopup
                open={showErrorPopup}
                onClose={() => setShowErrorPopup(false)}
                title={FORM_FEEDBACK_COPY.requestCallback.errorTitle}
                message={errorMessage}
            />
        </section>
    );
};

export default RequestCallbackForm;
