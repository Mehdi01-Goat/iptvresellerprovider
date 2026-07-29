import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://iptvresellerprovider.com"),
  title: {
    default: "IPTV Reseller Panel | #1 IPTV Reseller Provider — Free Trial",
    template: "%s | IPTV Reseller Provider",
  },
  description:
    "The #1 IPTV reseller panel provider. Get wholesale access to Trex, Dino, Strong, Mega & Magnum IPTV servers. Direct pricing, free 24-hr trials, and expert coaching to earn $500–$5,000/month.",
  keywords: [
    "iptv reseller",
    "iptv reseller panel",
    "iptv reseller provider",
    "wholesale iptv panel",
    "iptv panel reseller",
    "buy iptv reseller panel",
    "iptv reseller business",
    "trex iptv server",
    "dino iptv server",
    "strong iptv server",
    "mega iptv server",
    "magnum iptv server",
    "iptv wholesale",
  ],
  authors: [{ name: "IPTV Reseller Provider", url: "https://iptvresellerprovider.com" }],
  creator: "IPTV Reseller Provider",
  publisher: "IPTV Reseller Provider",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://iptvresellerprovider.com",
    siteName: "IPTV Reseller Provider",
    title: "IPTV Reseller Panel | #1 IPTV Reseller Provider",
    description:
      "Wholesale IPTV reseller panel access to Trex, Dino, Strong, Mega & Magnum. Direct pricing, free trials, expert coaching. Start your IPTV reseller business today.",
    images: [
      {
        url: "/images/panel-b68.png",
        width: 1200,
        height: 630,
        alt: "IPTV Reseller Panel Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV Reseller Panel | #1 IPTV Reseller Provider",
    description:
      "Wholesale IPTV reseller panel access to Trex, Dino, Strong, Mega & Magnum. Free trials on all servers. Expert coaching included.",
    images: ["/images/panel-b68.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#1a6fff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="min-h-screen flex flex-col antialiased">{children}</body>
    </html>
  );
}
