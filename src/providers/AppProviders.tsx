"use client";

import { Suspense, type ReactNode } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { LenisProvider } from "@/context/LenisContext";
import Loading from "@/components/Loading";

type AppProvidersProps = {
  children: ReactNode;
};

export default function AppProviders({ children }: AppProvidersProps) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-bg">
          <Loading size="lg" text="Loading Application..." />
        </div>
      }
    >
      <LenisProvider>
        <ParallaxProvider>{children}</ParallaxProvider>
      </LenisProvider>
    </Suspense>
  );
}
