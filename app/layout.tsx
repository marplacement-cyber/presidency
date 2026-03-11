import type { Metadata } from "next";
import { DM_Serif_Display, Outfit, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


/* ---------------- FONTS ---------------- */

const headingFont = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-heading",
});

const bodyFont = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

/* ---------------- METADATA ---------------- */

export const metadata: Metadata = {
  title: "Presidency University International",
  description:
    "Study at Presidency University Bangalore – a globally connected campus offering undergraduate, postgraduate and doctoral programmes.",
};

/* ---------------- ROOT LAYOUT ---------------- */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(headingFont.variable, bodyFont.variable, "font-sans", geist.variable)}>
      <body className="antialiased font-body bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
