import { assetSrc } from "@/lib/utils";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, UseFormRegister } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSearchParams } from "@/lib/react-router";
import type { Hero } from "@/interface/program";
import { ShinyButton } from "@/components/ui/shiny-button";
import BootcampPriceBlock from "@/components/ui/BootcampPriceBlock";
import {
  DateTimePickerField,
  defaultDateTimeLocal,
} from "@/components/ui/DateTimePickerField";
import { FormSuccessPopup } from "@/components/ui/FormSuccessPopup";
import { FormErrorPopup } from "@/components/ui/FormErrorPopup";
import { useFormSubmitFeedback } from "@/hooks/useFormSubmitFeedback";
import { getCheckoutFeedbackCopy } from "@/constants/formFeedbackCopy";
import {
  formatIndianMobileE164,
  zodEmail,
  zodIndianMobile,
  zodOptionalIndianMobile,
} from "@/lib/formValidation";
import { EmailField } from "@/components/ui/EmailField";
import { IndianPhoneField } from "@/components/ui/IndianPhoneField";

const parsePriceValue = (value: string) => Number(value.replace(/[^\d]/g, "")) || 0;

const normalizeCurrency = (currency: string) =>
  currency === "₹" || currency === "INR" ? "INR" : currency;

// Zod validation schema
const checkoutFormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  age: z
    .number()
    .min(13, "Age must be at least 13")
    .max(100, "Age must be less than 100"),
  gender: z.enum(["male", "female", "other"], {
    message: "Please select a gender",
  }),
  occupation: z.enum(["Student", "Working", "Gap Year", "Freelancer", "Other"], {
    message: "Please select an occupation",
  }),
  preferredCallTime: z.string().min(1, "Preferred callback time is required"),
  phoneNumber: zodIndianMobile(),
  secondaryPhoneNumber: zodOptionalIndianMobile(),
  address: z.string().min(10, "Address must be at least 10 characters"),
  email: zodEmail(),
  collegeSchool: z.string().min(1, "Please enter your college/school name"),
  graduationYear: z
    .number()
    .min(1990, "Graduation year must be 1990 or later")
    .max(new Date().getFullYear() + 10, "Graduation year cannot be more than 10 years in the future"),
});

// Year Picker Component
interface YearPickerProps {
  label: string;
  value?: number;
  onChange: (year: number) => void;
  error?: string;
  minYear: number;
  maxYear: number;
  register: UseFormRegister<z.infer<typeof checkoutFormSchema>>;
}

const YearPicker = ({
  label,
  value,
  onChange,
  error,
  minYear,
  maxYear,
  register,
}: YearPickerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Generate years array
  const years = Array.from({ length: maxYear - minYear + 1 }, (_, i) => minYear + i).reverse();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Scroll to selected year when dropdown opens
  useEffect(() => {
    if (isOpen && value) {
      const selectedElement = document.getElementById(`year-${value}`);
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: "center", behavior: "smooth" });
      }
    }
  }, [isOpen, value]);

  const handleYearSelect = (year: number) => {
    onChange(year);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <label className="block text-text-primary text-sm font-medium font-montserrat mb-2">
        {label} <span className="text-red-500">*</span>
      </label>
      <div className="relative">
        {/* Hidden input for form validation */}
        <input
          type="hidden"
          {...register("graduationYear", { valueAsNumber: true })}
          value={value || ""}
        />

        {/* Year Picker Button */}
        <button
          ref={buttonRef}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full px-4 py-3 bg-white border rounded-lg text-text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors font-montserrat text-left flex items-center justify-between ${error
            ? "border-red-300 focus:border-red-500"
            : "border-gray-300 focus:border-primary"
            } ${!value ? "text-gray-400" : ""}`}
        >
          <span>{value ? value : "Select Year"}</span>
          <svg
            className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              ref={dropdownRef}
              className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-64 overflow-hidden"
            >
              <div className="overflow-y-auto max-h-64 custom-scrollbar">
                {years.map((year) => (
                  <button
                    key={year}
                    id={`year-${year}`}
                    type="button"
                    onClick={() => handleYearSelect(year)}
                    className={`w-full px-4 py-2.5 text-left hover:bg-primary/10 transition-colors font-montserrat ${value === year
                      ? "bg-primary/20 text-primary font-semibold"
                      : "text-text-primary"
                      }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <p className="mt-1 text-xs text-gray-500 font-montserrat">
        Select year between {minYear} and {maxYear}
      </p>
      {error && (
        <p className="mt-1 text-sm text-red-500 font-montserrat">{error}</p>
      )}
    </div>
  );
};

