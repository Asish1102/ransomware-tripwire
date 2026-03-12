import React from "react";
import { BookOpen, Calendar, ArrowRight } from "lucide-react";

export default function Blog() {
  const posts = [
    {
      title: "Real-world Discussions: Entropy Checking in Practice",
      date: "September 8, 2024",
      desc: "Live discussions on r/cybersecurity highlighting the impact of entropy scanning on system performance and header-based vs full-file analysis.",
      category: "Community",
      link: "https://www.reddit.com/r/cybersecurity/search/?q=ransomware+entropy&restrict_sr=1" 
    },
    {
      title: "ArXiv: Latest Pre-prints on Ransomware Entropy Detection",
      date: "August 21, 2024",
      desc: "Cornell University's active index of the newest research papers mapping feature interactions related to ransomware sequence entropy.",
      category: "Research",
      link: "https://arxiv.org/search/cs?query=%22ransomware%22+%22entropy%22&searchtype=all&abstracts=show&order=-announced_date_first&size=50"
    },
    {
      title: "Microsoft Security: Analyzing Ransomware as a Service (RaaS)",
      date: "May 15, 2024",
      desc: "Global threat intelligence examining how modern ransomware bypasses standard EDR heuristics and the shift towards the gig economy.",
      category: "Market",
      link: "https://www.microsoft.com/en-us/security/blog/topic/threat-intelligence/"
    }
  ];

  return (
    <div className="flex flex-col gap-12 font-sans text-foreground pb-24 min-h-[80vh]">
      <section className="pt-20 pb-10 px-6 container mx-auto text-center border-b border-card-border relative">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
          <span className="text-primary">Research</span> Blog
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Deep dives into modern ransomware behavior and defense mechanisms by our security engineering team.
        </p>
      </section>

      <section className="container mx-auto px-6 max-w-5xl">
         <div className="grid grid-cols-1 gap-8">
            {posts.map((post, i) => (
               <article key={i} className="glass-panel p-8 rounded-xl border border-card-border hover:border-primary/40 transition-colors group">
                  <div className="flex items-center gap-4 text-xs font-mono text-gray-500 mb-4">
                     <span className="text-primary tracking-wider uppercase">{post.category}</span>
                     <span>•</span>
                     <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors cursor-pointer">{post.title}</h2>
                  <p className="text-gray-400 mb-6 max-w-3xl">{post.desc}</p>
                  <a href={post.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition-colors">
                     Read Full Article <ArrowRight size={16} />
                  </a>
               </article>
            ))}
         </div>
         
         <div className="mt-12 text-center text-gray-500 text-sm">
           <BookOpen className="w-8 h-8 mx-auto mb-2 opacity-30" />
           Viewing latest publications. More coming soon.
         </div>
      </section>
    </div>
  );
}
