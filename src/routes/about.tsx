import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import CountUpImport from "react-countup";
const CountUp = ((CountUpImport as unknown as { default?: typeof CountUpImport })?.default ?? CountUpImport) as typeof CountUpImport;
import { useInView } from "react-intersection-observer";
import {
  Heart, Lightbulb, HandHeart, Eye, Award, Users,
  ShieldCheck, Sparkles, ArrowRight, Calendar,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { FloatingActions } from "@/components/site/FloatingActions";
import { PageHero } from "@/components/site/PageHero";
import { openBookingModal } from "@/components/site/BookAppointmentModal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About MediNova AI — Our Story, Mission & Leadership" },
      { name: "description", content: "MediNova AI combines compassionate healthcare with advanced technology. Learn about our journey, mission, values, leadership team and certifications." },
      { property: "og:title", content: "About MediNova AI — Our Story, Mission & Leadership" },
      { property: "og:description", content: "Combining compassionate healthcare with advanced technology to create a better patient experience." },
    ],
  }),
  component: AboutPage,
});

const timeline = [
  { year: "2012", title: "Founded", text: "MediNova AI was founded with a mission to reimagine patient-centered healthcare." },
  { year: "2015", title: "Opened First Specialty Center", text: "Launched our flagship multi-specialty center with 12 departments." },
  { year: "2018", title: "Digital Medical Records", text: "Introduced fully encrypted lifetime digital health records for every patient." },
  { year: "2022", title: "Telemedicine Platform", text: "Rolled out HD video consultations connecting patients to specialists worldwide." },
  { year: "2026", title: "AI Healthcare Experience", text: "Unveiled an AI-assisted care platform trusted by 250,000+ patients." },
];

const values = [
  { icon: ShieldCheck, title: "Integrity", text: "Honest care, transparent pricing and ethical medical practice at every step." },
  { icon: Lightbulb, title: "Innovation", text: "Adopting the latest technology to elevate diagnosis, treatment and recovery." },
  { icon: HandHeart, title: "Compassion", text: "Every interaction is grounded in empathy, dignity and human connection." },
  { icon: Eye, title: "Transparency", text: "Clear information about your diagnosis, treatment plan and expected outcomes." },
  { icon: Award, title: "Excellence", text: "Rigorous clinical standards benchmarked against the best hospitals globally." },
  { icon: Users, title: "Patient First", text: "Care built around your life — accessible, personalised and long-lasting." },
];

const stats = [
  { value: 500, suffix: "+", label: "Doctors" },
  { value: 250000, suffix: "+", label: "Patients" },
  { value: 98, suffix: "%", label: "Satisfaction" },
  { value: 30, suffix: "+", label: "Years Experience" },
];

