"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight, MessageCircle } from "lucide-react";
import { servers, statusColors } from "@/lib/servers";

const serverTitles: Record<string, string> = {
  trex:   "Trex IPTV Server — Ultra Premium IPTV Performance",
  dino:   "Dino IPTV Server — Great IPTV Performance for Resellers",
  strong: "Strong IPTV Server — High Performance Streaming",
  mega:   "Mega IPTV Server — Trusted & Proven IPTV Provider",
  magnum: "Magnum IPTV Server — Premium Stability & Performance",
};

const serverStats: Record<string, string> = {
  trex:   "49,817 Live Channels · 184,384 Movies · 40,716 Series",
  dino:   "20,469 Live Channels · 98,990 Movies · 23,141 Series",
  strong: "46,976 Live Channels · 149,046 Movies · 38,610 Series",
  mega:   "26,883 Live Channels · 12,847 Movies · 51,697 Series",
  magnum: "20,469 Live Channels · 98,990 Movies · 23,141 Series",
};

export default function ServersSection() {
  return (
    <section id="servers" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <p className="section-label mb-4 mx-auto">Our Servers</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Premium IPTV Servers —{" "}
            <span className="text-gradient">All in One Place</span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed">
            Compare every server side by side. Free 24-hour trial on all — test quality and stability before spending a single credit.
          </p>
        </motion.div>

        {/* Server rows */}
        <div className="flex flex-col divide-y divide-gray-100">
          {servers.map((server, i) => {
            const colors = statusColors[server.statusColor];
            const isEven = i % 2 === 0;

            return (
              <motion.div
                key={server.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: 0.05 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 ${
                  !isEven ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* ── Image side ── */}
                <div className="relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                    <Image
                      src={server.panelImage}
                      alt={`${server.name} panel`}
                      width={620}
                      height={400}
                      className="w-full object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      preload={i < 2}
                    />
                  </div>

                  {/* Floating secondary image */}
                  <div
                    className="absolute -bottom-5 shadow-xl rounded-xl overflow-hidden border border-gray-100"
                    style={isEven ? { right: "-20px" } : { left: "-20px" }}
                  >
                    <Image
                      src={server.panelFloat}
                      alt={`${server.name} detail`}
                      width={200}
                      height={125}
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* ── Content side ── */}
                <div className="pl-0 lg:pl-4">
                  {/* Badge + label */}
                  <div className="flex items-center gap-3 mb-5">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-bold"
                      style={{ background: colors.bg, color: colors.text, border: `1px solid ${colors.border}` }}
                    >
                      {server.status}
                    </span>
                    {server.highlight && (
                      <span className="text-[#1a6fff] text-xs font-semibold">· Most Popular</span>
                    )}
                    <span className="text-gray-300 text-xs hidden sm:inline">
                      {server.name} Reseller Panel — Overview
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    {serverTitles[server.id]}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {server.description}
                  </p>

                  {/* Features */}
                  <ul className="grid grid-cols-2 gap-x-6 gap-y-3 mb-4">
                    {server.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle2 size={15} className="text-[#1a6fff] shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Stats line */}
                  <div className="flex items-center gap-2 mb-7 py-3 px-4 bg-[#f7f9ff] rounded-xl border border-blue-50">
                    <span className="text-[#1a6fff] text-xs font-semibold">Channel & VOD Library</span>
                    <span className="text-gray-300">·</span>
                    <span className="text-gray-500 text-xs">{serverStats[server.id]}</span>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={server.href}
                      className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-primary text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-md shadow-blue-500/20"
                    >
                      Get Details &amp; Pricing
                      <ArrowRight size={14} />
                    </Link>
                    <a
                      href={`https://wa.me/19545948062?text=Hi, I'd like a free trial for ${server.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-3 rounded-xl border-2 border-gray-200 text-gray-700 text-sm font-semibold hover:border-[#1a6fff] hover:text-[#1a6fff] transition-colors"
                    >
                      <MessageCircle size={14} />
                      Get {server.name.split(" ")[0]} Trial
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
