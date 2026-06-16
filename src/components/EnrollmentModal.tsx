import { assetSrc } from "@/lib/utils";
import { useState, useEffect } from "react";
import Portal from "@/components/ui/Portal";
import { motion, AnimatePresence } from "framer-motion";
import { useCourses } from "@/hooks/useCourses";
import CheckoutForm from "./CheckoutForm";
import { ShinyButton } from "@/components/ui/shiny-button";
import { FaCheckCircle } from "react-icons/fa";
import { CONTACT } from "@/constants/contactInfo";
import { crosshatchBgStyle } from "@/constants/bootcampStyles";
import BootcampPriceBlock from "@/components/ui/BootcampPriceBlock";


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

    if (typeof document === "undefined") {
        return null;
    }

    return (
        <Portal>
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="fixed inset-0 z-10049 bg-black/30 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96, y: 20 }}
                        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-10050 flex items-center justify-center overflow-hidden p-4 sm:items-start sm:overflow-y-auto sm:p-6 sm:pt-24 md:p-8"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative mx-auto flex w-full max-w-2xl max-h-[calc(100dvh-2rem)] flex-col overflow-hidden text-text-primary shadow-xl border border-neutral-200 ring ring-neutral-200 ring-offset-0 sm:max-h-[calc(100vh-6rem)] sm:ring-offset-4 md:ring-offset-8 rounded-xl bg-white">
                            <div
                                className="absolute inset-0 z-0 pointer-events-none"
                                style={crosshatchBgStyle}
                            />

                            {/* Mobile fixed action bar */}
                            <div className="relative z-30 flex shrink-0 items-center justify-between border-b border-neutral-200 bg-white/95 px-4 py-3 backdrop-blur-sm sm:hidden">
                                {showCheckoutForm ? (
                                    <button
                                        type="button"
                                        onClick={handleBackToCheckout}
                                        className="flex items-center gap-1.5 text-sm font-montserrat font-medium text-gray-600 hover:text-text-primary transition-colors"
                                    >
                                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                        Back to Overview
                                    </button>
                                ) : (
                                    <span className="h-9 w-9" aria-hidden />
                                )}
                                <button
                                    type="button"
                                    onClick={handleClose}
                                    className="rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700"
                                    aria-label="Close modal"
                                >
                                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* Desktop close button */}
                            <button
                                type="button"
                                onClick={handleClose}
                                className="absolute top-4 right-4 z-50 hidden rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 sm:block"
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
                            <div className="relative z-10 min-h-0 flex-1 overflow-y-auto">
                                {!showCheckoutForm ? (
                                    <div className="p-6 sm:p-8 md:p-10">
                                        {/* Header */}
                                        <div className="mb-8">
                                            <h2 className="text-2xl sm:text-3xl font-montserrat font-semibold tracking-tight text-text-primary mb-2  w-fit">
                                                Program Overview
                                            </h2>
                                            <div className="w-12 h-0.5 bg-primary"></div>
                                        </div>

                                        {/* Course Info */}
                                        <div className="mb-10">
                                            <div className="flex flex-col sm:flex-row gap-6 mb-6">
                                                {/* Course Image */}
                                                <div className="w-full sm:w-40 md:w-48 h-auto overflow-hidden flex items-center justify-center p-3 shrink-0 ring ring-neutral-300 rounded-xl bg-white">
                                                    <img
                                                        src={assetSrc(heroData.image.src)}
                                                        alt={heroData.image.alt}
                                                        className="w-full h-auto object-contain rounded-lg"
                                                    />
                                                </div>

                                                {/* Course Details */}
                                                <div className="flex-1">
                                                    <h3 className="text-xl sm:text-2xl font-inter-display font-medium text-text-primary mb-2 leading-tight">
                                                        {course?.title || heroData.title}
                                                    </h3>
                                                    {heroData.subheading && (
                                                        <p className="text-primary text-base sm:text-lg font-inter-display font-medium mb-3">
                                                            {heroData.subheading}
                                                        </p>
                                                    )}
                                                    {course && course.originalPrice > 0 && course.currentPrice > 0 && (
                                                        <BootcampPriceBlock
                                                            originalPrice={course.originalPrice}
                                                            launchPrice={course.currentPrice}
                                                            currency="INR"
                                                            variant="strip"
                                                        />
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Support Info */}
                                        <div className="mb-8">
                                            <h3 className="text-lg font-inter-display bg-white w-fit font-medium text-text-primary mb-4">
                                                What's Included
                                            </h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                                <div className="flex items-start gap-3 p-4 border border-neutral-300 rounded-lg bg-white ring ring-neutral-300 ring-offset-2 md:ring-offset-4">
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
                                                <div className="flex items-start gap-3 p-4 border border-neutral-300 rounded-lg bg-white ring ring-neutral-300 ring-offset-2 md:ring-offset-4">
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
                                                <div className="flex items-start gap-3 p-4 border border-neutral-300 rounded-lg bg-white ring ring-neutral-300 ring-offset-2 md:ring-offset-4">
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

                                        <ShinyButton
                                            type="button"
                                            onClick={handleProceedToCheckout}
                                            className="w-full rounded-lg! font-montserrat! text-base font-medium shadow-lg! active:scale-95!"
                                        >
                                            Proceed to Enrollment
                                        </ShinyButton>
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
        </Portal>
    );
};

export default EnrollmentModal;
