import type { Metadata } from "next";

import SiteHeader from "@/components/layout/SiteHeader";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import ServersSection from "@/components/sections/ServersSection";
import WhoIsThisForSection from "@/components/sections/WhoIsThisForSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import ProfitSection from "@/components/sections/ProfitSection";
import CoachingSection from "@/components/sections/CoachingSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PaymentMethodsSection from "@/components/sections/PaymentMethodsSection";
import FaqSection from "@/components/sections/FaqSection";
import ContactSection from "@/components/sections/ContactSection";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "IPTV Reseller Panel — Start Your IPTV Reseller Business | Free Trial",
  description:
    "Get wholesale IPTV reseller panel access to Trex, Dino, Mega & Strong servers. The #1 IPTV reseller provider — direct pricing, free 24-hr trials, expert coaching. Earn $500–$5,000/month.",
  keywords: [
    "iptv reseller",
    "iptv reseller panel",
    "iptv reseller provider",
    "buy iptv reseller panel",
    "wholesale iptv panel",
    "iptv panel reseller",
    "iptv reseller business",
    "best iptv reseller panel",
    "iptv reseller service",
    "iptv wholesale credits",
  ],
  alternates: {
    canonical: "https://iptvresellerprovider.com",
  },
  openGraph: {
    title: "IPTV Reseller Panel — #1 IPTV Reseller Provider",
    description:
      "Wholesale IPTV reseller panel access to Trex, Dino, Mega & Strong. Free trials, direct pricing, expert coaching. Join 1,600+ resellers earning online.",
    url: "https://iptvresellerprovider.com",
    images: [{ url: "/images/panel-b68.png", width: 1200, height: 630, alt: "IPTV Reseller Panel" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://iptvresellerprovider.com/#organization",
      name: "IPTV Reseller Provider",
      url: "https://iptvresellerprovider.com",
      logo: "https://iptvresellerprovider.com/images/logo.png",
      email: "contact@iptvresellerprovider.com",
      description:
        "Wholesale IPTV reseller panel provider offering access to Trex, Dino, Mega & Strong servers with direct pricing, free trials, and business coaching.",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+19545948062",
        contactType: "customer support",
        availableLanguage: ["English", "French", "Arabic"],
        contactOption: "TollFree",
      },
      sameAs: ["https://wa.me/19545948062"],
    },
    {
      "@type": "WebSite",
      "@id": "https://iptvresellerprovider.com/#website",
      url: "https://iptvresellerprovider.com",
      name: "IPTV Reseller Provider",
      publisher: { "@id": "https://iptvresellerprovider.com/#organization" },
    },
    {
      "@type": "WebPage",
      "@id": "https://iptvresellerprovider.com/#webpage",
      url: "https://iptvresellerprovider.com",
      name: "IPTV Reseller Panel | #1 IPTV Reseller Provider",
      description:
        "Get wholesale IPTV reseller panel access. Free trials on Trex, Dino, Mega & Strong servers. Expert coaching included.",
      isPartOf: { "@id": "https://iptvresellerprovider.com/#website" },
      about: { "@id": "https://iptvresellerprovider.com/#organization" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much can I realistically earn as a reseller?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It depends on your client base. With 50 clients you can earn $300–$550/month, with 100–200 clients you can reach $1,000–$2,200/month, and established resellers with 300–500 clients earn $3,000–$5,500/month. The profit comes from the difference between the wholesale price you pay us and the retail price you charge your clients. You control your own margins.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get my first clients? I don't know anyone who wants IPTV.",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This is exactly what our free coaching covers. Most resellers start with Facebook groups, WhatsApp communities, Telegram channels, or local expat/sports fan groups in their area. We'll give you specific scripts, strategies, and posting templates that work.",
          },
        },
        {
          "@type": "Question",
          name: "How much money do I need to start?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can start with as little as $290 (our entry-level Trex package with 120 credits). That's enough to create subscriptions for 40–60 clients at 2 connections each. Credits never expire and are fully refundable if you change your mind.",
          },
        },
        {
          "@type": "Question",
          name: "Can I do this part-time alongside my current job?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely — most of our resellers start part-time. Setting up a client takes 5 minutes. Renewals are automatic. Support is rare when the server quality is high. Many of our resellers work full-time jobs and manage 100+ clients in their spare time.",
          },
        },
        {
          "@type": "Question",
          name: "Can I test the servers before buying credits?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — every server comes with a free 24-hour trial. You can test Trex, Dino, Mega, and Strong before committing to anything. Test stability, channel quality, VOD library, and speed on your own devices before spending a dollar.",
          },
        },
        {
          "@type": "Question",
          name: "What happens if a client has a technical issue?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We help you handle it. You don't need to be technical — we coach you on the most common issues (buffering, app setup, EPG) and how to resolve them quickly. For anything more complex, we're available 24/7 on WhatsApp and typically respond in under an hour.",
          },
        },
        {
          "@type": "Question",
          name: "Are your prices really wholesale? What's the difference?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We source directly from the IPTV servers with no middlemen. You're getting reseller-tier pricing — significantly lower per connection than what retail customers pay. Most of our resellers mark up 4–6x and still offer competitive prices in their market.",
          },
        },
        {
          "@type": "Question",
          name: "What payment methods do you accept?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We accept PayPal, Visa/Mastercard, USDT (TRC20/ERC20), Bitcoin (BTC), Ethereum (ETH), and bank/wire transfers. All options are fast and secure.",
          },
        },
        {
          "@type": "Question",
          name: "Do credits expire? What if my business doesn't take off?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Credits never expire — use them at your own pace over months or years. And if you decide IPTV reselling isn't for you, credits are fully refundable. There's genuinely no risk to trying.",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main>
        <HeroSection />
        <StatsSection />
        <WhyUsSection />
        <ServersSection />
        <WhoIsThisForSection />
        <HowItWorksSection />
        <ProfitSection />
        <CoachingSection />
        <TestimonialsSection />
        <PaymentMethodsSection />
        <FaqSection />
        <ContactSection />
        <CtaBanner />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
