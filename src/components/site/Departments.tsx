import { motion } from "framer-motion";
import { ArrowUpRight, Users, Clock } from "lucide-react";
import { useRef } from "react";
import { departments } from "@/data/sections";

export function Departments() {
  const scroller = useRef<HTMLDivElement>(null);

  return (
    <section id="departments" className="relative py-24 md:py-32" style={{ backgroundColor: "var(--color-surface-alt)" }}>
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-[640px]">
            <p className="inline-block text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Featured Departments</p>
            <h2 className="mt-3 font-display text-[36px] md:text-[48px] font-bold tracking-tight leading-[1.05]">
              Specialties designed around <span className="text-gradient">every stage of life</span>.
            </h2>
          </div>
          <p className="text-[16px] text-muted-foreground max-w-[420px]">
            Explore our core clinical departments — each led by board-certified specialists and equipped with modern technology.
          </p>
        </div>

        {/* Desktop / Tablet grid, mobile carousel */}
        <div
          ref={scroller}
          className="flex md:grid gap-6 md:grid-cols-2 lg:grid-cols-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0 pb-4 md:pb-0"
        >
          {departments.map((d, i) => (
            <motion.article
              key={d.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="group relative shrink-0 snap-center w-[85%] md:w-auto rounded-3xl bg-white border border-border overflow-hidden shadow-[0_10px_40px_-20px_rgb(15_118_110/0.15)] hover:shadow-[0_30px_60px_-20px_rgb(0_200_150/0.35)] transition-shadow"
            >
              <div className="relative h-[180px] overflow-hidden">
                <img
                  src={d.image}
                  alt={d.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-primary/10 mix-blend-overlay" />
                <div className="absolute top-4 left-4 h-11 w-11 rounded-2xl glass flex items-center justify-center">
                  <d.icon className="h-5 w-5 text-primary" strokeWidth={2.2} />
                </div>
                <h3 className="absolute bottom-4 left-4 right-4 font-display text-[20px] font-semibold text-white">{d.name}</h3>
              </div>

              <div className="p-6">
                <p className="text-[13.5px] text-muted-foreground leading-relaxed line-clamp-3">{d.description}</p>
                <div className="mt-5 grid grid-cols-2 gap-3 text-[12px]">
                  <div className="rounded-2xl bg-secondary/60 px-3 py-2.5">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Users className="h-3.5 w-3.5" /> Specialists
                    </div>
                    <p className="num mt-0.5 text-[15px] font-bold text-foreground">{d.specialists}+</p>
                  </div>
                  <div className="rounded-2xl bg-secondary/60 px-3 py-2.5">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" /> Avg. wait
                    </div>
                    <p className="num mt-0.5 text-[15px] font-bold text-foreground">{d.waitTime}</p>
                  </div>
                </div>
                <div className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary group-hover:gap-2.5 transition-all">
                  Read more
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
