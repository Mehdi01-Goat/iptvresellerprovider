"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, ShieldCheck, Zap, RefreshCw } from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "892K+", label: "Active Subscriptions" },
  { value: "1,600+", label: "Resellers Worldwide" },
  { value: "4.9 / 5", label: "Average Rating" },
  { value: "13,873+", label: "Panels Created" },
];

const trust = [
  { Icon: ShieldCheck, text: "Free 24-hr trial on all servers" },
  { Icon: Zap,         text: "Instant credit delivery" },
  { Icon: RefreshCw,   text: "100% refundable credits" },
];

export default function HeroSection() {
  return (
    <section className="hero-bg relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-36 pb-0">

      {/* Grid */}
      <div className="hero-grid absolute inset-0 opacity-20 pointer-events-none" />

      {/* Orbs */}
      <div
        className="pointer-events-none absolute -top-48 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-20"
        style={{ background: "radial-gradient(ellipse, rgba(26,111,255,0.75) 0%, transparent 65%)" }}
      />
      <div
        className="pointer-events-none absolute top-1/2 -left-56 w-[500px] h-[500px] rounded-full opacity-8"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.5) 0%, transparent 65%)" }}
      />
      <div
        className="pointer-events-none absolute top-1/2 -right-56 w-[500px] h-[500px] rounded-full opacity-8"
        style={{ background: "radial-gradient(circle, rgba(0,180,216,0.5) 0%, transparent 65%)" }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-4xl mx-auto">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
          </span>
          <span className="text-white/55 text-xs font-medium tracking-wide">
            <strong className="text-white font-semibold">1,600+ resellers</strong> already earning with us · 40+ countries
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="text-5xl sm:text-6xl lg:text-[74px] font-bold tracking-tight leading-[1.05] text-white mb-6"
        >
          Earn $500–$5,000/mo
          <br />
          <span className="text-gradient">as an IPTV Reseller</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.65, delay: 0.16 }}
          className="text-white/45 text-xl leading-relaxed max-w-xl mb-10"
        >
          Get wholesale panel access to Trex, Dino, Mega &amp; Strong — plus expert coaching on how to find clients, set prices, and scale fast.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.65, delay: 0.22 }}
          className="flex flex-col sm:flex-row gap-3 mb-14"
        >
          <a
            href="https://wa.me/19545948062"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-primary text-white font-bold text-[15px] hover:opacity-90 transition-opacity shadow-2xl shadow-blue-600/35"
          >
            <MessageCircle size={17} />
            Get Started — Free Trial
          </a>
          <Link
            href="/#servers"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/12 text-white/65 font-semibold text-[15px] hover:border-white/30 hover:text-white transition-all bg-white/4 backdrop-blur-sm"
          >
            Explore Servers
            <ArrowRight size={15} />
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.65, delay: 0.3 }}
          className="w-full grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center py-5 px-4 rounded-2xl border border-white/7 bg-white/4 backdrop-blur-sm"
            >
              <span className="text-white font-bold text-2xl sm:text-3xl leading-none mb-1.5 tabular-nums">
                {s.value}
              </span>
              <span className="text-white/35 text-xs font-medium">{s.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Trust row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.65, delay: 0.38 }}
          className="flex flex-wrap items-center justify-center gap-6 text-white/35 text-xs pb-12"
        >
          {trust.map(({ Icon, text }) => (
            <span key={text} className="flex items-center gap-1.5">
              <Icon size={13} className="text-[#1a6fff] shrink-0" />
              {text}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
