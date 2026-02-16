import Hero from "../components/ui/Hero";
import refundPolicyHeroImage from "../assets/img/HeroImage/RefundSupportHero.webp";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaExclamationTriangle,
} from "react-icons/fa";
import { CONTACT } from "@/constants/contactInfo";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero
        headline="Refund & Cancellation Policy"
        subtext="Understanding our payment, cancellation, and refund policies for all services"
        backgroundImage={refundPolicyHeroImage}
        showDivider={false}
        height="md"
        ctaButtons={[
          {
            text: "Contact Us Now",
            link: "/contact-cyberlabs",
            variant: "primary",
          },
        ]}
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

          {/* Refund Policy Sections */}
          <div className="space-y-3">
            {/* Section 1: Introduction */}
            <div className="space-y-6 px-2">
              <h2 className="text-2xl sm:text-3xl font-normal text-text-primary font-inter-display">
                1. Introduction
              </h2>
              <div className="text-text-primary font-inter-display text-base md:text-lg lg:text-xl leading-relaxed">
                <p>
                  At Cyberslabs India, we're committed to providing learners
                  with high-quality, hands-on cybersecurity education.
                </p>
                <p>
                  This Refund & Cancellation Policy explains how payments,
                  cancellations, and refunds work for our courses, simulators,
                  and subscription services.
                </p>
                <p>
                  By enrolling in or purchasing any program on our Platform, you
                  agree to the terms outlined below.
                </p>
              </div>
              <div className="w-full h-3 mt-2 border-t border-dashed border-neutral-300"></div>
            </div>

            {/* Section 2: Scope of This Policy */}
            <div className="space-y-6 px-2">
              <h2 className="text-2xl sm:text-3xl font-normal text-text-primary font-inter-display">
                2. Scope of This Policy
              </h2>
              <div className="text-text-primary font-inter-display text-base md:text-lg lg:text-xl leading-relaxed">
                <p>This policy applies to:</p>
                <ul className="list-disc list-inside space-y-4 ml-6">
                  <li>
                    All online programs, labs, and simulator-based training
                    purchased via cyberslabs.in.
                  </li>
                  <li>
                    Any subscription or demo-upgrade payments made through our
                    secure payment gateway.
                  </li>
                  <li>
                    Payments made via credit/debit card, UPI, net banking, or
                    third-party payment processors integrated on our Platform.
                  </li>
                </ul>
              </div>
              <div className="w-full h-3 mt-2 border-t border-dashed border-neutral-300"></div>
            </div>

            {/* Section 3: Non-Refundable Services */}
            <div className="space-y-6 px-2">
              <h2 className="text-2xl sm:text-3xl font-normal text-text-primary font-inter-display">
                3. Non-Refundable Services
              </h2>
              <div className="text-text-primary font-inter-display text-base md:text-lg lg:text-xl leading-relaxed">
                <p>
                  Because our programs include immediate access to digital
                  content, simulators, and labs, all purchases are
                  non-refundable once access is granted.
                </p>
                <p>This includes:</p>
                <ul className="list-disc list-inside space-y-4 ml-6">
                  <li>Access to online courses or modules.</li>
                  <li>Access to cyber simulators and labs.</li>
                  <li>
                    Certificates, assessments, or learning materials delivered
                    electronically.
                  </li>
                  <li>Subscription renewals after the billing date.</li>
                </ul>
                <div className=" border-l-4 border-yellow-600 p-6 mt-6 bg-white"
                  style={{
                    background:
                      "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <p className="text-yellow-600 font-semibold flex gap-5 bg-white w-fit">
                      <FaExclamationTriangle className="text-yellow-600 text-2xl mt-2" />
                      Once you start a course or launch a simulator, the refund
                      window is automatically closed.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full h-3 mt-2 border-t border-dashed border-neutral-300"></div>
            </div>

            {/* Section 4: Eligible Refund Scenarios */}
            <div className="space-y-6 px-2">
              <h2 className="text-2xl sm:text-3xl font-normal text-text-primary font-inter-display">
                4. Eligible Refund Scenarios (Exceptional Cases)
              </h2>
              <div className="text-text-primary font-inter-display text-base md:text-lg lg:text-xl leading-relaxed">
                <p>
                  Refunds may be considered only under specific situations, such
                  as:
                </p>
                <ul className="list-disc list-inside space-y-4 ml-6">
                  <li>
                    <strong>Duplicate Payment</strong> - If you were charged
                    twice for the same course or subscription.
                  </li>
                  <li>
                    <strong>Technical Issues</strong> - If you cannot access the
                    course or simulator due to a verified platform fault (not
                    user-side issues).
                  </li>
                  <li>
                    <strong>Access Not Provided</strong> - If the course or
                    product was never delivered or activated post-payment.
                  </li>
                </ul>
                <div className=" border-l-4 border-blue-600 p-6 mt-6 bg-white"
                  style={{
                    background:
                      "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <div>
                      <p className="text-blue-600 font-semibold flex gap-5 bg-white w-fit">
                        All valid refund requests must be submitted within 7
                        days of the transaction date.
                      </p>
                      <p className="text-blue-500 mt-2 flex gap-5 bg-white w-fit">
                        Refunds (if approved) will be processed within 7–10
                        working days to the original payment method.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-3 mt-2 border-t border-dashed border-neutral-300"></div>
            </div>

            {/* Section 5: Cancellations */}
            <div className="space-y-6 px-2">
              <h2 className="text-2xl sm:text-3xl font-normal text-text-primary font-inter-display">
                5. Cancellations
              </h2>
              <div className="text-text-primary font-inter-display text-base md:text-lg lg:text-xl leading-relaxed">
                <p>
                  You may cancel an upcoming subscription renewal at any time
                  through your dashboard or by emailing{" "}
                  <a
                    href={`mailto:${CONTACT.supportEmail}`}
                    className="underline underline-offset-5 decoration-1 decoration-text-primary hover:text-primary transition-all duration-300"
                  >
                    {CONTACT.supportEmail}
                  </a>
                  .
                </p>
                <ul className="list-disc list-inside space-y-4 ml-6 mt-6">
                  <li>
                    Cancellations do not apply retroactively - any ongoing
                    course or subscription period remains active until expiry.
                  </li>
                  <li>
                    No refunds are issued for unused access time or partial
                    course completion.
                  </li>
                </ul>
              </div>
              <div className="w-full h-3 mt-2 border-t border-dashed border-neutral-300"></div>
            </div>

            {/* Section 6: Trial Access & Demo Programs */}
            <div className="space-y-6 px-2">
              <h2 className="text-2xl sm:text-3xl font-normal text-text-primary font-inter-display">
                6. Trial Access & Demo Programs
              </h2>
              <div className="text-text-primary font-inter-display text-base md:text-lg lg:text-xl leading-relaxed">
                <p>
                  Free demos or trial labs are provided without charge and may
                  be limited in duration or features.
                </p>
                <p>
                  Any upgrades from a demo to a paid plan are considered final
                  and non-refundable.
                </p>
              </div>
              <div className="w-full h-3 mt-2 border-t border-dashed border-neutral-300"></div>
            </div>

            {/* Section 7: Refund Request Process */}
            <div className="space-y-6 px-2">
              <h2 className="text-2xl sm:text-3xl font-normal text-text-primary font-inter-display">
                7. Refund Request Process
              </h2>
              <div className="text-text-primary font-inter-display text-base md:text-lg lg:text-xl leading-relaxed">
                <p>To initiate a refund request:</p>
                <ol className="list-decimal list-inside space-y-4 ml-6 mt-6">
                  <li>
                    Email{" "}
                    <a
                      href={`mailto:${CONTACT.supportEmail}`}
                      className="underline underline-offset-5 decoration-1 decoration-text-primary hover:text-primary transition-all duration-300"
                    >
                      {CONTACT.supportEmail}
                    </a>{" "}
                    with the subject line "Refund Request – [Order ID]".
                  </li>
                  <li>
                    Include:
                    <ul className="list-disc list-inside space-y-2 ml-6 mt-2">
                      <li>Full name</li>
                      <li>Registered email id</li>
                      <li>Transaction/Order ID</li>
                      <li>Reason for refund (for internal purpose)</li>
                      <li>Screenshot or proof of payment (if applicable)</li>
                    </ul>
                  </li>
                </ol>
                <div className=" border-l-4 border-green-700 p-6 mt-6 bg-white"
                  style={{
                    background:
                      "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <div>
                      <p className="text-green-700 font-semibold bg-white w-fit">
                        Our team will review your case within 5 business days
                        and notify you of the decision.
                      </p>
                      <p className="text-green-600 mt-2 bg-white w-fit">
                        Approved refunds will be processed within 7–10 working
                        days after confirmation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-3 mt-2 border-t border-dashed border-neutral-300"></div>
            </div>

            {/* Section 8: Course / Subscription Transfer */}
            <div className="space-y-6 px-2">
              <h2 className="text-2xl sm:text-3xl font-normal text-text-primary font-inter-display">
                8. Course / Subscription Transfer
              </h2>
              <div className="text-text-primary font-inter-display text-base md:text-lg lg:text-xl leading-relaxed">
                <ul className="list-disc list-inside space-y-4 ml-6">
                  <li>
                    Course transfers (switching from one track to another) are
                    allowed within 7 days of enrollment, subject to approval.
                  </li>
                  <li>
                    Any price difference between programs must be settled before
                    transfer completion.
                  </li>
                  <li>Transferred enrollments are not eligible for refunds.</li>
                </ul>
              </div>
              <div className="w-full h-3 mt-2 border-t border-dashed border-neutral-300"></div>
            </div>

            {/* Section 9: Payment Disputes & Chargebacks */}
            <div className="space-y-6 px-2">
              <h2 className="text-2xl sm:text-3xl font-normal text-text-primary font-inter-display">
                9. Payment Disputes & Chargebacks
              </h2>
              <div className="text-text-primary font-inter-display text-base md:text-lg lg:text-xl leading-relaxed">
                <p>
                  If you initiate a chargeback without contacting our support
                  first, your account may be suspended or terminated pending
                  investigation.
                </p>
                <p>
                  We recommend always contacting our support team first - most
                  issues are resolved quickly without escalation.
                </p>
              </div>
              <div className="w-full h-3 mt-2 border-t border-dashed border-neutral-300"></div>
            </div>

            {/* Section 10: Policy Exceptions */}
            <div className="space-y-6 px-2">
              <h2 className="text-2xl sm:text-3xl font-normal text-text-primary font-inter-display">
                10. Policy Exceptions
              </h2>
              <div className="text-text-primary font-inter-display text-base md:text-lg lg:text-xl leading-relaxed">
                <p>We reserve the right to deny refund claims that:</p>
                <ul className="list-disc list-inside space-y-4 ml-6">
                  <li>
                    Result from user negligence (e.g., forgotten credentials,
                    expired access).
                  </li>
                  <li>
                    Arise from technical issues unrelated to our platform.
                  </li>
                  <li>
                    Involve misuse, abuse, or violation of our Terms &
                    Conditions.
                  </li>
                </ul>
              </div>
              <div className="w-full h-3 mt-2 border-t border-dashed border-neutral-300"></div>
            </div>

            {/* Section 11: Changes to This Policy */}
            <div className="space-y-6 px-2">
              <h2 className="text-2xl sm:text-3xl font-normal text-text-primary font-inter-display">
                11. Changes to This Policy
              </h2>
              <div className="text-text-primary font-inter-display text-base md:text-lg lg:text-xl leading-relaxed">
                <p>
                  Cyberslabs India may modify this Refund & Cancellation Policy
                  periodically.
                </p>
                <p>
                  Updated versions will be posted on this page with a revised
                  "Last Updated" date.
                </p>
                <p>
                  Your continued use of the Platform after such updates
                  indicates acceptance of the new terms.
                </p>
              </div>
              <div className="w-full h-3 mt-2 border-t border-dashed border-neutral-300"></div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-6 space-y-8 px-2">
            <h2 className="text-2xl sm:text-3xl text-text-primary font-inter-display font-normal">
              12. Contact Information
            </h2>

            <p className="text-text-primary font-inter-display text-base md:text-lg lg:text-xl leading-relaxed">
              For any questions or concerns about this Refund & Cancellation Policy, please reach out
              to:
            </p>

            <div className="space-y-4 px-2">
              <div>
                <p className="text-text-primary font-inter-display font-semibold text-base md:text-lg lg:text-xl">
                  Registered Entity:
                </p>
                <p className="text-text-primary font-inter-display text-base md:text-lg lg:text-xl mt-1">
                  Cyveritas Technologies LLP
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
              understood, and agree to our Refund & Cancellation Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
