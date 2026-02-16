import PlatformHero from "../components/ui/SimulatorHero";
import IntroLearning from "../components/IntroLearning";
import WhoThisEnvironment from "../components/WhoThisEnvironment";
// import Faq from "../components/Faq";
// import CallToAction from "../components/CallToAction";
// import ProgramsCard from "../components/ProgramsCard";
import VirtualSimulator from "../components/VirtualSimulator";
import EnterpriseLab from "../components/EnterpriseLab";
import WhyThisMatters from "../components/WhyThisMatters";

const Platform = () => {
  return (
    <>
      {/* Fixed full-viewport dashed grid background (same as About) */}
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
        <PlatformHero />
        <IntroLearning />
        <VirtualSimulator />
        <EnterpriseLab />
        {/* <ProgramsCard /> */}
        <WhoThisEnvironment />
        <WhyThisMatters />
        {/* <Faq /> */}
        {/* <CallToAction /> */}
      </div>
    </>
  );
};

export default Platform;
