import { useState } from "react";
import { useSearchParams } from "react-router";
import { useCourses } from "@/hooks/useCourses";
import Checkout from "@/components/Checkout";
import CheckoutForm from "@/components/CheckoutForm";

const PaymentPortal = () => {
  const [searchParams] = useSearchParams();
  const slug = searchParams.get("slug") || "";
  const { getCourseHeroBySlug, getCourses } = useCourses();
  const heroData = getCourseHeroBySlug(slug);
  const courses = getCourses();
  const course = courses.find((c) => c.slug === slug);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  if (!heroData) {
    return (
      <div className="min-h-screen flex items-center justify-center text-text-primary">
        <p className="text-xl font-switzer">Course not found</p>
      </div>
    );
  }

  // Calculate pricing breakdown
  const currentPrice = parseFloat(heroData.pricing.currentPrice);
  const platformFeePercentage = 10; // 10% of base amount
  const gstPercentage = 18; // 18% GST

  const baseAmount = Math.round(currentPrice);
  const platformFees = Math.round((baseAmount * platformFeePercentage) / 100);
  const gst = Math.round(((baseAmount + platformFees) * gstPercentage) / 100);
  const totalAmount = baseAmount + platformFees + gst;

  const currency = heroData.pricing.currency || "₹";

  const handleProceedToCheckout = () => {
    setShowCheckoutForm(true);
  };

  return (
    <div className="min-h-screen bg-bg text-text-primary py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-30 mt-20 lg:mt-0 lg:flex lg:items-center">
      <div className="mx-auto w-full">
        {!showCheckoutForm ? (
          <Checkout
            heroData={heroData}
            courseTitle={course?.title || heroData.title}
            pricing={{
              baseAmount,
              platformFees,
              gst,
              totalAmount,
              currency,
            }}
            onProceedToCheckout={handleProceedToCheckout}
          />
        ) : (
          <CheckoutForm
            courseData={heroData}
            courseTitle={course?.title || heroData.title}
            onBack={() => setShowCheckoutForm(false)}
          />
        )}
      </div>
    </div>
  );
};

export default PaymentPortal;
