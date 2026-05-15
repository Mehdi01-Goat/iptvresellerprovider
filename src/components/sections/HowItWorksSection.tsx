"use client";

import { motion } from "framer-motion";
import { FlaskConical, CreditCard, Users, MessageCircle } from "lucide-react";

const steps = [
  {
    num: "01",
    Icon: FlaskConical,
    title: "Test Any Server Free",
    when: "Day 1",
    desc: "Pick from Trex, Dino, Mega, or Strong. Get a free 24-hour trial and test quality, channels, and stability — zero cost, zero commitment.",
    color: "#1a6fff",
    bg: "rgba(26,111,255,0.08)",
    border: "rgba(26,111,255,0.2)",
  },
  {
    num: "02",
    Icon: CreditCard,
    title: "Get Your Panel & Credits",
    when: "Day 2",
    desc: "Choose a wholesale credit package. Credits never expire and are fully refundable. Your reseller panel is set up instantly — ready to create client accounts.",
    color: "#7c3aed",
    bg: "rgba(124,58,237,0.08)",
    border: "rgba(124,58,237,0.2)",
  },
  {
    num: "03",
    Icon: Users,
    title: "Get Clients & Start Earning",
    when: "Week 1",
    desc: "We coach you on exactly how to find your first clients, set competitive prices, and keep them renewing. Most resellers close their first client within the first week.",
    color: "#16a34a",
    bg: "rgba(22,163,74,0.08)",
    border: "rgba(22,163,74,0.2)",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4 mx-auto">How It Works</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 max-w-xl mx-auto leading-tight">
            From Zero to First Paying Client{" "}
            <span className="text-gradient">in Under a Week</span>
          </h2>
          <p className="text-gray-500 text-sm mt-4 max-w-md mx-auto">
            No experience needed. No upfront risk. We guide you through every step.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Connector line */}
          <div className="absolute top-[52px] left-[calc(16.66%+32px)] right-[calc(16.66%+32px)] h-px bg-gradient-to-r from-[#1a6fff]/30 via-[#7c3aed]/30 to-[#16a34a]/30 hidden md:block" />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.12 }}
              className="relative flex flex-col items-center text-center"
            >
              {/* Icon + when badge */}
              <div className="relative mb-6 z-10">
                <div
                  className="w-[104px] h-[104px] rounded-2xl flex items-center justify-center"
                  style={{ background: step.bg, border: `1.5px solid ${step.border}` }}
                >
                  <step.Icon size={34} style={{ color: step.color }} />
                </div>
                {/* When badge */}
                <div
                  className="absolute -top-2.5 -right-2.5 px-2.5 py-1 rounded-full text-[10px] font-bold text-white shadow-md"
                  style={{ background: step.color }}
                >
                  {step.when}
                </div>
                {/* Step number watermark */}
                <span
                  className="absolute -bottom-3 -left-3 text-5xl font-bold select-none opacity-8 leading-none"
                  style={{ color: step.color }}
                >
                  {step.num}
                </span>
              </div>

              <h3 className="font-bold text-gray-900 text-lg mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://wa.me/19545948062?text=Hi, I want to start as an IPTV reseller — can I get a free trial?"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-primary text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/20"
          >
            <MessageCircle size={16} />
            Start Free — Message Us Now
          </a>
          <p className="text-gray-400 text-xs">No credit card · No commitment · Cancel anytime</p>
        </motion.div>
      </div>
    </section>
  );
}
