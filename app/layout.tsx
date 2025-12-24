import type { Metadata } from "next";
import { Nunito_Sans, Chivo_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const nunitoSans = Nunito_Sans({
  variable: "--font-overpass-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const chivoMono = Chivo_Mono({
  variable: "--font-overpass-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Omnexia",
  description: "Omnexia is a platform for team chat and collaboration",
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
