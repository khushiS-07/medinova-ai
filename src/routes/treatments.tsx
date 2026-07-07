import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, Sparkles, HeartPulse, Brain, Bone, Baby, Eye, Activity, Scan, Bot } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { FloatingActions } from "@/components/site/FloatingActions";
import { PageHero } from "@/components/site/PageHero";
import { FAQ } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";
import { openBookingModal } from "@/components/site/BookAppointmentModal";

export const Route = createFileRoute("/treatments")({
  head: () => ({
    meta: [
      { title: "Treatments — MediNova AI" },
      { name: "description", content: "Advanced treatments and procedures at MediNova AI — from robotic surgery and cardiac care to physiotherapy and preventive medicine." },
      { property: "og:title", content: "Treatments — MediNova AI" },
      { property: "og:description", content: "Advanced medical treatments and procedures at MediNova AI." },
    ],
  }),
  component: TreatmentsPage,
});

const categories = [
  { icon: HeartPulse, name: "Cardiac Care", count: 18 },
  { icon: Brain, name: "Neurological", count: 14 },
  { icon: Bone, name: "Orthopedic", count: 21 },
  { icon: Baby, name: "Pediatric", count: 12 },
  { icon: Eye, name: "Vision & LASIK", count: 9 },
  { icon: Activity, name: "Rehab & Physio", count: 16 },
];

