"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate, useParams } from "@/lib/react-router";
import ProgramHero from "@/components/ui/ProgramDeatailHero";
import WhatsNew from "@/components/ui/WhatsNew";
import ModuleExplained from "@/components/ui/ModuleExplained";
import CallbackModal from "@/components/CallbackModal";
import EnrollmentModal from "@/components/EnrollmentModal";
import ModuleChart from "@/components/ModuleChart";
import CareerOpertunity from "@/components/CareerOpertunity";
import LaymanStory from "@/components/LaymanStory";
import ProgramTeaches from "@/components/ProgramTeaches";
import ProgramDetailHero from "@/components/ProgramDetailHero";
import BootcampModuleChart from "@/components/bootcamp/BootcampModuleChart";
import BootcampDeepDive from "@/components/bootcamp/BootcampDeepDive";
import BootcampProgramTeaches from "@/components/bootcamp/BootcampProgramTeaches";
import BootcampLaymanStory from "@/components/bootcamp/BootcampLaymanStory";
import BootcampCareerOpportunity from "@/components/bootcamp/BootcampCareerOpportunity";
import BootcampWhatsNew from "@/components/bootcamp/BootcampWhatsNew";
import { ShinyButton } from "@/components/ui/shiny-button";
import FloatingBackButton from "@/components/ui/FloatingBackButton";
import Portal from "@/components/ui/Portal";
import { useLenis } from "@/hooks/useLenis";
import { useCourses } from "@/hooks/useCourses";
import { useFloatingBottomBar } from "@/contexts/FloatingBottomBarContext";
import { useFooterVisibility } from "@/hooks/useFooterVisibility";

const CourseDetails = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const lenis = useLenis();
    const { getCourseBySlug, getCourseDetailBySlug } = useCourses();
    const course = slug ? getCourseBySlug(slug) : undefined;
    const hasBootcampLayout = slug ? Boolean(getCourseDetailBySlug(slug)) : false;

    const [showFloatingButton, setShowFloatingButton] = useState(false);
    const [showBackButton, setShowBackButton] = useState(false);
    const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);
    const [isEnrollmentModalOpen, setIsEnrollmentModalOpen] = useState(false);
    const isFooterVisible = useFooterVisibility();
    const { setIsActive: setFloatingBottomBarActive } = useFloatingBottomBar();

    useEffect(() => {
        if (slug && !course) {
            navigate("/cyber-defense-programs#flagship-programs", { replace: true });
        }
    }, [slug, course, navigate]);

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

    if (!course) return null;

    return (
        <>
            <div className="relative z-10">
                {hasBootcampLayout ? (
                    <>
                        <ProgramDetailHero onEnroll={() => setIsEnrollmentModalOpen(true)} />
                        <BootcampModuleChart />
                        <BootcampDeepDive />
                        <BootcampProgramTeaches />
                        <BootcampLaymanStory />
                        <BootcampCareerOpportunity />
                        <BootcampWhatsNew />
                    </>
                ) : (
                    <>
                        <ProgramHero onEnroll={() => setIsEnrollmentModalOpen(true)} />
                        <ModuleChart />
                        <ModuleExplained />
                        <ProgramTeaches />
                        <LaymanStory />
                        <CareerOpertunity />
                        <WhatsNew />
                    </>
                )}

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
                    programSlug={slug}
                />

                {slug && (
                    <EnrollmentModal
                        isOpen={isEnrollmentModalOpen}
                        onClose={() => setIsEnrollmentModalOpen(false)}
                        slug={slug}
                    />
                )}
            </div>
        </>
    );
};

export default CourseDetails;
