import { config } from "@fortawesome/fontawesome-svg-core";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Poppins as FontSans, Montserrat } from "next/font/google";
import "./globals.css";
import ConditionalMegaMenu from "@/components/ui/metadata/conditionalMegamenu"; // Import the new component
import { cn } from "@/lib/utils";
import "@fortawesome/fontawesome-svg-core/styles.css";

export const runtime = "nodejs";

config.autoAddCss = true;

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const secondary = Montserrat({
  subsets: ["latin"],
  variable: "--font-secondary",
});

export const metadata: Metadata = {
  title: "Infoveave",
  description: "Unified Data Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(fontSans.className, "antialiased", "min-h-screen", "w-screen", "overflow-x-hidden")}>
        {/* Use ConditionalMegaMenu to control MegaMenu rendering */}
        <ConditionalMegaMenu />
        <div className="scroll-smooth">{children}</div>
        <GoogleAnalytics gaId="GT-TX9GB8G" />
        <GoogleTagManager gtmId="GTM-P67KTK6Z" />
      </body>
    </html>
  );
}
