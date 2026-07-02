import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { CTADrawer } from "@/components/cta-drawer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Uniqe | Coworking Space with Personality",
  description:
    "Technically it's a coworking space. Emotionally it's a group art project. Join the most personality-driven workspace in town.",
  openGraph: {
    title: "Uniqe | Coworking Space with Personality",
    description:
      "Technically it's a coworking space. Emotionally it's a group art project.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-espresso">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <CTADrawer />
      </body>
    </html>
  );
}
