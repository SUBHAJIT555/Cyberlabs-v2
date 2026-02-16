import CertificationHero from "../components/CertificationHero"
import OfficialCertificate from "../components/OfficialCertificate"
import GradePerformance from "../components/GradePerformance"
import WhatThisMean from "../components/WhatThisMean"
// import CallToAction from "../components/CallToAction"
import AssesmentPhilosophy from "@/components/AssesmentPhilosophy"
// import WhatDefinesCertificate from "@/components/WhatDefinesCertificate"

const Certification = () => {
    return (
        <div>
            <CertificationHero />
            {/* <WhatDefinesCertificate /> */}
            <OfficialCertificate />
            <GradePerformance />
            <AssesmentPhilosophy />
            <WhatThisMean />
            {/* <CallToAction /> */}
        </div>
    )
}

export default Certification