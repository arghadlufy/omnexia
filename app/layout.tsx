import type { Metadata, Viewport } from "next";
import { Nunito_Sans, Chivo_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const nunitoSans = Nunito_Sans({
  variable: "--font-overpass-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

const chivoMono = Chivo_Mono({
  variable: "--font-overpass-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Omnexia - AI-Powered Team Collaboration Platform",
    template: "%s | Omnexia",
  },
  description:
    "Omnexia is an AI-powered team collaboration platform enhanced with intelligent features including AI summaries, chat fixes, and smart automation to boost your team's productivity.",
  keywords: [
    "AI collaboration",
    "team chat",
    "team collaboration platform",
    "AI-powered messaging",
    "team communication",
    "AI summaries",
    "chat automation",
    "Omnexia",
    "workplace collaboration",
  ],
  authors: [{ name: "Omnexia" }],
  creator: "Omnexia",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://omnexia.com",
    title: "Omnexia - AI-Powered Team Collaboration Platform",
    description:
      "An AI-powered team collaboration platform with intelligent features including AI summaries, chat fixes, and smart automation.",
    siteName: "Omnexia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omnexia - AI-Powered Team Collaboration Platform",
    description:
      "An AI-powered team collaboration platform with intelligent features including AI summaries, chat fixes, and smart automation.",
    creator: "@omnexia",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${nunitoSans.variable} ${chivoMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
