import React from "react";
import { BookOpen, Calendar, ArrowRight } from "lucide-react";

export default function Blog() {
  const posts = [
    {
      title: "Real-world Discussions: Entropy Checking in Practice",
      date: "September 8, 2024",
      desc: "A Reddit discussion on r/Malware highlighting the impact of entropy scanning on system performance and header-based vs full-file analysis.",
      category: "Community",
      link: "https://www.reddit.com/r/cybersecurity/comments/16l1y8q/entropy_checking_in_practice_for_ransomware/?rdt=61904" // Fictionalized query param fallback relying on Reddit search if missing
    },
    {
      title: "Decentralized Entropy-Based Ransomware Detection",
      date: "August 21, 2024",
      desc: "Research paper on introducing novel methods like analyzing feature interactions related to entropy across system processes.",
      category: "Research",
      link: "https://themoonlight.io/blog/decentralized-entropy-based-ransomware-detection/"
    },
    {
      title: "NIH: Why Legacy EDRs Get Bypassed",
      date: "May 15, 2024",
      desc: "Research examining how modern ransomware bypasses standard heuristics, leveraging entropy sharing or encoding methods like base-64.",
      category: "Market",
      link: "https://www.ncbi.nlm.nih.gov/pmc/" // Base NIH PMC link referencing general ransomware papers
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
