import React from "react";
import { Activity, ShieldCheck, FileText, Anchor } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex flex-col font-sans text-foreground min-h-[80vh]">
      {/* Top Bar for Dashboard View */}
      <div className="bg-[#050b14] border-b border-card-border p-4 sticky top-16 z-40">
         <div className="container mx-auto px-6 flex items-center justify-between">
            <h1 className="text-xl font-bold text-white flex items-center gap-2">
              <Activity className="text-primary w-5 h-5" /> Enterprise Console
            </h1>
            <div className="flex items-center gap-4 text-sm font-mono text-gray-400">
               <span>reyyaasish@lpu.in</span>
               <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded">System Healthy</span>
            </div>
         </div>
      </div>

      <section className="container mx-auto px-6 py-8 flex-1 grid grid-cols-1 md:grid-cols-4 gap-6">
        <aside className="md:col-span-1 glass-panel border border-card-border rounded-xl p-4 flex flex-col gap-2 h-fit">
           <a href="#" className="bg-primary/10 text-primary px-4 py-2 rounded-lg font-bold flex items-center gap-2 border border-primary/20">
             <ShieldCheck className="w-4 h-4" /> Endpoints
           </a>
           <a href="#" className="text-gray-400 hover:bg-secondary/50 px-4 py-2 rounded-lg flex items-center gap-2">
             <FileText className="w-4 h-4" /> Alerts
           </a>
           <a href="#" className="text-gray-400 hover:bg-secondary/50 px-4 py-2 rounded-lg flex items-center gap-2">
             <Anchor className="w-4 h-4" /> Containment Logs
           </a>
        </aside>
        
        <main className="md:col-span-3 flex flex-col gap-6">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-panel p-6 rounded-xl border border-card-border">
                 <h3 className="text-gray-400 text-sm font-bold uppercase mb-2">Active Sensors</h3>
                 <p className="text-3xl font-mono text-white">1,402</p>
              </div>
              <div className="glass-panel p-6 rounded-xl border border-card-border relative overflow-hidden">
                 <div className="absolute inset-0 bg-red-500/5 mix-blend-screen pulse-slow"></div>
                 <h3 className="text-gray-400 text-sm font-bold uppercase mb-2 text-red-400">Threat Alerts (24h)</h3>
                 <p className="text-3xl font-mono text-white text-red-400">2</p>
              </div>
              <div className="glass-panel p-6 rounded-xl border border-card-border">
                 <h3 className="text-gray-400 text-sm font-bold uppercase mb-2">Systems Isolated</h3>
                 <p className="text-3xl font-mono text-white">1</p>
              </div>
           </div>
           
           <div className="glass-panel border border-card-border rounded-xl flex flex-col overflow-hidden">
             <div className="bg-[#1e293b] px-6 py-4 border-b border-card-border text-sm font-bold text-gray-400 tracking-wider">
               RECENT ACTIVITIES & CONTAINMENT EVENTS
             </div>
             <table className="w-full text-left text-sm text-gray-300">
               <thead className="bg-[#0a0f1c] text-xs font-mono">
                 <tr>
                   <th className="px-6 py-3">TIMESTAMP</th>
                   <th className="px-6 py-3">HOST</th>
                   <th className="px-6 py-3">ALERT TYPE</th>
                   <th className="px-6 py-3">AFFECTED FILES</th>
                   <th className="px-6 py-3">ACTION</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-gray-800">
                 <tr className="bg-red-500/5 hover:bg-red-500/10 cursor-pointer">
                   <td className="px-6 py-4 font-mono text-xs text-red-400">Today 14:03:22</td>
                   <td className="px-6 py-4 font-bold text-white">PC-001-DEV</td>
                   <td className="px-6 py-4">Pre-Encryption Activity</td>
                   <td className="px-6 py-4 font-mono">34</td>
                   <td className="px-6 py-4 text-red-500 font-bold">Process Terminated</td>
                 </tr>
                 <tr className="hover:bg-[#1e293b] cursor-pointer">
                   <td className="px-6 py-4 font-mono text-xs">Today 09:12:00</td>
                   <td className="px-6 py-4 font-bold">SRV-SQL-02</td>
                   <td className="px-6 py-4">VSSAdmin Abuse</td>
                   <td className="px-6 py-4 font-mono">-</td>
                   <td className="px-6 py-4 text-blue-400">Blocked</td>
                 </tr>
                 <tr className="hover:bg-[#1e293b] cursor-pointer">
                   <td className="px-6 py-4 font-mono text-xs">Yesterday 18:45:10</td>
                   <td className="px-6 py-4 font-bold">PC-402-SALES</td>
                   <td className="px-6 py-4">I/O Burst (Benign)</td>
                   <td className="px-6 py-4 font-mono">1,024</td>
                   <td className="px-6 py-4 text-green-400">Logged</td>
                 </tr>
               </tbody>
             </table>
           </div>
        </main>
      </section>
    </div>
  );
}
