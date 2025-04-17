import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import ThemeContextProvider from "@/context/theme-context";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "Ooo Saathi Chal",
  description:
    "India's first social networking platform designed exclusively for the elderly. Connect, share, and build meaningful relationships.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased scroll-smooth",
          fontSans.variable
        )}
      >
        <ThemeContextProvider>{children}</ThemeContextProvider>
      </body>
    </html>
  );
}
