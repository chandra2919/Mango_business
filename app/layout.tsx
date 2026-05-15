import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

/* Inter — Oracle Sans equivalent: corporate, precise, readable body text */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/* Plus Jakarta Sans — Samsung Sharp Sans equivalent: modern geometric headings */
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

/* Playfair Display — luxury editorial serif for section labels (same feel as Cormorant Garant) */
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
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
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
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
      className={`${inter.variable} ${plusJakarta.variable} ${playfair.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
