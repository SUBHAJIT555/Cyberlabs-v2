import React from "react";
import { cn } from "@/lib/utils";
import { GridPattern, genRandomPattern } from "./grid-pattern";

type FeatureType = {
  title: string;
  icon: React.ReactNode;
};

type FeatureCardProps = React.ComponentProps<"div"> & {
  feature: FeatureType;
};

export function FeatureCard({ feature, className, ...props }: FeatureCardProps) {
  const [squares, setSquares] = React.useState<number[][] | null>(null);

  React.useEffect(() => {
    setSquares(genRandomPattern());
  }, []);

  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden border border-neutral-200 border-dashed bg-white p-4 md:p-6 transition-colors hover:border-primary/40",
        className,
      )}
      {...props}
    >
      <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full mask-[linear-gradient(white,transparent)]">
        <div className="absolute inset-0 bg-linear-to-r from-zinc-900/5 to-zinc-900/1 opacity-100 mask-[radial-gradient(farthest-side_at_top,white,transparent)]">
          <GridPattern
            width={20}
            height={20}
            x="-12"
            y="4"
            squares={squares ?? undefined}
            className="absolute inset-0 h-full w-full fill-zinc-900/4 stroke-zinc-900/15 mix-blend-overlay"
          />
        </div>
      </div>

      <div className="relative z-10 flex flex-1 flex-col items-start">
        <span aria-hidden className="inline-flex shrink-0 items-center justify-center text-primary">
          {feature.icon}
        </span>

        <h3 className="relative z-20 mt-6 md:mt-8 w-full text-left text-base sm:text-lg lg:text-xl font-inter-display font-semibold text-text-primary leading-snug">
          {feature.title}
        </h3>
      </div>
    </div>
  );
}
