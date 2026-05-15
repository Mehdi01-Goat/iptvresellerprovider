"use client";

import { motion } from "framer-motion";
import { MessageCircle, TrendingUp } from "lucide-react";

const tiers = [
  {
    label: "Starter",
    clients: "30–50",
    revenue: "$450–$750",
    profit: "$300–$550",
    profitColor: "#1a6fff",
    profitBg: "rgba(26,111,255,0.08)",
    border: "rgba(26,111,255,0.18)",
    desc: "Part-time. A few hours a week. Perfect to start while keeping your current job.",
    highlight: false,
  },
  {
    label: "Growing",
    clients: "100–200",
    revenue: "$1,500–$3,000",
    profit: "$1,000–$2,200",
    profitColor: "#7c3aed",
    profitBg: "rgba(124,58,237,0.08)",
    border: "rgba(124,58,237,0.2)",
    desc: "Semi-full-time. Word of mouth kicks in. Most resellers hit this within 3 months.",
    highlight: true,
  },
  {
    label: "Established",
    clients: "300–500",
    revenue: "$4,500–$7,500",
    profit: "$3,200–$5,500",
    profitColor: "#16a34a",
    profitBg: "rgba(22,163,74,0.08)",
    border: "rgba(22,163,74,0.18)",
    desc: "Full-time income. Automated renewals. Some of our resellers are here within 6 months.",
    highlight: false,
  },
];

const steps = [
  { num: "01", text: "You buy credits at wholesale price from us" },
  { num: "02", text: "You create subscriptions for your clients" },
  { num: "03", text: "You charge your clients retail — keep the margin" },
  { num: "04", text: "Clients renew every month — recurring income" },
];

export default function ProfitSection() {
  return (
    <section className="bg-[#f7f9ff] py-24 border-y border-blue-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4 mx-auto">Earning Potential</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            How Much Can You{" "}
            <span className="text-gradient">Actually Earn?</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-lg mx-auto leading-relaxed">
            Real numbers based on what our resellers make. You set your own prices — the difference between wholesale and retail is pure profit.
          </p>
        </motion.div>

        {/* How it works — simple row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-12"
        >
          {steps.map((s, i) => (
            <div key={s.num} className="flex items-start gap-3">
              <span className="text-[#1a6fff] font-bold text-xs shrink-0 mt-0.5">{s.num}</span>
              <p className="text-gray-500 text-xs leading-relaxed">{s.text}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block w-4 shrink-0 mt-1.5 border-t border-dashed border-gray-200" />
              )}
            </div>
          ))}
        </motion.div>

        {/* Tier cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {tiers.map((t, i) => (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className={`relative rounded-2xl border p-6 bg-white ${t.highlight ? "shadow-xl ring-2 ring-[#7c3aed]/20" : "shadow-sm"}`}
              style={{ borderColor: t.border }}
            >
              {t.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-primary shadow-md shadow-blue-500/30 whitespace-nowrap">
                  Most resellers reach this
                </div>
              )}

              <div className="mb-5">
                <span
                  className="inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-3"
                  style={{ background: t.profitBg, color: t.profitColor }}
                >
                  {t.label}
                </span>
                <div className="text-gray-400 text-xs mb-1">{t.clients} clients</div>
                <div className="text-gray-700 text-sm font-medium mb-0.5">{t.revenue} <span className="text-gray-400 font-normal">/ month revenue</span></div>
              </div>

              {/* Profit highlight */}
              <div
                className="rounded-xl px-4 py-3 mb-5"
                style={{ background: t.profitBg }}
              >
                <div className="text-xs font-medium mb-0.5" style={{ color: t.profitColor }}>Your monthly profit</div>
                <div className="text-2xl font-bold" style={{ color: t.profitColor }}>
                  {t.profit}
                  <span className="text-sm font-normal ml-1">/ mo</span>
                </div>
              </div>

              <p className="text-gray-400 text-xs leading-relaxed">{t.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom note + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-white rounded-2xl border border-blue-100 px-7 py-5 shadow-sm"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1a6fff]/8 flex items-center justify-center shrink-0">
              <TrendingUp size={18} className="text-[#1a6fff]" />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              <strong className="text-gray-900">Carlos went from 50 to 400+ clients in 4 months</strong>
              {" "}— now earns over $4,000/month. We coached him every step of the way.
            </p>
          </div>
          <a
            href="https://wa.me/19545948062?text=Hi, I want to start as an IPTV reseller"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-primary text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/25 whitespace-nowrap shrink-0"
          >
            <MessageCircle size={15} />
            Start for Free
          </a>
        </motion.div>
      </div>
    </section>
  );
}
