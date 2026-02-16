import CertificationHero from "../components/CertificationHero"
import OfficialCertificate from "../components/OfficialCertificate"
import GradePerformance from "../components/GradePerformance"
import WhatThisMean from "../components/WhatThisMean"
// import CallToAction from "../components/CallToAction"
import AssesmentPhilosophy from "@/components/AssesmentPhilosophy"
// import WhatDefinesCertificate from "@/components/WhatDefinesCertificate"

const Certification = () => {
    return (
        <>
            {/* Fixed full-viewport dashed grid background (behind everything except hero/footer) */}
            <div
                className="fixed inset-0 h-screen w-full z-0 bg-white pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, #e2e8f0 1px, transparent 1px),
                        linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
                    `,
                    backgroundSize: "5px 5px",
                    backgroundPosition: "0 0, 0 0",
                    maskImage: `
                        repeating-linear-gradient(
                            to right,
                            black 0px,
                            black 3px,
                            transparent 3px,
                            transparent 8px
                        ),
                        repeating-linear-gradient(
                            to bottom,
                            black 0px,
                            black 3px,
                            transparent 3px,
                            transparent 8px
                        ),
                        radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
                    `,
                    WebkitMaskImage: `
                        repeating-linear-gradient(
                            to right,
                            black 0px,
                            black 3px,
                            transparent 3px,
                            transparent 8px
                        ),
                        repeating-linear-gradient(
                            to bottom,
                            black 0px,
                            black 3px,
                            transparent 3px,
                            transparent 8px
                        ),
                        radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
                    `,
                    maskComposite: "intersect",
                    WebkitMaskComposite: "source-in",
                }}
            />
            <div className="relative z-10">
                <CertificationHero />
                {/* <WhatDefinesCertificate /> */}
                <OfficialCertificate />
                <GradePerformance />
                <AssesmentPhilosophy />
                <WhatThisMean />
                {/* <CallToAction /> */}
            </div>
        </>
    )
}

export default Certification