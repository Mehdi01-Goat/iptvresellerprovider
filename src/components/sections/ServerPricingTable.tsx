"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { CreditTier } from "@/lib/pricing";
import ContactPopup from "@/components/sections/ContactPopup";

const included = [
  "M3U, MAG, Enigma2 & Protocol support",
  "Free 24-hour trials",
  "Anti-freeze + Anti-buffer system",
  "Full EPG guide",
  "Sub-reseller panel creation",
  "IP management & Custom DNS",
  "Support tickets system",
  "Credits never expire — fully refundable",
];

type Props = { pricing: CreditTier[]; serverName: string; serverId: string };

export default function ServerPricingTable({ pricing, serverName, serverId }: Props) {
  const [popupCredits, setPopupCredits] = useState<number | null>(null);

  return (
    <section id="pricing" className="bg-gray-50 pt-24 pb-10 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="section-label mb-3">Pricing</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            {serverName} — Credit Packages
          </h2>
          <p className="text-gray-500 text-sm">
            1 credit = 1 month, 1 connection. More credits = lower cost per credit.
          </p>
        </motion.div>

        {/* Included */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="light-card p-5 mb-8"
        >
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
            Included in every package
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {included.map((f) => (
              <div key={f} className="flex items-start gap-2 text-xs text-gray-600">
                <CheckCircle2 size={12} className="text-[#1a6fff] shrink-0 mt-0.5" />
                {f}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tiers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pricing.map((tier, i) => (
            <motion.div
              key={tier.credits}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className={`relative rounded-2xl p-6 border transition-all ${
                tier.popular
                  ? "bg-[#1a6fff] border-[#1a6fff]"
                  : "bg-white border-gray-200 hover:border-blue-200"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 rounded-full bg-amber-400 text-white text-xs font-bold shadow">
                    Most Popular
                  </span>
                </div>
              )}
              <div className={`text-xs font-semibold uppercase tracking-wider mb-2 ${tier.popular ? "text-blue-100" : "text-gray-400"}`}>
                {tier.tier}
              </div>
              <div className={`text-4xl font-bold mb-1 ${tier.popular ? "text-white" : "text-gray-900"}`}>
                ${tier.price.toLocaleString()}
              </div>
              <div className={`text-sm mb-4 ${tier.popular ? "text-blue-100" : "text-gray-500"}`}>
                {tier.credits.toLocaleString()} credits · {tier.costPerCredit}/credit
              </div>
              <div className={`text-xs mb-5 ${tier.popular ? "text-blue-100" : "text-gray-400"}`}>
                1 credit = 1 month · 1 connection
              </div>

              {/* Button now opens popup instead of linking to /contact */}
              <button
                onClick={() => setPopupCredits(tier.credits)}
                className={`flex items-center justify-center gap-1.5 w-full py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  tier.popular
                    ? "bg-white text-[#1a6fff] hover:bg-blue-50"
                    : "border border-gray-200 text-gray-700 hover:border-[#1a6fff] hover:text-[#1a6fff]"
                }`}
              >
                Get {tier.credits.toLocaleString()} Credits
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact popup */}
      {popupCredits !== null && (
        <ContactPopup
          open={true}
          onClose={() => setPopupCredits(null)}
          credits={popupCredits}
          serverName={serverName}
        />
      )}
    </section>
  );
}
