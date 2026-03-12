import React from "react";
import { Shield, Activity, Zap, Server, ShieldCheck, ArrowRight, Download, PlayCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 font-sans text-foreground">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 container mx-auto text-center flex flex-col items-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[150px] rounded-full -z-10 pointer-events-none mix-blend-screen"></div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border-primary/30 text-primary text-sm font-semibold mb-8 animate-pulse">
          <Zap size={16} /> <span>Now available in early access</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white max-w-4xl">
          Stop Ransomware <br className="hidden md:block" />
          <span className="text-gradient">Before Encryption Starts</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-12">
          Lightweight ransomware tripwire that detects pre-encryption activity and isolates the system instantly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a href="/download" className="bg-primary hover:bg-primary-dark text-background font-bold px-8 py-4 rounded-lg flex items-center justify-center gap-2 transition-all glow text-lg">
            <Download size={20} /> Download Agent
          </a>
          <a href="/demo" className="glass-panel hover:bg-white/5 text-white font-bold px-8 py-4 rounded-lg flex items-center justify-center gap-2 transition-all text-lg border border-card-border">
            <PlayCircle size={20} /> See Demo
          </a>
        </div>
      </section>

      {/* Problem Section */}
      <section className="container mx-auto px-6">
        <div className="glass-panel rounded-2xl p-10 md:p-16 border border-card-border max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-white mb-4">The Standard Security Gap</h2>
            <p className="text-xl text-gray-400 mb-6">Most security tools detect ransomware <span className="text-red-400 font-semibold">after files are encrypted</span>. By the time an alert fires, the damage is done.</p>
            <p className="text-xl text-gray-400">Our system detects the <span className="text-primary font-semibold">early behavioral signals</span> before encryption begins, isolating the machine before a single file is lost.</p>
          </div>
          <div className="w-full md:w-1/3 aspect-square bg-background rounded-xl border border-red-500/20 p-6 flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-red-500/5 pulse-slow"></div>
            <Activity className="text-red-500 w-24 h-24 mb-4" />
            <div className="text-red-400 font-mono text-sm uppercase tracking-widest text-center">Encryption Started<br/>Data Lost</div>
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Designed for Early Detection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Activity, title: "Real-Time File Monitoring", desc: "Tracks I/O bursts, renames, and rapid modifications using a kernel-level driver." },
            { icon: Shield, title: "Pre-Encryption Detection", desc: "Monitors shadow copy deletions and rapid local entropy spikes." },
            { icon: Zap, title: "Automated Containment", desc: "Instantly terminates suspicious processes and isolates from the network." },
            { icon: Server, title: "Lightweight Endpoint Sensor", desc: "Consumes <1% CPU. Leaves no heavy footprint on user machines." },
            { icon: ShieldCheck, title: "No Enterprise EDR Required", desc: "Works alongside your existing AV without requiring expensive EDR licenses." },
            { icon: ArrowRight, title: "Instant Deployment", desc: "Deploy via MSI or script in seconds across your entire fleet." }
          ].map((feature, i) => (
            <div key={i} className="glass-panel p-8 rounded-xl border border-card-border hover:border-primary/50 transition-colors group">
              <feature.icon className="text-primary w-12 h-12 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Architecture Preview */}
      <section className="container mx-auto px-6 pb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">A streamlined, multi-stage defense architecture.</p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-5xl mx-auto font-mono text-sm">
          {["Endpoint Sensor", "Behavior Analyzer", "Detection Model", "Containment Engine"].map((stage, i, arr) => (
            <React.Fragment key={stage}>
              <div className="glass-panel px-6 py-4 rounded-lg border border-primary/20 text-primary font-bold whitespace-nowrap glow-text w-full md:w-auto text-center md:text-left">
                {stage}
              </div>
              {i < arr.length - 1 && (
                <div className="hidden md:block text-gray-600">
                  <ArrowRight size={24} />
                </div>
              )}
              {i < arr.length - 1 && (
                <div className="block md:hidden text-gray-600 my-2">
                  <Activity size={24} className="rotate-90" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* CTA section */}
      <section className="container mx-auto px-6 mb-32">
        <div className="bg-gradient-to-br from-secondary to-background border border-primary/20 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          <h2 className="text-4xl font-bold text-white mb-6">Start Protecting Your Systems Today</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">Deploy our lightweight sensor in minutes and get alerts before encryption starts.</p>
          <a href="/download" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-background font-bold px-10 py-5 rounded-lg transition-all glow text-xl">
            <Download size={24} /> Get The Agent
          </a>
        </div>
      </section>
    </div>
  );
}
