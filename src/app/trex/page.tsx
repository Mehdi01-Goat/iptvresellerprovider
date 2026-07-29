import type { Metadata } from "next";

import SiteHeader from "@/components/layout/SiteHeader";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import ServerHero from "@/components/sections/ServerHero";
import ServerPricingTable from "@/components/sections/ServerPricingTable";
import PanelGallery from "@/components/sections/PanelGallery";
import PaymentMethodsSection from "@/components/sections/PaymentMethodsSection";
import FaqSection, { type Faq } from "@/components/sections/FaqSection";
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
  twitter: {
    card: "summary_large_image",
    title: "Trex IPTV Server | Trex IPTV Panel — Reseller Access",
    description:
      "Ultra-premium Trex IPTV server. 49,817 live channels, 184K+ movies. Wholesale Trex IPTV panel from $290. Free trial available.",
    images: ["/images/panel-trex-main.png"],
  },
};

const trexFaqs: Faq[] = [
  { q: "How much can I realistically earn as a reseller?", a: "With 50 clients you can earn $300–$550/month. With 100–200 clients you can reach $1,000–$2,200/month. Established resellers with 300–500 clients earn $3,000–$5,500/month. You control your own margins based on the difference between wholesale and retail pricing." },
  { q: "How do I get my first clients?", a: "Most resellers start with Facebook groups, WhatsApp communities, Telegram channels, or local expat/sports fan groups. Our free coaching provides scripts, strategies, and posting templates that work." },
  { q: "How much money do I need to start?", a: "You can start with as little as $290 — our entry-level Trex package with 120 credits. That's enough for 40–60 clients. Credits never expire and are fully refundable." },
  { q: "Can I test Trex IPTV before buying credits?", a: "Yes — Trex IPTV comes with a free 24-hour trial. Test stability, channel quality, VOD library, and speed before spending a dollar." },
  { q: "Do IPTV reseller credits expire?", a: "No — credits never expire. Use them at your own pace over months or years. They are also fully refundable if you're not satisfied." },
  { q: "What payment methods do you accept?", a: "We accept PayPal, Visa/Mastercard, USDT (TRC20/ERC20), Bitcoin (BTC), Ethereum (ETH), and bank/wire transfers." },
  { q: "Are your Trex IPTV prices really wholesale?", a: "Yes. We source directly from the Trex IPTV server with no middlemen. Most resellers mark up 4–6x and still offer competitive prices in their market." },
  { q: "Can I do IPTV reselling part-time?", a: "Absolutely. Setting up a client takes 5 minutes and renewals are automatic. Many resellers manage 100+ clients alongside a full-time job." },
  { q: "What if a client has a technical issue?", a: "We coach you on the most common issues. For anything complex, we're available 24/7 on WhatsApp and typically respond in under an hour." },
];

const trexJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "Trex IPTV Reseller Panel",
      url: "https://iptvresellerprovider.com/trex",
      image: "https://iptvresellerprovider.com/images/panel-trex-main.png",
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
        bestRating: "5",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://iptvresellerprovider.com" },
        { "@type": "ListItem", position: 2, name: "Trex IPTV Server", item: "https://iptvresellerprovider.com/trex" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: trexFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ],
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
        <FaqSection faqs={trexFaqs} />
        <CtaBanner />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
