import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedHeading } from "./ui/animated-heading";
import comptiaImage from "@/assets/img/CertificateTag/cyberlab_ceritificate_comptia.webp";
import iscImage from "@/assets/img/CertificateTag/cyberlab_ceritificate_isc.webp";
import ecCouncilImage from "@/assets/img/CertificateTag/cyberlab_ceritificate_ec-council.webp";

const CERT_ORGS = [
    { name: "ISC²", src: iscImage, alt: "ISC² Certificate" },
    { name: "CompTIA", src: comptiaImage, alt: "CompTIA Certificate" },
    { name: "EC-Council", src: ecCouncilImage, alt: "EC-Council Certificate" },
] as const;

const dashedGridStyle = {
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
    maskComposite: "intersect" as const,
    WebkitMaskComposite: "source-in" as const,
};

const IndustryRecognition = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: false, margin: "-100px" });
    const headingRef = useRef<HTMLDivElement>(null);
    const headingInView = useInView(headingRef, { once: false, margin: "-80px" });

    return (
        <section className="w-full py-4 sm:py-6 md:py-8 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 mb-12 sm:mb-16 md:mb-20" ref={containerRef}>
            <div className="w-full">
                <div className="space-y-8 md:space-y-10">
                    {/* Heading */}
                    <div ref={headingRef}>
                        <AnimatedHeading
                            inView={headingInView}
                            lines={[
                                { text: "Industry Recognition & Professional Alignment", className: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat text-text-primary font-semibold tracking-tight leading-tight" },
                            ]}
                        />
                    </div>

                    {/* Content — matches your document */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <p className="text-base sm:text-lg md:text-xl font-inter-display text-text-primary leading-relaxed">
                            All certificates issued by <span className="font-semibold text-text-primary">CYBERLABS USA</span> are <span className="font-semibold text-primary">industry-aligned</span> and <span className="font-semibold text-primary">professionally relevant</span> in the context of global cybersecurity role requirements.
                        </p>
                        <p className="text-base sm:text-lg md:text-xl font-inter-display text-text-primary leading-relaxed">
                            <span className="font-semibold text-text-primary">CYBERLABS USA</span> programs are <span className="font-semibold text-primary">mapped and aligned</span> to the knowledge domains, skill areas, and professional competencies defined by leading global cybersecurity bodies such as <span className="font-semibold text-primary">ISC²</span>, <span className="font-semibold text-primary">CompTIA</span>, and <span className="font-semibold text-primary">EC-Council</span>.
                        </p>

                        {/* Certification logos from CertificateTag */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 py-4">
                            {CERT_ORGS.map((org) => (
                                <motion.div
                                    key={org.name}
                                    className="relative flex flex-col items-center rounded-xl border border-neutral-200 ring ring-neutral-200 ring-offset-2 md:ring-offset-4 overflow-hidden bg-white p-4 sm:p-6 shadow-sm transition-shadow hover:shadow-md"
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <div className="absolute inset-0 z-0 pointer-events-none" style={dashedGridStyle} />
                                    <div className="relative z-10 flex flex-col items-center w-full">
                                        <p className="text-center font-montserrat font-semibold text-text-primary text-sm sm:text-base pt-4 px-3 pb-2 border-b border-neutral-200/80 w-full">
                                            {org.name}
                                        </p>
                                        <div className="flex min-h-[140px] sm:min-h-[160px] items-center justify-center p-3 sm:p-4 w-full">
                                            <img
                                                src={org.src}
                                                alt={org.alt}
                                                className="w-full max-w-[140px] sm:max-w-[160px] h-auto object-contain"
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <p className="text-base sm:text-lg md:text-xl font-inter-display text-text-primary leading-relaxed">
                            This alignment ensures that learners develop capabilities that are <span className="font-semibold text-primary">relevant</span>, <span className="font-semibold text-primary">transferable</span>, and <span className="font-semibold text-primary">compatible</span> with internationally recognized cybersecurity career pathways, while maintaining <span className="font-semibold text-text-primary">CYBERLABS&apos; investigation-driven and operational training standards</span>.
                        </p>

                        {/* Divider + concluding sentence */}
                        <div className="border-t-2 border-neutral-300 pt-6 sm:pt-8">
                            <p className="text-base sm:text-lg md:text-xl font-inter-display font-semibold text-text-primary leading-relaxed">
                                <span className="font-semibold text-text-primary">CYBERLABS</span> certifications emphasize <span className="font-semibold text-primary">practical capability and operational readiness</span>, rather than exam-only credentialing.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default IndustryRecognition;
