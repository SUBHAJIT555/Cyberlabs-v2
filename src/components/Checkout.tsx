import { FaCheckCircle } from "react-icons/fa";
// import { useNavigate, useSearchParams } from "react-router";
import type { Hero } from "@/interface/program";
import { CONTACT } from "@/constants/contactInfo";

interface CheckoutProps {
  heroData: Hero;
  courseTitle: string;
  pricing: {
    baseAmount: number;
    platformFees: number;
    gst: number;
    totalAmount: number;
    currency: string;
  };
  onProceedToCheckout: () => void;
  onBack?: () => void;
}

const Checkout = ({
  heroData,
  courseTitle,
  pricing,
  onProceedToCheckout,
  // onBack: propOnBack,
}: CheckoutProps) => {
  const { currency, baseAmount, platformFees, gst, totalAmount } = pricing;
  // const navigate = useNavigate();
  // const [searchParams] = useSearchParams();
  // const slug = searchParams.get("slug") || "";

  // const handleBack = () => {
  //   if (propOnBack) {
  //     propOnBack();
  //   } else {
  //     // Default behavior for payment portal page
  //     if (slug) {
  //       navigate(`/programs/${slug}`);
  //     } else {
  //       navigate(-1);
  //     }
  //   }
  // };

  return (
    <div>
      {/* <div className="mb-8 lg:mt-12">
        <button
          type="button"
          onClick={handleBack}
          className="mb-6 flex items-center gap-2 px-5 py-2.5 rounded-lg text-base sm:text-lg font-switzer font-medium text-primary bg-zinc-900 border border-primary transition-colors hover:bg-primary/10 active:bg-primary/20 focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <span className="text-xl">←</span>
          Back to Program
        </button>
      </div> */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 lg:gap-8 xl:gap-12">
        {/* Left Side - Your Course */}
        <div className="space-y-6 lg:space-y-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-switzer text-text-primary ">
            Selected Program Overview
          </h2>

          {/* Course Card */}
          <div className="relative border border-zinc-700">
            {/* Corner Dots */}
            <div className="absolute top-0 left-0 w-2 h-2 bg-zinc-500 -translate-x-1/2 -translate-y-1/2 z-10" />
            <div className="absolute top-0 right-0 w-2 h-2 bg-zinc-500 translate-x-1/2 -translate-y-1/2 z-10" />
            <div className="absolute bottom-0 left-0 w-2 h-2 bg-zinc-500 -translate-x-1/2 translate-y-1/2 z-10" />
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-zinc-500 translate-x-1/2 translate-y-1/2 z-10" />

            <div className="p-4 sm:p-6 md:p-8 ">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                {/* Course Image */}
                <div className="w-full sm:w-48 md:w-56 lg:w-64 h-auto overflow-hidden shrink-0  bg-zinc-900 flex items-center justify-center p-2">
                  <img
                    src={heroData.image.src}
                    alt={heroData.image.alt}
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* Course Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-switzer font-thin text-text-primary mb-3 leading-tight">
                      {courseTitle}
                    </h3>
                    {heroData.subheading && (
                      <h4 className="text-primary text-lg sm:text-xl md:text-2xl font-inter-display lowercase  font-light mb-3">
                        {heroData.subheading}
                      </h4>
                    )}
                    <p className="text-2xl sm:text-3xl md:text-4xl font-switzer text-primary">
                      Price : {currency} {heroData.pricing.currentPrice}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Payment & Support Info */}
          <div className="relative">
            <div className="mt-15">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-switzer text-text-primary mb-10 tracking-wider">
                  Payment & Support Info -
                </h3>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0">
                  <div className="relative border border-zinc-700 p-3 sm:p-4">
                    {/* Corner Dots */}
                    <div className="absolute top-0 left-0 w-2 h-2 bg-zinc-500 -translate-x-1/2 -translate-y-1/2 z-10" />
                    <div className="absolute top-0 right-0 w-2 h-2 bg-zinc-500 translate-x-1/2 -translate-y-1/2 z-10" />
                    <div className="absolute bottom-0 left-0 w-2 h-2 bg-zinc-500 -translate-x-1/2 translate-y-1/2 z-10" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 bg-zinc-500 translate-x-1/2 translate-y-1/2 z-10" />
                    {/* Bottom Right Gradient Overlay */}
                    <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-linear-to-tl from-primary/15 via-transparent to-transparent pointer-events-none z-5" />
                    <div className="flex items-start gap-3 relative z-10">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 border border-zinc-800 rounded-md flex items-center justify-center shrink-0">
                        <FaCheckCircle className="text-primary text-lg sm:text-xl" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-text-primary text-base sm:text-lg font-switzer leading-tight">
                          3-Days
                        </span>
                        <span className="text-text-primary text-base sm:text-lg font-switzer leading-tight">
                          Refund Policy
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="relative border border-zinc-700 p-3 sm:p-4">
                    {/* Corner Dots */}
                    <div className="absolute top-0 left-0 w-2 h-2 bg-zinc-500 -translate-x-1/2 -translate-y-1/2 z-10" />
                    <div className="absolute top-0 right-0 w-2 h-2 bg-zinc-500 translate-x-1/2 -translate-y-1/2 z-10" />
                    <div className="absolute bottom-0 left-0 w-2 h-2 bg-zinc-500 -translate-x-1/2 translate-y-1/2 z-10" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 bg-zinc-500 translate-x-1/2 translate-y-1/2 z-10" />
                    {/* Bottom Right Gradient Overlay */}
                    <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-linear-to-tl from-primary/15 via-transparent to-transparent pointer-events-none z-5" />
                    <div className="flex items-start gap-3 relative z-10">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 border border-zinc-800 rounded-md flex items-center justify-center shrink-0">
                        <FaCheckCircle className="text-primary text-lg sm:text-xl" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-text-primary text-base sm:text-lg font-switzer leading-tight">
                          Contact Us
                        </span>
                        <span className="text-text-primary text-base sm:text-lg font-switzer leading-tight">
                          {CONTACT.educationEmail}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="relative border border-zinc-700 p-3 sm:p-4">
                    {/* Corner Dots */}
                    <div className="absolute top-0 left-0 w-2 h-2 bg-zinc-500 -translate-x-1/2 -translate-y-1/2 z-10" />
                    <div className="absolute top-0 right-0 w-2 h-2 bg-zinc-500 translate-x-1/2 -translate-y-1/2 z-10" />
                    <div className="absolute bottom-0 left-0 w-2 h-2 bg-zinc-500 -translate-x-1/2 translate-y-1/2 z-10" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 bg-zinc-500 translate-x-1/2 translate-y-1/2 z-10" />
                    {/* Bottom Right Gradient Overlay */}
                    <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-linear-to-tl from-primary/15 via-transparent to-transparent pointer-events-none z-5" />
                    <div className="flex items-start gap-3 relative z-10">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 border border-zinc-800 rounded-md flex items-center justify-center shrink-0">
                        <FaCheckCircle className="text-primary text-lg sm:text-xl" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-text-primary text-base sm:text-lg font-switzer leading-tight">
                          Get Course
                        </span>
                        <span className="text-text-primary text-base sm:text-lg font-switzer leading-tight">
                          Completion Certificate
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Payment Details */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-switzer text-text-primary mb-8">
            Payment Details
          </h2>

          <div className="relative border border-zinc-700">
            {/* Corner Dots */}
            <div className="absolute top-0 left-0 w-2 h-2 bg-zinc-500 -translate-x-1/2 -translate-y-1/2 z-10" />
            <div className="absolute top-0 right-0 w-2 h-2 bg-zinc-500 translate-x-1/2 -translate-y-1/2 z-10" />
            <div className="absolute bottom-0 left-0 w-2 h-2 bg-zinc-500 -translate-x-1/2 translate-y-1/2 z-10" />
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-zinc-500 translate-x-1/2 translate-y-1/2 z-10" />

            <div className="p-4 sm:p-6 md:p-8">
              <div>
                <div className="space-y-5 mb-8">
                  {/* Base Amount */}
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-text-primary text-base sm:text-lg md:text-xl font-switzer">
                        Base Amount
                      </p>
                    </div>
                    <p className="text-text-primary text-base sm:text-lg md:text-xl font-switzer font-medium">
                      {currency} {baseAmount}
                    </p>
                  </div>

                  {/* Platform Fees */}
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-text-primary text-base sm:text-lg md:text-xl font-switzer">
                        Platform Fees
                      </p>
                      <p className="text-gray-400 text-xs sm:text-sm md:text-base font-switzer mt-1">
                        (Server, Streaming, Database, Bandwidth, etc.)
                      </p>
                    </div>
                    <p className="text-text-primary text-base sm:text-lg md:text-xl font-switzer font-medium">
                      {currency} {platformFees}
                    </p>
                  </div>

                  {/* GST */}
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-text-primary text-base sm:text-lg md:text-xl font-switzer">
                        GST @18%
                      </p>
                      <p className="text-gray-400 text-xs sm:text-sm md:text-base font-switzer mt-1">
                        (To Govt. of India)
                      </p>
                    </div>
                    <p className="text-text-primary text-base sm:text-lg md:text-xl font-switzer font-medium">
                      {currency} {gst}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-zinc-700 border-dashed my-6"></div>

                  {/* Total Amount */}
                  <div className="flex justify-between items-center">
                    <p className="text-text-primary text-xl sm:text-2xl md:text-3xl font-switzer font-bold uppercase tracking-wider">
                      Total Amount
                    </p>
                    <p className="text-primary text-2xl sm:text-3xl md:text-4xl font-switzer font-bold">
                      {currency} {totalAmount}
                    </p>
                  </div>
                </div>

                {/* Proceed to Checkout Button */}
                <button
                  onClick={onProceedToCheckout}
                  className="w-full bg-primary hover:bg-primary/80 text-black py-4 px-6 rounded-lg font-medium text-base sm:text-lg md:text-xl font-montserrat transition-colors uppercase tracking-wider"
                >
                  Proceed to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
