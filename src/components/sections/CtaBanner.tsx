"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MessageCircle, ArrowRight, Clock } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="relative py-28 overflow-hidden bg-[#080f1e]">
      <div className="hero-grid absolute inset-0 opacity-30 pointer-events-none" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, rgba(26,111,255,0.5) 0%, transparent 65%)" }}
      />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#1a6fff]/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#1a6fff]/20 to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Urgency badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm mb-7">
            <Clock size={12} className="text-yellow-400" />
            <span className="text-white/70 text-xs font-medium">Free trial available now — slots are limited</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-[1.1]">
            Your Reseller Business
            <br />
            <span className="text-gradient">Starts With One Message</span>
          </h2>

          <p className="text-white/50 text-lg mb-4 max-w-xl mx-auto leading-relaxed">
            Message us now and get a free 24-hour trial on any server. Most of our resellers close their first client within the first week.
          </p>

          {/* Social proof line */}
          <p className="text-white/30 text-sm mb-10">
            Join <strong className="text-white/60">1,600+ resellers</strong> already earning with our panels — some making $4,000+/month.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/19545948062?text=Hi, I want to start as an IPTV reseller — can I get a free trial?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-primary text-white font-semibold text-[15px] hover:opacity-90 transition-opacity shadow-xl shadow-blue-600/30"
            >
              <MessageCircle size={18} />
              Get My Free Trial Now
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white/75 font-semibold text-[15px] hover:border-white/40 hover:text-white transition-all"
            >
              Send a Message
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-8 text-white/30 text-xs">
            {["Free trial · no card needed", "Credits never expire", "Fully refundable", "Reply in under 1 hour"].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-white/30" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
