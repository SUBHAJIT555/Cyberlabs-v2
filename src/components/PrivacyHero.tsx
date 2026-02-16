import Hero from "./ui/Hero";
import privacyPolicyHeroImage from "../assets/img/HeroImage/PrivacyPolicyHero.webp";

const PrivacyHero = () => {
  return (
    <Hero
      headline="Privacy Policy"
      subtext="Understanding how we collect, use, and protect your personal information"
      backgroundImage={privacyPolicyHeroImage}
      showDivider={false}
      height="md"
    />
  );
};

export default PrivacyHero;
