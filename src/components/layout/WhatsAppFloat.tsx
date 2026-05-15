"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/19545948062?text=Hi, I want to start as an IPTV reseller"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full shadow-2xl pl-4 pr-5 py-3"
      style={{
        background: "#25d366",
        boxShadow: "0 0 0 0 rgba(37,211,102,0.4), 0 8px 30px rgba(37,211,102,0.35)",
        animation: "whatsapp-ping 2.5s ease-in-out infinite",
      }}
    >
      <MessageCircle size={22} className="text-white shrink-0" fill="white" />
      <span className="text-white text-sm font-semibold leading-none">Chat Now</span>
      <style>{`
        @keyframes whatsapp-ping {
          0%, 100% { box-shadow: 0 0 0 0 rgba(37,211,102,0.4), 0 8px 30px rgba(37,211,102,0.35); }
          50% { box-shadow: 0 0 0 10px rgba(37,211,102,0), 0 8px 30px rgba(37,211,102,0.35); }
        }
      `}</style>
    </motion.a>
  );
}
