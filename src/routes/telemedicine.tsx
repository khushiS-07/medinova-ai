import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Video, Smartphone, Monitor, Laptop, Tablet, MessageSquare, FileText, Clock, ShieldCheck, CheckCircle2, Star, PhoneCall } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { FloatingActions } from "@/components/site/FloatingActions";
import { PageHero } from "@/components/site/PageHero";
import { FAQ } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";
import { openBookingModal } from "@/components/site/BookAppointmentModal";
import { doctorsFull } from "@/data/doctorsData";

export const Route = createFileRoute("/telemedicine")({
  head: () => ({
    meta: [
      { title: "Telemedicine — MediNova AI" },
      { name: "description", content: "24/7 video consultations with certified doctors. Secure telemedicine platform with e-prescriptions and digital reports." },
      { property: "og:title", content: "Telemedicine — MediNova AI" },
      { property: "og:description", content: "Virtual care and online consultations at MediNova AI." },
    ],
  }),
  component: TelemedicinePage,
});

const steps = [
  { icon: Video, title: "Book a Slot", text: "Pick a specialist and time in under a minute." },
  { icon: PhoneCall, title: "Get Notified", text: "SMS & email reminders with a secure video link." },
  { icon: MessageSquare, title: "Video Consult", text: "HD video, chat, and file sharing with your doctor." },
  { icon: FileText, title: "Get e-Prescription", text: "Digital prescriptions and reports in your dashboard." },
];

const benefits = [
  { icon: Clock, title: "24×7 Availability", text: "Consult specialists any time — no waiting rooms." },
  { icon: ShieldCheck, title: "End-to-end Encrypted", text: "HIPAA-grade privacy on every consultation." },
  { icon: FileText, title: "Digital Records", text: "Every consult saved to your lifetime health file." },
  { icon: Star, title: "Top-rated Doctors", text: "500+ verified specialists across 40+ specialties." },
];

const features = [
  "HD 1080p video consultations",
  "Secure in-call chat and file sharing",
  "Digital e-prescriptions",
  "Automatic session recording (opt-in)",
  "Multi-party family consultations",
  "Real-time vital sharing from wearables",
];

const devices = [
  { icon: Smartphone, name: "iPhone & Android" },
  { icon: Tablet, name: "iPad & Tablets" },
  { icon: Laptop, name: "Mac & Windows" },
  { icon: Monitor, name: "Web Browser" },
];

const journey = [
  { step: "01", title: "Sign up in 60 seconds", text: "Create your profile — no paperwork." },
  { step: "02", title: "Describe your concern", text: "Our AI assistant suggests the right specialist." },
  { step: "03", title: "Meet your doctor", text: "Secure HD video call from anywhere." },
  { step: "04", title: "Continued care", text: "Prescriptions, follow-ups and specialist referrals." },
];

