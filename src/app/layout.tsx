import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhiman Singh Saharan | Software & AI Engineer",
  description: "Portfolio of Abhiman Singh Saharan. Software Engineer, AI Engineer, and Aspiring Product Manager building intelligent products where AI meets scalable software.",
  keywords: ["Abhiman Singh Saharan", "AI Engineer", "Software Engineer", "Product Manager", "Bennett University", "Full Stack Developer", "Portfolio"],
  authors: [{ name: "Abhiman Singh Saharan" }],
  creator: "Abhiman Singh Saharan",
  metadataBase: new URL("https://abhiman.dev"), // Fallback domain
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abhiman.dev",
    title: "Abhiman Singh Saharan | Software & AI Engineer",
    description: "Building products where AI meets scalable software. Final Year CS student and AI product builder.",
    siteName: "Abhiman Singh Saharan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhiman Singh Saharan | Software & AI Engineer",
    description: "Building products where AI meets scalable software.",
    creator: "@Abhiman74",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#09090B] text-[#F4F4F5]">
        {children}
      </body>
    </html>
  );
}
