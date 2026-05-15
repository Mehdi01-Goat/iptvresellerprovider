"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { MessageCircle, Mail, Send, CheckCircle, Clock, Shield } from "lucide-react";

const serverOptions = ["Trex", "Dino", "Mega", "Strong", "Not Sure Yet"];

type FormState = { name: string; email: string; whatsapp: string; server: string; message: string };
const initial: FormState = { name: "", email: "", whatsapp: "", server: "", message: "" };

const inputCls = "field";

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(initial);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setSuccess(true);
      setForm(initial);
    } catch {
      setError("Something went wrong. Please try WhatsApp instead.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

          {/* ── Left info column (2/5) ─────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <p className="section-label mb-4">Contact</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Let&apos;s Build Your <span className="text-gradient">IPTV Business</span> Together
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Send a message and we&apos;ll respond within the hour. For the fastest reply, WhatsApp is always available 24/7.
            </p>

            {/* Contact cards */}
            <div className="flex flex-col gap-3 mb-8">
              <a
                href="https://wa.me/19545948062"
                target="_blank"
                rel="noopener noreferrer"
                className="light-card p-4 flex items-center gap-4 hover:border-green-300 group transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center shrink-0 group-hover:bg-green-100 transition-colors">
                  <MessageCircle size={20} className="text-green-600" />
                </div>
                <div>
                  <div className="text-gray-900 font-semibold text-sm">WhatsApp</div>
                  <div className="text-gray-400 text-xs">+1 (954) 594-8062 · Recommended</div>
                </div>
                <span className="ml-auto text-[10px] font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full shrink-0">
                  Instant
                </span>
              </a>

              <a
                href="mailto:contact@iptvresellerprovider.com"
                className="light-card p-4 flex items-center gap-4 hover:border-blue-200 group transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                  <Mail size={20} className="text-[#1a6fff]" />
                </div>
                <div>
                  <div className="text-gray-900 font-semibold text-sm">Email</div>
                  <div className="text-gray-400 text-xs">contact@iptvresellerprovider.com</div>
                </div>
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-col gap-2.5">
              {[
                { Icon: Clock, text: "Response in under 1 hour, 24/7" },
                { Icon: Shield, text: "Free trial — no credit card required" },
              ].map(({ Icon, text }) => (
                <div key={text} className="flex items-center gap-2.5 text-gray-500 text-xs">
                  <Icon size={13} className="text-[#1a6fff] shrink-0" />
                  {text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right form (3/5) ──────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-3"
          >
            {success ? (
              <div className="light-card p-10 text-center flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center">
                  <CheckCircle size={32} className="text-[#1a6fff]" />
                </div>
                <h3 className="text-gray-900 font-bold text-xl">Message Sent!</h3>
                <p className="text-gray-500 text-sm max-w-xs">
                  We&apos;ll reply within the hour. Check your WhatsApp for the fastest response.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="text-[#1a6fff] text-sm font-medium hover:underline"
                >
                  Send another message →
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="light-card p-7 flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-700 text-xs font-semibold mb-1.5 block">Full Name *</label>
                    <input name="name" required value={form.name} onChange={handle}
                      placeholder="Your name" className={inputCls} />
                  </div>
                  <div>
                    <label className="text-gray-700 text-xs font-semibold mb-1.5 block">Email *</label>
                    <input name="email" type="email" required value={form.email} onChange={handle}
                      placeholder="you@example.com" className={inputCls} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-700 text-xs font-semibold mb-1.5 block">WhatsApp Number</label>
                    <input name="whatsapp" value={form.whatsapp} onChange={handle}
                      placeholder="+1 234 567 8901" className={inputCls} />
                  </div>
                  <div>
                    <label className="text-gray-700 text-xs font-semibold mb-1.5 block">Interested Server</label>
                    <select name="server" value={form.server} onChange={handle} className={inputCls}>
                      <option value="">Select a server...</option>
                      {serverOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-gray-700 text-xs font-semibold mb-1.5 block">Message *</label>
                  <textarea
                    name="message" required value={form.message} onChange={handle}
                    placeholder="Tell us what you need — free trial, credits, coaching, or anything else..."
                    rows={5}
                    className={`${inputCls} resize-none`}
                  />
                </div>

                {error && (
                  <p className="text-red-500 text-xs bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-primary text-white font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-60 shadow-lg shadow-blue-500/20"
                >
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-center text-gray-400 text-xs">
                  By sending, you agree to be contacted about your IPTV reseller inquiry.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
