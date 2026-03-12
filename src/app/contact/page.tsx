import React from "react";
import { Mail, MessageSquare, Bug, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col gap-12 font-sans text-foreground pb-24 min-h-[80vh] pt-20">
      <section className="px-6 container mx-auto text-center border-b border-card-border pb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
          <span className="text-primary">Contact</span> Us
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Feedback, bug reports, partnership inquiries, or enterprise deployment questions. We are here.
        </p>
      </section>

      <section className="container mx-auto px-6 max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col gap-6">
           <div className="glass-panel p-8 rounded-xl border border-card-border hover:border-primary/30 transition-colors">
              <Mail className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Enterprise Interest</h3>
              <p className="text-gray-400 text-sm mb-4">Want to deploy Tripwire across 100+ endpoints? Contact sales for bulk licensing, SIEM integration, and support SLAs.</p>
              <a href="mailto:sales@tripwire.ai" className="text-primary hover:underline font-bold text-sm">sales@tripwire.ai</a>
           </div>

           <div className="glass-panel p-8 rounded-xl border border-card-border hover:border-primary/30 transition-colors">
              <MessageSquare className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Partnerships</h3>
              <p className="text-gray-400 text-sm mb-4">Are you an MSP or a security consultancy? Let's talk about integrating our tripwire into your stack.</p>
              <a href="mailto:partners@tripwire.ai" className="text-primary hover:underline font-bold text-sm">partners@tripwire.ai</a>
           </div>

           <div className="glass-panel p-8 rounded-xl border border-card-border hover:border-red-500/30 transition-colors">
              <Bug className="w-8 h-8 text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Security Researchers</h3>
              <p className="text-gray-400 text-sm mb-4">Found a bypass? Or want to contribute to the detection model? We welcome responsible disclosure and PRs.</p>
              <a href="mailto:security@tripwire.ai" className="text-red-400 hover:underline font-bold text-sm">security@tripwire.ai</a>
           </div>
        </div>

        <div className="glass-panel p-8 rounded-xl border border-card-border flex flex-col items-start bg-secondary/30 h-fit">
           <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
           <form className="w-full flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input type="text" className="w-full bg-[#0a0f1c] border border-gray-700/50 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                <input type="email" className="w-full bg-[#0a0f1c] border border-gray-700/50 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-primary transition-colors" placeholder="jane@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                <select className="w-full bg-[#0a0f1c] border border-gray-700/50 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-primary transition-colors">
                  <option>Enterprise Deployment</option>
                  <option>Bug Report</option>
                  <option>Partnership</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea rows={5} className="w-full bg-[#0a0f1c] border border-gray-700/50 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-primary transition-colors" placeholder="How can we help?"></textarea>
              </div>
              <button type="button" className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-background font-bold py-3 mt-2 rounded-lg transition-all glow text-sm">
                <Send className="w-5 h-5" /> Send Message
              </button>
           </form>
        </div>
      </section>
    </div>
  );
}
