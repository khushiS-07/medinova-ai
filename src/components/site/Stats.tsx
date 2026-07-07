import { motion } from "framer-motion";
import CountUpImport from "react-countup";
// react-countup ships CJS only; normalize default across SSR/CJS/ESM interop
const CountUp = ((CountUpImport as unknown as { default?: typeof CountUpImport })?.default ?? CountUpImport) as typeof CountUpImport;
import { useInView } from "react-intersection-observer";
import { Users, Stethoscope, Building2, Award, Heart } from "lucide-react";
import { stats } from "@/data/features";

const icons = [Users, Stethoscope, Building2, Award, Heart];

export function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <section ref={ref} className="relative py-24" style={{ backgroundColor: "var(--color-surface-alt)" }}>
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="text-center mb-14">
          <p className="inline-block text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">By the Numbers</p>
          <h2 className="mt-3 font-display text-[36px] md:text-[48px] font-bold tracking-tight leading-[1.1] max-w-[720px] mx-auto">
            A platform patients and doctors <span className="text-gradient">actually trust</span>.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {stats.map((s, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="group relative glass rounded-3xl p-6 overflow-hidden"
              >
                <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center mb-5">
                    <Icon className="h-5 w-5 text-accent" strokeWidth={2.2} />
                  </div>
                  <div className="num text-[40px] md:text-[44px] font-bold leading-none tracking-tight">
                    {inView && <CountUp end={s.value} duration={2.4} separator="," />}
                    <span className="text-primary">{s.suffix}</span>
                  </div>
                  <h3 className="mt-3 font-display text-[16px] font-semibold">{s.title}</h3>
                  <p className="mt-1 text-[13px] text-muted-foreground leading-snug">{s.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
