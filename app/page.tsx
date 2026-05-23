"use client";

import React from "react";
import {
  Code2,
  Layout,
  Mail,
  Phone,
  ArrowUpRight,
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
    category: "Financial Services",
    desc: "End-to-end logistics management platform with dynamic tracking interfaces, shipment dashboards, and a clean visual hierarchy.",
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
    category: "Marketing & SaaS",
    desc: "Lifestyle and wellness brand with immersive product showcases, modern editorial layout, and high-conversion landing page architecture.",
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
  return (
    <main className="min-h-screen bg-[#08060f] text-slate-300 overflow-x-hidden">

      {/* Ambient background orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="orb-1 absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full blur-[140px]"
          style={{ background: "radial-gradient(circle, #443199 0%, transparent 70%)", opacity: 0.25 }} />
        <div className="orb-2 absolute top-1/2 -right-40 w-[400px] h-[400px] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, #792CA2 0%, transparent 70%)", opacity: 0.2 }} />
        <div className="orb-3 absolute bottom-1/3 left-1/3 w-[350px] h-[350px] rounded-full blur-[110px]"
          style={{ background: "radial-gradient(circle, #C13383 0%, transparent 70%)", opacity: 0.15 }} />
        <div className="orb-4 absolute -bottom-20 right-1/4 w-[300px] h-[300px] rounded-full blur-[100px]"
          style={{ background: "radial-gradient(circle, #E05454 0%, transparent 70%)", opacity: 0.2 }} />
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-[#08060f]/80 backdrop-blur-xl"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <div className="font-black tracking-tight text-lg text-white">
            KARTHIK
            <span className="gradient-text">.</span>
          </div>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-8 text-[11px] font-bold tracking-[0.2em] uppercase">
              {["Work", "Skills", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-500 hover:text-white transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4 pl-6" style={{ borderLeft: "1px solid rgba(255,255,255,0.08)" }}>
              <a href="https://github.com/karthikweb123" target="_blank" rel="noopener noreferrer">
                <GitHubIcon className="w-5 h-5 text-slate-600 hover:text-white transition-colors duration-300" />
              </a>
              <a href="https://www.linkedin.com/in/karthik-neelarapu-831b3018" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon className="w-5 h-5 text-slate-600 hover:text-white transition-colors duration-300" />
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
          <span className="text-white block">UI/UX Designer</span>
          <span className="gradient-text block">&amp; Full-Stack</span>
          <span className="text-white block">Developer</span>
        </h1>

        <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-16">
          Designing modern user experiences and building scalable, high-performance
          websites with deep expertise in frontend engineering, responsive UI systems,
          and full-stack web development.
        </p>

        {/* Expertise cards */}
        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto mb-16 text-left">

          <div className="rounded-3xl p-7 relative overflow-hidden"
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="absolute top-0 left-0 right-0 h-[1px]"
              style={{ background: "linear-gradient(90deg, #E05454, #C13383)" }} />
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #E05454, #C13383)" }}>
                <Layout className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-white text-lg font-bold">UI/UX Designer</h3>
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

          <div className="rounded-3xl p-7 relative overflow-hidden"
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="absolute top-0 left-0 right-0 h-[1px]"
              style={{ background: "linear-gradient(90deg, #792CA2, #443199)" }} />
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #792CA2, #443199)" }}>
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-white text-lg font-bold">Frontend / Full-Stack Developer</h3>
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
            className="px-10 py-4 rounded-full font-bold text-white text-sm tracking-wide transition-all duration-300 hover:bg-white/10"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
            View Projects
          </a>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="relative z-10 max-w-7xl mx-auto px-6 pb-28">
        <SectionHeader label="Core Skills" color="#E05454" />
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

      {/* ── PROJECTS ── */}
      <section id="work" className="relative z-10 max-w-7xl mx-auto px-6 pb-32">
        <SectionHeader label="Selected Work" color="#C13383" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {allProjects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} color={COLORS[i % 4]} />
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="relative z-10 max-w-7xl mx-auto px-6 pb-32">
        <div className="relative overflow-hidden rounded-[3rem] p-16 md:p-24 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(224,84,84,0.07) 0%, rgba(193,51,131,0.06) 30%, rgba(121,44,162,0.06) 60%, rgba(68,49,153,0.08) 100%)",
            border: "1px solid rgba(255,255,255,0.05)",
          }}>

          {/* Corner glows */}
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full blur-[120px]"
            style={{ background: "#E05454", opacity: 0.2 }} />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-[120px]"
            style={{ background: "#443199", opacity: 0.2 }} />

          <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-8">
            <span className="text-white">Let&apos;s Build</span>
            <br />
            <span className="gradient-text">Something Great</span>
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto mb-14 text-lg leading-relaxed">
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
            />
            <div className="hidden md:block h-16 w-px" style={{ background: "rgba(255,255,255,0.08)" }} />
            <ContactItem
              href="tel:+919502905237"
              icon={<Phone className="w-6 h-6" style={{ color: "#792CA2" }} />}
              color="#792CA2"
              label="+91 9502905237"
              sublabel="Phone"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 text-center text-[10px] font-bold tracking-[0.3em] uppercase text-slate-700 pb-16">
        &copy; {new Date().getFullYear()} Karthik Neelarapu &bull; Portfolio
      </footer>
    </main>
  );
}

/* ── Sub-components ── */

function SectionHeader({ label, color }: { label: string; color: string }) {
  return (
    <div className="flex items-center gap-5 mb-14">
      <h2 className="text-white text-4xl font-black tracking-tighter uppercase whitespace-nowrap">
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
}: {
  project: (typeof allProjects)[0];
  index: number;
  color: string;
}) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl p-6 relative overflow-hidden transition-all duration-500 hover:-translate-y-1"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.05)",
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
      <h3 className="text-white text-xl font-bold mb-3 transition-transform duration-300 group-hover:translate-x-1">
        {project.name}
      </h3>

      {/* Description */}
      <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
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
}: {
  href: string;
  icon: React.ReactNode;
  color: string;
  label: string;
  sublabel: string;
}) {
  return (
    <a href={href} className="group flex flex-col items-center">
      <div
        className="mb-4 p-5 rounded-2xl transition-all duration-300 group-hover:scale-105"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: `0 0 0 0 ${color}`,
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor = `${color}50`;
          (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 20px ${color}25`;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.08)";
          (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 0 0 ${color}`;
        }}
      >
        {icon}
      </div>
      <span className="text-white font-medium">{label}</span>
      <span className="text-[10px] tracking-[0.2em] uppercase mt-1" style={{ color: `${color}80` }}>
        {sublabel}
      </span>
    </a>
  );
}
