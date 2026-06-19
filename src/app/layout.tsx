import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import AppProviders from "@/providers/AppProviders";
import MainLayout from "@/layout/MainLayout";
import { rootMetadata } from "@/lib/siteMetadata";
import "./globals.css";

export const metadata: Metadata = rootMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.variable} suppressHydrationWarning>
      <body className={GeistSans.className} suppressHydrationWarning>
        <AppProviders>
          <MainLayout>{children}</MainLayout>
        </AppProviders>
      </body>
    </html>
  );
}
