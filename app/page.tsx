import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Mail, Phone, Linkedin, Github, ChevronRight, Download } from 'lucide-react';

export default function PortfolioPage() {
  return (
    <div className="bg-[#0a0a08] text-[#f0ede6] font-sans selection:bg-[#c8b87a] selection:text-[#1a1508]">
      
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-[100] px-6 py-4 md:px-10 flex justify-between items-center bg-[#0a0a08]/85 backdrop-blur-xl border-b border-white/5">
        <Link href="/" className="font-serif text-2xl tracking-tighter hover:opacity-80 transition-opacity">
          Karthik.
        </Link>
        <ul className="hidden md:flex gap-8 list-none">
          {['About', 'Work', 'Experience', 'Contact'].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="text-sm font-light text-[#9a9690] hover:text-[#f0ede6] tracking-widest transition-colors">
                {item}
              </a>
            </li>
          ))}
        </ul>
        <a 
          href="https://github.com/karthikneelarapu" 
          target="_blank" 
          className="text-xs border border-white/10 px-4 py-2 rounded-full hover:border-white/25 hover:text-[#f0ede6] transition-all flex items-center gap-2 text-[#9a9690]"
        >
          GitHub <ArrowUpRight size={14} />
        </a>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-height-[100vh] flex flex-col justify-end px-6 pb-20 md:px-10 md:pb-24 overflow-hidden pt-32">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_30%,rgba(200,184,122,0.06)_0%,transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_20%_70%,rgba(74,124,89,0.04)_0%,transparent_60%)]" />
          <div 
            className="absolute inset-0 opacity-[0.15]" 
            style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)`, backgroundSize: '60px 60px' }}
          />
        </div>

        <div className="relative z-10 animate-in fade-in slide-in-from-bottom-5 duration-700">
          <div className="inline-flex items-center gap-2 bg-[#4a7c59]/15 border border-[#4a7c59]/30 rounded-full px-4 py-1.5 text-[0.7rem] text-[#7aab8a] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7aab8a] animate-pulse" />
            Available for full-time & freelance roles
          </div>
          
          <h1 className="font-serif text-5xl md:text-8xl lg:text-[7rem] leading-[0.95] tracking-tighter max-w-4xl mb-6">
            Crafting <em className="italic text-[#c8b87a] not-italic">interfaces</em><br />that convert & endure.
          </h1>
          
          <p className="text-[#9a9690] text-lg font-light max-w-lg leading-relaxed mb-10">
            Karthik Neelarapu — UI/UX Designer and Frontend Developer based in Hyderabad. 
            I build high-performance digital products using React, Next.js, and a sharp eye for detail.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#work" className="bg-[#c8b87a] text-[#1a1508] px-7 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-transform active:scale-95">
              View my work
            </a>
            <a href="#contact" className="border border-white/10 text-[#9a9690] px-7 py-3 rounded-full text-sm font-light hover:border-white/25 hover:text-white transition-all">
              Let's talk
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 right-10 hidden md:flex items-center gap-3 text-[0.65rem] text-[#5a5754] uppercase tracking-[0.2em] [writing-mode:vertical-rl]">
          <span className="w-[1px] h-10 bg-gradient-to-t from-[#5a5754] to-transparent" />
          scroll
        </div>
      </section>

      <hr className="border-white/5 mx-6 md:mx-10" />

      {/* ABOUT SECTION */}
      <section id="about" className="px-6 py-24 md:px-10">
        <div className="text-[0.65rem] tracking-[0.2em] text-[#5a5754] uppercase flex items-center gap-4 mb-8">
          About me <span className="h-[1px] w-10 bg-[#5a5754]" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl">
          <div className="space-y-6">
            <p className="text-[#9a9690] text-lg font-light leading-relaxed">
              I'm a <strong className="text-[#f0ede6] font-medium">self-taught UI/UX Designer and Frontend Developer</strong> with a passion for turning complex problems into clean digital products.
            </p>
            <p className="text-[#9a9690] text-lg font-light leading-relaxed">
              Over the years, I've delivered everything from <strong className="text-[#f0ede6] font-medium">fintech banking interfaces</strong> to <strong className="text-[#f0ede6] font-medium">enterprise IT platforms</strong>.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-8">
              {[
                { num: '15+', label: 'Projects delivered' },
                { num: '4+', label: 'Years experience' },
                { num: '5', label: 'Industries' },
                { num: '0', label: 'Missed deadlines' },
              ].map((stat) => (
                <div key={stat.label} className="bg-[#1e1e1b] border border-white/5 p-5 rounded-xl">
                  <div className="font-serif text-4xl text-[#c8b87a] mb-1">{stat.num}</div>
                  <div className="text-[0.7rem] text-[#5a5754] uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <SkillGroup title="Design" tags={['UI/UX Design', 'Figma', 'Prototyping', 'Responsive Design', 'Photoshop']} />
            <SkillGroup title="Frontend" tags={['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML / CSS']} />
            <SkillGroup title="Backend & Platforms" tags={['Node.js', 'PHP', 'MERN Stack', 'WordPress', 'Shopify', 'REST APIs']} />
          </div>
        </div>
      </section>

      <hr className="border-white/5 mx-6 md:mx-10" />

      {/* WORK SECTION */}
      <section id="work" className="px-6 py-24 md:px-10">
        <div className="text-[0.65rem] tracking-[0.2em] text-[#5a5754] uppercase flex items-center gap-4 mb-8">
          Selected work <span className="h-[1px] w-10 bg-[#5a5754]" />
        </div>
        <h2 className="font-serif text-4xl md:text-5xl mb-4">Projects that shipped.</h2>
        <p className="text-[#9a9690] font-light mb-12">Real products for real clients — built to perform.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl">
          <ProjectCard 
            title="Hathority"
            category="Enterprise · IT Solutions"
            description="Full-stack enterprise platform for an IT consultancy. Focus on clarity, trust signals, and fast load times."
            tags={['React', 'Next.js', 'TypeScript']}
            link="https://hathority.com/"
            featured
          />
          <ProjectCard 
            title="Dhruvanth Forex"
            category="Fintech · Forex"
            description="High-trust forex interface designed for credibility. Secure flows and real-time rate displays."
            tags={['UI/UX', 'React', 'Fintech']}
            link="https://dhruvanthforex.com/"
          />
          <ProjectCard 
            title="Creekside International"
            category="EdTech · Education"
            description="Modern school website with multilingual support and interactive course browsing."
            tags={['Next.js', 'Accessibility']}
            link="https://creekside.edu.in/"
          />
          <ProjectCard 
            title="Anisan Ads"
            category="SaaS · Ad Tech"
            description="High-conversion landing page for an ad-tech SaaS. Optimized for speed and CTA performance."
            tags={['SaaS', 'Tailwind']}
            link="https://anisanads.com/"
          />
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="bg-[#111110] px-6 py-24 md:px-10 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center md:text-left">
          <div className="text-[0.65rem] tracking-[0.2em] text-[#5a5754] uppercase flex items-center justify-center md:justify-start gap-4 mb-8">
            Contact <span className="h-[1px] w-10 bg-[#5a5754]" />
          </div>
          <h2 className="font-serif text-4xl md:text-6xl mb-6 leading-tight">
            Let's build something <em className="italic text-[#c8b87a] not-italic">great</em> together.
          </h2>
          <p className="text-[#9a9690] font-light mb-10">
            Open to full-time frontend roles, contract projects, and long-term collaborations. Based in Hyderabad — happy to work remotely.
          </p>

          <div className="space-y-4">
            <ContactLink icon={<Mail size={18}/>} label="Email" value="karthikneelaram@gmail.com" href="mailto:karthikneelaram@gmail.com" />
            <ContactLink icon={<Linkedin size={18}/>} label="LinkedIn" value="linkedin.com/in/karthikneelarapu" href="https://linkedin.com/in/karthikneelarapu" />
            <ContactLink icon={<Github size={18}/>} label="GitHub" value="github.com/karthikneelarapu" href="https://github.com/karthikneelarapu" />
          </div>
        </div>
      </section>

      <footer className="px-6 py-10 md:px-10 flex flex-col md:row justify-between items-center gap-6 border-t border-white/5 text-[0.7rem] text-[#5a5754]">
        <span>© 2026 Karthik Neelarapu · Hyderabad, India</span>
        <div className="flex gap-8">
          {['About', 'Work', 'Experience', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#9a9690] transition-colors">{item}</a>
          ))}
        </div>
      </footer>
    </div>
  );
}

/* Sub-components for cleaner code */

function SkillGroup({ title, tags }: { title: string, tags: string[] }) {
  return (
    <div>
      <div className="text-[0.65rem] tracking-widest text-[#8b7d4a] uppercase mb-4">{title}</div>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <span key={tag} className="px-4 py-1.5 rounded-full bg-[#1a1a17] border border-white/5 text-[0.75rem] text-[#9a9690] font-light">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ title, category, description, tags, link, featured = false }: any) {
  return (
    <a 
      href={link} 
      target="_blank" 
      className={`group relative p-8 rounded-2xl border border-white/5 bg-[#1e1e1b] transition-all duration-300 hover:border-white/10 hover:-translate-y-1 ${featured ? 'md:col-span-2 bg-gradient-to-br from-[#1e1e1b] to-[#1a1a14]' : ''}`}
    >
      <div className="text-[0.6rem] tracking-[0.15em] text-[#8b7d4a] uppercase mb-3">{category}</div>
      <h3 className="font-serif text-2xl mb-3">{title}</h3>
      <p className="text-[#9a9690] text-sm font-light mb-6 leading-relaxed line-clamp-3">{description}</p>
      <div className="flex flex-wrap gap-2 mb-8">
        {tags.map((tag: string) => (
          <span key={tag} className="text-[0.65rem] px-2.5 py-1 rounded-full bg-[#1a1a17] border border-white/5 text-[#5a5754]">{tag}</span>
        ))}
      </div>
      <div className="mt-auto flex items-center gap-2 text-[#c8b87a] text-sm">
        Visit live site <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </div>
    </a>
  );
}

function ContactLink({ icon, label, value, href }: any) {
  return (
    <a href={href} target="_blank" className="flex items-center justify-between p-5 rounded-xl bg-[#1e1e1b] border border-white/5 hover:border-white/10 transition-all group">
      <div className="flex items-center gap-4 text-left">
        <div className="w-10 h-10 rounded-lg bg-[#1a1a17] border border-white/5 flex items-center justify-center text-[#9a9690]">
          {icon}
        </div>
        <div>
          <div className="text-[0.65rem] text-[#5a5754] uppercase tracking-wider">{label}</div>
          <div className="text-sm font-light">{value}</div>
        </div>
      </div>
      <ChevronRight size={18} className="text-[#5a5754] group-hover:translate-x-1 transition-transform" />
    </a>
  );
}
