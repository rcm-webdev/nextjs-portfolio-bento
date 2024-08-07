import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import localFont from "next/font/local";
import { siteConfig } from "@/config/site-config";

// const inter = Inter({ subsets: ["latin"] });
const sfPro = localFont({
  src: [
    {
      path: "/fonts/SFProDisplay-Thin.woff2",
      weight: "100",
      style: "normal",
    },

    {
      path: "/fonts/SFProDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/SFProDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "/fonts/SFProDisplay-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "/fonts/SFProDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: siteConfig.pageTitle,
  description: siteConfig.bio,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className={sfPro.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col h-full">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
