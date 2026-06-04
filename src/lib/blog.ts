export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "highlight"; text: string };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: Block[];
};

export const posts: Post[] = [
  {
    slug: "how-to-start-iptv-reseller-business",
    title: "How to Start an IPTV Reseller Business in 2025: Step-by-Step Guide",
    excerpt:
      "Everything you need to know to launch your own IPTV reseller business from scratch — choosing a server, buying credits, finding clients, and earning $500–$5,000/month.",
    date: "2026-05-10",
    readTime: "8 min read",
    category: "Getting Started",
    content: [
      {
        type: "p",
        text: "Starting an IPTV reseller business is one of the most accessible ways to earn a recurring online income today. You don't need technical skills, a physical storefront, or a large upfront investment. What you need is a reliable IPTV server, a reseller panel, and the willingness to find clients. This guide walks you through exactly how to do it.",
      },
      {
        type: "h2",
        text: "What Is an IPTV Reseller Business?",
      },
      {
        type: "p",
        text: "An IPTV reseller buys access to live TV channels, movies, and series in bulk from a wholesale provider — then resells subscriptions to individual users at a markup. Your profit is the difference between what you pay wholesale and what you charge your clients. Most resellers mark up 4–6x, which means buying at $1.40/connection and selling at $5–$8/month.",
      },
      {
        type: "p",
        text: "The business model works because IPTV services are in massive demand globally. People want to watch sports, international channels, and movies without paying $100+/month for cable. You solve that problem affordably.",
      },
      {
        type: "h2",
        text: "Step 1 — Choose Your IPTV Server",
      },
      {
        type: "p",
        text: "Your server is the foundation of your business. It determines content quality, stream stability, and how well your clients' experience. There are several top IPTV servers available for resellers:",
      },
      {
        type: "ul",
        items: [
          "Trex IPTV — Ultra-premium with 49,817 live channels, 184K+ movies. Best for clients who want the largest library.",
          "Dino IPTV — Reliable mid-range server with 20,469 channels and 98K+ movies. Great value for new resellers.",
          "Strong IPTV — High-performance server comparable to Trex. 46,976 channels and rock-solid uptime.",
          "Mega IPTV — Budget-friendly option with strong VOD. Perfect for price-sensitive markets.",
          "Magnum IPTV — Premium tier with excellent channel quality and consistent performance.",
        ],
      },
      {
        type: "p",
        text: "If you're just starting, we recommend Dino IPTV because the entry price is lower ($170 for 120 credits) and it delivers excellent quality that your clients will love. You can always add more servers later.",
      },
      {
        type: "h2",
        text: "Step 2 — Buy Your First Credits Package",
      },
      {
        type: "p",
        text: "IPTV reseller panels work on a credits system. One credit typically creates one connection for one month. So if you buy 120 credits and each client needs 2 connections (for two devices), you can service 60 clients for one month — or 30 clients for two months.",
      },
      {
        type: "p",
        text: "Start small. Buy the entry-level package, get your first 20–30 clients, then reinvest your earnings to scale up. Credits never expire, so there's no pressure to sell them by a deadline.",
      },
      {
        type: "highlight",
        text: "Pro tip: Always request a free 24-hour trial before buying credits. Every serious IPTV provider offers this. Test the server yourself on the apps your clients will use — Tivimate, IPTV Smarters, Xtream Codes.",
      },
      {
        type: "h2",
        text: "Step 3 — Set Up Your Reseller Panel",
      },
      {
        type: "p",
        text: "Once you purchase credits, you get access to a reseller dashboard. From this panel you can create subscriptions for clients, set their expiry date, manage renewals, and monitor active connections. Most panels are web-based and take under 10 minutes to learn.",
      },
      {
        type: "p",
        text: "Creating a subscription for a new client takes about 5 minutes: enter their name, assign credits, generate their M3U link or Xtream Codes credentials, and send it to them. That's the entire setup process.",
      },
      {
        type: "h2",
        text: "Step 4 — Find Your First Clients",
      },
      {
        type: "p",
        text: "This is where most beginners get stuck. The good news: IPTV buyers are everywhere. You just need to know where to look and how to position yourself.",
      },
      {
        type: "ol",
        items: [
          "Facebook Groups — Search for expat communities, sports fan groups, or cord-cutting groups in your area or target country. These are filled with people actively looking for IPTV.",
          "WhatsApp Communities — Join local community groups and naturally introduce your service when relevant conversations come up.",
          "Telegram Channels — Create your own channel to post offers, or join existing IPTV-related channels.",
          "Word of Mouth — Your first 10 clients will come from people you know. Give them a great price, excellent service, and ask them to refer friends.",
          "Online Ads — Once you have cash flow, simple Facebook or Instagram ads targeting sports fans can scale quickly.",
        ],
      },
      {
        type: "h2",
        text: "How Much Can You Earn?",
      },
      {
        type: "p",
        text: "Your earnings scale directly with your client base. Here's a realistic breakdown:",
      },
      {
        type: "ul",
        items: [
          "50 clients → $300–$550/month profit",
          "100–200 clients → $1,000–$2,200/month profit",
          "300–500 clients → $3,000–$5,500/month profit",
        ],
      },
      {
        type: "p",
        text: "Most new resellers reach 50 clients within their first 2–3 months. Many go full-time after hitting 150–200 clients. The key is consistent client acquisition and excellent retention.",
      },
      {
        type: "h2",
        text: "Ready to Start?",
      },
      {
        type: "p",
        text: "Starting an IPTV reseller business requires minimal investment, no technical background, and can be done entirely part-time until you're ready to scale. The biggest factor is choosing a reliable server and getting your first clients — everything else follows from there.",
      },
      {
        type: "p",
        text: "Request a free trial on any of our servers, test the quality yourself, and we'll coach you through the rest. Our resellers get free ongoing support on WhatsApp — client acquisition scripts, pricing guidance, and technical help whenever you need it.",
      },
    ],
  },
  {
    slug: "iptv-reseller-earnings",
    title: "How Much Can You Earn as an IPTV Reseller? (Real Numbers)",
    excerpt:
      "Detailed breakdown of IPTV reseller earnings at every stage — from your first 10 clients to 500+. Real numbers, real margins, real timelines.",
    date: "2026-05-12",
    readTime: "6 min read",
    category: "Income & Growth",
    content: [
      {
        type: "p",
        text: "One of the first questions anyone asks before starting an IPTV reseller business is: how much can I actually earn? The honest answer is — it depends entirely on your client base. But the math is straightforward, and the income potential is real. Here's a complete breakdown with actual numbers.",
      },
      {
        type: "h2",
        text: "How the Profit Math Works",
      },
      {
        type: "p",
        text: "As an IPTV reseller, your profit comes from the difference between what you pay wholesale and what you charge clients. Most resellers follow this model:",
      },
      {
        type: "ul",
        items: [
          "Wholesale cost (Dino/Mega): ~$1.42 per connection per month",
          "Wholesale cost (Trex/Strong): ~$2.42 per connection per month",
          "Retail price you charge clients: $5–$10/month for 1 connection",
          "Typical client setup: 2 connections = 1 subscription",
        ],
      },
      {
        type: "p",
        text: "Example: You charge a client $8/month for a Dino IPTV subscription with 2 connections. Your cost is 2 × $1.42 = $2.84. Your profit on that one client is $5.16/month. Scale that to 100 clients and you're making $516/month from Dino alone.",
      },
      {
        type: "h2",
        text: "Earnings by Client Tier",
      },
      {
        type: "p",
        text: "Here's a realistic earnings breakdown at different client levels, assuming a Dino IPTV setup with an average retail price of $7/month per client:",
      },
      {
        type: "ul",
        items: [
          "20 clients → ~$85–$120/month profit",
          "50 clients → $300–$550/month profit",
          "100 clients → $600–$1,000/month profit",
          "200 clients → $1,200–$2,200/month profit",
          "500 clients → $3,000–$5,500/month profit",
        ],
      },
      {
        type: "p",
        text: "With Trex IPTV (higher wholesale cost, but you can charge more), your margins per client are slightly narrower but many resellers charge $10–$15/month for Trex, keeping margins healthy.",
      },
      {
        type: "h2",
        text: "Part-Time vs Full-Time Income",
      },
      {
        type: "p",
        text: "The vast majority of resellers start part-time. The business is almost entirely passive once clients are set up — renewals are managed from your panel, and client support is minimal when you're on a high-quality server.",
      },
      {
        type: "ul",
        items: [
          "Part-time (20–50 clients): 2–5 hours/week → $100–$550/month",
          "Active reseller (100–200 clients): 5–10 hours/week → $600–$2,200/month",
          "Full-time (300–500+ clients): 20–30 hours/week → $3,000–$5,500/month",
        ],
      },
      {
        type: "h2",
        text: "How Long Does It Take to Get 50 Clients?",
      },
      {
        type: "p",
        text: "This varies by how aggressively you market, but based on the experience of resellers in our network:",
      },
      {
        type: "ul",
        items: [
          "First 10 clients: Usually 1–3 weeks (friends, family, word of mouth)",
          "10 → 50 clients: Typically 1–3 months (Facebook groups, Telegram)",
          "50 → 200 clients: 3–9 months (referrals + consistent outreach)",
          "200+ clients: 6–18 months (referral loops, repeat customers, ads)",
        ],
      },
      {
        type: "h2",
        text: "What Affects Your Earnings?",
      },
      {
        type: "p",
        text: "Several factors determine how fast you grow and how much you earn:",
      },
      {
        type: "ul",
        items: [
          "Server quality — Happy clients renew. Clients on unreliable servers churn. This is the #1 factor.",
          "Your retail pricing — Pricing too low kills margins. Pricing too high slows acquisition. $6–$10/month is the sweet spot in most markets.",
          "Your market — Expat communities, sports fans, and cord-cutters are the best target audiences.",
          "Retention rate — A reseller with 100 clients and 90% retention earns more than one with 200 clients and 60% retention.",
          "Upselling — Offering multi-device or annual plans increases revenue per client.",
        ],
      },
      {
        type: "h2",
        text: "The Bottom Line",
      },
      {
        type: "p",
        text: "IPTV reselling is a genuine income opportunity, not a get-rich-quick scheme. The math is transparent, the investment is low, and the recurring nature of subscriptions means your income compounds as you grow. The resellers in our network who treat it like a real business — consistent outreach, excellent service, smart pricing — consistently hit $1,000+/month within their first year.",
      },
    ],
  },
  {
    slug: "trex-vs-dino-iptv-server",
    title: "Trex vs Dino IPTV: Which Server Should You Start With?",
    excerpt:
      "Comparing Trex and Dino IPTV servers for resellers — content library, pricing, stability, and which one makes more sense for your market.",
    date: "2026-05-14",
    readTime: "5 min read",
    category: "Server Comparison",
    content: [
      {
        type: "p",
        text: "When starting as an IPTV reseller, one of the first decisions you'll face is which server to use. Trex and Dino are two of the most popular options — but they serve different markets and have different pricing. Here's an honest comparison to help you choose.",
      },
      {
        type: "h2",
        text: "Quick Overview",
      },
      {
        type: "ul",
        items: [
          "Trex IPTV: Ultra-premium, 49,817 live channels, 184,384 movies, 40,716 series. Entry price: $290 for 120 credits.",
          "Dino IPTV: Reliable mid-range, 20,469 live channels, 98,990 movies, 23,141 series. Entry price: $170 for 120 credits.",
        ],
      },
      {
        type: "h2",
        text: "Content Library",
      },
      {
        type: "p",
        text: "Trex carries more than double the live channels of Dino — nearly 50,000 channels compared to around 20,000. For clients who want international channels, sports packages from every region, or very niche content, Trex is unmatched.",
      },
      {
        type: "p",
        text: "Dino's library is still very large — 98,990 movies and 23,141 series is more than most clients will ever watch. If your target market is mainstream (English, French, Arabic, Spanish content), Dino covers everything they need.",
      },
      {
        type: "h2",
        text: "Pricing for Resellers",
      },
      {
        type: "p",
        text: "The pricing difference is significant. Trex costs $290 for 120 credits (~$2.42/credit) while Dino is $170 for 120 credits (~$1.42/credit). That's $1/credit difference — which adds up fast at scale.",
      },
      {
        type: "p",
        text: "At 200 clients (400 connections/month), Trex costs you $968/month in credits. Dino costs you $568/month. That's $400/month in extra margin if your clients don't specifically need Trex's premium content.",
      },
      {
        type: "h2",
        text: "What You Can Charge Clients",
      },
      {
        type: "p",
        text: "Because Trex is premium, you can justify a higher retail price. Most Trex resellers charge $10–$15/month. Dino resellers typically charge $6–$10/month. The profit margins are actually similar — the difference is your client's expectations and willingness to pay.",
      },
      {
        type: "h2",
        text: "Stability & Uptime",
      },
      {
        type: "p",
        text: "Both servers are highly stable and used by thousands of resellers worldwide. Trex has a slight edge during major live events (World Cup, Champions League, boxing matches) due to its infrastructure capacity. Dino handles standard daily viewing without issues.",
      },
      {
        type: "h2",
        text: "Who Should Choose Trex?",
      },
      {
        type: "ul",
        items: [
          "Resellers targeting sports-obsessed clients who want every channel",
          "Markets where clients expect premium and will pay $12–$15/month",
          "Resellers who want to differentiate with the best product available",
          "Clients who have tried other IPTV services and want an upgrade",
        ],
      },
      {
        type: "h2",
        text: "Who Should Choose Dino?",
      },
      {
        type: "ul",
        items: [
          "New resellers starting with a smaller budget ($170 entry vs $290)",
          "Markets where price sensitivity is high and $6–$8/month is the sweet spot",
          "Resellers focused on volume (more clients at lower margin per client)",
          "Expat communities where mainstream international channels are the priority",
        ],
      },
      {
        type: "highlight",
        text: "Our recommendation: Start with Dino to lower your risk and test your market. Once you have 30+ clients and understand what they want, add Trex for clients willing to pay more. Many successful resellers run both servers simultaneously.",
      },
      {
        type: "h2",
        text: "Can You Use Both?",
      },
      {
        type: "p",
        text: "Yes, and this is actually what many of our top resellers do. They use Dino as their standard tier and Trex as their premium tier. Clients self-select based on their budget. This two-tier approach maximizes both volume and margin.",
      },
      {
        type: "p",
        text: "Both servers come with free 24-hour trials. Test them on the same device with the same apps before deciding — or test both and see which one performs better in your specific region.",
      },
    ],
  },
  {
    slug: "how-to-get-iptv-clients",
    title: "How to Get Your First 50 IPTV Clients (Without Paid Ads)",
    excerpt:
      "A practical, proven playbook for finding IPTV clients from scratch — Facebook groups, WhatsApp, Telegram, and word-of-mouth strategies that actually work.",
    date: "2026-05-16",
    readTime: "7 min read",
    category: "Client Acquisition",
    content: [
      {
        type: "p",
        text: "Getting your first IPTV clients is the hardest part of building a reseller business. Once you have 20–30 happy customers, referrals kick in and growth becomes easier. But that first stretch — from zero to 50 — requires deliberate effort. Here's exactly how to do it without spending a dollar on ads.",
      },
      {
        type: "h2",
        text: "The Mindset Shift First",
      },
      {
        type: "p",
        text: "Most beginners think they need to 'sell' IPTV. In reality, you just need to find people who are already looking for it. IPTV buyers exist in large numbers in specific online communities. Your job is to show up where they are, be helpful, and offer a better option than whatever they're currently using.",
      },
      {
        type: "h2",
        text: "Strategy 1 — Facebook Groups",
      },
      {
        type: "p",
        text: "Facebook groups are the single best source of IPTV clients. Here's the playbook:",
      },
      {
        type: "ol",
        items: [
          "Search for relevant groups: '[Your city] Expats', '[Country] Community', 'Cord Cutting [Country]', '[Sport] Fans [Country]', 'Somali/Moroccan/French diaspora [city]'",
          "Join 10–15 relevant groups and spend a week being genuinely helpful — answer questions, share tips, don't mention IPTV yet",
          "When someone posts asking about TV options, cheap cable alternatives, or how to watch [sport] — that's your moment",
          "Reply with value first, then mention you offer IPTV. Offer a free 24-hour trial",
          "Move the conversation to private messages or WhatsApp",
        ],
      },
      {
        type: "p",
        text: "The key is to not spam. One genuine helpful reply in 10 groups beats 100 copy-pasted ads in one group. Facebook restricts blatant promotion, but helpful community members can naturally mention their services.",
      },
      {
        type: "h2",
        text: "Strategy 2 — WhatsApp Communities",
      },
      {
        type: "p",
        text: "WhatsApp is where IPTV sales actually close. Use it in two ways:",
      },
      {
        type: "ul",
        items: [
          "Join local community groups (neighborhood groups, school parent groups, sports fan groups) and mention your service naturally when relevant",
          "Create your own WhatsApp broadcast list — once you have 10+ clients, add them all and send monthly promotions, renewal reminders, and new content announcements",
          "Create a WhatsApp status updating your 'now available' content, like new sports seasons or movie releases — this keeps IPTV top of mind for your contacts",
        ],
      },
      {
        type: "h2",
        text: "Strategy 3 — Telegram Channels",
      },
      {
        type: "p",
        text: "Telegram is where tech-savvy IPTV buyers gather. The approach:",
      },
      {
        type: "ol",
        items: [
          "Create your own Telegram channel: '@YourNameIPTV'. Post free trial offers, pricing, and what's included.",
          "Join IPTV-related groups and search groups. When people ask for recommendations, share your channel.",
          "Offer exclusive deals to Telegram subscribers (e.g., first month at a discount) to build your list.",
        ],
      },
      {
        type: "h2",
        text: "Strategy 4 — Your Existing Network",
      },
      {
        type: "p",
        text: "Don't underestimate your personal network. Your first 10 clients are probably within reach right now. Think about:",
      },
      {
        type: "ul",
        items: [
          "Friends and family who currently pay for cable or streaming services",
          "Coworkers who watch sports",
          "People in your cultural/diaspora community",
          "Anyone who has mentioned hating their cable bill",
        ],
      },
      {
        type: "p",
        text: "Approach them casually: 'Hey, I just started offering IPTV — you get 10,000+ channels, all sports, and movies for $7/month. Want a free day trial to check it out?' The free trial removes all friction and converts at a very high rate.",
      },
      {
        type: "h2",
        text: "The Free Trial Is Your Best Sales Tool",
      },
      {
        type: "highlight",
        text: "Give every single prospect a free 24-hour trial before asking for money. This one habit will double your conversion rate. Once someone watches a full Champions League match or their favorite shows in HD on your IPTV, the sale is essentially done.",
      },
      {
        type: "h2",
        text: "What to Say When Following Up",
      },
      {
        type: "p",
        text: "After sending a trial, follow up after 20–24 hours: 'Hey, did you get a chance to test it? How did it look?' If they say it was good — close: 'Great! First month is $X. I can set it up right now.' If they had issues — troubleshoot and extend the trial. Don't abandon a hot lead over a technical hiccup.",
      },
      {
        type: "h2",
        text: "Referrals: The Growth Engine After 30 Clients",
      },
      {
        type: "p",
        text: "Once you have 30 happy clients, set up a referral program. Offer one free week or a discount for every client they refer who signs up. A single enthusiastic client can bring 3–5 referrals. At 50 clients with a referral program running, your growth becomes partly automatic.",
      },
      {
        type: "p",
        text: "Resellers who hit 50 clients in 60 days are almost always those who combined Facebook group outreach with a strong personal network push in the first month. Don't overthink the strategy — start today with the people and groups already around you.",
      },
    ],
  },
  {
    slug: "iptv-reseller-panel-explained",
    title: "IPTV Reseller Panel Explained: Credits, Connections & How It All Works",
    excerpt:
      "New to IPTV reselling? This guide explains everything about reseller panels — what credits are, how connections work, how to create subscriptions, and how to manage your clients.",
    date: "2026-05-19",
    readTime: "6 min read",
    category: "Getting Started",
    content: [
      {
        type: "p",
        text: "If you're new to IPTV reselling, the technical side can seem overwhelming at first. Panels, credits, M3U links, Xtream Codes, connections — there's a lot of jargon. This guide breaks it all down in plain language so you can get started confidently.",
      },
      {
        type: "h2",
        text: "What Is an IPTV Reseller Panel?",
      },
      {
        type: "p",
        text: "An IPTV reseller panel is a web-based dashboard that gives you control over your client subscriptions. Through your panel, you can:",
      },
      {
        type: "ul",
        items: [
          "Create new subscriptions for clients",
          "Set how long each subscription lasts (1 month, 3 months, 12 months, etc.)",
          "Assign the number of connections (devices) per subscription",
          "View which subscriptions are active, expiring soon, or expired",
          "Renew client subscriptions when they expire",
          "Monitor live usage — how many connections are active right now",
        ],
      },
      {
        type: "p",
        text: "Most panels are web-based and accessible from any browser. The interface is straightforward — if you can use a basic website, you can manage a reseller panel.",
      },
      {
        type: "h2",
        text: "What Are IPTV Credits?",
      },
      {
        type: "p",
        text: "Credits are the currency of your reseller panel. One credit = one connection for one month. When you create a subscription for a client, the panel deducts credits from your balance based on the number of connections and duration.",
      },
      {
        type: "p",
        text: "Example: You create a 1-month subscription with 2 connections. The panel deducts 2 credits. You create a 3-month subscription with 2 connections. The panel deducts 6 credits (2 connections × 3 months).",
      },
      {
        type: "highlight",
        text: "Important: IPTV credits never expire. If you buy 120 credits and only use 40 in the first month, the remaining 80 stay in your account indefinitely. This means there's no pressure to sell quickly.",
      },
      {
        type: "h2",
        text: "What Are Connections?",
      },
      {
        type: "p",
        text: "A connection is one simultaneous stream. If a client has 2 connections, they can watch IPTV on 2 devices at the same time — for example, one TV and one phone. If they try to open a third stream, the panel blocks it.",
      },
      {
        type: "p",
        text: "Most standard client subscriptions use 2 connections. Families or clients with multiple TVs may want 3–4. You can set whatever number makes sense and price accordingly.",
      },
      {
        type: "h2",
        text: "What Is an M3U Link / Xtream Codes?",
      },
      {
        type: "p",
        text: "When you create a subscription, the panel generates credentials for your client to use in their IPTV app. There are two main formats:",
      },
      {
        type: "ul",
        items: [
          "M3U URL: A single link that the client pastes into their IPTV app. Easy and universal — works with almost every IPTV app.",
          "Xtream Codes: A server URL, username, and password. More flexible and works with apps like Tivimate, IPTV Smarters, and Perfect Player.",
        ],
      },
      {
        type: "p",
        text: "Both formats work with the same apps. Most clients prefer Xtream Codes because popular apps like Tivimate have better features when using this format. You'll provide whichever format your client's app supports.",
      },
      {
        type: "h2",
        text: "How to Set Up a Client Subscription (Step by Step)",
      },
      {
        type: "ol",
        items: [
          "Log in to your reseller panel",
          "Go to 'Create Subscription' or 'Add User'",
          "Enter a username (usually the client's name or nickname)",
          "Choose duration (1 month, 3 months, etc.)",
          "Set number of connections (usually 2)",
          "Click create — the panel deducts credits and generates credentials",
          "Send the M3U link or Xtream Codes to your client via WhatsApp",
          "Help them add it to their IPTV app (takes 2 minutes)",
        ],
      },
      {
        type: "h2",
        text: "Managing Renewals",
      },
      {
        type: "p",
        text: "Renewals are the backbone of your recurring income. Your panel shows you all subscriptions with their expiry dates. To renew, you simply extend the subscription — this deducts credits again and adds time to the client's account.",
      },
      {
        type: "p",
        text: "The smart approach: send a WhatsApp message 5–7 days before expiry reminding the client to renew. Most renew automatically. Over time, this becomes a predictable monthly revenue stream — you know roughly how many credits you'll need each month based on your active client base.",
      },
      {
        type: "h2",
        text: "Common Questions",
      },
      {
        type: "ul",
        items: [
          "Can I offer different subscription lengths? Yes. You control the duration — 1 month, 3 months, 6 months, or yearly.",
          "What if a client has buffering issues? Usually a speed test or app restart fixes it. Our support team guides you on troubleshooting.",
          "Can I change a client's connection count? Yes, from your panel at any time.",
          "What if a client's subscription runs out of connections mid-month? The excess stream is blocked. You can add more connections if the client wants.",
          "Do I need technical skills? No. If you can follow these steps, you can run a reseller panel.",
        ],
      },
      {
        type: "p",
        text: "The reseller panel is genuinely simple to use day-to-day. The learning curve is about 30 minutes for a complete beginner. After your first 5 client setups, it becomes second nature.",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
