"use client";

import React, { useState, useEffect } from "react";
import {
  Code2,
  Layout,
  Mail,
  Phone,
  ArrowUpRight,
  Sun,
  Moon,
  Globe,
  Zap,
  Server,
  Palette,
  Search,
  MapPin,
  Calendar,
} from "lucide-react";

const GitHubIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24" height="24" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24" height="24" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const WhatsAppIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24" height="24" viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    style={style}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.553 4.103 1.522 5.827L.057 23.882a.5.5 0 0 0 .611.64l6.265-1.644A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.006-1.366l-.358-.213-3.722.977.993-3.62-.233-.372A9.818 9.818 1 1 1 12 21.818z" />
  </svg>
);

const COLORS = ["#E05454", "#C13383", "#792CA2", "#443199"];

const darkTheme = {
  mainBg: "#08060f",
  mainText: "text-slate-300",
  navBg: "rgba(8,6,15,0.8)",
  navBorder: "rgba(255,255,255,0.05)",
  navLinkClass: "text-slate-500 hover:text-white",
  navIconDivider: "rgba(255,255,255,0.08)",
  navIconClass: "text-slate-600 hover:text-white",
  heading: "text-white",
  subText: "text-slate-400",
  cardBg: "rgba(255,255,255,0.02)",
  cardBorder: "rgba(255,255,255,0.06)",
  cardHeading: "text-white",
  viewBtnText: "text-white",
  viewBtnBg: "rgba(255,255,255,0.05)",
  viewBtnBorder: "rgba(255,255,255,0.1)",
  viewBtnHover: "hover:bg-white/10",
  sectionHeading: "text-white",
  projectCardBg: "rgba(255,255,255,0.02)",
  projectCardBorder: "rgba(255,255,255,0.05)",
  projectTitle: "text-white",
  projectDesc: "text-slate-500",
  contactBorder: "rgba(255,255,255,0.05)",
  contactP: "text-slate-400",
  contactDivider: "rgba(255,255,255,0.08)",
  contactIconBg: "rgba(255,255,255,0.04)",
  contactIconBorder: "rgba(255,255,255,0.08)",
  contactLabel: "text-white",
  footer: "text-slate-700",
  toggleBg: "rgba(255,255,255,0.06)",
  toggleBorder: "rgba(255,255,255,0.12)",
  toggleIconClass: "text-amber-400",
  statBg: "rgba(255,255,255,0.03)",
  statBorder: "rgba(255,255,255,0.07)",
  statLabel: "text-slate-500",
  expCardBg: "rgba(255,255,255,0.02)",
  expCardBorder: "rgba(255,255,255,0.06)",
  expCompany: "text-white",
  expMeta: "text-slate-500",
  expBullet: "text-slate-400",
  skillCatBg: "rgba(255,255,255,0.02)",
  skillCatBorder: "rgba(255,255,255,0.06)",
  skillCatLabel: "text-white",
  aboutBg: "rgba(255,255,255,0.02)",
  aboutBorder: "rgba(255,255,255,0.06)",
  aboutText: "text-slate-400",
  pipeBg: "rgba(255,255,255,0.02)",
  pipeBorder: "rgba(255,255,255,0.06)",
  pipeItem: "text-slate-400",
  insightText: "rgba(148,163,184,1)",
  insightTabInactive: "rgba(255,255,255,0.05)",
  insightTabInactiveText: "rgba(255,255,255,0.5)",
  insightTabBorder: "rgba(255,255,255,0.08)",
  insightCardBg: "rgba(255,255,255,0.02)",
  insightCardBorder: "rgba(255,255,255,0.06)",
};

const lightTheme = {
  mainBg: "#faf9ff",
  mainText: "text-slate-700",
  navBg: "rgba(250,249,255,0.8)",
  navBorder: "rgba(0,0,0,0.06)",
  navLinkClass: "text-slate-500 hover:text-slate-900",
  navIconDivider: "rgba(0,0,0,0.1)",
  navIconClass: "text-slate-400 hover:text-slate-900",
  heading: "text-slate-900",
  subText: "text-slate-600",
  cardBg: "rgba(255,255,255,0.9)",
  cardBorder: "rgba(0,0,0,0.07)",
  cardHeading: "text-slate-900",
  viewBtnText: "text-slate-800",
  viewBtnBg: "rgba(0,0,0,0.05)",
  viewBtnBorder: "rgba(0,0,0,0.12)",
  viewBtnHover: "hover:bg-black/5",
  sectionHeading: "text-slate-900",
  projectCardBg: "rgba(255,255,255,0.95)",
  projectCardBorder: "rgba(0,0,0,0.07)",
  projectTitle: "text-slate-900",
  projectDesc: "text-slate-600",
  contactBorder: "rgba(0,0,0,0.05)",
  contactP: "text-slate-600",
  contactDivider: "rgba(0,0,0,0.1)",
  contactIconBg: "rgba(0,0,0,0.04)",
  contactIconBorder: "rgba(0,0,0,0.08)",
  contactLabel: "text-slate-900",
  footer: "text-slate-400",
  toggleBg: "rgba(0,0,0,0.05)",
  toggleBorder: "rgba(0,0,0,0.1)",
  toggleIconClass: "text-slate-600",
  statBg: "rgba(255,255,255,0.9)",
  statBorder: "rgba(0,0,0,0.07)",
  statLabel: "text-slate-500",
  expCardBg: "rgba(255,255,255,0.9)",
  expCardBorder: "rgba(0,0,0,0.07)",
  expCompany: "text-slate-900",
  expMeta: "text-slate-500",
  expBullet: "text-slate-600",
  skillCatBg: "rgba(255,255,255,0.9)",
  skillCatBorder: "rgba(0,0,0,0.07)",
  skillCatLabel: "text-slate-900",
  aboutBg: "rgba(255,255,255,0.9)",
  aboutBorder: "rgba(0,0,0,0.07)",
  aboutText: "text-slate-600",
  pipeBg: "rgba(255,255,255,0.9)",
  pipeBorder: "rgba(0,0,0,0.07)",
  pipeItem: "text-slate-600",
  insightText: "rgba(51,65,85,1)",
  insightTabInactive: "rgba(0,0,0,0.04)",
  insightTabInactiveText: "rgba(0,0,0,0.45)",
  insightTabBorder: "rgba(0,0,0,0.08)",
  insightCardBg: "rgba(255,255,255,0.95)",
  insightCardBorder: "rgba(0,0,0,0.07)",
};