const leaders = [
  { name: "Dr. Aditi Menon", role: "Chief Executive Officer", photo: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=80", bio: "Two decades leading digital-first healthcare organisations across Asia." },
  { name: "Dr. Rahul Deshmukh", role: "Medical Director", photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80", bio: "Board-certified cardiologist ensuring clinical excellence across 40+ specialties." },
  { name: "Dr. Elena Rossi", role: "Chief Surgeon", photo: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=600&q=80", bio: "Pioneer in robotic-assisted minimally invasive surgery with 5,000+ procedures." },
  { name: "Arjun Patel", role: "Chief Technology Officer", photo: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=600&q=80", bio: "Building the AI backbone that powers MediNova's personalised care experience." },
];

const certifications = ["NABH Accredited", "ISO 9001:2015", "WHO Collaborating Centre", "Digital Healthcare Standards"];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });
  return (
    <span ref={ref} className="num">
      {inView ? <CountUp end={value} duration={2.2} separator="," /> : 0}
      {suffix}
    </span>
  );
}

function AboutPage() {
  return (
    <>
      <ScrollProgress />
      <main className="min-h-screen bg-background text-foreground">
        <Navbar />

        <PageHero
          eyebrow="About Us"
          title={<>About <span className="text-gradient">MediNova AI</span></>}
          subtitle="Combining compassionate healthcare with advanced technology to create a better patient experience."
        >
          <div className="flex flex-wrap gap-3">
            <Link to="/doctors" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-[14px] font-semibold text-white shadow-[0_12px_30px_-10px_rgb(0_200_150/0.7)] hover:-translate-y-0.5 transition">
              Meet our doctors <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="#story" className="inline-flex items-center rounded-full border border-border px-6 py-3 text-[14px] font-semibold hover:bg-secondary/60 transition">
              Our story
            </a>
          </div>
        </PageHero>

        {/* OUR STORY */}
        <section id="story" className="relative py-20 md:py-28">
          <div className="mx-auto max-w-[1440px] px-6 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden shadow-[0_30px_80px_-30px_rgb(15_118_110/0.35)]"
            >
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80"
                alt="MediNova AI hospital"
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-5 flex items-center gap-4">
                <Sparkles className="h-6 w-6 text-primary" />
                <div>
                  <p className="text-[13px] font-semibold">Trusted since 2012</p>
                  <p className="text-[12px] text-muted-foreground">A decade of digital-first healthcare.</p>
                </div>
              </div>
            </motion.div>

            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Our Story</p>
              <h2 className="mt-3 font-display text-[36px] md:text-[44px] font-bold leading-[1.1]">
                Our Journey Towards <span className="text-gradient">Smarter Healthcare</span>
              </h2>
              <p className="mt-5 text-[16px] text-muted-foreground leading-relaxed">
                MediNova AI was created with a vision to make healthcare more accessible, transparent and technology-driven.
                By combining experienced specialists with digital innovation, we provide personalized care that focuses on
                prevention, treatment and long-term wellness.
              </p>

              {/* timeline */}
              <ol className="mt-10 relative border-l-2 border-primary/20 pl-6 space-y-8">
                {timeline.map((t, i) => (
                  <motion.li
                    key={t.year}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: i * 0.08 }}
                    className="relative"
                  >
                    <span className="absolute -left-[34px] top-1 h-5 w-5 rounded-full bg-gradient-to-br from-primary to-accent shadow-[0_0_0_4px_rgb(232_255_247)]" />
                    <div className="flex items-baseline gap-3">
                      <span className="num font-display text-[18px] font-bold text-primary">{t.year}</span>
                      <span className="font-display text-[16px] font-semibold">{t.title}</span>
                    </div>
                    <p className="mt-1 text-[14px] text-muted-foreground">{t.text}</p>
                  </motion.li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="relative py-16 md:py-20">
          <div className="mx-auto max-w-[1440px] px-6 grid md:grid-cols-2 gap-6">
            {[
              { icon: Heart, title: "Mission", text: "Deliver patient-centered healthcare through innovation, compassion and medical excellence." },
              { icon: Eye, title: "Vision", text: "Become India's most trusted digital healthcare ecosystem where every patient receives accessible, affordable and intelligent care." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="glass rounded-3xl p-8 md:p-10 relative overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-primary/10 blur-2xl" />
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-[0_10px_25px_-8px_rgb(0_200_150/0.6)]">
                  <item.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mt-6 font-display text-[26px] font-bold">{item.title}</h3>
                <p className="mt-3 text-[15px] text-muted-foreground leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="relative py-20 md:py-28">
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="text-center mb-14">
              <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Core Values</p>
              <h2 className="mt-3 font-display text-[36px] md:text-[48px] font-bold tracking-tight max-w-[720px] mx-auto leading-[1.1]">
                What we <span className="text-gradient">stand for</span>.
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="rounded-3xl bg-white border border-border/70 p-7 shadow-[0_10px_40px_-20px_rgb(15_118_110/0.2)] hover:shadow-[0_30px_60px_-20px_rgb(0_200_150/0.35)] transition"
                >
                  <div className="h-12 w-12 rounded-2xl bg-secondary flex items-center justify-center">
                    <v.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-5 font-display text-[19px] font-semibold">{v.title}</h3>
                  <p className="mt-2 text-[14.5px] text-muted-foreground leading-relaxed">{v.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY TRUST US - STATS */}
        <section className="relative py-16 md:py-20">
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="glass rounded-[36px] p-10 md:p-14 relative overflow-hidden">
              <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
              <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
              <div className="text-center mb-10 relative">
                <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Why Patients Trust Us</p>
                <h2 className="mt-3 font-display text-[32px] md:text-[42px] font-bold tracking-tight">
                  Numbers that speak <span className="text-gradient">for themselves</span>.
                </h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
                {stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="font-display text-[42px] md:text-[54px] font-bold text-gradient leading-none">
                      <Counter value={s.value} suffix={s.suffix} />
                    </div>
                    <p className="mt-2 text-[14px] text-muted-foreground font-medium">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* LEADERSHIP */}
        <section className="relative py-20 md:py-28">
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="text-center mb-14">
              <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Our Leadership</p>
              <h2 className="mt-3 font-display text-[36px] md:text-[48px] font-bold tracking-tight leading-[1.1]">
                Meet the team leading <span className="text-gradient">MediNova AI</span>.
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {leaders.map((l, i) => (
                <motion.div
                  key={l.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="rounded-3xl bg-white border border-border/70 overflow-hidden shadow-[0_10px_40px_-20px_rgb(15_118_110/0.2)] hover:shadow-[0_30px_60px_-20px_rgb(0_200_150/0.35)] transition"
                >
                  <div className="h-[260px] overflow-hidden bg-secondary">
                    <img src={l.photo} alt={l.name} loading="lazy" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-[17px] font-semibold">{l.name}</h3>
                    <p className="text-[13px] text-primary font-medium mt-0.5">{l.role}</p>
                    <p className="text-[13px] text-muted-foreground mt-2 leading-relaxed">{l.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="relative py-16">
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="text-center mb-10">
              <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Certifications</p>
              <h2 className="mt-3 font-display text-[28px] md:text-[36px] font-bold tracking-tight">
                Accredited by the world's leading healthcare bodies.
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {certifications.map((c) => (
                <div key={c} className="glass rounded-2xl px-6 py-8 text-center">
                  <ShieldCheck className="h-8 w-8 text-primary mx-auto" />
                  <p className="mt-3 font-display text-[15px] font-semibold">{c}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative py-20 md:py-28">
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-primary to-accent p-10 md:p-16 text-white shadow-[0_40px_100px_-30px_rgb(0_200_150/0.6)]">
              <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
              <div className="relative max-w-2xl">
                <h2 className="font-display text-[32px] md:text-[44px] font-bold leading-[1.1]">
                  Ready to experience healthcare that puts you first?
                </h2>
                <p className="mt-4 text-white/85 text-[16px]">
                  Book an appointment with a specialist or explore our doctors — care starts with a single step.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <button type="button" onClick={() => openBookingModal()} className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-6 py-3 text-[14px] font-semibold hover:-translate-y-0.5 transition">
                    <Calendar className="h-4 w-4" /> Book Appointment
                  </button>
                  <Link to="/doctors" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-[14px] font-semibold hover:bg-white/10 transition">
                    Meet our doctors <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
      <FloatingActions />
    </>
  );
}
