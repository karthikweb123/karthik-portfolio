"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// --- INLINE SVG COMPONENTS (Ensures no ReferenceErrors) ---

const ArrowRight = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
);

const ExternalLink = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </svg>
);

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function TechPortfolio() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // --- THREE.JS TECH-PARTICLE ENGINE ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 12;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: "#3b82f6",
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    camera.position.z = 3;

    let mouseX = 0;
    let mouseY = 0;
    const animateParticles = (event: MouseEvent) => {
      mouseX = event.clientX / window.innerWidth - 0.5;
      mouseY = event.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener("mousemove", animateParticles);

    const clock = new THREE.Clock();
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      particlesMesh.rotation.y = elapsedTime * 0.05;
      particlesMesh.rotation.x += (mouseY * 0.1 - particlesMesh.rotation.x) * 0.05;
      particlesMesh.rotation.y += (mouseX * 0.1 - particlesMesh.rotation.y) * 0.05;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // --- GSAP REVEALS ---
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(".hero-tag", { opacity: 0, y: 20, duration: 0.8 })
        .from(".hero-title", { opacity: 0, y: 40, duration: 1, ease: "power4.out" }, "-=0.4")
        .from(".hero-desc", { opacity: 0, x: -20, duration: 0.8 }, "-=0.6")
        .from(".hero-stats", { opacity: 0, y: 20, duration: 0.8 }, "-=0.6");

      gsap.from(".cyber-line", {
        scaleX: 0,
        transformOrigin: "left",
        duration: 1.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".work-section",
          start: "top 80%",
        }
      });
    }, containerRef);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", animateParticles);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      ctx.revert();
    };
  }, []);

  return (
    <main ref={containerRef} className="relative bg-[#02040a] text-white overflow-x-hidden selection:bg-blue-500/30">
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />
      
      {/* GRID OVERLAY */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none z-0" />

      {/* NAV */}
      <nav className="relative z-50 flex justify-between items-center px-8 py-8 max-w-7xl mx-auto">
        <div className="text-xl font-bold tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-sm">KN</div>
          KARTHIK
        </div>
        <div className="hidden md:flex gap-10 text-[10px] font-bold tracking-[0.2em] text-gray-500">
          <Link href="#work" className="hover:text-blue-500 transition-colors uppercase">Projects</Link>
          <Link href="#expertise" className="hover:text-blue-500 transition-colors uppercase">Expertise</Link>
          <Link href="#contact" className="hover:text-blue-500 transition-colors uppercase">Contact</Link>
        </div>
        <div className="flex gap-4">
          <Link href="https://github.com" className="text-gray-500 hover:text-white transition-colors">
            <GithubIcon size={20} />
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative z-10 min-h-[85vh] flex flex-col justify-center px-6 max-w-7xl mx-auto">
        <div className="hero-tag mb-6 w-fit px-3 py-1 border border-blue-500/20 bg-blue-500/5 rounded text-[10px] tracking-[0.3em] text-blue-400 font-bold uppercase">
          Full-Stack Web Architect
        </div>
        
        <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
          CRAFTING <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">DIGITAL</span><br />FRONTIERS
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="hero-desc text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-xl">
              Over <span className="text-white">12 years of experience</span> engineering high-performance ecosystems. 
              Specializing in WordPress, SEO-driven architecture, and conversion-centric UI/UX design.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#work" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-bold flex items-center gap-2 transition-all group">
                VIEW SYSTEMS <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          
          <div className="hero-stats hidden md:grid grid-cols-2 gap-4">
            <div className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
              <h4 className="text-blue-500 font-bold text-3xl">12+</h4>
              <p className="text-[10px] text-gray-500 tracking-[0.2em] uppercase mt-1">Years Experience</p>
            </div>
            <div className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
              <h4 className="text-blue-500 font-bold text-3xl">50+</h4>
              <p className="text-[10px] text-gray-500 tracking-[0.2em] uppercase mt-1">Global Projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section id="work" className="work-section relative z-10 py-32 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <div className="cyber-line h-[1px] w-12 bg-blue-500" />
          <span className="text-blue-500 font-bold text-xs tracking-[0.3em] uppercase">Deployment Log</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-20 uppercase">Selected Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <WorkCard
            cols="md:col-span-8"
            title="Dhruvanth Forex"
            desc="Full-lifecycle forex trading platform. Advanced UX and WP integration for financial markets."
            tags={["Fintech", "WordPress", "SEO"]}
            href="https://dhruvanthforex.com"
          />
          <WorkCard
            cols="md:col-span-4"
            title="Hathority"
            desc="Enterprise IT Solutions Branding and strategic platform design."
            tags={["Enterprise", "B2B"]}
            href="https://hathority.com"
          />
          <WorkCard
            cols="md:col-span-4"
            title="Y-Axis"
            desc="Conversion-optimized landing pages and digital strategy for immigration leaders."
            tags={["CRO", "Landing Pages"]}
            href="https://y-axis.com"
          />
          <WorkCard
            cols="md:col-span-4"
            title="Dr. Pramod Kumar"
            desc="Medical professional digital identity and patient information portal."
            tags={["Medical", "Portfolio"]}
            href="https://drpramodkumar.com"
          />
          <WorkCard
            cols="md:col-span-4"
            title="CIAS Canada"
            desc="Complex immigration consultancy platform with integrated user flows."
            tags={["Consultancy", "UI/UX"]}
            href="https://www.ciascanada.com"
          />
          <WorkCard
            cols="md:col-span-6"
            title="Xadelit"
            desc="High-performance modern business platform with custom PHP backend."
            tags={["Performance", "Custom PHP"]}
            href="https://xadelit.com"
          />
          <WorkCard
            cols="md:col-span-6"
            title="Anisan Ads"
            desc="Marketing agency visual identity and creative campaign management."
            tags={["Creative", "Agency"]}
            href="https://anisanads.com"
          />
        </div>
      </section>

      {/* EXPERTISE */}
      <section id="expertise" className="relative z-10 py-32 bg-[#05070a]/80 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16">
          <ExpertiseBlock 
            title="Development" 
            items={["WordPress (Custom Themes)", "Next.js / React", "PHP / Node.js", "API Integrations"]} 
          />
          <ExpertiseBlock 
            title="Design" 
            items={["User Experience (UX)", "Responsive Interface", "Conversion Mapping", "Branding Design"]} 
          />
          <ExpertiseBlock 
            title="Growth" 
            items={["Technical SEO", "Speed Optimization", "Lead Generation", "Analytics Tracking"]} 
          />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative z-10 py-40 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-10">READY TO <br /><span className="text-blue-600">BUILD?</span></h2>
          <p className="text-gray-400 text-xl mb-12 font-light">Currently accepting new projects for Q3 2026.</p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a href="mailto:karthikneelaram@gmail.com" className="px-10 py-5 bg-white text-black font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all">
              EMAIL ME
            </a>
            <a href="https://wa.me/919494935616" className="px-10 py-5 border border-white/20 rounded-full font-bold hover:bg-white/5 transition-all">
              WHATSAPP
            </a>
          </div>
        </div>
      </section>

      <footer className="relative z-10 py-10 text-center border-t border-white/5 text-[10px] font-bold tracking-[0.5em] text-gray-600 uppercase">
        © {new Date().getFullYear()} Karthik Neelapu // All Systems Operational
      </footer>
    </main>
  );
}

