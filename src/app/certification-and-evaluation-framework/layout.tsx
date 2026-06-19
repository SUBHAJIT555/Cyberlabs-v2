import type { Metadata } from "next";
import { certificationMetadata } from "@/constants/pageMetadata";

export const metadata: Metadata = certificationMetadata;

export default function CertificationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
