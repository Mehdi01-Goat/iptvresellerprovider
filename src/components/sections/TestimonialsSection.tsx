"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Carlos V.",
    location: "Brazil",
    rating: 5,
    result: "50 → 400+ clients",
    text: "A real partner, not just a supplier. They gave me marketing strategies I never would have found on my own. Went from 50 to 400+ clients in 4 months — now making over $4,000/month.",
  },
  {
    name: "Karim B.",
    location: "Morocco",
    rating: 5,
    result: "0 → 200 clients",
    text: "Started with zero IPTV experience. They coached me on everything — finding clients, pricing, support. 200 clients in two months. The coaching alone is worth more than the panel.",
  },
  {
    name: "David S.",
    location: "UK",
    rating: 5,
    result: "Revenue doubled",
    text: "My profit increased massively thanks to their pricing and upselling strategies. They taught me things I wasn't even thinking about. Real experts who actually deliver results.",
  },
  {
    name: "Marco T.",
    location: "Italy",
    rating: 5,
    result: "Sales doubled in month 1",
    text: "These guys helped me choose the right server and guided me step by step. My sales doubled in the first month. Absolutely worth it — and they're still helping me grow.",
  },
  {
    name: "Yassine A.",
    location: "Canada",
    rating: 5,
    result: "Full-time income",
    text: "This team actually cares about your success, not just selling you credits. They follow up, check in, and push you to improve. Now running this full time — best decision I made.",
  },
  {
    name: "Amara L.",
    location: "France",
    rating: 5,
    result: "No hidden fees ever",
    text: "Top servers, real wholesale prices, no middlemen. I tried 3 other providers before — nothing compares. Transparent, fast, and they actually pick up when you need help.",
  },
  {
    name: "Jake R.",
    location: "USA",
    rating: 5,
    result: "24/7 real support",
    text: "Amazing support — always available, always responsive. They helped me troubleshoot a client issue at midnight without hesitation. That kind of service is why I stay.",
  },
  {
    name: "Lena K.",
    location: "Germany",
    rating: 5,
    result: "Best server selection",
    text: "Best server selection I've found. Easy to test before committing — the free trials are a game changer. Trex quality is exceptional for my European clients.",
  },
  {
    name: "Sofia M.",
    location: "Spain",
    rating: 5,
    result: "Switched from 3 others",
    text: "Professional, transparent, and instant credit delivery. I've tried 3 other providers before this — nothing compares. Prices are lower and quality is higher. Done searching.",
  },
];

const AVATAR_COLORS = [
  { bg: "rgba(26,111,255,0.1)", text: "#1a6fff" },
  { bg: "rgba(124,58,237,0.1)", text: "#7c3aed" },
  { bg: "rgba(8,145,178,0.1)", text: "#0891b2" },
  { bg: "rgba(22,163,74,0.1)", text: "#16a34a" },
  { bg: "rgba(245,158,11,0.1)", text: "#d97706" },
];

function Stars() {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#f59e0b" stroke="none">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

function Card({ t, delay, i }: { t: typeof testimonials[0]; delay: number; i: number }) {
  const color = AVATAR_COLORS[i % AVATAR_COLORS.length];
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="light-card p-5 flex flex-col"
    >
      <div className="flex items-center justify-between mb-3">
        <Stars />
        <span
          className="text-[10px] font-bold px-2 py-0.5 rounded-full"
          style={{ background: color.bg, color: color.text }}
        >
          {t.result}
        </span>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">&ldquo;{t.text}&rdquo;</p>
      <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
          style={{ background: color.bg, color: color.text }}
        >
          {t.name[0]}
        </div>
        <div>
          <div className="text-gray-900 text-sm font-semibold">{t.name}</div>
          <div className="text-gray-400 text-xs">{t.location}</div>
        </div>
      </div>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  const col1 = testimonials.slice(0, 3);
  const col2 = testimonials.slice(3, 6);
  const col3 = testimonials.slice(6, 9);

  return (
    <section className="bg-[#f7f9ff] py-24 border-y border-blue-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
        >
          <div>
            <p className="section-label mb-4">Real Results</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 max-w-lg leading-tight">
              Resellers Who{" "}
              <span className="text-gradient">Built Real Income</span>
            </h2>
          </div>
          <div className="flex items-center gap-4 lg:pb-1">
            <div className="flex flex-col items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary shadow-lg shadow-blue-400/25">
              <span className="text-white font-bold text-xl leading-none">4.9</span>
              <span className="text-white/70 text-[10px] mt-0.5">/ 5.0</span>
            </div>
            <div>
              <div className="flex items-center gap-0.5 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="#f59e0b" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-500 text-xs">9 verified reviews</p>
              <p className="text-gray-400 text-xs">1,600+ active resellers</p>
            </div>
          </div>
        </motion.div>

        {/* Desktop 3-col */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-4">
          {[col1, col2, col3].map((col, ci) => (
            <div key={ci} className="flex flex-col gap-4">
              {col.map((t, i) => (
                <Card key={t.name} t={t} delay={(ci * 3 + i) * 0.06} i={ci * 3 + i} />
              ))}
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="lg:hidden flex flex-col gap-4">
          {testimonials.map((t, i) => (
            <Card key={t.name} t={t} delay={i * 0.05} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
