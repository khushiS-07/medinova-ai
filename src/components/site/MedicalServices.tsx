import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { services } from "@/data/sections";

export function MedicalServices() {
  return (
    <section id="services-detail" className="relative py-24 md:py-32" style={{ backgroundColor: "var(--color-surface-alt)" }}>
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="text-center mb-16">
          <p className="inline-block text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Medical Services</p>
          <h2 className="mt-3 font-display text-[36px] md:text-[48px] font-bold tracking-tight leading-[1.1] max-w-[720px] mx-auto">
            Full-spectrum care, <span className="text-gradient">every step of your journey</span>.
          </h2>
        </div>

        <div className="space-y-24 md:space-y-32">
          {services.map((s, i) => {
            const reverse = i % 2 === 1;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="relative">
                  <div className="absolute -inset-4 rounded-[44px] bg-gradient-to-br from-primary/25 via-secondary to-transparent blur-2xl" />
                  <div className="relative rounded-[36px] overflow-hidden border border-white/60 shadow-[var(--shadow-glass)]">
                    <img src={s.image} alt={s.title} loading="lazy" className="w-full h-[380px] md:h-[440px] object-cover" />
                    <div className="absolute top-5 left-5 glass rounded-2xl px-3 py-2 flex items-center gap-2">
                      <s.icon className="h-4 w-4 text-primary" />
                      <span className="text-[12px] font-semibold">{s.title}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <span className="num text-[13px] font-semibold text-primary">0{i + 1} / 0{services.length}</span>
                  <h3 className="mt-3 font-display text-[30px] md:text-[40px] font-bold leading-[1.1] tracking-tight">{s.title}</h3>
                  <p className="mt-4 text-[16px] text-muted-foreground leading-relaxed max-w-[520px]">{s.description}</p>
                  <ul className="mt-6 space-y-3">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-3 text-[15px]">
                        <span className="h-6 w-6 rounded-full bg-primary/15 flex items-center justify-center">
                          <Check className="h-3.5 w-3.5 text-primary" strokeWidth={3} />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-8 group inline-flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 text-[14px] font-semibold text-white shadow-[0_14px_30px_-10px_rgb(0_200_150/0.6)] hover:-translate-y-0.5 transition">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