type Theme = typeof darkTheme;

const allProjects = [
  {
    name: "Hathority",
    url: "https://hathority.com/",
    category: "Enterprise & IT",
    desc: "Complete brand identity design + custom WordPress build from scratch. Sole owner of UI/UX and frontend implementation. 90+ PageSpeed, full technical SEO.",
  },
  {
    name: "Dhruvanth Forex",
    url: "https://dhruvanthforex.com/",
    category: "Financial Services",
    desc: "High-conversion lead gen platform for NRI/forex clients. Mobile-first UX, secure interfaces, and real-time data integration. 90+ PageSpeed, full SEO.",
  },
  {
    name: "Xadelit",
    url: "https://xadelit.com/",
    category: "Enterprise & IT",
    desc: "IT services website with a robust tech stack, conversion-optimized design, and structured navigation architecture. WordPress dev & SEO — 90+ PageSpeed.",
  },
  {
    name: "Access Networks",
    url: "https://accessnetworks.com/",
    category: "Enterprise & IT",
    desc: "Professional network solutions provider with enterprise-grade design, structured content strategy, and responsive multi-device layout.",
  },
  {
    name: "Naroda Bank",
    url: "https://naroda.bank.in/",
    category: "Financial Services",
    desc: "Banking web portal with accessible design, secure UI flows, WCAG-compliant responsive architecture, and modern interaction patterns.",
  },
  {
    name: "Fly High Logistics",
    url: "https://flyhighlogistics.com/",
    category: "Freight & Logistics",
    desc: "Reliable freight forwarding and global logistics platform with efficient delivery management, cargo tracking, and customer-focused service flows.",
  },
  {
    name: "Creekside International",
    url: "https://creekside.edu.in/",
    category: "Education",
    desc: "International school website with content management, student enrollment workflows, event calendars, and bilingual UI support.",
  },
  {
    name: "Shiksha Tarang",
    url: "https://shikshatarang.com/",
    category: "Education",
    desc: "EdTech platform supporting multilingual content, interactive course listings, student dashboards, and a modern learning experience.",
  },
  {
    name: "Anisan Ads",
    url: "https://anisanads.com/",
    category: "Marketing & Advertising",
    desc: "Performance marketing agency site with bold visual identity, animated hero sections, lead capture forms, and measurable conversion flows.",
  },
  {
    name: "Adlift Digital",
    url: "https://adliftdigital.com/",
    category: "Marketing & SaaS",
    desc: "Digital growth agency showcasing campaigns, SEO-optimized pages, client success stories, and conversion-first design language.",
  },
  {
    name: "MS Life",
    url: "https://mslife.com/",
    category: "Manufacturing & Steel",
    desc: "MS Life Steel — high-quality CRS TMT bars and steel products. Advanced integrated steel plant technology with superior strength and durability.",
  },
  {
    name: "AS Enterprises",
    url: "https://the-as-enterprises.in/",
    category: "Enterprise & IT",
    desc: "Business solutions enterprise website with a professional layout, service-focused content architecture, and clean responsive design.",
  },
  {
    name: "Little Tortos",
    url: "https://littletortos.com/",
    category: "Kids Sports & Activity",
    desc: "Modern platform focused on kids sports and activities — interactive experiences, creative learning, and skill development in a fun environment.",
  },
  {
    name: "SRD Infotek",
    url: "https://www.srdinfotek.com/",
    category: "Enterprise & IT",
    desc: "IT solutions and technology services platform with structured service pages, a performance-optimized stack, and professional corporate design.",
  },
  {
    name: "Modulyn Interiors",
    url: "https://modulyninteriors.com/",
    category: "Design & Lifestyle",
    desc: "Interior design studio website with a curated portfolio showcase, elegant visual hierarchy, and an immersive browsing experience for premium spaces.",
  },
];

const skillsWordPress = [
  "Custom Themes", "Gutenberg Blocks", "Plugin Development",
  "WooCommerce", "REST API", "CMS Architecture", "PHP", "MySQL",
];

const skillsFrontend = [
  "HTML5", "CSS3", "JavaScript", "TypeScript",
  "React", "Vue.js", "Bootstrap", "Figma", "Technical SEO",
];

