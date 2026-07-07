import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles, HeartPulse, ShieldCheck, TestTube2, Award } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { FloatingActions } from "@/components/site/FloatingActions";
import { PageHero } from "@/components/site/PageHero";
import { FAQ } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";
import { openBookingModal } from "@/components/site/BookAppointmentModal";
import { packages } from "@/data/sections";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Health Packages — MediNova AI" },
      { name: "description", content: "Preventive health packages and executive check-ups at MediNova AI. Full-body screening, women's wellness, senior care and corporate wellness plans." },
      { property: "og:title", content: "Health Packages — MediNova AI" },
      { property: "og:description", content: "Preventive care packages at MediNova AI." },
    ],
  }),
  component: PackagesPage,
});

const included = [
  "Complete Blood Count (CBC)",
  "Lipid Profile & Cholesterol",
  "Blood Sugar (Fasting + HbA1c)",
  "Liver & Kidney Function",
  "Thyroid Panel (T3, T4, TSH)",
  "Vitamin D & B12",
  "ECG & Cardiac Assessment",
  "BMI, BP & Vitals",
  "Doctor Consultation",
  "Personalized Health Report",
];

const healthBenefits = [
  { icon: HeartPulse, title: "Early Detection", text: "Catch conditions before symptoms appear." },
  { icon: ShieldCheck, title: "Preventive Care", text: "Reduce long-term risk with a personalized plan." },
  { icon: TestTube2, title: "Lab-verified", text: "NABL accredited lab reports you can trust." },
  { icon: Award, title: "Expert Guidance", text: "Follow-up consultation with a senior physician." },
];

const compareRows = [
  { label: "Number of tests", values: packages.map((p) => `${p.tests}+`) },
  { label: "Duration", values: packages.map((p) => p.duration) },
  { label: "Ideal for", values: packages.map((p) => p.ideal) },
  { label: "Doctor consultation", values: packages.map(() => "✓") },
  { label: "Home sample pickup", values: packages.map((p) => (p.name === "Basic Health Checkup" ? "—" : "✓")) },
  { label: "Digital health report", values: packages.map(() => "✓") },
];

