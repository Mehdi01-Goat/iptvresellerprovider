import type { Metadata } from "next";

import SiteHeader from "@/components/layout/SiteHeader";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import ServerHero from "@/components/sections/ServerHero";
import ServerPricingTable from "@/components/sections/ServerPricingTable";
import PanelGallery from "@/components/sections/PanelGallery";
import PaymentMethodsSection from "@/components/sections/PaymentMethodsSection";
import FaqSection from "@/components/sections/FaqSection";
import CtaBanner from "@/components/sections/CtaBanner";
import { servers } from "@/lib/servers";
import { magnumPricing } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Magnum IPTV Server | Magnum IPTV Panel — Wholesale Reseller Pricing",
  description:
    "Magnum IPTV server reseller panel with 20,469 live channels, 98,990 movies & 23,141 series. Get wholesale Magnum IPTV panel access. Free 24-hr trial available.",
  keywords: [
    "magnum iptv server",
    "magnum iptv panel",
    "magnum iptv reseller",
    "magnum iptv",
    "buy magnum iptv panel",
    "magnum iptv wholesale",
    "magnum iptv reseller panel",
    "magnum server iptv",
  ],
  alternates: { canonical: "https://iptvresellerprovider.com/magnum" },
  openGraph: {
    title: "Magnum IPTV Server | Magnum IPTV Panel — Reseller Access",
    description:
      "Premium Magnum IPTV server. 20,469 live channels, 98K+ movies. Wholesale Magnum IPTV panel. Free trial available.",
    url: "https://iptvresellerprovider.com/magnum",
    images: [{ url: "/images/panel-magnum-main.png", width: 1200, height: 630, alt: "Magnum IPTV Panel" }],
  },
};

const magnumJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Magnum IPTV Reseller Panel",
  description:
    "Premium Magnum IPTV server reseller panel with 20,469 live channels, 98,990 movies, and 23,141 series. Wholesale pricing for IPTV resellers.",
  brand: { "@type": "Brand", name: "Magnum IPTV" },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "187",
    highPrice: "10120",
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

const magnum = servers.find((s) => s.id === "magnum")!;

const magnumGallery = [
  "/images/magnum-feature-1.png",
  "/images/magnum-feature-2.png",
];

export default function MagnumPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(magnumJsonLd) }}
      />
      <SiteHeader />
      <main>
        <ServerHero server={magnum} />
        <PanelGallery images={magnumGallery} serverName="Magnum" />
        <ServerPricingTable pricing={magnumPricing} serverName="Magnum" serverId="magnum" />
        <PaymentMethodsSection />
        <FaqSection />
        <CtaBanner />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