const skillCategories = [
  {
    label: "Frontend",
    color: "#E05454",
    Icon: Code2,
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Angular", "Vue.js", "Bootstrap", "Tailwind CSS", "Responsive Design"],
  },
  {
    label: "WordPress",
    color: "#C13383",
    Icon: Globe,
    skills: ["Custom Themes", "Gutenberg Blocks", "Plugin Development", "WooCommerce", "REST API", "CMS Architecture"],
  },
  {
    label: "Backend & API",
    color: "#792CA2",
    Icon: Server,
    skills: ["PHP", "MySQL", "REST APIs", "GraphQL", "Boomi", "NetSuite ERP Integration"],
  },
  {
    label: "Design",
    color: "#443199",
    Icon: Palette,
    skills: ["Figma", "Photoshop", "Canva", "Wireframing", "Prototyping", "Brand Identity", "Marketing Creatives"],
  },
  {
    label: "SEO & Performance",
    color: "#E05454",
    Icon: Search,
    skills: ["Technical SEO", "Schema Markup", "Core Web Vitals", "Open Graph", "Canonical Tags", "CDN", "PageSpeed"],
  },
  {
    label: "DevOps",
    color: "#C13383",
    Icon: Zap,
    skills: ["Git", "GitHub", "XAMPP", "Laragon", "Docker", "Dev → Staging → Production"],
  },
];

const experience = [
  {
    role: "Senior Web Developer",
    company: "Hathority LLC",
    location: "Hyderabad",
    period: "Feb 2021 – Feb 2026",
    color: "#E05454",
    highlights: [
      "Designed Hathority's complete brand identity — logo, typography, colours — and built the corporate website from scratch as sole UI/UX and frontend owner.",
      "Led UI/UX design across 15+ client projects — wireframes, Figma prototypes, and pixel-perfect builds focused on conversion and brand consistency.",
      "Built 7+ custom WordPress themes for enterprise clients in finance, SaaS, and IT — achieving 90+ PageSpeed scores on every delivery.",
      "Integrated complex web forms via PHP and Boomi into NetSuite ERP workflows, reducing manual data handling for clients.",
      "Drove technical SEO strategy across all client sites — schema markup, Core Web Vitals, meta optimisation — improving organic rankings.",
      "Produced marketing creatives, ad banners, and LinkedIn content for 5+ client brands, supporting digital campaign performance.",
    ],
  },
  {
    role: "Web Designer",
    company: "Y-Axis Solutions",
    location: "Hyderabad",
    period: "Jan 2016 – Sep 2020",
    color: "#792CA2",
    highlights: [
      "Designed and developed 30+ high-converting landing pages (HTML, CSS, Bootstrap) — all scoring 90+ PageSpeed with full technical SEO.",
      "Built and maintained 20+ custom WordPress websites across immigration, education, and financial services verticals.",
      "Implemented end-to-end technical SEO: schema markup, canonical tags, Open Graph, and keyword-aligned content — contributing to top-ranking pages for key immigration queries.",
      "Produced 100+ marketing creatives (banners, display ads, videos) and managed LinkedIn and blog content for a globally operating immigration consultancy.",
      "Collaborated cross-functionally with content, PPC, and backend teams to deliver cohesive digital experiences.",
    ],
  },
];

const pipelineStages = [
  {
    stage: "Development",
    subtitle: "Local · Active Coding",
    color: "#443199",
    items: [
      "Local setup: XAMPP / Laragon / Docker",
      "Feature branches per task (Git)",
      "Environment variables for local config",
    ],
  },
  {
    stage: "Staging",
    subtitle: "Client Review & QA",
    color: "#792CA2",
    items: [
      "Mirrors production — client UAT sign-off",
      "Plugin compatibility & DB migration checks",
      "Cache clearing & performance validation",
    ],
  },
  {
    stage: "Production",
    subtitle: "Live · End Users",
    color: "#C13383",
    items: [
      "Full backup before every deployment",
      "Cache purged — functionality verified",
      "Rollback plan in place for critical issues",
    ],
  },
];

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "50+", label: "Websites Delivered" },
  { value: "90+", label: "PageSpeed Score" },
  { value: "15+", label: "Enterprise Clients" },
];

// ── Dev Insights data ──────────────────────────────────────────────────────────

type TipItem = {
  cat: string;
  color: string;
  icon: React.ElementType;
  text: React.ReactNode;
};

function C({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <code
      className="text-[11px] px-1.5 py-0.5 rounded font-mono"
      style={{ background: `${color}18`, color }}
    >
      {children}
    </code>
  );
}

