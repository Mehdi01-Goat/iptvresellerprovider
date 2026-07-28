import type { Metadata } from "next";

import SiteHeader from "@/components/layout/SiteHeader";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import ServerHero from "@/components/sections/ServerHero";
import PanelGallery from "@/components/sections/PanelGallery";
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
  "@graph": [
    {
      "@type": "Product",
      name: "Mega IPTV Reseller Panel",
      url: "https://iptvresellerprovider.com/mega",
      image: "https://iptvresellerprovider.com/images/panel-mega-main.png",
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
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://iptvresellerprovider.com" },
        { "@type": "ListItem", position: 2, name: "Mega IPTV Server", item: "https://iptvresellerprovider.com/mega" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "How much can I realistically earn as a reseller?", acceptedAnswer: { "@type": "Answer", text: "With 50 clients you can earn $300–$550/month. With 100–200 clients you can reach $1,000–$2,200/month. Established resellers with 300–500 clients earn $3,000–$5,500/month. You control your own margins based on the difference between wholesale and retail pricing." } },
        { "@type": "Question", name: "How do I get my first clients?", acceptedAnswer: { "@type": "Answer", text: "Most resellers start with Facebook groups, WhatsApp communities, Telegram channels, or local expat/sports fan groups. Our free coaching provides scripts, strategies, and posting templates that work." } },
        { "@type": "Question", name: "How much money do I need to start with Mega IPTV?", acceptedAnswer: { "@type": "Answer", text: "You can start with as little as $170 — our entry-level Mega package with 120 credits. Credits never expire and are fully refundable." } },
        { "@type": "Question", name: "Can I test Mega IPTV before buying credits?", acceptedAnswer: { "@type": "Answer", text: "Yes — Mega IPTV comes with a free 24-hour trial. Test stability, channel quality, VOD library, and speed before spending a dollar." } },
        { "@type": "Question", name: "Do IPTV reseller credits expire?", acceptedAnswer: { "@type": "Answer", text: "No — credits never expire. Use them at your own pace over months or years. They are also fully refundable if you're not satisfied." } },
        { "@type": "Question", name: "What payment methods do you accept?", acceptedAnswer: { "@type": "Answer", text: "We accept PayPal, Visa/Mastercard, USDT (TRC20/ERC20), Bitcoin (BTC), Ethereum (ETH), and bank/wire transfers." } },
        { "@type": "Question", name: "Are your Mega IPTV prices really wholesale?", acceptedAnswer: { "@type": "Answer", text: "Yes. We source directly from the Mega IPTV server with no middlemen. Most resellers mark up 4–6x and still offer competitive prices in their market." } },
        { "@type": "Question", name: "Can I do IPTV reselling part-time?", acceptedAnswer: { "@type": "Answer", text: "Absolutely. Setting up a client takes 5 minutes and renewals are automatic. Many resellers manage 100+ clients alongside a full-time job." } },
        { "@type": "Question", name: "What if a client has a technical issue?", acceptedAnswer: { "@type": "Answer", text: "We coach you on the most common issues. For anything complex, we're available 24/7 on WhatsApp and typically respond in under an hour." } },
      ],
    },
  ],
};

const mega = servers.find((s) => s.id === "mega")!;

const megaGallery = [
  "/images/mega-feature-1.png",
  "/images/mega-feature-2.png",
  "/images/mega-feature-3.png",
  "/images/mega-feature-4.png",
  "/images/mega-feature-5.png",
  "/images/mega-feature-6.png",
  "/images/mega-feature-7.png",
  "/images/mega-feature-8.png",
  "/images/mega-feature-9.png",
  "/images/mega-feature-10.png",
  "/images/mega-feature-11.png",
];

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
        <PanelGallery images={megaGallery} serverName="Mega" />
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
