import Hero from "../components/ui/Hero";
import refundPolicyHeroImage from "../assets/img/HeroImage/RefundSupportHero.webp";
import {
  FaExclamationTriangle,
} from "react-icons/fa";
import { CONTACT } from "@/constants/contactInfo";

const RefundPolicy = () => {
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
          headline="Refund & Cancellation Policy"
          subtext="Understanding our payment, cancellation, and refund policies for all services"
          backgroundImage={refundPolicyHeroImage}
          showDivider={false}
          height="md"
          
        />

        <section className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="w-full max-w-6xl mx-auto">
            {/* Badge - matches site style */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-300 bg-white/80 backdrop-blur-sm mb-8 sm:mb-10 ring ring-neutral-300 ring-offset-2 md:ring-offset-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-refresh text-neutral-700">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
                <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
              </svg>
              <span className="text-sm md:text-base font-inter-display font-medium text-neutral-700">
                Refund & Cancellation Policy
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
                    At Cyberslabs India, we&apos;re committed to providing learners with high-quality, hands-on cybersecurity education.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    This Refund &amp; Cancellation Policy explains how payments, cancellations, and refunds work for our courses, simulators, and subscription services.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed">
                    By enrolling in or purchasing any program on our Platform, you agree to the terms outlined below.
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-inter-display mb-4">
                    2. Scope of This Policy
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    This policy applies to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display ml-4">
                    <li>All online programs, labs, and simulator-based training purchased via cyberslabs.in.</li>
                    <li>Any subscription or demo-upgrade payments made through our secure payment gateway.</li>
                    <li>Payments made via credit/debit card, UPI, net banking, or third-party payment processors integrated on our Platform.</li>
                  </ul>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-inter-display mb-4">
                    3. Non-Refundable Services
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    Because our programs include immediate access to digital content, simulators, and labs, all purchases are non-refundable once access is granted.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    This includes:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display ml-4">
                    <li>Access to online courses or modules.</li>
                    <li>Access to cyber simulators and labs.</li>
                    <li>Certificates, assessments, or learning materials delivered electronically.</li>
                    <li>Subscription renewals after the billing date.</li>
                  </ul>
                  <div className="border-l-4 border-yellow-600 p-4 sm:p-6 mt-6 bg-yellow-50 rounded-r-lg">
                    <div className="flex items-start gap-3">
                      <FaExclamationTriangle className="text-yellow-600 text-xl sm:text-2xl mt-1 shrink-0" />
                      <p className="text-yellow-800 font-semibold text-sm sm:text-base md:text-lg">
                        Once you start a course or launch a simulator, the refund window is automatically closed.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-inter-display mb-4">
                    4. Eligible Refund Scenarios (Exceptional Cases)
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    Refunds may be considered only under specific situations, such as:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display ml-4">
                    <li><strong>Duplicate Payment</strong> - If you were charged twice for the same course or subscription.</li>
                    <li><strong>Technical Issues</strong> - If you cannot access the course or simulator due to a verified platform fault (not user-side issues).</li>
                    <li><strong>Access Not Provided</strong> - If the course or product was never delivered or activated post-payment.</li>
                  </ul>
                  <div className="border-l-4 border-blue-600 p-4 sm:p-6 mt-6 bg-blue-50 rounded-r-lg">
                    <div className="space-y-2">
                      <p className="text-blue-800 font-semibold text-sm sm:text-base md:text-lg">
                        All valid refund requests must be submitted within 7 days of the transaction date.
                      </p>
                      <p className="text-blue-700 text-sm sm:text-base md:text-lg">
                        Refunds (if approved) will be processed within 7–10 working days to the original payment method.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-inter-display mb-4">
                    5. Cancellations
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    You may cancel an upcoming subscription renewal at any time through your dashboard or by emailing <a href={`mailto:${CONTACT.supportEmail}`} className="text-primary hover:underline">{CONTACT.supportEmail}</a>.
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display ml-4">
                    <li>Cancellations do not apply retroactively - any ongoing course or subscription period remains active until expiry.</li>
                    <li>No refunds are issued for unused access time or partial course completion.</li>
                  </ul>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-inter-display mb-4">
                    6. Trial Access &amp; Demo Programs
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    Free demos or trial labs are provided without charge and may be limited in duration or features.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed">
                    Any upgrades from a demo to a paid plan are considered final and non-refundable.
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-inter-display mb-4">
                    7. Refund Request Process
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    To initiate a refund request:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display ml-4">
                    <li>
                      Email <a href={`mailto:${CONTACT.supportEmail}`} className="text-primary hover:underline">{CONTACT.supportEmail}</a> with the subject line &quot;Refund Request – [Order ID]&quot;.
                    </li>
                    <li>
                      Include:
                      <ul className="list-disc list-inside space-y-1 ml-6 mt-2">
                        <li>Full name</li>
                        <li>Registered email id</li>
                        <li>Transaction/Order ID</li>
                        <li>Reason for refund (for internal purpose)</li>
                        <li>Screenshot or proof of payment (if applicable)</li>
                      </ul>
                    </li>
                  </ol>
                  <div className="border-l-4 border-green-700 p-4 sm:p-6 mt-6 bg-green-50 rounded-r-lg">
                    <div className="space-y-2">
                      <p className="text-green-800 font-semibold text-sm sm:text-base md:text-lg">
                        Our team will review your case within 5 business days and notify you of the decision.
                      </p>
                      <p className="text-green-700 text-sm sm:text-base md:text-lg">
                        Approved refunds will be processed within 7–10 working days after confirmation.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-inter-display mb-4">
                    8. Course / Subscription Transfer
                  </h3>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display ml-4">
                    <li>Course transfers (switching from one track to another) are allowed within 7 days of enrollment, subject to approval.</li>
                    <li>Any price difference between programs must be settled before transfer completion.</li>
                    <li>Transferred enrollments are not eligible for refunds.</li>
                  </ul>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-inter-display mb-4">
                    9. Payment Disputes &amp; Chargebacks
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    If you initiate a chargeback without contacting our support first, your account may be suspended or terminated pending investigation.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed">
                    We recommend always contacting our support team first - most issues are resolved quickly without escalation.
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-inter-display mb-4">
                    10. Policy Exceptions
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    We reserve the right to deny refund claims that:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display ml-4">
                    <li>Result from user negligence (e.g., forgotten credentials, expired access).</li>
                    <li>Arise from technical issues unrelated to our platform.</li>
                    <li>Involve misuse, abuse, or violation of our Terms &amp; Conditions.</li>
                  </ul>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-inter-display mb-4">
                    11. Changes to This Policy
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    Cyberslabs India may modify this Refund &amp; Cancellation Policy periodically.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    Updated versions will be posted on this page with a revised &quot;Last Updated&quot; date.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed">
                    Your continued use of the Platform after such updates indicates acceptance of the new terms.
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-inter-display mb-4">
                    12. Contact Information
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4">
                    For any questions or concerns about this Refund &amp; Cancellation Policy, please reach out to:
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
                    By using our platform, you acknowledge that you have read, understood, and agree to our Refund &amp; Cancellation Policy.
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

export default RefundPolicy;
