import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Users, Clock, Star, CheckCircle2, Building2, Sparkles, Microscope, Scan, HeartPulse, Bot } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { FloatingActions } from "@/components/site/FloatingActions";
import { PageHero } from "@/components/site/PageHero";
import { FAQ } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";
import { openBookingModal } from "@/components/site/BookAppointmentModal";
import { departments } from "@/data/sections";
import { doctorsFull } from "@/data/doctorsData";

export const Route = createFileRoute("/departments")({
  head: () => ({
    meta: [
      { title: "Departments — MediNova AI" },
      { name: "description", content: "Explore MediNova AI's 40+ specialty departments — cardiology, neurology, oncology, pediatrics and more, led by board-certified specialists." },
      { property: "og:title", content: "Departments — MediNova AI" },
      { property: "og:description", content: "Specialty departments at MediNova AI, led by board-certified specialists." },
    ],
  }),
  component: DepartmentsPage,
});

const facilities = [
  { title: "Advanced Operation Theatres", text: "12 modular OTs with laminar airflow and robotic assistance.", image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=900&q=80" },
  { title: "Critical Care Units", text: "Multi-parameter ICUs with 1:1 nursing and 24×7 intensivists.", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80" },
  { title: "Diagnostic Imaging Center", text: "3T MRI, 128-slice CT and AI-assisted radiology reads.", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=900&q=80" },
  { title: "NABL Accredited Laboratory", text: "Same-day results and molecular diagnostics.", image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=80" },
];

const equipment = [
  { icon: Scan, name: "3T MRI Scanner" },
  { icon: Microscope, name: "Digital Pathology" },
  { icon: Bot, name: "Robotic Surgery" },
  { icon: HeartPulse, name: "Cath Lab" },
];

const benefits = [
  "Board-certified specialists in every department",
  "Same-day appointment availability",
  "Integrated digital medical records",
  "Cashless insurance across major providers",
  "Multilingual patient coordinators",
  "Follow-up care within 48 hours",
];

function DepartmentsPage() {
  const featured = doctorsFull.slice(0, 4);
  return (
    <>
      <ScrollProgress />
      <main className="min-h-screen bg-background text-foreground">
        <Navbar />

        <PageHero
          eyebrow="Our Departments"
          title={<>40+ specialties, <span className="text-gradient">one unified experience</span>.</>}
          subtitle="Every department is led by board-certified specialists, backed by the latest medical technology and supported by dedicated care teams."
        >
          <div className="flex flex-wrap gap-3">
            <button onClick={() => openBookingModal()} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-[14px] font-semibold text-white shadow-[0_12px_30px_-10px_rgb(0_200_150/0.7)] hover:-translate-y-0.5 transition">
              Book a specialist <ArrowRight className="h-4 w-4" />
            </button>
            <a href="#grid" className="inline-flex items-center rounded-full border border-border px-6 py-3 text-[14px] font-semibold hover:bg-secondary/60 transition">
              Explore departments
            </a>
          </div>
        </PageHero>

        {/* Overview */}
        <section className="relative py-14">
          <div className="mx-auto max-w-[1440px] px-6 grid md:grid-cols-4 gap-6">
            {[
              { num: "40+", label: "Specialties" },
              { num: "500+", label: "Doctors" },
              { num: "24×7", label: "Emergency" },
              { num: "98%", label: "Satisfaction" },
            ].map((s) => (
              <div key={s.label} className="glass rounded-3xl p-6 text-center">
                <p className="num font-display text-[36px] font-bold text-gradient">{s.num}</p>
                <p className="mt-1 text-[13px] text-muted-foreground font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Department Grid */}
        <section id="grid" className="relative py-20 md:py-24">
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Department Directory</p>
              <h2 className="mt-3 font-display text-[34px] md:text-[46px] font-bold leading-[1.1]">Care built around <span className="text-gradient">every life stage</span>.</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {departments.map((d, i) => (
                <motion.article
                  key={d.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
                  whileHover={{ y: -8 }}
                  className="group rounded-3xl bg-white border border-border overflow-hidden shadow-[0_10px_40px_-20px_rgb(15_118_110/0.15)] hover:shadow-[0_30px_60px_-20px_rgb(0_200_150/0.35)] transition-shadow"
                >
                  <div className="relative h-[180px] overflow-hidden">
                    <img src={d.image} alt={d.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                    <div className="absolute top-4 left-4 h-11 w-11 rounded-2xl glass flex items-center justify-center">
                      <d.icon className="h-5 w-5 text-primary" strokeWidth={2.2} />
                    </div>
                    <h3 className="absolute bottom-4 left-4 right-4 font-display text-[20px] font-semibold text-white">{d.name}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-[13.5px] text-muted-foreground leading-relaxed line-clamp-3">{d.description}</p>
                    <div className="mt-5 grid grid-cols-2 gap-3 text-[12px]">
                      <div className="rounded-2xl bg-secondary/60 px-3 py-2.5">
                        <div className="flex items-center gap-1.5 text-muted-foreground"><Users className="h-3.5 w-3.5" /> Specialists</div>
                        <p className="num mt-0.5 text-[15px] font-bold">{d.specialists}+</p>
                      </div>
                      <div className="rounded-2xl bg-secondary/60 px-3 py-2.5">
                        <div className="flex items-center gap-1.5 text-muted-foreground"><Clock className="h-3.5 w-3.5" /> Avg. wait</div>
                        <p className="num mt-0.5 text-[15px] font-bold">{d.waitTime}</p>
                      </div>
                    </div>
                    <button onClick={() => openBookingModal()} className="mt-5 w-full rounded-full bg-foreground text-white py-2.5 text-[13px] font-semibold hover:bg-foreground/90 transition">
                      Book Appointment
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Specialists */}
        <section className="relative py-20 md:py-24" style={{ backgroundColor: "var(--color-surface-alt)" }}>
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Featured Specialists</p>
                <h2 className="mt-3 font-display text-[32px] md:text-[42px] font-bold leading-[1.1]">Meet department leads.</h2>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featured.map((d, i) => (
                <motion.div
                  key={d.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="rounded-3xl bg-white border border-border/70 overflow-hidden shadow-[0_10px_40px_-20px_rgb(15_118_110/0.2)]"
                >
                  <div className="h-[240px] overflow-hidden bg-secondary">
                    <img src={d.photo} alt={d.name} loading="lazy" className="h-full w-full object-cover hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-[16px] font-semibold">{d.name}</h3>
                    <p className="text-[12.5px] text-primary font-medium">{d.role}</p>
                    <div className="mt-2 flex items-center gap-1 text-[12px] text-muted-foreground">
                      <Star className="h-3.5 w-3.5 fill-primary text-primary" /> {d.rating} · {d.reviews} reviews
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Facilities */}
        <section className="relative py-20 md:py-24">
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Medical Facilities</p>
              <h2 className="mt-3 font-display text-[32px] md:text-[42px] font-bold leading-[1.1]">World-class infrastructure.</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {facilities.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="rounded-3xl overflow-hidden border border-border bg-white group"
                >
                  <div className="h-[180px] overflow-hidden">
                    <img src={f.image} alt={f.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-primary">
                      <Building2 className="h-4 w-4" />
                      <h3 className="font-display text-[15px] font-semibold text-foreground">{f.title}</h3>
                    </div>
                    <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed">{f.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipment */}
        <section className="relative py-16">
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="glass rounded-[36px] p-10 md:p-14">
              <div className="text-center mb-10">
                <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Technology Showcase</p>
                <h2 className="mt-3 font-display text-[28px] md:text-[36px] font-bold">Equipment powering our departments.</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {equipment.map((e) => (
                  <div key={e.name} className="rounded-2xl bg-white/70 backdrop-blur px-6 py-8 text-center border border-border/60">
                    <e.icon className="h-8 w-8 text-primary mx-auto" />
                    <p className="mt-3 font-display text-[14px] font-semibold">{e.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Patient Benefits */}
        <section className="relative py-20 md:py-24">
          <div className="mx-auto max-w-[1440px] px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Patient Benefits</p>
              <h2 className="mt-3 font-display text-[32px] md:text-[42px] font-bold leading-[1.1]">Why patients choose <span className="text-gradient">MediNova AI</span>.</h2>
              <ul className="mt-8 space-y-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-[15px]">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{b}</span>
                  </li>
                ))}
              </ul>
              <button onClick={() => openBookingModal()} className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-[14px] font-semibold text-white shadow-[0_12px_30px_-10px_rgb(0_200_150/0.7)] hover:-translate-y-0.5 transition">
                <Sparkles className="h-4 w-4" /> Book a specialist
              </button>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_80px_-30px_rgb(15_118_110/0.35)]">
              <img src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=1200&q=80" alt="MediNova care team" className="w-full h-[520px] object-cover" />
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