interface CheckoutFormProps {
  courseData: Hero;
  courseTitle: string;
  pricing: {
    baseAmount: number;
    platformFees: number;
    gst: number;
    totalAmount: number;
    currency: string;
  };
  onBack: () => void;
  courseSlug?: string;
  formType?: string;
  onSuccess?: () => void;
}

const CheckoutForm = ({
  courseData,
  courseTitle,
  onBack,
  courseSlug: propSlug,
  formType = "enrollment-modal",
  onSuccess,
}: Omit<CheckoutFormProps, 'pricing'>) => {
  const [searchParams] = useSearchParams();
  // Use prop slug if provided (for modal), otherwise fall back to search params (for payment portal page)
  const courseSlug = propSlug || searchParams.get("slug") || "";
  const providedCourseLink = searchParams.get("courseLink") || searchParams.get("courseUrl") || "";
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    showSuccessPopup,
    setShowSuccessPopup,
    showErrorPopup,
    setShowErrorPopup,
    errorMessage,
    submitForm,
  } = useFormSubmitFeedback();
  const feedbackCopy = getCheckoutFeedbackCopy(formType);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<z.infer<typeof checkoutFormSchema>>({
    resolver: zodResolver(checkoutFormSchema),
    mode: "onChange",
    defaultValues: {
      preferredCallTime: defaultDateTimeLocal(),
    },
  });

  const graduationYear = watch("graduationYear");

  // Convert graduation year string to number for validation
  useEffect(() => {
    if (graduationYear && typeof graduationYear === "string") {
      const yearNum = parseInt(graduationYear, 10);
      if (!isNaN(yearNum)) {
        setValue("graduationYear", yearNum, { shouldValidate: true });
      }
    }
  }, [graduationYear, setValue]);

  const onSubmit = async (data: z.infer<typeof checkoutFormSchema>) => {
    setIsSubmitting(true);

    console.log(data);
    const normalizedSlug = courseSlug
      .replace(/^\/+|\/+$/g, "")
      .replace(/^cyber-defense-programs\/bootcamp\//, "")
      .replace(/^cyber-defense-programs\//, "")
      .replace(/^bootcamp\//, "");
    const isBootcampEnrollment = formType === "bootcamp-enrollment";
    const coursePath = isBootcampEnrollment
      ? `/cyber-defense-programs/bootcamp/${normalizedSlug}`
      : `/cyber-defense-programs/${normalizedSlug}`;
    const courseLink =
      providedCourseLink ||
      (normalizedSlug && typeof window !== "undefined"
        ? `${window.location.origin}${coursePath}`
        : "");

    try {
      await submitForm(
        {
          formType,
          fullName: data.fullName,
          email: data.email,
          phoneNumber: formatIndianMobileE164(data.phoneNumber),
          secondaryPhoneNumber: data.secondaryPhoneNumber
            ? formatIndianMobileE164(data.secondaryPhoneNumber)
            : "",
          age: data.age.toString(),
          gender: data.gender,
          occupation: data.occupation,
          preferredCallTime: data.preferredCallTime,
          address: data.address,
          collegeSchool: data.collegeSchool,
          graduationYear: data.graduationYear.toString(),
          courseSlug: courseSlug || "",
          courseLink,
        },
        { successMessage: feedbackCopy.successMessage },
      );
    } catch {
      // Error popup is handled by useFormSubmitFeedback.
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get current year for graduation year validation
  const currentYear = new Date().getFullYear();
  const originalPrice = parsePriceValue(courseData.pricing.originalPrice);
  const launchPrice = parsePriceValue(courseData.pricing.currentPrice);
  const currency = normalizeCurrency(courseData.pricing.currency);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="p-6 sm:p-8 md:p-10"
      data-lenis-prevent
    >
      {/* Header */}
      <div className="mb-8">
        <button
          type="button"
          onClick={onBack}
          className="mb-6 hidden items-center gap-2 text-sm font-montserrat font-medium text-gray-600 transition-colors hover:text-text-primary sm:flex sm:text-base"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Overview
        </button>

        <div>
          <h2 className="text-2xl sm:text-3xl font-montserrat font-semibold tracking-tight text-text-primary mb-2">
            Program Details
          </h2>
          <div className="w-12 h-0.5 bg-primary"></div>
        </div>
      </div>

      {/* Course Summary */}
      <div className="mb-8 pb-6 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full sm:w-40 md:w-48 h-auto overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center p-3 shrink-0">
            <img
              src={assetSrc(courseData.image.src)}
              alt={courseData.image.alt}
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-inter-display font-medium text-text-primary mb-2 leading-tight">
              {courseTitle}
            </h3>
            {courseData.subheading && (
              <p className="text-primary text-base font-inter-display font-medium mb-3">
                {courseData.subheading}
              </p>
            )}
            {originalPrice > 0 && launchPrice > 0 && (
              <BootcampPriceBlock
                originalPrice={originalPrice}
                launchPrice={launchPrice}
                currency={currency}
                variant="strip"
              />
            )}
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div>

        {/* Form Fields */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-text-primary text-sm font-medium font-montserrat mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register("fullName")}
              className={`w-full px-4 py-3 bg-white border rounded-lg text-text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors font-montserrat ${errors.fullName
                ? "border-red-300 focus:border-red-500"
                : "border-gray-300 focus:border-primary"
                }`}
              placeholder="Enter Full Name"
            />
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-500 font-montserrat">
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Age */}
          <div>
            <label className="block text-text-primary text-sm font-medium font-montserrat mb-2">
              Age <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              {...register("age", { valueAsNumber: true })}
              className={`w-full px-4 py-3 bg-white border rounded-lg text-text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors font-montserrat ${errors.age
                ? "border-red-300 focus:border-red-500"
                : "border-gray-300 focus:border-primary"
                }`}
              placeholder="Enter Age"
              min="13"
              max="100"
            />
            {errors.age && (
              <p className="mt-1 text-sm text-red-500 font-montserrat">
                {errors.age.message}
              </p>
            )}
          </div>

          {/* Gender */}
          <div>
            <label className="block text-text-primary text-sm font-medium font-montserrat mb-2">
              Gender <span className="text-red-500">*</span>
            </label>
            <select
              {...register("gender")}
              className={`w-full px-4 py-3 bg-white border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors font-montserrat appearance-none cursor-pointer ${errors.gender
                ? "border-red-300 focus:border-red-500"
                : "border-gray-300 focus:border-primary"
                }`}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && (
              <p className="mt-1 text-sm text-red-500 font-montserrat">
                {errors.gender.message}
              </p>
            )}
          </div>

          {/* Occupation */}
          <div>
            <label className="block text-text-primary text-sm font-medium font-montserrat mb-2">
              Occupation <span className="text-red-500">*</span>
            </label>
            <select
              {...register("occupation")}
              className={`w-full px-4 py-3 bg-white border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors font-montserrat appearance-none cursor-pointer ${errors.occupation
                ? "border-red-300 focus:border-red-500"
                : "border-gray-300 focus:border-primary"
                }`}
            >
              <option value="">Select Occupation</option>
              <option value="Student">Student</option>
              <option value="Working">Working</option>
              <option value="Gap Year">Gap Year</option>
              <option value="Freelancer">Freelancer</option>
              <option value="Other">Other</option>
            </select>
            {errors.occupation && (
              <p className="mt-1 text-sm text-red-500 font-montserrat">
                {errors.occupation.message}
              </p>
            )}
          </div>

          <DateTimePickerField
            label="When should we call you?"
            name="preferredCallTime"
            register={register}
            error={errors.preferredCallTime}
            labelClassName="block text-text-primary text-sm font-medium font-montserrat mb-2"
            inputClassName="bg-white font-montserrat focus:ring-primary/20"
          />

          <IndianPhoneField
            label="Phone Number (Primary)"
            name="phoneNumber"
            register={register}
            error={errors.phoneNumber}
            showHint={false}
            labelClassName="block text-text-primary text-sm font-medium font-montserrat mb-2"
            prefixClassName={`shrink-0 inline-flex items-center px-3 py-3 rounded-lg border bg-white text-text-primary font-montserrat font-medium text-base ${errors.phoneNumber ? "border-red-300" : "border-gray-300"}`}
            inputClassName={`flex-1 px-4 py-3 bg-white border rounded-lg text-text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors font-montserrat ${errors.phoneNumber ? "border-red-300 focus:border-red-500" : "border-gray-300 focus:border-primary"}`}
            errorClassName="mt-1 text-sm text-red-500 font-montserrat"
          />

          <IndianPhoneField
            label="Phone Number (Secondary)"
            name="secondaryPhoneNumber"
            register={register}
            error={errors.secondaryPhoneNumber}
            required={false}
            showHint={false}
            placeholder="Optional alternate number"
            labelClassName="block text-text-primary text-sm font-medium font-montserrat mb-2"
            prefixClassName={`shrink-0 inline-flex items-center px-3 py-3 rounded-lg border bg-white text-text-primary font-montserrat font-medium text-base ${errors.secondaryPhoneNumber ? "border-red-300" : "border-gray-300"}`}
            inputClassName={`flex-1 px-4 py-3 bg-white border rounded-lg text-text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors font-montserrat ${errors.secondaryPhoneNumber ? "border-red-300 focus:border-red-500" : "border-gray-300 focus:border-primary"}`}
            errorClassName="mt-1 text-sm text-red-500 font-montserrat"
          />

          {/* Address */}
          <div>
            <label className="block text-text-primary text-sm font-medium font-montserrat mb-2">
              Address <span className="text-red-500">*</span>
            </label>
            <textarea
              {...register("address")}
              rows={3}
              className={`w-full px-4 py-3 bg-white border rounded-lg text-text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors font-montserrat resize-none ${errors.address
                ? "border-red-300 focus:border-red-500"
                : "border-gray-300 focus:border-primary"
                }`}
              placeholder="Enter your complete address"
            />
            {errors.address && (
              <p className="mt-1 text-sm text-red-500 font-montserrat">
                {errors.address.message}
              </p>
            )}
          </div>

          <EmailField
            label="Email Address"
            name="email"
            register={register}
            error={errors.email}
            labelClassName="block text-text-primary text-sm font-medium font-montserrat mb-2"
            inputClassName={`w-full px-4 py-3 bg-white border rounded-lg text-text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors font-montserrat ${errors.email ? "border-red-300 focus:border-red-500" : "border-gray-300 focus:border-primary"}`}
            errorClassName="mt-1 text-sm text-red-500 font-montserrat"
            placeholder="Enter Email Address"
          />

          {/* College / School */}
          <div>
            <label className="block text-text-primary text-sm font-medium font-montserrat mb-2">
              College / School <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register("collegeSchool")}
              className={`w-full px-4 py-3 bg-white border rounded-lg text-text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors font-montserrat ${errors.collegeSchool
                ? "border-red-300 focus:border-red-500"
                : "border-gray-300 focus:border-primary"
                }`}
              placeholder="Enter College / School Name"
            />
            {errors.collegeSchool && (
              <p className="mt-1 text-sm text-red-500 font-montserrat">
                {errors.collegeSchool.message}
              </p>
            )}
          </div>

          {/* Graduation Year */}
          <YearPicker
            label="Graduation Year"
            value={graduationYear}
            onChange={(year) => setValue("graduationYear", year, { shouldValidate: true })}
            error={errors.graduationYear?.message}
            minYear={1990}
            maxYear={currentYear + 10}
            register={register}
          />

          <ShinyButton
            type="submit"
            disabled={isSubmitting}
            className="mt-6 w-full rounded-lg! font-montserrat! text-base font-medium shadow-lg! active:scale-95! disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Submit Details"}
          </ShinyButton>
        </form>
      </div>

      <FormSuccessPopup
        open={showSuccessPopup}
        onClose={() => {
          setShowSuccessPopup(false);
          onSuccess?.();
        }}
        title={feedbackCopy.successTitle}
        message={feedbackCopy.successMessage}
      />

      <FormErrorPopup
        open={showErrorPopup}
        onClose={() => setShowErrorPopup(false)}
        title={feedbackCopy.errorTitle}
        message={errorMessage}
      />
    </motion.div>
  );
};

export default CheckoutForm;