const treatments = [
  { name: "Coronary Angioplasty", category: "Cardiac", duration: "1–2 hours", recovery: "3–5 days", image: "https://images.unsplash.com/photo-1628348070889-cb656235b4eb?auto=format&fit=crop&w=1000&q=80", text: "Minimally invasive procedure to open blocked coronary arteries using stents." },
  { name: "Knee Replacement", category: "Orthopedic", duration: "2 hours", recovery: "6 weeks", image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=1000&q=80", text: "Robotic-assisted total knee replacement with rapid recovery protocol." },
  { name: "LASIK Vision Correction", category: "Ophthalmology", duration: "20 min", recovery: "24 hours", image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=1000&q=80", text: "Bladeless LASIK to correct nearsightedness, farsightedness and astigmatism." },
  { name: "Cataract Surgery", category: "Ophthalmology", duration: "30 min", recovery: "2 days", image: "https://images.unsplash.com/photo-1579165466991-467135ad3110?auto=format&fit=crop&w=1000&q=80", text: "Phaco cataract surgery with premium multifocal lens implants." },
  { name: "Robotic Prostatectomy", category: "Urology", duration: "3 hours", recovery: "3 weeks", image: "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?auto=format&fit=crop&w=1000&q=80", text: "Da Vinci robotic prostate removal with nerve-sparing precision." },
  { name: "IVF & Fertility", category: "Gynecology", duration: "Cycle-based", recovery: "Ongoing", image: "https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&w=1000&q=80", text: "Personalized fertility programs with world-class success rates." },
];

const timeline = [
  { day: "Day 0", title: "Consultation & Diagnosis", text: "Full assessment, imaging and personalized treatment plan." },
  { day: "Day 1", title: "Procedure", text: "Treatment performed by board-certified specialists in modern facilities." },
  { day: "Day 2–7", title: "Recovery & Monitoring", text: "In-hospital observation and dedicated recovery care." },
  { day: "Week 2+", title: "Follow-up & Rehab", text: "Structured follow-ups, physiotherapy and long-term care planning." },
];

const beforeCare = ["Complete pre-op diagnostics", "Anesthesia consultation", "Dietary and medication guidance", "Insurance pre-authorization"];
const afterCare = ["24×7 recovery hotline", "Digital discharge summary", "At-home physiotherapy", "Scheduled follow-up appointments"];

const tech = [
  { icon: Bot, name: "Robotic Surgery" },
  { icon: Scan, name: "3T MRI & CT" },
  { icon: HeartPulse, name: "Cath Lab" },
  { icon: Sparkles, name: "AI Diagnostics" },
];

function TreatmentsPage() {
  return (
    <>
      <ScrollProgress />
      <main className="min-h-screen bg-background text-foreground">
        <Navbar />
        <PageHero
          eyebrow="Advanced Treatments"
          title={<>Modern medicine, <span className="text-gradient">delivered with care</span>.</>}
          subtitle="From robotic surgery and cardiac interventions to preventive medicine and rehabilitation — explore the full range of treatments at MediNova AI."
        >
          <div className="flex flex-wrap gap-3">
            <button onClick={() => openBookingModal()} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-[14px] font-semibold text-white shadow-[0_12px_30px_-10px_rgb(0_200_150/0.7)] hover:-translate-y-0.5 transition">
              Consult a specialist <ArrowRight className="h-4 w-4" />
            </button>
            <a href="#treatments" className="inline-flex items-center rounded-full border border-border px-6 py-3 text-[14px] font-semibold hover:bg-secondary/60 transition">
              Browse treatments
            </a>
          </div>
        </PageHero>

        {/* Categories */}
        <section className="relative py-14">
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((c, i) => (
                <motion.button
                  key={c.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  whileHover={{ y: -4 }}
                  onClick={() => openBookingModal()}
                  className="glass rounded-2xl px-4 py-5 text-center hover:shadow-[0_20px_50px_-20px_rgb(0_200_150/0.4)] transition"
                >
                  <c.icon className="h-6 w-6 text-primary mx-auto" />
                  <p className="mt-2 text-[13px] font-semibold">{c.name}</p>
                  <p className="text-[11px] text-muted-foreground">{c.count} procedures</p>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Cards */}
        <section id="treatments" className="relative py-16 md:py-20">
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Featured Procedures</p>
              <h2 className="mt-3 font-display text-[32px] md:text-[42px] font-bold leading-[1.1]">Detailed <span className="text-gradient">treatments</span>.</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {treatments.map((t, i) => (
                <motion.article
                  key={t.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
                  whileHover={{ y: -8 }}
                  className="group rounded-3xl bg-white border border-border overflow-hidden shadow-[0_10px_40px_-20px_rgb(15_118_110/0.15)] hover:shadow-[0_30px_60px_-20px_rgb(0_200_150/0.35)]"
                >
                  <div className="relative h-[200px] overflow-hidden">
                    <img src={t.image} alt={t.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-primary">{t.category}</span>
                    <h3 className="absolute bottom-4 left-4 right-4 font-display text-[19px] font-semibold text-white">{t.name}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-[13.5px] text-muted-foreground leading-relaxed">{t.text}</p>
                    <div className="mt-4 grid grid-cols-2 gap-3 text-[12px]">
                      <div className="rounded-2xl bg-secondary/60 px-3 py-2.5">
                        <div className="flex items-center gap-1.5 text-muted-foreground"><Clock className="h-3.5 w-3.5" /> Duration</div>
                        <p className="mt-0.5 text-[13px] font-bold">{t.duration}</p>
                      </div>
                      <div className="rounded-2xl bg-secondary/60 px-3 py-2.5">
                        <div className="flex items-center gap-1.5 text-muted-foreground"><Activity className="h-3.5 w-3.5" /> Recovery</div>
                        <p className="mt-0.5 text-[13px] font-bold">{t.recovery}</p>
                      </div>
                    </div>
                    <button onClick={() => openBookingModal()} className="mt-5 w-full rounded-full bg-foreground text-white py-2.5 text-[13px] font-semibold hover:bg-foreground/90 transition">
                      Consult about this
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Recovery Timeline */}
        <section className="relative py-20" style={{ backgroundColor: "var(--color-surface-alt)" }}>
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Recovery Timeline</p>
              <h2 className="mt-3 font-display text-[32px] md:text-[42px] font-bold leading-[1.1]">A structured path to recovery.</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {timeline.map((t, i) => (
                <motion.div
                  key={t.day}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="rounded-3xl bg-white border border-border p-6 relative"
                >
                  <span className="inline-block rounded-full bg-primary/10 text-primary px-3 py-1 text-[11px] font-bold uppercase tracking-wider">{t.day}</span>
                  <h3 className="mt-4 font-display text-[17px] font-semibold">{t.title}</h3>
                  <p className="mt-2 text-[13.5px] text-muted-foreground leading-relaxed">{t.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Before & After Care */}
        <section className="relative py-20">
          <div className="mx-auto max-w-[1440px] px-6 grid md:grid-cols-2 gap-6">
            {[
              { title: "Before Care", items: beforeCare, color: "from-primary/10 to-accent/5" },
              { title: "After Care", items: afterCare, color: "from-accent/10 to-primary/5" },
            ].map((s) => (
              <div key={s.title} className={`rounded-3xl p-8 border border-border bg-gradient-to-br ${s.color}`}>
                <h3 className="font-display text-[22px] font-bold">{s.title}</h3>
                <ul className="mt-5 space-y-3">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-[14.5px]">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Used */}
        <section className="relative py-16">
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="glass rounded-[36px] p-10 md:p-14">
              <div className="text-center mb-10">
                <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Technology Used</p>
                <h2 className="mt-3 font-display text-[28px] md:text-[36px] font-bold">Precision powered by advanced tools.</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {tech.map((t) => (
                  <div key={t.name} className="rounded-2xl bg-white/70 backdrop-blur px-6 py-8 text-center border border-border/60">
                    <t.icon className="h-8 w-8 text-primary mx-auto" />
                    <p className="mt-3 font-display text-[14px] font-semibold">{t.name}</p>
                  </div>
                ))}
              </div>
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
