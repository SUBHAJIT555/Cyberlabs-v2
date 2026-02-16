import Hero from "../components/ui/Hero";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaChrome,
  FaFirefox,
  FaEdge,
  FaSafari,
  FaBrain,
  FaBullseye,
  FaChartBar,
  FaCheck,
  FaCog,
} from "react-icons/fa";
import cookiePolicyHeroImage from "../assets/img/HeroImage/CookiePolicyHero.webp";
import { CONTACT } from "@/constants/contactInfo";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero
        headline="Cookie Policy"
        subtext="Understanding how we use cookies and tracking technologies on our platform"
        backgroundImage={cookiePolicyHeroImage}
        showDivider={false}
        height="md"
        // ctaButtons={[
        //   {
        //     text: "Download Cookie Policy",
        //     link: "/cookie-policy.pdf",
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

          {/* Cookie Policy Sections */}
          <div className="space-y-3">
            {/* Section 1: Introduction */}
            <div className="space-y-6 px-2">
              <h2 className="text-2xl sm:text-3xl font-normal text-text-primary font-inter-display">
                1. Introduction
              </h2>
              <div className="text-text-primary font-inter-display text-base md:text-lg lg:text-xl leading-relaxed">
                <p>
                  This Cookie Policy explains how CYBERLABS INDIA ("WE", "OUR",
                  "US") uses cookies and similar tracking technologies on our
                  website and learning platform (collectively, the "PLATFORM").
                </p>
                <br />
                <p>
                  By continuing to browse or use our Platform, you consent to
                  the use of cookies as described in this Policy.
                </p>
              </div>
              <div className="w-full h-3 mt-2 border-t border-dashed border-neutral-300"></div>
            </div>

            {/* Section 2: What Are Cookies? */}
            <div className="space-y-6 px-2">
              <h2 className="text-2xl sm:text-3xl font-normal text-text-primary font-inter-display">
                2. What Are Cookies?
              </h2>
              <div className="text-text-primary font-inter-display text-base md:text-lg lg:text-xl leading-relaxed">
                <p>
                  Cookies are small text files stored on your device (computer,
                  tablet, or smartphone) when you visit a website.
                </p>
                <p>
                  They help the site recognize your device, remember
                  preferences, and improve functionality.
                </p>
                <br />
                <p>
                  Cookies do not give us access to your computer or any personal
                  data beyond what you choose to share.
                </p>
              </div>
              <div className="w-full h-3 mt-2 border-t border-dashed border-neutral-300"></div>
            </div>

            {/* Section 3: Why We Use Cookies */}
            <div className="space-y-6 px-2">
              <h2 className="text-2xl sm:text-3xl font-normal text-text-primary font-inter-display">
                3. Why We Use Cookies
              </h2>
              <div className="text-text-primary font-inter-display text-base md:text-lg lg:text-xl leading-relaxed">
                <p>
                  We use cookies to ensure the best possible experience for
                  learners and visitors. Specifically, cookies help us:
                </p>
                <br />
                <p>
                  <FaCheck className="inline-block mr-2" /> Enable essential
                  website functions (login sessions, authentication).
                </p>
                <p>
                  <FaCog className="inline-block mr-2" /> Personalize your
                  experience by remembering settings and preferences.
                </p>
                <p>
                  <FaChartBar className="inline-block mr-2" /> Analyze
                  performance and usage through analytics tools.
                </p>
                <p>
                  <FaBullseye className="inline-block mr-2" /> Improve marketing
                  by understanding user interest and engagement.
                </p>
                <p>
                  <FaBrain className="inline-block mr-2" /> Enhance simulator
                  and lab interactions by saving session states.
                </p>
              </div>
              <div className="w-full h-3 mt-2 border-t border-dashed border-neutral-300"></div>
            </div>

            {/* Section 4: Types of Cookies We Use */}
            <div className="space-y-6 px-2">
              <h2 className="text-2xl sm:text-3xl font-normal text-text-primary font-inter-display">
                4. Types of Cookies We Use
              </h2>
              <div className="text-text-primary font-inter-display text-base md:text-lg lg:text-xl leading-relaxed">
                <p className="text-text-primary font-semibold">
                  A. Essential (Strictly Necessary) Cookies
                </p>
                <p>These are required for the Platform to function properly.</p>
                <p>
                  They include login authentication, security tokens, and
                  session maintenance.
                </p>
                <p>
                  Example: Session cookies that keep you logged in while using
                  CYBERLABS or simulators.
                </p>
                <br />
                <p className="text-text-primary font-semibold">
                  B. Performance & Analytics Cookies
                </p>
                <p>
                  Used to collect anonymous information about how users interact
                  with the Platform.
                </p>
                <p>
                  This helps us optimize speed, navigation, and overall learning
                  experience.
                </p>
                <p>
                  Example: Google Analytics, Hotjar (used to understand which
                  sections users engage with).
                </p>
                <br />
                <p className="text-text-primary font-semibold">
                  C. Functional Cookies
                </p>
                <p>
                  Allow the Platform to remember your preferences - such as dark
                  mode, selected program, or language settings.
                </p>
                <p>
                  Example: Remembering whether you prefer dark/light theme
                  inside the simulator dashboard.
                </p>
                <br />
                <p className="text-text-primary font-semibold">
                  D. Marketing & Third-Party Cookies
                </p>
                <p>
                  Used to deliver relevant ads, track conversions, and improve
                  communications (only if you've consented).
                </p>
                <p>
                  Example: Meta Pixel, Google Ads Remarketing, LinkedIn Insights
                  Tag.
                </p>
                <p>You can disable these at any time (see Section 7 below).</p>
              </div>
              <div className="w-full h-3 mt-2 border-t border-dashed border-neutral-300"></div>
            </div>

            {/* Section 5: Third-Party Cookies */}
            <div className="space-y-6 px-2">
              <h2 className="text-2xl sm:text-3xl font-normal text-text-primary font-inter-display">
                5. Third-Party Cookies
              </h2>
              <div className="text-text-primary font-inter-display text-base md:text-lg lg:text-xl leading-relaxed">
                <p>
                  Some cookies are placed by third parties when you access our
                  site (e.g., YouTube videos, Google login, LinkedIn widgets).
                </p>
                <p>We do not control how these cookies operate.</p>
                <p>
                  Please review the privacy and cookie policies of those
                  third-party services for more information.
                </p>
              </div>
              <div className="w-full h-3 mt-2 border-t border-dashed border-neutral-300"></div>
            </div>

            {/* Section 6: Duration of Cookies */}
            <div className="space-y-6 px-2">
              <h2 className="text-2xl sm:text-3xl font-normal text-text-primary font-inter-display">
                6. Duration of Cookies
              </h2>
              <div className="text-text-primary font-inter-display text-base md:text-lg lg:text-xl leading-relaxed">
                <p>
                  <strong>Session Cookies</strong> →
                  Temporary; deleted when you close your browser.
                </p>
                <p>
                  <strong>Persistent Cookies</strong> →
                  Remain on your device until deleted or expired automatically.
                </p>
                <p>
                  <strong>Analytics Cookies</strong> →
                  Typically retained for 6–12 months (depending on provider).
                </p>
              </div>
              <div className="w-full h-3 mt-2 border-t border-dashed border-neutral-300"></div>
            </div>

            {/* Section 7: Managing & Disabling Cookies */}
            <div className="space-y-6 px-2">
              <h2 className="text-2xl sm:text-3xl font-normal text-text-primary font-inter-display">
                7. Managing & Disabling Cookies
              </h2>
              <div className="text-text-primary font-inter-display text-base md:text-lg lg:text-xl leading-relaxed">
                <p>You can control or delete cookies as you wish:</p>
                <br />
                <p>
                  Adjust cookie preferences directly via our Cookie Consent
                  Banner.
                </p>
                <p>Block or delete cookies from your browser settings:</p>
                <br />
                <div className="flex items-center gap-2">
                  [<FaChrome className="text-xl" />]
                  <p>Chrome → Settings → Privacy → Cookies and site data</p>
                </div>
                <div className="flex items-center gap-2">
                  [<FaFirefox className="text-xl" />]
                  <p>Firefox → Preferences → Privacy & Security → Cookies</p>
                </div>
                <div className="flex items-center gap-2">
                  [<FaEdge className="text-xl" />/
                  <FaSafari className="text-xl ml-1" />]
                  <p>Edge/Safari → Preferences → Privacy</p>
                </div>
                <br />
                <p>
                  Note: Disabling certain cookies may limit functionality (e.g.,
                  login sessions or simulator progress tracking).
                </p>
              </div>
              <div className="w-full h-3 mt-2 border-t border-dashed border-neutral-300"></div>
            </div>

            {/* Section 8: Consent */}
            <div className="space-y-6 px-2">
              <h2 className="text-2xl sm:text-3xl font-normal text-text-primary font-inter-display">
                8. Consent
              </h2>
              <div className="text-text-primary font-inter-display text-base md:text-lg lg:text-xl leading-relaxed">
                <p>
                  When you first visit our Platform, you'll see a cookie consent
                  banner asking for your preferences.
                </p>
                <p>
                  By clicking "ACCEPT" or continuing to use the site, you
                  consent to our use of cookies per this Policy.
                </p>
                <p>
                  You can update your consent anytime via the Cookie Settings
                  link in the footer.
                </p>
              </div>
              <div className="w-full h-3 mt-2 border-t border-dashed border-neutral-300"></div>
            </div>

            {/* Section 9: Updates to This Policy */}
            <div className="space-y-6 px-2">
              <h2 className="text-2xl sm:text-3xl font-normal text-text-primary font-inter-display">
                9. Updates to This Policy
              </h2>
              <div className="text-text-primary font-inter-display text-base md:text-lg lg:text-xl leading-relaxed">
                <p>
                  We may update this Cookie Policy occasionally to reflect
                  technology or legal changes.
                </p>
                <p>
                  The updated version will be posted with a new "LAST UPDATED"
                  date at the top.
                </p>
              </div>
              <div className="w-full h-3 mt-2 border-t border-dashed border-neutral-300"></div>
            </div>

            {/* Section 10: Contact Us */}
            <div className="space-y-6 px-2">
              <h2 className="text-2xl sm:text-3xl font-normal text-text-primary font-inter-display">
                10. Contact Us
              </h2>
              <div className="text-text-primary font-inter-display text-base md:text-lg lg:text-xl leading-relaxed">
                <p>
                  If you have questions about our cookie usage or data
                  practices, contact us:
                </p>
              </div>
            </div>
            <div className="w-full h-3 mt-2 border-t border-dashed border-neutral-300"></div>
          </div>

          {/* Contact Information */}
          <div className="mt-6 space-y-8 px-2">
            <h2 className="text-2xl sm:text-3xl text-text-primary font-inter-display font-normal">
              11. Contact Information
            </h2>

            <p className="text-text-primary font-inter-display text-base md:text-lg lg:text-xl leading-relaxed">
              For any questions or concerns about this Cookie Policy, please reach out
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
              understood, and agree to our Cookie Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
