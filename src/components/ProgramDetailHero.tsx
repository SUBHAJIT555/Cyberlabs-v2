import { assetSrc } from "@/lib/utils";
import { motion } from "framer-motion";
import { useParams } from "@/lib/react-router";
import { useCourses } from "@/hooks/useCourses";
import { usePageDetail } from "@/hooks/useProgramDetail";
import { ShinyButton } from "@/components/ui/shiny-button";
import GradientText from "@/components/ui/GradientText";
import { crosshatchBgStyle } from "@/constants/bootcampStyles";
import BootcampPriceBlock from "@/components/ui/BootcampPriceBlock";

type ProgramDetailHeroProps = {
    onEnroll: () => void;
};

const ProgramDetailHero = ({ onEnroll }: ProgramDetailHeroProps) => {
    const { slug } = useParams();
    const { getCourseBySlug } = useCourses();
    const course = getCourseBySlug(slug as string);
    const detail = usePageDetail();

    if (!course) return null;

    const formattedLaunch = course.currentPrice.toLocaleString("en-IN");
    const introParagraphs =
        detail?.hero.introParagraphs?.length
            ? detail.hero.introParagraphs
            : [course.description];

    const scrollToDeepDive = () => {
        const element = document.getElementById("bootcamp-deep-dive");
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const metaChips = [
        { label: "Duration", value: course.duration, highlight: true },
        { label: "Language", value: course.language },
        { label: "Price", value: `₹${formattedLaunch} INR`, emphasis: true },
    ];

    return (
        <div className="w-full pt-16 pb-12 md:pt-20 md:pb-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(280px,420px)] xl:grid-cols-[minmax(0,1fr)_minmax(320px,460px)] gap-8 lg:gap-10 xl:gap-14 items-start">
                <div className="min-w-0 flex flex-col gap-6 md:gap-8 order-2 lg:order-1">
                    <div className="space-y-3 md:space-y-4">
                        <GradientText
                            colors={["#0a0a0f", "#0f172a", "#1e3a8a", "#2563eb", "#0ea5e9"]}
                            animationSpeed={8}
                            className="font-inter-display text-sm font-semibold! uppercase tracking-widest w-fit border border-neutral-200 rounded-lg! px-2! py-1!"
                        >
                            Flagship Program
                        </GradientText>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] xl:text-[2.75rem] text-text-primary font-inter-display font-bold tracking-tight leading-tight">
                            {course.title}
                        </h1>
                        {detail?.hero.tagLine && (
                            <p className="text-primary text-lg md:text-xl font-inter-display font-semibold leading-snug">
                                {detail.hero.tagLine}
                            </p>
                        )}
                        {!detail?.hero.tagLine && course.programTagLine && (
                            <p className="text-primary text-lg md:text-xl font-inter-display font-semibold leading-snug">
                                {course.programTagLine}
                            </p>
                        )}
                    </div>

                    <div className="space-y-4">
                        {introParagraphs.map((paragraph, index) => (
                            <p
                                key={index}
                                className="font-inter-display text-base md:text-lg text-text-primary/90 leading-relaxed"
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {metaChips.map((chip) => (
                            <span
                                key={chip.label}
                                className={`inline-flex items-center rounded-lg border border-neutral-200 px-3 py-1.5 text-sm font-inter-display text-text-primary ${
                                    chip.emphasis ? "bg-neutral-100 font-semibold" : "bg-white"
                                }`}
                            >
                                {chip.label}:{" "}
                                <span
                                    className={`ml-1 ${
                                        chip.highlight ? "font-semibold text-primary" : "font-semibold"
                                    }`}
                                >
                                    {chip.value}
                                </span>
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-3 pt-1">
                        <ShinyButton
                            type="button"
                            size="compact"
                            onClick={onEnroll}
                            className="font-montserrat! font-semibold text-xs sm:text-sm rounded-lg! shadow-lg! active:scale-95! px-10! py-3!"
                        >
                            Enroll Now
                        </ShinyButton>
                        {detail && (
                            <ShinyButton
                                type="button"
                                variant="light"
                                size="compact"
                                onClick={scrollToDeepDive}
                                className="font-montserrat! font-medium text-xs sm:text-sm rounded-lg! shadow-lg! active:scale-95! px-10! py-3!"
                            >
                                View Module
                            </ShinyButton>
                        )}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-full min-w-0 order-1 lg:order-2 lg:sticky lg:top-24"
                >
                    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
                        <div className="relative overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 shadow-sm aspect-4/3">
                            <img
                                src={assetSrc(course.image)}
                                alt={course.title}
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                            <div className="absolute inset-x-0 bottom-0 px-4 py-4 sm:px-5 sm:py-5">
                                <div className="rounded-lg bg-black/10 px-4 py-3 backdrop-blur-sm sm:px-5 sm:py-4">
                                    <p className="font-inter-display text-xs font-semibold uppercase tracking-widest text-white/80">
                                        Flagship Program
                                    </p>
                                    <p className="mt-1 line-clamp-2 font-inter-display text-sm font-semibold leading-snug text-white sm:text-base">
                                        {course.title}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative mt-3 overflow-hidden rounded-lg border border-neutral-200 border-dashed bg-white shadow-sm">
                            <div className="absolute inset-0 z-0 pointer-events-none" style={crosshatchBgStyle} />
                            <div className="relative z-10 px-4 py-3">
                                <BootcampPriceBlock
                                    originalPrice={course.originalPrice}
                                    launchPrice={course.currentPrice}
                                    currency="INR"
                                    variant="strip"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ProgramDetailHero;
