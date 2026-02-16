import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedHeading } from "./ui/animated-heading";

const TABLE_DATA = [
    {
        program: "Cybercrime, Dark Web & Crypto Investigations",
        educationalBackground: [
            "Computer Science / IT",
            "Engineering (any branch)",
            "Commerce / Finance / Economics",
            "Law, Criminology, or Criminal Justice",
        ],
        bestFor: [
            "Aspiring cybercrime investigators",
            "Fintech, AML & fraud analysts",
            "Intelligence & compliance professionals",
            "Individuals interested in digital investigations & attribution",
        ],
        notRecommended: [
            "Candidates with no interest in investigation or analysis",
            "Those seeking purely technical or coding-focused roles",
        ],
    },
    {
        program: "Platform, Identity & Abuse Defense Engineering",
        educationalBackground: [
            "Computer Science / IT",
            "Engineering (Software, Electronics, Telecom)",
            "Mathematics / Data-focused degrees",
        ],
        bestFor: [
            "Platform security & Trust & Safety aspirants",
            "Product, identity & abuse prevention roles",
            "SaaS, fintech & marketplace security teams",
        ],
        notRecommended: [
            "Candidates without interest in systems, platforms, or applications",
            "Those expecting traditional \"ethical hacking\" content",
        ],
    },
    {
        program: "Full-Stack Cyber Defense & Offensive Security",
        educationalBackground: [
            "Any graduate or final-year student",
            "Engineering / Science / IT preferred but not mandatory",
        ],
        bestFor: [
            "Beginners seeking structured entry into cybersecurity",
            "Career switchers from non-cyber backgrounds",
            "Students building end-to-end cyber capability",
        ],
        notRecommended: [
            "Candidates looking for a short or casual program",
            "Those unwilling to commit to a long, intensive learning journey",
        ],
    },
];

const BulletList = ({ items }: { items: string[] }) => (
    <ul className="space-y-1.5 sm:space-y-2 list-none pl-0">
        {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 font-inter-display text-sm sm:text-base text-text-primary leading-relaxed">
                <span className="text-primary shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden />
                <span>{item}</span>
            </li>
        ))}
    </ul>
);

const ProgramAlignmentTable = () => {
    const containerRef = useRef(null);
    const headingRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: false, margin: "-80px" });
    const headingInView = useInView(headingRef, { once: false, margin: "-80px" });

    return (
        <section
            ref={containerRef}
            className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 lg:py-16"
        >
            <div ref={headingRef} className="mb-8 sm:mb-10 md:mb-12">
                <AnimatedHeading
                    inView={headingInView}
                    lines={[
                        { text: "Who Should Apply – ", className: "text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-inter-display text-text-primary leading-tight tracking-tight font-semibold" },
                        { text: "Program Alignment Guide", className: "text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-inter-display text-primary leading-tight tracking-tight font-semibold", startDelay: 0.2 },
                    ]}
                />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full overflow-x-auto rounded-md border border-neutral-200 overflow-hidden"
            >
                <table className="w-full min-w-[800px] border-collapse bg-white">
                    <thead>
                        <tr className="bg-neutral-100">
                            <th className="text-left py-4 px-4 sm:px-5 md:px-6 font-montserrat font-semibold text-sm sm:text-base md:text-lg text-text-primary border-b border-neutral-200 w-[18%]">
                                Program
                            </th>
                            <th className="text-left py-4 px-4 sm:px-5 md:px-6 font-montserrat font-semibold text-sm sm:text-base md:text-lg text-text-primary border-b border-l border-neutral-200 w-[27%]">
                                Educational Background
                            </th>
                            <th className="text-left py-4 px-4 sm:px-5 md:px-6 font-montserrat font-semibold text-sm sm:text-base md:text-lg text-text-primary border-b border-l border-neutral-200 w-[27%]">
                                Who This Is Best For
                            </th>
                            <th className="text-left py-4 px-4 sm:px-5 md:px-6 font-montserrat font-semibold text-sm sm:text-base md:text-lg text-text-primary border-b border-l border-neutral-200 w-[28%]">
                                Not Recommended For
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {TABLE_DATA.map((row, index) => (
                            <tr
                                key={index}
                                className={index % 2 === 0 ? "bg-white" : "bg-neutral-50"}
                            >
                                <td className="py-4 px-4 sm:px-5 md:px-6 align-top border-b border-neutral-200">
                                    <p className="font-inter-display font-semibold text-sm sm:text-base md:text-lg text-text-primary leading-snug">
                                        {row.program}
                                    </p>
                                </td>
                                <td className="py-4 px-4 sm:px-5 md:px-6 align-top border-b border-l border-neutral-200">
                                    <BulletList items={row.educationalBackground} />
                                </td>
                                <td className="py-4 px-4 sm:px-5 md:px-6 align-top border-b border-l border-neutral-200">
                                    <BulletList items={row.bestFor} />
                                </td>
                                <td className="py-4 px-4 sm:px-5 md:px-6 align-top border-b border-l border-neutral-200">
                                    <BulletList items={row.notRecommended} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </motion.div>

            {/* Mobile: stacked cards for small screens if preferred; table scrolls on small via overflow-x-auto */}
            {/* <p className="mt-4 text-sm text-text-primary/70 font-inter-display text-center sm:text-left">
                Scroll horizontally on small screens to view all columns.
            </p> */}
        </section>
    );
};

export default ProgramAlignmentTable;
