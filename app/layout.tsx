import type { Metadata } from "next";
import { Inter, Poppins, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MangoRoots — Authentic Indian Mangoes Delivered Fresh in the USA",
  description:
    "Premium handpicked Indian mango varieties — Banginapalli, Rasalu, Alphonso, Kesar, Himayat, Mallika. Sourced directly from orchards in Andhra Pradesh, Maharashtra & Gujarat. Fresh delivered to your door across the USA.",
  keywords: [
    "Indian mangoes USA",
    "Alphonso mango delivery",
    "Banginapalli mango",
    "Rasalu mango USA",
    "Kesar mango delivery",
    "fresh Indian mangoes",
    "buy Indian mangoes online USA",
    "Himayat mango",
    "Mallika mango",
    "premium Indian mangoes",
  ],
  openGraph: {
    title: "MangoRoots — Authentic Indian Mangoes Delivered Fresh in the USA",
    description:
      "Premium handpicked Indian mango varieties delivered fresh to your door. Banginapalli, Rasalu, Alphonso, Kesar, Himayat & Mallika.",
    type: "website",
    locale: "en_US",
    siteName: "MangoRoots",
  },
  twitter: {
    card: "summary_large_image",
    title: "MangoRoots — Authentic Indian Mangoes in the USA",
    description:
      "Fresh premium Indian mangoes delivered to your door. Taste the summer of India again.",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${inter.variable} ${poppins.variable} ${manrope.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
