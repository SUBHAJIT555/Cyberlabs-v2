import { Link } from "@/lib/react-router";
import { useForm, type FieldValues } from "react-hook-form";
import { useRef, type BaseSyntheticEvent, type ReactNode } from "react";
import {
    FaFacebookF,
    FaHeart,
    FaInstagram,
    FaLinkedinIn,
    FaWhatsapp,
} from "react-icons/fa";
import footerlogo from "../assets/img/logo/Cyberlabs-logo-03.svg";
import { cn, assetSrc } from "@/lib/utils";
import ShinyText from "@/components/ui/ShinyText";
import { FormSuccessPopup } from "@/components/ui/FormSuccessPopup";
import { FormErrorPopup } from "@/components/ui/FormErrorPopup";
import { useFormSubmitFeedback } from "@/hooks/useFormSubmitFeedback";
import { CONTACT } from "@/constants/contactInfo";
import { FORM_FEEDBACK_COPY } from "@/constants/formFeedbackCopy";
import { emailValidationRules } from "@/lib/formValidation";
import { YouTubeIcon } from "@/components/ui/YouTubeIcon";

const usefulLinks = [
    { label: "CYBERLABS Home", to: "/" },
    { label: "About CYBERLABS", to: "/about-cyberlabs" },
    { label: "Leadership and Faculty", to: "/leadership-and-faculty" },
    { label: "Cyber Defense Programs", to: "/cyber-defense-programs" },
    { label: "Learning Environment", to: "/learning-environment" },
    {
        label: "Certification & Evaluation Framework",
        to: "/certification-and-evaluation-framework",
    },
    { label: "Who Should Apply", to: "/who-should-apply" },
    { label: "Request Call Back", to: "/request-callback" },
    { label: "Contact CYBERLABS", to: "/contact-cyberlabs" },
    { label: "FAQs", to: "/frequently-asked-questions" },
];

const legalLinks = [
    { label: "Terms & Condition", to: "/terms-and-conditions" },
    { label: "Privacy Policy", to: "/privacy-policy" },
    { label: "Cookie Policy", to: "/cookie-policy" },
    { label: "Refund & Cancellation Policy", to: "/refund-and-cancellation" },
    { label: "Support", to: `mailto:${CONTACT.educationEmail}`, external: true },
];

const socialLinks = [
    {
        label: "Instagram",
        href: "https://www.instagram.com/cyberlabsindia",
        icon: FaInstagram,
    },
    {
        label: "Facebook",
        href: "https://www.facebook.com/profile.php?id=61587196465882",
        icon: FaFacebookF,
    },
    {
        label: "YouTube",
        href: "https://www.youtube.com/@cyberlabsindiabycyveritas-y7h",
        icon: YouTubeIcon,
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/cyberlabs-india/",
        icon: FaLinkedinIn,
    },
    { label: "WhatsApp", href: "https://wa.me/971504602632", icon: FaWhatsapp },
];

const inputClassName =
    "w-full rounded-xl border border-dashed border-zinc-200 bg-zinc-50/60 px-3.5 py-2.5 font-inter-display text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-zinc-400 focus:bg-white focus:ring-2 focus:ring-zinc-200/80";

