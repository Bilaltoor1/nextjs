import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter, Space_Grotesk } from "next/font/google";
export const metadata: Metadata = {
  title: "StackOverflow",
  description:
    "A community friendly platform for Stack Overflow where you can create and manage Stack Overflow applications",
  icons: {
    icon: "/assets/icons/site-logo.svg",
  },
};
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "500", "400", "600", "700", "800", "900"],
  variable: "--font-inter",
});
const spaceGrotesk = Inter({
  subsets: ["latin"],
  weight: ["300", "500", "400", "600", "700"],
  variable: "--font-spaceGrotesk",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: "primary-gradient",
          footerActionLink: "primary-text-gradient hover:text-primary-500",
        },
      }}
    >
      <html lang="en">
        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
