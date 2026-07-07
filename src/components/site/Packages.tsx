import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { packages } from "@/data/sections";

export function Packages() {
  return (
    <section id="packages" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="text-center mb-14">
          <p className="inline-block text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Health Packages</p>
          <h2 className="mt-3 font-display text-[36px] md:text-[48px] font-bold tracking-tight leading-[1.1] max-w-[720px] mx-auto">
            Preventive care packages <span className="text-gradient">designed for every life stage</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {packages.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className={`group relative rounded-3xl overflow-hidden border ${
                p.popular
                  ? "border-primary/40 shadow-[0_30px_60px_-20px_rgb(0_200_150/0.45)] lg:scale-[1.03]"
                  : "border-border shadow-[0_10px_40px_-20px_rgb(15_118_110/0.15)]"
              } bg-white transition-shadow`}
            >
              {p.popular && (
                <div className="absolute top-4 right-4 z-10 flex items-center gap-1 rounded-full bg-gradient-to-r from-primary to-accent text-white text-[10.5px] font-bold uppercase tracking-widest px-2.5 py-1">
                  <Sparkles className="h-3 w-3" /> Most Popular
                </div>
              )}
              {/* Gradient header */}
              <div className={`px-6 pt-8 pb-6 ${p.popular ? "bg-gradient-to-br from-primary to-accent text-white" : "bg-gradient-to-br from-secondary to-white"}`}>
                <h3 className={`font-display text-[18px] font-semibold ${p.popular ? "text-white" : "text-foreground"}`}>{p.name}</h3>
                <p className={`mt-4 num text-[36px] font-bold leading-none ${p.popular ? "text-white" : "text-foreground"}`}>
                  {p.price}
                </p>
                <p className={`mt-1 text-[12px] ${p.popular ? "text-white/80" : "text-muted-foreground"}`}>
                  {p.price === "Custom" ? "Tailored to your team" : "One-time payment"}
                </p>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-3 gap-2 text-center mb-5 pb-5 border-b border-border">
                  <div>
                    <p className="num text-[16px] font-bold">{p.tests}+</p>
                    <p className="text-[10.5px] text-muted-foreground uppercase tracking-wider">Tests</p>
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold">{p.duration}</p>
                    <p className="text-[10.5px] text-muted-foreground uppercase tracking-wider">Duration</p>
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold leading-tight">{p.ideal.split(" ")[0]}</p>
                    <p className="text-[10.5px] text-muted-foreground uppercase tracking-wider">Ideal</p>
                  </div>
                </div>
                <ul className="space-y-2.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[13px]">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 space-y-2">
                  <button className={`w-full rounded-full py-3 text-[13px] font-semibold transition ${
                    p.popular
                      ? "bg-gradient-to-r from-primary to-accent text-white shadow-[0_14px_30px_-10px_rgb(0_200_150/0.6)] hover:-translate-y-0.5"
                      : "bg-foreground text-white hover:bg-foreground/90"
                  }`}>
                    Book Package
                  </button>
                  <button className="w-full rounded-full py-3 text-[13px] font-semibold border border-border hover:bg-secondary/60 transition">
                    Compare
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
