import React from "react";
import { Shield, Lock, FileSearch, PowerOff, Activity } from "lucide-react";

export default function Product() {
  return (
    <div className="flex flex-col gap-24 font-sans text-foreground">
      {/* Header */}
      <section className="pt-20 pb-10 px-6 container mx-auto text-center border-b border-card-border relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary/10 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white">
          The <span className="text-primary">Core System</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          A three-stage defense pipeline engineered to identify and neutralize ransomware at the exact moment before encryption.
        </p>
      </section>

      {/* Endpoint Sensor */}
      <section className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16 glass-panel p-10 md:p-16 rounded-3xl border border-card-border">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-6 text-primary">
              <FileSearch size={32} />
              <h2 className="text-3xl font-bold text-white">1. Endpoint Sensor</h2>
            </div>
            <p className="text-lg text-gray-400 mb-6">
              The sensor sits silently in the background, aggressively monitoring system APIs and filesystem I/O without degrading performance.
            </p>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div> <span className="font-semibold text-white">File Writes & Renames:</span> Tracks unusual bursts.</li>
              <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div> <span className="font-semibold text-white">Process Execution:</span> Monitors unauthorized injectors and memory hollowing.</li>
              <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div> <span className="font-semibold text-white">Shadow Copy Deletion:</span> Instantly flags vssadmin.exe abuse.</li>
            </ul>
          </div>
          <div className="w-full md:w-5/12 aspect-video bg-secondary border border-card-border rounded-xl flex items-center justify-center relative shadow-lg">
             <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0ibm9uZSIvPgo8Y2lyY2xlIGN4PSIyIiBjeT0iMiIgcj0iMSIgZmlsbD0icmdiYSgwLCAyMjQsIDI1NSwgMC4yKSIvPgo8L3N2Zz4=')] opacity-50"></div>
             <Activity className="w-20 h-20 text-primary opacity-80" />
          </div>
        </div>
      </section>

      {/* Detection Engine */}
      <section className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row-reverse items-center gap-16 p-10 md:p-16">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-6 text-primary">
              <Activity size={32} />
              <h2 className="text-3xl font-bold text-white">2. Detection Engine</h2>
            </div>
            <p className="text-lg text-gray-400 mb-6">
              Signatures take hours or days to update. The Tripwire engine uses behavior, entropy, and statistical pattern matching.
            </p>
            <div className="glass-panel p-6 rounded-lg text-gray-300 border-l-4 border-l-primary mb-6">
              <p className="italic">"Instead of relying on signatures, the engine analyzes file system burst patterns and entropy changes in real time."</p>
            </div>
          </div>
          <div className="w-full md:w-5/12 aspect-square max-w-sm rounded-full border-4 border border-card-border border-dashed flex items-center justify-center relative slow-spin rotate-[15deg]">
              <div className="absolute inset-4 rounded-full border border-primary/30 flex items-center justify-center p-8">
                 <Lock className="w-16 h-16 text-primary/60" />
              </div>
          </div>
        </div>
      </section>

      {/* Containment Engine */}
      <section className="container mx-auto px-6 pb-24">
        <div className="flex flex-col md:flex-row items-center gap-16 glass-panel p-10 md:p-16 rounded-3xl border border-card-border bg-gradient-to-tr from-background to-secondary/50">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-6 text-red-500">
              <PowerOff size={32} />
              <h2 className="text-3xl font-bold text-white">3. Containment Engine</h2>
            </div>
            <p className="text-lg text-gray-400 mb-6">
              When the threshold is met, the sensor acts automatically in milliseconds. No human intervention needed.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background/80 p-4 border border-card-border rounded hover:border-red-500/50 transition-colors">
                <span className="text-red-400 font-bold block mb-1">Kill Process</span> Terminates the malicious PID immediately.
              </div>
              <div className="bg-background/80 p-4 border border-card-border rounded hover:border-red-500/50 transition-colors">
                <span className="text-red-400 font-bold block mb-1">Network Block</span> Disables outbound C2 connections natively.
              </div>
              <div className="bg-background/80 p-4 border border-card-border rounded hover:border-red-500/50 transition-colors">
                <span className="text-red-400 font-bold block mb-1">Protect Shares</span> Drops SMB connections to protect the network.
              </div>
              <div className="bg-background/80 p-4 border border-card-border rounded hover:border-red-500/50 transition-colors">
                <span className="text-red-400 font-bold block mb-1">Lock Device</span> Optional local lockdown mode to preserve forensics.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
