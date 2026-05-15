"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Zap } from "lucide-react";
import { trexPricing } from "@/lib/pricing";

const included = [
  "M3U, MAG, Enigma2 & Protocol support",
  "Anti-freeze & anti-buffer system",
  "Full EPG guide",
  "Sub-reseller panel creation",
  "IP management & Custom DNS",
  "Credits never expire — fully refundable",
];

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4"
        >
          <div>
            <p className="section-label mb-4">Pricing</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 leading-tight">
              Trex Server — Credit Packages
            </h2>
            <p className="text-gray-500 text-sm">
              1 credit = 1 month for 1 connection. Larger packages = lower cost per credit.
            </p>
          </div>
          <Link href="/dino#pricing" className="text-[#1a6fff] text-sm font-medium hover:underline shrink-0">
            View Dino Server pricing →
          </Link>
        </motion.div>

        {/* Included features */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="light-card p-5 mb-8 bg-[#f7f9ff]"
        >
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
            All packages include
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {included.map((f) => (
              <div key={f} className="flex items-start gap-2 text-xs text-gray-600">
                <CheckCircle2 size={12} className="text-[#1a6fff] shrink-0 mt-0.5" />
                {f}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tier cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {trexPricing.map((tier, i) => (
            <motion.div
              key={tier.credits}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className={`relative rounded-2xl p-6 border transition-all ${
                tier.popular
                  ? "bg-[#1a6fff] border-[#1a6fff] shadow-xl shadow-blue-500/25"
                  : "bg-white border-gray-200 hover:border-blue-200 hover:shadow-md"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-400 text-white text-xs font-bold shadow-lg">
                    <Zap size={11} fill="currentColor" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className={`text-[10px] font-semibold uppercase tracking-widest mb-3 ${tier.popular ? "text-blue-200" : "text-gray-400"}`}>
                {tier.tier}
              </div>

              <div className={`text-4xl font-bold mb-1 ${tier.popular ? "text-white" : "text-gray-900"}`}>
                ${tier.price.toLocaleString()}
              </div>

              <div className={`text-sm mb-1 ${tier.popular ? "text-blue-200" : "text-gray-500"}`}>
                {tier.credits.toLocaleString()} credits
              </div>
              <div className={`text-xs mb-6 font-medium ${tier.popular ? "text-blue-200" : "text-[#1a6fff]"}`}>
                {tier.costPerCredit} / credit
              </div>

              <div className={`text-xs mb-6 pb-5 border-b ${tier.popular ? "text-blue-200/70 border-blue-400/30" : "text-gray-400 border-gray-100"}`}>
                1 credit = 1 month · 1 connection
              </div>

              <Link
                href={`/contact?server=trex&credits=${tier.credits}`}
                className={`flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  tier.popular
                    ? "bg-white text-[#1a6fff] hover:bg-blue-50 shadow-sm"
                    : "border border-gray-200 text-gray-700 hover:border-[#1a6fff] hover:text-[#1a6fff] hover:bg-blue-50/50"
                }`}
              >
                Get {tier.credits.toLocaleString()} Credits
                <ArrowRight size={13} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Payment methods */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-gray-400 text-sm mt-8 flex items-center justify-center gap-2"
        >
          <span className="w-1 h-1 rounded-full bg-gray-300" />
          PayPal · Credit / Debit Card · Crypto (USDT, BTC, ETH) · Money Transfer
          <span className="w-1 h-1 rounded-full bg-gray-300" />
        </motion.p>
      </div>
    </section>
  );
}
