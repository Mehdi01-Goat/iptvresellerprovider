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
  "@graph": [
    {
      "@type": "Product",
      name: "Dino IPTV Reseller Panel",
      url: "https://iptvresellerprovider.com/dino",
      image: "https://iptvresellerprovider.com/images/panel-dino-main.png",
      description:
        "Reliable Dino IPTV server reseller panel with 20,469 live channels, 98,990 movies, and 23,141 series. Wholesale pricing for IPTV resellers.",
      brand: { "@type": "Brand", name: "Dino IPTV" },
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
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://iptvresellerprovider.com" },
        { "@type": "ListItem", position: 2, name: "Dino IPTV Server", item: "https://iptvresellerprovider.com/dino" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "How much can I realistically earn as a reseller?", acceptedAnswer: { "@type": "Answer", text: "With 50 clients you can earn $300–$550/month. With 100–200 clients you can reach $1,000–$2,200/month. Established resellers with 300–500 clients earn $3,000–$5,500/month. You control your own margins based on the difference between wholesale and retail pricing." } },
        { "@type": "Question", name: "How do I get my first clients?", acceptedAnswer: { "@type": "Answer", text: "Most resellers start with Facebook groups, WhatsApp communities, Telegram channels, or local expat/sports fan groups. Our free coaching provides scripts, strategies, and posting templates that work." } },
        { "@type": "Question", name: "How much money do I need to start with Dino IPTV?", acceptedAnswer: { "@type": "Answer", text: "You can start with as little as $170 — our entry-level Dino package with 120 credits. Credits never expire and are fully refundable." } },
        { "@type": "Question", name: "Can I test Dino IPTV before buying credits?", acceptedAnswer: { "@type": "Answer", text: "Yes — Dino IPTV comes with a free 24-hour trial. Test stability, channel quality, VOD library, and speed before spending a dollar." } },
        { "@type": "Question", name: "Do IPTV reseller credits expire?", acceptedAnswer: { "@type": "Answer", text: "No — credits never expire. Use them at your own pace over months or years. They are also fully refundable if you're not satisfied." } },
        { "@type": "Question", name: "What payment methods do you accept?", acceptedAnswer: { "@type": "Answer", text: "We accept PayPal, Visa/Mastercard, USDT (TRC20/ERC20), Bitcoin (BTC), Ethereum (ETH), and bank/wire transfers." } },
        { "@type": "Question", name: "Are your Dino IPTV prices really wholesale?", acceptedAnswer: { "@type": "Answer", text: "Yes. We source directly from the Dino IPTV server with no middlemen. Most resellers mark up 4–6x and still offer competitive prices in their market." } },
        { "@type": "Question", name: "Can I do IPTV reselling part-time?", acceptedAnswer: { "@type": "Answer", text: "Absolutely. Setting up a client takes 5 minutes and renewals are automatic. Many resellers manage 100+ clients alongside a full-time job." } },
        { "@type": "Question", name: "What if a client has a technical issue?", acceptedAnswer: { "@type": "Answer", text: "We coach you on the most common issues. For anything complex, we're available 24/7 on WhatsApp and typically respond in under an hour." } },
      ],
    },
  ],
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
