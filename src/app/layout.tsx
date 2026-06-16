import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import AppProviders from "@/providers/AppProviders";
import MainLayout from "@/layout/MainLayout";
import "./globals.css";

export const metadata: Metadata = {
  title: "CYBERLABS INDIA",
  description: "Israeli-led Cyber Defense Training in India.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className={GeistSans.className}>
        <AppProviders>
          <MainLayout>{children}</MainLayout>
        </AppProviders>
      </body>
    </html>
  );
}
