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
    <div>
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
  );
};

export default About;
