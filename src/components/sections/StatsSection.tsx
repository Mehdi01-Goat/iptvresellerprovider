"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, Activity, LayoutDashboard, ThumbsUp } from "lucide-react";

const stats = [
  { Icon: ThumbsUp,   value: 100,   suffix: "%",  label: "Client Satisfaction", sub: "4.9 / 5 avg rating" },
  { Icon: Activity,   value: 892,   suffix: "K+", label: "Active Subscriptions", sub: "Across all servers" },
  { Icon: LayoutDashboard, value: 13873, suffix: "+", label: "Panels Created",   sub: "And counting daily" },
  { Icon: Users,      value: 1600,  suffix: "+",  label: "Active Resellers",     sub: "In 40+ countries" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      setCount(Math.floor(current));
      if (current >= target) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="bg-[#050d1f] py-16 relative overflow-hidden">
      {/* Subtle top/bottom gradient lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#1a6fff]/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#1a6fff]/20 to-transparent" />

      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#050d1f] flex flex-col items-center text-center px-6 py-10 group"
            >
              <div className="w-11 h-11 rounded-xl bg-[#1a6fff]/10 border border-[#1a6fff]/20 flex items-center justify-center mb-5 group-hover:bg-[#1a6fff]/15 transition-colors">
                <s.Icon size={20} className="text-[#4d8fff]" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                <CountUp target={s.value} suffix={s.suffix} />
              </div>
              <div className="text-white/70 text-sm font-medium mb-1">{s.label}</div>
              <div className="text-white/30 text-xs">{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
