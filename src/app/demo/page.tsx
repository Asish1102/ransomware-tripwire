import React from "react";
import { PlayCircle, ShieldAlert } from "lucide-react";

export default function Demo() {
  return (
    <div className="flex flex-col gap-12 font-sans text-foreground pb-24 min-h-[80vh]">
      <section className="pt-20 pb-10 px-6 container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
          <span className="text-primary">Attack Simulation</span> in Real-Time
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Watch how ThreatPulse detects and neutralizes a simulated ransomware attack before encryption takes hold.
        </p>
      </section>

      <section className="container mx-auto px-6 max-w-5xl">
        <div className="glass-panel rounded-2xl border border-card-border overflow-hidden shadow-2xl">
          <div className="aspect-video bg-black flex items-center justify-center relative group">
            {/* Fake video placeholder */}
            <div className="absolute inset-0 bg-[#0f172a] bg-opacity-80 flex flex-col items-center justify-center backdrop-blur-sm z-10 transition-opacity group-hover:bg-opacity-60 cursor-pointer">
              <PlayCircle size={80} className="text-primary glow mb-4 transition-transform group-hover:scale-110" />
              <span className="text-white font-bold tracking-wider">PLAY SIMULATION</span>
            </div>
            <div className="font-mono text-green-500 text-xs text-left w-full h-full p-4 whitespace-pre pt-10">
               C:\&gt; execute payload.exe<br/>
               [Ransomware] Locating target files...<br/>
               [Ransomware] Targeting C:\Users\Admin\Documents<br/>
               <span className="text-red-500">[ThreatPulse] ALERT: Entropy surge detected + I/O spike</span><br/>
               <span className="text-red-500">[ThreatPulse] ALERT: Suspicious file renames (.docx -&gt; .encrypted)</span><br/>
               <span className="text-blue-400">[Containment] Action Triggered: Terminate PID 4592</span><br/>
               <span className="text-blue-400">[Containment] Action Triggered: Disable network adapters</span><br/>
               [System] Process terminated. Files protected: 99.9%
            </div>
          </div>
          <div className="p-8 border-t border-card-border bg-secondary/30">
             <div className="flex items-center gap-3 text-red-400 mb-4 font-bold text-lg">
                <ShieldAlert /> Threat Neutralized
             </div>
             <p className="text-gray-300">
               In this demonstration, the attack begins by reading and rewriting files with increased entropy. Within 50 milliseconds of the first malicious rename, the ThreatPulse detection trigger fires. Containment automatically kills the process and saves the filesystem.
             </p>
          </div>
        </div>
      </section>
    </div>
  );
}
