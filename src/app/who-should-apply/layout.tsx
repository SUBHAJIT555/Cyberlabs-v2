import type { Metadata } from "next";
import { whoShouldApplyMetadata } from "@/constants/pageMetadata";

export const metadata: Metadata = whoShouldApplyMetadata;

export default function WhoShouldApplyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
