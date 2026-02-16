import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedHeading } from "./ui/animated-heading";
// import certificateImage from "../assets/img/about/CyberlabsCertificate.webp"
// import comtia from "../assets/img/CertificateTag/cyberlab_ceritificate_comptia.webp"
// import ec from "../assets/img/CertificateTag/cyberlab_ceritificate_ec-council.webp"
// import isc from "../assets/img/CertificateTag/cyberlab_ceritificate_isc.webp"

const GradePerformance = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: false, margin: "-100px" });
    const headingRef = useRef<HTMLDivElement>(null);
    const headingInView = useInView(headingRef, { once: false, margin: "-100px" });

    return (
        <section className="w-full bg-background" ref={containerRef}>
            <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-6 md:space-y-8"
                >
                    {/* Title */}
                    <div ref={headingRef} className="mb-2">
                        <AnimatedHeading
                            inView={headingInView}
                            lines={[
                                { text: "Graded Performance Framework (Indicative)", className: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat text-text-primary font-semibold tracking-tight leading-tight" },
                            ]}
                        />
                    </div>

                    {/* Table Container - Responsive */}
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-neutral-300 border-dashed bg-white">
                            {/* Table Header */}
                            <thead className="bg-white" style={{ background: "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white" }}>
                                <tr>
                                    <th className="border border-neutral-300 border-dashed px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm md:text-base font-montserrat font-bold text-text-primary">
                                        Assessment Category
                                    </th>
                                    <th className="border border-neutral-300 border-dashed px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm md:text-base font-montserrat font-bold text-text-primary">
                                        Weightage
                                    </th>
                                    <th className="border border-neutral-300 border-dashed px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm md:text-base font-montserrat font-bold text-text-primary">
                                        Evaluation Focus
                                    </th>
                                </tr>
                            </thead>
                            {/* Table Body - rows animate in on scroll like a list */}
                            <tbody>
                                {[
                                    { category: "Lab Simulations & Technical Exercises", weight: "40%", focus: "Hands-on execution and technical accuracy", bold: false },
                                    { category: "Module Deliverables (Reports & Analysis)", weight: "30%", focus: "Investigation quality and reasoning", bold: false },
                                    { category: "Integrated Practical Assessment", weight: "30%", focus: "End-to-end operational capability", bold: false },
                                    { category: "Overall Evaluation", weight: "100%", focus: "Professional readiness", bold: true },
                                ].map((row, i) => (
                                    <motion.tr
                                        key={i}
                                        initial={{ opacity: 0, x: 40 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                                    >
                                        <td className={`border border-neutral-300 border-dashed px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-xs sm:text-sm md:text-base font-inter-display ${row.bold ? "font-bold" : "font-medium"} text-text-primary`}>
                                            {row.category}
                                        </td>
                                        <td className={`border border-neutral-300 border-dashed px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm md:text-base font-inter-display ${row.bold ? "font-bold" : "font-medium"} text-text-primary`}>
                                            {row.weight}
                                        </td>
                                        <td className={`border border-neutral-300 border-dashed px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-xs sm:text-sm md:text-base font-inter-display ${row.bold ? "font-bold" : "font-medium"} text-text-primary`}>
                                            {row.focus}
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Performance classifications & assessment note */}
                    <div
                        className="mt-6 sm:mt-8 rounded-xl border border-neutral-300 border-dashed bg-white p-4 sm:p-5 md:p-6"
                        style={{
                            background: "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                        }}
                    >
                        <h3 className="text-base sm:text-lg font-inter-display font-semibold text-text-primary leading-snug mb-3 sm:mb-4">
                            Performance classifications may include:
                        </h3>
                        <ul className="space-y-2 sm:space-y-2.5 font-inter-display font-medium text-text-primary text-sm sm:text-base leading-relaxed mb-4 sm:mb-5">
                            <li className="flex items-center gap-2">
                                <span className="text-primary shrink-0">•</span>
                                <span>Distinction</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-primary shrink-0">•</span>
                                <span>Merit</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-primary shrink-0">•</span>
                                <span>First Class</span>
                            </li>
                        </ul>
                        <p className="text-sm sm:text-base font-inter-display font-medium text-text-primary/90 leading-relaxed border-t border-neutral-200 border-dashed pt-4 sm:pt-5">
                            Assessment structure and weightage may vary by program, based on curriculum depth and role alignment.
                        </p>
                    </div>

                    {/* Performance Classifications Section - Left Right Layout */}
                    {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-start py-8 md:py-10 lg:py-16"> */}
                    {/* Left Column - Content and Images */}
                    {/* <div className="space-y-6 sm:space-y-8"> */}
                    {/* Performance Classifications Text */}
                    {/* <div className="space-y-4 sm:space-y-5">
                                <h3 className="text-lg sm:text-xl md:text-2xl font-inter-display font-semibold text-text-primary leading-relaxed tracking-tight">
                                    Performance classifications may include:
                                </h3>
                                <ul className="space-y-4 sm:space-y-5 font-inter-display font-medium text-text-primary text-sm sm:text-base leading-relaxed">
                                    <li className="flex items-start gap-3 sm:gap-4">
                                        <span className="text-primary mt-1.5 shrink-0 text-lg">•</span>
                                        <span className="flex-1">
                                            <strong className="font-semibold text-text-primary">Distinction</strong> – Reserved for candidates who demonstrate outstanding performance across all modules, showing exemplary technical accuracy, investigation quality, and overall professional readiness. Individuals at this level exhibit a deep and comprehensive understanding, consistently exceeding expectations throughout their assessments and activities.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3 sm:gap-4">
                                        <span className="text-primary mt-1.5 shrink-0 text-lg">•</span>
                                        <span className="flex-1">
                                            <strong className="font-semibold text-text-primary">Merit</strong> – Awarded to candidates who display a strong grasp of subject matter, with consistently high results in both practical and analytical tasks. This classification signifies a high degree of competence, effective reasoning, and reliable delivery on all module requirements, though with minor areas for improvement.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3 sm:gap-4">
                                        <span className="text-primary mt-1.5 shrink-0 text-lg">•</span>
                                        <span className="flex-1">
                                            <strong className="font-semibold text-text-primary">First Class</strong> – Given to those who meet all essential criteria with good performance, demonstrating solid technical skills and an ability to apply learning in practical contexts. First Class indicates very good achievement and a strong readiness for professional responsibilities, with consistent quality throughout the programme.
                                        </span>
                                    </li>
                                </ul>
                            </div> */}

                    {/* Three Small Images */}
                    {/* <div className="pt-4 sm:pt-5 border-t border-neutral-300 border-dashed">
                                <div className="flex flex-col md:flex-row gap-4 sm:gap-3 md:gap-4">
                                    <div className="flex flex-col md:flex-row md:flex-1 gap-3 md:gap-2 items-start md:items-center">
                                        <div className="w-20 sm:w-24 md:w-16 lg:w-20 h-16 sm:h-20 md:h-16 lg:h-20 shrink-0 border border-neutral-300 border-dashed rounded-md overflow-hidden bg-white p-1.5 sm:p-2"
                                            style={{
                                                background: "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white"
                                            }}
                                        >
                                            <img
                                                src={comtia}
                                                alt="CompTIA Authorized Partner"
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <p className="text-text-primary font-inter-display font-medium text-xs sm:text-sm md:text-xs lg:text-sm leading-tight md:border-l md:border-neutral-300 md:border-dashed md:pl-2 flex-1">
                                            CompTIA is a globally recognized authority in IT certifications and training quality standards.
                                        </p>
                                    </div>
                                    <div className="flex flex-col md:flex-row md:flex-1 gap-3 md:gap-2 items-start md:items-center">
                                        <div className="w-20 sm:w-24 md:w-16 lg:w-20 h-16 sm:h-20 md:h-16 lg:h-20 shrink-0 border border-neutral-300 border-dashed rounded-md overflow-hidden bg-white p-1.5 sm:p-2"
                                            style={{
                                                background: "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white"
                                            }}
                                        >
                                            <img
                                                src={ec}
                                                alt="EC-Council Training Partner"
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <p className="text-text-primary font-inter-display font-medium text-xs sm:text-sm md:text-xs lg:text-sm leading-tight md:border-l md:border-neutral-300 md:border-dashed md:pl-2 flex-1">
                                            EC-Council is a globally recognized authority in IT certs and training quality standards.
                                        </p>
                                    </div>
                                    <div className="flex flex-col md:flex-row md:flex-1 gap-3 md:gap-2 items-start md:items-center">
                                        <div className="w-20 sm:w-24 md:w-16 lg:w-20 h-16 sm:h-20 md:h-16 lg:h-20 shrink-0 border border-neutral-300 border-dashed rounded-md overflow-hidden bg-white p-1.5 sm:p-2"
                                            style={{
                                                background: "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white"
                                            }}
                                        >
                                            <img
                                                src={isc}
                                                alt="ISC² Preferred Training Provider"
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <p className="text-text-primary font-inter-display font-medium text-xs sm:text-sm md:text-xs lg:text-sm leading-tight md:border-l md:border-neutral-300 md:border-dashed md:pl-2 flex-1">
                                            ISC² is a recognized authority in cybersecurity certifications and training standards.
                                        </p>
                                    </div>
                                </div>
                            </div> */}
                    {/* Disclaimer */}
                    {/* <p className="text-sm sm:text-base md:text-lg font-inter-display font-medium text-text-primary leading-relaxed italic mt-6 sm:mt-8 md:mt-12 lg:mt-20">
                                Assessment structure and weightage may vary by program, based on curriculum depth and role alignment.
                            </p> */}
                    {/* </div> */}

                    {/* Right Column - Certificate Image */}
                    {/* <div className="w-full md:sticky md:top-8">
                            <div className="border border-neutral-300 border-dashed rounded-md overflow-hidden bg-white p-3 sm:p-4 md:p-5 shadow-sm"
                                style={{
                                    background: "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white"
                                }}
                            >
                                <img
                                    src={certificateImage}
                                    alt="Cyberlabs Certificate of Excellence"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div> */}
                    {/* </div> */}


                </motion.div>
            </div>
        </section>
    );
};

export default GradePerformance;
