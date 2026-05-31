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
  "@graph": [
    {
      "@type": "Product",
      name: "Strong IPTV Reseller Panel",
      url: "https://iptvresellerprovider.com/strong",
      image: "https://iptvresellerprovider.com/images/panel-strong-main.png",
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
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://iptvresellerprovider.com" },
        { "@type": "ListItem", position: 2, name: "Strong IPTV Server", item: "https://iptvresellerprovider.com/strong" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "How much can I realistically earn as a reseller?", acceptedAnswer: { "@type": "Answer", text: "With 50 clients you can earn $300–$550/month. With 100–200 clients you can reach $1,000–$2,200/month. Established resellers with 300–500 clients earn $3,000–$5,500/month. You control your own margins based on the difference between wholesale and retail pricing." } },
        { "@type": "Question", name: "How do I get my first clients?", acceptedAnswer: { "@type": "Answer", text: "Most resellers start with Facebook groups, WhatsApp communities, Telegram channels, or local expat/sports fan groups. Our free coaching provides scripts, strategies, and posting templates that work." } },
        { "@type": "Question", name: "How much money do I need to start with Strong IPTV?", acceptedAnswer: { "@type": "Answer", text: "You can start with as little as $290 — our entry-level Strong package with 120 credits. Credits never expire and are fully refundable." } },
        { "@type": "Question", name: "Can I test Strong IPTV before buying credits?", acceptedAnswer: { "@type": "Answer", text: "Yes — Strong IPTV comes with a free 24-hour trial. Test stability, channel quality, VOD library, and speed before spending a dollar." } },
        { "@type": "Question", name: "Do IPTV reseller credits expire?", acceptedAnswer: { "@type": "Answer", text: "No — credits never expire. Use them at your own pace over months or years. They are also fully refundable if you're not satisfied." } },
        { "@type": "Question", name: "What payment methods do you accept?", acceptedAnswer: { "@type": "Answer", text: "We accept PayPal, Visa/Mastercard, USDT (TRC20/ERC20), Bitcoin (BTC), Ethereum (ETH), and bank/wire transfers." } },
        { "@type": "Question", name: "Are your Strong IPTV prices really wholesale?", acceptedAnswer: { "@type": "Answer", text: "Yes. We source directly from the Strong IPTV server with no middlemen. Most resellers mark up 4–6x and still offer competitive prices in their market." } },
        { "@type": "Question", name: "Can I do IPTV reselling part-time?", acceptedAnswer: { "@type": "Answer", text: "Absolutely. Setting up a client takes 5 minutes and renewals are automatic. Many resellers manage 100+ clients alongside a full-time job." } },
        { "@type": "Question", name: "What if a client has a technical issue?", acceptedAnswer: { "@type": "Answer", text: "We coach you on the most common issues. For anything complex, we're available 24/7 on WhatsApp and typically respond in under an hour." } },
      ],
    },
  ],
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
