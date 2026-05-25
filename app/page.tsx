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
};

type Theme = typeof darkTheme;

const allProjects = [
  {
    name: "Hathority",
    url: "https://hathority.com/",
    category: "Enterprise & IT",
    desc: "Scalable enterprise IT solutions platform with performance-first frontend architecture, clean UI systems, and seamless user experience.",
  },
  {
    name: "Xadelit",
    url: "https://xadelit.com/",
    category: "Enterprise & IT",
    desc: "Digital transformation company website with a robust tech stack, conversion-optimized design, and structured navigation architecture.",
  },
  {
    name: "Access Networks",
    url: "https://accessnetworks.com/",
    category: "Enterprise & IT",
    desc: "Professional network solutions provider with enterprise-grade design, structured content strategy, and responsive multi-device layout.",
  },
  {
    name: "Dhruvanth Forex",
    url: "https://dhruvanthforex.com/",
    category: "Financial Services",
    desc: "Forex trading platform designed for trust and clarity, featuring mobile-first UX, secure interfaces, and real-time data integration.",
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
    category: "Global Freight & Logistics Solutions",
    desc: "Fly High Logistics provides reliable freight forwarding, cargo transportation, supply chain, and global logistics solutions with efficient delivery management and customer-focused services.",
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
    category: "Marketing & SaaS",
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
    category: "Best Quality TMT Bars in India",
    desc: "MS Life Steel manufactures high-quality CRS TMT bars and steel products in India with advanced integrated steel plant technology, superior strength, durability, and reliable construction solutions.",
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
    category: "Kids Sports & Activity Platform",
    desc: "Little Tortos is a modern platform focused on kids sports, activities, and engagement through interactive experiences, creative learning, and skill development in a fun environment.",
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

const skillsUX = [
  "Figma", "Photoshop", "Illustrator", "Canva",
  "Wireframing", "UI Design", "Landing Pages", "Brand Design", "Prototyping",
];

const skillsDev = [
  "HTML", "CSS", "JavaScript", "PHP", "WordPress",
  "React", "Next.js", "Vue.js", "Node.js",
  "Bootstrap", "Tailwind CSS", "GSAP", "API Integration",
];

const coreSkills = [
  "UI/UX Design", "Frontend Development", "Full-Stack Development",
  "React", "Next.js", "Vue.js", "Node.js", "JavaScript", "TypeScript",
  "Tailwind CSS", "Bootstrap", "GSAP", "WordPress", "Shopify",
  "Figma", "Photoshop", "Illustrator", "Canva",
];

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
        <div className="orb-1 absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full blur-[140px]"
          style={{ background: "radial-gradient(circle, #443199 0%, transparent 70%)", opacity: isDark ? 0.25 : 0.15 }} />
        <div className="orb-2 absolute top-1/2 -right-40 w-[400px] h-[400px] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, #792CA2 0%, transparent 70%)", opacity: isDark ? 0.2 : 0.12 }} />
        <div className="orb-3 absolute bottom-1/3 left-1/3 w-[350px] h-[350px] rounded-full blur-[110px]"
          style={{ background: "radial-gradient(circle, #C13383 0%, transparent 70%)", opacity: isDark ? 0.15 : 0.1 }} />
        <div className="orb-4 absolute -bottom-20 right-1/4 w-[300px] h-[300px] rounded-full blur-[100px]"
          style={{ background: "radial-gradient(circle, #E05454 0%, transparent 70%)", opacity: isDark ? 0.2 : 0.12 }} />
      </div>

      {/* NAVBAR */}
      <nav
        className="fixed top-0 w-full z-50 backdrop-blur-xl transition-colors duration-300"
        style={{ background: t.navBg, borderBottom: `1px solid ${t.navBorder}` }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <div className="font-black tracking-tight text-lg" style={{ color: isDark ? "#fff" : "#0f0720" }}>
            KARTHIK
            <span className="gradient-text">.</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-8 text-[11px] font-bold tracking-[0.2em] uppercase">
              {["Work", "Skills", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`${t.navLinkClass} transition-colors duration-300`}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Theme toggle */}
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

        {/* Status pill */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2 mb-10 rounded-full text-[10px] font-bold tracking-[0.25em] uppercase"
          style={{
            background: "rgba(224,84,84,0.08)",
            border: "1px solid rgba(224,84,84,0.25)",
            color: "#E05454",
          }}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
              style={{ background: "#E05454" }}></span>
            <span className="relative inline-flex rounded-full h-2 w-2"
              style={{ background: "#E05454" }}></span>
          </span>
          Available for Full-Time Roles &bull; Freelance Projects
        </div>

        {/* Heading */}
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
          <span className={`${t.heading} block transition-colors duration-300`}>UI/UX Designer</span>
          <span className="gradient-text block">&amp; Full-Stack</span>
          <span className={`${t.heading} block transition-colors duration-300`}>Developer</span>
        </h1>

        <p className={`${t.subText} text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-16 transition-colors duration-300`}>
          Designing modern user experiences and building scalable, high-performance
          websites with deep expertise in frontend engineering, responsive UI systems,
          and full-stack web development.
        </p>

        {/* Expertise cards */}
        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto mb-16 text-left">

          <div className="rounded-3xl p-7 relative overflow-hidden transition-colors duration-300"
            style={{ background: t.cardBg, border: `1px solid ${t.cardBorder}` }}>
            <div className="absolute top-0 left-0 right-0 h-[1px]"
              style={{ background: "linear-gradient(90deg, #E05454, #C13383)" }} />
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #E05454, #C13383)" }}>
                <Layout className="w-4 h-4 text-white" />
              </div>
              <h3 className={`${t.cardHeading} text-lg font-bold transition-colors duration-300`}>UI/UX Designer</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillsUX.map((item, i) => (
                <span key={item} className="px-3 py-1.5 text-xs font-semibold rounded-full"
                  style={{
                    background: `${COLORS[i % 4]}12`,
                    border: `1px solid ${COLORS[i % 4]}25`,
                    color: COLORS[i % 4],
                  }}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl p-7 relative overflow-hidden transition-colors duration-300"
            style={{ background: t.cardBg, border: `1px solid ${t.cardBorder}` }}>
            <div className="absolute top-0 left-0 right-0 h-[1px]"
              style={{ background: "linear-gradient(90deg, #792CA2, #443199)" }} />
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #792CA2, #443199)" }}>
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <h3 className={`${t.cardHeading} text-lg font-bold transition-colors duration-300`}>Frontend / Full-Stack Developer</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillsDev.map((item, i) => (
                <span key={item} className="px-3 py-1.5 text-xs font-semibold rounded-full"
                  style={{
                    background: `${COLORS[(i + 2) % 4]}12`,
                    border: `1px solid ${COLORS[(i + 2) % 4]}25`,
                    color: COLORS[(i + 2) % 4],
                  }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="#contact"
            className="px-10 py-4 rounded-full font-bold text-white text-sm tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #E05454 0%, #C13383 40%, #792CA2 70%, #443199 100%)",
              boxShadow: "0 0 40px rgba(193,51,131,0.3)",
            }}>
            Let&apos;s Connect
          </a>
          <a
            href="#work"
            className={`px-10 py-4 rounded-full font-bold ${t.viewBtnText} text-sm tracking-wide transition-all duration-300 ${t.viewBtnHover}`}
            style={{ background: t.viewBtnBg, border: `1px solid ${t.viewBtnBorder}` }}>
            View Projects
          </a>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="relative z-10 max-w-7xl mx-auto px-6 pb-28">
        <SectionHeader label="Core Skills" color="#E05454" t={t} />
        <div className="flex flex-wrap gap-3">
          {coreSkills.map((skill, i) => (
            <span
              key={skill}
              className="px-5 py-3 text-[11px] font-bold tracking-widest uppercase rounded-full cursor-default transition-all duration-300 hover:scale-105"
              style={{
                background: `${COLORS[i % 4]}10`,
                border: `1px solid ${COLORS[i % 4]}28`,
                color: COLORS[i % 4],
              }}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* ── WORDPRESS ── */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-28">
        <SectionHeader label="Custom WordPress Development" color="#C13383" t={t} />
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl p-8 transition-colors duration-300"
            style={{ background: `rgba(193,51,131,0.05)`, border: `1px solid rgba(193,51,131,0.15)` }}>
            <h3 className="text-lg font-bold mb-3 tracking-tight" style={{ color: "#C13383" }}>Custom CMS</h3>
            <p className="text-[13px] leading-relaxed" style={{ color: t.projectDesc }}>
              Building tailored WordPress installations with fully custom content management systems — no page-builder lock-in. Every content type, taxonomy, and admin UI is crafted to match the client&apos;s exact editorial workflow.
            </p>
          </div>
          <div className="rounded-2xl p-8 transition-colors duration-300"
            style={{ background: `rgba(193,51,131,0.05)`, border: `1px solid rgba(193,51,131,0.15)` }}>
            <h3 className="text-lg font-bold mb-3 tracking-tight" style={{ color: "#C13383" }}>Custom Designs</h3>
            <p className="text-[13px] leading-relaxed" style={{ color: t.projectDesc }}>
              Pixel-perfect theme development from scratch — no pre-made templates. Full-fidelity Figma-to-WordPress builds with responsive layouts, custom Gutenberg blocks, and performance-optimised markup.
            </p>
          </div>
        </div>
      </section>

      {/* ── REACT / NEXT.JS ── */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-28">
        <SectionHeader label="React / Next.js UI Development" color="#7928A2" t={t} />
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl p-8 transition-colors duration-300"
            style={{ background: `rgba(121,40,162,0.05)`, border: `1px solid rgba(121,40,162,0.15)` }}>
            <h3 className="text-lg font-bold mb-3 tracking-tight" style={{ color: "#7928A2" }}>Component-Driven UIs</h3>
            <p className="text-[13px] leading-relaxed" style={{ color: t.projectDesc }}>
              Crafting reusable, accessible React component libraries with clean prop APIs. From design-system foundations to fully interactive dashboards — built for maintainability and scale.
            </p>
          </div>
          <div className="rounded-2xl p-8 transition-colors duration-300"
            style={{ background: `rgba(121,40,162,0.05)`, border: `1px solid rgba(121,40,162,0.15)` }}>
            <h3 className="text-lg font-bold mb-3 tracking-tight" style={{ color: "#7928A2" }}>Next.js Applications</h3>
            <p className="text-[13px] leading-relaxed" style={{ color: t.projectDesc }}>
              Full-stack Next.js apps with server components, dynamic routing, and optimised data-fetching strategies. Deployed to Vercel with edge caching, image optimisation, and Core Web Vitals in mind.
            </p>
          </div>
        </div>
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
        <div className="relative overflow-hidden rounded-[3rem] p-16 md:p-24 text-center transition-colors duration-300"
          style={{
            background: "linear-gradient(135deg, rgba(224,84,84,0.07) 0%, rgba(193,51,131,0.06) 30%, rgba(121,44,162,0.06) 60%, rgba(68,49,153,0.08) 100%)",
            border: `1px solid ${t.contactBorder}`,
          }}>

          {/* Corner glows */}
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full blur-[120px]"
            style={{ background: "#E05454", opacity: 0.2 }} />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-[120px]"
            style={{ background: "#443199", opacity: 0.2 }} />

          <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-8">
            <span className={`${t.heading} transition-colors duration-300`}>Let&apos;s Build</span>
            <br />
            <span className="gradient-text">Something Great</span>
          </h2>

          <p className={`${t.contactP} max-w-2xl mx-auto mb-14 text-lg leading-relaxed transition-colors duration-300`}>
            Open to frontend development, UI/UX design, full-stack web applications,
            and long-term product collaborations.
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
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={`relative z-10 text-center text-[10px] font-bold tracking-[0.3em] uppercase ${t.footer} pb-16 transition-colors duration-300`}>
        &copy; {new Date().getFullYear()} Karthik Neelarapu &bull; Portfolio
      </footer>
    </main>
  );
}

/* ── Sub-components ── */

function SectionHeader({ label, color, t }: { label: string; color: string; t: Theme }) {
  return (
    <div className="flex items-center gap-5 mb-14">
      <h2 className={`${t.sectionHeading} text-4xl font-black tracking-tighter uppercase whitespace-nowrap transition-colors duration-300`}>
        {label}
      </h2>
      <div className="h-px flex-1 rounded-full"
        style={{ background: `linear-gradient(90deg, ${color}80, transparent)` }} />
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
      style={{
        background: t.projectCardBg,
        border: `1px solid ${t.projectCardBorder}`,
      }}
    >
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
        style={{ background: color }} />

      {/* Hover radial glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{ background: `radial-gradient(ellipse at 50% -20%, ${color}18 0%, transparent 65%)` }}
      />

      {/* Card header row */}
      <div className="flex items-start justify-between mb-4">
        <span
          className="px-2.5 py-1 text-[9px] font-black tracking-widest uppercase rounded-full"
          style={{ background: `${color}15`, color }}>
          {project.category}
        </span>
        <span className="text-[11px] font-mono tabular-nums"
          style={{ color: `${color}60` }}>
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Title */}
      <h3 className={`${t.projectTitle} text-xl font-bold mb-3 transition-all duration-300 group-hover:translate-x-1`}>
        {project.name}
      </h3>

      {/* Description */}
      <p className={`${t.projectDesc} text-sm leading-relaxed mb-6 line-clamp-3 transition-colors duration-300`}>
        {project.desc}
      </p>

      {/* Link CTA */}
      <div
        className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest transition-all duration-300"
        style={{ color }}>
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
        style={{
          background: t.contactIconBg,
          border: `1px solid ${t.contactIconBorder}`,
        }}
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