const devTips: TipItem[] = [
  {
    cat: "WordPress",
    color: "#C13383",
    icon: Globe,
    text: (
      <>
        WP Rocket & Perfmatters automate most Core Web Vitals fixes — but knowing{" "}
        <C color="#C13383">fetchpriority</C>, <C color="#C13383">width/height</C> attributes, and
        long-task budgets shows real depth to interviewers.
      </>
    ),
  },
  {
    cat: "Next.js",
    color: "#443199",
    icon: Zap,
    text: (
      <>
        Inject JSON-LD via a <C color="#443199">&lt;Script&gt;</C> component in{" "}
        <C color="#443199">layout.js</C> — server-rendered structured data gets indexed on the
        first crawl wave, not the delayed JS wave.
      </>
    ),
  },
  {
    cat: "WordPress",
    color: "#C13383",
    icon: Code2,
    text: (
      <>
        Always pair <C color="#C13383">current_user_can()</C> with{" "}
        <C color="#C13383">wp_nonce_field()</C> and{" "}
        <C color="#C13383">check_admin_referer()</C> — skipping either leaves admin forms open to
        CSRF attacks.
      </>
    ),
  },
  {
    cat: "SEO",
    color: "#E05454",
    icon: Search,
    text: (
      <>
        Yoast SEO & Rank Math handle canonicals automatically — but WooCommerce filter URLs (e.g.{" "}
        <C color="#E05454">?pa_color=red</C>) often need manual{" "}
        <C color="#E05454">rel="canonical"</C> overrides.
      </>
    ),
  },
  {
    cat: "SEO",
    color: "#E05454",
    icon: Search,
    text: (
      <>
        The URL Inspection tool in Google Search Console shows exactly what Googlebot renders —
        your browser&apos;s DevTools and Googlebot&apos;s view can differ dramatically for
        JS-heavy pages.
      </>
    ),
  },
  {
    cat: "WordPress",
    color: "#C13383",
    icon: Globe,
    text: (
      <>
        Never disallow <C color="#C13383">/wp-admin/</C> without explicitly allowing{" "}
        <C color="#C13383">admin-ajax.php</C> — it silently breaks front-end AJAX: infinite
        scroll, cart updates, live search.
      </>
    ),
  },
  {
    cat: "WordPress",
    color: "#C13383",
    icon: Code2,
    text: (
      <>
        Forgetting to <C color="#C13383">return</C> inside a filter callback is a classic trap —
        the hook runs silently but the original unmodified value is used downstream.
      </>
    ),
  },
  {
    cat: "WordPress",
    color: "#C13383",
    icon: Server,
    text: (
      <>
        Taxonomy queries use indexed JOIN operations and are dramatically faster than{" "}
        <C color="#C13383">meta_query</C> at scale — model repeatable attributes as taxonomies,
        not post meta.
      </>
    ),
  },
  {
    cat: "WordPress",
    color: "#C13383",
    icon: Palette,
    text: (
      <>
        For FSE block themes, override colors, typography, and spacing in the child theme&apos;s{" "}
        <C color="#C13383">theme.json</C> — the modern, PHP-free approach that survives theme
        updates cleanly.
      </>
    ),
  },
  {
    cat: "Next.js",
    color: "#443199",
    icon: Layout,
    text: (
      <>
        Server Components have no <C color="#443199">useState</C> /{" "}
        <C color="#443199">useEffect</C>. Client Components need the{" "}
        <C color="#443199">&quot;use client&quot;</C> directive. This boundary is the #1 App
        Router interview topic in 2026.
      </>
    ),
  },
  {
    cat: "Next.js",
    color: "#443199",
    icon: Zap,
    text: (
      <>
        Set <C color="#443199">{"title: { template: '%s | Brand', default: 'Brand' }"}</C> in the
        root layout — every child page&apos;s <C color="#443199">metadata.title</C> automatically
        inherits the brand suffix.
      </>
    ),
  },
  {
    cat: "React",
    color: "#792CA2",
    icon: Code2,
    text: (
      <>
        Zustand covers 80% of Redux use cases with far less boilerplate — but Redux Toolkit is
        still preferred for very complex state that needs time-travel debugging and strict action
        tracing.
      </>
    ),
  },
  {
    cat: "React",
    color: "#792CA2",
    icon: Zap,
    text: (
      <>
        Don&apos;t prematurely memoize with <C color="#792CA2">React.memo</C> /{" "}
        <C color="#792CA2">useMemo</C> — memoization itself has overhead. Profile with React
        DevTools Profiler first, then optimize actual bottlenecks.
      </>
    ),
  },
  {
    cat: "CSS",
    color: "#C13383",
    icon: Palette,
    text: (
      <>
        Tailwind CSS v4 uses <C color="#C13383">@theme</C> directives in CSS to define design
        tokens — but native CSS custom properties knowledge remains essential for interviews and
        debugging.
      </>
    ),
  },
  {
    cat: "JavaScript",
    color: "#E05454",
    icon: Code2,
    text: (
      <>
        Event delegation is especially valuable in WordPress custom JS and Shopify storefront
        scripts where elements are dynamically added to the DOM after page load.
      </>
    ),
  },
  {
    cat: "JavaScript",
    color: "#E05454",
    icon: Server,
    text: (
      <>
        <C color="#E05454">Promise.all()</C> rejects immediately if any promise fails.{" "}
        <C color="#E05454">Promise.allSettled()</C> always resolves with every result — essential
        when you need partial success states.
      </>
    ),
  },
  {
    cat: "CSS",
    color: "#C13383",
    icon: Layout,
    text: (
      <>
        CSS container queries are now widely supported and preferred over media queries for
        reusable components in 2026 — they respond to the parent&apos;s width, not the viewport.
      </>
    ),
  },
];

const insightCategories = ["All", "WordPress", "Next.js", "React", "JavaScript", "CSS", "SEO"];

