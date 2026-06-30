import Hero from "../components/ui/Hero";
import refundPolicyHeroImage from "../assets/img/HeroImage/RefundSupportHero.webp";
import { CONTACT } from "@/constants/contactInfo";

const paragraphClass =
  "text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display leading-relaxed mb-4";
const headingClass =
  "text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-inter-display mb-4";
const listClass =
  "list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display ml-4";

const RefundPolicy = () => {
  return (
    <>
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
        <Hero
          headline="Refund & Cancellation Policy"
          subtext="Understanding our payment, cancellation, and refund policies for all services"
          backgroundImage={refundPolicyHeroImage}
          showDivider={false}
          height="md"
        />

        <section className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="w-full max-w-6xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-300 bg-white/80 backdrop-blur-sm mb-8 sm:mb-10 ring ring-neutral-300 ring-offset-2 md:ring-offset-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-refresh text-neutral-700">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
                <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
              </svg>
              <span className="text-sm md:text-base font-inter-display font-medium text-neutral-700">
                Refund & Cancellation Policy
              </span>
            </div>

            <div className="relative rounded-xl border border-neutral-200 bg-white ring ring-neutral-300 ring-offset-4 md:ring-offset-8 p-6 sm:p-8 md:p-10 lg:p-12">
              <div className="prose prose-neutral max-w-none">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-900 font-inter-display mb-4">
                  Refund & Cancellation Policy
                </h2>
                <p className="text-sm sm:text-base text-neutral-500 font-inter-display mb-8 italic">
                  Effective Date: 30 June 2026
                </p>

                <p className={paragraphClass}>
                  CYBERLABS India is a brand operated by {CONTACT.registeredEntity} (&quot;Cyveritas&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). All course registrations, payments, and services offered under the CYBERLABS India brand are provided by {CONTACT.registeredEntity}.
                </p>
                <p className={paragraphClass}>
                  At Cyveritas, every course registration reserves a seat within a limited-capacity cohort and initiates administrative, scheduling, trainer allocation, and resource planning processes. For this reason, all registrations are considered final.
                </p>
                <p className={paragraphClass}>
                  Please read this policy carefully before completing your enrolment.
                </p>

                <div className="mb-8 md:mb-12">
                  <h3 className={headingClass}>1. Course Registration</h3>
                  <p className={paragraphClass}>
                    Registration for any course offered under the CYBERLABS India brand is confirmed only after full payment has been successfully received and acknowledged by {CONTACT.registeredEntity}.
                  </p>
                  <p className={paragraphClass}>
                    Once a registration has been confirmed, the participant&apos;s seat is reserved for that individual.
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className={headingClass}>2. Refund Policy</h3>
                  <p className={paragraphClass}>
                    All fees paid to {CONTACT.registeredEntity} for enrolment in courses offered under the CYBERLABS India brand are final and non-refundable, except where expressly stated in this policy or where required under applicable law.
                  </p>
                  <p className={paragraphClass}>
                    Once a participant has successfully registered and payment has been processed, no refund, whether partial or full, will be provided for reasons including, but not limited to:
                  </p>
                  <ul className={listClass}>
                    <li>Change of mind</li>
                    <li>Personal commitments</li>
                    <li>Work or business commitments</li>
                    <li>Visa or travel issues</li>
                    <li>Medical reasons</li>
                    <li>Failure to attend the course</li>
                    <li>Failure to complete the course</li>
                    <li>Technical issues on the participant&apos;s side</li>
                    <li>Lack of required hardware, software, or internet connectivity</li>
                  </ul>
                  <p className={paragraphClass}>
                    Participants are encouraged to carefully review the course details, schedule, prerequisites, and requirements before completing their registration.
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className={headingClass}>3. Cancellation by the Participant</h3>
                  <p className={paragraphClass}>
                    Participants may choose not to attend after registration; however, such cancellation does not entitle the participant to any refund, credit, transfer, or adjustment of the course fee.
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className={headingClass}>4. Transfer of Registration</h3>
                  <p className={paragraphClass}>
                    Course registrations are non-transferable and may not be assigned, transferred, or resold to another individual unless expressly approved in writing by {CONTACT.registeredEntity}.
                  </p>
                  <p className={paragraphClass}>
                    Any approved transfer shall remain entirely at the sole discretion of {CONTACT.registeredEntity}.
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className={headingClass}>5. Course Rescheduling or Cancellation by Cyveritas Technologies LLP</h3>
                  <p className={paragraphClass}>
                    {CONTACT.registeredEntity} reserves the right to reschedule, postpone, or cancel any course offered under the CYBERLABS India brand due to circumstances including, but not limited to:
                  </p>
                  <ul className={listClass}>
                    <li>Insufficient enrolment</li>
                    <li>Trainer availability</li>
                    <li>Operational requirements</li>
                    <li>Technical reasons</li>
                    <li>Events beyond our reasonable control</li>
                  </ul>
                  <p className={paragraphClass}>
                    Where a course is cancelled by {CONTACT.registeredEntity} before commencement, participants may be offered one of the following options at the discretion of {CONTACT.registeredEntity}:
                  </p>
                  <ul className={listClass}>
                    <li>Transfer to the next available batch of the same course; or</li>
                    <li>Transfer to another course of equivalent value; or</li>
                    <li>A refund, where no suitable alternative can be provided.</li>
                  </ul>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className={headingClass}>6. No Refund for Non-Attendance or Partial Attendance</h3>
                  <p className={paragraphClass}>
                    No refund, credit, or adjustment shall be provided where a participant fails to attend, attends partially, misses sessions, or is unable to continue the course after commencement for any reason.
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className={headingClass}>7. Exceptional Circumstances</h3>
                  <p className={paragraphClass}>
                    Any request outside the scope of this policy may be reviewed on a case-by-case basis. However, any exception shall be entirely at the sole discretion of {CONTACT.registeredEntity} and shall not establish a precedent for future cases.
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className={headingClass}>8. Contact</h3>
                  <p className={paragraphClass}>
                    For any questions regarding this Refund &amp; Cancellation Policy, please contact:
                  </p>
                  <div className="bg-neutral-100 rounded-lg border border-neutral-200 p-4 sm:p-6 ring ring-neutral-200 ring-offset-2">
                    <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display mb-2">
                      <strong>{CONTACT.registeredEntity}</strong>
                    </p>
                    <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display mb-2">
                      <strong>Operating Brand:</strong> CYBERLABS India
                    </p>
                    <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-inter-display">
                      <strong>Email:</strong>{" "}
                      <a
                        href={`mailto:${CONTACT.educationEmail}`}
                        className="text-primary hover:underline"
                      >
                        {CONTACT.educationEmail}
                      </a>
                    </p>
                  </div>
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
