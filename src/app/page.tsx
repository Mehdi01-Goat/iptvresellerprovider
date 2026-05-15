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
          name: "How much can I earn as an IPTV reseller?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "With 50 clients you can earn $300–$550/month. With 100–200 clients you can reach $1,000–$2,200/month. Established resellers with 300–500 clients earn $3,000–$5,500/month.",
          },
        },
        {
          "@type": "Question",
          name: "Can I test IPTV servers before buying credits?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — every server comes with a free 24-hour trial. You can test Trex, Dino, Mega, and Strong before committing to anything.",
          },
        },
        {
          "@type": "Question",
          name: "How much do I need to start as an IPTV reseller?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can start with as little as $290 (our entry-level Trex package with 120 credits). Credits never expire and are fully refundable.",
          },
        },
        {
          "@type": "Question",
          name: "Do credits expire?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No — credits never expire. Use them at your own pace. They are also fully refundable if you're not satisfied.",
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
