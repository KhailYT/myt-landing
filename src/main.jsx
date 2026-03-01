import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { createRoot } from 'react-dom/client';
import gsap from 'gsap';
import { 
  Menu, 
  X,
  ArrowRight, 
  Cpu, 
  Globe, 
  Zap, 
  Target, 
  Layers, 
  Phone, 
  Mail,
  Shield,
  ChevronRight 
} from 'lucide-react';
import './index.css';

/**
 * ARCHITECTURAL NOTE:
 * To ensure the preview renders correctly in this environment, all components, 
 * styling, and logic have been consolidated into this single file. 
 * For your local GitHub/WordPress project, this content belongs in App.jsx.
 */

// --- Global Noise Overlay ---
const Noise = () => (
  <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.05]">
    <svg width="100%" height="100%">
      <filter id="noiseFilter">
        <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
  </div>
);

// --- Navbar Component ---
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-700 ease-out px-6 py-3 rounded-full flex items-center justify-between w-[95%] max-w-5xl ${isScrolled ? 'bg-cream/60 backdrop-blur-xl border border-moss/10 shadow-lg' : 'bg-transparent'}`}>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-moss rounded-lg flex items-center justify-center">
          <span className="text-cream font-bold text-xs">M</span>
        </div>
        <span className={`font-bold tracking-tighter text-lg transition-colors duration-500 ${isScrolled ? 'text-moss' : 'text-cream'}`}>
          MYT<span className="text-clay">.</span>
        </span>
      </div>
      <div className={`hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors duration-500 ${isScrolled ? 'text-moss/70' : 'text-cream/70'}`}>
        <a href="#solutions" className="hover:text-clay transition-colors">Solutions</a>
        <a href="#philosophy" className="hover:text-clay transition-colors">Philosophy</a>
        <a href="#protocol" className="hover:text-clay transition-colors">Protocol</a>
      </div>
      <button className="bg-clay hover:bg-moss text-cream px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-500 transform hover:scale-105 shadow-lg">
        Contact
      </button>
    </nav>
  );
};

// --- Hero Component ---
const Hero = () => {
  const scope = useRef(null);
  useEffect(() => {
    const gsap = window.gsap;
    if (!gsap) return;
    const ctx = gsap.context(() => {
      gsap.from(".hero-line-1", { y: 100, opacity: 0, duration: 1.2, ease: "power4.out", delay: 0.2 });
      gsap.from(".hero-line-2", { y: 100, opacity: 0, duration: 1.2, ease: "power4.out", delay: 0.4 });
      gsap.from(".hero-desc", { y: 20, opacity: 0, duration: 1, ease: "power3.out", delay: 0.8 });
      gsap.from(".hero-cta", { y: 20, opacity: 0, duration: 1, ease: "power3.out", delay: 1 });
    }, scope);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={scope} className="relative h-[100dvh] w-full flex items-end overflow-hidden bg-charcoal">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=2000" alt="BG" className="w-full h-full object-cover scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent" />
      </div>
      <div className="relative z-10 w-full px-8 md:px-20 pb-20">
        <div className="max-w-6xl">
          <h1 className="flex flex-col mb-8">
            <span className="hero-line-1 font-sans font-bold text-cream text-4xl md:text-6xl uppercase tracking-tighter leading-none">Transformation is the</span>
            <span className="hero-line-2 font-serif italic text-clay text-7xl md:text-[12rem] leading-[0.8] mt-2">Standard.</span>
          </h1>
          <p className="hero-desc font-sans text-cream/70 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            MYT Enterprises engineers tangible ROI through specialized methodologies and accelerated transformation.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="inline-flex items-center gap-4 bg-cream text-moss px-8 py-4 rounded-full font-bold group hover:bg-clay hover:text-cream transition-all duration-500 shadow-2xl">
              Initiate Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Features Component ---
const Features = () => {
  const [items, setItems] = useState([{l: "Margin Growth", v: "+12.4%"}, {l: "OpEx Reduction", v: "-18.2%"}, {l: "Latency", v: "-45%"}]);
  useEffect(() => {
    const t = setInterval(() => setItems(p => { const n = [...p]; n.unshift(n.pop()); return n; }), 3000);
    return () => clearInterval(t);
  }, []);

  const [tele, setTele] = useState("");
  const msg = "ANALYZING ROI VECTORS... DATA SYNC COMPLETE. DEPLOYING SPECIALIZED METHODOLOGY X-7. RESULTS: MEASURABLE.";
  useEffect(() => {
    let i = 0;
    const t = setInterval(() => { setTele(msg.slice(0, i)); i = (i + 1) % (msg.length + 1); }, 100);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="solutions" className="py-32 px-8 bg-cream">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-moss/5 flex flex-col justify-between h-[500px]">
          <div><div className="w-12 h-12 bg-moss/5 rounded-2xl flex items-center justify-center text-moss mb-8"><Target size={24}/></div><h3 className="font-sans font-bold text-2xl mb-4">Tangible ROI</h3><p className="text-moss/60 text-sm">Quantifiable financial results driven by objective data analytics.</p></div>
          <div className="relative h-40 overflow-hidden">
            {items.map((it, idx) => (
              <div key={it.l} className="absolute w-full bg-moss text-cream p-5 rounded-3xl flex justify-between items-center transition-all duration-1000" style={{ transform: `translateY(${idx * 45}px) scale(${1 - idx * 0.05})`, opacity: 1 - idx * 0.3, zIndex: 10 - idx }}>
                <span className="font-mono text-[10px] uppercase tracking-widest">{it.l}</span><span className="font-sans font-bold">{it.v}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-moss p-10 rounded-[2.5rem] shadow-2xl flex flex-col justify-between h-[500px]">
          <div><div className="w-12 h-12 bg-clay rounded-2xl flex items-center justify-center text-cream mb-8"><Layers size={24}/></div><h3 className="font-sans font-bold text-2xl text-cream mb-4">Unique Methodologies</h3><p className="text-cream/60 text-sm">Proprietary frameworks designed for high-complexity environments.</p></div>
          <div className="bg-charcoal/50 rounded-3xl p-6 font-mono text-[11px] text-clay/80 h-32 overflow-hidden">
            <div className="flex items-center gap-2 mb-3"><div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"/><span className="text-cream/30 uppercase">Live Protocol Feed</span></div>
            <p>{tele}<span className="inline-block w-1.5 h-3 bg-clay ml-1 animate-pulse"/></p>
          </div>
        </div>
        <div className="bg-white p-10 rounded-[2.5rem] border border-moss/5 flex flex-col justify-between h-[500px]">
          <div><div className="w-12 h-12 bg-moss/5 rounded-2xl flex items-center justify-center text-moss mb-8"><Zap size={24}/></div><h3 className="font-sans font-bold text-2xl mb-4">Accelerated Insights</h3><p className="text-moss/60 text-sm">Objective insights translated into immediate organizational shifts.</p></div>
          <div className="bg-cream/50 rounded-3xl p-6">
            <div className="grid grid-cols-7 gap-2 mb-4">
              {['S','M','T','W','T','F','S'].map((d, i) => <div key={i} className={`h-8 rounded-lg flex items-center justify-center text-[9px] font-bold ${i===2?'bg-clay text-cream':'bg-moss/10 text-moss/30'}`}>{d}</div>)}
            </div>
            <div className="h-2 bg-moss/10 rounded-full w-full overflow-hidden"><div className="h-full bg-clay w-2/3 animate-[width_3s_ease-in-out_infinite]"/></div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Philosophy Component ---
const Philosophy = () => {
  const ref = useRef(null);
  useEffect(() => {
    const gsap = window.gsap;
    if (!gsap) return;
    const ctx = gsap.context(() => {
      gsap.from(".phil-text", { scrollTrigger: { trigger: ref.current, start: "top 80%" }, y: 40, opacity: 0, stagger: 0.2, duration: 1 });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="philosophy" ref={ref} className="relative py-40 px-8 bg-charcoal overflow-hidden text-cream">
      <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=2000" alt="T" className="absolute inset-0 w-full h-full object-cover opacity-10 grayscale mix-blend-overlay" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <p className="phil-text font-mono text-xs uppercase tracking-[0.4em] text-clay mb-4">The MYT Ethos</p>
        <h2 className="phil-text font-sans font-bold text-3xl md:text-5xl max-w-3xl leading-tight opacity-70 mb-12">
          Most consultancy focuses on: <span className="text-cream italic">incremental optimization of legacy systems.</span>
        </h2>
        <h2 className="phil-text font-serif italic text-6xl md:text-[8rem] leading-[0.9]">
          We focus on: <span className="text-clay">Absolute Transformation</span> through measurable rigor.
        </h2>
      </div>
    </section>
  );
};

// --- Protocol Component ---
const Protocol = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    const gsap = window.gsap;
    const ST = window.ScrollTrigger;
    if (!gsap || !ST) return;
    gsap.registerPlugin(ST);
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".p-card");
      cards.forEach((c, i) => {
        if (i === cards.length - 1) return;
        ST.create({
          trigger: c, start: "top top", pin: true, pinSpacing: false, scrub: true,
          onUpdate: (self) => gsap.to(c, { scale: 1 - self.progress * 0.1, opacity: 1 - self.progress * 0.5, filter: `blur(${self.progress * 20}px)`, overwrite: "auto" })
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const steps = [
    {n: "01", t: "Diagnostic Decomposition", d: "Clinical audit of organizational inefficiencies.", i: <Cpu className="text-clay w-10 h-10"/>},
    {n: "02", t: "Strategic Synthesis", d: "Engineering unique methodologies for tangible returns.", i: <Globe className="text-clay w-10 h-10"/>},
    {n: "03", t: "Accelerated Deployment", d: "Rapid-cycle integration with objective insight loops.", i: <Zap className="text-clay w-10 h-10"/>}
  ];

  return (
    <section id="protocol" ref={containerRef} className="bg-cream">
      {steps.map((s, idx) => (
        <div key={idx} className="p-card h-screen w-full flex items-center justify-center px-8">
          <div className="bg-white w-full max-w-6xl min-h-[500px] rounded-[3rem] shadow-2xl border border-moss/5 flex flex-col md:flex-row p-12 md:p-24 relative overflow-hidden">
            <div className="absolute top-12 right-12 font-mono text-moss/10 text-8xl font-bold">{s.n}</div>
            <div className="flex-1 flex flex-col justify-center">
              <div className="mb-8">{s.i}</div>
              <h3 className="font-sans font-bold text-4xl md:text-6xl text-moss mb-6 leading-tight tracking-tighter">{s.t}</h3>
              <p className="text-moss/60 text-lg md:text-xl max-w-md leading-relaxed">{s.d}</p>
            </div>
            <div className="flex-1 hidden md:flex items-center justify-center opacity-10">
              <div className="w-80 h-80 border-4 border-dashed border-moss rounded-full animate-[spin_60s_linear_infinite]" />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

// --- Footer ---
const Footer = () => (
  <footer className="bg-charcoal pt-32 pb-16 px-8 text-cream rounded-t-[4rem]">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 pt-12">
      <div className="flex items-center gap-2"><div className="w-8 h-8 bg-clay rounded-lg flex items-center justify-center">M</div><span className="font-bold tracking-tighter">MYT ENTERPRISES<span className="text-clay">.</span></span></div>
      <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"/><span className="font-mono text-[10px] uppercase text-cream/40">SYSTEM OPERATIONAL: NODE_04</span></div>
      <p className="font-mono text-[10px] text-cream/20">© 2026 MYT ENTERPRISES — ALL RIGOR RESERVED.</p>
    </div>
  </footer>
);

// --- Main App Entry ---
const App = () => {
  useEffect(() => {
    if (!window.gsap) {
      const g = document.createElement('script'); g.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"; document.head.appendChild(g);
      const s = document.createElement('script'); s.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"; document.head.appendChild(s);
    }
  }, []);

  return (
    <div className="font-sans antialiased text-moss selection:bg-clay selection:text-cream">
      <Noise />
      <Navbar />
      <Hero />
      <Features />
      <Philosophy />
      <Protocol />
      <section id="contact" className="py-40 px-8 bg-cream text-center">
        <h2 className="font-serif italic text-6xl md:text-8xl mb-12">Begin the <span className="text-clay underline">Sequence.</span></h2>
        <div className="bg-white p-4 rounded-full shadow-2xl flex max-w-2xl mx-auto border border-moss/5">
          <input type="email" placeholder="Executive Email" className="flex-1 bg-transparent px-8 outline-none" />
          <button className="bg-clay text-cream px-10 py-4 rounded-full font-bold uppercase text-xs tracking-widest">Submit</button>
        </div>
      </section>
      <Footer />
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700;800&family=Cormorant+Garamond:ital,wght@1,400;1,700&family=IBM+Plex+Mono:wght@400;500&display=swap');
        :root { --moss: #2E4036; --clay: #CC5833; --cream: #F2F0E9; --charcoal: #1A1A1A; }
        body { background-color: var(--cream); scroll-behavior: smooth; }
        .font-sans { font-family: 'Plus Jakarta Sans', sans-serif; }
        .font-serif { font-family: 'Cormorant Garamond', serif; }
        .font-mono { font-family: 'IBM Plex Mono', monospace; }
        ::-webkit-scrollbar { width: 0px; background: transparent; }
        @keyframes width { 0% { width: 0%; } 50% { width: 100%; } 100% { width: 0%; } }
      `}} />
    </div>
  );
};

export default App;

import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(
  <App />
)
