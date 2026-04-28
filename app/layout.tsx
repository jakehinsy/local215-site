import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Milwaukee Professional Firefighters Association | IAFF Local 215",
  description:
    "Official website of Milwaukee Professional Firefighters Association, IAFF Local 215.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Milwaukee Professional Firefighters Association | IAFF Local 215",
    description: "Official website of Milwaukee Professional Firefighters Association, IAFF Local 215.",
    url: "https://local215.org", // Placeholder if real URL unknown, but good practice
    siteName: "IAFF Local 215",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "IAFF Local 215 Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
