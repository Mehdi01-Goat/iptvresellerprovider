import type { Metadata } from "next";

import SiteHeader from "@/components/layout/SiteHeader";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact — Get Your Free IPTV Reseller Trial",
  description:
    "Contact IPTV Reseller Provider to get a free 24-hr trial on any IPTV server, buy reseller credits, or get free coaching for your IPTV reseller business. Reply in under 1 hour.",
  keywords: [
    "iptv reseller contact",
    "iptv reseller free trial",
    "iptv reseller support",
    "buy iptv reseller credits",
  ],
  alternates: { canonical: "https://iptvresellerprovider.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      
      <SiteHeader />
      <main className="pt-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 text-center">
          <span className="badge-blue px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 inline-block">
            Contact
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Get in Touch —{" "}
            <span className="text-gradient">We&apos;re Here 24/7</span>
          </h1>
          <p className="text-white/55 text-lg max-w-xl mx-auto">
            Whether you need a free trial, want to buy credits, or need coaching to grow your reseller
            business — send us a message and we&apos;ll reply within the hour.
          </p>
        </div>
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
