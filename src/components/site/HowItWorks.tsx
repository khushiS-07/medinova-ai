import { motion } from "framer-motion";
import { steps } from "@/data/sections";

export function HowItWorks() {
  return (
    <section id="how" className="relative py-24 md:py-32" style={{ backgroundColor: "var(--color-surface-alt)" }}>
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="text-center mb-16">
          <p className="inline-block text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">How It Works</p>
          <h2 className="mt-3 font-display text-[36px] md:text-[48px] font-bold tracking-tight leading-[1.1] max-w-[720px] mx-auto">
            Your healthcare journey, <span className="text-gradient">five simple steps</span>.
          </h2>
        </div>

        <div className="relative">
          {/* Progress line */}
          <div className="hidden lg:block absolute left-0 right-0 top-[76px] h-[3px] bg-border rounded-full overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
              style={{ originX: 0 }}
              className="h-full bg-gradient-to-r from-primary to-accent"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative z-10 h-[76px] w-[76px] rounded-full bg-white border-2 border-primary/30 flex items-center justify-center shadow-[0_10px_30px_-10px_rgb(0_200_150/0.4)]">
                    <s.icon className="h-6 w-6 text-primary" strokeWidth={2.2} />
                    <span className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-gradient-to-br from-primary to-accent text-white text-[12px] font-bold flex items-center justify-center num">
                      {i + 1}
                    </span>
                  </div>
                  <div className="mt-5 glass rounded-3xl p-5 w-full">
                    <h3 className="font-display text-[16px] font-semibold">{s.title}</h3>
                    <p className="mt-1.5 text-[13px] text-muted-foreground leading-relaxed">{s.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
