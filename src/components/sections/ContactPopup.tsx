"use client";

import { useState } from "react";
import { X, MessageCircle, Send, Mail } from "lucide-react";

interface ContactPopupProps {
  open: boolean;
  onClose: () => void;
  credits: number;
  serverName: string;
}

export default function ContactPopup({ open, onClose, credits, serverName }: ContactPopupProps) {
  if (!open) return null;

  const message = encodeURIComponent(
    `Hi! I'm interested in purchasing ${credits.toLocaleString()} credits for the ${serverName} server on iptvresellerprovider.com. Can you help me get started?`
  );

  const emailSubject = encodeURIComponent(`Reseller Order — ${credits.toLocaleString()} Credits (${serverName})`);
  const emailBody    = encodeURIComponent(
    `Hi,\n\nI'd like to order ${credits.toLocaleString()} credits for the ${serverName} server.\n\nPlease send me the payment details.\n\nThank you.`
  );

  const contacts = [
    {
      label:  "WhatsApp",
      icon:   MessageCircle,
      color:  "#25D366",
      bg:     "bg-[#25D366] hover:bg-[#1fbe5c]",
      href:   `https://wa.me/19545948062?text=${message}`,
    },
    {
      label:  "Telegram",
      icon:   Send,
      color:  "#229ED9",
      bg:     "bg-[#229ED9] hover:bg-[#1a8bbf]",
      href:   `https://t.me/iptvreseller?text=${message}`,
    },
    {
      label:  "Email",
      icon:   Mail,
      color:  "#1a6fff",
      bg:     "bg-[#1a6fff] hover:bg-[#1558d9]",
      href:   `mailto:contact@iptvresellerprovider.com?subject=${emailSubject}&body=${emailBody}`,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="mb-5">
          <h3 className="text-lg font-bold text-gray-900">
            Get {credits.toLocaleString()} Credits
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Choose how you&apos;d like to contact us. We respond within minutes.
          </p>
        </div>

        {/* Package reminder */}
        <div className="bg-blue-50 rounded-xl px-4 py-3 mb-5 text-sm text-blue-700 font-medium">
          📦 {serverName} · {credits.toLocaleString()} credits
        </div>

        {/* Contact buttons */}
        <div className="flex flex-col gap-3">
          {contacts.map(({ label, icon: Icon, bg, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2.5 w-full py-3 rounded-xl text-white font-semibold text-sm transition-colors ${bg}`}
            >
              <Icon size={18} />
              Contact via {label}
            </a>
          ))}
        </div>

        <p className="text-center text-[11px] text-gray-400 mt-4">
          Average response time: under 10 minutes
        </p>
      </div>
    </div>
  );
}
