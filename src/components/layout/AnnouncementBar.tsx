"use client";

import { X } from "lucide-react";
import { useState } from "react";

interface Props {
  onHide: () => void;
}

export default function AnnouncementBar({ onHide }: Props) {
  return (
    <div className="relative bg-gradient-primary text-white text-sm py-2 px-4 text-center font-medium">
      <span className="opacity-90">
        🎯 Start earning $500–$5,000/month as an IPTV reseller &nbsp;·&nbsp; Free 24-hr trial on all servers &nbsp;·&nbsp; Expert coaching included
      </span>
      <button
        onClick={onHide}
        className="absolute right-3 top-1/2 -translate-y-1/2 opacity-70 hover:opacity-100 transition-opacity"
        aria-label="Close"
      >
        <X size={14} />
      </button>
    </div>
  );
}
