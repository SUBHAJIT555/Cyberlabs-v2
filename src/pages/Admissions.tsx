import AdmissionHero from "@/components/AdmissionHero"
import GeneralAdmission from "@/components/GeneralAdmission"
import ProgramAlignmentTable from "@/components/ProgramAlignmentTable"
// import CallToAction from "@/components/CallToAction"
// import WhatDefences from "@/components/WhatDefences"


const Admissions = () => {
    return (
        <div>
            <AdmissionHero />
            {/* <WhatDefences /> */}
            <ProgramAlignmentTable />
            <GeneralAdmission />

            {/* <CallToAction /> */}
        </div>
    )
}

export default Admissions