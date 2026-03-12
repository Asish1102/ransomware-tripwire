import React from "react";
import { Users, Target, Rocket } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col gap-12 font-sans text-foreground pb-24 min-h-[80vh]">
      <section className="pt-20 pb-10 px-6 container mx-auto text-center border-b border-card-border relative">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
          About <span className="text-primary">ThreatPulse</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          I built this lightweight defensive technology to stop ransomware dead in its tracks.
        </p>
      </section>

      <section className="container mx-auto px-6 max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col gap-6">
           <div className="glass-panel p-8 rounded-xl border border-card-border text-center flex-1">
             <Target className="w-12 h-12 text-primary mx-auto mb-4" />
             <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
             <p className="text-gray-400 text-sm">
               To provide SMB companies, research labs, IT admins, and schools with an effective last line of defense against modern extortion strains that bypass traditional antivirus.
             </p>
           </div>
           
           <div className="glass-panel p-8 rounded-xl border border-card-border text-center flex-1">
             <Users className="w-12 h-12 text-primary mx-auto mb-4" />
             <h3 className="text-xl font-bold text-white mb-2">The Developer</h3>
             <p className="text-gray-400 text-sm">
               Engineered entirely by <strong>Asish Varma Reyya</strong>. I was tired of watching entire networks get encrypted before massive EDR solutions could react. ThreatPulse is my answer to behavioral anomalies.
             </p>
           </div>
        </div>
        
        <div className="flex flex-col gap-6">
           <div className="glass-panel p-8 rounded-xl border border-card-border text-center flex-1">
             <Rocket className="w-12 h-12 text-primary mx-auto mb-4" />
             <h3 className="text-xl font-bold text-white mb-2">Roadmap</h3>
             <ul className="text-left text-sm text-gray-400 space-y-3 font-mono">
               <li className="flex gap-2"><span className="text-primary">[Complete]</span> <span>Windows Agent v1</span></li>
               <li className="flex gap-2"><span className="text-primary">[Complete]</span> <span>Entropy Kernel Driver</span></li>
               <li className="flex gap-2"><span className="text-yellow-500">[Q3 '24]</span> <span>Linux Ext4 Support</span></li>
               <li className="flex gap-2"><span className="text-gray-600">[Q4 '24]</span> <span>Cloud Graph Analysis</span></li>
               <li className="flex gap-2"><span className="text-gray-600">[Q1 '25]</span> <span>Automated Data Rollback</span></li>
             </ul>
           </div>
        </div>
      </section>
    </div>
  );
}
