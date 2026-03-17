"use client";

import React, { useState } from "react";
import { DownloadCloud, Info, AlertTriangle, CheckCircle, Monitor, Terminal } from "lucide-react";

export default function DownloadPage() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [toolType, setToolType] = useState("Agent");
  const [osType, setOsType] = useState("Windows");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, company, toolType, osType }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setSuccess(true);
      
      const fileName = `ThreatPulse-${toolType}-${osType}.zip`;

      // Trigger the actual zip file download
      setTimeout(() => {
        const link = document.createElement("a");
        link.href = `/${fileName}`;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, 1000);

    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getFileName = () => `ThreatPulse-${toolType}-${osType}.zip`;

  return (
    <div className="flex flex-col gap-12 font-sans text-foreground pb-24 min-h-[80vh]">
      <section className="pt-20 pb-10 px-6 container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
          Download <span className="text-primary">ThreatPulse</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Deploy the endpoint sensor to begin detecting pre-encryption ransomware activity, or download the simulator to test it.
        </p>
      </section>

      <section className="container mx-auto px-6 max-w-4xl flex justify-center">
        <div className="w-full max-w-md p-8 glass-panel rounded-2xl border border-primary/20 relative overflow-hidden bg-gradient-to-b from-secondary to-background shadow-2xl">
          {!success ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              
              {error && (
                <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-3 rounded-lg flex items-center gap-2 text-sm">
                  <AlertTriangle size={16} />
                  {error}
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div className="flex-1 flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-300">Component</label>
                  <select 
                    value={toolType}
                    onChange={(e) => setToolType(e.target.value)}
                    className="bg-background/50 border border-card-border focus:border-primary rounded-lg px-4 py-3 text-white outline-none transition-colors w-full appearance-none"
                  >
                    <option value="Agent">Sensor Agent</option>
                    <option value="Simulator">Simulator</option>
                  </select>
                </div>

                <div className="flex-1 flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-300">Operating System</label>
                  <select 
                    value={osType}
                    onChange={(e) => setOsType(e.target.value)}
                    className="bg-background/50 border border-card-border focus:border-primary rounded-lg px-4 py-3 text-white outline-none transition-colors w-full appearance-none"
                  >
                    <option value="Windows">Windows</option>
                    <option value="Linux">Linux</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2 text-left">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">Work Email <span className="text-primary">*</span></label>
                <input 
                  type="email" 
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-background/50 border border-card-border focus:border-primary rounded-lg px-4 py-3 text-white outline-none transition-colors w-full"
                  placeholder="name@company.com"
                />
              </div>

              <div className="flex flex-col gap-2 text-left">
                <label htmlFor="company" className="text-sm font-medium text-gray-300">Company Name</label>
                <input 
                  type="text" 
                  id="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="bg-background/50 border border-card-border focus:border-primary rounded-lg px-4 py-3 text-white outline-none transition-colors w-full"
                  placeholder="Optional"
                />
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="mt-4 w-full bg-primary hover:bg-primary-dark text-background font-bold px-6 py-4 rounded-lg flex items-center justify-center gap-2 transition-all glow disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Preparing Target..." : <><DownloadCloud size={20} /> Download</>}
              </button>
              
              <div className="mt-4 flex items-center gap-2 text-sm text-yellow-500 bg-yellow-500/10 px-3 py-2 rounded">
                 <Info size={16} /> Requires Python 3.9+ to run build scripts.
              </div>
            </form>
          ) : (
            <div className="flex flex-col items-center justify-center text-center py-6 fade-in">
              <CheckCircle className="text-primary w-20 h-20 mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">You're All Set!</h2>
              <p className="text-gray-400 mb-2">Your download of {toolType} for {osType} should begin automatically.</p>
              <p className="text-sm text-gray-500 mb-8">If it doesn't, <a href={`/${getFileName()}`} download className="text-primary underline hover:text-primary-dark">click here</a>.</p>
              
              {toolType === "Agent" ? (
                <div className="text-left w-full bg-background/50 p-6 rounded-lg border border-card-border text-sm">
                  <h3 className="text-white font-semibold mb-2">Quick Start Guide ({osType})</h3>
                  <ol className="list-decimal list-inside text-gray-400 space-y-2">
                    <li>Extract <code className="text-primary">{getFileName()}</code></li>
                    <li>Run the C2 Server in the <code className="text-primary">backend</code> folder</li>
                    <li>In the <code className="text-primary">agent</code> folder, run the build script to generate the EXE/Binary</li>
                    <li>Execute the generated agent binary to protect the endpoint</li>
                  </ol>
                </div>
              ) : (
                <div className="text-left w-full bg-background/50 p-6 rounded-lg border border-card-border text-sm">
                  <h3 className="text-white font-semibold mb-2">Quick Start Guide ({osType} Simulator)</h3>
                  <ol className="list-decimal list-inside text-gray-400 space-y-2">
                    <li>Extract <code className="text-primary">{getFileName()}</code></li>
                    <li>Run the build script to generate the executable binary</li>
                    <li>Execute the simulator binary to simulate a ransomware attack for testing</li>
                  </ol>
                </div>
              )}

            </div>
          )}
        </div>
      </section>
    </div>
  );
}
