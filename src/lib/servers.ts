export type Server = {
  id: string;
  name: string;
  status: string;
  statusColor: "gold" | "blue" | "green" | "purple" | "orange";
  channels: string;
  movies: string;
  series: string;
  description: string;
  features: string[];
  href: string;
  trialHref: string;
  panelImage: string;
  panelFloat: string;
  highlight?: boolean;
};

export const servers: Server[] = [
  {
    id: "trex",
    name: "Trex IPTV",
    status: "Ultra Premium",
    statusColor: "gold",
    channels: "49,817",
    movies: "184,384",
    series: "40,716",
    description:
      "Ultra-premium and highly stable IPTV solution built for resellers. Engineered for exceptional uptime, fast zapping, and smooth streaming even during peak hours.",
    features: [
      "M3U, MAG, Enigma2 & Protocol",
      "Free 24-hour trials",
      "Anti-Freeze + Anti-Buffer",
      "Full EPG support",
      "Sub-Reseller panel creation",
      "IP management & Custom DNS",
    ],
    href: "/trex",
    trialHref: "/contact?server=trex&trial=1",
    panelImage: "/images/panel-trex-main.png",
    panelFloat: "/images/panel-trex-float.png",
    highlight: true,
  },
  {
    id: "dino",
    name: "Dino IPTV",
    status: "Great",
    statusColor: "blue",
    channels: "20,469",
    movies: "98,990",
    series: "23,141",
    description:
      "Reliable and well-rounded server ideal for resellers looking for a strong content library at excellent value. Perfect for starting your reseller business.",
    features: [
      "M3U, MAG, Enigma2 & Protocol",
      "Free 24-hour trials",
      "Anti-Freeze System",
      "Full EPG support",
      "Sub-Reseller panel creation",
      "IP management & Custom DNS",
    ],
    href: "/dino",
    trialHref: "/contact?server=dino&trial=1",
    panelImage: "/images/panel-dino-main.png",
    panelFloat: "/images/panel-dino-float.png",
  },
  {
    id: "strong",
    name: "Strong IPTV",
    status: "High Performance",
    statusColor: "purple",
    channels: "46,976",
    movies: "149,046",
    series: "38,610",
    description:
      "Built for maximum stability and fast performance with smooth HD/4K playback. Handles heavy loads during sports events, PPV fights, and busy weekends.",
    features: [
      "M3U, MAG, Enigma2 & Protocol",
      "Free 24-hour trials",
      "4K Ultra HD streams",
      "Full EPG support",
      "Sub-Reseller panel creation",
      "IP management & Custom DNS",
    ],
    href: "/strong",
    trialHref: "/contact?server=strong&trial=1",
    panelImage: "/images/panel-strong-main.png",
    panelFloat: "/images/panel-strong-float.png",
  },
  {
    id: "mega",
    name: "Mega IPTV",
    status: "Very Good",
    statusColor: "green",
    channels: "26,883",
    movies: "12,847",
    series: "51,697",
    description:
      "One of the oldest, most established, and most trusted IPTV servers in the industry. Proven track record with a massive series library and loyal user base.",
    features: [
      "M3U, MAG, Enigma2 & Protocol",
      "Free 24-hour trials",
      "Massive series library",
      "Full EPG support",
      "Sub-Reseller panel creation",
      "IP management & Custom DNS",
    ],
    href: "/mega",
    trialHref: "/contact?server=mega&trial=1",
    panelImage: "/images/panel-mega-main.png",
    panelFloat: "/images/panel-mega-float.png",
  },
  {
    id: "magnum",
    name: "Magnum IPTV",
    status: "Premium",
    statusColor: "orange",
    channels: "20,469",
    movies: "98,990",
    series: "23,141",
    description:
      "A premium-tier server backed by superior infrastructure for higher stability and faster stream load times. Same comprehensive content library with enhanced performance for demanding resellers.",
    features: [
      "M3U, MAG, Enigma2 & Protocol",
      "Free 24-hour trials",
      "Enhanced stability layer",
      "Full EPG support",
      "Sub-Reseller panel creation",
      "IP management & Custom DNS",
    ],
    href: "/magnum",
    trialHref: "/contact?server=magnum&trial=1",
    panelImage: "/images/panel-magnum-main.png",
    panelFloat: "/images/panel-magnum-float.png",
  },
];

export const statusColors: Record<string, { bg: string; text: string; border: string }> = {
  gold: { bg: "rgba(245,158,11,0.12)", text: "#d97706", border: "rgba(245,158,11,0.35)" },
  blue: { bg: "rgba(26,111,255,0.10)", text: "#1a6fff", border: "rgba(26,111,255,0.30)" },
  purple: { bg: "rgba(139,92,246,0.10)", text: "#7c3aed", border: "rgba(139,92,246,0.30)" },
  green: { bg: "rgba(22,163,74,0.10)", text: "#16a34a", border: "rgba(22,163,74,0.30)" },
  orange: { bg: "rgba(234,88,12,0.10)", text: "#ea580c", border: "rgba(234,88,12,0.30)" },
};
