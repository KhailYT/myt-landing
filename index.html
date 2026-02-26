import React, { useEffect, useRef, useState } from 'react';
import { 
  ArrowRight, 
  Cpu, 
  Globe, 
  Zap, 
  Target, 
  Layers, 
  Phone, 
  Mail 
} from 'lucide-react';

/**
 * PRESET A: ORGANIC TECH
 * Palette: Moss #2E4036, Clay #CC5833, Cream #F2F0E9, Charcoal #1A1A1A
 * * NOTE: Accessing GSAP and ScrollTrigger via window object to bypass 
 * environment-specific module resolution issues.
 */

// --- Global Noise Overlay Component ---
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

// --- Component A: NAVBAR ---
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-700 ease-out px-6 py-3 rounded-full flex items-center justify-between w-[95%] max-w-5xl 
      ${isScrolled 
        ? 'bg-cream/60 backdrop-blur-xl border border-moss/10 shadow-lg translate-y-0' 
        : 'bg-transparent -translate-y-2'}`}
    >
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

      <button className="bg-clay hover:bg-moss text-cream px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-500 transform hover:scale-105 active:scale-95 shadow-lg">
        Contact
      </button>
    </nav>
  );
};

// --- Component B: HERO ---
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
        <img 
          src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=2000" 
          alt="Organic Tech Background" 
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent" />
      </div>

      <div className="relative z-10 w-full px-8 md:px-20 pb-20">
        <div className="max-w-6xl">
          <h1 className="flex flex-col mb-8">
            <span className="hero-line-1 font-sans font-bold text-cream text-4xl md:text-6xl uppercase tracking-tighter leading-none">
              Transformation is the
            </span>
            <span className="hero-line-2 font-serif italic text-clay text-7xl md:text-[12rem] leading-[0.8] mt-2">
              Standard.
            </span>
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

// --- Component C: FEATURES ---
const Features = () => {
  const [shuffleItems, setShuffleItems] = useState([
    { label: "Margin Growth", value: "+12.4%" },
    { label: "OpEx Reduction", value: "-18.2%" },
    { label: "System Latency", value: "-45.0%" }
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setShuffleItems(prev => {
        const next = [...prev];
        const item = next.pop();
        next.unshift(item);
        return next;
      });
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const [telemetry, setTelemetry] = useState("");
  const fullMessage = "ANALYZING ROI VECTORS... DATA SYNC COMPLETE. DEPLOYING SPECIALIZED METHODOLOGY X-7. RESULTS: MEASURABLE.";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTelemetry(fullMessage.slice(0, i));
      i = (i + 1) % (fullMessage.length + 1);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="solutions" className="py-32 px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Diagnostic Shuffler */}
          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-moss/5 flex flex-col justify-between h-[500px] group hover:shadow-xl transition-all duration-700">
            <div>
              <div className="w-12 h-12 bg-moss/5 rounded-2xl flex items-center justify-center text-moss mb-8">
                <Target size={24} />
              </div>
              <h3 className="font-sans font-bold text-2xl text-moss mb-4 tracking-tight">Tangible ROI</h3>
              <p className="text-moss/60 text-sm leading-relaxed">Quantifiable financial results driven by objective data analytics and precision execution.</p>
            </div>
            
            <div className="relative h-40 overflow-hidden flex flex-col items-center">
              {shuffleItems.map((item, idx) => (
                <div 
                  key={item.label}
                  className="absolute w-full bg-moss text-cream p-5 rounded-3xl flex justify-between items-center transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                  style={{ 
                    transform: `translateY(${idx * 45}px) scale(${1 - idx * 0.05})`,
                    opacity: 1 - idx * 0.3,
                    zIndex: 10 - idx
                  }}
                >
                  <span className="font-mono text-[10px] uppercase tracking-widest">{item.label}</span>
                  <span className="font-sans font-bold text-lg">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Telemetry Typewriter */}
          <div className="bg-moss p-10 rounded-[2.5rem] shadow-2xl flex flex-col justify-between h-[500px] border border-white/5">
            <div>
              <div className="w-12 h-12 bg-clay rounded-2xl flex items-center justify-center text-cream mb-8 shadow-lg">
                <Layers size={24} />
              </div>
              <h3 className="font-sans font-bold text-2xl text-cream mb-4 tracking-tight">Unique Methodologies</h3>
              <p className="text-cream/60 text-sm leading-relaxed">Proprietary frameworks designed for high-complexity environments and accelerated growth.</p>
            </div>

            <div className="bg-charcoal/50 rounded-3xl p-6 font-mono text-[11px] text-clay/80 h-32 relative overflow-hidden">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-cream/30 uppercase tracking-widest">Live Protocol Feed</span>
              </div>
              <p className="leading-relaxed">{telemetry}<span className="inline-block w-1.5 h-3 bg-clay ml-1 animate-pulse" /></p>
            </div>
          </div>

          {/* Card 3: Cursor Protocol Scheduler */}
          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-moss/5 flex flex-col justify-between h-[500px] group hover:shadow-xl transition-all duration-700">
            <div>
              <div className="w-12 h-12 bg-moss/5 rounded-2xl flex items-center justify-center text-moss mb-8">
                <Zap size={24} />
              </div>
              <h3 className="font-sans font-bold text-2xl text-moss mb-4 tracking-tight">Accelerated Transformation</h3>
              <p className="text-moss/60 text-sm leading-relaxed">Objective insights translated into immediate, impactful organizational shifts.</p>
            </div>

            <div className="bg-cream/50 rounded-3xl p-6">
              <div className="grid grid-cols-7 gap-2 mb-4">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                  <div key={day+i} className={`h-8 rounded-lg flex items-center justify-center text-[9px] font-bold ${i === 2 ? 'bg-clay text-cream' : 'bg-moss/10 text-moss/30'}`}>
                    {day}
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <div className="h-2 bg-moss/10 rounded-full w-full overflow-hidden">
                  <div className="h-full bg-clay w-2/3 animate-[width_3s_ease-in-out_infinite]" />
                </div>
                <div className="flex justify-between text-[8px] font-mono text-moss/40">
                  <span>DEPLOYMENT_PHASE</span>
                  <span>72% COMPLETE</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- Component D: PHILOSOPHY ---
const Philosophy = () => {
  const philRef = useRef(null);

  useEffect(() => {
    const gsap = window.gsap;
    if (!gsap) return;

    const ctx = gsap.context(() => {
      gsap.from(".phil-text", {
        scrollTrigger: {
          trigger: philRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out"
      });
    }, philRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="philosophy" ref={philRef} className="relative py-40 px-8 bg-charcoal overflow-hidden text-cream">
      <img 
        src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=2000" 
        alt="Philosophy Texture" 
        className="absolute inset-0 w-full h-full object-cover opacity-10 grayscale mix-blend-overlay"
      />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="phil-text font-mono text-xs uppercase tracking-[0.4em] text-clay mb-4">The MYT Ethos</p>
          <h2 className="phil-text font-sans font-bold text-3xl md:text-5xl max-w-3xl leading-tight opacity-70">
            Most consultancy focuses on: <span className="text-cream italic">incremental optimization of legacy systems.</span>
          </h2>
        </div>
        
        <h2 className="phil-text font-serif italic text-6xl md:text-[8rem] leading-[0.9] text-cream">
          We focus on: <span className="text-clay">Absolute Transformation</span> through <span className="underline decoration-1 underline-offset-8">measurable</span> biological rigor.
        </h2>
      </div>
    </section>
  );
};

// --- Component E: PROTOCOL (Sticky Stacking Archive) ---
const Protocol = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    if (!gsap || !ScrollTrigger) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".protocol-card");
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;
        
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          pin: true,
          pinSpacing: false,
          scrub: true,
          onUpdate: (self) => {
            gsap.to(card, {
              scale: 1 - self.progress * 0.1,
              opacity: 1 - self.progress * 0.5,
              filter: `blur(${self.progress * 20}px)`,
              overwrite: "auto"
            });
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const protocolSteps = [
    {
      num: "01",
      title: "Diagnostic Decomposition",
      desc: "A clinical audit of organizational inefficiencies using our proprietary ROI algorithms.",
      icon: <Cpu className="text-clay w-10 h-10" />,
      anim: (
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-10">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 5" className="animate-[spin_60s_linear_infinite]" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" className="animate-pulse" />
        </svg>
      )
    },
    {
      num: "02",
      title: "Strategic Synthesis",
      desc: "Engineering unique methodologies that bridge the gap between abstract goals and tangible returns.",
      icon: <Globe className="text-clay w-10 h-10" />,
      anim: (
        <div className="w-full h-full flex items-center justify-center opacity-10">
          <div className="w-[80%] h-[1px] bg-moss relative overflow-hidden">
            <div className="absolute inset-0 bg-clay w-1/4 animate-[translateX_3s_linear_infinite]" />
          </div>
        </div>
      )
    },
    {
      num: "03",
      title: "Accelerated Deployment",
      desc: "Rapid-cycle integration with objective insight loops to ensure transformation is permanent.",
      icon: <Zap className="text-clay w-10 h-10" />,
      anim: (
        <svg viewBox="0 0 100 40" className="w-full h-full opacity-10">
          <path d="M0 20 Q 25 0 50 20 T 100 20" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
          <path d="M0 25 Q 25 5 50 25 T 100 25" fill="none" stroke="currentColor" strokeWidth="1" className="animate-pulse" />
        </svg>
      )
    }
  ];

  return (
    <section id="protocol" ref={containerRef} className="bg-cream">
      {protocolSteps.map((step, idx) => (
        <div key={idx} className="protocol-card h-screen w-full flex items-center justify-center px-8">
          <div className="bg-white w-full max-w-6xl aspect-[16/9] md:aspect-auto md:min-h-[600px] rounded-[3rem] shadow-2xl border border-moss/5 overflow-hidden flex flex-col md:flex-row p-12 md:p-24 relative">
            <div className="absolute top-12 right-12 font-mono text-moss/10 text-8xl font-bold leading-none">{step.num}</div>
            
            <div className="flex-1 flex flex-col justify-center relative z-10">
              <div className="mb-8">{step.icon}</div>
              <h3 className="font-sans font-bold text-4xl md:text-6xl text-moss mb-6 leading-tight tracking-tighter">
                {step.title}
              </h3>
              <p className="text-moss/60 text-lg md:text-xl max-w-md leading-relaxed">
                {step.desc}
              </p>
            </div>
            
            <div className="flex-1 hidden md:flex items-center justify-center">
              <div className="w-80 h-80 relative">
                {step.anim}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

// --- Component F: CONTACT ---
const Contact = () => {
  return (
    <section id="contact" className="py-40 px-8 bg-cream border-t border-moss/10">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-clay mb-8">Secure Access</p>
        <h2 className="font-serif italic text-6xl md:text-8xl text-moss mb-12">Begin the <span className="text-clay underline decoration-1 underline-offset-[16px]">Sequence.</span></h2>
        <p className="text-moss/60 text-lg mb-16 max-w-2xl mx-auto">
          Submit your organizational requirements below. Our technical team will provide an objective diagnostic brief within 24 hours.
        </p>
        
        <div className="bg-white p-4 rounded-full shadow-2xl flex flex-col md:flex-row gap-4 max-w-2xl mx-auto group border border-moss/5 focus-within:ring-4 ring-clay/5 transition-all">
          <input 
            type="email" 
            placeholder="Executive Email Address" 
            className="flex-1 bg-transparent px-8 py-4 outline-none font-sans text-moss placeholder:text-moss/30"
          />
          <button className="bg-clay text-cream px-10 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-moss transition-all duration-500 shadow-lg">
            Submit Protocol
          </button>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-12 text-moss/40 font-mono text-[10px] uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <Phone size={14} className="text-clay" /> +1 (800) MYT-ROI-X
          </div>
          <div className="flex items-center gap-2">
            <Mail size={14} className="text-clay" /> INTEL@MYT-ENT.COM
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /> 24/7 OPERATIONS
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Component G: FOOTER ---
const Footer = () => {
  return (
    <footer className="bg-charcoal pt-32 pb-16 px-8 md:px-20 text-cream rounded-t-[4rem]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-clay rounded-xl flex items-center justify-center">
                <span className="text-cream font-bold">M</span>
              </div>
              <span className="font-bold tracking-tighter text-2xl">
                MYT ENTERPRISES<span className="text-clay">.</span>
              </span>
            </div>
            <p className="text-cream/40 max-w-sm leading-relaxed text-sm">
              Accelerating transformation through unique methodologies and clinical ROI precision. Engineered for high-complexity enterprise environments.
            </p>
          </div>
          
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-clay mb-8">Architecture</h4>
            <ul className="space-y-4 text-sm text-cream/60">
              <li><a href="#" className="hover:text-cream transition-colors">Solutions</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">Philosophy</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">Protocol</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">Diagnostic Brief</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-clay mb-8">Legal Artifacts</h4>
            <ul className="space-y-4 text-sm text-cream/60">
              <li><a href="#" className="hover:text-cream transition-colors">Privacy Protocol</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">Terms of Access</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">Cookie Ledger</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-cream/40">SYSTEM OPERATIONAL: NODE_04.V2</span>
          </div>
          <p className="font-mono text-[10px] text-cream/20 tracking-widest">
            © 2026 MYT ENTERPRISES — ALL RIGOR RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

// --- Main App Component ---
export default function App() {
  // Injecting GSAP via script if not present (Safety for Canvas environment)
  useEffect(() => {
    if (!window.gsap) {
      const gsapScript = document.createElement('script');
      gsapScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
      document.head.appendChild(gsapScript);

      const stScript = document.createElement('script');
      stScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js";
      document.head.appendChild(stScript);
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
      <Contact />
      <Footer />
      
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700;800&family=Outfit:wght@300;600&family=Cormorant+Garamond:ital,wght@1,400;1,700&family=IBM+Plex+Mono:wght@400;500&display=swap');
        
        :root {
          --moss: #2E4036;
          --clay: #CC5833;
          --cream: #F2F0E9;
          --charcoal: #1A1A1A;
        }

        body {
          background-color: var(--cream);
          scroll-behavior: smooth;
        }

        .font-sans { font-family: 'Plus Jakarta Sans', sans-serif; }
        .font-serif { font-family: 'Cormorant Garamond', serif; }
        .font-mono { font-family: 'IBM Plex Mono', monospace; }

        @keyframes width {
          0% { width: 0%; }
          50% { width: 100%; }
          100% { width: 0%; }
        }

        @keyframes translateX {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }

        ::-webkit-scrollbar {
          width: 0px;
          background: transparent;
        }
      `}} />
    </div>
  );
}
