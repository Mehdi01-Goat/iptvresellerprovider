"use client";

import { motion } from "framer-motion";

const methods = [
  {
    name: "PayPal",
    desc: "Instant & secure",
    color: "#003087",
    bg: "rgba(0,48,135,0.06)",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.26-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.477z"/>
      </svg>
    ),
  },
  {
    name: "Visa / Mastercard",
    desc: "All major cards",
    color: "#1a1f71",
    bg: "rgba(26,31,113,0.06)",
    svg: (
      <svg viewBox="0 0 48 48" width="28" height="28" fill="none">
        <rect x="2" y="12" width="44" height="24" rx="4" fill="#1a1f71"/>
        <path d="M18 29l2.5-10h2L20 29h-2zm8.5-10c-.6 0-1.4.2-1.4.9 0 1.4 3.5 1 3.5 3.8 0 2.3-2 3.4-4 3.4-1 0-2-.2-2.7-.6l.5-1.7c.7.4 1.5.7 2.3.7.7 0 1.5-.3 1.5-1 0-1.5-3.5-1.1-3.5-3.8 0-2.1 1.8-3.2 3.7-3.2 1 0 1.8.2 2.4.5l-.5 1.6c-.5-.3-1.2-.6-1.8-.6zm7 0h-2.3l-3.2 10h2l.6-1.8h2.8l.3 1.8h2L33.5 19zm-2.2 6.7l1.2-3.8.7 3.8h-1.9z" fill="white"/>
        <circle cx="34" cy="24" r="5" fill="#EB001B" opacity=".8"/>
        <circle cx="39" cy="24" r="5" fill="#F79E1B" opacity=".8"/>
      </svg>
    ),
  },
  {
    name: "USDT",
    desc: "TRC20 / ERC20",
    color: "#26a17b",
    bg: "rgba(38,161,123,0.07)",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 7.342H6.438v1.8h4.237v1.637c-2.437.108-4.237.582-4.237 1.155s1.8 1.046 4.237 1.154v3.57h2.65v-3.57c2.438-.108 4.237-.582 4.237-1.154s-1.799-1.047-4.237-1.155V9.142h4.237v-1.8zm-5.562 4.14c-2.588 0-4.688-.38-4.688-.848s2.1-.849 4.688-.849 4.688.38 4.688.849-2.1.848-4.688.848z"/>
      </svg>
    ),
  },
  {
    name: "Bitcoin (BTC)",
    desc: "Cryptocurrency",
    color: "#f7931a",
    bg: "rgba(247,147,26,0.07)",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.7-.167-1.052-.247l.526-2.127-1.314-.33-.54 2.165c-.285-.067-.565-.132-.84-.2l-1.815-.45-.35 1.407s.975.225.955.236c.535.136.63.486.615.766l-1.477 5.92c-.075.166-.24.406-.614.314.015.02-.96-.24-.96-.24l-.66 1.51 1.71.426.93.242-.54 2.19 1.32.327.54-2.165c.36.1.705.19 1.05.273l-.51 2.154 1.32.33.545-2.19c2.24.427 3.93.257 4.64-1.774.57-1.637-.03-2.58-1.217-3.196.854-.193 1.5-.76 1.68-1.93h.01zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.23 3.757.67 3.33 2.37zm.41-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.64c.744.18 3.137.524 2.75 2.084v.006z"/>
      </svg>
    ),
  },
  {
    name: "Ethereum (ETH)",
    desc: "Cryptocurrency",
    color: "#627eea",
    bg: "rgba(98,126,234,0.07)",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z"/>
      </svg>
    ),
  },
  {
    name: "Bank Transfer",
    desc: "Wire / Money transfer",
    color: "#374151",
    bg: "rgba(55,65,81,0.06)",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M2 7l10-5 10 5v2H2V7zm1 3h2v7H3v-7zm4 0h2v7H7v-7zm4 0h2v7h-2v-7zm4 0h2v7h-2v-7zm4 0h2v7h-2v-7zM2 19h20v2H2v-2z"/>
      </svg>
    ),
  },
];

export default function PaymentMethodsSection() {
  return (
    <section className="bg-[#f7f9ff] pt-10 pb-16 border-y border-blue-50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="section-label mb-3 mx-auto">Payment Methods</p>
          <h3 className="text-xl font-bold text-gray-900">
            Pay Your Way — Multiple Options Accepted
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {methods.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              className="light-card p-4 flex flex-col items-center gap-2.5 text-center"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{ background: m.bg, color: m.color }}
              >
                {m.svg}
              </div>
              <div>
                <div className="text-gray-900 font-semibold text-xs leading-tight">{m.name}</div>
                <div className="text-gray-400 text-[10px] mt-0.5">{m.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
