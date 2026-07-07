import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-40 pb-20 md:pt-48 md:pb-28">
      {/* aurora */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_-10%,rgb(0_200_150/0.18),transparent_60%),radial-gradient(900px_500px_at_-10%_20%,rgb(232_255_247/0.9),transparent_60%)]" />
        <div className="absolute top-24 right-10 h-64 w-64 rounded-full bg-primary/15 blur-3xl animate-float" />
        <div className="absolute top-40 left-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl animate-float-alt" />
        <div className="absolute bottom-0 right-1/3 h-40 w-40 rounded-3xl glass opacity-60 rotate-12 animate-float-alt" />
      </div>

      <div className="mx-auto max-w-[1440px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          {eyebrow && (
            <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-3 font-display text-[40px] md:text-[64px] font-bold leading-[1.05] tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 text-[17px] md:text-[19px] text-muted-foreground leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </motion.div>
      </div>
    </section>
  );
}
