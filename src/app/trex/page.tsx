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
import { trexPricing } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Trex IPTV Server | Trex IPTV Panel — Wholesale Reseller Pricing",
  description:
    "Trex IPTV server reseller panel with 49,817 live channels, 184,384 movies & 40,716 series. Get wholesale Trex IPTV panel access from $290. Free 24-hr trial available.",
  keywords: [
    "trex iptv server",
    "trex iptv panel",
    "trex iptv reseller",
    "trex iptv",
    "buy trex iptv panel",
    "trex iptv wholesale",
    "trex iptv reseller panel",
    "trex server iptv",
  ],
  alternates: { canonical: "https://iptvresellerprovider.com/trex" },
  openGraph: {
    title: "Trex IPTV Server | Trex IPTV Panel — Reseller Access",
    description:
      "Ultra-premium Trex IPTV server. 49,817 live channels, 184K+ movies. Wholesale Trex IPTV panel from $290. Free trial available.",
    url: "https://iptvresellerprovider.com/trex",
    images: [{ url: "/images/panel-trex-main.png", width: 1200, height: 630, alt: "Trex IPTV Panel" }],
  },
};

const trexJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Trex IPTV Reseller Panel",
  description:
    "Ultra-premium Trex IPTV server reseller panel with 49,817 live channels, 184,384 movies, and 40,716 series. Wholesale pricing for IPTV resellers.",
  brand: { "@type": "Brand", name: "Trex IPTV" },
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

const trex = servers.find((s) => s.id === "trex")!;

const trexGallery = [
  "/images/trex-feature-1.png",
  "/images/trex-feature-2.png",
  "/images/trex-feature-3.png",
  "/images/trex-feature-4.png",
  "/images/trex-feature-5.png",
  "/images/trex-feature-6.png",
  "/images/trex-feature-7.png",
  "/images/trex-feature-8.png",
];

export default function TrexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(trexJsonLd) }}
      />
      <SiteHeader />
      <main>
        <ServerHero server={trex} />
        <PanelGallery images={trexGallery} serverName="Trex" />
        <ServerPricingTable pricing={trexPricing} serverName="Trex" serverId="trex" />
        <PaymentMethodsSection />
        <FaqSection />
        <CtaBanner />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
