import Hero from "../components/ui/Hero";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router";
import termsAndConditionHeroImage from "../assets/img/HeroImage/TermsandConditionsHero.webp";
import { CONTACT } from "@/constants/contactInfo";

const TermsAndCondition = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero
        headline="Terms & Conditions"
        subtext="Understanding our terms of service and platform policies"
        backgroundImage={termsAndConditionHeroImage}
        showDivider={false}
        height="md"
        // ctaButtons={[
        //   {
        //     text: "Download Terms & Conditions",
        //     link: "/terms-and-conditions.pdf",
        //     variant: "primary",
        //   },
        // ]}
      />

      {/* Main Content */}
      <div className="bg-background text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto border-l border-r border-dashed border-neutral-300">
          {/* Last Updated */}
          <div className="text-center mb-16 ">
            <p className="text-text-primary font-inter-display text-base md:text-lg lg:text-xl bg-white py-2"
              style={{
                background:
                  "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
              }}
            >
              Last Updated: October 2025
            </p>
          </div>

          {/* Terms Sections */}
          <div className="space-y-3">
            {/* Section 1: Introduction */}
            <div className="space-y-6 px-2">
              <h2 className="text-2xl sm:text-3xl font-normal text-text-primary font-inter-display">
                1. Introduction
              </h2>
              <div className="text-text-primary font-inter-display text-base md:text-lg lg:text-xl leading-relaxed">
                <p>Welcome to CYBERLABS INDIA ("WE", "OUR", "US").</p>
                <p>
                  These TERMS & CONDITIONS ("TERMS") govern your access and use
                  of our website, learning platform, simulators, and related
                  services (collectively, the "PLATFORM").
                </p>
                <br />
                <p>
                  By using the Platform, you agree to be bound by these Terms.
                </p>
                <p>If you do not agree, please discontinue use immediately.</p>
              </div>
              <div className="w-full h-3 mt-2 border-t border-dashed border-neutral-300"></div>
            </div>

            {/* Section 2: Definitions */}
            <div className="space-y-6 px-2">
              <h2 className="text-2xl sm:text-3xl font-normal text-text-primary font-inter-display">
                2. Definitions
              </h2>
              <div className="text-text-primary font-inter-display text-base md:text-lg lg:text-xl leading-relaxed">
                <p>For clarity:</p>
                <br />
                <p>
                  "PLATFORM" refers to cyberslabs.in, its subdomains, web
                  applications, and associated online services.
                </p>
                <br />
                <p>
                  "USER", "YOU", or "LEARNER" means any individual or entity
                  accessing or using our Platform.
                </p>
                <br />
                <p>
                  "PROGRAMS" refer to online courses, labs, simulators, or
                  certifications offered through CYBERLABS INDIA.
                </p>
                <br />
                <p>
                  "CONTENT" means all materials, videos, exercises, text,
                  graphics, and intellectual property available on the Platform.
                </p>
              </div>
              <div className="w-full h-3 mt-2 border-t border-dashed border-neutral-300"></div>
            </div>

            {/* Section 3: Eligibility */}
            <div className="space-y-6 px-2">
              <h2 className="text-2xl sm:text-3xl font-normal text-text-primary font-inter-display">
                3. Eligibility
              </h2>
              <div className="text-text-primary font-inter-display text-base md:text-lg lg:text-xl leading-relaxed">
                <p>To register and access CYBERLABS INDIA:</p>
                <br />
                <p>
                  • You must be at least 16 years old or have parental consent.
                </p>
                <p>
                  • You must provide accurate and complete information during
                  signup.
                </p>
                <p>
                  • We reserve the right to deny or revoke access if false
                  information or misuse is detected.
                </p>
              </div>
              <div className="w-full h-3 mt-2 border-t border-dashed border-neutral-300"></div>
            </div>

            {/* Section 4: Account Registration & Security */}
            <div className="space-y-6 px-2">
              <h2 className="text-2xl sm:text-3xl font-normal text-text-primary font-inter-display">
                4. Account Registration & Security
              </h2>
              <div className="text-text-primary font-inter-display text-base md:text-lg lg:text-xl leading-relaxed">
                <p>
                  • You are responsible for maintaining the confidentiality of
                  your login credentials.
                </p>
                <p>• Any activity under your account is deemed to be by you.</p>
                <p>
                  • Notify us immediately at{" "}
                  <a
                    href={`mailto:${CONTACT.supportEmail}`}
                    className="underline underline-offset-5 decoration-1 decoration-text-primary hover:text-primary transition-all duration-300"
                  >
                    {CONTACT.supportEmail}
                  </a>{" "}
                  if you suspect unauthorized use.
                </p>
                <p>
                  • We are not liable for losses due to compromised credentials.
                </p>
              </div>
              <div className="w-full h-3 mt-2 border-t border-dashed border-neutral-300"></div>
            </div>

            {/* Section 5: Use of Platform */}
            <div className="space-y-6 px-2">
              <h2 className="text-2xl sm:text-3xl font-normal text-text-primary font-inter-display">
                5. Use of Platform
              </h2>
              <div className="text-text-primary font-inter-display text-base md:text-lg lg:text-xl leading-relaxed">
                <p>You agree to:</p>
                <br />
                <p>
                  • Use the Platform solely for lawful educational purposes.
                </p>
                <p>
                  • Not attempt to hack, reverse-engineer, disrupt, or exploit
                  the Platform or simulator environments.
                </p>
                <p>
                  • Not share course materials, simulations, or credentials with
                  others.
                </p>
                <p>• Respect all intellectual property and copyright laws.</p>
                <br />
                <p>
                  Violation may lead to account suspension or permanent ban
                  without refund.
                </p>
              </div>
              <div className="w-full h-3 mt-2 border-t border-dashed border-neutral-300"></div>
            </div>

            {/* Section 6: Programs, Labs & Simulators */}
            <div className="space-y-6 px-2">
              <h2 className="text-2xl sm:text-3xl font-normal text-text-primary font-inter-display">
                6. Programs, Labs & Simulators
              </h2>
              <div className="text-text-primary font-inter-display text-base md:text-lg lg:text-xl leading-relaxed">
                <p>
                  • Access to labs and simulators is granted for the duration of
                  your subscription or course.
                </p>
                <p>
                  • You must not replicate, distribute, or use the lab
                  environment or simulator code for personal gain.
                </p>
                <p>
                  • All exercises, attack simulations, and defense drills are
                  educational and sandboxed - no real networks or systems are
                  targeted.
                </p>
                <p>
                  • We may update or modify course content at any time for
                  improvement.
                </p>
              </div>
              <div className="w-full h-3 mt-2 border-t border-dashed border-neutral-300"></div>
            </div>

            {/* Section 7: Payments & Refund Policy */}
            <div className="space-y-6 px-2">
              <h2 className="text-2xl sm:text-3xl font-normal text-text-primary font-inter-display">
                7. Payments & Refund Policy
              </h2>
              <div className="text-text-primary font-inter-display text-base md:text-lg lg:text-xl leading-relaxed">
                <p>
                  • All fees are displayed in USD ($) or equivalent currency and
                  are non-transferable.
                </p>
                <p>• Payments are processed via secure gateways.</p>
                <p>
                  • Refunds are available only under CYBERLABS INDIA's Refund
                  Policy, accessible at <Link
                    className=" underline underline-offset-5 decoration-1 decoration-text-primary hover:text-primary transition-all duration-300"
                    to="/refund-policy"
                  >
                    cyberslabs.in/refund-policy
                  </Link>.
                </p>
                <p>• We may revise pricing or offers periodically.</p>
              </div>
              <div className="w-full h-3 mt-2 border-t border-dashed border-neutral-300"></div>
            </div>

            {/* Section 8: Intellectual Property Rights */}
            <div className="space-y-6 px-2">
              <h2 className="text-2xl sm:text-3xl font-normal text-text-primary font-inter-display">
                8. Intellectual Property Rights
              </h2>
              <div className="text-text-primary font-inter-display text-base md:text-lg lg:text-xl leading-relaxed">
                <p>
                  • All materials, simulators, graphics, videos, and course
                  content are intellectual property of CYBERLABS INDIA.
                </p>
                <p>
                  • You are granted a limited, non-exclusive, non-transferable
                  license to use the Platform for personal learning only.
                </p>
                <p>
                  • You may not copy, modify, distribute, sell, or reproduce any
                  part of our content without written permission.
                </p>
              </div>
              <div className="w-full h-3 mt-2 border-t border-dashed border-neutral-300"></div>
            </div>

            {/* Section 9: Certificates & Assessments */}
            <div className="space-y-6 px-2">
              <h2 className="text-2xl sm:text-3xl font-normal text-text-primary font-inter-display">
                9. Certificates & Assessments
              </h2>
              <div className="text-text-primary font-inter-display text-base md:text-lg lg:text-xl leading-relaxed">
                <p>
                  • Certificates are issued upon course or track completion.
                </p>
                <p>
                  • We reserve the right to verify identity, performance, or
                  eligibility before awarding certificates.
                </p>
                <p>
                  • Certificates represent learning completion, not professional
                  licensure.
                </p>
              </div>
              <div className="w-full h-3 mt-2 border-t border-dashed border-neutral-300"></div>
            </div>

            {/* Section 10: Third-Party Links & Tools */}
            <div className="space-y-6 px-2">
              <h2 className="text-2xl sm:text-3xl font-normal text-text-primary font-inter-display">
                10. Third-Party Links & Tools
              </h2>
              <div className="text-text-primary font-inter-display text-base md:text-lg lg:text-xl leading-relaxed">
                <p>
                  Our Platform may link to third-party websites or tools (e.g.,
                  certification bodies, learning tools).
                </p>
                <p>
                  We are not responsible for their content, policies, or
                  practices.
                </p>
                <p>Use them at your own discretion.</p>
              </div>
              <div className="w-full h-3 mt-2 border-t border-dashed border-neutral-300"></div>
            </div>

            {/* Section 11: Data Privacy */}
            <div className="space-y-6 px-2">
              <h2 className="text-2xl sm:text-3xl font-normal text-text-primary font-inter-display">
                11. Data Privacy
              </h2>
              <div className="text-text-primary font-inter-display text-base md:text-lg lg:text-xl leading-relaxed">
                <p>
                  We collect and process your data as outlined in our{" "}
                  <Link
                    className=" underline underline-offset-5 decoration-1 decoration-text-primary hover:text-primary transition-all duration-300"
                    to="/privacy-policy"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
                <p>
                  By using the Platform, you consent to our data handling
                  practices, including analytics and communications.
                </p>
              </div>
              <div className="w-full h-3 mt-2 border-t border-dashed border-neutral-300"></div>
            </div>

            {/* Section 12: Limitation of Liability */}
            <div className="space-y-6 px-2">
              <h2 className="text-2xl sm:text-3xl font-normal text-text-primary font-inter-display">
                12. Limitation of Liability
              </h2>
              <div className="text-text-primary font-inter-display text-base md:text-lg lg:text-xl leading-relaxed">
                <p>To the fullest extent permitted by law:</p>
                <br />
                <p>
                  • CYBERLABS INDIA is not liable for any loss, damage, or data
                  breach arising from misuse of the Platform.
                </p>
                <p>
                  • Training simulators are for educational purposes only; we
                  are not responsible for any real-world system misuse based on
                  them.
                </p>
                <p>
                  • Our total liability shall not exceed the amount paid by you
                  for the specific course or service.
                </p>
              </div>
              <div className="w-full h-3 mt-2 border-t border-dashed border-neutral-300"></div>
            </div>

            {/* Section 13: Suspension & Termination */}
            <div className="space-y-6 px-2">
              <h2 className="text-2xl sm:text-3xl font-normal text-text-primary font-inter-display">
                13. Suspension & Termination
              </h2>
              <div className="text-text-primary font-inter-display text-base md:text-lg lg:text-xl leading-relaxed">
                <p>We may suspend or terminate your account if:</p>
                <br />
                <p>• You breach these Terms.</p>
                <p>
                  • Engage in unethical or malicious activity within simulators.
                </p>
                <p>
                  • Misuse intellectual property or share confidential training
                  materials.
                </p>
                <br />
                <p>
                  Upon termination, your access to all courses, labs, and
                  simulators will be revoked immediately.
                </p>
              </div>
              <div className="w-full h-3 mt-2 border-t border-dashed border-neutral-300"></div>
            </div>

            {/* Section 14: Changes to Terms */}
            <div className="space-y-6 px-2">
              <h2 className="text-2xl sm:text-3xl font-normal text-text-primary font-inter-display">
                14. Changes to Terms
              </h2>
              <div className="text-text-primary font-inter-display text-base md:text-lg lg:text-xl leading-relaxed">
                <p>We may modify these Terms periodically.</p>
                <p>
                  Updates will be posted on this page with the "Last Updated"
                  date.
                </p>
                <p>
                  Continued use after such updates implies your acceptance of
                  the revised Terms.
                </p>
              </div>
              <div className="w-full h-3 mt-2 border-t border-dashed border-neutral-300"></div>
            </div>

            {/* Section 15: Governing Law & Jurisdiction */}
            <div className="space-y-6 px-2">
              <h2 className="text-2xl sm:text-3xl font-normal text-text-primary font-inter-display">
                15. Governing Law and Jurisdiction
              </h2>
              <div className="text-text-primary font-inter-display text-base md:text-lg lg:text-xl leading-relaxed">
                <p>
                  These Terms are governed by the laws of India, with
                  jurisdiction in Bangalore, Karnataka.
                </p>
                <p>
                  Any disputes shall be subject to the exclusive jurisdiction of
                  Bangalore courts.
                </p>
              </div>
            </div>
            <div className="w-full h-3 mt-2 border-t border-dashed border-neutral-300"></div>
          </div>

          {/* Contact Information */}
          <div className="mt-20 space-y-8 px-2">
            <h2 className="text-2xl sm:text-3xl text-text-primary font-inter-display font-normal">
              16. Contact Information
            </h2>

            <p className="text-text-primary font-inter-display text-base md:text-lg lg:text-xl leading-relaxed">
              For any questions or concerns about these Terms, please reach out
              to:
            </p>

            <div className="space-y-4 px-2">
              <div>
                <p className="text-text-primary font-inter-display font-semibold text-base md:text-lg lg:text-xl">
                  Registered Entity:
                </p>
                <p className="text-text-primary font-inter-display text-base md:text-lg lg:text-xl mt-1">
                  {CONTACT.registeredEntity}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-primary text-2xl md:text-3xl lg:text-4xl shrink-0" />
                <div>
                  <p className="text-text-primary font-inter-display font-normal text-base md:text-lg lg:text-xl">
                    Office Address:
                  </p>
                  <p className="text-text-primary font-inter-display text-base md:text-lg lg:text-xl mt-1">
                    {CONTACT.officeAddressIndia[0]}<br />
                    {CONTACT.officeAddressIndia[1]}<br />
                    {CONTACT.officeAddressIndia[2]}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-primary text-xl md:text-2xl lg:text-3xl shrink-0" />
                <div>
                  <p className="text-text-primary font-inter-display font-normal text-base md:text-lg lg:text-xl">
                    Email
                  </p>
                  <a
                    href={`mailto:${CONTACT.supportEmail}`}
                    className="text-text-primary hover:text-primary/80 transition-colors duration-300 font-inter-display text-base md:text-lg lg:text-xl underline underline-offset-5 decoration-1 decoration-text-primary"
                  >
                    {CONTACT.supportEmail}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-16 pt-8 border-t border-text-primary/20 border-dashed px-2">
            <p className="text-text-primary font-inter-display font-medium text-base md:text-lg lg:text-xl text-center py-2"
              style={{
                background:
                  "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
              }}
            >
              By using our platform, you acknowledge that you have read,
              understood, and agree to be bound by these Terms & Conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndCondition;
