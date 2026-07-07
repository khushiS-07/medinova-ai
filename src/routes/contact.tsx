import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, MapPin, Phone, Mail, Clock, Siren, CheckCircle2, MessageSquare } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { FloatingActions } from "@/components/site/FloatingActions";
import { PageHero } from "@/components/site/PageHero";
import { FAQ } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — MediNova AI" },
      { name: "description", content: "Reach the MediNova AI team. Hospital address, emergency numbers, department contacts and 24×7 support." },
      { property: "og:title", content: "Contact — MediNova AI" },
      { property: "og:description", content: "Contact MediNova AI — 24×7 support, emergency numbers and department lines." },
    ],
  }),
  component: ContactPage,
});

const hours = [
  { day: "Monday – Friday", time: "8:00 AM – 10:00 PM" },
  { day: "Saturday", time: "9:00 AM – 8:00 PM" },
  { day: "Sunday", time: "10:00 AM – 6:00 PM" },
  { day: "Emergency", time: "Open 24×7" },
];

const emergency = [
  { label: "Ambulance", number: "+91 1800 200 100" },
  { label: "Emergency Room", number: "+91 1800 200 200" },
  { label: "Poison Control", number: "+91 1800 200 300" },
];

const departmentContacts = [
  { name: "Cardiology", phone: "+91 1800 210 001", email: "cardio@medinova.ai" },
  { name: "Neurology", phone: "+91 1800 210 002", email: "neuro@medinova.ai" },
  { name: "Pediatrics", phone: "+91 1800 210 003", email: "pediatrics@medinova.ai" },
  { name: "Orthopedics", phone: "+91 1800 210 004", email: "ortho@medinova.ai" },
  { name: "Gynecology", phone: "+91 1800 210 005", email: "gynec@medinova.ai" },
  { name: "Dermatology", phone: "+91 1800 210 006", email: "derma@medinova.ai" },
];

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setSent(true);
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 500);
  };

  const input = "w-full rounded-2xl bg-white border border-border px-4 py-3 text-[14px] focus:outline-none focus:border-primary transition";
  const label = "block text-[12px] font-semibold uppercase tracking-[0.14em] text-foreground/70 mb-1.5";

  return (
    <>
      <ScrollProgress />
      <main className="min-h-screen bg-background text-foreground">
        <Navbar />

        <PageHero
          eyebrow="Contact Us"
          title={<>Let's talk about <span className="text-gradient">your care</span>.</>}
          subtitle="Our patient coordinators are available 24×7 to help you book appointments, answer questions and coordinate emergency care."
        />

        {/* Quick contact strip */}
        <section className="relative pb-4">
          <div className="mx-auto max-w-[1440px] px-6 grid md:grid-cols-3 gap-4">
            {[
              { icon: Phone, title: "Call us", value: "+91 1800 200 100", sub: "24×7 patient support" },
              { icon: Mail, title: "Email us", value: "hello@medinova.ai", sub: "We reply within 2 hours" },
              { icon: MapPin, title: "Visit us", value: "MediNova Central, Mumbai", sub: "Plus 12 city centers" },
            ].map((c) => (
              <div key={c.title} className="glass rounded-3xl p-6 flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
                  <c.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-[12px] uppercase tracking-widest text-muted-foreground">{c.title}</p>
                  <p className="font-display text-[15px] font-semibold">{c.value}</p>
                  <p className="text-[12px] text-muted-foreground">{c.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form + Address */}
        <section className="relative py-20">
          <div className="mx-auto max-w-[1440px] px-6 grid lg:grid-cols-5 gap-8">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-3 rounded-[32px] bg-white border border-border p-8 md:p-10 shadow-[0_30px_80px_-30px_rgb(15_118_110/0.35)]"
            >
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-white" />
                </span>
                <div>
                  <h2 className="font-display text-[22px] font-bold">Send us a message</h2>
                  <p className="text-[13px] text-muted-foreground">We reply within 2 business hours.</p>
                </div>
              </div>

              {sent ? (
                <div className="mt-10 flex flex-col items-center text-center py-10">
                  <CheckCircle2 className="h-14 w-14 text-primary" />
                  <h3 className="mt-4 font-display text-[22px] font-bold">Message sent successfully</h3>
                  <p className="mt-2 text-[14px] text-muted-foreground">Our team will get back to you shortly.</p>
                  <button onClick={() => setSent(false)} className="mt-6 rounded-full border border-border px-5 py-2.5 text-[13px] font-semibold hover:bg-secondary/60 transition">Send another message</button>
                </div>
              ) : (
                <form onSubmit={submit} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className={label}>Full Name</label>
                    <input required maxLength={100} className={input} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Jane Doe" />
                  </div>
                  <div>
                    <label className={label}>Email</label>
                    <input required type="email" maxLength={255} className={input} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="jane@email.com" />
                  </div>
                  <div>
                    <label className={label}>Phone</label>
                    <input type="tel" maxLength={20} className={input} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 98765 43210" />
                  </div>
                  <div>
                    <label className={label}>Subject</label>
                    <input required maxLength={120} className={input} value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="How can we help?" />
                  </div>
                  <div className="md:col-span-2">
                    <label className={label}>Message</label>
                    <textarea required rows={5} maxLength={2000} className={input + " resize-none"} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us more..." />
                  </div>
                  <div className="md:col-span-2 flex justify-end">
                    <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-7 py-3 text-[14px] font-semibold text-white shadow-[0_12px_30px_-10px_rgb(0_200_150/0.7)] hover:-translate-y-0.5 transition">
                      Send message <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Address + hours */}
            <div className="lg:col-span-2 space-y-6">
              <div className="rounded-[28px] bg-white border border-border p-7">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h3 className="font-display text-[18px] font-bold">Main Hospital</h3>
                </div>
                <p className="mt-3 text-[14px] text-muted-foreground leading-relaxed">
                  MediNova Central Hospital<br />
                  221 Marine Drive, Nariman Point<br />
                  Mumbai, Maharashtra 400021<br />
                  India
                </p>
              </div>

              <div className="rounded-[28px] bg-white border border-border p-7">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="font-display text-[18px] font-bold">Office Hours</h3>
                </div>
                <ul className="mt-3 divide-y divide-border/60">
                  {hours.map((h) => (
                    <li key={h.day} className="flex items-center justify-between py-2.5 text-[13.5px]">
                      <span className="text-muted-foreground">{h.day}</span>
                      <span className="font-semibold">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[28px] p-7 text-white bg-gradient-to-br from-primary to-accent shadow-[0_20px_50px_-20px_rgb(0_200_150/0.55)]">
                <div className="flex items-center gap-3">
                  <Siren className="h-5 w-5" />
                  <h3 className="font-display text-[18px] font-bold">Emergency Numbers</h3>
                </div>
                <ul className="mt-3 divide-y divide-white/20">
                  {emergency.map((e) => (
                    <li key={e.label} className="flex items-center justify-between py-2.5 text-[13.5px]">
                      <span className="opacity-90">{e.label}</span>
                      <a href={`tel:${e.number.replace(/\s/g, "")}`} className="font-semibold underline underline-offset-2">{e.number}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="relative pb-16">
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="rounded-[32px] overflow-hidden border border-border h-[380px] relative bg-secondary/40">
              <div className="absolute inset-0 opacity-40" style={{
                backgroundImage: "linear-gradient(rgba(0,200,150,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,150,.15) 1px, transparent 1px)",
                backgroundSize: "56px 56px",
              }} />
              <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_50%_50%,rgb(0_200_150/0.15),transparent_70%)]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-[0_20px_50px_-15px_rgb(0_200_150/0.7)] animate-float">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <p className="mt-4 font-display text-[18px] font-semibold">MediNova Central Hospital</p>
                <p className="text-[13px] text-muted-foreground">221 Marine Drive · Mumbai 400021</p>
                <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-full bg-white border border-border px-5 py-2.5 text-[13px] font-semibold hover:bg-secondary/60 transition">
                  Open in Maps <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Department Contacts */}
        <section className="relative py-16" style={{ backgroundColor: "var(--color-surface-alt)" }}>
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="text-center mb-10 max-w-2xl mx-auto">
              <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary">Department Contacts</p>
              <h2 className="mt-3 font-display text-[28px] md:text-[36px] font-bold">Reach the right team directly.</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {departmentContacts.map((d, i) => (
                <motion.div
                  key={d.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                  className="rounded-3xl bg-white border border-border p-6"
                >
                  <h3 className="font-display text-[17px] font-semibold">{d.name}</h3>
                  <p className="mt-3 text-[13.5px] text-muted-foreground inline-flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-primary" /> <a href={`tel:${d.phone.replace(/\s/g, "")}`} className="hover:text-foreground">{d.phone}</a></p>
                  <p className="mt-1 text-[13.5px] text-muted-foreground inline-flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-primary" /> <a href={`mailto:${d.email}`} className="hover:text-foreground">{d.email}</a></p>
                </motion.div>
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
