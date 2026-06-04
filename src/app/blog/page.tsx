import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import { posts } from "@/lib/blog";
import { ArrowRight, Clock, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "IPTV Reseller Blog — Tips, Guides & Strategies",
  description:
    "Expert guides on starting and growing an IPTV reseller business. Learn how to choose a server, find clients, and earn $500–$5,000/month.",
  alternates: { canonical: "https://iptvresellerprovider.com/blog" },
  openGraph: {
    title: "IPTV Reseller Blog — Tips, Guides & Strategies",
    description:
      "Expert guides on starting and growing an IPTV reseller business. Learn how to choose a server, find clients, and earn $500–$5,000/month.",
    url: "https://iptvresellerprovider.com/blog",
  },
};

const categoryColors: Record<string, string> = {
  "Getting Started": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Income & Growth": "bg-green-500/10 text-green-400 border-green-500/20",
  "Server Comparison": "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "Client Acquisition": "bg-orange-500/10 text-orange-400 border-orange-500/20",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#080f1e] pt-28 pb-24">
        {/* Hero */}
        <div className="max-w-6xl mx-auto px-6 mb-14">
          <span className="badge-blue px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 inline-block">
            Blog
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            IPTV Reseller{" "}
            <span className="text-gradient">Guides & Tips</span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl">
            Practical advice on starting, growing, and scaling your IPTV reseller business.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-6">
          {/* Featured post */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group block bg-white/[0.03] border border-white/8 rounded-2xl overflow-hidden mb-8 hover:border-[#1a6fff]/40 transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-56 lg:h-auto overflow-hidden">
                <Image
                  src={featured.coverImage}
                  alt={featured.coverAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#080f1e]/60 lg:block hidden" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080f1e]/60 to-transparent lg:hidden" />
              </div>
              {/* Content */}
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${
                      categoryColors[featured.category] ?? "bg-white/10 text-white/60 border-white/10"
                    }`}
                  >
                    {featured.category}
                  </span>
                  <span className="text-white/30 text-xs bg-white/5 px-2 py-0.5 rounded-full border border-white/8">Featured</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-[#4d8fff] transition-colors leading-snug">
                  {featured.title}
                </h2>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  {featured.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-white/35 text-sm">
                    <span>{formatDate(featured.date)}</span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={13} />
                      {featured.readTime}
                    </span>
                  </div>
                  <span className="flex items-center gap-1.5 text-[#4d8fff] text-sm font-semibold group-hover:gap-2.5 transition-all">
                    Read article <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Post grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white/[0.03] border border-white/8 rounded-2xl overflow-hidden hover:border-[#1a6fff]/40 transition-all duration-300"
              >
                {/* Thumbnail */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.coverAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080f1e]/80 via-[#080f1e]/20 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-semibold border ${
                        categoryColors[post.category] ?? "bg-white/10 text-white/60 border-white/10"
                      }`}
                    >
                      <Tag size={9} className="inline mr-1" />
                      {post.category}
                    </span>
                  </div>
                </div>
                {/* Content */}
                <div className="p-5">
                  <h2 className="text-base font-bold text-white mb-2 group-hover:text-[#4d8fff] transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-white/45 text-sm leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-white/30 text-xs">
                      <span>{formatDate(post.date)}</span>
                      <span className="flex items-center gap-1">
                        <Clock size={11} />
                        {post.readTime}
                      </span>
                    </div>
                    <span className="flex items-center gap-1 text-[#4d8fff] text-xs font-semibold group-hover:gap-1.5 transition-all">
                      Read <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
