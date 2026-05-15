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
import { megaPricing } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Mega IPTV Server | Mega IPTV Panel — Wholesale Reseller Pricing",
  description:
    "Mega IPTV server reseller panel with 26,883 live channels, 12,847 movies & 51,697 series. Get wholesale Mega IPTV panel access. Free 24-hr trial available.",
  keywords: [
    "mega iptv server",
    "mega iptv panel",
    "mega iptv reseller",
    "mega iptv",
    "buy mega iptv panel",
    "mega iptv wholesale",
    "mega iptv reseller panel",
    "mega server iptv",
  ],
  alternates: { canonical: "https://iptvresellerprovider.com/mega" },
  openGraph: {
    title: "Mega IPTV Server | Mega IPTV Panel — Reseller Access",
    description:
      "Trusted Mega IPTV server. 26,883 live channels, 51K+ series. Wholesale Mega IPTV panel. Free trial available.",
    url: "https://iptvresellerprovider.com/mega",
    images: [{ url: "/images/panel-mega-main.png", width: 1200, height: 630, alt: "Mega IPTV Panel" }],
  },
};

const megaJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Mega IPTV Reseller Panel",
  description:
    "Trusted Mega IPTV server reseller panel with 26,883 live channels, 12,847 movies, and 51,697 series. Wholesale pricing for IPTV resellers.",
  brand: { "@type": "Brand", name: "Mega IPTV" },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "170",
    highPrice: "9200",
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

const mega = servers.find((s) => s.id === "mega")!;

export default function MegaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(megaJsonLd) }}
      />
      <SiteHeader />
      <main>
        <ServerHero server={mega} />
        <ServerPricingTable pricing={megaPricing} serverName="Mega" serverId="mega" />
        <PaymentMethodsSection />
        <FaqSection />
        <CtaBanner />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
