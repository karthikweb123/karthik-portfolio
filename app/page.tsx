"use client";

import React from "react";
import {
  Globe,
  Code2,
  Layout,
  Mail,
  Phone,
  ArrowUpRight,
  Layers,
} from "lucide-react";

// Local SVG components
const GitHubIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050814] text-slate-300 font-sans selection:bg-blue-500/20 scroll-smooth">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-[#050814]/70 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-white font-black tracking-tight text-lg">
            KARTHIK NEELARAPU
            <span className="text-blue-500">.</span>
          </div>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-8 text-[11px] font-bold tracking-[0.2em] uppercase">
              <a href="#projects" className="hover:text-white transition">
                Work
              </a>
              <a href="#skills" className="hover:text-white transition">
                Skills
              </a>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </div>

            <div className="flex items-center gap-4 border-l border-slate-800 pl-6">
              <a
                href="https://github.com/karthikweb123"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon className="w-5 h-5 text-slate-500 hover:text-white transition" />
              </a>

              <a
                href="https://www.linkedin.com/in/karthik-neelarapu-831b3018"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon className="w-5 h-5 text-slate-500 hover:text-white transition" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-24 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-[10px] font-bold tracking-[0.3em] text-blue-400 uppercase bg-blue-400/10 border border-blue-400/20 rounded-full">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>

          Available for Full-Time Roles • Freelance Projects
        </div>

        <h1 className="text-5xl md:text-3xl font-black tracking-tighter leading-none mb-8">
          <span className="text-white">UI/UX Designer • Frontend & Full-Stack Developer</span>
        </h1>

        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
            Designing modern user experiences and developing scalable,
            high-performance websites with strong expertise in frontend
            engineering, responsive UI systems, and full-stack web development.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-12 text-left">
            
            {/* UI/UX */}
            <div className="border border-slate-800 rounded-3xl p-8 bg-slate-900/30">
              <h3 className="text-white text-xl font-bold mb-5">
                UI/UX Designer
              </h3>

              <div className="flex flex-wrap gap-3">
                {[
                  "Figma",
                  "Photoshop",
                  "Illustrator",
                  "Canva",
                  "Wireframing",
                  "UI Design",
                  "Landing Pages",
                  "Brand Design",
                  "Prototyping",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 text-xs font-medium bg-slate-800 rounded-full text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* DEV */}
            <div className="border border-slate-800 rounded-3xl p-8 bg-slate-900/30">
              <h3 className="text-white text-xl font-bold mb-5">
                Frontend / Full-Stack Developer
              </h3>

              <div className="flex flex-wrap gap-3">
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "PHP",
                  "WordPress",
                  "React",
                  "Next.js",
                  "Vue.js",
                  "Node.js",
                  "Bootstrap",
                  "Tailwind CSS",
                  "GSAP",
                  "Responsive Design",
                  "API Integration",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 text-xs font-medium bg-slate-800 rounded-full text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col sm:flex-row justify-center items-center gap-6">
            <a
              href="#contact"
              className="px-10 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition duration-300"
            >
              Let’s Connect
            </a>

            <a
              href="#projects"
              className="px-10 py-4 bg-slate-900 border border-slate-800 text-white rounded-full font-bold hover:bg-slate-800 transition duration-300"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="max-w-7xl mx-auto px-6 pb-28"
      >
        <div className="flex items-center gap-4 mb-14">
          <h2 className="text-white text-4xl font-black tracking-tighter uppercase">
            Core Skills
          </h2>
          <div className="h-px flex-1 bg-slate-800"></div>
        </div>

        <div className="flex flex-wrap gap-4">
          {[
            "UI/UX Design",
            "Frontend Development",
            "Full-Stack Development",
            "React",
            "Next.js",
            "Vue.js",
            "Node.js",
            "JavaScript",
            "TypeScript",
            "Tailwind CSS",
            "Bootstrap",
            "GSAP",
            "WordPress",
            "Shopify",
            "Figma",
            "Photoshop",
            "Illustrator",
            "Canva",
          ].map((skill) => (
            <span
              key={skill}
              className="px-5 py-3 text-[11px] font-bold tracking-widest uppercase bg-slate-900/40 border border-slate-800 rounded-full text-slate-400 hover:text-blue-400 hover:border-blue-400/40 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="max-w-7xl mx-auto px-6 pb-32"
      >
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-white text-4xl font-black tracking-tighter uppercase">
            Selected Work
          </h2>
          <div className="h-px flex-1 bg-slate-800"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card
            title="Enterprise & IT Solutions"
            icon={<Globe className="w-6 h-6 text-blue-400" />}
            desc="Scalable enterprise websites and digital platforms focused on performance, usability, and modern frontend architecture."
            links={[
              { name: "Hathority", url: "https://hathority.com/" },
              { name: "Xadelit", url: "https://xadelit.com/" },
              { name: "Access Networks", url: "https://accessnetworks.com/" },
            ]}
          />

          <Card
            title="Financial Services"
            icon={<Layers className="w-6 h-6 text-emerald-400" />}
            desc="Professional banking, logistics, and forex platforms designed with secure UI systems and responsive frontend experiences."
            links={[
              { name: "Dhruvanth Forex", url: "https://dhruvanthforex.com/" },
              { name: "Naroda Bank", url: "https://naroda.bank.in/" },
              { name: "Fly High Logistics", url: "https://flyhighlogistics.com/" },
            ]}
          />

          <Card
            title="Education Platforms"
            icon={<Code2 className="w-6 h-6 text-purple-400" />}
            desc="Interactive educational platforms with user-focused interfaces, responsive layouts, and scalable frontend systems."
            links={[
              { name: "Creekside Intl", url: "https://creekside.edu.in/" },
              { name: "Lets Learn Global", url: "https://letslearn.global/" },
              { name: "Shiksha Tarang", url: "https://shikshatarang.com/" },
            ]}
          />

          <Card
            title="Marketing & SaaS"
            icon={<Layout className="w-6 h-6 text-orange-400" />}
            desc="High-conversion marketing websites and SaaS interfaces optimized for branding, engagement, and performance."
            links={[
              { name: "Anisan Ads", url: "https://anisanads.com/" },
              { name: "Gadpit", url: "https://gadpit.com/" },
              { name: "MS Life", url: "https://mslife.com/" },
            ]}
          />
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="max-w-7xl mx-auto px-6 pb-32"
      >
        <div className="relative overflow-hidden border border-slate-800 rounded-[3rem] p-16 md:p-24 bg-gradient-to-b from-slate-900/50 to-transparent text-center">
          
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500/10 blur-[100px]"></div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase leading-none">
            Let’s Build
            <br />
            Something Great
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto mb-14 text-lg leading-relaxed">
            Open to frontend development, UI/UX design, full-stack web
            applications, and long-term product collaborations.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            
            <a
              href="mailto:karthikneelaram@gmail.com"
              className="group flex flex-col items-center"
            >
              <div className="mb-4 p-5 bg-slate-900 rounded-2xl border border-slate-800 group-hover:border-blue-500 transition">
                <Mail className="w-6 h-6 text-blue-500" />
              </div>

              <span className="text-white font-medium">
                karthikneelaram@gmail.com
              </span>

              <span className="text-slate-500 text-[10px] tracking-[0.2em] uppercase mt-1">
                Email
              </span>
            </a>

            <div className="hidden md:block h-16 w-px bg-slate-800"></div>

            <a
              href="tel:+919502905237"
              className="group flex flex-col items-center"
            >
              <div className="mb-4 p-5 bg-slate-900 rounded-2xl border border-slate-800 group-hover:border-emerald-500 transition">
                <Phone className="w-6 h-6 text-emerald-500" />
              </div>

              <span className="text-white font-medium">
                +91 9502905237
              </span>

              <span className="text-slate-500 text-[10px] tracking-[0.2em] uppercase mt-1">
                Phone
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-[10px] font-bold tracking-[0.3em] uppercase text-slate-600 pb-16">
        © {new Date().getFullYear()} Karthik Neelarapu • Portfolio
      </footer>
    </main>
  );
}

function Card({ title, icon, desc, links }: any) {
  return (
    <div className="group border border-slate-800 rounded-3xl p-8 bg-slate-900/20 hover:bg-slate-900/40 hover:border-slate-700 transition duration-500">
      
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-black rounded-2xl border border-slate-800 group-hover:scale-110 transition duration-500">
          {icon}
        </div>

        <h3 className="text-xl font-bold text-white tracking-tight">
          {title}
        </h3>
      </div>

      <p className="text-slate-400 leading-relaxed mb-8 text-sm">
        {desc}
      </p>

      <div className="flex flex-wrap gap-x-5 gap-y-3">
        {links.map((link: any) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-blue-400 hover:text-white transition"
          >
            {link.name}
            <ArrowUpRight className="w-3 h-3" />
          </a>
        ))}
      </div>
    </div>
  );
}
