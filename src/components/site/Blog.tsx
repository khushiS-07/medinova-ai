import { motion } from "framer-motion";
import { Clock, ArrowUpRight } from "lucide-react";
import { posts } from "@/data/sections";

export function Blog() {
  return (
    <section id="blog" className="relative py-24 md:py-32" style={{ backgroundColor: "var(--color-surface-alt)" }}>
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-[640px]">
            <p className="inline-block text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Health Journal</p>
            <h2 className="mt-3 font-display text-[36px] md:text-[48px] font-bold tracking-tight leading-[1.05]">
              Read the latest from our <span className="text-gradient">medical editorial</span>.
            </h2>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-[14px] font-semibold text-primary hover:gap-3 transition-all">
            View all articles <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-[0_10px_40px_-20px_rgb(15_118_110/0.15)]">
                <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute top-4 left-4 rounded-full bg-white/95 backdrop-blur px-3 py-1.5 text-[11px] font-semibold text-primary uppercase tracking-wider">
                  {p.category}
                </span>
              </div>
              <div className="mt-5">
                <div className="flex items-center gap-3 text-[12px] text-muted-foreground">
                  <span>{p.date}</span>
                  <span className="h-1 w-1 rounded-full bg-border" />
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {p.readTime}</span>
                </div>
                <h3 className="mt-3 font-display text-[20px] font-semibold leading-snug tracking-tight group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-[13px] text-muted-foreground">By <span className="text-foreground font-medium">{p.author}</span></p>
                  <span className="inline-flex items-center gap-1 text-[13px] font-semibold text-primary group-hover:gap-2 transition-all">
                    Read <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
