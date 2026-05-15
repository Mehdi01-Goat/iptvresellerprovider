"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const benefits = [
  "How to find your first 10 clients — fast",
  "Pricing strategies that maximize your profit margin",
  "How to handle renewals & support without losing sleep",
  "Building a brand clients trust and refer others to",
  "Scaling from 50 to 500 clients without burning out",
  "Which server to use for which type of client",
];

const results = [
  { value: "0 → 200", label: "clients in 2 months", sub: "Karim B. — Morocco", color: "#1a6fff" },
  { value: "50 → 400+", label: "clients in 4 months", sub: "Carlos V. — Brazil", color: "#7c3aed" },
  { value: "$4,000+", label: "monthly profit", sub: "avg established reseller", color: "#16a34a" },
  { value: "2×", label: "avg first-month growth", sub: "across 1,600+ resellers", color: "#0891b2" },
];

export default function CoachingSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="section-label mb-4">Free Business Coaching</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5 leading-tight">
              We Teach You Exactly{" "}
              <span className="text-gradient">How to Get Clients</span>
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed text-sm">
              The panel is easy. The hard part is getting clients and keeping them.
              That&apos;s where we come in — every reseller gets real, personal guidance from day one. No generic tutorials, no upsells. Just actual help.
            </p>

            <ul className="space-y-3 mb-9">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-gray-600 text-sm">
                  <CheckCircle2 size={15} className="text-[#1a6fff] mt-0.5 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-primary text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/25"
            >
              Get Your Free Consultation
              <ArrowRight size={15} />
            </Link>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col gap-4"
          >
            {/* Result cards */}
            <div className="grid grid-cols-2 gap-3">
              {results.map(({ value, label, sub, color }) => (
                <div key={label} className="light-card p-5">
                  <div className="text-2xl font-bold mb-0.5" style={{ color }}>{value}</div>
                  <div className="text-gray-700 text-xs font-medium">{label}</div>
                  <div className="text-gray-400 text-[11px] mt-1">{sub}</div>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="light-card p-6 border-l-4 border-[#1a6fff]">
              <div className="flex items-center gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#f59e0b" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                &ldquo;I had zero experience. They told me exactly what to post, where to find clients, and how to price. Two months in I had 200 paying clients. This coaching alone is worth more than the panel.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#1a6fff]/10 flex items-center justify-center text-[#1a6fff] text-sm font-bold shrink-0">K</div>
                <div>
                  <div className="text-gray-900 text-sm font-semibold">Karim B.</div>
                  <div className="text-gray-400 text-xs">IPTV Reseller — Morocco · 200+ clients</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
