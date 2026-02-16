import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCourses } from "@/hooks/useCourses";
import CheckoutForm from "./CheckoutForm";
import { FaCheckCircle } from "react-icons/fa";
import { CONTACT } from "@/constants/contactInfo";


interface EnrollmentModalProps {
    isOpen: boolean;
    onClose: () => void;
    slug: string;
}

const EnrollmentModal = ({ isOpen, onClose, slug }: EnrollmentModalProps) => {
    const { getCourseHeroBySlug, getCourses } = useCourses();
    const heroData = getCourseHeroBySlug(slug);
    const courses = getCourses();
    const course = courses.find((c) => c.slug === slug);
    const [showCheckoutForm, setShowCheckoutForm] = useState(false);

    // Reset form state when modal opens/closes
    useEffect(() => {
        if (!isOpen) {
            setShowCheckoutForm(false);
        }
    }, [isOpen]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!heroData) {
        return null;
    }

    // const currency = heroData.pricing.currency || "₹";

    const handleProceedToCheckout = () => {
        setShowCheckoutForm(true);
    };

    const handleBackToCheckout = () => {
        setShowCheckoutForm(false);
    };

    const handleClose = () => {
        setShowCheckoutForm(false);
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-9999"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96, y: 20 }}
                        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-10000 flex items-center justify-center p-4 sm:p-6 md:p-8"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative w-full max-w-2xl max-h-[90vh] text-text-primary overflow-hidden shadow-xl border border-neutral-300 border-dashed"
                            style={{
                                background:
                                    "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                            }}
                        >
                            {/* Close Button */}
                            <button
                                onClick={handleClose}
                                className="absolute top-4 right-4 z-50 p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors"
                                aria-label="Close modal"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>

                            {/* Scrollable Content */}
                            <div className="overflow-y-auto max-h-[90vh]">
                                {!showCheckoutForm ? (
                                    <div className="p-6 sm:p-8 md:p-10">
                                        {/* Header */}
                                        <div className="mb-8">
                                            <h2 className="text-2xl sm:text-3xl font-montserrat font-semibold tracking-tight text-text-primary mb-2 bg-white w-fit">
                                                Program Overview
                                            </h2>
                                            <div className="w-12 h-0.5 bg-primary"></div>
                                        </div>

                                        {/* Course Info */}
                                        <div className="mb-10">
                                            <div className="flex flex-col sm:flex-row gap-6 mb-6">
                                                {/* Course Image */}
                                                <div className="w-full sm:w-40 md:w-48 h-auto overflow-hidden flex items-center justify-center p-3 shrink-0">
                                                    <img
                                                        src={heroData.image.src}
                                                        alt={heroData.image.alt}
                                                        className="w-full h-auto object-contain"
                                                    />
                                                </div>

                                                {/* Course Details */}
                                                <div className="flex-1">
                                                    <h3 className="text-xl sm:text-2xl font-inter-display font-medium text-text-primary mb-2 leading-tight">
                                                        {course?.title || heroData.title}
                                                    </h3>
                                                    {heroData.subheading && (
                                                        <p className="text-primary text-base sm:text-lg font-inter-display font-medium mb-4">
                                                            {heroData.subheading}
                                                        </p>
                                                    )}
                                                    {/* <div className="mt-4">
                                                        <span className="text-sm md:text-base text-text-primary font-medium font-inter-display">Price</span>
                                                        <p className="text-3xl sm:text-4xl font-inter-display font-medium text-primary mt-1">
                                                            {currency} {heroData.pricing.currentPrice}
                                                        </p>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Support Info */}
                                        <div className="mb-8">
                                            <h3 className="text-lg font-inter-display bg-white w-fit font-medium text-text-primary mb-4">
                                                What's Included
                                            </h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                                <div className="flex items-start gap-3 p-4 border border-neutral-300 border-dashed bg-white">
                                                    <FaCheckCircle className="text-primary text-xl shrink-0 mt-0.5" />
                                                    <div>
                                                        <p className="text-sm md:text-base font-inter-display font-medium text-text-primary mb-1 leading-tight">
                                                            Lifetime Achievement
                                                        </p>
                                                        <p className="text-xs md:text-sm text-gray-600 font-inter-display leading-tight">
                                                            Track Your Progress
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-3 p-4 border border-neutral-300 border-dashed bg-white">
                                                    <FaCheckCircle className="text-primary text-xl shrink-0 mt-0.5" />
                                                    <div>
                                                        <p className="text-sm md:text-base font-inter-display font-medium text-text-primary mb-1 leading-tight">
                                                            Support
                                                        </p>
                                                        <a href={`mailto:${CONTACT.supportEmail}`} className="text-xs md:text-sm text-gray-600 font-inter-display hover:text-primary transition-colors leading-tight">
                                                            <span className="underline underline-offset-2 decoration-1 decoration-gray-400 hover:decoration-primary">{CONTACT.supportEmail}</span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-3 p-4 border border-neutral-300 border-dashed bg-white">
                                                    <FaCheckCircle className="text-primary text-xl shrink-0 mt-0.5" />
                                                    <div>
                                                        <p className="text-sm md:text-base font-inter-display font-medium text-text-primary mb-1 leading-tight">
                                                            Certificate
                                                        </p>
                                                        <p className="text-xs md:text-sm text-gray-600 font-inter-display leading-tight">
                                                            Digital Credential Provided
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Proceed Button */}
                                        <button
                                            onClick={handleProceedToCheckout}
                                            className="w-full bg-primary hover:bg-primary/90 text-white py-4 px-6 rounded-lg font-montserrat font-medium text-base transition-colors"
                                        >
                                            Proceed to Enrollment
                                        </button>
                                    </div>
                                ) : (
                                    <CheckoutForm
                                        courseData={heroData}
                                        courseTitle={course?.title || heroData.title}
                                        onBack={handleBackToCheckout}
                                        courseSlug={slug}
                                        onSuccess={handleClose}
                                    />
                                )}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default EnrollmentModal;
