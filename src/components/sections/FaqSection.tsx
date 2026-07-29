"use client";

import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, MessageCircle } from "lucide-react";

export type Faq = { q: string; a: string };

const defaultFaqs: Faq[] = [
  {
    q: "How much can I realistically earn as a reseller?",
    a: "It depends on your client base, but here's a realistic breakdown: with 50 clients you can earn $300–$550/month, with 100–200 clients you can reach $1,000–$2,200/month, and established resellers with 300–500 clients earn $3,000–$5,500/month. The profit comes from the difference between the wholesale price you pay us and the retail price you charge your clients. You control your own margins.",
  },
  {
    q: "How do I get my first clients? I don't know anyone who wants IPTV.",
    a: "This is exactly what our free coaching covers. Most resellers start with Facebook groups, WhatsApp communities, Telegram channels, or local expat/sports fan groups in their area. We'll give you specific scripts, strategies, and posting templates that work. Carlos went from 0 to 400+ clients using methods we taught him — no prior network.",
  },
  {
    q: "How much money do I need to start?",
    a: "You can start with as little as $290 (our entry-level Trex package with 120 credits). That's enough to create subscriptions for 40–60 clients at 2 connections each. We recommend starting small, getting your first 20–30 clients, and then reinvesting to scale up. Credits never expire and are fully refundable if you change your mind.",
  },
  {
    q: "Can I do this part-time alongside my current job?",
    a: "Absolutely — most of our resellers start part-time. Setting up a client takes 5 minutes. Renewals are automatic. Support is rare when the server quality is high. Many of our resellers work full-time jobs and manage 100+ clients in their spare time. Once it scales, many go full-time.",
  },
  {
    q: "Can I test the servers before buying credits?",
    a: "Yes — every server comes with a free 24-hour trial. You can test Trex, Dino, Strong, Mega, and Magnum before committing to anything. Test stability, channel quality, VOD library, and speed on your own devices and your clients' preferred apps before spending a dollar.",
  },
  {
    q: "What happens if a client has a technical issue?",
    a: "We help you handle it. You don't need to be technical — we coach you on the most common issues (buffering, app setup, EPG) and how to resolve them quickly. For anything more complex, we're available 24/7 on WhatsApp and typically respond in under an hour.",
  },
  {
    q: "Are your prices really wholesale? What's the difference?",
    a: "Yes. We source directly from the IPTV servers with no middlemen. You're getting reseller-tier pricing — significantly lower per connection than what retail customers pay. Most of our resellers mark up 4–6x and still offer competitive prices in their market.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept PayPal, Visa/Mastercard, USDT (TRC20/ERC20), Bitcoin (BTC), Ethereum (ETH), and bank/wire transfers. All options are fast and secure.",
  },
  {
    q: "Do credits expire? What if my business doesn't take off?",
    a: "Credits never expire — use them at your own pace over months or years. And if you decide IPTV reselling isn't for you, credits are fully refundable. There's genuinely no risk to trying.",
  },
];

export default function FaqSection({ faqs = defaultFaqs }: { faqs?: Faq[] }) {
  return (
    <section id="faq" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <p className="section-label mb-4">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Questions Before{" "}
              <span className="text-gradient">You Start</span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Everything you need to know about earning as an IPTV reseller — before you spend a single dollar.
            </p>

            <div className="light-card p-5 border-l-4 border-[#1a6fff]">
              <p className="text-gray-900 font-semibold text-sm mb-1">Still not sure?</p>
              <p className="text-gray-500 text-xs leading-relaxed mb-4">
                Message us on WhatsApp — we&apos;ll answer any question and help you decide if this is right for you. No pressure.
              </p>
              <a
                href="https://wa.me/19545948062?text=Hi, I have some questions about becoming an IPTV reseller"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-primary text-white text-xs font-semibold hover:opacity-90 transition-opacity"
              >
                <MessageCircle size={13} />
                Ask Us Anything
              </a>
            </div>
          </motion.div>

          {/* Right: accordion */}
          <div className="lg:col-span-2">
            <Accordion.Root type="single" collapsible className="flex flex-col">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="border-b border-gray-100 last:border-0"
                >
                  <Accordion.Item value={`item-${i}`}>
                    <Accordion.Header>
                      <Accordion.Trigger className="w-full flex items-center justify-between py-5 text-left text-gray-900 font-semibold text-sm hover:text-[#1a6fff] transition-colors group gap-4">
                        <span>{faq.q}</span>
                        <div className="w-7 h-7 rounded-lg bg-gray-100 group-hover:bg-blue-50 group-data-[state=open]:bg-blue-50 flex items-center justify-center shrink-0 transition-colors">
                          <ChevronDown
                            size={14}
                            className="text-gray-500 group-hover:text-[#1a6fff] group-data-[state=open]:text-[#1a6fff] transition-transform duration-200 group-data-[state=open]:rotate-180"
                          />
                        </div>
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="overflow-hidden data-[state=open]:animate-[accordion-down_0.22s_ease-out] data-[state=closed]:animate-[accordion-up_0.18s_ease-out]">
                      <p className="pb-5 text-gray-500 text-sm leading-relaxed pr-10">{faq.a}</p>
                    </Accordion.Content>
                  </Accordion.Item>
                </motion.div>
              ))}
            </Accordion.Root>
          </div>
        </div>
      </div>
    </section>
  );
}
