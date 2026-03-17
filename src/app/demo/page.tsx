"use client";

import React, { useState, useEffect, useRef } from "react";
import { ShieldAlert, Terminal, RefreshCw, AlertTriangle, ShieldCheck } from "lucide-react";

const SIMULATION_STEPS = [
  { text: "C:\\> execute payload.exe", delay: 500, color: "text-green-500" },
  { text: "[Ransomware] Locating target files...", delay: 1200, color: "text-yellow-500" },
  { text: "[Ransomware] Targeting C:\\Users\\Admin\\Documents", delay: 800, color: "text-yellow-500" },
  { text: "[Ransomware] Encrypting document_1.docx...", delay: 600, color: "text-red-400" },
  { text: "[Ransomware] Encrypting document_2.xlsx...", delay: 400, color: "text-red-400" },
  { text: "[ThreatPulse] ALERT: Entropy surge detected (> 7.0)", delay: 300, color: "text-red-500 font-bold" },
  { text: "[ThreatPulse] ALERT: Suspicious file renames detected (.docx -> .locked)", delay: 200, color: "text-red-500 font-bold" },
  { text: "[ThreatPulse] Threshold Exceeded! Triggering Containment protocols.", delay: 400, color: "text-primary font-bold" },
  { text: "[Containment] Action Triggered: Terminate Suspicious Process Tree", delay: 800, color: "text-blue-400" },
  { text: "[Containment] Action Triggered: Disable primary network adapters", delay: 600, color: "text-blue-400" },
  { text: "[System] Threat Neutralized. Files saved: 99.8%. System completely isolated.", delay: 1000, color: "text-green-500 font-bold" }
];

export default function Demo() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [logs, setLogs] = useState<{text: string, color: string}[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const startSimulation = () => {
    setLogs([]);
    setCurrentStep(0);
    setIsPlaying(true);
  };

  useEffect(() => {
    if (isPlaying && currentStep < SIMULATION_STEPS.length) {
      const step = SIMULATION_STEPS[currentStep];
      const timer = setTimeout(() => {
        setLogs(prev => [...prev, { text: step.text, color: step.color }]);
        setCurrentStep(prev => prev + 1);
        
        // Auto-scroll to bottom
        if (containerRef.current) {
          containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
      }, step.delay);
      return () => clearTimeout(timer);
    } else if (currentStep === SIMULATION_STEPS.length) {
      setIsPlaying(false);
    }
  }, [currentStep, isPlaying]);

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

      <section className="container mx-auto px-6 max-w-4xl">
        <div className="glass-panel rounded-2xl border border-card-border overflow-hidden shadow-2xl relative">
          
          <div className="flex items-center justify-between px-4 py-3 bg-card-border/30 border-b border-card-border">
            <div className="flex items-center gap-2 text-gray-400 font-mono text-sm">
              <Terminal size={16} />
              <span>threatpulse_simulator.exe</span>
            </div>
            <button 
              onClick={startSimulation}
              disabled={isPlaying}
              className="flex items-center gap-2 text-xs font-bold text-white bg-primary/20 hover:bg-primary/40 px-3 py-1.5 rounded disabled:opacity-50 transition-colors"
            >
              <RefreshCw size={14} className={isPlaying ? "animate-spin" : ""} />
              {logs.length === 0 ? "RUN SIMULATION" : "RESTART SIMULATION"}
            </button>
          </div>

          <div 
            ref={containerRef}
            className="aspect-video bg-[#0c0c0c] p-6 font-mono text-sm md:text-base overflow-y-auto"
            style={{ maxHeight: '400px' }}
          >
            {logs.length === 0 && !isPlaying ? (
              <div className="h-full flex flex-col justify-center items-center text-gray-500 gap-4">
                <Terminal size={48} className="opacity-20" />
                <p>Click "Run Simulation" to execute the test payload.</p>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                {logs.map((log, index) => (
                  <div key={index} className={`${log.color} animate-fade-in`}>
                    {log.text}
                  </div>
                ))}
                {isPlaying && (
                  <div className="w-2 h-5 bg-white animate-pulse mt-1 inline-block"></div>
                )}
              </div>
            )}
          </div>
          
          <div className="p-8 border-t border-card-border bg-gradient-to-b from-secondary to-background">
            {currentStep === SIMULATION_STEPS.length ? (
              <div className="flex items-start gap-4 text-green-400 mb-4 bg-green-500/10 p-4 rounded-lg border border-green-500/20">
                <ShieldCheck className="w-8 h-8 flex-shrink-0" />
                <div>
                   <h3 className="font-bold text-lg mb-1">Threat Neutralized</h3>
                   <p className="text-gray-300 text-sm">Target process terminated and system disconnected from network. Extent of damage: 2 files encrypted. Incident details saved to database.</p>
                </div>
              </div>
            ) : (
              <div className="flex items-start gap-4 text-primary mb-4 bg-primary/10 p-4 rounded-lg border border-primary/20">
                <ShieldAlert className="w-8 h-8 flex-shrink-0" />
                <div>
                   <h3 className="font-bold text-lg mb-1">Tripwire Protocol</h3>
                   <p className="text-gray-300 text-sm">
                     In this demonstration, the attack begins by reading and rewriting files with increased entropy. Within milliseconds of the malicious file modifications crossing the threshold, the ThreatPulse trigger fires.
                   </p>
                </div>
              </div>
            )}
            <div className="mt-6 flex justify-center">
              <a href="/download" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-2 rounded-lg text-sm transition-colors font-medium">
                Try it on your own machine
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
