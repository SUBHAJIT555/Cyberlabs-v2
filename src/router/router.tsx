import { lazy } from "react";
import { createBrowserRouter } from "react-router";
import Home from "@/pages/Home";
import MainLayout from "@/layout/MainLayout";
// import LearningEnvironment2 from "@/pages/LearningEnvironment2";
import Admissions from "@/pages/Admissions";
import Certification from "@/pages/Certification";
import Faculty from "@/pages/Faculty";
import RequestCallback from "@/pages/RequestCallback";

const LearningEnvironment = lazy(() => import("@/pages/LearningEnvironment"));
const Programs = lazy(() => import("@/pages/Programs"));
const About = lazy(() => import("@/pages/About"));
const CourseDetails = lazy(() => import("@/pages/CourseDetails"));
const Contact = lazy(() => import("@/pages/Contact"));
const TermsAndCondition = lazy(() => import("@/pages/TermsAndCondition"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const CookiePolicy = lazy(() => import("@/pages/CookiePolicy"));
const RefundPolicy = lazy(() => import("@/pages/RefundPolicy"));
const FrequentlyAskedQuestion = lazy(() => import("@/pages/FrequentlyAskedQuestion"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-cyberlabs",
        element: <About />,
      },
      {
        path: "/learning-environment",
        element: <LearningEnvironment />,
      },

      {
        path: "/cyber-defense-programs",
        element: <Programs />,
      },

      {
        path: "/contact-cyberlabs",
        element: <Contact />,
      },
      {
        path: "/cyber-defense-programs/:slug",
        element: <CourseDetails />,
      },

      {
        path: "/learning-environment",
        element: <LearningEnvironment />,
      },
      {
        path: "/who-should-apply",
        element: <Admissions />,
      },
      {
        path: "/certification-and-evaluation-framework",
        element: <Certification />,
      },
      {
        path: "/leadership-and-faculty",
        element: <Faculty />,
      },
      {
        path: "/request-callback",
        element: <RequestCallback />,
      },
      {
        path: "/terms-and-conditions",
        element: <TermsAndCondition />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/cookie-policy",
        element: <CookiePolicy />,
      },
      {
        path: "/refund-and-cancellation",
        element: <RefundPolicy />,
      },
      {
        path: "/frequently-asked-questions",
        element: <FrequentlyAskedQuestion />,
      },
      // {
      //   path: "/payment-portal",
      //   element: <PaymentPortal />,
      // },
    ],
  },
]);

export default router;
