import type { Metadata } from "next";
import { requestCallbackMetadata } from "@/constants/pageMetadata";

export const metadata: Metadata = requestCallbackMetadata;

export default function RequestCallbackLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
