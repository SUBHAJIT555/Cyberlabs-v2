import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, UseFormRegister } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSearchParams } from "react-router";
import type { Hero } from "@/interface/program";
import { MAIL_API_URL } from "@/lib/api";

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
  preferredCallTime: z.string().min(1, "Please select a preferred call time"),
  phoneNumber: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[0-9]+$/, "Phone number must contain only digits"),
  secondaryPhoneNumber: z.string().optional().or(z.literal("")),
  address: z.string().min(10, "Address must be at least 10 characters"),
  email: z.string().email("Please enter a valid email address"),
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
  onSuccess?: () => void;
}

const CheckoutForm = ({
  courseData,
  courseTitle,
  onBack,
  courseSlug: propSlug,
  onSuccess,
}: Omit<CheckoutFormProps, 'pricing'>) => {
  const [searchParams] = useSearchParams();
  // Use prop slug if provided (for modal), otherwise fall back to search params (for payment portal page)
  const courseSlug = propSlug || searchParams.get("slug") || "";
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<z.infer<typeof checkoutFormSchema>>({
    resolver: zodResolver(checkoutFormSchema),
    mode: "onChange",
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
    setSubmitStatus(null);

    try {
      const response = await fetch(MAIL_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "enrollment-modal",
          fullName: data.fullName,
          email: data.email,
          phoneNumber: data.phoneNumber,
          secondaryPhoneNumber: data.secondaryPhoneNumber || "",
          age: data.age.toString(),
          gender: data.gender,
          occupation: data.occupation,
          preferredCallTime: data.preferredCallTime,
          address: data.address,
          collegeSchool: data.collegeSchool,
          graduationYear: data.graduationYear.toString(),
          courseSlug: courseSlug || "",
        }),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result?.error ?? "Submission failed");
      }

      setSubmitStatus("success");

      // Call onSuccess callback if provided (e.g., to close modal)
      if (onSuccess) {
        setTimeout(() => {
          onSuccess();
        }, 2000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get current year for graduation year validation
  const currentYear = new Date().getFullYear();

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
          className="mb-6 flex items-center gap-2 text-sm sm:text-base font-montserrat font-medium text-gray-600 hover:text-text-primary transition-colors"
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
              src={courseData.image.src}
              alt={courseData.image.alt}
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-inter-display font-medium text-text-primary mb-2 leading-tight">
              {courseTitle}
            </h3>
            <p className="text-primary text-base font-inter-display font-medium">
              {courseData.subheading}
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div>

        {/* Form Fields */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Success Message */}
          {submitStatus === "success" && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-700 text-sm font-montserrat">
              Thank you! We've received your enrollment request and will contact you soon.
            </div>
          )}

          {/* Error Message */}
          {submitStatus === "error" && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-600 text-sm font-montserrat">
              Something went wrong. Please try again later.
            </div>
          )}

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

          {/* Preferred Call Time */}
          <div>
            <label className="block text-text-primary text-sm font-medium font-montserrat mb-2">
              Preferred Call Time <span className="text-red-500">*</span>
            </label>
            <select
              {...register("preferredCallTime")}
              className={`w-full px-4 py-3 bg-white border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors font-montserrat appearance-none cursor-pointer ${errors.preferredCallTime
                ? "border-red-300 focus:border-red-500"
                : "border-gray-300 focus:border-primary"
                }`}
            >
              <option value="">Select Preferred Call Time</option>
              <option value="Morning (9 AM - 12 PM)">
                Morning (9 AM - 12 PM)
              </option>
              <option value="Afternoon (12 PM - 5 PM)">
                Afternoon (12 PM - 5 PM)
              </option>
              <option value="Evening (5 PM - 9 PM)">
                Evening (5 PM - 9 PM)
              </option>
            </select>
            {errors.preferredCallTime && (
              <p className="mt-1 text-sm text-red-500 font-montserrat">
                {errors.preferredCallTime.message}
              </p>
            )}
          </div>

          {/* Primary Phone Number */}
          <div>
            <label className="block text-text-primary text-sm font-medium font-montserrat mb-2">
              Phone Number (Primary) <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              {...register("phoneNumber")}
              className={`w-full px-4 py-3 bg-white border rounded-lg text-text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors font-montserrat ${errors.phoneNumber
                ? "border-red-300 focus:border-red-500"
                : "border-gray-300 focus:border-primary"
                }`}
              placeholder="Enter Primary Phone Number"
            />
            {errors.phoneNumber && (
              <p className="mt-1 text-sm text-red-500 font-montserrat">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>

          {/* Secondary Phone Number */}
          <div>
            <label className="block text-text-primary text-sm font-medium font-montserrat mb-2">
              Phone Number (Secondary)
            </label>
            <input
              type="tel"
              {...register("secondaryPhoneNumber")}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors font-montserrat"
              placeholder="Enter Secondary Phone Number (Optional)"
            />
          </div>

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

          {/* Email */}
          <div>
            <label className="block text-text-primary text-sm font-medium font-montserrat mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              {...register("email")}
              className={`w-full px-4 py-3 bg-white border rounded-lg text-text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors font-montserrat ${errors.email
                ? "border-red-300 focus:border-red-500"
                : "border-gray-300 focus:border-primary"
                }`}
              placeholder="Enter Email Address"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500 font-montserrat">
                {errors.email.message}
              </p>
            )}
          </div>

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

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/50 disabled:cursor-not-allowed text-white py-4 px-6 rounded-lg font-medium text-base font-montserrat transition-colors mt-6"
          >
            {isSubmitting ? "Submitting..." : "Submit Details"}
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default CheckoutForm;
