import AboutHero from "../components/ui/AboutHero";
import {
  AboutMerged,
  AboutIndiaSection,
  AboutGlobalFramework,
  AboutHowDifferent,
  AboutTrainsWhoClosing,
} from "../components/about";
// import CallToAction from "../components/CallToAction";
// import WhoAreCyberlabs from "../components/WhoAreCyberlabs";
// import AboutWhy from "../components/AboutWhy";
// import AboutWhatMakes from "../components/AboutWhatMakes";
// import AboutWho from "../components/AboutWho";
// import Team from "../components/Team";
// import LevelUp from "../components/LevelUp";
// import Faq from "../components/Faq";

const About = () => {
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
        <AboutHero />
        <AboutMerged />
        {/* <AboutWhatIs /> */}
        {/* <AboutFoundation /> */}
        {/* <AboutWhyBuilt /> */}
        <AboutIndiaSection />
        <AboutGlobalFramework />
        <AboutHowDifferent />
        <AboutTrainsWhoClosing />
        {/* <CallToAction /> */}
        {/* <WhoAreCyberlabs /> */}
        {/* <AboutWhy /> */}
        {/* <AboutWhatMakes /> */}
        {/* <AboutWho /> */}
        {/* <Team /> */}
        {/* <LevelUp /> */}
        {/* <Faq /> */}
      </div>
    </>
  );
};

export default About;
