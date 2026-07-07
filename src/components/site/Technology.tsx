import { motion } from "framer-motion";
import { technology } from "@/data/sections";

export function Technology() {
  return (
    <section id="technology" className="relative py-24 md:py-32" style={{ backgroundColor: "var(--color-surface-alt)" }}>
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-[640px]">
            <p className="inline-block text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Advanced Technology</p>
            <h2 className="mt-3 font-display text-[36px] md:text-[48px] font-bold tracking-tight leading-[1.05]">
              Infrastructure built for <span className="text-gradient">precision medicine</span>.
            </h2>
          </div>
          <p className="text-[16px] text-muted-foreground max-w-[420px]">
            From imaging suites to robotic surgery, every system is chosen to deliver safer, faster and more accurate care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technology.map((t, i) => (
            <motion.article
              key={t.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl overflow-hidden bg-white border border-border shadow-[0_10px_40px_-20px_rgb(15_118_110/0.15)] hover:shadow-[0_30px_60px_-20px_rgb(0_200_150/0.35)] transition-shadow"
            >
              <div className="relative h-[220px] overflow-hidden">
                <img src={t.image} alt={t.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                {/* Animated glow */}
                <div className="absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-primary/40 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute top-4 left-4 h-10 w-10 rounded-2xl glass flex items-center justify-center">
                  <t.icon className="h-4.5 w-4.5 text-primary" strokeWidth={2.2} />
                </div>
                <h3 className="absolute bottom-4 left-4 right-4 font-display text-[19px] font-semibold text-white">{t.title}</h3>
              </div>
              <div className="p-5">
                <p className="text-[13px] text-muted-foreground leading-relaxed">{t.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {t.features.map((f) => (
                    <span key={f} className="text-[11px] font-semibold rounded-full bg-secondary text-secondary-foreground px-2.5 py-1">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
