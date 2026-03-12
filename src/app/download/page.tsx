import React from "react";
import { DownloadCloud, Info } from "lucide-react";

export default function Download() {
  return (
    <div className="flex flex-col gap-12 font-sans text-foreground pb-24 min-h-[80vh]">
      <section className="pt-20 pb-10 px-6 container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
          Download <span className="text-primary">Tripwire Agent</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Deploy the endpoint sensor to begin detecting pre-encryption ransomware activity immediately.
        </p>
      </section>

      <section className="container mx-auto px-6 max-w-4xl">
        <div className="glass-panel rounded-2xl p-8 border border-card-border bg-gradient-to-b from-secondary to-background shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8 pb-8 border-b border-gray-800">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                Windows Agent <span className="bg-primary/20 text-primary text-xs px-2 py-1 rounded">v1.0.4</span>
              </h2>
              <p className="text-gray-400 text-sm">Compatible with Windows 10/11 & Server 2019/2022.</p>
              <div className="mt-4 flex items-center gap-2 text-sm text-yellow-500 bg-yellow-500/10 px-3 py-2 rounded">
                 <Info size={16} /> Requires Sysmon v14.0+ installed.
              </div>
            </div>
            <button className="bg-primary hover:bg-primary-dark text-background font-bold px-8 py-4 rounded-lg flex items-center justify-center gap-2 transition-all glow shrink-0 self-stretch md:self-center">
              <DownloadCloud size={24} /> Get Installer (.msi)
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <a href="#" className="glass-panel p-4 rounded text-center border border-gray-800 hover:border-primary transition-colors text-white font-medium">
               Installation Guide
             </a>
             <a href="#" className="glass-panel p-4 rounded text-center border border-gray-800 hover:border-primary transition-colors text-white font-medium flex items-center justify-center gap-2">
               View GitHub Source
             </a>
          </div>
        </div>
        
        <div className="mt-12 w-full text-center text-gray-500 dark:text-gray-400">
           <p className="text-sm">For enterprise deployments via SCCM or Intune, <a href="/contact" className="text-primary hover:underline">contact us</a> for silent install flags.</p>
        </div>
      </section>
    </div>
  );
}
