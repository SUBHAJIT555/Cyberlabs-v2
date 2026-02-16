import Hero from "../components/ui/Hero";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import privacyPolicyHeroImage from "../assets/img/HeroImage/PrivacyPolicyHero.webp";
import { CONTACT } from "@/constants/contactInfo";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero
        headline="Privacy Policy"
        subtext="Understanding how we collect, use, and protect your personal information"
        backgroundImage={privacyPolicyHeroImage}
        showDivider={false}
        height="md"
        // ctaButtons={[
        //   {
        //     text: "Download Privacy Policy",
        //     link: "/privacy-policy.pdf",
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

          {/* Privacy Policy Sections */}
          <div className="space-y-3">
            {/* Section 1: Introduction */}
            <div className="space-y-6 px-2">
              <h2 className="text-2xl sm:text-3xl font-normal text-text-primary font-inter-display">
                1. Introduction
              </h2>
              <div className="text-text-primary font-inter-display text-base md:text-lg lg:text-xl leading-relaxed">
                <p>
                  At CYBERLABS INDIA ("WE", "OUR", "US"), your privacy is
                  important to us.
                </p>
                <p>
                  This Privacy Policy explains how we collect, use, and protect
                  your personal information when you access our website,
                  platform, simulators, and training programs (collectively, the
                  "PLATFORM").
                </p>
                <br />
                <p>
                  By using our Platform, you consent to the collection and use
                  of information as described in this Policy.
                </p>
              </div>
              <div className="w-full h-3 mt-2 border-t border-dashed border-neutral-300"></div>
            </div>

            {/* Section 2: Information We Collect */}
            <div className="space-y-6 px-2">
              <h2 className="text-2xl sm:text-3xl font-normal text-text-primary font-inter-display">
                2. Information We Collect
              </h2>
              <div className="text-text-primary font-inter-display text-base md:text-lg lg:text-xl leading-relaxed">
                <p>
                  We collect information to provide and improve our services.
                  This includes:
                </p>
                <br />
                <p className="text-text-primary font-semibold">
                  A. Information You Provide Directly
                </p>
                <p>
                  • NAME, EMAIL, PHONE NUMBER, and LOCATION (during signup or
                  demo registration).
                </p>
                <p>
                  • EDUCATIONAL BACKGROUND OR PROFESSIONAL DETAILS (when
                  enrolling in programs).
                </p>
                <p>
                  • PAYMENT AND BILLING INFORMATION (processed securely via
                  third-party gateways).
                </p>
                <p>• MESSAGES, REVIEWS, OR SUPPORT REQUESTS YOU SEND TO US.</p>
                <br />
                <p className="text-text-primary font-semibold">
                  B. Automatically Collected Information
                </p>
                <p>• Device and browser type, IP address, and OS version.</p>
                <p>
                  • Platform usage logs, activity on simulators, and lab
                  interactions.
                </p>
                <p>
                  • Cookies and analytics data (to improve user experience).
                </p>
                <br />
                <p className="text-text-primary font-semibold">
                  C. From Third-Party Integrations
                </p>
                <p>
                  • When you sign in via Google, LinkedIn, or other OAuth
                  providers.
                </p>
                <p>
                  • When you access external tools or certification bodies
                  linked through our Platform.
                </p>
              </div>
              <div className="w-full h-3 mt-2 border-t border-dashed border-neutral-300"></div>
            </div>

            {/* Section 3: How We Use Your Information */}
            <div className="space-y-6 px-2">
              <h2 className="text-2xl sm:text-3xl font-normal text-text-primary font-inter-display">
                3. How We Use Your Information
              </h2>
              <div className="text-text-primary font-inter-display text-base md:text-lg lg:text-xl leading-relaxed">
                <p>We use the collected information to:</p>
                <br />
                <p>
                  • Provide access to our courses, simulators, and labs.
                </p>
                <p>
                  • Personalize learning content and track progress.
                </p>
                <p>
                  • Send important updates, certifications, and system
                  notifications.
                </p>
                <p>
                  • Improve the Platform, training modules, and simulator
                  experiences.
                </p>
                <p>
                  • Respond to queries, technical issues, or customer support
                  requests.
                </p>
                <p>
                  • Send promotional materials (only if you've opted in).
                </p>
              </div>
              <div className="w-full h-3 mt-2 border-t border-dashed border-neutral-300"></div>
            </div>

            {/* Section 4: Cookies & Tracking Technologies */}
            <div className="space-y-6 px-2">
              <h2 className="text-2xl sm:text-3xl font-normal text-text-primary font-inter-display">
                4. Cookies & Tracking Technologies
              </h2>
              <div className="text-text-primary font-inter-display text-base md:text-lg lg:text-xl leading-relaxed">
                <p>We use cookies, web beacons, and similar technologies to:</p>
                <br />
                <p>• Maintain user sessions and preferences.</p>
                <p>
                  • Analyze usage patterns through analytics tools (like Google
                  Analytics).
                </p>
                <p>• Improve navigation, speed, and performance.</p>
                <br />
                <p>
                  You can manage or disable cookies in your browser settings,
                  though certain Platform features may not function correctly
                  without them.
                </p>
              </div>
              <div className="w-full h-3 mt-2 border-t border-dashed border-neutral-300"></div>
            </div>

            {/* Section 5: Data Storage & Security */}
            <div className="space-y-6 px-2">
              <h2 className="text-2xl sm:text-3xl font-normal text-text-primary font-inter-display">
                5. Data Storage & Security
              </h2>
              <div className="text-text-primary font-inter-display text-base md:text-lg lg:text-xl leading-relaxed">
                <p>
                  All data is stored on secure, encrypted servers hosted in
                  India or trusted global data centers.
                </p>
                <br />
                <p>
                  We implement SSL encryption, firewall protection, and access
                  controls to safeguard your data.
                </p>
                <p>
                  Only authorized personnel have access to sensitive
                  information.
                </p>
                <br />
                <p>
                  Despite these measures, no online system is 100% secure - use
                  the Platform responsibly.
                </p>
              </div>
              <div className="w-full h-3 mt-2 border-t border-dashed border-neutral-300"></div>
            </div>

            {/* Section 6: Data Retention */}
            <div className="space-y-6 px-2">
              <h2 className="text-2xl sm:text-3xl font-normal text-text-primary font-inter-display">
                6. Data Retention
              </h2>
              <div className="text-text-primary font-inter-display text-base md:text-lg lg:text-xl leading-relaxed">
                <p>We retain your data:</p>
                <br />
                <p>
                  • As long as your account is active or needed for service
                  delivery.
                </p>
                <p>
                  • For a reasonable period after account deletion to comply
                  with legal or audit requirements.
                </p>
                <br />
                <p>
                  You may request permanent deletion by contacting{" "}
                  <a
                    href={`mailto:${CONTACT.supportEmail}`}
                    className="underline underline-offset-5 decoration-1 decoration-text-primary hover:text-primary transition-all duration-300"
                  >
                    {CONTACT.supportEmail}
                  </a>
                  .
                </p>
              </div>
              <div className="w-full h-3 mt-2 border-t border-dashed border-neutral-300"></div>
            </div>

            {/* Section 7: Information Sharing & Disclosure */}
            <div className="space-y-6 px-2">
              <h2 className="text-2xl sm:text-3xl font-normal text-text-primary font-inter-display">
                7. Information Sharing & Disclosure
              </h2>
              <div className="text-text-primary font-inter-display text-base md:text-lg lg:text-xl leading-relaxed">
                <p>We do not sell or rent your personal data.</p>
                <p>However, we may share limited data with:</p>
                <br />
                <p>
                  • Trusted partners or vendors assisting in hosting, payments,
                  or analytics.
                </p>
                <p>
                  • Certifying bodies (e.g., CompTIA, CEH) when you apply for
                  linked certifications.
                </p>
                <p>
                  • Government or law enforcement agencies when required by law.
                </p>
                <br />
                <p>
                  All third parties are bound by confidentiality and
                  data-protection agreements.
                </p>
              </div>
              <div className="w-full h-3 mt-2 border-t border-dashed border-neutral-300"></div>
            </div>

            {/* Section 8: Third-Party Services */}
            <div className="space-y-6 px-2">
              <h2 className="text-2xl sm:text-3xl font-normal text-text-primary font-inter-display">
                8. Third-Party Services
              </h2>
              <div className="text-text-primary font-inter-display text-base md:text-lg lg:text-xl leading-relaxed">
                <p>
                  Our Platform may include links or integrations to third-party
                  websites, tools, or certification partners.
                </p>
                <p>We are not responsible for their privacy practices.</p>
                <p>Please review their policies before using those services.</p>
              </div>
              <div className="w-full h-3 mt-2 border-t border-dashed border-neutral-300"></div>
            </div>

            {/* Section 9: Your Rights & Choices */}
            <div className="space-y-6 px-2">
              <h2 className="text-2xl sm:text-3xl font-normal text-text-primary font-inter-display">
                9. Your Rights & Choices
              </h2>
              <div className="text-text-primary font-inter-display text-base md:text-lg lg:text-xl leading-relaxed">
                <p>You have the right to:</p>
                <br />
                <p>• Access the data we hold about you.</p>
                <p>• Correct inaccurate or outdated information.</p>
                <p>• Request deletion of your personal data.</p>
                <p>• Withdraw consent for marketing communications.</p>
                <p>
                  • Export your learning records (where technically feasible).
                </p>
                <br />
                <p>
                  To exercise any of these rights, contact{" "}
                  <a
                    href={`mailto:${CONTACT.supportEmail}`}
                    className="underline underline-offset-5 decoration-1 decoration-text-primary hover:text-primary transition-all duration-300"
                  >
                    {CONTACT.supportEmail}
                  </a>
                  .
                </p>
              </div>
              <div className="w-full h-px bg-text-primary/30 to-transparent mt-8"></div>
            </div>

            {/* Section 10: Communications & Marketing */}
            <div className="space-y-6 px-2">
              <h2 className="text-2xl sm:text-3xl font-normal text-text-primary font-inter-display">
                10. Communications & Marketing
              </h2>
              <div className="text-text-primary font-inter-display text-base md:text-lg lg:text-xl leading-relaxed">
                <p>
                  We may send you emails or messages related to course updates,
                  new launches, or cybersecurity alerts.
                </p>
                <br />
                <p>
                  You can unsubscribe anytime using the link in our emails or
                  through your account settings.
                </p>
                <p>
                  We do not spam or share your contact details with advertisers.
                </p>
              </div>
              <div className="w-full h-3 mt-2 border-t border-dashed border-neutral-300"></div>
            </div>

            {/* Section 11: Data of Minors */}
            <div className="space-y-6 px-2">
              <h2 className="text-2xl sm:text-3xl font-normal text-text-primary font-inter-display">
                11. Data of Minors
              </h2>
              <div className="text-text-primary font-inter-display text-base md:text-lg lg:text-xl leading-relaxed">
                <p>Our services are intended for users aged 16 and above.</p>
                <p>
                  If you are under 16, parental or guardian consent is required.
                </p>
                <p>
                  If we learn that a child's data has been collected without
                  consent, we will delete it promptly.
                </p>
              </div>
              <div className="w-full h-3 mt-2 border-t border-dashed border-neutral-300"></div>
            </div>

            {/* Section 12: Data Transfers */}
            <div className="space-y-6 px-2">
              <h2 className="text-2xl sm:text-3xl font-normal text-text-primary font-inter-display">
                12. Data Transfers
              </h2>
              <div className="text-text-primary font-inter-display text-base md:text-lg lg:text-xl leading-relaxed">
                <p>
                  If we transfer your data outside India (for hosting or
                  analytics), it will be done under data-protection frameworks
                  that ensure adequate security and compliance with applicable
                  laws (such as GDPR-equivalent standards).
                </p>
              </div>
              <div className="w-full h-3 mt-2 border-t border-dashed border-neutral-300"></div>
            </div>

            {/* Section 13: Updates to This Policy */}
            <div className="space-y-6 px-2">
              <h2 className="text-2xl sm:text-3xl font-normal text-text-primary font-inter-display">
                13. Updates to This Policy
              </h2>
              <div className="text-text-primary font-inter-display text-base md:text-lg lg:text-xl leading-relaxed">
                <p>
                  We may update this Privacy Policy periodically to reflect new
                  features or legal requirements.
                </p>
                <p>
                  The updated version will be posted with a new "Last Updated"
                  date.
                </p>
                <p>
                  Continued use of the Platform means you accept those changes.
                </p>
              </div>
              <div className="w-full h-3 mt-2 border-t border-dashed border-neutral-300"></div>
            </div>

            {/* Section 14: Contact Us */}
            <div className="space-y-6 px-2">
              <h2 className="text-2xl sm:text-3xl font-normal text-text-primary font-inter-display">
                14. Contact Us
              </h2>
              <div className="text-text-primary font-inter-display text-base md:text-lg lg:text-xl leading-relaxed">
                <p>For questions, requests, or concerns related to privacy:</p>
              </div>
            </div>
            <div className="w-full h-3 mt-2 border-t border-dashed border-neutral-300"></div>
          </div>

          {/* Contact Information */}
          <div className="mt-6 space-y-8 px-2">
            <h2 className="text-2xl sm:text-3xl text-text-primary font-inter-display font-normal">
              15. Contact Information
            </h2>

            <p className="text-text-primary font-inter-display text-base md:text-lg lg:text-xl leading-relaxed">
              For any questions or concerns about this Privacy Policy, please reach out
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
              understood, and agree to our Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
