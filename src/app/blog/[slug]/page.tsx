import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import { posts, getPost, type Block } from "@/lib/blog";
import { ArrowLeft, Clock, MessageCircle, Tag } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://iptvresellerprovider.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://iptvresellerprovider.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function renderBlock(block: Block, index: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2 key={index} className="text-2xl font-bold text-white mt-10 mb-4">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={index} className="text-xl font-semibold text-white mt-8 mb-3">
          {block.text}
        </h3>
      );
    case "p":
      return (
        <p key={index} className="text-white/65 leading-relaxed mb-4">
          {block.text}
        </p>
      );
    case "ul":
      return (
        <ul key={index} className="space-y-2 mb-6 pl-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-white/65 leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#1a6fff] shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={index} className="space-y-2 mb-6 pl-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-white/65 leading-relaxed">
              <span className="mt-0.5 text-[#1a6fff] font-bold text-sm shrink-0 w-5">{i + 1}.</span>
              {item}
            </li>
          ))}
        </ol>
      );
    case "highlight":
      return (
        <div
          key={index}
          className="my-6 border-l-4 border-[#1a6fff] bg-[#1a6fff]/8 rounded-r-xl px-5 py-4 text-white/80 text-sm leading-relaxed"
        >
          {block.text}
        </div>
      );
    default:
      return null;
  }
}

const categoryColors: Record<string, string> = {
  "Getting Started": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Income & Growth": "bg-green-500/10 text-green-400 border-green-500/20",
  "Server Comparison": "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "Client Acquisition": "bg-orange-500/10 text-orange-400 border-orange-500/20",
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "IPTV Reseller Provider",
      url: "https://iptvresellerprovider.com",
    },
    publisher: {
      "@type": "Organization",
      name: "IPTV Reseller Provider",
      url: "https://iptvresellerprovider.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://iptvresellerprovider.com/blog/${post.slug}`,
    },
  };

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main className="min-h-screen bg-[#080f1e] pt-28 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          {/* Back */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 text-sm mb-10 transition-colors"
          >
            <ArrowLeft size={14} />
            All articles
          </Link>

          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span
                className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${
                  categoryColors[post.category] ?? "bg-white/10 text-white/60 border-white/10"
                }`}
              >
                <Tag size={10} className="inline mr-1" />
                {post.category}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-4">
              {post.title}
            </h1>
            <p className="text-white/50 text-lg leading-relaxed mb-6">{post.excerpt}</p>
            <div className="flex items-center gap-4 text-white/35 text-sm border-t border-white/8 pt-5">
              <span>{formatDate(post.date)}</span>
              <span className="w-px h-4 bg-white/15" />
              <span className="flex items-center gap-1.5">
                <Clock size={13} />
                {post.readTime}
              </span>
            </div>
          </div>

          {/* Content */}
          <article className="prose-invert max-w-none">
            {post.content.map((block, i) => renderBlock(block, i))}
          </article>

          {/* CTA */}
          <div className="mt-14 bg-gradient-to-br from-[#1a6fff]/15 to-[#0a3fa0]/10 border border-[#1a6fff]/25 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-2">
              Ready to Start Your IPTV Reseller Business?
            </h3>
            <p className="text-white/55 text-sm mb-6">
              Get a free 24-hour trial on any server and free coaching to help you land your first clients.
            </p>
            <a
              href="https://wa.me/19545948062?text=Hi, I read your blog and want to start as an IPTV reseller. Can I get a free trial?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-primary text-white font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={16} />
              Get Free Trial on WhatsApp
            </a>
          </div>

          {/* Related posts */}
          {related.length > 0 && (
            <div className="mt-14">
              <h3 className="text-lg font-bold text-white mb-5">More Articles</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="group block bg-white/[0.03] border border-white/8 rounded-xl p-5 hover:border-[#1a6fff]/40 transition-all"
                  >
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-semibold border mb-2 inline-block ${
                        categoryColors[r.category] ?? "bg-white/10 text-white/60 border-white/10"
                      }`}
                    >
                      {r.category}
                    </span>
                    <p className="text-white/80 text-sm font-semibold group-hover:text-[#4d8fff] transition-colors leading-snug">
                      {r.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
