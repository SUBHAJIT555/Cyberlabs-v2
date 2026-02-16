import { useCourses } from "@/hooks/useCourses";
import type { Card, Feature } from "@/interface/program";
import { useParams } from "react-router";
import { parseBoldText } from "@/lib/utils";
import { FallingPattern } from "@/components/ui/falling-pattern";

const WhatsNew = () => {
  const { slug } = useParams();
  const { getCourseWhatsNewBySlug } = useCourses();
  const data = getCourseWhatsNewBySlug(slug as string);
  const renderFeatureItem = (feature: Feature, index: number) => {
    if (feature.highlightedText) {
      // Split highlightedText into words
      const wordsToHighlight = feature.highlightedText
        .split(/\s+/)
        .filter((word) => word.length > 0);

      // Create a regex pattern that matches any of the words (case-insensitive, whole words only)
      const escapedWords = wordsToHighlight.map((word) =>
        word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
      );
      const regex = new RegExp(`\\b(${escapedWords.join("|")})\\b`, "gi");

      // Split text by the regex while preserving the matches
      const parts = feature.text.split(regex).filter((part) => part.length > 0);

      return (
        <li key={index} className="mb-10">
          {parts.map((part, partIndex) => {
            // Check if this part matches any word from highlightedText (case-insensitive)
            const shouldHighlight = wordsToHighlight.some(
              (word) => part.toLowerCase() === word.toLowerCase()
            );

            if (shouldHighlight) {
              return (
                <span key={partIndex} className="text-primary">
                  {part}
                </span>
              );
            }
            return <span key={partIndex}>{part}</span>;
          })}
        </li>
      );
    }
    return (
      <li key={index} className="mb-10">
        {feature.text}
      </li>
    );
  };

  const renderCard = (card: Card, index: number) => (
    <div
      key={index}
      className="relative border border-neutral-300 border-dashed w-full lg:w-1/2 flex flex-col overflow-hidden"

    >



      <div className=" p-5 sm:p-8 md:p-10 flex flex-col relative z-10">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-2 sm:gap-0">
          <h4
            className={`text-2xl sm:text-3xl ${card.titleColor} font-montserrat font-semibold tracking-tight text-center sm:text-left`}
          >
            {card.title}
          </h4>
          {/* <p
            className={`text-2xl sm:text-3xl ${card.priceColor} font-inter-display font-medium text-center sm:text-right`}
          >
            {card.price}
          </p> */}
        </div>
        <div className="w-full h-px bg-bg mb-6"></div>

        <ul className="space-y-3 text-text-primary text-base sm:text-xl font-medium font-inter-display tracking-tight">
          {card.features.map((feature, featureIndex) =>
            renderFeatureItem(feature, featureIndex)
          )}
        </ul>

      </div>
    </div>
  );

  // Check if we should render as numbered list (first card has features with titles)
  const shouldRenderAsNumberedList = data?.cards[0]?.features?.some((f) => f.title);

  return (
    <div className="relative w-full text-text-primary py-16 md:py-20 px-4 sm:px-8 md:px-12 xl:px-25 overflow-hidden">
      {/* Falling Pattern Background - same as LaymanStory */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <FallingPattern
          color="rgba(83, 86, 90, 0.65)"
          backgroundColor="rgb(245, 245, 245)"
          duration={200}
          blurIntensity="0.4em"
          density={1.2}
          className="h-full w-full"
          style={{
            maskImage: "linear-gradient(to bottom, transparent 0%, rgb(245, 245, 245) 10%, rgb(245, 245, 245) 90%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, rgb(245, 245, 245) 10%, rgb(245, 245, 245) 90%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-montserrat font-bold tracking-tight text-text-primary leading-tight border-b border-neutral-300 pb-4 inline-block">
            {data?.heading.title}
          </h3>
        </div>

        {/* Render as numbered list or cards */}
        {shouldRenderAsNumberedList ? (
          <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-sm  rounded-md p-6 sm:p-8 md:p-10">
            <ol className="space-y-8 sm:space-y-10">
              {data?.cards[0]?.features?.map((feature, index) => {
                // Skip completely empty features
                if (!feature.title && !feature.text) return null;

                // Calculate actual item number (accounting for any skipped items)
                const itemNumber = index + 1;

                return (
                  <li
                    key={index}
                    className={
                      `relative pb-6 ${index !== data?.cards[0]?.features?.length - 1
                        ? "border-b border-neutral-300 border-dashed"
                        : ""
                      }`
                    }
                  >
                    <div className="flex gap-3 sm:gap-4">
                      {/* Number */}
                      <span className="text-text-primary font-bold text-xl sm:text-2xl md:text-3xl font-montserrat shrink-0">
                        {itemNumber}.
                      </span>

                      {/* Content */}
                      <div className="flex-1">
                        {/* Title (if exists) */}
                        {feature.title && (
                          <h4 className="text-text-primary font-bold text-lg sm:text-xl md:text-2xl font-montserrat mb-2 sm:mb-3">
                            {feature.title}
                          </h4>
                        )}


                        {/* Description */}
                        {feature.text && (
                          <p className="text-text-primary text-base sm:text-lg md:text-xl font-inter-display leading-relaxed ">
                            {parseBoldText(feature.text)}
                          </p>
                        )}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        ) : (
          /* Original card-based layout */
          <div className="flex flex-col lg:flex-row justify-center items-stretch gap-10 md:gap-12 xl:gap-16 font-inter-display text-lg md:text-xl">
            {data?.cards.map((card, index) => renderCard(card, index))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WhatsNew;
