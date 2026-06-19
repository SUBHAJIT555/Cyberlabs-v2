"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate, useParams } from "@/lib/react-router";
import BootcampDetailHero from "@/components/BootcampDetailHero";
import BootcampEnrollmentModal from "@/components/BootcampEnrollmentModal";
import BootcampModuleChart from "@/components/bootcamp/BootcampModuleChart";
import BootcampDeepDive from "@/components/bootcamp/BootcampDeepDive";
import BootcampProgramTeaches from "@/components/bootcamp/BootcampProgramTeaches";
import BootcampLaymanStory from "@/components/bootcamp/BootcampLaymanStory";
import BootcampCareerOpportunity from "@/components/bootcamp/BootcampCareerOpportunity";
import BootcampWhatsNew from "@/components/bootcamp/BootcampWhatsNew";
import CallbackModal from "@/components/CallbackModal";
import { ShinyButton } from "@/components/ui/shiny-button";
import FloatingBackButton from "@/components/ui/FloatingBackButton";
import Portal from "@/components/ui/Portal";
import { useBootcamps } from "@/hooks/useBootcamps";
import { useFloatingBottomBar } from "@/contexts/FloatingBottomBarContext";
import { useFooterVisibility } from "@/hooks/useFooterVisibility";
import { useLenis } from "@/hooks/useLenis";

// const dashedGridStyle = {
//     backgroundImage: `
//         linear-gradient(to right, #e2e8f0 1px, transparent 1px),
//         linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
//     `,
//     backgroundSize: "5px 5px",
//     backgroundPosition: "0 0, 0 0",
//     maskImage: `
//         repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
//         repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
//         radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
//     `,
//     WebkitMaskImage: `
//         repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
//         repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
//         radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
//     `,
//     maskComposite: "intersect" as const,
//     WebkitMaskComposite: "source-in" as const,
// };

const BootcampDetails = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const lenis = useLenis();
    const { getBootcampBySlug } = useBootcamps();
    const bootcamp = getBootcampBySlug(slug as string);

    const [showFloatingButton, setShowFloatingButton] = useState(false);
    const [showBackButton, setShowBackButton] = useState(false);
    const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);
    const [isEnrollmentModalOpen, setIsEnrollmentModalOpen] = useState(false);
    const isFooterVisible = useFooterVisibility();
    const { setIsActive: setFloatingBottomBarActive } = useFloatingBottomBar();

    useEffect(() => {
        if (!bootcamp) {
            navigate("/cyber-defense-programs#elite-bootcamps", { replace: true });
        }
    }, [bootcamp, navigate]);

    useEffect(() => {
        if (!lenis) {
            setShowBackButton(false);
            setShowFloatingButton(false);
            return;
        }

        const viewportHeight = typeof window !== "undefined" ? window.innerHeight : 800;
        const scrollThreshold = viewportHeight;

        const handleScroll = ({ scroll }: { scroll: number }) => {
            const show = scroll > scrollThreshold && !isFooterVisible;
            setShowBackButton(show);
            setShowFloatingButton(show);
        };

        handleScroll({ scroll: lenis.scroll || 0 });
        lenis.on("scroll", handleScroll);
        return () => lenis.off("scroll", handleScroll);
    }, [lenis, isFooterVisible]);

    useEffect(() => {
        setFloatingBottomBarActive(showFloatingButton);
        return () => setFloatingBottomBarActive(false);
    }, [showFloatingButton, setFloatingBottomBarActive]);

    if (!bootcamp) return null;

    return (
        <>
            {/* <div className="fixed inset-0 h-screen w-full z-0 bg-white pointer-events-none" style={dashedGridStyle} /> */}

            <div className="relative z-10">
                <BootcampDetailHero onEnroll={() => setIsEnrollmentModalOpen(true)} />
                <BootcampModuleChart />
                <BootcampDeepDive />
                <BootcampProgramTeaches />
                <BootcampLaymanStory />
                <BootcampCareerOpportunity />
                <BootcampWhatsNew />

                <Portal>
                    <AnimatePresence>
                        {showFloatingButton && (
                            <motion.div
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 100, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="fixed bottom-4 sm:bottom-6 left-1/2 z-1000 flex w-[calc(100%-2rem)] max-w-[95vw] -translate-x-1/2 transform flex-row items-center gap-3 rounded-lg border border-neutral-300 bg-neutral-200/20 p-1.5 text-background shadow-lg backdrop-blur-sm sm:w-auto sm:min-w-[400px] sm:max-w-[600px] sm:p-2"
                            >
                                <ShinyButton
                                    type="button"
                                    size="compact"
                                    onClick={() => setIsEnrollmentModalOpen(true)}
                                    className="min-w-0 flex-1 rounded-lg! font-montserrat! text-xs font-semibold whitespace-nowrap shadow-lg! active:scale-95! sm:text-sm"
                                >
                                    Enroll Now
                                </ShinyButton>
                                <ShinyButton
                                    type="button"
                                    variant="light"
                                    size="compact"
                                    onClick={() => setIsCallbackModalOpen(true)}
                                    className="min-w-0 flex-1 rounded-lg! font-montserrat! text-xs font-medium whitespace-nowrap shadow-lg! active:scale-95! sm:text-sm"
                                >
                                    Request Callback
                                </ShinyButton>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <FloatingBackButton
                        isVisible={showBackButton}
                        onClick={() => navigate(-1)}
                    />
                </Portal>

                <CallbackModal
                    isOpen={isCallbackModalOpen}
                    onClose={() => setIsCallbackModalOpen(false)}
                    bootcampSlug={bootcamp.slug}
                />

                <BootcampEnrollmentModal
                    isOpen={isEnrollmentModalOpen}
                    onClose={() => setIsEnrollmentModalOpen(false)}
                    slug={bootcamp.slug}
                />
            </div>
        </>
    );
};

export default BootcampDetails;
