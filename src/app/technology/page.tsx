import React from "react";
import { Server, Database, Code, Shield } from "lucide-react";

export default function Technology() {
  return (
    <div className="flex flex-col gap-24 font-sans text-foreground pb-24">
      <section className="pt-20 pb-10 px-6 container mx-auto text-center border-b border-card-border relative">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white">
          <span className="text-primary">Under the Hood:</span> Our Technology
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Deep dive into the architecture, detection models, and research frameworks mapping out the ThreatPulse platform. Reserved for technical users and security researchers.
        </p>
      </section>

      {/* Architecture Diagram */}
      <section className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-primary pl-4">Architecture</h2>
        <div className="glass-panel p-8 md:p-12 rounded-xl border border-card-border mb-8 overflow-x-auto">
          <div className="min-w-[800px] flex items-center justify-between gap-4 font-mono text-sm text-center">
             <div className="flex-1 bg-secondary/80 p-6 rounded border border-gray-700 hover:border-primary transition-colors">
                <Server size={24} className="mx-auto mb-2 text-primary" />
                <span className="font-bold text-white block mb-1">Windows Sensor</span>
                <span className="text-gray-400 text-xs">Event Tracing (ETW) & Sysmon hooks</span>
             </div>
             <div className="text-gray-500 font-bold">→</div>
             <div className="flex-1 bg-secondary/80 p-6 rounded border border-gray-700 hover:border-primary transition-colors">
                <Database size={24} className="mx-auto mb-2 text-primary" />
                <span className="font-bold text-white block mb-1">Feature Extractor</span>
                <span className="text-gray-400 text-xs">I/O rate, Entropy calculation</span>
             </div>
             <div className="text-gray-500 font-bold">→</div>
             <div className="flex-1 bg-secondary/80 p-6 rounded border border-primary/50 glow hover:border-primary transition-colors">
                <Code size={24} className="mx-auto mb-2 text-primary" />
                <span className="font-bold text-white block mb-1">ML Model</span>
                <span className="text-gray-400 text-xs">Sequence Analysis & Anomaly</span>
             </div>
             <div className="text-gray-500 font-bold">→</div>
             <div className="flex-1 bg-secondary/80 p-6 rounded border border-red-900/50 hover:border-red-500 transition-colors">
                <Shield size={24} className="mx-auto mb-2 text-red-400" />
                <span className="font-bold text-white block mb-1">Containment</span>
                <span className="text-gray-400 text-xs">Process isolation</span>
             </div>
          </div>
        </div>
      </section>

      {/* Detection Models */}
      <section className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-primary pl-4">Detection Models</h2>
          <div className="space-y-6">
            <div className="glass-panel p-6 rounded border border-card-border">
              <h3 className="text-primary font-bold mb-2 font-mono text-lg">Rule-based Anomaly Detection</h3>
              <p className="text-gray-400">Captures obvious heuristic abuses, such as disabling recovery options or clearing event logs rapidly.</p>
            </div>
            <div className="glass-panel p-6 rounded border border-card-border">
              <h3 className="text-primary font-bold mb-2 font-mono text-lg">Sequence Analysis Models</h3>
              <p className="text-gray-400">Recurrent Neural Network (RNN) layers assess file operational sequences. For instance, an open-read-write-rename loop happening in milliseconds.</p>
            </div>
            <div className="glass-panel p-6 rounded border border-card-border">
              <h3 className="text-primary font-bold mb-2 font-mono text-lg">Entropy Monitoring</h3>
              <p className="text-gray-400">A custom Shannon Entropy calculator determines the randomness of file chunks before and after writes.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-primary pl-4">Tech Stack & Frameworks</h2>
          <div className="bg-[#0b1120] border border-gray-800 rounded-xl overflow-hidden">
            <div className="bg-[#1e293b] px-4 py-2 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-xs text-gray-400 ml-2 font-mono">frameworks.json</span>
            </div>
            <div className="p-6 font-mono text-sm text-gray-300">
              <span className="text-blue-400">"backend"</span>: {"{"}<br/>
              &nbsp;&nbsp;<span className="text-blue-400">"api"</span>: <span className="text-green-400">"FastAPI (Python 3.11)"</span>,<br/>
              &nbsp;&nbsp;<span className="text-blue-400">"db"</span>: <span className="text-green-400">"MongoDB"</span>,<br/>
              &nbsp;&nbsp;<span className="text-blue-400">"ml"</span>: <span className="text-green-400">"PyTorch, scikit-learn"</span><br/>
              {"}"},<br/>
              <span className="text-blue-400">"agent"</span>: {"{"}<br/>
              &nbsp;&nbsp;<span className="text-blue-400">"os"</span>: <span className="text-green-400">"Windows 10/11"</span>,<br/>
              &nbsp;&nbsp;<span className="text-blue-400">"integration"</span>: <span className="text-green-400">"Sysmon, ETW"</span>,<br/>
              &nbsp;&nbsp;<span className="text-blue-400">"language"</span>: <span className="text-green-400">"C++, Rust"</span><br/>
              {"}"},<br/>
              <span className="text-blue-400">"frontend"</span>: {"{"}<br/>
              &nbsp;&nbsp;<span className="text-blue-400">"framework"</span>: <span className="text-green-400">"React, Next.js"</span>,<br/>
              &nbsp;&nbsp;<span className="text-blue-400">"styling"</span>: <span className="text-green-400">"TailwindCSS"</span>,<br/>
              &nbsp;&nbsp;<span className="text-blue-400">"dashboard"</span>: <span className="text-green-400">"Grafana integrated"</span><br/>
              {"}"}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
