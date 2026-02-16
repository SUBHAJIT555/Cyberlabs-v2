import Hero from "../components/ui/Hero";
import cookiePolicyHeroImage from "../assets/img/HeroImage/CookiePolicyHero.webp";
import { CONTACT } from "@/constants/contactInfo";

const CookiePolicy = () => {
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
        {/* Hero Section - Keep as is */}
        <Hero
          headline="Cookie Policy"
          subtext="Understanding how we use cookies and tracking technologies on our platform"
          backgroundImage={cookiePolicyHeroImage}
          showDivider={false}
          height="md"
        />

        <section className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="w-full max-w-6xl mx-auto">
            {/* Badge - matches site style */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-300 bg-white/80 backdrop-blur-sm mb-8 sm:mb-10 ring ring-neutral-300 ring-offset-2 md:ring-offset-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-cookie text-neutral-700">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M8 13v.01" />
                <path d="M12 17v.01" />
                <path d="M12 12v.01" />
                <path d="M16 14v.01" />
                <path d="M11 8v.01" />
                <path d="M13.148 3.476l2.667 1.104a4 4 0 0 0 4.656 6.14l.053 .132a3 3 0 0 1 0 2.296q -.745 1.18 -1.024 1.852q -.283 .684 -.66 2.216a3 3 0 0 1 -1.624 1.623q -1.572 .394 -2.216 .661q -.712 .295 -1.852 1.024a3 3 0 0 1 -2.296 0q -1.203 -.754 -1.852 -1.024q -.707 -.292 -2.216 -.66a3 3 0 0 1 -1.623 -1.624q -.397 -1.577 -.661 -2.216q -.298 -.718 -1.024 -1.852a3 3 0 0 1 0 -2.296q .719 -1.116 1.024 -1.852q .257 -.62 .66 -2.216a3 3 0 0 1 1.624 -1.623q 1.547 -.384 2.216 -.661q .687 -.285 1.852 -1.024a3 3 0 0 1 2.296 0" />
              </svg>
              <span className="text-sm md:text-base font-inter-display font-medium text-neutral-700">
                Cookie Policy
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
                    This Cookie Policy explains how CYBERLABS INDIA (&quot;WE&quot;, &quot;OUR&quot;, &quot;US&quot;) uses cookies and similar tracking technologies on our website and learning platform (collectively, the &quot;PLATFORM&quot;).
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed">
                    By continuing to browse or use our Platform, you consent to the use of cookies as described in this Policy.
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-inter-display mb-4">
                    2. What Are Cookies?
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    Cookies are small text files stored on your device (computer, tablet, or smartphone) when you visit a website.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    They help the site recognize your device, remember preferences, and improve functionality.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed">
                    Cookies do not give us access to your computer or any personal data beyond what you choose to share.
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-inter-display mb-4">
                    3. Why We Use Cookies
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    We use cookies to ensure the best possible experience for learners and visitors. Specifically, cookies help us:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display ml-4">
                    <li>Enable essential website functions (login sessions, authentication).</li>
                    <li>Personalize your experience by remembering settings and preferences.</li>
                    <li>Analyze performance and usage through analytics tools.</li>
                    <li>Improve marketing by understanding user interest and engagement.</li>
                    <li>Enhance simulator and lab interactions by saving session states.</li>
                  </ul>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-inter-display mb-4">
                    4. Types of Cookies We Use
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display font-semibold mb-2">
                    A. Essential (Strictly Necessary) Cookies
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-2">
                    These are required for the Platform to function properly.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    They include login authentication, security tokens, and session maintenance.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    Example: Session cookies that keep you logged in while using CYBERLABS or simulators.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display font-semibold mb-2">
                    B. Performance &amp; Analytics Cookies
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-2">
                    Used to collect anonymous information about how users interact with the Platform.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    This helps us optimize speed, navigation, and overall learning experience.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    Example: Google Analytics, Hotjar (used to understand which sections users engage with).
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display font-semibold mb-2">
                    C. Functional Cookies
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-2">
                    Allow the Platform to remember your preferences - such as dark mode, selected program, or language settings.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    Example: Remembering whether you prefer dark/light theme inside the simulator dashboard.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display font-semibold mb-2">
                    D. Marketing &amp; Third-Party Cookies
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-2">
                    Used to deliver relevant ads, track conversions, and improve communications (only if you&apos;ve consented).
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-2">
                    Example: Meta Pixel, Google Ads Remarketing, LinkedIn Insights Tag.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed">
                    You can disable these at any time (see Section 7 below).
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-inter-display mb-4">
                    5. Third-Party Cookies
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    Some cookies are placed by third parties when you access our site (e.g., YouTube videos, Google login, LinkedIn widgets).
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    We do not control how these cookies operate.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed">
                    Please review the privacy and cookie policies of those third-party services for more information.
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-inter-display mb-4">
                    6. Duration of Cookies
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-2">
                    <strong>Session Cookies</strong> → Temporary; deleted when you close your browser.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-2">
                    <strong>Persistent Cookies</strong> → Remain on your device until deleted or expired automatically.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed">
                    <strong>Analytics Cookies</strong> → Typically retained for 6–12 months (depending on provider).
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-inter-display mb-4">
                    7. Managing &amp; Disabling Cookies
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    You can control or delete cookies as you wish:
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    Adjust cookie preferences directly via our Cookie Consent Banner.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    Block or delete cookies from your browser settings:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display ml-4">
                    <li>Chrome → Settings → Privacy → Cookies and site data</li>
                    <li>Firefox → Preferences → Privacy &amp; Security → Cookies</li>
                    <li>Edge/Safari → Preferences → Privacy</li>
                  </ul>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed">
                    Note: Disabling certain cookies may limit functionality (e.g., login sessions or simulator progress tracking).
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-inter-display mb-4">
                    8. Consent
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    When you first visit our Platform, you&apos;ll see a cookie consent banner asking for your preferences.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    By clicking &quot;ACCEPT&quot; or continuing to use the site, you consent to our use of cookies per this Policy.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed">
                    You can update your consent anytime via the Cookie Settings link in the footer.
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-inter-display mb-4">
                    9. Updates to This Policy
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    We may update this Cookie Policy occasionally to reflect technology or legal changes.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed">
                    The updated version will be posted with a new &quot;LAST UPDATED&quot; date at the top.
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-inter-display mb-4">
                    10. Contact Us
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    If you have questions about our cookie usage or data practices, contact us:
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-inter-display mb-4">
                    11. Contact Information
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    For any questions or concerns about this Cookie Policy, please reach out to:
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
                    By using our platform, you acknowledge that you have read, understood, and agree to our Cookie Policy.
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

export default CookiePolicy;
