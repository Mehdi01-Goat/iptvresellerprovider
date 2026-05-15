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
import { dinoPricing } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Dino IPTV Server | Dino IPTV Panel — Wholesale Reseller Pricing",
  description:
    "Dino IPTV server reseller panel with 20,469 live channels, 98,990 movies & 23,141 series. Get wholesale Dino IPTV panel access from $170. Free 24-hr trial available.",
  keywords: [
    "dino iptv server",
    "dino iptv panel",
    "dino iptv reseller",
    "dino iptv",
    "buy dino iptv panel",
    "dino iptv wholesale",
    "dino iptv reseller panel",
    "dino server iptv",
  ],
  alternates: { canonical: "https://iptvresellerprovider.com/dino" },
  openGraph: {
    title: "Dino IPTV Server | Dino IPTV Panel — Reseller Access",
    description:
      "Reliable Dino IPTV server. 20,469 live channels, 98K+ movies. Wholesale Dino IPTV panel from $170. Free trial available.",
    url: "https://iptvresellerprovider.com/dino",
    images: [{ url: "/images/panel-dino-main.png", width: 1200, height: 630, alt: "Dino IPTV Panel" }],
  },
};

const dinoJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Dino IPTV Reseller Panel",
  description:
    "Reliable Dino IPTV server reseller panel with 20,469 live channels, 98,990 movies, and 23,141 series. Wholesale pricing for IPTV resellers.",
  brand: { "@type": "Brand", name: "Dino IPTV" },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "170",
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

const dino = servers.find((s) => s.id === "dino")!;

const dinoGallery = [
  "/images/dino-feature-1.png",
  "/images/dino-feature-2.png",
  "/images/dino-feature-3.png",
  "/images/dino-feature-4.png",
  "/images/dino-feature-5.png",
  "/images/dino-feature-6.png",
  "/images/dino-feature-7.png",
  "/images/dino-feature-8.png",
  "/images/dino-feature-9.png",
  "/images/dino-feature-10.png",
  "/images/dino-feature-11.png",
  "/images/dino-feature-12.png",
  "/images/dino-feature-13.png",
  "/images/dino-feature-14.png",
  "/images/dino-feature-15.png",
  "/images/dino-feature-16.png",
  "/images/dino-feature-17.png",
];

export default function DinoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dinoJsonLd) }}
      />
      <SiteHeader />
      <main>
        <ServerHero server={dino} />
        <PanelGallery images={dinoGallery} serverName="Dino" />
        <ServerPricingTable pricing={dinoPricing} serverName="Dino" serverId="dino" />
        <PaymentMethodsSection />
        <FaqSection />
        <CtaBanner />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
