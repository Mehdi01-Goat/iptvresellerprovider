"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Tv, Film, Clapperboard, CheckCircle2, MessageCircle, ArrowLeft, ArrowRight } from "lucide-react";
import { Server, statusColors } from "@/lib/servers";

export default function ServerHero({ server }: { server: Server }) {
  const colors = statusColors[server.statusColor];

  return (
    <section className="relative bg-[#080f1e] pt-28 pb-20 overflow-hidden">
      {/* Background */}
      <div className="hero-grid absolute inset-0 opacity-30 pointer-events-none" />
      <div
        className="pointer-events-none absolute top-0 right-0 w-[600px] h-[500px] rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, rgba(26,111,255,0.5) 0%, transparent 65%)" }}
      />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Back link */}
        <Link
          href="/#servers"
          className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 text-sm mb-10 transition-colors"
        >
          <ArrowLeft size={14} />
          Back to all servers
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span
              className="px-3 py-1 rounded-full text-xs font-semibold mb-5 inline-block"
              style={{ background: colors.bg, color: colors.text, border: `1px solid ${colors.border}` }}
            >
              {server.status}
            </span>

            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-[1.1]">
              {server.name}{" "}
              <span className="text-gradient">Reseller</span> Panel
            </h1>

            <p className="text-white/55 text-lg leading-relaxed mb-8">{server.description}</p>

            {/* Stats row */}
            <div className="flex gap-4 mb-8">
              {[
                { Icon: Tv, value: server.channels, label: "Channels" },
                { Icon: Film, value: server.movies, label: "Movies" },
                { Icon: Clapperboard, value: server.series, label: "Series" },
              ].map(({ Icon, value, label }) => (
                <div key={label} className="flex-1 bg-white/5 border border-white/8 rounded-xl px-3 py-3 text-center">
                  <div className="flex items-center justify-center gap-1.5 mb-1">
                    <Icon size={12} className="text-[#4d8fff]" />
                    <span className="text-white font-bold text-sm">{value}</span>
                  </div>
                  <div className="text-white/35 text-[10px] uppercase tracking-wide">{label}</div>
                </div>
              ))}
            </div>

            <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4 mb-8">
              {server.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-white/65">
                  <CheckCircle2 size={14} className="text-[#4d8fff] shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/19545948062"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-primary text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-blue-600/25"
              >
                <MessageCircle size={16} />
                Get Free Trial
              </a>
              <Link
                href={server.trialHref}
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white/75 font-semibold text-sm hover:border-white/40 hover:text-white transition-all"
              >
                Request via Form
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>

          {/* Right: Panel screenshot */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden panel-glow">
              <Image
                src={server.panelImage}
                alt={`${server.name} panel`}
                width={620}
                height={400}
                className="w-full object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080f1e]/40 to-transparent pointer-events-none" />

              {/* Float secondary image */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -bottom-5 -left-5 float-anim"
              >
                <Image
                  src={server.panelFloat}
                  alt={`${server.name} panel detail`}
                  width={200}
                  height={130}
                  className="rounded-xl shadow-2xl border border-white/10"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