// --- SUB-COMPONENTS ---

function WorkCard({ title, desc, tags, href, cols }: any) {
  return (
    <div className={`group relative ${cols} bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-500 overflow-hidden`}>
      <div className="relative z-10">
        <h3 className="text-2xl font-bold tracking-tight mb-2 group-hover:text-blue-500 transition-colors uppercase">{title}</h3>
        <p className="text-gray-500 text-sm mb-6 line-clamp-2 font-light leading-relaxed">{desc}</p>
        <div className="flex flex-wrap gap-2 mb-10">
          {tags.map((tag: string) => (
            <span key={tag} className="px-2 py-0.5 bg-blue-500/10 rounded text-[9px] font-bold text-blue-400 border border-blue-500/20 uppercase tracking-[0.1em]">
              {tag}
            </span>
          ))}
        </div>
        <Link href={href} target="_blank" className="inline-flex items-center gap-2 text-[10px] font-black tracking-[0.2em] uppercase text-gray-400 group-hover:text-blue-500 transition-all">
          Protocol Link <ExternalLink size={12} />
        </Link>
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 blur-[60px] group-hover:bg-blue-600/10 transition-all" />
    </div>
  );
}

function ExpertiseBlock({ title, items }: { title: string, items: string[] }) {
  return (
    <div>
      <h3 className="text-blue-500 font-bold text-xs tracking-[0.3em] uppercase mb-6">{title}</h3>
      <ul className="space-y-4">
        {items.map(item => (
          <li key={item} className="text-gray-400 font-light flex items-center gap-3">
            <span className="w-1 h-1 bg-white/20 rounded-full" /> {item}
          </li>
        ))}
      </ul>
    </div>
  );
}