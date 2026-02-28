
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, MoveUpRight, Zap, Target, Layers, Cpu, Globe, CheckCircle2 } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[90%] max-w-5xl rounded-full px-6 py-3 flex items-center justify-between ${scrolled ? 'glass-nav shadow-lg' : 'bg-transparent'}`}>
      <div className="font-outfit font-bold text-moss tracking-tighter text-xl">MYT<span className="text-clay">.</span></div>
      <div className="hidden md:flex gap-8 text-sm font-medium text-moss/80">
        <a href="#features" className="hover:text-clay transition-colors">Solutions</a>
        <a href="#philosophy" className="hover:text-clay transition-colors">Philosophy</a>
        <a href="#protocol" className="hover:text-clay transition-colors">Protocol</a>
      </div>
      <button className="bg-moss text-cream px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest magnetic-btn">
        Initiate
      </button>
    </nav>
  );
};

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-up", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out"
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative h-[100dvh] w-full overflow-hidden flex items-end pb-24 px-8 md:px-20">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2000" 
          className="w-full h-full object-cover" 
          alt="Organic Texture"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
      </div>
      
      <div className="relative z-10 max-w-4xl">
        <h1 className="flex flex-col">
          <span className="hero-up font-outfit font-bold text-cream text-3xl md:text-5xl uppercase tracking-tighter mb-2">
            Transformation is the
          </span>
          <span className="hero-up font-serif italic text-clay text-7xl md:text-[10rem] leading-[0.85] mb-8">
            Standard.
          </span>
        </h1>
        <p className="hero-up font-sans text-cream/70 text-lg max-w-md mb-10 leading-relaxed">
          MYT Enterprises engineers tangible ROI through specialized methodologies and objective insights.
        </p>
        <button className="hero-up bg-clay text-cream px-8 py-4 rounded-full font-bold flex items-center gap-3 magnetic-btn group">
          Secure Consultation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

const Features = () => {
  // Card 1: Diagnostic Shuffler
  const [shuffle, setShuffle] = useState([
    { id: 1, label: "Revenue Delta", val: "+24%" },
    { id: 2, label: "Op-Ex Lean", val: "-18%" },
    { id: 3, label: "Growth Velocity", val: "3.2x" }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShuffle(prev => {
        const next = [...prev];
        const last = next.pop();
        next.unshift(last);
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Card 2: Telemetry Typewriter
  const [typewriterText, setTypewriterText] = useState("");
  const fullText = "> ANALYZING SYSTEM INEFFICIENCIES... FOUND. DEPLOYING UNIQUE METHODOLOGY v4.2... SUCCESS.";
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setTypewriterText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) i = 0;
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="features" className="py-32 px-8 bg-cream">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Card 1 */}
        <div className="bg-white p-10 rounded-4xl border border-moss/5 shadow-sm flex flex-col justify-between h-[450px]">
          <div>
            <div className="w-12 h-12 bg-moss/5 rounded-2xl flex items-center justify-center text-moss mb-6">
              <Target size={24} />
            </div>
            <h3 className="font-outfit font-bold text-2xl text-moss mb-4 tracking-tight">Tangible ROI</h3>
            <p className="text-moss/60 text-sm leading-relaxed">We bypass abstract promises. Our results are quantifiable, delivering measurable financial impact across your entire ecosystem.</p>
          </div>
          <div className="relative h-32 overflow-hidden flex flex-col items-center">
             {shuffle.map((item, idx) => (
               <div 
                 key={item.id}
                 className="absolute w-full bg-moss text-cream p-4 rounded-2xl flex justify-between items-center transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                 style={{ 
                   transform: `translateY(${idx * 40}px) scale(${1 - idx * 0.05})`,
                   opacity: 1 - idx * 0.3,
                   zIndex: 10 - idx
                 }}
               >
                 <span className="font-mono text-[10px] uppercase tracking-widest">{item.label}</span>
                 <span className="font-outfit font-bold">{item.val}</span>
               </div>
             ))}
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-moss p-10 rounded-4xl shadow-2xl flex flex-col justify-between h-[450px]">
          <div>
            <div className="w-12 h-12 bg-clay rounded-2xl flex items-center justify-center text-cream mb-6">
              <Layers size={24} />
            </div>
            <h3 className="font-outfit font-bold text-2xl text-cream mb-4 tracking-tight">Unique Methodologies</h3>
            <p className="text-cream/60 text-sm leading-relaxed">Proprietary frameworks developed at the intersection of biological precision and enterprise logistics.</p>
          </div>
          <div className="bg-charcoal rounded-2xl p-6 font-mono text-[11px] text-clay/80 h-32 overflow-hidden relative">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-cream/40 uppercase">Live Methodology Feed</span>
            </div>
            {typewriterText}<span className="inline-block w-1.5 h-3 bg-clay ml-1 animate-pulse" />
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-10 rounded-4xl border border-moss/5 shadow-sm flex flex-col justify-between h-[450px]">
          <div>
            <div className="w-12 h-12 bg-moss/5 rounded-2xl flex items-center justify-center text-moss mb-6">
              <Zap size={24} />
            </div>
            <h3 className="font-outfit font-bold text-2xl text-moss mb-4 tracking-tight">Accelerated Insights</h3>
            <p className="text-moss/60 text-sm leading-relaxed">Velocity without direction is waste. We provide objective, external perspectives to catalyze immediate shifts.</p>
          </div>
          <div className="grid grid-cols-7 gap-1 mt-auto">
            {['S','M','T','W','T','F','S'].map((d, i) => (
              <div key={i} className={`h-12 rounded-xl flex items-center justify-center font-mono text-[10px] border border-moss/5 ${i === 4 ? 'bg-clay text-cream' : 'bg-moss/5 text-moss/40'}`}>
                {d}
              </div>
            ))}
            <div className="col-span-7 mt-2 py-2 px-4 bg-moss rounded-full text-[10px] text-cream font-mono flex justify-between">
              <span>DEPLOYMENT_SEQUENCE</span>
              <span className="text-clay">72H_WINDOW</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Philosophy = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".phil-reveal", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out"
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="philosophy" ref={sectionRef} className="relative py-40 px-8 bg-charcoal overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2000" 
        className="absolute inset-0 w-full h-full object-cover opacity-10 grayscale" 
        alt="Texture"
      />
      <div className="relative z-10 max-w-5xl mx-auto">
        <p className="phil-reveal text-cream/40 font-mono text-xs uppercase tracking-[0.3em] mb-8">The MYT Ethos</p>
        <h2 className="phil-reveal text-cream/70 text-2xl md:text-3xl font-sans mb-12 max-w-2xl leading-relaxed">
          Most consulting focuses on <span className="text-cream italic">sustaining the current state</span> through incremental change.
        </h2>
        <h2 className="phil-reveal text-cream text-5xl md:text-8xl font-serif italic leading-none">
          We focus on <span className="text-clay">Accelerated Transformation</span> powered by objective biological rigor.
        </h2>
      </div>
    </section>
  );
};

const Protocol = () => {
  const containerRef = useRef(null);

  useEffect(() => {
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
              filter: `blur(${self.progress * 10}px)`,
              opacity: 1 - self.progress * 0.5,
              overwrite: 'auto'
            });
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const steps = [
    { num: "01", title: "Diagnostic Audit", desc: "A clinical decomposition of your current operational stack to identify dormant ROI.", icon: <Cpu className="text-clay"/> },
    { num: "02", title: "Methodology Synthesis", desc: "Crafting a unique execution roadmap based on proprietary growth algorithms.", icon: <Globe className="text-clay"/> },
    { num: "03", title: "Active Integration", desc: "Real-time deployment of transformation protocols with continuous feedback loops.", icon: <Zap className="text-clay"/> },
  ];

  return (
    <section id="protocol" ref={containerRef} className="bg-cream">
      {steps.map((step, idx) => (
        <div key={idx} className="protocol-card h-screen w-full flex items-center justify-center p-8 sticky top-0">
          <div className="bg-white rounded-5xl border border-moss/10 w-full max-w-6xl aspect-[16/9] flex items-center p-12 md:p-24 overflow-hidden relative shadow-2xl">
            <div className="absolute top-12 right-12 font-mono text-moss/20 text-6xl font-bold">{step.num}</div>
            <div className="max-w-xl">
              <div className="mb-8">{step.icon}</div>
              <h3 className="font-outfit font-bold text-4xl md:text-6xl text-moss mb-6 leading-tight">{step.title}</h3>
              <p className="text-moss/60 text-lg md:text-xl leading-relaxed">{step.desc}</p>
            </div>
            {/* Unique SVG Animations */}
            <div className="hidden md:block absolute right-24 w-64 h-64">
                {idx === 0 && <div className="w-full h-full rounded-full border-4 border-dashed border-moss/10 animate-[spin_20s_linear_infinite]" />}
                {idx === 1 && <div className="w-full h-1 bg-moss/5 relative overflow-hidden"><div className="absolute inset-0 bg-clay w-1/3 animate-[translateX_2s_ease-in-out_infinite]" /></div>}
                {idx === 2 && (
                  <svg viewBox="0 0 100 40" className="w-full h-full opacity-20">
                    <path d="M0 20 Q 25 0 50 20 T 100 20" fill="none" stroke="#2E4036" strokeWidth="1" className="animate-[pulse_2s_infinite]" />
                  </svg>
                )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

const Contact = () => {
  return (
    <section className="py-40 px-8 bg-cream text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif italic text-6xl md:text-8xl text-moss mb-12">Begin your <span className="text-clay">Evolution.</span></h2>
        <p className="text-moss/60 mb-12 text-lg">Submit your operational need to receive a technical consultation within 24 hours.</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <input 
            type="email" 
            placeholder="Executive Email Address" 
            className="bg-white border border-moss/10 rounded-full px-8 py-4 w-full md:w-96 focus:outline-none focus:ring-2 ring-clay/20 transition-all"
          />
          <button className="bg-moss text-cream px-10 py-4 rounded-full font-bold magnetic-btn">
            Submit Protocol
          </button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream rounded-t-5xl pt-32 pb-12 px-8 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div className="col-span-1 md:col-span-2">
            <div className="font-outfit font-bold text-3xl mb-6">MYT Enterprises<span className="text-clay">.</span></div>
            <p className="text-cream/40 max-w-sm font-sans">Specialized expertise for accelerated transformation and objective enterprise insights.</p>
          </div>
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-clay mb-6">Navigation</h4>
            <ul className="space-y-4 text-sm text-cream/60">
              <li><a href="#" className="hover:text-cream transition-colors">Solutions</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">Philosophy</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">Protocol</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-clay mb-6">Connectivity</h4>
            <ul className="space-y-4 text-sm text-cream/60">
              <li>Intelligence: info@myt-ent.com</li>
              <li>Operational: +1 (555) 012-9844</li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-cream/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-tighter text-cream/40">System Operational: 2026.02.21_UTC</span>
          </div>
          <p className="font-mono text-[10px] text-cream/20">© 2026 MYT ENTERPRISES. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <main className="font-sans antialiased">
      <Navbar />
      <Hero />
      <Features />
      <Philosophy />
      <Protocol />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
