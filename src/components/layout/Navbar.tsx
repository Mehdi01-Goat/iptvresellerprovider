"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X, MessageCircle, ChevronDown } from "lucide-react";

const serverLinks = [
  { href: "/trex",   label: "Trex IPTV",   desc: "Ultra Premium · 49,817 ch" },
  { href: "/dino",   label: "Dino IPTV",   desc: "Great Value · 20,469 ch" },
  { href: "/strong", label: "Strong IPTV", desc: "High Performance · 46,976 ch" },
  { href: "/mega",   label: "Mega IPTV",   desc: "Trusted & Stable · 26,883 ch" },
  { href: "/magnum", label: "Magnum IPTV", desc: "Premium · 20,469 ch" },
];

const otherLinks = [
  { href: "/",              label: "Home" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/contact",       label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen]             = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [dropOpen, setDropOpen]     = useState(false);
  const [mobileServers, setMobileServers] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  const isHeroPage = pathname === "/";

  useEffect(() => {
    const threshold = window.innerHeight * 0.6;
    const onScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setDropOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const lightMode = !isHeroPage || scrolled;
  const isServerActive = serverLinks.some((s) => pathname === s.href);

  return (
    <header
      className={`transition-all duration-300 ${
        lightMode
          ? "bg-white border-b border-gray-100 shadow-sm"
          : "bg-[#080f1e]/40 backdrop-blur-md border-b border-white/8"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="IPTV Reseller Provider"
            width={150}
            height={42}
            className={`h-9 w-auto transition-all duration-300 ${!lightMode ? "brightness-0 invert" : ""}`}
            priority
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">

          {/* Servers dropdown */}
          <div ref={dropRef} className="relative">
            <button
              onClick={() => setDropOpen(!dropOpen)}
              className={`relative flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isServerActive
                  ? "text-[#1a6fff]"
                  : lightMode
                  ? "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  : "text-white/70 hover:text-white hover:bg-white/8"
              }`}
            >
              Servers
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${dropOpen ? "rotate-180" : ""}`}
              />
              {isServerActive && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-[#1a6fff]" />
              )}
            </button>

            {/* Dropdown panel */}
            {dropOpen && (
              <div className="absolute top-full left-0 mt-2 w-60 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50">
                {serverLinks.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setDropOpen(false)}
                    className={`flex flex-col px-4 py-3 hover:bg-blue-50 transition-colors ${
                      pathname === s.href ? "bg-blue-50" : ""
                    }`}
                  >
                    <span className={`text-sm font-semibold ${pathname === s.href ? "text-[#1a6fff]" : "text-gray-800"}`}>
                      {s.label}
                    </span>
                    <span className="text-xs text-gray-400 mt-0.5">{s.desc}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Other links */}
          {otherLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  active
                    ? "text-[#1a6fff]"
                    : lightMode
                    ? "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    : "text-white/70 hover:text-white hover:bg-white/8"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-[#1a6fff]" />
                )}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/19545948062"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-primary text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-md shadow-blue-500/20"
          >
            <MessageCircle size={15} />
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${
            lightMode ? "text-gray-600 hover:bg-gray-100" : "text-white/80 hover:bg-white/10"
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-1">

          {/* Servers expandable */}
          <button
            onClick={() => setMobileServers(!mobileServers)}
            className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:text-[#1a6fff] hover:bg-gray-50 transition-colors"
          >
            Servers
            <ChevronDown
              size={14}
              className={`transition-transform duration-200 ${mobileServers ? "rotate-180" : ""}`}
            />
          </button>

          {mobileServers && (
            <div className="ml-3 border-l-2 border-blue-100 pl-3 flex flex-col gap-1 mb-1">
              {serverLinks.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  onClick={() => { setOpen(false); setMobileServers(false); }}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    pathname === s.href
                      ? "text-[#1a6fff] bg-blue-50"
                      : "text-gray-600 hover:text-[#1a6fff] hover:bg-gray-50"
                  }`}
                >
                  {s.label}
                  <span className="block text-[11px] text-gray-400 font-normal">{s.desc}</span>
                </Link>
              ))}
            </div>
          )}

          {otherLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-[#1a6fff] bg-blue-50"
                  : "text-gray-700 hover:text-[#1a6fff] hover:bg-gray-50"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <a
            href="https://wa.me/19545948062"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-primary text-white text-sm font-semibold text-center hover:opacity-90 transition-opacity"
          >
            <MessageCircle size={15} />
            Get Started — Free Trial
          </a>
        </div>
      )}
    </header>
  );
}
