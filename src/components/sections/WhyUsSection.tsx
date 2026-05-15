"use client";

import { motion } from "framer-motion";
import { DollarSign, Server, BookOpen, Headphones } from "lucide-react";

const features = [
  {
    Icon: DollarSign,
    color: "#1a6fff",
    bg: "rgba(26,111,255,0.1)",
    title: "Direct Wholesale Prices",
    desc: "No middlemen, no inflated margins. We source directly so you keep the maximum profit on every subscription you sell.",
  },
  {
    Icon: Server,
    color: "#7c3aed",
    bg: "rgba(124,58,237,0.1)",
    title: "All Top Servers, One Provider",
    desc: "Dino, Trex, Mega, Strong & more. Compare servers, request free trials, and find the perfect match for your market.",
  },
  {
    Icon: BookOpen,
    color: "#0891b2",
    bg: "rgba(8,145,178,0.1)",
    title: "Complete Server Guidance",
    desc: "Full documentation on channels, VOD, regions, EPG, and quality per server — so you always make confident, informed choices.",
  },
  {
    Icon: Headphones,
    color: "#16a34a",
    bg: "rgba(22,163,74,0.1)",
    title: "Support at Every Stage",
    desc: "Whether you're starting out or scaling to 500 clients — real help, fast responses, and advice you can actually use.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14"
        >
          <div>
            <p className="section-label mb-4">Why Choose Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 max-w-lg leading-tight">
              Everything You Need to Run a{" "}
              <span className="text-gradient">Profitable IPTV Business</span>
            </h2>
          </div>
          <p className="text-gray-500 text-sm max-w-xs leading-relaxed lg:text-right">
            We go beyond just providing panel access — we become the partner behind your growth.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="light-card p-7 flex gap-5"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: f.bg }}
              >
                <f.Icon size={22} style={{ color: f.color }} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-[15px]">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom trust row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-8 py-6 border-t border-gray-100"
        >
          {[
            ["1,600+", "Active Resellers"],
            ["4.9 / 5", "Average Rating"],
            ["< 1 hr", "Response Time"],
            ["100%", "Refundable Credits"],
          ].map(([val, label]) => (
            <div key={label} className="text-center">
              <div className="text-xl font-bold text-[#1a6fff]">{val}</div>
              <div className="text-gray-400 text-xs mt-0.5">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
