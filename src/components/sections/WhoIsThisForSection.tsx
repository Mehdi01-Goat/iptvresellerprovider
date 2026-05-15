"use client";

import { motion } from "framer-motion";
import { MessageCircle, Briefcase, Wifi, TrendingUp } from "lucide-react";

const personas = [
  {
    Icon: Briefcase,
    color: "#1a6fff",
    bg: "rgba(26,111,255,0.08)",
    border: "rgba(26,111,255,0.15)",
    title: "You want extra income",
    sub: "Side hustle → Full-time",
    desc: "You're working a 9–5 and want to build income on the side. IPTV reselling runs mostly on WhatsApp — no office, no stock, no commute. Set it up evenings and weekends, scale at your own pace.",
    tags: ["Flexible hours", "Low startup cost", "Recurring monthly income"],
  },
  {
    Icon: Wifi,
    color: "#7c3aed",
    bg: "rgba(124,58,237,0.08)",
    border: "rgba(124,58,237,0.15)",
    title: "You already use IPTV",
    sub: "User → Reseller",
    desc: "You already pay for IPTV and love it. You know how it works, you know what people want, and your friends ask you about it. That's your first client base — people who trust your recommendation.",
    tags: ["You know the product", "Easy to explain", "Friends & family first clients"],
  },
  {
    Icon: TrendingUp,
    color: "#16a34a",
    bg: "rgba(22,163,74,0.08)",
    border: "rgba(22,163,74,0.15)",
    title: "You want to build a real business",
    sub: "Entrepreneur mindset",
    desc: "You're thinking bigger — a branded service, a team, hundreds of clients. We've helped resellers go from 0 to 500+ clients with custom branding, websites, and scaling strategy. This can become a full business.",
    tags: ["Scalable to 500+ clients", "Brand your own service", "Business coaching included"],
  },
];

export default function WhoIsThisForSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="section-label mb-4 mx-auto">Who Is This For?</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
            This Works Whether You&apos;re{" "}
            <span className="text-gradient">Just Starting or Scaling</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Our resellers come from all backgrounds. The common thread: they wanted more income and took the first step.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {personas.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="rounded-2xl border p-7 bg-white hover:shadow-lg transition-shadow"
              style={{ borderColor: p.border }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: p.bg }}
              >
                <p.Icon size={22} style={{ color: p.color }} />
              </div>

              {/* Label */}
              <div
                className="inline-block text-[10px] font-bold px-2.5 py-1 rounded-full mb-3"
                style={{ background: p.bg, color: p.color }}
              >
                {p.sub}
              </div>

              <h3 className="font-bold text-gray-900 text-lg mb-3">{p.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{p.desc}</p>

              {/* Tags */}
              <div className="flex flex-col gap-2">
                {p.tags.map((tag) => (
                  <div key={tag} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: p.color }} />
                    <span className="text-gray-500 text-xs">{tag}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-center"
        >
          <p className="text-gray-500 text-sm mb-5">
            Not sure if this is right for you? Message us — we&apos;ll be honest with you.
          </p>
          <a
            href="https://wa.me/19545948062?text=Hi, I want to know if IPTV reselling is right for me"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-primary text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/20"
          >
            <MessageCircle size={16} />
            Talk to Us — Free, No Pressure
          </a>
        </motion.div>
      </div>
    </section>
  );
}
