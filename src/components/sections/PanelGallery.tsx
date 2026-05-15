"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

interface Props {
  images: string[];
  serverName: string;
}

export default function PanelGallery({ images, serverName }: Props) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const go = useCallback(
    (next: number) => {
      setDirection(next > current ? 1 : -1);
      setCurrent(next);
    },
    [current]
  );

  const prev = () => go(current === 0 ? images.length - 1 : current - 1);
  const next = () => go(current === images.length - 1 ? 0 : current + 1);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0 }),
  };

  return (
    <section className="bg-white py-20 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="section-label mb-4">Panel Screenshots</p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                See the {serverName} Panel in Action
              </h2>
              <p className="text-gray-500 text-sm">
                Real screenshots from the reseller control panel. Click to enlarge.
              </p>
            </div>
            <span className="text-gray-400 text-sm font-medium shrink-0">
              {current + 1} / {images.length}
            </span>
          </div>
        </motion.div>

        {/* Main carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-lg bg-gray-50 mb-4 group"
        >
          {/* Slide */}
          <div
            className="relative aspect-[16/9] w-full max-h-[420px] overflow-hidden cursor-zoom-in"
            onClick={() => setLightbox(true)}
          >
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={images[current]}
                  alt={`${serverName} panel screenshot ${current + 1}`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  priority={current === 0}
                />
              </motion.div>
            </AnimatePresence>

            {/* Zoom hint */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10">
              <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                <ZoomIn size={18} className="text-[#1a6fff]" />
              </div>
            </div>
          </div>

          {/* Prev / Next arrows */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center text-gray-700 hover:text-[#1a6fff] transition-all opacity-0 group-hover:opacity-100"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center text-gray-700 hover:text-[#1a6fff] transition-all opacity-0 group-hover:opacity-100"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>
        </motion.div>

        {/* Thumbnail strip */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => go(i)}
              className={`relative shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                i === current
                  ? "border-[#1a6fff] shadow-md shadow-blue-200"
                  : "border-transparent opacity-50 hover:opacity-80"
              }`}
            >
              <Image
                src={src}
                alt={`${serverName} thumbnail ${i + 1}`}
                fill
                className="object-cover object-top"
                sizes="80px"
              />
            </button>
          ))}
        </div>

        {/* Dot indicators (mobile) */}
        <div className="flex justify-center gap-1.5 mt-4 sm:hidden">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`rounded-full transition-all ${
                i === current ? "w-5 h-1.5 bg-[#1a6fff]" : "w-1.5 h-1.5 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(false)}
          >
            {/* Close */}
            <button
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
              onClick={() => setLightbox(false)}
            >
              <X size={20} />
            </button>

            {/* Prev/Next in lightbox */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); prev(); }}
            >
              <ChevronLeft size={22} />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); next(); }}
            >
              <ChevronRight size={22} />
            </button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl w-full max-h-[88vh] rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={images[current]}
                    alt={`${serverName} panel screenshot ${current + 1}`}
                    width={1280}
                    height={720}
                    className="w-full h-auto"
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Counter */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/60 text-sm">
              {current + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
