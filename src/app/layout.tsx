import StyledComponentsRegistry from "@/lib/registry";
import DesignSystemProvider from "@/styles/DesignSystemProvider.client";
import type { Metadata } from "next";
import { Instrument_Sans, Inter, Manrope } from "next/font/google";
import AppShell from '../components/layout/AppShell';
import "./globals.css";


const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  display: "swap",
});


const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Streamec - Streaming Solutions",
  description: "Professional streaming solutions for fitness clubs and sports facilities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.variable} ${manrope.variable} ${inter.variable}`}
        suppressHydrationWarning
      >
        <StyledComponentsRegistry>
          <DesignSystemProvider>
            <AppShell>
            {children}
            </AppShell>
          </DesignSystemProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