// ── Main Component ─────────────────────────────────────────────────────────────

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const t = isDark ? darkTheme : lightTheme;

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <main
      className={`min-h-screen ${t.mainText} overflow-x-hidden transition-colors duration-300`}
      style={{ background: t.mainBg }}
    >
      {/* Ambient background orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full blur-[140px]"
          style={{ background: "radial-gradient(circle, #443199 0%, transparent 70%)", opacity: isDark ? 0.25 : 0.15 }}
        />
        <div
          className="absolute top-1/2 -right-40 w-[400px] h-[400px] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, #792CA2 0%, transparent 70%)", opacity: isDark ? 0.2 : 0.12 }}
        />
        <div
          className="absolute bottom-1/3 left-1/3 w-[350px] h-[350px] rounded-full blur-[110px]"
          style={{ background: "radial-gradient(circle, #C13383 0%, transparent 70%)", opacity: isDark ? 0.15 : 0.1 }}
        />
        <div
          className="absolute -bottom-20 right-1/4 w-[300px] h-[300px] rounded-full blur-[100px]"
          style={{ background: "radial-gradient(circle, #E05454 0%, transparent 70%)", opacity: isDark ? 0.2 : 0.12 }}
        />
      </div>

      {/* NAVBAR */}
      <nav
        className="fixed top-0 w-full z-50 backdrop-blur-xl transition-colors duration-300"
        style={{ background: t.navBg, borderBottom: `1px solid ${t.navBorder}` }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-black tracking-tight text-lg" style={{ color: isDark ? "#fff" : "#0f0720" }}>
            KARTHIK<span className="gradient-text">.</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-8 text-[11px] font-bold tracking-[0.2em] uppercase">
              {["Work", "Skills", "Experience", "Insights", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`${t.navLinkClass} transition-colors duration-300`}
                >
                  {item}
                </a>
              ))}
            </div>

            <button
              onClick={() => setIsDark(!isDark)}
              aria-label="Toggle theme"
              className="p-2 rounded-full transition-all duration-300 hover:scale-110"
              style={{ background: t.toggleBg, border: `1px solid ${t.toggleBorder}` }}
            >
              {isDark
                ? <Sun className={`w-4 h-4 ${t.toggleIconClass}`} />
                : <Moon className={`w-4 h-4 ${t.toggleIconClass}`} />}
            </button>

            <div className="flex items-center gap-4 pl-4" style={{ borderLeft: `1px solid ${t.navIconDivider}` }}>
              <a href="https://github.com/karthikweb123" target="_blank" rel="noopener noreferrer">
                <GitHubIcon className={`w-5 h-5 ${t.navIconClass} transition-colors duration-300`} />
              </a>
              <a href="https://www.linkedin.com/in/karthik-neelarapu-831b3018" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon className={`w-5 h-5 ${t.navIconClass} transition-colors duration-300`} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-28 text-center">
        <div
          className="inline-flex items-center gap-2.5 px-5 py-2 mb-10 rounded-full text-[10px] font-bold tracking-[0.25em] uppercase"
          style={{ background: "rgba(224,84,84,0.08)", border: "1px solid rgba(224,84,84,0.25)", color: "#E05454" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "#E05454" }} />
            <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "#E05454" }} />
          </span>
          Available for Full-Time &bull; Remote &bull; Freelance
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
          <span className={`${t.heading} block transition-colors duration-300`}>Senior Web</span>
          <span className="gradient-text block">Developer</span>
          <span className={`${t.heading} block transition-colors duration-300`}>&amp; WordPress</span>
        </h1>

        <p className={`${t.subText} text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-14 transition-colors duration-300`}>
          10+ years delivering high-performance websites across finance, SaaS, IT, education, and immigration.
          Consistently achieves 90+ PageSpeed scores — from Figma wireframes to live production deployments
          with full technical SEO and ERP integration.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-16">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="rounded-2xl p-5 transition-colors duration-300"
              style={{ background: t.statBg, border: `1px solid ${t.statBorder}` }}
            >
              <div className="text-3xl md:text-4xl font-black gradient-text leading-none mb-1">{value}</div>
              <div className={`text-[10px] font-bold tracking-[0.15em] uppercase ${t.statLabel}`}>{label}</div>
            </div>
          ))}
        </div>

        {/* Expertise cards */}
        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto mb-16 text-left">
          <div
            className="rounded-3xl p-7 relative overflow-hidden transition-colors duration-300"
            style={{ background: t.cardBg, border: `1px solid ${t.cardBorder}` }}
          >
            <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: "linear-gradient(90deg, #C13383, #E05454)" }} />
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #C13383, #E05454)" }}>
                <Globe className="w-4 h-4 text-white" />
              </div>
              <h3 className={`${t.cardHeading} text-lg font-bold transition-colors duration-300`}>WordPress Specialist</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillsWordPress.map((item, i) => (
                <span
                  key={item}
                  className="px-3 py-1.5 text-xs font-semibold rounded-full"
                  style={{ background: `${COLORS[i % 4]}12`, border: `1px solid ${COLORS[i % 4]}25`, color: COLORS[i % 4] }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div
            className="rounded-3xl p-7 relative overflow-hidden transition-colors duration-300"
            style={{ background: t.cardBg, border: `1px solid ${t.cardBorder}` }}
          >
            <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: "linear-gradient(90deg, #792CA2, #443199)" }} />
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #792CA2, #443199)" }}>
                <Layout className="w-4 h-4 text-white" />
              </div>
              <h3 className={`${t.cardHeading} text-lg font-bold transition-colors duration-300`}>Frontend & UI/UX</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillsFrontend.map((item, i) => (
                <span
                  key={item}
                  className="px-3 py-1.5 text-xs font-semibold rounded-full"
                  style={{ background: `${COLORS[(i + 2) % 4]}12`, border: `1px solid ${COLORS[(i + 2) % 4]}25`, color: COLORS[(i + 2) % 4] }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="#contact"
            className="px-10 py-4 rounded-full font-bold text-white text-sm tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{ background: "linear-gradient(135deg, #E05454 0%, #C13383 40%, #792CA2 70%, #443199 100%)", boxShadow: "0 0 40px rgba(193,51,131,0.3)" }}
          >
            Let&apos;s Connect
          </a>
          <a
            href="#work"
            className={`px-10 py-4 rounded-full font-bold ${t.viewBtnText} text-sm tracking-wide transition-all duration-300 ${t.viewBtnHover}`}
            style={{ background: t.viewBtnBg, border: `1px solid ${t.viewBtnBorder}` }}
          >
            View Projects
          </a>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="relative z-10 max-w-7xl mx-auto px-6 pb-28">
        <SectionHeader label="Professional Summary" color="#E05454" t={t} />
        <div
          className="rounded-3xl p-10 md:p-14 relative overflow-hidden transition-colors duration-300"
          style={{ background: t.aboutBg, border: `1px solid ${t.aboutBorder}` }}
        >
          <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: "linear-gradient(90deg, #E05454, #C13383, #792CA2, #443199)" }} />
          <p className={`${t.aboutText} text-base md:text-lg leading-relaxed mb-8 transition-colors duration-300`}>
            Senior Web Developer with <strong className="gradient-text font-bold">10+ years of experience</strong> delivering{" "}
            <strong className="gradient-text font-bold">50+ websites</strong> across finance, SaaS, IT, education, and immigration verticals.
            Consistently achieves <strong className="gradient-text font-bold">90+ PageSpeed scores</strong>, builds brand identities from scratch,
            and leads end-to-end delivery — from Figma wireframes to live production deployments with full technical SEO and ERP integration.
          </p>
          <div className="flex flex-wrap gap-3">
            {["End-to-End Ownership", "Design-to-Dev", "Brand Identity", "ERP Integration", "Technical SEO", "Full-Time · Remote · Freelance"].map((tag, i) => (
              <span
                key={tag}
                className="px-4 py-2 text-[11px] font-bold tracking-widest uppercase rounded-full"
                style={{ background: `${COLORS[i % 4]}10`, border: `1px solid ${COLORS[i % 4]}28`, color: COLORS[i % 4] }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="relative z-10 max-w-7xl mx-auto px-6 pb-28">
        <SectionHeader label="Technical Skills" color="#C13383" t={t} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map(({ label, color, Icon, skills }) => (
            <div
              key={label}
              className="rounded-2xl p-7 relative overflow-hidden transition-colors duration-300"
              style={{ background: t.skillCatBg, border: `1px solid ${t.skillCatBorder}` }}
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl" style={{ background: color }} />
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: `${color}18`, border: `1px solid ${color}30` }}
                >
                  <Icon className="w-4 h-4" style={{ color }} />
                </div>
                <h3 className={`${t.skillCatLabel} font-bold text-sm tracking-wide transition-colors duration-300`}>{label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-[11px] font-semibold rounded-full transition-all duration-200 hover:scale-105 cursor-default"
                    style={{ background: `${color}10`, border: `1px solid ${color}25`, color }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="relative z-10 max-w-7xl mx-auto px-6 pb-28">
        <SectionHeader label="Experience" color="#792CA2" t={t} />
        <div className="space-y-8">
          {experience.map((job, idx) => (
            <div
              key={job.company}
              className="rounded-2xl p-8 md:p-10 relative overflow-hidden transition-colors duration-300"
              style={{ background: t.expCardBg, border: `1px solid ${t.expCardBorder}` }}
            >
              <div className="absolute top-0 left-0 bottom-0 w-[3px] rounded-l-2xl" style={{ background: job.color }} />
              <div className="pl-2">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-7">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="px-3 py-1 text-[10px] font-black tracking-widest uppercase rounded-full"
                        style={{ background: `${job.color}15`, color: job.color }}
                      >
                        {idx === 0 ? "Most Recent" : "Previous Role"}
                      </span>
                    </div>
                    <h3 className={`${t.expCompany} text-2xl font-black tracking-tight mt-2 transition-colors duration-300`}>
                      {job.role}
                    </h3>
                    <div className="flex items-center gap-4 mt-1.5">
                      <span className="font-bold text-base" style={{ color: job.color }}>{job.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 md:text-right shrink-0">
                    <div className={`flex items-center gap-1.5 ${t.expMeta} text-[12px] font-medium md:justify-end transition-colors duration-300`}>
                      <Calendar className="w-3.5 h-3.5" />
                      {job.period}
                    </div>
                    <div className={`flex items-center gap-1.5 ${t.expMeta} text-[12px] font-medium md:justify-end transition-colors duration-300`}>
                      <MapPin className="w-3.5 h-3.5" />
                      {job.location}
                    </div>
                  </div>
                </div>
                <ul className="space-y-3">
                  {job.highlights.map((point) => (
                    <li key={point} className={`flex gap-3 text-[13px] leading-relaxed ${t.expBullet} transition-colors duration-300`}>
                      <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: job.color }} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WORDPRESS ── */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-28">
        <SectionHeader label="Custom WordPress Development" color="#C13383" t={t} />
        <div className="grid md:grid-cols-2 gap-8">
          <div
            className="rounded-2xl p-8 transition-colors duration-300"
            style={{ background: "rgba(193,51,131,0.05)", border: "1px solid rgba(193,51,131,0.15)" }}
          >
            <h3 className="text-lg font-bold mb-3 tracking-tight" style={{ color: "#C13383" }}>Custom Themes & CMS</h3>
            <p className="text-[13px] leading-relaxed" style={{ color: isDark ? "rgba(100,116,139,1)" : "rgba(100,116,139,1)" }}>
              Building tailored WordPress installations with fully custom themes and content management systems — no page-builder lock-in.
              Every content type, taxonomy, and admin UI crafted to match the client&apos;s exact editorial workflow.
              7+ enterprise-grade custom themes delivered with 90+ PageSpeed on every build.
            </p>
          </div>
          <div
            className="rounded-2xl p-8 transition-colors duration-300"
            style={{ background: "rgba(193,51,131,0.05)", border: "1px solid rgba(193,51,131,0.15)" }}
          >
            <h3 className="text-lg font-bold mb-3 tracking-tight" style={{ color: "#C13383" }}>ERP & Plugin Integration</h3>
            <p className="text-[13px] leading-relaxed" style={{ color: isDark ? "rgba(100,116,139,1)" : "rgba(100,116,139,1)" }}>
              Pixel-perfect Figma-to-WordPress builds with responsive layouts and custom Gutenberg blocks. Complex web form integration
              via PHP and Boomi into NetSuite ERP workflows — reducing manual data handling and streamlining operations for enterprise clients.
            </p>
          </div>
        </div>
      </section>

      {/* ── REACT / NEXT.JS ── */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-28">
        <SectionHeader label="React / Next.js UI Development" color="#7928A2" t={t} />
        <div className="grid md:grid-cols-2 gap-8">
          <div
            className="rounded-2xl p-8 transition-colors duration-300"
            style={{ background: "rgba(121,40,162,0.05)", border: "1px solid rgba(121,40,162,0.15)" }}
          >
            <h3 className="text-lg font-bold mb-3 tracking-tight" style={{ color: "#7928A2" }}>Component-Driven UIs</h3>
            <p className="text-[13px] leading-relaxed" style={{ color: isDark ? "rgba(100,116,139,1)" : "rgba(100,116,139,1)" }}>
              Crafting reusable, accessible React component libraries with clean prop APIs. From design-system foundations to fully
              interactive dashboards — built for maintainability and scale.
            </p>
          </div>
          <div
            className="rounded-2xl p-8 transition-colors duration-300"
            style={{ background: "rgba(121,40,162,0.05)", border: "1px solid rgba(121,40,162,0.15)" }}
          >
            <h3 className="text-lg font-bold mb-3 tracking-tight" style={{ color: "#7928A2" }}>Next.js Applications</h3>
            <p className="text-[13px] leading-relaxed" style={{ color: isDark ? "rgba(100,116,139,1)" : "rgba(100,116,139,1)" }}>
              Full-stack Next.js apps with server components, dynamic routing, and optimised data-fetching strategies.
              Deployed to Vercel with edge caching, image optimisation, and Core Web Vitals in mind.
            </p>
          </div>
        </div>
      </section>

      {/* ── DEPLOYMENT PIPELINE ── */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-28">
        <SectionHeader label="Deployment Pipeline" color="#443199" t={t} />
        <p className={`${t.subText} text-sm mb-10 transition-colors duration-300`}>
          Structured Dev → Staging → Production workflow maintained across all projects with version control,
          pre-deployment backups, and post-release verification.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {pipelineStages.map((stage, i) => (
            <div
              key={stage.stage}
              className="rounded-2xl p-8 relative overflow-hidden transition-colors duration-300"
              style={{ background: t.pipeBg, border: `1px solid ${t.pipeBorder}` }}
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl" style={{ background: stage.color }} />
              <div className="flex items-center gap-3 mb-2">
                <span
                  className="text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full"
                  style={{ background: `${stage.color}15`, color: stage.color }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-xl font-black mb-1 transition-colors duration-300" style={{ color: stage.color }}>
                {stage.stage}
              </h3>
              <p className={`text-[11px] font-bold tracking-widest uppercase mb-5 ${t.expMeta} transition-colors duration-300`}>
                {stage.subtitle}
              </p>
              <ul className="space-y-3">
                {stage.items.map((item) => (
                  <li key={item} className={`flex gap-2.5 text-[12px] leading-relaxed ${t.pipeItem} transition-colors duration-300`}>
                    <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full" style={{ background: stage.color }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── DEV INSIGHTS ── */}
      <section id="insights" className="relative z-10 max-w-7xl mx-auto px-6 pb-28">
        <SectionHeader label="Dev Insights" color="#E05454" t={t} />
        <p className={`${t.subText} text-sm mb-10 transition-colors duration-300`}>
          Hard-won patterns across WordPress, React, Next.js, and the open web — the kind of depth that stands out in technical interviews.
        </p>
        <DevInsights t={t} isDark={isDark} />
      </section>

      {/* ── PROJECTS ── */}
      <section id="work" className="relative z-10 max-w-7xl mx-auto px-6 pb-32">
        <SectionHeader label="Selected Work" color="#C13383" t={t} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {allProjects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} color={COLORS[i % 4]} t={t} />
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="relative z-10 max-w-7xl mx-auto px-6 pb-32">
        <div
          className="relative overflow-hidden rounded-[3rem] p-16 md:p-24 text-center transition-colors duration-300"
          style={{
            background: "linear-gradient(135deg, rgba(224,84,84,0.07) 0%, rgba(193,51,131,0.06) 30%, rgba(121,44,162,0.06) 60%, rgba(68,49,153,0.08) 100%)",
            border: `1px solid ${t.contactBorder}`,
          }}
        >
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full blur-[120px]" style={{ background: "#E05454", opacity: 0.2 }} />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-[120px]" style={{ background: "#443199", opacity: 0.2 }} />

          <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-8">
            <span className={`${t.heading} transition-colors duration-300`}>Let&apos;s Build</span>
            <br />
            <span className="gradient-text">Something Great</span>
          </h2>

          <p className={`${t.contactP} max-w-2xl mx-auto mb-14 text-lg leading-relaxed transition-colors duration-300`}>
            Open to WordPress development, frontend engineering, UI/UX design, full-stack web applications,
            and long-term product collaborations. Full-time, remote, or freelance.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            <ContactItem
              href="mailto:karthikneelaram@gmail.com"
              icon={<Mail className="w-6 h-6" style={{ color: "#E05454" }} />}
              color="#E05454"
              label="karthikneelaram@gmail.com"
              sublabel="Email"
              t={t}
            />
            <div className="hidden md:block h-16 w-px" style={{ background: t.contactDivider }} />
            <ContactItem
              href="tel:+919502905237"
              icon={<Phone className="w-6 h-6" style={{ color: "#792CA2" }} />}
              color="#792CA2"
              label="+91 9502905237"
              sublabel="Phone"
              t={t}
            />
            <div className="hidden md:block h-16 w-px" style={{ background: t.contactDivider }} />
            <ContactItem
              href="https://wa.me/919494935616"
              icon={<WhatsAppIcon className="w-6 h-6" style={{ color: "#25D366" }} />}
              color="#25D366"
              label="+91 94949 35616"
              sublabel="WhatsApp"
              t={t}
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={`relative z-10 text-center text-[10px] font-bold tracking-[0.3em] uppercase ${t.footer} pb-16 transition-colors duration-300`}>
        &copy; {new Date().getFullYear()} Karthik Neelarapu &bull; Senior Web Developer &bull; Hyderabad, India
      </footer>
    </main>
  );
}

// ── Sub-components ─────────────────────────────────────────────────────────────

function SectionHeader({ label, color, t }: { label: string; color: string; t: Theme }) {
  return (
    <div className="flex items-center gap-5 mb-14">
      <h2 className={`${t.sectionHeading} text-4xl font-black tracking-tighter uppercase whitespace-nowrap transition-colors duration-300`}>
        {label}
      </h2>
      <div
        className="h-px flex-1 rounded-full"
        style={{ background: `linear-gradient(90deg, ${color}80, transparent)` }}
      />
    </div>
  );
}

function ProjectCard({
  project,
  index,
  color,
  t,
}: {
  project: (typeof allProjects)[0];
  index: number;
  color: string;
  t: Theme;
}) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl p-6 relative overflow-hidden transition-all duration-500 hover:-translate-y-1"
      style={{ background: t.projectCardBg, border: `1px solid ${t.projectCardBorder}` }}
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl" style={{ background: color }} />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{ background: `radial-gradient(ellipse at 50% -20%, ${color}18 0%, transparent 65%)` }}
      />
      <div className="flex items-start justify-between mb-4">
        <span
          className="px-2.5 py-1 text-[9px] font-black tracking-widest uppercase rounded-full"
          style={{ background: `${color}15`, color }}
        >
          {project.category}
        </span>
        <span className="text-[11px] font-mono tabular-nums" style={{ color: `${color}60` }}>
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className={`${t.projectTitle} text-xl font-bold mb-3 transition-all duration-300 group-hover:translate-x-1`}>
        {project.name}
      </h3>
      <p className={`${t.projectDesc} text-sm leading-relaxed mb-6 line-clamp-3 transition-colors duration-300`}>
        {project.desc}
      </p>
      <div
        className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest transition-all duration-300"
        style={{ color }}
      >
        Visit Site
        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </a>
  );
}

function ContactItem({
  href,
  icon,
  color,
  label,
  sublabel,
  t,
}: {
  href: string;
  icon: React.ReactNode;
  color: string;
  label: string;
  sublabel: string;
  t: Theme;
}) {
  return (
    <a href={href} className="group flex flex-col items-center">
      <div
        className="mb-4 p-5 rounded-2xl transition-all duration-300 group-hover:scale-105"
        style={{ background: t.contactIconBg, border: `1px solid ${t.contactIconBorder}` }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor = `${color}50`;
          (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 20px ${color}25`;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor = t.contactIconBorder;
          (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
        }}
      >
        {icon}
      </div>
      <span className={`${t.contactLabel} font-medium transition-colors duration-300`}>{label}</span>
      <span className="text-[10px] tracking-[0.2em] uppercase mt-1" style={{ color: `${color}80` }}>
        {sublabel}
      </span>
    </a>
  );
}

function DevInsights({ t, isDark }: { t: Theme; isDark: boolean }) {
  const [activeTab, setActiveTab] = useState("All");

  const filtered = activeTab === "All" ? devTips : devTips.filter((tip) => tip.cat === activeTab);

  const catColor = (cat: string) =>
    cat === "WordPress" ? "#C13383"
    : cat === "Next.js" ? "#443199"
    : cat === "React" ? "#792CA2"
    : cat === "JavaScript" ? "#E05454"
    : cat === "CSS" ? "#C13383"
    : cat === "SEO" ? "#E05454"
    : null;

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {insightCategories.map((cat) => {
          const isActive = cat === activeTab;
          const cc = catColor(cat);
          return (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className="px-5 py-2 rounded-full text-[11px] font-black tracking-widest uppercase transition-all duration-300 hover:scale-105"
              style={{
                background: isActive && cc ? cc : isActive ? "#555" : t.insightTabInactive,
                color: isActive ? "#fff" : t.insightTabInactiveText,
                border: isActive ? "1px solid transparent" : `1px solid ${t.insightTabBorder}`,
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Tips grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((tip, i) => {
          const IconComp = tip.icon;
          return (
            <div
              key={i}
              className="rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: t.insightCardBg, border: `1px solid ${t.insightCardBorder}` }}
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl" style={{ background: tip.color }} />

              {/* Subtle hover glow */}
              <div
                className="absolute inset-0 pointer-events-none rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(ellipse at 50% 0%, ${tip.color}10 0%, transparent 70%)` }}
              />

              {/* Icon + badge */}
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: `${tip.color}15`, border: `1px solid ${tip.color}25` }}
                >
                  <IconComp className="w-3.5 h-3.5" style={{ color: tip.color }} />
                </div>
                <span
                  className="text-[9px] font-black tracking-[0.2em] uppercase px-2.5 py-1 rounded-full"
                  style={{ background: `${tip.color}12`, color: tip.color }}
                >
                  {tip.cat}
                </span>
              </div>

              {/* Tip text */}
              <p
                className="text-[13px] leading-relaxed transition-colors duration-300"
                style={{ color: t.insightText }}
              >
                {tip.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