const Footer = () => {
    const {
        showSuccessPopup,
        setShowSuccessPopup,
        showErrorPopup,
        setShowErrorPopup,
        errorMessage,
        successMessage,
        submitForm,
    } = useFormSubmitFeedback();
    const formRef = useRef<HTMLFormElement>(null);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm({
        defaultValues: { email: "" },
    });

    const onSubmit = async (data: FieldValues) => {
        try {
            await submitForm(
                {
                    formType: "newsletter",
                    email: data.email,
                },
                { successMessage: FORM_FEEDBACK_COPY.newsletter.successMessage },
            );
            reset();
        } catch {
            // Error popup is handled by useFormSubmitFeedback.
        }
    };

    return (
        <footer className="relative z-0 overflow-hidden border-t border-zinc-200 bg-background">
            <FooterBackground />

            <div className="relative z-10 w-full px-4 py-12 sm:px-6 md:py-16 lg:px-12 xl:px-16">
                <NewsletterSignup
                    formRef={formRef}
                    register={register}
                    handleSubmit={handleSubmit(onSubmit)}
                    isSubmitting={isSubmitting}
                    emailError={errors.email?.message}
                />

                <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-12 md:gap-8 lg:gap-10">
                    <div className="md:col-span-5 lg:col-span-4">
                        <Link to="/">
                            <img
                                src={assetSrc(footerlogo)}
                                alt="CYBERLABS INDIA Logo"
                                className="h-10 w-auto"
                            />
                        </Link>
                        <p className="mt-5 max-w-sm font-inter-display text-sm leading-relaxed text-zinc-600 md:text-base">
                            An Israeli Cyber Defense Training Ecosystem, Launched by{" "}
                            <span className="font-semibold text-zinc-800">
                                {CONTACT.registeredEntity.replace(" LLP", "")}.
                            </span>{" "}
                            Training Real Cyber Defenders for a Real World.
                        </p>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 md:col-span-7 md:grid-cols-3 lg:col-span-8">
                        <FooterColumn title="Useful Links">
                            <ul className="space-y-2.5">
                                {usefulLinks.map((item) => (
                                    <li key={item.to}>
                                        <FooterLink to={item.to}>{item.label}</FooterLink>
                                    </li>
                                ))}
                            </ul>
                        </FooterColumn>

                        <FooterColumn title="Legals">
                            <ul className="space-y-2.5">
                                {legalLinks.map((item) => (
                                    <li key={item.label}>
                                        {item.external ? (
                                            <FooterLink href={item.to} external>
                                                {item.label}
                                            </FooterLink>
                                        ) : (
                                            <FooterLink to={item.to}>{item.label}</FooterLink>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </FooterColumn>

                        <FooterColumn title="Socials">
                            <ul className="space-y-2.5">
                                {socialLinks.map((item) => (
                                    <li key={item.label}>
                                        <FooterLink href={item.href} external>
                                            <item.icon className="h-4 w-4 shrink-0" aria-hidden />
                                            <span>{item.label}</span>
                                        </FooterLink>
                                    </li>
                                ))}
                            </ul>
                        </FooterColumn>
                    </div>
                </div>

                <div className="mt-8 border-t border-dashed border-zinc-200 pt-6 text-center text-xs text-zinc-800 md:text-sm">
                    <p className="inline-flex flex-wrap items-center justify-center gap-x-1 gap-y-0.5 font-inter-display leading-relaxed">
                        <span>© {new Date().getFullYear()}</span>
                        <Link
                            to="/"
                            className="font-montserrat font-medium text-zinc-700 transition hover:text-zinc-900"
                        >
                            CYBERLABS INDIA
                        </Link>
                        <span>| All rights reserved. Made with</span>
                        <FaHeart className="h-3.5 w-3.5 shrink-0 text-zinc-500" aria-hidden />
                        <span>
                            by{" "}
                            <a
                                href="https://codecobble.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="font-medium text-zinc-700 underline underline-offset-2 transition hover:text-zinc-900"
                            >
                                CodeCobble
                            </a>
                        </span>
                    </p>
                </div>
            </div>

            <FormSuccessPopup
                open={showSuccessPopup}
                onClose={() => setShowSuccessPopup(false)}
                title={FORM_FEEDBACK_COPY.newsletter.successTitle}
                message={successMessage}
            />

            <FormErrorPopup
                open={showErrorPopup}
                onClose={() => setShowErrorPopup(false)}
                title={FORM_FEEDBACK_COPY.newsletter.errorTitle}
                message={errorMessage}
            />
        </footer>
    );
};

type NewsletterSignupProps = {
    formRef: React.RefObject<HTMLFormElement | null>;
    register: ReturnType<typeof useForm<{ email: string }>>["register"];
    handleSubmit: (event?: BaseSyntheticEvent) => Promise<void>;
    isSubmitting: boolean;
    emailError?: string;
};

function NewsletterSignup({
    formRef,
    register,
    handleSubmit,
    isSubmitting,
    emailError,
}: NewsletterSignupProps) {
    return (
        <div className="relative overflow-hidden border border-dashed border-zinc-300 bg-white px-6 py-8 md:px-10 md:py-10">
            <NewsletterBackground />

            <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
                <div className="max-w-lg">
                    <ShinyText
                        text="Newsletter"
                        className="font-montserrat text-xs font-semibold uppercase tracking-[0.14em] md:text-sm"
                        speed={3}
                        color="#52525b"
                        shineColor="#53565a"
                    />
                    <h3 className="mt-2 font-montserrat text-xl font-semibold text-zinc-900 md:text-2xl">
                        Stay ahead in cybersecurity
                    </h3>
                    <p className="mt-2 font-inter-display text-sm leading-relaxed text-zinc-600 md:text-base">
                        Stay updated with our latest news, industry insights, and
                        exclusive offers.
                    </p>
                </div>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="w-full max-w-md shrink-0 space-y-2"
                    noValidate
                >
                    <input type="hidden" name="formType" value="newsletter" />
                    <div className="flex flex-col gap-2 sm:flex-row">
                        <input
                            id="newsletter-email"
                            type="email"
                            placeholder="you@company.com"
                            aria-label="Email address"
                            className={cn(inputClassName, "sm:flex-1")}
                            {...register("email", emailValidationRules)}
                        />
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="inline-flex shrink-0 items-center justify-center rounded-xl border border-zinc-900 bg-zinc-900 px-5 py-2.5 font-inter-display text-sm font-medium text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-70"
                        >
                            {isSubmitting ? "Submitting..." : "Subscribe"}
                        </button>
                    </div>
                    {emailError && (
                        <p className="font-inter-display text-xs text-red-600 md:text-sm">{emailError}</p>
                    )}
                </form>
            </div>
        </div>
    );
}

function FooterColumn({
    title,
    children,
}: {
    title: string;
    children: ReactNode;
}) {
    return (
        <div>
            <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.14em] text-zinc-800 md:text-sm">
                {title}
            </p>
            <div className="mt-3 border-t border-dashed border-zinc-200 pt-4">
                {children}
            </div>
        </div>
    );
}

function FooterLink({
    to,
    href,
    children,
    external,
}: {
    to?: string;
    href?: string;
    children: ReactNode;
    external?: boolean;
}) {
    const className =
        "group inline-flex w-fit items-center gap-2 font-inter-display text-sm text-zinc-600 transition hover:text-zinc-900 md:text-base";

    if (href || external) {
        const linkHref = href ?? to ?? "#";
        return (
            <a
                href={linkHref}
                target={external || linkHref.startsWith("http") ? "_blank" : undefined}
                rel={
                    external || linkHref.startsWith("http")
                        ? "noreferrer"
                        : undefined
                }
                className={className}
            >
                {children}
                <ArrowIcon />
            </a>
        );
    }

    return (
        <Link to={to ?? "/"} className={className}>
            {children}
            <ArrowIcon />
        </Link>
    );
}

function FooterBackground() {
    return (
        <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-0"
            style={{
                background:
                    "linear-gradient(to bottom, var(--background) 0%, var(--background) 60%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 50% 120%, var(--primary) 0%, var(--background) 75%)",
                opacity: 0.7,
            }}
        >
            <div
                style={{
                    WebkitMaskImage:
                        "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 75%)",
                    backgroundImage:
                        "repeating-conic-gradient(from 0deg at 50% 100%, var(--primary) 0deg, var(--primary) 1deg, transparent 1deg, transparent 6deg)",
                    bottom: "-15%",
                    height: "100%",
                    left: "50%",
                    maskImage:
                        "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 75%)",
                    opacity: 0.1,
                    pointerEvents: "none",
                    position: "absolute",
                    transform: "translateX(-50%)",
                    width: "250%",
                }}
            />
        </div>
    );
}

function NewsletterBackground() {
    return (
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    backgroundImage:
                        "repeating-conic-gradient(from 0deg at 100% 0%, #d4d4d8 0deg, #d4d4d8 1deg, transparent 1deg, transparent 12deg)",
                    WebkitMaskImage:
                        "linear-gradient(to left, rgba(0,0,0,0.5) 0%, transparent 55%)",
                    maskImage:
                        "linear-gradient(to left, rgba(0,0,0,0.5) 0%, transparent 55%)",
                }}
            />
        </div>
    );
}

function ArrowIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="translate-x-[-3px] opacity-0 transition duration-200 group-hover:translate-x-0 group-hover:opacity-100"
            aria-hidden="true"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12h.5m3 0h1.5m3 0h6" />
            <path d="M13 18l6 -6" />
            <path d="M13 6l6 6" />
        </svg>
    );
}

export default Footer;
