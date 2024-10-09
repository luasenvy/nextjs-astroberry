import "@/styles/global.css";

import { Space_Grotesk as SpaceGrotesk } from "next/font/google";
import { Inter } from "next/font/google";

import gridStyles from "@/styles/grid.module.css";

export const metadata = {
  title: "Astroberry",
  description: "Astroberry Template",
  icons: [
    {
      rel: "icon",
      type: "image/svg+xml",
      url: "/favicon.svg",
    },
  ],
};

const spaceGrotesk = SpaceGrotesk({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-space-grotesk-variable",
});

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} relative isolate font-sans bg-tahiti selection:bg-selection`}
      >
        <div className={gridStyles["bg-grid"]} />
        {children}
      </body>
    </html>
  );
}
