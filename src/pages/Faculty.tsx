import FacultyHero from "@/components/FacultyHero"
import FoundationFaculty from "@/components/FoundationFaculty"
import CoreFaculty from "@/components/CoreFaculty"
// import WhatAndWhyTeam from "@/components/WhatAndWhyTeam"
// import CallToAction from "@/components/CallToAction"
import WhatTruelySet from "@/components/WhatTruelySet"

const Faculty = () => {
    return (
        <div>
            <FacultyHero />
            <FoundationFaculty />
            <CoreFaculty />
            <WhatTruelySet />
            {/* <WhatAndWhyTeam /> */}
            {/* <CallToAction /> */}
        </div>
    )
}

export default Faculty;