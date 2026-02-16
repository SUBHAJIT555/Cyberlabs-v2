import Hero from "./ui/Hero";
import termsAndConditionHeroImage from "../assets/img/HeroImage/TermsandConditionsHero.webp";

const TermsHero = () => {
  return (
    <Hero
      headline="Terms & Conditions"
      subtext="Understanding our terms of service and platform policies"
      backgroundImage={termsAndConditionHeroImage}
      showDivider={false}
      height="md"
    />
  );
};

export default TermsHero;
