import TermsHero from "@/components/TermsHero";
import { Link } from "react-router";
import { CONTACT } from "@/constants/contactInfo";

const TermsAndCondition = () => {
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
        <TermsHero />

        <section className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="w-full max-w-6xl mx-auto">
            {/* Badge - matches site style */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-300 bg-white/80 backdrop-blur-sm mb-8 sm:mb-10 ring ring-neutral-300 ring-offset-2 md:ring-offset-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-file-text text-neutral-700">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" />
                <path d="M9 9l1 0" />
                <path d="M9 13l6 0" />
                <path d="M9 17l6 0" />
              </svg>
              <span className="text-sm md:text-base font-inter-display font-medium text-neutral-700">
                Terms & Conditions
              </span>
            </div>

            {/* Content card - border/ring like other site sections */}
            <div className="relative rounded-xl border border-neutral-200 bg-white ring ring-neutral-300 ring-offset-4 md:ring-offset-8 p-6 sm:p-8 md:p-10 lg:p-12">
              <div className="prose prose-neutral max-w-none">
                <p className="text-sm sm:text-base text-neutral-500 font-inter-display mb-8 italic">
                  Last Updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </p>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-inter-display mb-4">
                    1. Introduction
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    Welcome to CYBERLABS INDIA (&quot;WE&quot;, &quot;OUR&quot;, &quot;US&quot;).
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    These TERMS &amp; CONDITIONS (&quot;TERMS&quot;) govern your access and use of our website, learning platform, simulators, and related services (collectively, the &quot;PLATFORM&quot;).
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed">
                    By using the Platform, you agree to be bound by these Terms. If you do not agree, please discontinue use immediately.
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-inter-display mb-4">
                    2. Definitions
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    For clarity:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display ml-4">
                    <li>&quot;PLATFORM&quot; refers to cyberslabs.in, its subdomains, web applications, and associated online services.</li>
                    <li>&quot;USER&quot;, &quot;YOU&quot;, or &quot;LEARNER&quot; means any individual or entity accessing or using our Platform.</li>
                    <li>&quot;PROGRAMS&quot; refer to online courses, labs, simulators, or certifications offered through CYBERLABS INDIA.</li>
                    <li>&quot;CONTENT&quot; means all materials, videos, exercises, text, graphics, and intellectual property available on the Platform.</li>
                  </ul>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-inter-display mb-4">
                    3. Eligibility
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    To register and access CYBERLABS INDIA:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display ml-4">
                    <li>You must be at least 16 years old or have parental consent.</li>
                    <li>You must provide accurate and complete information during signup.</li>
                    <li>We reserve the right to deny or revoke access if false information or misuse is detected.</li>
                  </ul>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-inter-display mb-4">
                    4. Account Registration &amp; Security
                  </h3>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display ml-4">
                    <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
                    <li>Any activity under your account is deemed to be by you.</li>
                    <li>Notify us immediately at <a href={`mailto:${CONTACT.supportEmail}`} className="text-primary hover:underline">{CONTACT.supportEmail}</a> if you suspect unauthorized use.</li>
                    <li>We are not liable for losses due to compromised credentials.</li>
                  </ul>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-inter-display mb-4">
                    5. Use of Platform
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    You agree to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display ml-4">
                    <li>Use the Platform solely for lawful educational purposes.</li>
                    <li>Not attempt to hack, reverse-engineer, disrupt, or exploit the Platform or simulator environments.</li>
                    <li>Not share course materials, simulations, or credentials with others.</li>
                    <li>Respect all intellectual property and copyright laws.</li>
                  </ul>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed">
                    Violation may lead to account suspension or permanent ban without refund.
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-inter-display mb-4">
                    6. Programs, Labs &amp; Simulators
                  </h3>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display ml-4">
                    <li>Access to labs and simulators is granted for the duration of your subscription or course.</li>
                    <li>You must not replicate, distribute, or use the lab environment or simulator code for personal gain.</li>
                    <li>All exercises, attack simulations, and defense drills are educational and sandboxed - no real networks or systems are targeted.</li>
                    <li>We may update or modify course content at any time for improvement.</li>
                  </ul>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-inter-display mb-4">
                    7. Payments &amp; Refund Policy
                  </h3>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display ml-4">
                    <li>All fees are displayed in USD ($) or equivalent currency and are non-transferable.</li>
                    <li>Payments are processed via secure gateways.</li>
                    <li>Refunds are available only under CYBERLABS INDIA&apos;s Refund Policy, accessible at <Link to="/refund-policy" className="text-primary hover:underline">cyberslabs.in/refund-policy</Link>.</li>
                    <li>We may revise pricing or offers periodically.</li>
                  </ul>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-inter-display mb-4">
                    8. Intellectual Property Rights
                  </h3>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display ml-4">
                    <li>All materials, simulators, graphics, videos, and course content are intellectual property of CYBERLABS INDIA.</li>
                    <li>You are granted a limited, non-exclusive, non-transferable license to use the Platform for personal learning only.</li>
                    <li>You may not copy, modify, distribute, sell, or reproduce any part of our content without written permission.</li>
                  </ul>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-inter-display mb-4">
                    9. Certificates &amp; Assessments
                  </h3>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display ml-4">
                    <li>Certificates are issued upon course or track completion.</li>
                    <li>We reserve the right to verify identity, performance, or eligibility before awarding certificates.</li>
                    <li>Certificates represent learning completion, not professional licensure.</li>
                  </ul>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-inter-display mb-4">
                    10. Third-Party Links &amp; Tools
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    Our Platform may link to third-party websites or tools (e.g., certification bodies, learning tools).
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    We are not responsible for their content, policies, or practices.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed">
                    Use them at your own discretion.
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-inter-display mb-4">
                    11. Data Privacy
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    We collect and process your data as outlined in our <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed">
                    By using the Platform, you consent to our data handling practices, including analytics and communications.
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-inter-display mb-4">
                    12. Limitation of Liability
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    To the fullest extent permitted by law:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display ml-4">
                    <li>CYBERLABS INDIA is not liable for any loss, damage, or data breach arising from misuse of the Platform.</li>
                    <li>Training simulators are for educational purposes only; we are not responsible for any real-world system misuse based on them.</li>
                    <li>Our total liability shall not exceed the amount paid by you for the specific course or service.</li>
                  </ul>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-inter-display mb-4">
                    13. Suspension &amp; Termination
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    We may suspend or terminate your account if:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display ml-4">
                    <li>You breach these Terms.</li>
                    <li>Engage in unethical or malicious activity within simulators.</li>
                    <li>Misuse intellectual property or share confidential training materials.</li>
                  </ul>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed">
                    Upon termination, your access to all courses, labs, and simulators will be revoked immediately.
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-inter-display mb-4">
                    14. Changes to Terms
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    We may modify these Terms periodically.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    Updates will be posted on this page with the &quot;Last Updated&quot; date.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed">
                    Continued use after such updates implies your acceptance of the revised Terms.
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-inter-display mb-4">
                    15. Governing Law and Jurisdiction
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    These Terms are governed by the laws of India, with jurisdiction in Bangalore, Karnataka.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed">
                    Any disputes shall be subject to the exclusive jurisdiction of Bangalore courts.
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-inter-display mb-4">
                    16. Contact Information
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    For any questions or concerns about these Terms, please reach out to:
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
                    By using our platform, you acknowledge that you have read, understood, and agree to be bound by these Terms &amp; Conditions.
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

export default TermsAndCondition;
