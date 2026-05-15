"use client";

import { useState } from "react";
import AnnouncementBar from "./AnnouncementBar";
import Navbar from "./Navbar";

export default function SiteHeader() {
  const [barVisible, setBarVisible] = useState(true);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {barVisible && <AnnouncementBar onHide={() => setBarVisible(false)} />}
      <Navbar />
    </div>
  );
}