function TelemedicinePage() {
  const online = doctorsFull.filter((d) => d.available).slice(0, 4);
  return (
    <>
      <ScrollProgress />
      <main className="min-h-screen bg-background text-foreground">
        <Navbar />

        <PageHero
          eyebrow="Telemedicine"
          title={<>See a doctor <span className="text-gradient">without leaving home</span>.</>}
          subtitle="Book HD video consultations with 500+ specialists. Digital prescriptions, secure messaging and continued follow-up — all in one platform."
        >
          <div className="flex flex-wrap gap-3">
            <button onClick={() => openBookingModal()} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-[14px] font-semibold text-white shadow-[0_12px_30px_-10px_rgb(0_200_150/0.7)] hover:-translate-y-0.5 transition">
              <Video className="h-4 w-4" /> Start consultation
            </button>
            <a href="#how" className="inline-flex items-center rounded-full border border-border px-6 py-3 text-[14px] font-semibold hover:bg-secondary/60 transition">
              How it works
            </a>
          </div>
        </PageHero>

        {/* Consultation Process */}
        <section id="how" className="relative py-16 md:py-20">
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">The Process</p>
              <h2 className="mt-3 font-display text-[32px] md:text-[42px] font-bold leading-[1.1]">Four steps to a full <span className="text-gradient">virtual visit</span>.</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {steps.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative rounded-3xl bg-white border border-border p-6"
                >
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-[0_10px_25px_-8px_rgb(0_200_150/0.6)]">
                    <s.icon className="h-6 w-6 text-white" />
                  </div>
                  <p className="mt-4 num text-[12px] font-bold text-muted-foreground">STEP {i + 1}</p>
                  <h3 className="mt-1 font-display text-[18px] font-semibold">{s.title}</h3>
                  <p className="mt-2 text-[13.5px] text-muted-foreground leading-relaxed">{s.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="relative py-16 md:py-20" style={{ backgroundColor: "var(--color-surface-alt)" }}>
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="text-center mb-14">
              <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Benefits</p>
              <h2 className="mt-3 font-display text-[32px] md:text-[42px] font-bold leading-[1.1]">Care that fits your life.</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="rounded-3xl bg-white border border-border/70 p-7 shadow-[0_10px_40px_-20px_rgb(15_118_110/0.2)] hover:shadow-[0_30px_60px_-20px_rgb(0_200_150/0.35)] transition"
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

        {/* Video Features */}
        <section className="relative py-20 md:py-24">
          <div className="mx-auto max-w-[1440px] px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_80px_-30px_rgb(15_118_110/0.35)]">
              <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80" alt="Video consultation" className="w-full h-[520px] object-cover" />
              <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-5 flex items-center gap-4">
                <Video className="h-6 w-6 text-primary" />
                <div>
                  <p className="text-[13px] font-semibold">Secure HD Video</p>
                  <p className="text-[12px] text-muted-foreground">End-to-end encrypted, no downloads required.</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Video Consultation Features</p>
              <h2 className="mt-3 font-display text-[32px] md:text-[42px] font-bold leading-[1.1]">Built for real clinical <span className="text-gradient">conversations</span>.</h2>
              <ul className="mt-8 space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[15px]">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Devices */}
        <section className="relative py-16">
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="glass rounded-[36px] p-10 md:p-14">
              <div className="text-center mb-10">
                <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Works Everywhere</p>
                <h2 className="mt-3 font-display text-[28px] md:text-[36px] font-bold">Consult from any device.</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {devices.map((d) => (
                  <div key={d.name} className="rounded-2xl bg-white/70 backdrop-blur px-6 py-8 text-center border border-border/60">
                    <d.icon className="h-8 w-8 text-primary mx-auto" />
                    <p className="mt-3 font-display text-[14px] font-semibold">{d.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Online Specialists */}
        <section className="relative py-20 md:py-24">
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Online Now</p>
                <h2 className="mt-3 font-display text-[32px] md:text-[42px] font-bold leading-[1.1]">Specialists ready to consult.</h2>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {online.map((d, i) => (
                <motion.div
                  key={d.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="rounded-3xl bg-white border border-border/70 overflow-hidden shadow-[0_10px_40px_-20px_rgb(15_118_110/0.2)]"
                >
                  <div className="relative h-[240px] overflow-hidden bg-secondary">
                    <img src={d.photo} alt={d.name} loading="lazy" className="h-full w-full object-cover hover:scale-110 transition-transform duration-700" />
                    <span className="absolute top-3 left-3 rounded-full bg-primary text-white px-2.5 py-0.5 text-[10.5px] font-bold uppercase tracking-widest">Online</span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-[16px] font-semibold">{d.name}</h3>
                    <p className="text-[12.5px] text-primary font-medium">{d.role}</p>
                    <button onClick={() => openBookingModal()} className="mt-4 w-full rounded-full bg-foreground text-white py-2.5 text-[12.5px] font-semibold hover:bg-foreground/90 transition">
                      Video Consult
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Journey */}
        <section className="relative py-20" style={{ backgroundColor: "var(--color-surface-alt)" }}>
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Patient Journey</p>
              <h2 className="mt-3 font-display text-[32px] md:text-[42px] font-bold leading-[1.1]">From sign-up to specialist care.</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {journey.map((j, i) => (
                <motion.div
                  key={j.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="rounded-3xl bg-white border border-border p-6"
                >
                  <span className="num text-gradient font-display text-[36px] font-bold leading-none">{j.step}</span>
                  <h3 className="mt-3 font-display text-[17px] font-semibold">{j.title}</h3>
                  <p className="mt-2 text-[13.5px] text-muted-foreground leading-relaxed">{j.text}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <button onClick={() => openBookingModal()} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-7 py-3 text-[14px] font-semibold text-white shadow-[0_12px_30px_-10px_rgb(0_200_150/0.7)] hover:-translate-y-0.5 transition">
                Book video consultation <ArrowRight className="h-4 w-4" />
              </button>
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
