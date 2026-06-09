import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import CheckoutForm from "./CheckoutForm";
import { ShinyButton } from "@/components/ui/shiny-button";
import { useBootcamps } from "@/hooks/useBootcamps";
import { bootcampToHero } from "@/lib/bootcamp";
import { CONTACT } from "@/constants/contactInfo";

interface BootcampEnrollmentModalProps {
    isOpen: boolean;
    onClose: () => void;
    slug: string;
}

const BootcampEnrollmentModal = ({ isOpen, onClose, slug }: BootcampEnrollmentModalProps) => {
    const { getBootcampBySlug } = useBootcamps();
    const bootcamp = getBootcampBySlug(slug);
    const [showCheckoutForm, setShowCheckoutForm] = useState(false);

    useEffect(() => {
        if (!isOpen) {
            setShowCheckoutForm(false);
        }
    }, [isOpen]);

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

    if (!bootcamp) {
        return null;
    }

    const heroData = bootcampToHero(bootcamp);
    const formattedPrice = bootcamp.price.toLocaleString("en-IN");

    const handleClose = () => {
        setShowCheckoutForm(false);
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-9999"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.96, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96, y: 20 }}
                        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-10000 flex items-center justify-center p-4 sm:p-6 md:p-8"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative w-full max-w-2xl max-h-[90vh] text-text-primary overflow-hidden shadow-xl border border-neutral-200 ring ring-neutral-200 ring-offset-4 md:ring-offset-8 rounded-xl bg-white">
                            <div
                                className="absolute inset-0 z-0 pointer-events-none"
                                style={{
                                    backgroundImage: `
                                        linear-gradient(to right, #e2e8f0 1px, transparent 1px),
                                        linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
                                    `,
                                    backgroundSize: "1px 1px",
                                    backgroundPosition: "0 0, 0 0",
                                    maskImage: `
                                        repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
                                        repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
                                        radial-gradient(ellipse 70% 60% at 50% 0%, #000 40%, transparent 80%)
                                    `,
                                    WebkitMaskImage: `
                                        repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
                                        repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
                                        radial-gradient(ellipse 70% 60% at 50% 0%, #000 40%, transparent 80%)
                                    `,
                                    maskComposite: "intersect",
                                    WebkitMaskComposite: "source-in",
                                }}
                            />

                            <button
                                onClick={handleClose}
                                className="absolute top-4 right-4 z-50 p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors"
                                aria-label="Close modal"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="relative z-10 overflow-y-auto max-h-[90vh]">
                                {!showCheckoutForm ? (
                                    <div className="p-6 sm:p-8 md:p-10">
                                        <div className="mb-8">
                                            <h2 className="text-2xl sm:text-3xl font-montserrat font-semibold tracking-tight text-text-primary mb-2 w-fit">
                                                Boot Camp Overview
                                            </h2>
                                            <div className="w-12 h-0.5 bg-primary" />
                                        </div>

                                        <div className="mb-10">
                                            <div className="flex flex-col sm:flex-row gap-6 mb-6">
                                                <div className="w-full sm:w-40 md:w-48 h-auto overflow-hidden flex items-center justify-center p-3 shrink-0 ring ring-neutral-300 rounded-xl bg-white">
                                                    <img
                                                        src={bootcamp.image}
                                                        alt={bootcamp.title}
                                                        className="w-full h-auto object-contain rounded-lg"
                                                    />
                                                </div>

                                                <div className="flex-1">
                                                    <h3 className="text-xl sm:text-2xl font-inter-display font-medium text-text-primary mb-2 leading-tight">
                                                        {bootcamp.title}
                                                    </h3>
                                                    <p className="text-primary text-base sm:text-lg font-inter-display font-medium mb-2">
                                                        {bootcamp.duration} · {bootcamp.language}
                                                    </p>
                                                    {bootcamp.launchNote && (
                                                        <p className="text-sm font-inter-display text-primary/90 mb-3">
                                                            {bootcamp.launchNote}
                                                        </p>
                                                    )}
                                                    <p className="text-sm text-text-primary font-inter-display">
                                                        Price:{" "}
                                                        <span className="text-lg font-semibold text-primary">
                                                            ₹{formattedPrice} {bootcamp.currency}
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-8">
                                            <h3 className="text-lg font-inter-display bg-white w-fit font-medium text-text-primary mb-4">
                                                What&apos;s Included
                                            </h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                                <div className="flex items-start gap-3 p-4 border border-neutral-300 rounded-lg bg-white ring ring-neutral-300 ring-offset-2 md:ring-offset-4">
                                                    <FaCheckCircle className="text-primary text-xl shrink-0 mt-0.5" />
                                                    <div>
                                                        <p className="text-sm md:text-base font-inter-display font-medium text-text-primary mb-1 leading-tight">
                                                            Intensive Training
                                                        </p>
                                                        <p className="text-xs md:text-sm text-gray-600 font-inter-display leading-tight">
                                                            {bootcamp.duration} hands-on learning
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-3 p-4 border border-neutral-300 rounded-lg bg-white ring ring-neutral-300 ring-offset-2 md:ring-offset-4">
                                                    <FaCheckCircle className="text-primary text-xl shrink-0 mt-0.5" />
                                                    <div>
                                                        <p className="text-sm md:text-base font-inter-display font-medium text-text-primary mb-1 leading-tight">
                                                            Support
                                                        </p>
                                                        <a
                                                            href={`mailto:${CONTACT.supportEmail}`}
                                                            className="text-xs md:text-sm text-gray-600 font-inter-display hover:text-primary transition-colors leading-tight"
                                                        >
                                                            <span className="underline underline-offset-2 decoration-1 decoration-gray-400 hover:decoration-primary">
                                                                {CONTACT.supportEmail}
                                                            </span>
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
                                            onClick={() => setShowCheckoutForm(true)}
                                            className="w-full rounded-lg! font-montserrat! text-base font-medium shadow-lg! active:scale-95!"
                                        >
                                            Proceed to Enrollment
                                        </ShinyButton>
                                    </div>
                                ) : (
                                    <CheckoutForm
                                        courseData={heroData}
                                        courseTitle={bootcamp.title}
                                        onBack={() => setShowCheckoutForm(false)}
                                        courseSlug={`bootcamp/${bootcamp.slug}`}
                                        formType="bootcamp-enrollment"
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

export default BootcampEnrollmentModal;
