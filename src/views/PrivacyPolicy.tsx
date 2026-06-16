import PrivacyHero from "@/components/PrivacyHero";
import { CONTACT } from "@/constants/contactInfo";

const PrivacyPolicy = () => {
  return (
    <>
      {/* Fixed full-viewport dashed grid background - matches About, Contact */}
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
        <PrivacyHero />

        <section className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="w-full max-w-6xl mx-auto">
            {/* Badge - matches site style */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-300 bg-white/80 backdrop-blur-sm mb-8 sm:mb-10 ring ring-neutral-300 ring-offset-2 md:ring-offset-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-shield-lock text-neutral-700">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
                <path d="M12 11m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                <path d="M12 12l0 2.5" />
              </svg>
              <span className="text-sm md:text-base font-inter-display font-medium text-neutral-700">
                Privacy Policy
              </span>
            </div>

            {/* Content card - border/ring like other site sections */}
            <div className="relative rounded-xl border border-neutral-200 bg-white ring ring-neutral-300 ring-offset-4 md:ring-offset-8 p-6 sm:p-8 md:p-10 lg:p-12">
              <div className="prose prose-neutral max-w-none">
                <p className="text-sm sm:text-base text-neutral-500 font-inter-display mb-8 italic">
                  Last Updated: October 2025
                </p>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-inter-display mb-4">
                    1. Introduction
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    At CYBERLABS INDIA (&quot;WE&quot;, &quot;OUR&quot;, &quot;US&quot;), your privacy is important to us.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    This Privacy Policy explains how we collect, use, and protect your personal information when you access our website, platform, simulators, and training programs (collectively, the &quot;PLATFORM&quot;).
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed">
                    By using our Platform, you consent to the collection and use of information as described in this Policy.
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-inter-display mb-4">
                    2. Information We Collect
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    We collect information to provide and improve our services. This includes:
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display font-semibold mb-2">
                    A. Information You Provide Directly
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display ml-4">
                    <li>NAME, EMAIL, PHONE NUMBER, and LOCATION (during signup or demo registration).</li>
                    <li>EDUCATIONAL BACKGROUND OR PROFESSIONAL DETAILS (when enrolling in programs).</li>
                    <li>PAYMENT AND BILLING INFORMATION (processed securely via third-party gateways).</li>
                    <li>MESSAGES, REVIEWS, OR SUPPORT REQUESTS YOU SEND TO US.</li>
                  </ul>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display font-semibold mb-2">
                    B. Automatically Collected Information
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display ml-4">
                    <li>Device and browser type, IP address, and OS version.</li>
                    <li>Platform usage logs, activity on simulators, and lab interactions.</li>
                    <li>Cookies and analytics data (to improve user experience).</li>
                  </ul>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display font-semibold mb-2">
                    C. From Third-Party Integrations
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display ml-4">
                    <li>When you sign in via Google, LinkedIn, or other OAuth providers.</li>
                    <li>When you access external tools or certification bodies linked through our Platform.</li>
                  </ul>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-inter-display mb-4">
                    3. How We Use Your Information
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    We use the collected information to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display ml-4">
                    <li>Provide access to our courses, simulators, and labs.</li>
                    <li>Personalize learning content and track progress.</li>
                    <li>Send important updates, certifications, and system notifications.</li>
                    <li>Improve the Platform, training modules, and simulator experiences.</li>
                    <li>Respond to queries, technical issues, or customer support requests.</li>
                    <li>Send promotional materials (only if you&apos;ve opted in).</li>
                  </ul>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-inter-display mb-4">
                    4. Cookies &amp; Tracking Technologies
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    We use cookies, web beacons, and similar technologies to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display ml-4">
                    <li>Maintain user sessions and preferences.</li>
                    <li>Analyze usage patterns through analytics tools (like Google Analytics).</li>
                    <li>Improve navigation, speed, and performance.</li>
                  </ul>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed">
                    You can manage or disable cookies in your browser settings, though certain Platform features may not function correctly without them.
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-inter-display mb-4">
                    5. Data Storage &amp; Security
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    All data is stored on secure, encrypted servers hosted in India or trusted global data centers.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    We implement SSL encryption, firewall protection, and access controls to safeguard your data.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    Only authorized personnel have access to sensitive information.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed">
                    Despite these measures, no online system is 100% secure - use the Platform responsibly.
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-inter-display mb-4">
                    6. Data Retention
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    We retain your data:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display ml-4">
                    <li>As long as your account is active or needed for service delivery.</li>
                    <li>For a reasonable period after account deletion to comply with legal or audit requirements.</li>
                  </ul>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed">
                    You may request permanent deletion by contacting <a href={`mailto:${CONTACT.supportEmail}`} className="text-primary hover:underline">{CONTACT.supportEmail}</a>.
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-inter-display mb-4">
                    7. Information Sharing &amp; Disclosure
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    We do not sell or rent your personal data.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    However, we may share limited data with:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display ml-4">
                    <li>Trusted partners or vendors assisting in hosting, payments, or analytics.</li>
                    <li>Certifying bodies (e.g., CompTIA, CEH) when you apply for linked certifications.</li>
                    <li>Government or law enforcement agencies when required by law.</li>
                  </ul>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed">
                    All third parties are bound by confidentiality and data-protection agreements.
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-inter-display mb-4">
                    8. Third-Party Services
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    Our Platform may include links or integrations to third-party websites, tools, or certification partners.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    We are not responsible for their privacy practices.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed">
                    Please review their policies before using those services.
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-inter-display mb-4">
                    9. Your Rights &amp; Choices
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    You have the right to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display ml-4">
                    <li>Access the data we hold about you.</li>
                    <li>Correct inaccurate or outdated information.</li>
                    <li>Request deletion of your personal data.</li>
                    <li>Withdraw consent for marketing communications.</li>
                    <li>Export your learning records (where technically feasible).</li>
                  </ul>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed">
                    To exercise any of these rights, contact <a href={`mailto:${CONTACT.supportEmail}`} className="text-primary hover:underline">{CONTACT.supportEmail}</a>.
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-inter-display mb-4">
                    10. Communications &amp; Marketing
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    We may send you emails or messages related to course updates, new launches, or cybersecurity alerts.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    You can unsubscribe anytime using the link in our emails or through your account settings.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed">
                    We do not spam or share your contact details with advertisers.
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-inter-display mb-4">
                    11. Data of Minors
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    Our services are intended for users aged 16 and above.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    If you are under 16, parental or guardian consent is required.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed">
                    If we learn that a child&apos;s data has been collected without consent, we will delete it promptly.
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-inter-display mb-4">
                    12. Data Transfers
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed">
                    If we transfer your data outside India (for hosting or analytics), it will be done under data-protection frameworks that ensure adequate security and compliance with applicable laws (such as GDPR-equivalent standards).
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-inter-display mb-4">
                    13. Updates to This Policy
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    We may update this Privacy Policy periodically to reflect new features or legal requirements.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    The updated version will be posted with a new &quot;Last Updated&quot; date.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed">
                    Continued use of the Platform means you accept those changes.
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-inter-display mb-4">
                    14. Contact Us
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    For questions, requests, or concerns related to privacy:
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-inter-display mb-4">
                    15. Contact Information
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    For any questions or concerns about this Privacy Policy, please reach out to:
                  </p>
                  <div className="bg-neutral-100 rounded-lg border border-neutral-200 p-4 sm:p-6 ring ring-neutral-200 ring-offset-2">
                    <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display mb-2">
                      <strong>Registered Entity:</strong> {CONTACT.registeredEntity}
                    </p>
                    <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display mb-2">
                      <strong>Office Address:</strong><br />
                      {CONTACT.officeAddressIndia[0]}<br />
                      {CONTACT.officeAddressIndia[1]}<br />
                      {CONTACT.officeAddressIndia[2]}
                    </p>
                    <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display">
                      <strong>Email:</strong> <a href={`mailto:${CONTACT.supportEmail}`} className="text-primary hover:underline">{CONTACT.supportEmail}</a>
                    </p>
                  </div>
                </div>

                <div className="p-4 sm:p-6 bg-neutral-100 rounded-lg border border-neutral-200 ring ring-neutral-200 ring-offset-2">
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed">
                    By using our platform, you acknowledge that you have read, understood, and agree to our Privacy Policy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicy;
