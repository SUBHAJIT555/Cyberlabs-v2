import { motion } from "framer-motion";
import { Link, useParams } from "react-router";
import { useBootcamps } from "@/hooks/useBootcamps";
import { ShinyButton, shinyButtonClasses } from "@/components/ui/shiny-button";

type BootcampDetailHeroProps = {
    onEnroll: () => void;
};

const BootcampDetailHero = ({ onEnroll }: BootcampDetailHeroProps) => {
    const { slug } = useParams();
    const { getBootcampBySlug, getBootcampDetailBySlug } = useBootcamps();
    const bootcamp = getBootcampBySlug(slug as string);
    const detail = getBootcampDetailBySlug(slug as string);

    if (!bootcamp) return null;

    const formattedPrice = bootcamp.price.toLocaleString("en-IN");
    const introParagraphs =
        detail?.hero.introParagraphs?.length
            ? detail.hero.introParagraphs
            : [bootcamp.description];

    const scrollToDeepDive = () => {
        const element = document.getElementById("bootcamp-deep-dive");
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div className="w-full min-h-[80vh] flex items-center pt-16 pb-12 md:pt-20 md:pb-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 lg:items-stretch">
                <div className="min-w-0 lg:col-start-1 lg:row-start-1 flex flex-col justify-start">
                    <div className="space-y-6">
                        <p className="text-sm font-inter-display font-semibold uppercase tracking-widest text-primary">
                            Elite Boot Camp
                        </p>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] text-text-primary font-montserrat font-bold tracking-tight">
                            {bootcamp.title}
                        </h1>
                        {detail?.hero.tagLine && (
                            <p className="text-primary text-lg md:text-xl font-inter-display font-semibold">
                                {detail.hero.tagLine}
                            </p>
                        )}
                        {detail?.hero.phase2Label && (
                            <p className="text-primary text-base md:text-lg font-inter-display font-semibold">
                                {detail.hero.phase2Label}
                            </p>
                        )}
                        {detail?.hero.launchAnnouncement && (
                            <p className="text-primary text-base md:text-lg font-inter-display font-medium">
                                {detail.hero.launchAnnouncement}
                            </p>
                        )}
                        {!detail?.hero.phase2Label && bootcamp.launchNote && (
                            <p className="text-primary text-base md:text-lg font-inter-display font-semibold">
                                {bootcamp.launchNote}
                            </p>
                        )}
                    </div>
                </div>

                <div className="min-w-0 flex items-center lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:items-stretch">
                    <div className="w-full overflow-hidden bg-neutral-50/80 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] aspect-4/3 lg:aspect-auto lg:min-h-[380px] rounded-xl ring ring-neutral-200 ring-offset-4 md:ring-offset-8">
                        <img
                            src={bootcamp.image}
                            alt={bootcamp.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className="min-w-0 lg:col-start-1 lg:row-start-2 flex flex-col justify-center">
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

                    <div className="mt-6 flex flex-wrap gap-2">
                        <span className="inline-flex items-center rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-sm font-inter-display text-text-primary">
                            Duration:{" "}
                            <span className="ml-1 font-semibold text-primary">
                                {bootcamp.duration}
                            </span>
                        </span>
                        <span className="inline-flex items-center rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-sm font-inter-display text-text-primary">
                            Date: <span className="ml-1 font-semibold">{bootcamp.date}</span>
                        </span>
                        <span className="inline-flex items-center rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-sm font-inter-display text-text-primary">
                            Language:{" "}
                            <span className="ml-1 font-semibold">{bootcamp.language}</span>
                        </span>
                        <span className="inline-flex items-center rounded-lg border border-neutral-200 bg-neutral-100 px-3 py-1.5 text-sm font-inter-display font-semibold text-text-primary">
                            Price:{" "}
                            <span className="ml-1">
                                ₹{formattedPrice} {bootcamp.currency}
                            </span>
                        </span>
                    </div>

                    <div className="mt-8 lg:mt-10 space-y-5">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center gap-2 text-text-primary text-base md:text-lg font-inter-display font-semibold"
                        >
                            <motion.svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-primary shrink-0"
                                aria-hidden
                            >
                                <motion.path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 0.3, delay: 0 }}
                                />
                                <motion.path
                                    d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{
                                        duration: 1,
                                        delay: 0.2,
                                        repeat: Infinity,
                                        repeatDelay: 2,
                                    }}
                                />
                                <motion.path
                                    d="M12 7v5l3 3"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: 1.2,
                                        repeat: Infinity,
                                        repeatDelay: 2,
                                    }}
                                />
                            </motion.svg>
                            Duration: <span className="text-primary">{bootcamp.duration}</span>
                        </motion.p>

                        <div className="flex flex-wrap gap-3">
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
                            <Link
                                to="/cyber-defense-programs#elite-bootcamps"
                                className={shinyButtonClasses({
                                    variant: "light",
                                    size: "compact",
                                    className:
                                        "font-montserrat! font-medium text-xs sm:text-sm no-underline rounded-lg! shadow-lg! active:scale-95! px-10! py-3!",
                                })}
                            >
                                <span>All Boot Camps</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BootcampDetailHero;
