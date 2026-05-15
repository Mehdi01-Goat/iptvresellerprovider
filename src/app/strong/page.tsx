import type { Metadata } from "next";

import SiteHeader from "@/components/layout/SiteHeader";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import ServerHero from "@/components/sections/ServerHero";
import ServerPricingTable from "@/components/sections/ServerPricingTable";
import PaymentMethodsSection from "@/components/sections/PaymentMethodsSection";
import FaqSection from "@/components/sections/FaqSection";
import CtaBanner from "@/components/sections/CtaBanner";
import { servers } from "@/lib/servers";
import { strongPricing } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Strong IPTV Server | Strong IPTV Panel — Wholesale Reseller Pricing",
  description:
    "Strong IPTV server reseller panel with 46,976 live channels, 149,046 movies & 38,610 series. Get wholesale Strong IPTV panel access. Free 24-hr trial available.",
  keywords: [
    "strong iptv server",
    "strong iptv panel",
    "strong iptv reseller",
    "strong iptv",
    "buy strong iptv panel",
    "strong iptv wholesale",
    "strong iptv reseller panel",
    "strong server iptv",
  ],
  alternates: { canonical: "https://iptvresellerprovider.com/strong" },
  openGraph: {
    title: "Strong IPTV Server | Strong IPTV Panel — Reseller Access",
    description:
      "High performance Strong IPTV server. 46,976 live channels, 149K+ movies. Wholesale Strong IPTV panel. Free trial available.",
    url: "https://iptvresellerprovider.com/strong",
    images: [{ url: "/images/panel-strong-main.png", width: 1200, height: 630, alt: "Strong IPTV Panel" }],
  },
};

const strongJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Strong IPTV Reseller Panel",
  description:
    "High performance Strong IPTV server reseller panel with 46,976 live channels, 149,046 movies, and 38,610 series. Wholesale pricing for IPTV resellers.",
  brand: { "@type": "Brand", name: "Strong IPTV" },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "290",
    highPrice: "19900",
    offerCount: "6",
    seller: { "@type": "Organization", name: "IPTV Reseller Provider" },
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1600",
    bestRating: "5",
  },
};

const strong = servers.find((s) => s.id === "strong")!;

export default function StrongPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(strongJsonLd) }}
      />
      <SiteHeader />
      <main>
        <ServerHero server={strong} />
        <ServerPricingTable pricing={strongPricing} serverName="Strong" serverId="strong" />
        <PaymentMethodsSection />
        <FaqSection />
        <CtaBanner />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