function PackagesPage() {
  const recommended = packages.filter((p) => p.popular || p.name === "Women's Wellness");
  return (
    <>
      <ScrollProgress />
      <main className="min-h-screen bg-background text-foreground">
        <Navbar />

        <PageHero
          eyebrow="Health Packages"
          title={<>Preventive care <span className="text-gradient">designed for every life stage</span>.</>}
          subtitle="Comprehensive health screenings, executive check-ups and wellness bundles — with same-day reports and specialist follow-up."
        >
          <div className="flex flex-wrap gap-3">
            <button onClick={() => openBookingModal()} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-[14px] font-semibold text-white shadow-[0_12px_30px_-10px_rgb(0_200_150/0.7)] hover:-translate-y-0.5 transition">
              Book a package <ArrowRight className="h-4 w-4" />
            </button>
            <a href="#pricing" className="inline-flex items-center rounded-full border border-border px-6 py-3 text-[14px] font-semibold hover:bg-secondary/60 transition">
              Compare packages
            </a>
          </div>
        </PageHero>

        {/* Pricing Cards */}
        <section id="pricing" className="relative py-16 md:py-20">
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {packages.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: i * 0.08 }}
                  whileHover={{ y: -8 }}
                  className={`group relative rounded-3xl overflow-hidden border ${p.popular ? "border-primary/40 shadow-[0_30px_60px_-20px_rgb(0_200_150/0.45)] lg:scale-[1.03]" : "border-border shadow-[0_10px_40px_-20px_rgb(15_118_110/0.15)]"} bg-white transition-shadow`}
                >
                  {p.popular && (
                    <div className="absolute top-4 right-4 z-10 flex items-center gap-1 rounded-full bg-gradient-to-r from-primary to-accent text-white text-[10.5px] font-bold uppercase tracking-widest px-2.5 py-1">
                      <Sparkles className="h-3 w-3" /> Most Popular
                    </div>
                  )}
                  <div className={`px-6 pt-8 pb-6 ${p.popular ? "bg-gradient-to-br from-primary to-accent text-white" : "bg-gradient-to-br from-secondary to-white"}`}>
                    <h3 className={`font-display text-[18px] font-semibold ${p.popular ? "text-white" : "text-foreground"}`}>{p.name}</h3>
                    <p className={`mt-4 num text-[36px] font-bold leading-none ${p.popular ? "text-white" : "text-foreground"}`}>{p.price}</p>
                    <p className={`mt-1 text-[12px] ${p.popular ? "text-white/80" : "text-muted-foreground"}`}>{p.price === "Custom" ? "Tailored to your team" : "One-time payment"}</p>
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
                    <button onClick={() => openBookingModal()} className={`mt-6 w-full rounded-full py-3 text-[13px] font-semibold transition ${p.popular ? "bg-gradient-to-r from-primary to-accent text-white shadow-[0_14px_30px_-10px_rgb(0_200_150/0.6)] hover:-translate-y-0.5" : "bg-foreground text-white hover:bg-foreground/90"}`}>
                      Book Package
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Included Tests */}
        <section className="relative py-20" style={{ backgroundColor: "var(--color-surface-alt)" }}>
          <div className="mx-auto max-w-[1440px] px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">What's Included</p>
              <h2 className="mt-3 font-display text-[32px] md:text-[42px] font-bold leading-[1.1]">Every package covers the <span className="text-gradient">essentials</span>.</h2>
              <p className="mt-4 text-[15px] text-muted-foreground leading-relaxed">Sample essentials included across all packages — additional advanced tests vary by package tier.</p>
              <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3">
                {included.map((t) => (
                  <li key={t} className="flex items-start gap-2 text-[14px]">
                    <Check className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_80px_-30px_rgb(15_118_110/0.35)]">
              <img src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80" alt="Health tests" className="w-full h-[520px] object-cover" />
            </div>
          </div>
        </section>

        {/* Health Benefits */}
        <section className="relative py-20">
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="text-center mb-14">
              <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Health Benefits</p>
              <h2 className="mt-3 font-display text-[32px] md:text-[42px] font-bold leading-[1.1]">Preventive care that pays off.</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {healthBenefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="rounded-3xl bg-white border border-border/70 p-7 shadow-[0_10px_40px_-20px_rgb(15_118_110/0.2)]"
                >
                  <div className="h-12 w-12 rounded-2xl bg-secondary flex items-center justify-center">
                    <b.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-5 font-display text-[17px] font-semibold">{b.title}</h3>
                  <p className="mt-2 text-[13.5px] text-muted-foreground leading-relaxed">{b.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="relative py-20">
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="text-center mb-10 max-w-2xl mx-auto">
              <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Package Comparison</p>
              <h2 className="mt-3 font-display text-[32px] md:text-[42px] font-bold leading-[1.1]">Compare features side by side.</h2>
            </div>
            <div className="overflow-x-auto rounded-3xl border border-border bg-white shadow-[0_10px_40px_-20px_rgb(15_118_110/0.15)]">
              <table className="w-full min-w-[900px]">
                <thead>
                  <tr className="bg-secondary/60">
                    <th className="text-left px-6 py-4 text-[13px] font-semibold uppercase tracking-widest text-muted-foreground">Feature</th>
                    {packages.map((p) => (
                      <th key={p.name} className="text-left px-6 py-4 text-[13px] font-semibold">{p.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map((row, i) => (
                    <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-secondary/20"}>
                      <td className="px-6 py-4 text-[13.5px] font-medium">{row.label}</td>
                      {row.values.map((v, j) => (
                        <td key={j} className="px-6 py-4 text-[13.5px] text-muted-foreground">{v}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Recommended */}
        <section className="relative py-16" style={{ backgroundColor: "var(--color-surface-alt)" }}>
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="text-center mb-10">
              <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Recommended For You</p>
              <h2 className="mt-3 font-display text-[28px] md:text-[36px] font-bold leading-[1.1]">Popular picks this month.</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {recommended.map((p) => (
                <div key={p.name} className="rounded-3xl bg-white border border-primary/30 p-7 shadow-[0_20px_50px_-20px_rgb(0_200_150/0.35)]">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-display text-[20px] font-bold">{p.name}</h3>
                    <p className="num text-gradient text-[24px] font-bold">{p.price}</p>
                  </div>
                  <p className="mt-2 text-[13.5px] text-muted-foreground">{p.tests}+ tests · {p.duration} · Ideal for {p.ideal.toLowerCase()}</p>
                  <button onClick={() => openBookingModal()} className="mt-5 w-full rounded-full bg-gradient-to-r from-primary to-accent text-white py-3 text-[13.5px] font-semibold hover:-translate-y-0.5 transition">
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FAQ />
        <FinalCTA />
        <Footer />
      </main>
      <FloatingActions />
    </>
  );
}
